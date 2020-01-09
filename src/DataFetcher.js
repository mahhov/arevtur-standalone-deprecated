const https = require('https');
const querystring = require('querystring');

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

const TYPES = {
	anyWeapon: 'weapon',
	oneHandedWeapon: 'weapon.one',
	oneHandedMeleeWeapon: 'weapon.onemelee',
	twoHandedMeleeWeapon: 'weapon.twomelee',
	bow: 'weapon.bow',
	claw: 'weapon.claw',
	anyDagger: 'weapon.dagger',
	runeDagger: 'weapon.runedagger',
	oneHandedAxe: 'weapon.oneaxe',
	oneHandedMace: 'weapon.onemace',
	oneHandedSword: 'weapon.onesword',
	sceptre: 'weapon.sceptre',
	anyStaff: 'weapon.staff',
	warstaff: 'weapon.warstaff',
	twoHandedAxe: 'weapon.twoaxe',
	twoHandedMace: 'weapon.twomace',
	twoHandedSword: 'weapon.twosword',
	wand: 'weapon.wand',
	fishingRod: 'weapon.rod',
	anyArmour: 'armour',
	bodyArmour: 'armour.chest',
	boots: 'armour.boots',
	gloves: 'armour.gloves',
	helmet: 'armour.helmet',
	shield: 'armour.shield',
	quiver: 'armour.quiver',
	anyAccessory: 'accessory',
	amulet: 'accessory.amulet',
	belt: 'accessory.belt',
	ring: 'accessory.ring',
	anyJewel: 'jewel',
	abyssJewel: 'jewel.abyss',
};

const PROPERTIES = {
	totalEleRes: 'pseudo.pseudo_total_elemental_resistance',
	flatLife: 'pseudo.pseudo_total_life',
};

const SORT = {
	value: {'statgroup.0': 'desc'},
	price: {price: 'asc'},
};

// todo update per poe.ninja
const CURRENCIES = {
	exalted: {id: 'exa', chaos: 130},
	divine: {id: 'divine', chaos: 12},
	vaal: {id: 'vaal', chaos: 2},
	regal: {id: 'regal', chaos: 1},
	chaos: {id: 'chaos', chaos: 1},
	gemcuttersPrism: {id: 'gcp', chaos: 1},
	regret: {id: 'regret', chaos: 1},
	fusing: {id: 'fusing', chaos: 1 / 2},
	alchemy: {id: 'alch', chaos: 1 / 2},
	scouring: {id: 'scour', chaos: 1 / 2},
	cartographersChisel: {id: 'chisel', chaos: 1 / 2},
	blessed: {id: 'blessed', chaos: 1 / 2},
	silver: {id: 'silver', chaos: 1 / 3},
	jewellers: {id: 'jew', chaos: 1 / 6},
	chromatic: {id: 'chrom', chaos: 1 / 8},
	alteration: {id: 'alt', chaos: 1 / 8},
	chance: {id: 'chance', chaos: 1 / 8},
	perandus: {id: 'p', chaos: 1 / 100},
};

let formQuery = (type, weightValues,
                 minValue = 200, maxPrice = 20,
                 sort = SORT.value, online = true) => {
	let weightFilters = Object.entries(weightValues).map(([property, weight]) => ({
		id: property,
		value: {weight},
		disabled: false
	}));
	return {
		query: {
			status: {
				option: online ? 'online' : 'any'
			},
			stats: [
				{
					type: 'weight',
					filters: weightFilters,
					value: {
						min: minValue
					}
				}
			],
			filters: {
				type_filters: {
					disabled: false,
					filters: {
						category: {
							option: type
						}
					}
				},
				trade_filters: {
					disabled: false,
					filters: {
						price: {
							max: maxPrice
						}
					}
				}

			}
		},
		sort,
	}
};

let getItems = async (query, progressCallback) => {
	try {
		let api = 'https://www.pathofexile.com/api/trade';
		progressCallback('Initial query.');
		let data = await post(`${api}/search/Metamorph`, query);
		progressCallback(`Received ${data.result.length} items.`);

		let requestGroups = [];
		while (data.result.length)
			requestGroups.push(data.result.splice(0, 10));
		progressCallback(`Will make ${requestGroups.length} grouped item queries.`);

		let promises = requestGroups.map(async (requestGroup, i) => {
			let queryParams = {
				query: data.id,
				'pseudos[]': [PROPERTIES.totalEleRes, PROPERTIES.flatLife],
			};
			let endpoint2 = `${api}/fetch/${requestGroup.join()}`;
			let data2 = await get(endpoint2, queryParams);
			progressCallback(`Received grouped item query # ${i}.`);
			return data2.result.map(parseItem);
		});
		let items = (await Promise.all(promises)).flat();
		progressCallback('All grouped item queries completed.');
		// low to high prices, high to low values
		items.sort((a, b) => a.evalPrice - b.evalPrice || b.evalValue - a.evalValue);
		progressCallback('Items sorted.');

		return {
			total: data.total,
			retrieved: items.length,
			items,
			borderlineItems: getBorderlineItems(items),
		}
	} catch (e) {
		console.log('ERROR', e);
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
	let currency = Object.values(CURRENCIES).find(({id}) => id === currencyId);
	if (currency)
		return currency.chaos * amount;
	console.log('Missing currency', currencyId);
	return -1;
};

let getBorderlineItems = items => {
	let maxValue = 0;
	return items.filter((item, i, items) => {
		if (item.evalValue <= maxValue)
			return false;
		maxValue = item.evalValue;
		return true;
	});
};

module.exports = {TYPES, PROPERTIES, SORT, CURRENCIES, formQuery, getItems};
