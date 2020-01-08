const https = require('https');
const querystring = require('querystring');

let get = (url, queryParams = {}) =>
	new Promise((resolve, reject) => {
		https.get(`${url}?${querystring.stringify(queryParams)}`, res => {
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

let post = (url, data) =>
	new Promise((resolve, reject) => {
		let req = https.request(url, {
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

let start = async query => {
	try {
		let api = 'https://www.pathofexile.com/api/trade';
		let data = await post(`${api}/search/Metamorph`, query);

		let requestGroups = [];
		while (data.result.length)
			requestGroups.push(data.result.splice(0, 10));

		let promises = requestGroups.map(async requestGroup => {
			let queryParams = {
				query: data.id,
				'pseudos[]': [PROPERTIES.totalEleRes, PROPERTIES.flatLife],
			};
			let url2 = `${api}/fetch/${requestGroup.join()}`;
			let data2 = await get(url2, queryParams);
			return data2.result.map(item => {
				let sockets = (item.item.sockets || []).reduce((a, v) => {
					a[v.group] = a[v.group] || [];
					a[v.group].push(v.sColour);
					return a;
				}, []);
				let pseudoMods = item.item.pseudoMods;
				return {
					name: item.item.name,
					sockets,
					itemLevel: item.item.ilvl,
					explicitMods: item.item.explicitMods,
					pseudoMods: pseudoMods,
					value: pseudoMods && pseudoMods.find(mod => mod.startsWith('Sum: ')),
					account: `${item.listing.account.name} > ${item.listing.account.lastCharacterName}`,
					whisper: item.listing.whisper,
					note: item.item.note,
					price: item.listing.price,
				};
			});
		});
		let items = (await Promise.all(promises)).flat();

		for (let i = 0; i < 3; i++)
			console.log(JSON.stringify(items[parseInt(Math.random() * i)], null, 2));
		// console.log(JSON.stringify(items.find(item => item.pseudoMods), null, 2));
		console.log('total items', items.length);

		return {
			total: data.total,
		}
	} catch (e) {
		console.log('ERROR', e);
	}
};

let weights = {
	[PROPERTIES.flatLife]: 2,
	[PROPERTIES.totalEleRes]: 5,
};
let query = formQuery(TYPES.boots, weights, 500, 2, SORT.value);
start(query);


// ui to form and persist query
// convert armor and socket requirements to fuzzy query
// parse query results into items, values, and prices
// display parsed results and graph value v price
// filter top value/price items
