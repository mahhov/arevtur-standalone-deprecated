const https = require('https');
const querystring = require('querystring');
const RateLimitedRetryQueue = require('./RateLimitedRetryQueue');
const ApiConstants = require('./ApiConstants');
const Stream = require('./Stream');

let get = (endpoint, queryParams = {}) =>
	new Promise((resolve, reject) => {
		https.get(`${endpoint}?${querystring.stringify(queryParams)}`, res => {
			if (res.statusCode < 200 || res.statusCode >= 300)
				reject(res);
			let body = [];
			res.on('data', chunk => body.push(chunk));
			res.on('end', () => {
				try {
					body = JSON.parse(Buffer.concat(body).toString());
				} catch (e) {
					reject(e);
				}
				resolve(body);
			});
		}).on('error', reject);
	});

let getQueue = new RateLimitedRetryQueue();
let rlrGet = (endpoint, queryParams = {}) => getQueue.add(() => get(endpoint, queryParams));

let post = (endpoint, data) =>
	new Promise((resolve, reject) => {
		let req = https.request(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Content-Length': JSON.stringify(data).length,
			},
		}, res => {
			if (res.statusCode < 200 || res.statusCode >= 300)
				reject(res.statusCode);
			let body = [];
			res.on('data', chunk => body.push(chunk));
			res.on('end', () => {
				try {
					body = JSON.parse(Buffer.concat(body).toString());
				} catch (e) {
					reject('failed to parse', e);
				}
				resolve(body);
			});
		});
		req.on('error', reject);
		req.write(JSON.stringify(data));
		req.end();
	});

class QueryParams {
	constructor(clone = {}) {
		this.type = '';
		this.minValue = clone.minValue || 0;
		this.maxPrice = clone.maxPrice || 0;
		this.defenseProperties = clone.defenseProperties || {
			armour: {min: 0, weight: 0},
			evasion: {min: 0, weight: 0},
			energyShield: {min: 0, weight: 0},
		};
		this.linked = clone.linked || false;
		// {property: weight, ...}
		this.weights = clone.weights || {};
		// {property: min, ...}
		this.ands = clone.ands || {};
		// {property: undefined, ...}
		this.nots = clone.nots || {};
		this.sort = clone.sort || ApiConstants.SORT.value;
		this.online = clone.online || false;
		this.priceShift = clone.priceShift || 0;
	}

	getQuery(overrides = {}) {
		let overridden = {...this, ...overrides};
		let weightFilters = Object.entries(overridden.weights).map(([property, weight]) => ({
			id: property,
			value: {weight},
		}));
		let andFilters = Object.entries(overridden.ands).map(([property, min]) => ({
			id: property,
			value: {min},
		}));
		let notFilters = Object.entries(overridden.nots).map(([property]) => ({
			id: property,
		}));
		let sort = weightFilters.length ? overridden.sort : ApiConstants.SORT.price;
		return {
			query: {
				status: {option: overridden.online ? 'online' : 'any'},
				stats: [
					{
						type: 'weight',
						filters: weightFilters,
						value: {min: overridden.minValue},
					}, {
						type: 'and',
						filters: andFilters,
					}, {
						type: 'not',
						filters: notFilters,
					},
				],
				filters: {
					type_filters: {
						filters: {
							category: {option: overridden.type}
						}
					},
					trade_filters: {
						filters: {
							price: {max: overridden.maxPrice}
						}
					},
					socket_filters: {
						filters: {
							links: {min: 6}
						},
						disabled: !overridden.linked
					},
					armour_filters: {
						filters: {
							ar: {min: overridden.defenseProperties.armour.min},
							ev: {min: overridden.defenseProperties.evasion.min},
							es: {min: overridden.defenseProperties.energyShield.min},
						}
					},
				}
			},
			sort,
		}
	}

	overrideDefenseProperty(name, min) {
		return {
			defenseProperties: {
				...this.defenseProperties,
				[name]: {
					...this.defenseProperties[name],
					min,
				}
			}
		}
	}

	getItemsStream(progressCallback) {
		let stream = new Stream();
		this.writeItemsToStream(stream, progressCallback)
			.then(() => stream.done());
		return stream;
	}

