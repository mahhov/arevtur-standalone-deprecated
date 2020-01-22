const https = require('https');
const querystring = require('querystring');
const ApiConstants = require('./ApiConstants');

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

// param weights {property: weight, ...}
// param ands {property: min, ...}
// param nots {property: undefined, ...}
let formQuery = (type, weights, ands = {}, nots = {},
                 minValue = 0, maxPrice = 100, linked = false,
                 sort = ApiConstants.SORT.value, online = true) => {
	let weightFilters = Object.entries(weights).map(([property, weight]) => ({
		id: property,
		value: {weight},
	}));
	let andFilters = Object.entries(ands).map(([property, min]) => ({
		id: property,
		value: {min},
	}));
	let notFilters = Object.entries(nots).map(([property]) => ({
		id: property,
	}));
	if (!weightFilters.length)
		sort = ApiConstants.SORT.price;
	return {
		query: {
			status: {option: online ? 'online' : 'any'},
			stats: [
				{
					type: 'weight',
					filters: weightFilters,
					value: {min: minValue},
				}, {
					type: 'and',
					filters: andFilters,
				}, {
					type: 'not',
					filters: notFilters,
				}
			],
			filters: {
				type_filters: {
					filters: {
						category: {option: type}
					}
				},
				trade_filters: {
					filters: {
						price: {max: maxPrice}
					}
				},
				socket_filters: {
					filters: {
						links: {min: 6}
					},
					disabled: !linked
				}
			}
		},
		sort,
	}
};

let getItems = async (query, progressCallback) => {
	try {
		let api = 'https://www.pathofexile.com/api/trade';
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
			let data2 = await get(endpoint2, queryParams);
			progressCallback(`Received grouped item query # ${i}.`, (1 + ++receivedCount) / (requestGroups.length + 1));
			return data2.result.map(parseItem);
		});
		let items = (await Promise.all(promises)).flat();
		progressCallback('All grouped item queries completed.', 1);
		return items;
	} catch (e) {
		console.log('ERROR', e);
		return [];
	}
};

let parseItem = itemData => {
	let sockets = (itemData.item.sockets || []).reduce((a, v) => {
		a[v.group] = a[v.group] || [];
		a[v.group].push(v.sColour);
		return a;
	}, []);
	let pseudoMods = itemData.item.pseudoMods || [];
	return {
		id: itemData.id,
		name: itemData.item.name,
		sockets,
		itemLevel: itemData.item.ilvl,
		implicitMods: itemData.item.implicitMods || [],
		explicitMods: itemData.item.explicitMods || [],
		pseudoMods: pseudoMods,
		accountText: `${itemData.listing.account.name} > ${itemData.listing.account.lastCharacterName}`,
		whisper: itemData.listing.whisper,
		note: itemData.item.note,
		priceText: `${itemData.listing.price.amount} ${itemData.listing.price.currency}`,
		evalValue: evalValue(pseudoMods),
		evalPrice: evalPrice(itemData.listing.price),
	};
};

let evalValue = pseudoMods => {
	let pseudoSum = pseudoMods.find(mod => mod.startsWith('Sum: '));
	return pseudoSum ? parseFloat(pseudoSum.substring(5)) : 0;
};

let evalPrice = ({currency: currencyId, amount}) => {
	let currency = Object.values(ApiConstants.CURRENCIES).find(({id}) => id === currencyId);
	if (currency)
		return currency.chaos * amount;
	console.log('Missing currency', currencyId);
	return -1;
};

module.exports = {formQuery, getItems};
