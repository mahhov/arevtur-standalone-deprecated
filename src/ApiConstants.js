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
	fusing: {id: 'fuse', chaos: 1 / 2},
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

module.exports = {TYPES, PROPERTIES, SORT, CURRENCIES};