	async writeItemsToStream(stream, progressCallback) {
		let items = await this.queryAndParseItems(this.getQuery(), progressCallback);
		stream.write(items);

		let defenseProperty = Object.entries(this.defenseProperties).find(([_, {weight}]) => weight);
		if (defenseProperty) {
			let newItems = items;
			let lastMinDefensePropertyValue = 0;
			do {
				let newItemsMinValue = Math.min(...newItems.map(({evalValue}) => evalValue));
				let maxValue = Math.max(...items.map(({evalValue}) => evalValue));
				let minValueExcludingDefenseProperties = Math.min(...items.map(({valueExcludingProperties}) => valueExcludingProperties));
				let minDefensePropertyValue = ((maxValue + newItemsMinValue) / 2 - minValueExcludingDefenseProperties) / defenseProperty[1].weight;

				minDefensePropertyValue = Math.max(minDefensePropertyValue, lastMinDefensePropertyValue + 1);
				lastMinDefensePropertyValue = minDefensePropertyValue;

				let overrides = this.overrideDefenseProperty(defenseProperty[0], minDefensePropertyValue);
				let query = this.getQuery(overrides);
				newItems = await this.queryAndParseItems(query, progressCallback);
				items = items.concat(newItems);
				stream.write(items);
			} while (newItems.length > 0);
		}

		return items;
	}

	async queryAndParseItems(query, progressCallback) {
		try {
			const api = 'https://www.pathofexile.com/api/trade';
			progressCallback('Initial query.', 0);
			let data = await post(`${api}/search/Metamorph`, query);
			progressCallback(`Received ${data.result.length} items.`, 0);

			let requestGroups = [];
			while (data.result.length)
				requestGroups.push(data.result.splice(0, 10));
			progressCallback(`Will make ${requestGroups.length} grouped item queries.`, 1 / (requestGroups.length + 1));

			let receivedCount = 0;
			let promises = requestGroups.map(async (requestGroup, i) => {
				let queryParams = {
					query: data.id,
					'pseudos[]': [ApiConstants.SHORT_PROPERTIES.totalEleRes, ApiConstants.SHORT_PROPERTIES.flatLife],
				};
				let endpoint2 = `${api}/fetch/${requestGroup.join()}`;
				let data2 = await rlrGet(endpoint2, queryParams);
				progressCallback(`Received grouped item query # ${i}.`, (1 + ++receivedCount) / (requestGroups.length + 1));
				return data2.result.map(itemData => this.parseItem(itemData));
			});
			let items = (await Promise.all(promises)).flat();
			progressCallback('All grouped item queries completed.', 1);
			return items;
		} catch (e) {
			console.warn('ERROR', e);
			return [];
		}
	}

	parseItem(itemData, parsingOptions) {
		let sockets = (itemData.item.sockets || []).reduce((a, v) => {
			a[v.group] = a[v.group] || [];
			a[v.group].push(v.sColour);
			return a;
		}, []);
		let defenseProperties =
			[
				['ar', 'armour'],
				['ev', 'evasion'],
				['es', 'energyShield'],
			].map(([responseName, fullName]) => [fullName, itemData.item.extended[responseName] || 0])
				.filter(([_, value]) => value);
		let pseudoMods = itemData.item.pseudoMods || [];
		let priceShift = this.priceShift || 0;
		let valueExcludingProperties = evalValue(pseudoMods);

		return {
			id: itemData.id,
			name: itemData.item.name,
			sockets,
			itemLevel: itemData.item.ilvl,
			defenseProperties: defenseProperties.map(nameValue => nameValue.join(' ')),
			implicitMods: itemData.item.implicitMods || [],
			explicitMods: itemData.item.explicitMods || [],
			pseudoMods: pseudoMods,
			accountText: `${itemData.listing.account.name} > ${itemData.listing.account.lastCharacterName}`,
			whisper: itemData.listing.whisper,
			note: itemData.item.note,
			// todo change text to: 3 fus + fated links (#c)
			priceText: `${itemData.listing.price.amount} ${itemData.listing.price.currency}${priceShift ? ` + ${priceShift}` : ''}`,
			valueExcludingProperties: valueExcludingProperties,
			evalValue: valueExcludingProperties + evalPropertyValues(defenseProperties, this.defenseProperties),
			evalPrice: evalPrice(itemData.listing.price) + priceShift,
			debug: itemData,
		};
	};
}

let evalPropertyValues = (itemDefenseProperties, queryDefenseProperties) =>
	itemDefenseProperties
		.map(([name, value]) => value * queryDefenseProperties[name].weight)
		.reduce((sum, v) => sum + v);

let evalValue = pseudoMods => {
	let pseudoSum = pseudoMods.find(mod => mod.startsWith('Sum: '));
	return pseudoSum ? parseFloat(pseudoSum.substring(5)) : 0;
};

let evalPrice = ({currency: currencyId, amount}) => {
	let currency = Object.values(ApiConstants.CURRENCIES).find(({id}) => id === currencyId);
	if (currency)
		return currency.chaos * amount;
	console.warn('Missing currency', currencyId);
	return -1;
};

module.exports = {QueryParams};
