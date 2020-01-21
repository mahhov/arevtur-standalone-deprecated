const {XElement, importUtil} = require('xx-element');
const {template, name} = importUtil(__filename);
const ItemsData = require('../../ItemsData');

customElements.define(name, class Inputs extends XElement {
	static get attributeTypes() {
		return {};
	}

	static get htmlTemplate() {
		return template;
	}

	connectedCallback() {
		this.itemsData = new ItemsData();
		this.$('#results-chart').background = 'rgb(245,245,245)';

		this.$('#results-chart').addEventListener('action', e =>
			this.emit('submit', {overridePrice: e.detail.x || null}));

		this.$('#results-chart').addEventListener('select', async e => {
			let itemIndex = this.itemsData.itemIndexByRange(e.detail.y, e.detail.x, e.detail.height, e.detail.width);
			if (itemIndex !== -1) {
				this.itemsData.selectItem(itemIndex);
				this.renderItemsData(true);
				this.$('#results-list').children[itemIndex].scrollIntoView({block: 'nearest'});
			}
		});

		this.$('#results-chart').addEventListener('hover', async e => {
			let itemIndex = e.detail &&
				this.itemsData.itemIndexByRange(e.detail.y, e.detail.x, e.detail.height, e.detail.width);
			this.itemsData.hoverItem(itemIndex);
			this.renderItemsData(true);
		});

		// debugging only
		this.itemsData.join([
			{
				"id": "cfda76976df1ad3dc3cf53dd710fec68c577214a68045cfc21be766bafe00b7a",
				"name": "Dread March",
				"sockets": [
					[
						"B"
					]
				],
				"itemLevel": 72,
				"implicitMods": [],
				"explicitMods": [
					"+29 to Strength",
					"51% increased Armour and Evasion",
					"+82 to maximum Life",
					"+8% to Fire Resistance",
					"+44% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +52% total Elemental Resistance",
					"(pseudo) +96.5 total maximum Life",
					"Sum: 245"
				],
				"accountText": "Axesor > NoMoreArcBuildsPlz",
				"whisper": "@NoMoreArcBuildsPlz Hi, I would like to buy your Dread March Hydrascale Boots listed for 15 chaos in Metamorph (stash tab \"S\"; position: left 3, top 23)",
				"note": "~b/o 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 245,
				"evalPrice": 15,
				"selected": false
			},
			{
				"id": "9e6b9095eef181aa74833177d4c633ca0fe98314e0a5e6d438f92714a16f6af3",
				"name": "Demon Road",
				"sockets": [
					[
						"R",
						"R"
					]
				],
				"itemLevel": 70,
				"implicitMods": [],
				"explicitMods": [
					"+37 to Strength",
					"16% increased Armour",
					"+84 to maximum Life",
					"+40% to Fire Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +40% total Elemental Resistance",
					"(pseudo) +102.5 total maximum Life",
					"Sum: 245"
				],
				"accountText": "fredycjf > SSKTox",
				"whisper": "@SSKTox Hi, I would like to buy your Demon Road Goliath Greaves listed for 32 chaos in Metamorph (stash tab \"17\"; position: left 1, top 5)",
				"note": "~price 32 chaos",
				"priceText": "32 chaos",
				"evalValue": 245,
				"evalPrice": 32,
				"selected": false
			},
			{
				"id": "5a5b8fafa207ac2b6bdec20d251e4cd3d97ffeba5fd6f8c8ed9dfaaeb68eb221",
				"name": "Invasion Urge",
				"sockets": [
					[
						"B",
						"B"
					]
				],
				"itemLevel": 75,
				"implicitMods": [],
				"explicitMods": [
					"+19 to Armour",
					"+103 to maximum Life",
					"+38% to Fire Resistance",
					"30% increased Movement Speed",
					"13% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +38% total Elemental Resistance",
					"(pseudo) +103 total maximum Life",
					"Sum: 244"
				],
				"accountText": "13206481369 > chenyue_ME",
				"whisper": "@chenyue_ME Hi, I would like to buy your Invasion Urge Legion Boots listed for 20 chaos in Metamorph (stash tab \"~price 20 chaos\"; position: left 1, top 11)",
				"priceText": "20 chaos",
				"evalValue": 244,
				"evalPrice": 20,
				"selected": false
			},
			{
				"id": "5e26ed4e5fcacfc7664b9740779c95127349b8e6128d03698028542f4c0fa26b",
				"name": "Behemoth Spark",
				"sockets": [
					[
						"B",
						"G",
						"B"
					],
					[
						"G"
					]
				],
				"itemLevel": 82,
				"implicitMods": [],
				"explicitMods": [
					"+89 to maximum Life",
					"10% increased Rarity of Items found",
					"+29% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +65% total Elemental Resistance",
					"(pseudo) +89 total maximum Life",
					"Sum: 243"
				],
				"accountText": "poe_shniggies > breakmyface",
				"whisper": "@breakmyface Hi, I would like to buy your Behemoth Spark Slink Boots listed for 15 chaos in Metamorph (stash tab \"4sale\"; position: left 15, top 3)",
				"note": "~price 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 243,
				"evalPrice": 15
			},
			{
				"id": "3baabfbe16e20f3544fa5359d3364267eeb3946eb213288c6b44f948cff5049e",
				"name": "Domination Trail",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 82,
				"implicitMods": [],
				"explicitMods": [
					"+9 to Dexterity",
					"+34 to Evasion Rating",
					"+28 to maximum Life",
					"+6% to Fire Resistance",
					"+43% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +49% total Elemental Resistance",
					"(pseudo) +97 total maximum Life",
					"Sum: 243"
				],
				"accountText": "Groves_ > Gwyndien",
				"whisper": "@Gwyndien Hi, I would like to buy your Domination Trail Shagreen Boots listed for 35 chaos in Metamorph (stash tab \"Supa\"; position: left 9, top 17)",
				"note": "~price 35 chaos",
				"priceText": "35 chaos",
				"evalValue": 243,
				"evalPrice": 35
			},
			{
				"id": "65007eabb2a5db8d7e36b3ec8b7c4740718d37d3c633007026fdb3609ad95e23",
				"name": "Vortex March",
				"sockets": [
					[
						"B"
					],
					[
						"G"
					]
				],
				"itemLevel": 70,
				"implicitMods": [],
				"explicitMods": [
					"+26 to Evasion Rating",
					"+102 to maximum Life",
					"12% increased Rarity of Items found",
					"+38% to Lightning Resistance",
					"30% increased Movement Speed",
					"22% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +38% total Elemental Resistance",
					"(pseudo) +102 total maximum Life",
					"Sum: 242"
				],
				"accountText": "flest1488 > Klamstrakur",
				"whisper": "@Klamstrakur Hi, I would like to buy your Vortex March Wyrmscale Boots listed for 25 chaos in Metamorph (stash tab \"~price 25 chaos\"; position: left 23, top 15)",
				"priceText": "25 chaos",
				"evalValue": 242,
				"evalPrice": 25
			},
			{
				"id": "a9b419cecbb6cbb520021656291b7411c4dea1703f965223092120c3006283d4",
				"name": "Ambush Trail",
				"sockets": [
					[
						"R",
						"B",
						"R",
						"G"
					]
				],
				"itemLevel": 75,
				"implicitMods": [],
				"explicitMods": [
					"+30 to Strength",
					"82% increased Armour",
					"+89 to maximum Life",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +33% total Elemental Resistance",
					"(pseudo) +104 total maximum Life",
					"Sum: 241"
				],
				"accountText": "BlackSainto > RealGermanDungeonPorn",
				"whisper": "@RealGermanDungeonPorn Hi, I would like to buy your Ambush Trail Antique Greaves listed for 20 chaos in Metamorph (stash tab \"12\"; position: left 9, top 4)",
				"note": "~price 20 chaos",
				"priceText": "20 chaos",
				"evalValue": 241,
				"evalPrice": 20
			},
			{
				"id": "d24e7ab4716ea7085d8bc98c2a2a8e6d0726a4bcae7c82cb67a75b38695c61de",
				"name": "Rune Road",
				"sockets": [
					[
						"G",
						"G",
						"B",
						"B"
					]
				],
				"itemLevel": 80,
				"implicitMods": [
					"+10% to Fire and Cold Resistances"
				],
				"explicitMods": [
					"+17 to Strength",
					"+13 to Armour",
					"+10 to Evasion Rating",
					"+83 to maximum Life",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +56% total Elemental Resistance",
					"(pseudo) +91.5 total maximum Life",
					"Sum: 239"
				],
				"accountText": "IAmHoody > BunshinNoJutsu_",
				"whisper": "@BunshinNoJutsu_ Hi, I would like to buy your Rune Road Two-Toned Boots listed for 30 chaos in Metamorph (stash tab \"Sell\"; position: left 7, top 7)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 239,
				"evalPrice": 30
			},
			{
				"id": "2df42a52d7f05a526e299d59a00ef772132d0e1795bdb049e42ce42c66cd5095",
				"name": "Vengeance March",
				"sockets": [
					[
						"R"
					],
					[
						"W"
					],
					[
						"R"
					]
				],
				"itemLevel": 73,
				"implicitMods": [],
				"explicitMods": [
					"+42 to Strength",
					"+80 to maximum Life",
					"+36% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +36% total Elemental Resistance",
					"(pseudo) +101 total maximum Life",
					"Sum: 238"
				],
				"accountText": "n0weed > seedofweed",
				"whisper": "@seedofweed Hi, I would like to buy your Vengeance March Ancient Greaves listed for 15 chaos in Metamorph (stash tab \"~price 15 chaos\"; position: left 3, top 1)",
				"priceText": "15 chaos",
				"evalValue": 238,
				"evalPrice": 15
			},
			{
				"id": "22cb08db3c5e8ba118989ff5f3614e724fe8287015f696b190977cfe5c63626c",
				"name": "Demon Urge",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 76,
				"implicitMods": [
					"+12% to Cold and Lightning Resistances"
				],
				"explicitMods": [
					"+38% to Fire Resistance",
					"+42% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +104% total Elemental Resistance",
					"(pseudo) +64 total maximum Life",
					"Sum: 232"
				],
				"accountText": "bigass_meow > Slap_Master",
				"whisper": "@Slap_Master Hi, I would like to buy your Demon Urge Two-Toned Boots listed for 20 chaos in Metamorph (stash tab \"防\"; position: left 5, top 9)",
				"note": "~price 20 chaos",
				"priceText": "20 chaos",
				"evalValue": 232,
				"evalPrice": 20
			},
			{
				"id": "7de2c2aefff29a2c4190780dee3871576a0efe0effd4ea8b549041ce6f357404",
				"name": "Rapture Span",
				"sockets": [
					[
						"R",
						"R"
					],
					[
						"G"
					],
					[
						"R"
					]
				],
				"itemLevel": 83,
				"implicitMods": [],
				"explicitMods": [
					"+18 to Armour",
					"+22 to maximum Life",
					"+13% to Cold Resistance",
					"+36% to Lightning Resistance",
					"30% increased Movement Speed",
					"6% chance to Dodge Attack Hits"
				],
				"pseudoMods": [
					"(pseudo) +49% total Elemental Resistance",
					"(pseudo) +91 total maximum Life",
					"Sum: 231"
				],
				"accountText": "Genraenera > Gen_BVTank",
				"whisper": "@Gen_BVTank Hi, I would like to buy your Rapture Span Goliath Greaves listed for 20 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 10, top 1)",
				"note": "~b/o 20 chaos",
				"priceText": "20 chaos",
				"evalValue": 231,
				"evalPrice": 20
			},
			{
				"id": "eb0fd56da66cda266e7879f74a8bb021fc45a2e294ba61228f9b086950ad366e",
				"name": "Corpse Slippers",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 78,
				"implicitMods": [],
				"explicitMods": [
					"+88 to maximum Life",
					"+8% to Fire Resistance",
					"+11% to Cold Resistance",
					"30% increased Movement Speed",
					"5% chance to Dodge Spell Hits"
				],
				"pseudoMods": [
					"(pseudo) +55% total Elemental Resistance",
					"(pseudo) +88 total maximum Life",
					"Sum: 231"
				],
				"accountText": "n0weed > seedofweed",
				"whisper": "@seedofweed Hi, I would like to buy your Corpse Slippers Wyrmscale Boots listed for 20 chaos in Metamorph (stash tab \"~price 20 chaos\"; position: left 3, top 10)",
				"priceText": "20 chaos",
				"evalValue": 231,
				"evalPrice": 20
			},
			{
				"id": "309adff654a32a0d27ba3dfed299a40e510bf288303bb93352cee103d7393ced",
				"name": "Onslaught League",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 74,
				"implicitMods": [],
				"explicitMods": [
					"+31 to Strength",
					"+34% to Fire Resistance",
					"+30% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +64% total Elemental Resistance",
					"(pseudo) +83.5 total maximum Life",
					"Sum: 231"
				],
				"accountText": "spitfires_son > InAndOutQuickAdventure",
				"whisper": "@InAndOutQuickAdventure Hi, I would like to buy your Onslaught League Titan Greaves listed for 30 chaos in Metamorph (stash tab \"$$$\"; position: left 9, top 3)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 231,
				"evalPrice": 30
			},
			{
				"id": "47b16aa75efa64afa901158d6bb4c312eacdaebe3ee5dc1f315066adcc2ed1fd",
				"name": "Invasion March",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 84,
				"implicitMods": [],
				"explicitMods": [
					"54% increased Evasion Rating",
					"+83 to maximum Life",
					"+26% to Fire Resistance",
					"30% increased Movement Speed",
					"5% increased Movement Speed if you haven't been Hit Recently"
				],
				"pseudoMods": [
					"(pseudo) +64% total Elemental Resistance",
					"(pseudo) +83 total maximum Life",
					"Sum: 230"
				],
				"accountText": "laalaaland > Valverde_Out",
				"whisper": "@Valverde_Out Hi, I would like to buy your Invasion March Eelskin Boots listed for 23 chaos in Metamorph (stash tab \"t2\"; position: left 11, top 3)",
				"note": "~price 23 chaos",
				"priceText": "23 chaos",
				"evalValue": 230,
				"evalPrice": 23
			},
			{
				"id": "168514d4b1946272e7d449371d6a0eaa1306c9fe343eee67b4e613ccf278be15",
				"name": "Eagle Tread",
				"sockets": [
					[
						"B"
					]
				],
				"itemLevel": 84,
				"implicitMods": [],
				"explicitMods": [
					"+8 to maximum Energy Shield",
					"+95 to maximum Life",
					"Regenerate 6.4 Life per second",
					"+29% to Fire Resistance",
					"+10% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +39% total Elemental Resistance",
					"(pseudo) +95 total maximum Life",
					"Sum: 229"
				],
				"accountText": "mike4334 > Tilted_Brand",
				"whisper": "@Tilted_Brand Hi, I would like to buy your Eagle Tread Assassin's Boots listed for 15 chaos in Metamorph (stash tab \"$$$\"; position: left 11, top 1)",
				"note": "~b/o 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 229,
				"evalPrice": 15
			},
			{
				"id": "6245451b05e9ffd524a142987b87114be705c93d79ad87501987066886726031",
				"name": "Onslaught League",
				"sockets": [
					[
						"G"
					],
					[
						"G",
						"B"
					],
					[
						"B"
					]
				],
				"itemLevel": 72,
				"implicitMods": [],
				"explicitMods": [
					"+87 to maximum Life",
					"+44 to maximum Mana",
					"+27% to Cold Resistance",
					"30% increased Movement Speed",
					"11% increased Stun and Block Recovery",
					"6% chance to Dodge Spell Hits"
				],
				"pseudoMods": [
					"(pseudo) +55% total Elemental Resistance",
					"(pseudo) +87 total maximum Life",
					"Sum: 229"
				],
				"accountText": "XxdarksiderxX > MichaelFlick",
				"whisper": "@MichaelFlick Hi, I would like to buy your Onslaught League Ambush Boots listed for 30 chaos in Metamorph (stash tab \"~b/o 2 chaos\"; position: left 4, top 11)",
				"note": "~b/o 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 229,
				"evalPrice": 30
			},
			{
				"id": "8aabe7bea42d08d059f4abf0a40bfa1bcb7daaa08bd7fc6aa3f886b1483cb588",
				"name": "Storm Spur",
				"sockets": [
					[
						"R",
						"G"
					]
				],
				"itemLevel": 82,
				"implicitMods": [],
				"explicitMods": [
					"+86 to maximum Life",
					"Regenerate 1.1 Life per second",
					"17% increased Rarity of Items found",
					"+23% to Lightning Resistance",
					"30% increased Movement Speed",
					"6% chance to Dodge Spell Hits"
				],
				"pseudoMods": [
					"(pseudo) +57% total Elemental Resistance",
					"(pseudo) +86 total maximum Life",
					"Sum: 229"
				],
				"accountText": "Mekhami > Totemekhami",
				"whisper": "@Totemekhami Hi, I would like to buy your Storm Spur Bronzescale Boots listed for 30 chaos in Metamorph (stash tab \"10\"; position: left 8, top 6)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 229,
				"evalPrice": 30
			},
			{
				"id": "ad8c41659c305332197c167ab138bdf5c23bd3363325f8447bf5763fcdaf621e",
				"name": "Fate Sole",
				"sockets": [
					[
						"R",
						"R"
					],
					[
						"R",
						"R"
					]
				],
				"itemLevel": 81,
				"implicitMods": [],
				"explicitMods": [
					"+36 to Strength",
					"+37% to Fire Resistance",
					"+21% to Lightning Resistance",
					"30% increased Movement Speed",
					"5% increased Movement Speed if you haven't been Hit Recently"
				],
				"pseudoMods": [
					"(pseudo) +58% total Elemental Resistance",
					"(pseudo) +85 total maximum Life",
					"Sum: 228"
				],
				"accountText": "cremaster > JanneGuillou",
				"whisper": "@JanneGuillou Hi, I would like to buy your Fate Sole Ancient Greaves listed for 12 chaos in Metamorph (stash tab \"S\"; position: left 3, top 8)",
				"note": "~price 12 chaos",
				"priceText": "12 chaos",
				"evalValue": 228,
				"evalPrice": 12
			},
			{
				"id": "e7e73a3ac9b5d9b59a8d071c777588ef5f0e96656e5ee253328e0decb6fbe8f7",
				"name": "Miracle March",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 80,
				"implicitMods": [],
				"explicitMods": [
					"+86 to maximum Life",
					"+13% to Cold Resistance",
					"+8% to Lightning Resistance",
					"30% increased Movement Speed",
					"5% chance to Dodge Attack Hits"
				],
				"pseudoMods": [
					"(pseudo) +56% total Elemental Resistance",
					"(pseudo) +86 total maximum Life",
					"Sum: 228"
				],
				"accountText": "hernok > Mine_build_was_not_fun",
				"whisper": "@Mine_build_was_not_fun Hi, I would like to buy your Miracle March Carnal Boots listed for 15 chaos in Metamorph (stash tab \"T4\"; position: left 5, top 3)",
				"note": "~price 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 228,
				"evalPrice": 15
			},
			{
				"id": "32f7254faba11a2897c51387403974a98baba11d6cae043f2e0b48a954d3a8a7",
				"name": "Brood Slippers",
				"sockets": [
					[
						"R",
						"R",
						"G",
						"G"
					]
				],
				"itemLevel": 73,
				"implicitMods": [],
				"explicitMods": [
					"+37 to Evasion Rating",
					"+97 to maximum Life",
					"Regenerate 4.2 Life per second",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +34% total Elemental Resistance",
					"(pseudo) +97 total maximum Life",
					"Sum: 228"
				],
				"accountText": "stryder0101 > ToxieTom",
				"whisper": "@ToxieTom Hi, I would like to buy your Brood Slippers Shagreen Boots listed for 35 chaos in Metamorph (stash tab \"5\"; position: left 3, top 1)",
				"note": "~price 35 chaos",
				"priceText": "35 chaos",
				"evalValue": 228,
				"evalPrice": 35
			},
			{
				"id": "083061726742af5152955f042a0829f0029d1d069715c0e07303ccfbadd3e97c",
				"name": "Vengeance Trail",
				"sockets": [
					[
						"G",
						"R"
					],
					[
						"B"
					]
				],
				"itemLevel": 74,
				"implicitMods": [],
				"explicitMods": [
					"+24 to Strength",
					"+42 to Dexterity",
					"22% increased Armour and Evasion",
					"+84 to maximum Life",
					"+35% to Lightning Resistance",
					"30% increased Movement Speed",
					"11% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +35% total Elemental Resistance",
					"(pseudo) +96 total maximum Life",
					"Sum: 227"
				],
				"accountText": "Vince00101010 > BootyShakerz",
				"whisper": "@BootyShakerz Hi, I would like to buy your Vengeance Trail Wyrmscale Boots listed for 15 chaos in Metamorph (stash tab \"Sale - Uniques 3\"; position: left 7, top 3)",
				"note": "~price 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 227,
				"evalPrice": 15
			},
			{
				"id": "f6ca9edc92d865f4b2ecfda269273b0e6a6a425f2312ae9b0fa85ae26cfce6ae",
				"name": "Phoenix Trail",
				"sockets": [
					[
						"B"
					]
				],
				"itemLevel": 71,
				"implicitMods": [],
				"explicitMods": [
					"+38 to Strength",
					"+15 to Armour",
					"+84 to maximum Life",
					"6% increased Rarity of Items found",
					"+21% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +21% total Elemental Resistance",
					"(pseudo) +103 total maximum Life",
					"Sum: 227"
				],
				"accountText": "Gutzin > Gutzzica",
				"whisper": "@Gutzzica Hi, I would like to buy your Phoenix Trail Hydrascale Boots listed for 25 chaos in Metamorph (stash tab \"~price 25 chaos\"; position: left 9, top 1)",
				"priceText": "25 chaos",
				"evalValue": 227,
				"evalPrice": 25
			},
			{
				"id": "7c6a55d6c8fc78e1cddc15a088a87d8762232bf71936218e349f1f353f502457",
				"name": "Victory Pace",
				"sockets": [
					[
						"G",
						"G",
						"R"
					]
				],
				"itemLevel": 76,
				"implicitMods": [],
				"explicitMods": [
					"+12 to Strength",
					"+17 to Armour",
					"+22 to maximum Life",
					"+36% to Fire Resistance",
					"+12% to Chaos Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +36% total Elemental Resistance",
					"(pseudo) +95 total maximum Life",
					"Sum: 226"
				],
				"accountText": "lkvhlwkejrn > MrWilskee",
				"whisper": "@MrWilskee Hi, I would like to buy your Victory Pace Dragonscale Boots listed for 15 chaos in Metamorph (stash tab \"19\"; position: left 10, top 2)",
				"note": "~price 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 226,
				"evalPrice": 15
			},
			{
				"id": "453c8a78a5d40cd4cd018fcef1f86f4554b72bd1e3e30cadce7932283b5ebae8",
				"name": "Wrath Trail",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 70,
				"implicitMods": [],
				"explicitMods": [
					"+19 to Strength",
					"+32% to Fire Resistance",
					"+36% to Cold Resistance",
					"30% increased Movement Speed",
					"5% increased Movement Speed if you haven't been Hit Recently"
				],
				"pseudoMods": [
					"(pseudo) +68% total Elemental Resistance",
					"(pseudo) +78.5 total maximum Life",
					"Sum: 225"
				],
				"accountText": "dtx1212 > nebuagain",
				"whisper": "@nebuagain Hi, I would like to buy your Wrath Trail Wyrmscale Boots listed for 20 chaos in Metamorph (stash tab \"Trade_1\"; position: left 7, top 4)",
				"note": "~price 20 chaos",
				"priceText": "20 chaos",
				"evalValue": 225,
				"evalPrice": 20
			},
			{
				"id": "cb4ccfc8a78e87f0f72054ecc7579e59b3acbec927fa9430605451dbe7312f6e",
				"name": "Fate Sole",
				"sockets": [
					[
						"R"
					],
					[
						"R",
						"R"
					]
				],
				"itemLevel": 85,
				"implicitMods": [],
				"explicitMods": [
					"+46% to Fire Resistance",
					"+31% to Cold Resistance",
					"+18% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +95% total Elemental Resistance",
					"(pseudo) +65 total maximum Life",
					"Sum: 225"
				],
				"accountText": "lavenderktyn > BowIsTrash",
				"whisper": "@BowIsTrash Hi, I would like to buy your Fate Sole Ancient Greaves listed for 25 chaos in Metamorph (stash tab \"$$$\"; position: left 4, top 8)",
				"note": "~b/o 25 chaos",
				"priceText": "25 chaos",
				"evalValue": 225,
				"evalPrice": 25
			},
			{
				"id": "1e306a13b7e7376c57dd08a556cdb8ddee94026671c7e1eba009b0fbacb1b970",
				"name": "Viper Stride",
				"sockets": [
					[
						"R"
					],
					[
						"G",
						"R"
					]
				],
				"itemLevel": 76,
				"implicitMods": [],
				"explicitMods": [
					"+8 to Strength",
					"77% increased Armour and Evasion",
					"+75 to maximum Life",
					"+31% to Fire Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +67% total Elemental Resistance",
					"(pseudo) +79 total maximum Life",
					"Sum: 225"
				],
				"accountText": "last_for_one > 미세먼지빌드",
				"whisper": "@미세먼지빌드 안녕하세요, 변형(보관함 탭 \"경매2\", 위치: 왼쪽 7, 상단 7)에 30 chaos(으)로 올려놓은 독사의 질주 히드라 비늘 장화을(를) 구매하고 싶습니다",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 225,
				"evalPrice": 30
			},
			{
				"id": "6c453d33b9ae2b70ea50f8a3347da12f0b002ba5b15e0b9026fd1dd986cdc2d6",
				"name": "Eagle Hoof",
				"sockets": [
					[
						"R",
						"R"
					],
					[
						"R"
					]
				],
				"itemLevel": 71,
				"implicitMods": [],
				"explicitMods": [
					"+38 to Strength",
					"59% increased Armour",
					"+80 to maximum Life",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +26% total Elemental Resistance",
					"(pseudo) +99 total maximum Life",
					"Sum: 224"
				],
				"accountText": "OppressorMan > MightyMorphingPoweRangr",
				"whisper": "@MightyMorphingPoweRangr Hi, I would like to buy your Eagle Hoof Goliath Greaves listed for 15 chaos in Metamorph (stash tab \"8\"; position: left 3, top 11)",
				"note": "~price 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 224,
				"evalPrice": 15
			},
			{
				"id": "212e1d876f5c36f9a6f7812d6750f0a180cc891df55b9b3431e03091825e43af",
				"name": "Wrath Hoof",
				"sockets": [
					[
						"B"
					],
					[
						"R",
						"B",
						"R"
					]
				],
				"itemLevel": 72,
				"implicitMods": [],
				"explicitMods": [
					"+83 to maximum Life",
					"+19 to maximum Mana",
					"+20% to Fire Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +58% total Elemental Resistance",
					"(pseudo) +83 total maximum Life",
					"Sum: 224"
				],
				"accountText": "Mexi_Soul > Hell_GrimReaper",
				"whisper": "@Hell_GrimReaper 안녕하세요, 변형(보관함 탭 \"판매2\", 위치: 왼쪽 7, 상단 11)에 20 chaos(으)로 올려놓은 진노의 발굽 병사 장화을(를) 구매하고 싶습니다",
				"note": "~price 20 chaos",
				"priceText": "20 chaos",
				"evalValue": 224,
				"evalPrice": 20
			},
			{
				"id": "1e158a4ec1321dda11ebd40ed9a33850bf9db48344685b27df9e4b46bbf1132f",
				"name": "Sorrow Spark",
				"sockets": [
					[
						"R",
						"R",
						"G",
						"B"
					]
				],
				"itemLevel": 72,
				"implicitMods": [],
				"explicitMods": [
					"+44% to Cold Resistance",
					"+42% to Lightning Resistance",
					"30% increased Movement Speed",
					"24% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +86% total Elemental Resistance",
					"(pseudo) +69 total maximum Life",
					"Sum: 224"
				],
				"accountText": "americanpit79 > americanpitwitcher",
				"whisper": "@americanpitwitcher Hi, I would like to buy your Sorrow Spark Goliath Greaves listed for 25 chaos in Metamorph (stash tab \"dump\"; position: left 11, top 1)",
				"note": "~price 25 chaos",
				"priceText": "25 chaos",
				"evalValue": 224,
				"evalPrice": 25
			},
			{
				"id": "695c9104c86e96ff3e1adc237d4af9322540b846570e5b42abb05644d4938003",
				"name": "Plague Stride",
				"sockets": [
					[
						"B",
						"R",
						"B",
						"B"
					]
				],
				"itemLevel": 70,
				"implicitMods": [],
				"explicitMods": [
					"21% increased Evasion and Energy Shield",
					"+79 to maximum Life",
					"+35% to Fire Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +65% total Elemental Resistance",
					"(pseudo) +79 total maximum Life",
					"Sum: 223"
				],
				"accountText": "nico1290 > KapitalBrah",
				"whisper": "@KapitalBrah Hi, I would like to buy your Plague Stride Assassin's Boots listed for 30 chaos in Metamorph (stash tab \"Sell\"; position: left 10, top 5)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 223,
				"evalPrice": 30
			},
			{
				"id": "e07cd6ba70021a6156fc39e2f8099aae619315b0cb6bbd46bec2cbe1795cbf4c",
				"name": "Anarchy Spur",
				"sockets": [
					[
						"R",
						"R",
						"B",
						"R"
					]
				],
				"itemLevel": 72,
				"implicitMods": [],
				"explicitMods": [
					"7% increased Armour",
					"+86 to maximum Life",
					"+18% to Cold Resistance",
					"30% increased Movement Speed",
					"7% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +51% total Elemental Resistance",
					"(pseudo) +86 total maximum Life",
					"Sum: 223"
				],
				"accountText": "_DarkMan_ > _DA_METAMORPH_CYCLONE_",
				"whisper": "@_DA_METAMORPH_CYCLONE_ Hi, I would like to buy your Anarchy Spur Goliath Greaves listed for 30 chaos in Metamorph (stash tab \"$II\"; position: left 1, top 5)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 223,
				"evalPrice": 30
			},
			{
				"id": "8a0424052e943aadc2f0110938471a3e74446aee67039414fca0e348a4f174ed",
				"name": "Rage Sole",
				"sockets": [
					[
						"G",
						"R",
						"B",
						"R"
					]
				],
				"itemLevel": 75,
				"implicitMods": [],
				"explicitMods": [
					"Regenerate 11.8 Life per second",
					"+44% to Fire Resistance",
					"+45% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +89% total Elemental Resistance",
					"(pseudo) +67 total maximum Life",
					"Sum: 223"
				],
				"accountText": "PinkOfEoBiTi > MeMe_Wand",
				"whisper": "@MeMe_Wand Hi, I would like to buy your Rage Sole Assassin's Boots listed for 35 chaos in Metamorph (stash tab \"$$$\"; position: left 7, top 10)",
				"note": "~price 35 chaos",
				"priceText": "35 chaos",
				"evalValue": 223,
				"evalPrice": 35
			},
			{
				"id": "57b06ca6579b091586b2f890a9e1452d6e2b912d43861990f586f8a31fd32d43",
				"name": "Sol Track",
				"sockets": [
					[
						"B",
						"B"
					]
				],
				"itemLevel": 84,
				"implicitMods": [],
				"explicitMods": [
					"+39% to Fire Resistance",
					"+6% to Cold Resistance",
					"+41% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +86% total Elemental Resistance",
					"(pseudo) +68 total maximum Life",
					"Sum: 222"
				],
				"accountText": "LordJarlaxle > JarlaxleZombies",
				"whisper": "@JarlaxleZombies Hi, I would like to buy your Sol Track Assassin's Boots listed for 15 chaos in Metamorph (stash tab \"$\"; position: left 3, top 21)",
				"note": "~b/o 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 222,
				"evalPrice": 15
			},
			{
				"id": "c4eb45dba4411bbbc38c8a45587326f030dcd671285a09ec5c35c9b0d118a922",
				"name": "Oblivion League",
				"sockets": [
					[
						"R",
						"R"
					],
					[
						"R"
					]
				],
				"itemLevel": 76,
				"implicitMods": [],
				"explicitMods": [
					"+14 to Armour",
					"+23 to maximum Life",
					"+44% to Fire Resistance",
					"30% increased Movement Speed",
					"20% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +44% total Elemental Resistance",
					"(pseudo) +89 total maximum Life",
					"Sum: 222"
				],
				"accountText": "mshimmyb1 > YangGangIgnite",
				"whisper": "@YangGangIgnite Hi, I would like to buy your Oblivion League Goliath Greaves listed for 15 chaos in Metamorph (stash tab \"18\"; position: left 8, top 1)",
				"note": "~price 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 222,
				"evalPrice": 15
			},
			{
				"id": "d153473822559feca464aa3f62888f60ee30c6a2e7e232b9fb661443a4f2a897",
				"name": "Corpse March",
				"sockets": [
					[
						"R",
						"G"
					],
					[
						"G"
					]
				],
				"itemLevel": 77,
				"implicitMods": [],
				"explicitMods": [
					"+15 to Strength",
					"+20 to Armour",
					"+21 to maximum Life",
					"+43% to Fire Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +43% total Elemental Resistance",
					"(pseudo) +89.5 total maximum Life",
					"Sum: 222"
				],
				"accountText": "jconaspree > JC__Toxic",
				"whisper": "@JC__Toxic Hi, I would like to buy your Corpse March Vaal Greaves listed for 15 chaos in Metamorph (stash tab \"~b/o 15 chaos\"; position: left 1, top 3)",
				"priceText": "15 chaos",
				"evalValue": 222,
				"evalPrice": 15
			},
			{
				"id": "6dc8564863073b825231dbac0112f5533c6378cb5403d186a0f7824f29440ea1",
				"name": "Onslaught Pace",
				"sockets": [
					[
						"B"
					],
					[
						"R"
					]
				],
				"itemLevel": 88,
				"implicitMods": [],
				"explicitMods": [
					"+71 to maximum Life",
					"+29 to maximum Mana",
					"+42% to Cold Resistance",
					"30% increased Movement Speed",
					"25% increased Stun and Block Recovery",
					"5% increased Movement Speed if you haven't been Hit Recently"
				],
				"pseudoMods": [
					"(pseudo) +80% total Elemental Resistance",
					"(pseudo) +71 total maximum Life",
					"Sum: 222"
				],
				"accountText": "EZTrickShots > Joink_EZTrickShots",
				"whisper": "@Joink_EZTrickShots Hi, I would like to buy your Onslaught Pace Samite Slippers listed for 30 chaos in Metamorph (stash tab \"~b/o 30 chaos\"; position: left 3, top 9)",
				"priceText": "30 chaos",
				"evalValue": 222,
				"evalPrice": 30
			},
			{
				"id": "ace893aaa0f5968366abf8eee3c5e8046f504c7a4b389b6e2fd77f7a6d7541a8",
				"name": "Chimeric Spur",
				"sockets": [
					[
						"R",
						"R"
					]
				],
				"itemLevel": 69,
				"implicitMods": [],
				"explicitMods": [
					"+87 to maximum Life",
					"Regenerate 2.1 Life per second",
					"+22% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +47% total Elemental Resistance",
					"(pseudo) +87 total maximum Life",
					"Sum: 221"
				],
				"accountText": "niksunorz66 > PeppuSepi",
				"whisper": "@PeppuSepi Hi, I would like to buy your Chimeric Spur Goliath Greaves listed for 12 chaos in Metamorph (stash tab \"shop1\"; position: left 7, top 1)",
				"note": "~price 12 chaos",
				"priceText": "12 chaos",
				"evalValue": 221,
				"evalPrice": 12
			},
			{
				"id": "d4fafe5c7e1dee49e84d81daaddef5e45575a4fa05c07b7710d381e7ccf0929b",
				"name": "Torment Span",
				"sockets": [
					[
						"G",
						"G"
					]
				],
				"itemLevel": 80,
				"implicitMods": [],
				"explicitMods": [
					"+16 to Armour",
					"+19 to maximum Life",
					"+22% to Fire Resistance",
					"+31% to Cold Resistance",
					"30% increased Movement Speed",
					"18% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +53% total Elemental Resistance",
					"(pseudo) +84 total maximum Life",
					"Sum: 221"
				],
				"accountText": "Xzxyphon189 > JuzForAwakenerr",
				"whisper": "@JuzForAwakenerr Hi, I would like to buy your Torment Span Titan Greaves listed for 25 chaos in Metamorph (stash tab \"21\"; position: left 11, top 5)",
				"note": "~price 25 chaos",
				"priceText": "25 chaos",
				"evalValue": 221,
				"evalPrice": 25
			},
			{
				"id": "759da5e13d7c32a44600bc93e96a23eecb0e634e0dc3df37bda8c7ffba673e08",
				"name": "Nemesis Dash",
				"sockets": [
					[
						"G",
						"G",
						"B"
					]
				],
				"itemLevel": 84,
				"implicitMods": [],
				"explicitMods": [
					"+28% to Fire Resistance",
					"+38% to Cold Resistance",
					"+21% to Lightning Resistance",
					"30% increased Movement Speed",
					"6% chance to Dodge Spell Hits"
				],
				"pseudoMods": [
					"(pseudo) +87% total Elemental Resistance",
					"(pseudo) +67 total maximum Life",
					"Sum: 221"
				],
				"accountText": "xiled7 > ThiccXiledAss",
				"whisper": "@ThiccXiledAss Hi, I would like to buy your Nemesis Dash Clasped Boots listed for 35 chaos in Metamorph (stash tab \"$$$\"; position: left 8, top 1)",
				"note": "~price 35 chaos",
				"priceText": "35 chaos",
				"evalValue": 221,
				"evalPrice": 35
			},
			{
				"id": "f094de998278c3fda5496138a74070fe5826d22548b1c2000cd169cd48741d19",
				"name": "Carrion Spark",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 80,
				"implicitMods": [],
				"explicitMods": [
					"16% increased Evasion Rating",
					"+77 to maximum Life",
					"+38% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +67% total Elemental Resistance",
					"(pseudo) +77 total maximum Life",
					"Sum: 221"
				],
				"accountText": "Zajawa > MorphedONe",
				"whisper": "@MorphedONe Hi, I would like to buy your Carrion Spark Eelskin Boots listed for 35 chaos in Metamorph (stash tab \"Sell7\"; position: left 11, top 1)",
				"note": "~price 35 chaos",
				"priceText": "35 chaos",
				"evalValue": 221,
				"evalPrice": 35
			},
			{
				"id": "c2dd452bf56108d9d329fa699ef07609411f2822453a0f971a9c8d403bd13a8c",
				"name": "Phoenix Dash",
				"sockets": [
					[
						"R",
						"B",
						"B"
					]
				],
				"itemLevel": 83,
				"implicitMods": [],
				"explicitMods": [
					"+85 to maximum Life",
					"10% increased Rarity of Items found",
					"+16% to Fire Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +50% total Elemental Resistance",
					"(pseudo) +85 total maximum Life",
					"Sum: 220"
				],
				"accountText": "mdwook > oloolo_Metamorph_AW",
				"whisper": "@oloolo_Metamorph_AW Hi, I would like to buy your Phoenix Dash Ancient Greaves listed for 15 chaos in Metamorph (stash tab \"$$\"; position: left 3, top 11)",
				"note": "~price 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 220,
				"evalPrice": 15
			},
			{
				"id": "cfadc148d12f25e8b6046b3744dcc4a7eb41673be1ce765f4ced7c78fb772bb1",
				"name": "Agony Goad",
				"sockets": [
					[
						"B"
					]
				],
				"itemLevel": 70,
				"implicitMods": [],
				"explicitMods": [
					"+36 to Dexterity",
					"+5 to Evasion Rating",
					"+75 to maximum Life",
					"+38% to Cold Resistance",
					"+32% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +70% total Elemental Resistance",
					"(pseudo) +75 total maximum Life",
					"Sum: 220"
				],
				"accountText": "IntheNight > KaboomStab",
				"whisper": "@KaboomStab Hi, I would like to buy your Agony Goad Stealth Boots listed for 15 chaos in Metamorph (stash tab \"Sales 1\"; position: left 1, top 7)",
				"note": "~price 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 220,
				"evalPrice": 15
			},
			{
				"id": "67b758718f25d43d2087641f4b6b9c541731544a8f9191914db58ca0ae2afb31",
				"name": "Bramble Hoof",
				"sockets": [
					[
						"G",
						"G"
					]
				],
				"itemLevel": 84,
				"implicitMods": [],
				"explicitMods": [
					"+71 to maximum Life",
					"Regenerate 1 Life per second",
					"+47% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +77% total Elemental Resistance",
					"(pseudo) +71 total maximum Life",
					"Sum: 219"
				],
				"accountText": "Tgoh > Thagria",
				"whisper": "@Thagria Hi, I would like to buy your Bramble Hoof Dragonscale Boots listed for 6 chaos in Metamorph (stash tab \"~b/o 6 chaos\"; position: left 1, top 8)",
				"priceText": "6 chaos",
				"evalValue": 219,
				"evalPrice": 6
			},
			{
				"id": "5a773fe513216cdcc55a0367da4429dd5e8deb471c3b9428ec8f336ab0744879",
				"name": "Oblivion Slippers",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 71,
				"implicitMods": [],
				"explicitMods": [
					"+32 to Strength",
					"+68 to maximum Life",
					"+20% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +51% total Elemental Resistance",
					"(pseudo) +84 total maximum Life",
					"Sum: 219"
				],
				"accountText": "HammerNo5 > o발잡이o스톰브랜드",
				"whisper": "@o발잡이o스톰브랜드 안녕하세요, 변형(보관함 탭 \"TR1\", 위치: 왼쪽 1, 상단 7)에 15 chaos(으)로 올려놓은 망각 슬리퍼 거신 각반을(를) 구매하고 싶습니다",
				"note": "~price 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 219,
				"evalPrice": 15
			},
			{
				"id": "77daac2fc78ebc4621dfb227477a36b6633e2f6d24f7598a52c2493646ef21bf",
				"name": "Kraken League",
				"sockets": [
					[
						"G"
					],
					[
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 70,
				"implicitMods": [],
				"explicitMods": [
					"+69 to maximum Life",
					"+33% to Cold Resistance",
					"+17% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +81% total Elemental Resistance",
					"(pseudo) +69 total maximum Life",
					"Sum: 219"
				],
				"accountText": "삐따기기75 > 어둠사이온삐따기",
				"whisper": "@어둠사이온삐따기 안녕하세요, 변형(보관함 탭 \"거래소\", 위치: 왼쪽 5, 상단 1)에 20 chaos(으)로 올려놓은 크라켄의 리그 은신 장화을(를) 구매하고 싶습니다",
				"note": "~price 20 chaos",
				"priceText": "20 chaos",
				"evalValue": 219,
				"evalPrice": 20
			},
			{
				"id": "c0b44a629a837156633369e686b9d82999af884399266a3a49bdb6aac3b7d9aa",
				"name": "Viper Spark",
				"sockets": [
					[
						"B"
					],
					[
						"G"
					],
					[
						"G"
					]
				],
				"itemLevel": 83,
				"implicitMods": [],
				"explicitMods": [
					"+88 to maximum Life",
					"Regenerate 14.9 Life per second",
					"+43% to Fire Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +43% total Elemental Resistance",
					"(pseudo) +88 total maximum Life",
					"Sum: 219"
				],
				"accountText": "셋째하늘 > 셋째하늘_불덩이",
				"whisper": "@셋째하늘_불덩이 안녕하세요, 변형(보관함 탭 \"판매\", 위치: 왼쪽 7, 상단 6)에 30 chaos(으)로 올려놓은 독사의 불꽃 거친 생가죽 장화을(를) 구매하고 싶습니다",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 219,
				"evalPrice": 30
			},
			{
				"id": "66d81ab52745fd5cb210e468538ea68b3595f07b005fdc2f375dd35344d9b7c0",
				"name": "Golem Stride",
				"sockets": [
					[
						"G",
						"B"
					],
					[
						"R"
					],
					[
						"B"
					]
				],
				"itemLevel": 77,
				"implicitMods": [],
				"explicitMods": [
					"+11 to Intelligence",
					"+43% to Fire Resistance",
					"+42% to Lightning Resistance",
					"30% increased Movement Speed",
					"5% increased Movement Speed if you haven't been Hit Recently"
				],
				"pseudoMods": [
					"(pseudo) +85% total Elemental Resistance",
					"(pseudo) +67 total maximum Life",
					"Sum: 219"
				],
				"accountText": "sLaYsTRoNg_j > Melee_",
				"whisper": "@Melee_ Hi, I would like to buy your Golem Stride Satin Slippers listed for 30 chaos in Metamorph (stash tab \"SeLL\"; position: left 11, top 17)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 219,
				"evalPrice": 30
			},
			{
				"id": "b4f8d6d28e2f6f6392395cafd3343a71932baf3a52ffad790e4d6875950ec863",
				"name": "Bramble Trail",
				"sockets": [
					[
						"G",
						"G",
						"R",
						"G"
					]
				],
				"itemLevel": 72,
				"implicitMods": [],
				"explicitMods": [
					"+28 to Strength",
					"19% increased Armour and Evasion",
					"+71 to maximum Life",
					"+36% to Fire Resistance",
					"+13% to Cold Resistance",
					"30% increased Movement Speed",
					"5% chance to Dodge Attack Hits"
				],
				"pseudoMods": [
					"(pseudo) +49% total Elemental Resistance",
					"(pseudo) +85 total maximum Life",
					"Sum: 219"
				],
				"accountText": "영건잉 > 대구리더",
				"whisper": "@대구리더 안녕하세요, 변형(보관함 탭 \"고가\", 위치: 왼쪽 8, 상단 11)에 30 chaos(으)로 올려놓은 가시나무 발자취 뱀 비늘 장화을(를) 구매하고 싶습니다",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 219,
				"evalPrice": 30
			},
			{
				"id": "2a49a83446c055fcbf0f7040b4a389f22db99da62c2d7015ba9c275dad026d04",
				"name": "Hate Track",
				"sockets": [
					[
						"B",
						"R"
					],
					[
						"R"
					]
				],
				"itemLevel": 84,
				"implicitMods": [],
				"explicitMods": [
					"+43% to Cold Resistance",
					"+40% to Lightning Resistance",
					"30% increased Movement Speed",
					"23% increased Stun and Block Recovery",
					"5% chance to Dodge Attack Hits"
				],
				"pseudoMods": [
					"(pseudo) +83% total Elemental Resistance",
					"(pseudo) +68 total maximum Life",
					"Sum: 219"
				],
				"accountText": "Aviery > ArcBlockChain",
				"whisper": "@ArcBlockChain Hi, I would like to buy your Hate Track Legion Boots listed for 35 chaos in Metamorph (stash tab \"3\"; position: left 10, top 10)",
				"note": "~b/o 35 chaos",
				"priceText": "35 chaos",
				"evalValue": 219,
				"evalPrice": 35
			},
			{
				"id": "24c5ba9a3f5f47a1bd3f5f9318d02baba227f4444fddece9904dea77343b60c5",
				"name": "Sol Track",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 73,
				"implicitMods": [],
				"explicitMods": [
					"24% increased Evasion Rating",
					"+78 to maximum Life",
					"+29% to Lightning Resistance",
					"30% increased Movement Speed",
					"11% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +62% total Elemental Resistance",
					"(pseudo) +78 total maximum Life",
					"Sum: 218"
				],
				"accountText": "K1NGO > Dolordecabeza",
				"whisper": "@Dolordecabeza Hi, I would like to buy your Sol Track Shagreen Boots listed for 15 chaos in Metamorph (stash tab \"Sell\"; position: left 23, top 1)",
				"note": "~b/o 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 218,
				"evalPrice": 15
			},
			{
				"id": "a16c2b0e35583d7eaaae12356a0a611493a9d3bf51529175f66cda474cb3988b",
				"name": "Armageddon Tread",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 84,
				"implicitMods": [],
				"explicitMods": [
					"+25 to Strength",
					"+23% to Fire Resistance",
					"+44% to Cold Resistance",
					"30% increased Movement Speed",
					"6% chance to Dodge Spell Hits"
				],
				"pseudoMods": [
					"(pseudo) +67% total Elemental Resistance",
					"(pseudo) +75.5 total maximum Life",
					"Sum: 218"
				],
				"accountText": "duketwo > dukedoo",
				"whisper": "@dukedoo Hi, I would like to buy your Armageddon Tread Goliath Greaves listed for 15 chaos in Metamorph (stash tab \"~price 15 chaos\"; position: left 3, top 9)",
				"priceText": "15 chaos",
				"evalValue": 218,
				"evalPrice": 15
			},
			{
				"id": "5caba12524a216adc94bc881367d0223b9be5da5d523edd788b07be7b9c274ae",
				"name": "Victory League",
				"sockets": [
					[
						"B",
						"B"
					]
				],
				"itemLevel": 82,
				"implicitMods": [],
				"explicitMods": [
					"+43% to Fire Resistance",
					"+15% to Cold Resistance",
					"+26% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +84% total Elemental Resistance",
					"(pseudo) +67 total maximum Life",
					"Sum: 218"
				],
				"accountText": "trouff > JolieBAGUETTE",
				"whisper": "@JolieBAGUETTE Hi, I would like to buy your Victory League Titan Greaves listed for 15 chaos in Metamorph (stash tab \"$x1\"; position: left 15, top 16)",
				"note": "~price 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 218,
				"evalPrice": 15
			},
			{
				"id": "4323828a3c2116e9cbdc0c5f8e988c117d5bc288499632dacdcc09184858bc16",
				"name": "Vengeance Spur",
				"sockets": [
					[
						"R",
						"R",
						"R"
					]
				],
				"itemLevel": 83,
				"implicitMods": [],
				"explicitMods": [
					"7% increased Armour",
					"+85 to maximum Life",
					"Regenerate 3.2 Life per second",
					"+8% to Fire Resistance",
					"+40% to Cold Resistance",
					"30% increased Movement Speed",
					"6% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +48% total Elemental Resistance",
					"(pseudo) +85 total maximum Life",
					"Sum: 218"
				],
				"accountText": "Warhole > Lous_Negromancer",
				"whisper": "@Lous_Negromancer Hi, I would like to buy your Vengeance Spur Ancient Greaves listed for 20 chaos in Metamorph (stash tab \"Sto2\"; position: left 2, top 10)",
				"note": "~b/o 20 chaos",
				"priceText": "20 chaos",
				"evalValue": 218,
				"evalPrice": 20
			},
			{
				"id": "c53082a16002bafc305f4e51784f6e87dc2e7ff9f3121b1beeb48d7161a994b2",
				"name": "Sol Spark",
				"sockets": [
					[
						"R"
					],
					[
						"R"
					]
				],
				"itemLevel": 83,
				"implicitMods": [],
				"explicitMods": [
					"+45 to Strength",
					"42% increased Armour",
					"+73 to maximum Life",
					"+18% to Fire Resistance",
					"+9% to Lightning Resistance",
					"30% increased Movement Speed",
					"17% increased Stun and Block Recovery",
					"6% chance to Dodge Spell Hits"
				],
				"pseudoMods": [
					"(pseudo) +27% total Elemental Resistance",
					"(pseudo) +95.5 total maximum Life",
					"Sum: 218"
				],
				"accountText": "Piu4u > Ordinka",
				"whisper": "@Ordinka Hi, I would like to buy your Sol Spark Goliath Greaves listed for 20 chaos in Metamorph (stash tab \"Trade\"; position: left 10, top 5)",
				"note": "~price 20 chaos",
				"priceText": "20 chaos",
				"evalValue": 218,
				"evalPrice": 20
			},
			{
				"id": "eaccf770a30e91305c205676db2f0425ad8fb79ee0b83bb11eaf7114e988076c",
				"name": "Morbid Dash",
				"sockets": [
					[
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 83,
				"implicitMods": [],
				"explicitMods": [
					"+20% to Fire Resistance",
					"+33% to Cold Resistance",
					"+41% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +94% total Elemental Resistance",
					"(pseudo) +62 total maximum Life",
					"Sum: 218"
				],
				"accountText": "perezo33 > bloodmaniua",
				"whisper": "@bloodmaniua Hi, I would like to buy your Morbid Dash Slink Boots listed for 23 chaos in Metamorph (stash tab \"kosz3\"; position: left 10, top 16)",
				"note": "~price 23 chaos",
				"priceText": "23 chaos",
				"evalValue": 218,
				"evalPrice": 23
			},
			{
				"id": "6fafc6b07b1e02d0975b5fd9ed40149eae944d85c6393bd1f1f6672f0c66992a",
				"name": "Ambush March",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 83,
				"implicitMods": [],
				"explicitMods": [
					"14% increased Rarity of Items found",
					"+26% to Fire Resistance",
					"+24% to Cold Resistance",
					"+44% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +94% total Elemental Resistance",
					"(pseudo) +62 total maximum Life",
					"Sum: 218"
				],
				"accountText": "Rayanors > Rayanor",
				"whisper": "@Rayanor Bonjour, je souhaiterais t'acheter Marche embusquée Bottes de furtivité pour 30 chaos dans la ligue Metamorph (onglet de réserve \"$\" ; 9e en partant de la gauche, 3e en partant du haut)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 218,
				"evalPrice": 30
			},
			{
				"id": "12296fda1add60f25eeb1f7c8736e6e964c627dd1b17ceb4f142a3a1f237a0af",
				"name": "Grim Pace",
				"sockets": [
					[
						"R",
						"R"
					]
				],
				"itemLevel": 79,
				"implicitMods": [],
				"explicitMods": [
					"+41 to Strength",
					"+17% to Fire Resistance",
					"+26% to Cold Resistance",
					"30% increased Movement Speed",
					"5% chance to Dodge Attack Hits"
				],
				"pseudoMods": [
					"(pseudo) +43% total Elemental Resistance",
					"(pseudo) +87.5 total maximum Life",
					"Sum: 218"
				],
				"accountText": "Dæmonit > MePuNCho",
				"whisper": "@MePuNCho Hi, I would like to buy your Grim Pace Antique Greaves listed for 35 chaos in Metamorph (stash tab \"•♠•S3•♠•\"; position: left 7, top 7)",
				"note": "~price 35 chaos",
				"priceText": "35 chaos",
				"evalValue": 218,
				"evalPrice": 35
			},
			{
				"id": "26938fdfe8b88ae982b2fd059b6fbb758303fe8333c64aca1ed193f5fa98c77e",
				"name": "Viper Hoof",
				"sockets": [
					[
						"R",
						"R"
					]
				],
				"itemLevel": 76,
				"implicitMods": [],
				"explicitMods": [
					"+17 to Armour",
					"+80 to maximum Life",
					"Regenerate 4 Life per second",
					"+39% to Fire Resistance",
					"+18% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +57% total Elemental Resistance",
					"(pseudo) +80 total maximum Life",
					"Sum: 217"
				],
				"accountText": "KingTurtle > MetaEld",
				"whisper": "@MetaEld Hi, I would like to buy your Viper Hoof Vaal Greaves listed for 10 chaos in Metamorph (stash tab \"sell\"; position: left 1, top 11)",
				"note": "~price 10 chaos",
				"priceText": "10 chaos",
				"evalValue": 217,
				"evalPrice": 10
			},
			{
				"id": "d255e96557cba55d0e06c767c40d90dfc0afb0c839344f1f7f32d7803a52b6bd",
				"name": "Vortex Stride",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 76,
				"implicitMods": [],
				"explicitMods": [
					"+39 to Strength",
					"87% increased Armour",
					"6% increased Rarity of Items found",
					"+44% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +44% total Elemental Resistance",
					"(pseudo) +86.5 total maximum Life",
					"Sum: 217"
				],
				"accountText": "MarshMellow75 > Sparky_SlayerXX",
				"whisper": "@Sparky_SlayerXX Hi, I would like to buy your Vortex Stride Goliath Greaves listed for 12 chaos in Metamorph (stash tab \"$$\"; position: left 9, top 5)",
				"note": "~price 12 chaos",
				"priceText": "12 chaos",
				"evalValue": 217,
				"evalPrice": 12
			},
			{
				"id": "04affa7d34cf63aef6878b24687baa65fc61f6dcd0c612650d40a5e24e5d61fb",
				"name": "Skull Hoof",
				"sockets": [
					[
						"B"
					]
				],
				"itemLevel": 81,
				"implicitMods": [],
				"explicitMods": [
					"39% increased Armour and Evasion",
					"+43% to Fire Resistance",
					"+36% to Lightning Resistance",
					"30% increased Movement Speed",
					"17% increased Stun and Block Recovery",
					"6% chance to Dodge Attack Hits"
				],
				"pseudoMods": [
					"(pseudo) +79% total Elemental Resistance",
					"(pseudo) +69 total maximum Life",
					"Sum: 217"
				],
				"accountText": "Galendril > Alazra",
				"whisper": "@Alazra Hi, I would like to buy your Skull Hoof Serpentscale Boots listed for 25 chaos in Metamorph (stash tab \"For sale\"; position: left 1, top 5)",
				"note": "~price 25 chaos",
				"priceText": "25 chaos",
				"evalValue": 217,
				"evalPrice": 25
			},
			{
				"id": "95c2f4670ff7de4f9dbb94b4808b5d04751af5e8cc7136a36bbb2e3b7d4ff251",
				"name": "Doom League",
				"sockets": [
					[
						"R",
						"R"
					]
				],
				"itemLevel": 79,
				"implicitMods": [],
				"explicitMods": [
					"32% reduced Attribute Requirements",
					"39% increased Armour and Evasion",
					"+88 to maximum Life",
					"10% increased Rarity of Items found",
					"+41% to Lightning Resistance",
					"30% increased Movement Speed",
					"16% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +41% total Elemental Resistance",
					"(pseudo) +88 total maximum Life",
					"Sum: 217"
				],
				"accountText": "Diablohan > Metamorph_Frozenvoid",
				"whisper": "@Metamorph_Frozenvoid Hi, I would like to buy your Doom League Wyrmscale Boots listed for 25 chaos in Metamorph (stash tab \"$$$\"; position: left 11, top 1)",
				"note": "~price 25 chaos",
				"priceText": "25 chaos",
				"evalValue": 217,
				"evalPrice": 25
			},
			{
				"id": "b4a144c1d1cd29eef543fecb2a275f99e690939d749170cbdc36d01b967cb5de",
				"name": "Nemesis Track",
				"sockets": [
					[
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 85,
				"implicitMods": [],
				"explicitMods": [
					"+86 to maximum Life",
					"+12% to Cold Resistance",
					"30% increased Movement Speed",
					"22% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +45% total Elemental Resistance",
					"(pseudo) +86 total maximum Life",
					"Sum: 217"
				],
				"accountText": "Vrrrruno > ZombieWithMyEyesClosed",
				"whisper": "@ZombieWithMyEyesClosed Hi, I would like to buy your Nemesis Track Stealth Boots listed for 30 chaos in Metamorph (stash tab \"A\"; position: left 4, top 10)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 217,
				"evalPrice": 30
			},
			{
				"id": "2aec9945fecd9cebb4a3f8bcdf8ef77ae0a1ff39889d10b5921a042392dadf5b",
				"name": "Mind Sole",
				"sockets": [
					[
						"R"
					],
					[
						"B",
						"R"
					],
					[
						"R"
					]
				],
				"itemLevel": 76,
				"implicitMods": [],
				"explicitMods": [
					"+70 to maximum Life",
					"Regenerate 5.5 Life per second",
					"+39% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +77% total Elemental Resistance",
					"(pseudo) +70 total maximum Life",
					"Sum: 217"
				],
				"accountText": "Profatum > Infractus",
				"whisper": "@Infractus Hi, I would like to buy your Mind Sole Ancient Greaves listed for 30 chaos in Metamorph (stash tab \"$$$\"; position: left 1, top 5)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 217,
				"evalPrice": 30
			},
			{
				"id": "91a1f0eaebcbc07402f1bd7ec8fd625ae3955f7f4901dd5a21015de4f24394e4",
				"name": "Rage League",
				"sockets": [
					[
						"G"
					],
					[
						"G"
					],
					[
						"G"
					]
				],
				"itemLevel": 69,
				"implicitMods": [],
				"explicitMods": [
					"+40% to Fire Resistance",
					"+38% to Cold Resistance",
					"30% increased Movement Speed",
					"11% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +78% total Elemental Resistance",
					"(pseudo) +69 total maximum Life",
					"Sum: 216"
				],
				"accountText": "료진아데 > 돌아라네크여",
				"whisper": "@돌아라네크여 안녕하세요, 변형(보관함 탭 \"트2\", 위치: 왼쪽 5, 상단 11)에 10 chaos(으)로 올려놓은 격노 리그 거친 생가죽 장화을(를) 구매하고 싶습니다",
				"note": "~price 10 chaos",
				"priceText": "10 chaos",
				"evalValue": 216,
				"evalPrice": 10
			},
			{
				"id": "d7c07e9a4eda5e416832275aa0096881ca8d19ef2982e80d69047dd6b6796068",
				"name": "Dire Track",
				"sockets": [
					[
						"B"
					]
				],
				"itemLevel": 68,
				"implicitMods": [],
				"explicitMods": [
					"18% reduced Attribute Requirements",
					"+24 to Armour",
					"+28 to maximum Life",
					"+28% to Fire Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +28% total Elemental Resistance",
					"(pseudo) +94 total maximum Life",
					"Sum: 216"
				],
				"accountText": "BongoPants > ThrowUrWitcherACoin",
				"whisper": "@ThrowUrWitcherACoin Hi, I would like to buy your Dire Track Hydrascale Boots listed for 30 chaos in Metamorph (stash tab \"~price 9 chaos\"; position: left 1, top 1)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 216,
				"evalPrice": 30
			},
			{
				"id": "044494813fb481807f13e4688fecf9c078ad58d403bdd699b4dd04545f80452f",
				"name": "Glyph Tread",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 72,
				"implicitMods": [],
				"explicitMods": [
					"+84 to maximum Life",
					"Regenerate 5.8 Life per second",
					"+20% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +48% total Elemental Resistance",
					"(pseudo) +84 total maximum Life",
					"Sum: 216"
				],
				"accountText": "jhunrocky > spermina",
				"whisper": "@spermina Hi, I would like to buy your Glyph Tread Vaal Greaves listed for 30 chaos in Metamorph (stash tab \"junky\"; position: left 11, top 11)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 216,
				"evalPrice": 30
			},
			{
				"id": "a286f854640fb760c61578cc8144e14c4e92f80c6d59dd4253424a017837a7b6",
				"name": "Entropy Goad",
				"sockets": [
					[
						"B"
					]
				],
				"itemLevel": 85,
				"implicitMods": [],
				"explicitMods": [
					"+3 to Armour",
					"+4 to maximum Energy Shield",
					"+44% to Fire Resistance",
					"+44% to Cold Resistance",
					"30% increased Movement Speed",
					"5% chance to Dodge Attack Hits"
				],
				"pseudoMods": [
					"(pseudo) +88% total Elemental Resistance",
					"(pseudo) +64 total maximum Life",
					"Sum: 216"
				],
				"accountText": "제니스st > 제니스cc",
				"whisper": "@제니스cc 안녕하세요, 변형(보관함 탭 \"프리미엄\", 위치: 왼쪽 1, 상단 3)에 30 chaos(으)로 올려놓은 엔트로피 몰이 막대 군단 장화을(를) 구매하고 싶습니다",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 216,
				"evalPrice": 30
			},
			{
				"id": "ea471ec58b0df349de46f3217f29a48b582d28af4d87a5003cfe286bc5851d71",
				"name": "Havoc Hoof",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 72,
				"implicitMods": [],
				"explicitMods": [
					"+86 to maximum Life",
					"15% increased Rarity of Items found",
					"+14% to Fire Resistance",
					"30% increased Movement Speed",
					"5% increased Movement Speed if you haven't been Hit Recently"
				],
				"pseudoMods": [
					"(pseudo) +44% total Elemental Resistance",
					"(pseudo) +86 total maximum Life",
					"Sum: 216"
				],
				"accountText": "ballbaro > bK_vAAL",
				"whisper": "@bK_vAAL Hi, I would like to buy your Havoc Hoof Carnal Boots listed for 35 chaos in Metamorph (stash tab \"$\"; position: left 1, top 3)",
				"note": "~price 35 chaos",
				"priceText": "35 chaos",
				"evalValue": 216,
				"evalPrice": 35
			},
			{
				"id": "1ecdc7af1ca83ebd40c9840fe52263e571081040ac8b67ac168402b1c1599831",
				"name": "Soul Track",
				"sockets": [
					[
						"G",
						"R"
					],
					[
						"G",
						"G"
					]
				],
				"itemLevel": 85,
				"implicitMods": [],
				"explicitMods": [
					"+7 to Armour",
					"+3 to Evasion Rating",
					"+31% to Fire Resistance",
					"+37% to Cold Resistance",
					"+22% to Lightning Resistance",
					"30% increased Movement Speed",
					"5% increased Movement Speed if you haven't been Hit Recently"
				],
				"pseudoMods": [
					"(pseudo) +90% total Elemental Resistance",
					"(pseudo) +63 total maximum Life",
					"Sum: 216"
				],
				"accountText": "xcid01 > noxion_k",
				"whisper": "@noxion_k Hi, I would like to buy your Soul Track Hydrascale Boots listed for 35 chaos in Metamorph (stash tab \"tr\"; position: left 11, top 3)",
				"note": "~price 35 chaos",
				"priceText": "35 chaos",
				"evalValue": 216,
				"evalPrice": 35
			},
			{
				"id": "3dd6dd06198a32be691907414c2db54b36cb54542fbb91fed4ea5e359a18d2f5",
				"name": "Apocalypse Goad",
				"sockets": [
					[
						"G",
						"R",
						"B"
					]
				],
				"itemLevel": 70,
				"implicitMods": [],
				"explicitMods": [
					"+36 to Dexterity",
					"+81 to maximum Life",
					"15% increased Rarity of Items found",
					"+37% to Cold Resistance",
					"+16% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +53% total Elemental Resistance",
					"(pseudo) +81 total maximum Life",
					"Sum: 215"
				],
				"accountText": "noisyass2 > ikotmolang",
				"whisper": "@ikotmolang Hi, I would like to buy your Apocalypse Goad Hydrascale Boots listed for 5 chaos in Metamorph (stash tab \"~b/o  chaos\"; position: left 18, top 16)",
				"note": "~price 5 chaos",
				"priceText": "5 chaos",
				"evalValue": 215,
				"evalPrice": 5
			},
			{
				"id": "a55ccf9bb1f6bdbb39fd35c57a8c91dcbbdb1f3f646f5764de13e34b15c8cba5",
				"name": "Hate Track",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"G"
					]
				],
				"itemLevel": 79,
				"implicitMods": [
					"+12% to Fire and Cold Resistances"
				],
				"explicitMods": [
					"+6 to Armour",
					"+6 to Evasion Rating",
					"+88 to maximum Life",
					"Regenerate 14.2 Life per second",
					"30% increased Movement Speed",
					"24% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +39% total Elemental Resistance",
					"(pseudo) +88 total maximum Life",
					"Sum: 215"
				],
				"accountText": "PockeTy > HOKAGE_PockeT",
				"whisper": "@HOKAGE_PockeT Hi, I would like to buy your Hate Track Two-Toned Boots listed for 15 chaos in Metamorph (stash tab \"~price 15 chaos\"; position: left 23, top 23)",
				"priceText": "15 chaos",
				"evalValue": 215,
				"evalPrice": 15
			},
			{
				"id": "1be0af0b5830055174fd100d7efceda6acc48fd5b3d64b12176f70e1f854058a",
				"name": "Sol Hoof",
				"sockets": [
					[
						"G"
					],
					[
						"G"
					]
				],
				"itemLevel": 82,
				"implicitMods": [],
				"explicitMods": [
					"+13 to Dexterity",
					"+25 to Evasion Rating",
					"+27 to maximum Life",
					"+41% to Fire Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +41% total Elemental Resistance",
					"(pseudo) +87 total maximum Life",
					"Sum: 215"
				],
				"accountText": "trueyoung > __lllllll__",
				"whisper": "@__lllllll__ Hi, I would like to buy your Sol Hoof Shagreen Boots listed for 15 chaos in Metamorph (stash tab \"鞋2\"; position: left 1, top 11)",
				"note": "~price 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 215,
				"evalPrice": 15
			},
			{
				"id": "012ed1b45119afb5c5150b5e673105b5b577411fad869b840b4718cd29c3fa72",
				"name": "Glyph League",
				"sockets": [
					[
						"G",
						"G",
						"R"
					],
					[
						"G"
					]
				],
				"itemLevel": 74,
				"implicitMods": [],
				"explicitMods": [
					"72% increased Evasion Rating",
					"+84 to maximum Life",
					"Regenerate 1.9 Life per second",
					"+39% to Fire Resistance",
					"+8% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +47% total Elemental Resistance",
					"(pseudo) +84 total maximum Life",
					"Sum: 215"
				],
				"accountText": "LICHYYYYYYYYYYYYYYYYYYY > Flotter_Finder",
				"whisper": "@Flotter_Finder Hi, I would like to buy your Glyph League Shagreen Boots listed for 20 chaos in Metamorph (stash tab \"$$$\"; position: left 4, top 11)",
				"note": "~price 20 chaos",
				"priceText": "20 chaos",
				"evalValue": 215,
				"evalPrice": 20
			},
			{
				"id": "8e40d767f1751134901d7596637fd8ec27ed75c0891a65139789fd33b02fa6bb",
				"name": "Morbid Sole",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 70,
				"implicitMods": [
					"+10% to Fire and Lightning Resistances"
				],
				"explicitMods": [
					"+18% to Fire Resistance",
					"+39% to Lightning Resistance",
					"30% increased Movement Speed",
					"21% chance to Avoid being Frozen"
				],
				"pseudoMods": [
					"(pseudo) +77% total Elemental Resistance",
					"(pseudo) +69 total maximum Life",
					"Sum: 215"
				],
				"accountText": "FamousWarrior > REDASSBABOONone",
				"whisper": "@REDASSBABOONone Hi, I would like to buy your Morbid Sole Two-Toned Boots listed for 20 chaos in Metamorph (stash tab \"vraft\"; position: left 3, top 1)",
				"note": "~price 20 chaos",
				"priceText": "20 chaos",
				"evalValue": 215,
				"evalPrice": 20
			},
			{
				"id": "a0d7a5dd5aedb9012f25d3989cba7d468f7a4995f3a9e36ce3a7a01660f72cc6",
				"name": "Behemoth Trail",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 82,
				"implicitMods": [],
				"explicitMods": [
					"+79 to maximum Life",
					"Regenerate 2.5 Life per second",
					"+31% to Fire Resistance",
					"30% increased Movement Speed",
					"5% chance to Dodge Attack Hits"
				],
				"pseudoMods": [
					"(pseudo) +31% total Elemental Resistance",
					"(pseudo) +92 total maximum Life",
					"Sum: 215"
				],
				"accountText": "niksunorz66 > PeppuSepi",
				"whisper": "@PeppuSepi Hi, I would like to buy your Behemoth Trail Legion Boots listed for 25 chaos in Metamorph (stash tab \"shop1\"; position: left 4, top 11)",
				"note": "~price 25 chaos",
				"priceText": "25 chaos",
				"evalValue": 215,
				"evalPrice": 25
			},
			{
				"id": "d8dbca5a4ffbe398f49d9a4d3e5b04033b610bfd74e73f44a0aed11c6f40367d",
				"name": "Dusk Spur",
				"sockets": [
					[
						"G"
					],
					[
						"B",
						"B",
						"B"
					]
				],
				"itemLevel": 74,
				"implicitMods": [],
				"explicitMods": [
					"32% reduced Attribute Requirements",
					"+81 to maximum Life",
					"+22 to maximum Mana",
					"+15% to Fire Resistance",
					"+38% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +53% total Elemental Resistance",
					"(pseudo) +81 total maximum Life",
					"Sum: 215"
				],
				"accountText": "e델츠 > we델츠ew",
				"whisper": "@we델츠ew 안녕하세요, 변형(보관함 탭 \"거래\", 위치: 왼쪽 3, 상단 4)에 30 chaos(으)로 올려놓은 황혼 박차 군단 장화을(를) 구매하고 싶습니다",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 215,
				"evalPrice": 30
			},
			{
				"id": "bbe7b2bfc56f19387bac08b9e473e95b786615106192d9f30cc66805a1499866",
				"name": "Skull Trail",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 79,
				"implicitMods": [],
				"explicitMods": [
					"18% reduced Attribute Requirements",
					"+81 to maximum Life",
					"+27% to Cold Resistance",
					"30% increased Movement Speed",
					"24% increased Stun and Block Recovery",
					"6% chance to Dodge Spell Hits"
				],
				"pseudoMods": [
					"(pseudo) +27% total Elemental Resistance",
					"(pseudo) +94 total maximum Life",
					"Sum: 215"
				],
				"accountText": "MrzloPivo > RiseMyMinions",
				"whisper": "@RiseMyMinions Hi, I would like to buy your Skull Trail Ancient Greaves listed for 30 chaos in Metamorph (stash tab \"sale\"; position: left 1, top 8)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 215,
				"evalPrice": 30
			},
			{
				"id": "0d8b3f696e5a7dc13274c2ac2e12d0e781bd15443dff3cf49d24312b32785487",
				"name": "Foe Track",
				"sockets": [
					[
						"B",
						"R"
					]
				],
				"itemLevel": 71,
				"implicitMods": [],
				"explicitMods": [
					"+24 to Strength",
					"+5 to Armour",
					"+78 to maximum Life",
					"+23% to Fire Resistance",
					"+11% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +34% total Elemental Resistance",
					"(pseudo) +90 total maximum Life",
					"Sum: 214"
				],
				"accountText": "Wasabicannon > MetaWasabiSummoner",
				"whisper": "@MetaWasabiSummoner Hi, I would like to buy your Foe Track Goliath Greaves listed for 10 chaos in Metamorph (stash tab \"Sale\"; position: left 23, top 23)",
				"note": "~price 10 chaos",
				"priceText": "10 chaos",
				"evalValue": 214,
				"evalPrice": 10
			},
			{
				"id": "6c2cb20120cea614d9d912e885dd45766d25e7b0f633fba8660a7918e6116634",
				"name": "Soul Dash",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 74,
				"implicitMods": [],
				"explicitMods": [
					"+41 to Dexterity",
					"+5 to Evasion Rating",
					"+42% to Fire Resistance",
					"+36% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +78% total Elemental Resistance",
					"(pseudo) +68 total maximum Life",
					"Sum: 214"
				],
				"accountText": "트로스트 > NESCAFE_ICE",
				"whisper": "@NESCAFE_ICE 안녕하세요, 변형(보관함 탭 \"PC방1\", 위치: 왼쪽 9, 상단 1)에 20 chaos(으)로 올려놓은 영혼 질주 송아지 가죽 장화을(를) 구매하고 싶습니다",
				"note": "~price 20 chaos",
				"priceText": "20 chaos",
				"evalValue": 214,
				"evalPrice": 20
			},
			{
				"id": "3044b320b2ee5117409e37450417d03c1f09716a4d03fa817d8e9934afa845a4",
				"name": "Doom Spark",
				"sockets": [
					[
						"B"
					]
				],
				"itemLevel": 82,
				"implicitMods": [],
				"explicitMods": [
					"40% increased Energy Shield",
					"+70 to maximum Life",
					"+35% to Cold Resistance",
					"+39% to Lightning Resistance",
					"30% increased Movement Speed",
					"27% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +74% total Elemental Resistance",
					"(pseudo) +70 total maximum Life",
					"Sum: 214"
				],
				"accountText": "kiemcacson > Bap_DaiCa",
				"whisper": "@Bap_DaiCa Hi, I would like to buy your Doom Spark Sorcerer Boots listed for 20 chaos in Metamorph (stash tab \"trade\"; position: left 5, top 2)",
				"note": "~price 20 chaos",
				"priceText": "20 chaos",
				"evalValue": 214,
				"evalPrice": 20
			},
			{
				"id": "aa626c02efb8aa0a56572db4d0ff30567ebeb40f866c0ae27b582b68cc2ca9a8",
				"name": "Havoc March",
				"sockets": [
					[
						"G"
					],
					[
						"R"
					]
				],
				"itemLevel": 73,
				"implicitMods": [],
				"explicitMods": [
					"+11 to Strength",
					"23% increased Armour",
					"+67 to maximum Life",
					"+40% to Cold Resistance",
					"+29% to Lightning Resistance",
					"30% increased Movement Speed",
					"10% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +69% total Elemental Resistance",
					"(pseudo) +72.5 total maximum Life",
					"Sum: 214"
				],
				"accountText": "Thamngu > Icelance",
				"whisper": "@Icelance Hi, I would like to buy your Havoc March Goliath Greaves listed for 25 chaos in Metamorph (stash tab \"Mantis\"; position: left 2, top 8)",
				"note": "~price 25 chaos",
				"priceText": "25 chaos",
				"evalValue": 214,
				"evalPrice": 25
			},
			{
				"id": "13e67d6e096247bbda3d9eb642685c7814ebd4a8e03e340a6ed7163f5c083927",
				"name": "Blood Road",
				"sockets": [
					[
						"R",
						"B",
						"B",
						"G"
					]
				],
				"itemLevel": 74,
				"implicitMods": [],
				"explicitMods": [
					"+13 to Strength",
					"+21 to Evasion Rating",
					"+28 to maximum Life",
					"+45% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +45% total Elemental Resistance",
					"(pseudo) +84.5 total maximum Life",
					"Sum: 214"
				],
				"accountText": "이센트리 > 시불롱",
				"whisper": "@시불롱 안녕하세요, 변형(보관함 탭 \"경매2 \", 위치: 왼쪽 10, 상단 8)에 30 chaos(으)로 올려놓은 피의 길 히드라 비늘 장화을(를) 구매하고 싶습니다",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 214,
				"evalPrice": 30
			},
			{
				"id": "c89c5ad87223014dcaef18fb96626435b26b7edee8e6a9e13cd0b4de1f1566d3",
				"name": "Agony Hoof",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 83,
				"implicitMods": [],
				"explicitMods": [
					"+44% to Cold Resistance",
					"+34% to Lightning Resistance",
					"30% increased Movement Speed",
					"28% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +78% total Elemental Resistance",
					"(pseudo) +68 total maximum Life",
					"Sum: 214"
				],
				"accountText": "HongJinHo > Altertritzi",
				"whisper": "@Altertritzi Hi, I would like to buy your Agony Hoof Zealot Boots listed for 30 chaos in Metamorph (stash tab \"@\"; position: left 1, top 11)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 214,
				"evalPrice": 30
			},
			{
				"id": "bd2471864a5a70aad3e67d7a038334eb42976d30abc81038321903cfad054679",
				"name": "Corruption Dash",
				"sockets": [
					[
						"B",
						"R"
					],
					[
						"G"
					]
				],
				"itemLevel": 85,
				"implicitMods": [],
				"explicitMods": [
					"Regenerate 5.6 Life per second",
					"+40% to Cold Resistance",
					"+46% to Lightning Resistance",
					"30% increased Movement Speed",
					"5% increased Movement Speed if you haven't been Hit Recently"
				],
				"pseudoMods": [
					"(pseudo) +86% total Elemental Resistance",
					"(pseudo) +64 total maximum Life",
					"Sum: 214"
				],
				"accountText": "g0dspeed12 > ogodspeedo",
				"whisper": "@ogodspeedo Hi, I would like to buy your Corruption Dash Legion Boots listed for 35 chaos in Metamorph (stash tab \"Sell\"; position: left 12, top 8)",
				"note": "~price 35 chaos",
				"priceText": "35 chaos",
				"evalValue": 214,
				"evalPrice": 35
			},
			{
				"id": "20cddeb075ad176f2d58624bd27c7deffcd7664f95542fc1f6daf0f806e02558",
				"name": "Demon Goad",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 73,
				"implicitMods": [],
				"explicitMods": [
					"+8 to Strength",
					"19% increased Armour and Evasion",
					"+82 to maximum Life",
					"+41% to Cold Resistance",
					"30% increased Movement Speed",
					"30% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +41% total Elemental Resistance",
					"(pseudo) +86 total maximum Life",
					"Sum: 213"
				],
				"accountText": "Joddo3000 > 유진힘네크",
				"whisper": "@유진힘네크 안녕하세요, 변형(보관함 탭 \"잡템\", 위치: 왼쪽 11, 상단 17)에 10 chaos(으)로 올려놓은 악마 몰이 막대 강철 비늘 장화을(를) 구매하고 싶습니다",
				"note": "~price 10 chaos",
				"priceText": "10 chaos",
				"evalValue": 213,
				"evalPrice": 10
			},
			{
				"id": "8845dcae661a63547d2b91535b29486ed662a3630a0b6ab441785bd669b2d667",
				"name": "Hate Span",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 81,
				"implicitMods": [],
				"explicitMods": [
					"+11 to Dexterity",
					"39% increased Evasion Rating",
					"+42% to Fire Resistance",
					"+35% to Lightning Resistance",
					"30% increased Movement Speed",
					"17% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +77% total Elemental Resistance",
					"(pseudo) +68 total maximum Life",
					"Sum: 213"
				],
				"accountText": "tdr > GermanGooGirl",
				"whisper": "@GermanGooGirl Hi, I would like to buy your Hate Span Nubuck Boots listed for 10 chaos in Metamorph (stash tab \"Sale2\"; position: left 9, top 11)",
				"note": "~price 10 chaos",
				"priceText": "10 chaos",
				"evalValue": 213,
				"evalPrice": 10
			},
			{
				"id": "0e5a13ad96302b797b4306b5e5557e2d44fd7f7a55541024ece1c42f8e940aad",
				"name": "Blood Hoof",
				"sockets": [
					[
						"B"
					]
				],
				"itemLevel": 71,
				"implicitMods": [],
				"explicitMods": [
					"+40 to Evasion Rating",
					"+98 to maximum Life",
					"Regenerate 2.5 Life per second",
					"+17% to Lightning Resistance",
					"30% increased Movement Speed",
					"20% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +17% total Elemental Resistance",
					"(pseudo) +98 total maximum Life",
					"Sum: 213"
				],
				"accountText": "Zeb_2 > Y_love_Me",
				"whisper": "@Y_love_Me  สวัสดี, เราต้องการจะชื้อของคุณ Blood Hoof Shagreen Boots ใน ราคา 10 chaos ใน Metamorph (stash tab \"รายอัน 4\"; ตำแหน่ง: ซ้าย 8, บน 7)",
				"note": "~price 10 chaos",
				"priceText": "10 chaos",
				"evalValue": 213,
				"evalPrice": 10
			},
			{
				"id": "0c12d557cc51a9ac93ecf801289faea37bf8ced60073c6e2fc6964fa41baf972",
				"name": "Wrath Sole",
				"sockets": [
					[
						"R",
						"R"
					],
					[
						"R"
					]
				],
				"itemLevel": 79,
				"implicitMods": [],
				"explicitMods": [
					"20% increased Evasion Rating",
					"+84 to maximum Life",
					"Regenerate 4.8 Life per second",
					"+37% to Fire Resistance",
					"+8% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +45% total Elemental Resistance",
					"(pseudo) +84 total maximum Life",
					"Sum: 213"
				],
				"accountText": "Ravster_Br > Bielarith",
				"whisper": "@Bielarith Hi, I would like to buy your Wrath Sole Sharkskin Boots listed for 10 chaos in Metamorph (stash tab \"Premium\"; position: left 16, top 19)",
				"note": "~price 10 chaos",
				"priceText": "10 chaos",
				"evalValue": 213,
				"evalPrice": 10
			},
			{
				"id": "ec2c5c16a72d8480f8fb12496ebc4d3a70a045cdab8de750ff13335218f84ba7",
				"name": "Dire Spur",
				"sockets": [
					[
						"G",
						"G"
					]
				],
				"itemLevel": 81,
				"implicitMods": [],
				"explicitMods": [
					"+31 to Strength",
					"+16 to Armour",
					"+21 to maximum Life",
					"+40% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +40% total Elemental Resistance",
					"(pseudo) +86.5 total maximum Life",
					"Sum: 213"
				],
				"accountText": "yzxumin > NecroXumin",
				"whisper": "@NecroXumin Hi, I would like to buy your Dire Spur Serpentscale Boots listed for 15 chaos in Metamorph (stash tab \"B2\"; position: left 2, top 3)",
				"note": "~price 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 213,
				"evalPrice": 15
			},
			{
				"id": "ae57e2d1e85a137023a59d35c0fe2f396df87441aaa267f4bcd60e853a6eb894",
				"name": "Behemoth League",
				"sockets": [
					[
						"G",
						"G",
						"B"
					],
					[
						"R"
					]
				],
				"itemLevel": 72,
				"implicitMods": [],
				"explicitMods": [
					"12% increased Armour and Evasion",
					"Regenerate 4.9 Life per second",
					"+34% to Cold Resistance",
					"+45% to Lightning Resistance",
					"30% increased Movement Speed",
					"7% increased Stun and Block Recovery",
					"5% increased Movement Speed if you haven't been Hit Recently"
				],
				"pseudoMods": [
					"(pseudo) +79% total Elemental Resistance",
					"(pseudo) +67 total maximum Life",
					"Sum: 213"
				],
				"accountText": "Groves_ > Gwyndien",
				"whisper": "@Gwyndien Hi, I would like to buy your Behemoth League Serpentscale Boots listed for 15 chaos in Metamorph (stash tab \"Supa\"; position: left 1, top 17)",
				"note": "~price 15 chaos",
				"priceText": "15 chaos",
				"evalValue": 213,
				"evalPrice": 15
			},
			{
				"id": "f4199eda9399a8b7744ad5ed3d4a5a735c730c5c21862732d5e6703f451b4dc3",
				"name": "Gale Goad",
				"sockets": [
					[
						"G",
						"G",
						"R"
					],
					[
						"G"
					]
				],
				"itemLevel": 75,
				"implicitMods": [],
				"explicitMods": [
					"+17 to Evasion Rating",
					"+21 to maximum Life",
					"Regenerate 1.6 Life per second",
					"+43% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +43% total Elemental Resistance",
					"(pseudo) +85 total maximum Life",
					"Sum: 213"
				],
				"accountText": "llexcell > TheOldCoom",
				"whisper": "@TheOldCoom Hi, I would like to buy your Gale Goad Shagreen Boots listed for 18 chaos in Metamorph (stash tab \"Sale\"; position: left 17, top 1)",
				"note": "~price 18 chaos",
				"priceText": "18 chaos",
				"evalValue": 213,
				"evalPrice": 18
			},
			{
				"id": "6fa82b130ad99bbd4dc29fb3d8368b0f310012703304b49bff61a44bff64d25f",
				"name": "Gloom Goad",
				"sockets": [
					[
						"G"
					],
					[
						"G"
					]
				],
				"itemLevel": 73,
				"implicitMods": [],
				"explicitMods": [
					"+66 to maximum Life",
					"+39% to Cold Resistance",
					"+16% to Lightning Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +81% total Elemental Resistance",
					"(pseudo) +66 total maximum Life",
					"Sum: 213"
				],
				"accountText": "calvinasleep > IkonMetaCrawlers",
				"whisper": "@IkonMetaCrawlers Hi, I would like to buy your Gloom Goad Shagreen Boots listed for 20 chaos in Metamorph (stash tab \"~b/o 20 chaos\"; position: left 3, top 9)",
				"priceText": "20 chaos",
				"evalValue": 213,
				"evalPrice": 20
			},
			{
				"id": "4364ea7dbfe337762fe1e8c9cc45182f9e0eaaaceb6a835ec868e1c49cc21898",
				"name": "Pandemonium Sole",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 73,
				"implicitMods": [],
				"explicitMods": [
					"+45% to Fire Resistance",
					"+42% to Lightning Resistance",
					"30% increased Movement Speed",
					"16% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +87% total Elemental Resistance",
					"(pseudo) +63 total maximum Life",
					"Sum: 213"
				],
				"accountText": "연옥이 > 이쁜옥이님",
				"whisper": "@이쁜옥이님 안녕하세요, 변형(보관함 탭 \"~price 25 chaos\", 위치: 왼쪽 1, 상단 21)에 25 chaos(으)로 올려놓은 혼란 유발의 밑창 상어가죽 장화을(를) 구매하고 싶습니다",
				"priceText": "25 chaos",
				"evalValue": 213,
				"evalPrice": 25
			},
			{
				"id": "e6a769b5cf41f9ba31bbe92d89c00cad28bd2e45624c69bbe27690002790c0a9",
				"name": "Empyrean Spark",
				"sockets": [
					[
						"R",
						"R"
					]
				],
				"itemLevel": 77,
				"implicitMods": [],
				"explicitMods": [
					"+8 to Strength",
					"+15 to Armour",
					"+20 to maximum Life",
					"+22% to Fire Resistance",
					"+17% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +39% total Elemental Resistance",
					"(pseudo) +87 total maximum Life",
					"Sum: 213"
				],
				"accountText": "에이피컬 > 사계비왕",
				"whisper": "@사계비왕 안녕하세요, 변형(보관함 탭 \"경매2\", 위치: 왼쪽 5, 상단 9)에 25 chaos(으)로 올려놓은 천공인 불꽃 거인 각반을(를) 구매하고 싶습니다",
				"note": "~price 25 chaos",
				"priceText": "25 chaos",
				"evalValue": 213,
				"evalPrice": 25
			},
			{
				"id": "3c2076a925d95c3ea1708026b2911352ed9bcdb0a45bb152bf60da27858cc610",
				"name": "Dire Spark",
				"sockets": [
					[
						"R"
					],
					[
						"R"
					],
					[
						"R"
					]
				],
				"itemLevel": 84,
				"implicitMods": [],
				"explicitMods": [
					"+53 to Strength",
					"+68 to maximum Life",
					"+24% to Cold Resistance",
					"30% increased Movement Speed",
					"14% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +24% total Elemental Resistance",
					"(pseudo) +94.5 total maximum Life",
					"Sum: 213"
				],
				"accountText": "Xerberuus > Krunchii",
				"whisper": "@Krunchii Hi, I would like to buy your Dire Spark Titan Greaves listed for 28 chaos in Metamorph (stash tab \"$$\"; position: left 3, top 19)",
				"note": "~price 28 chaos",
				"priceText": "28 chaos",
				"evalValue": 213,
				"evalPrice": 28
			},
			{
				"id": "0a2982e2e3f8df212a35a14a2530b84948dce59c775322cb05cdd261e53360a1",
				"name": "Skull Goad",
				"sockets": [
					[
						"G"
					],
					[
						"R"
					]
				],
				"itemLevel": 71,
				"implicitMods": [],
				"explicitMods": [
					"18% reduced Attribute Requirements",
					"+85 to maximum Life",
					"+19% to Fire Resistance",
					"+24% to Lightning Resistance",
					"30% increased Movement Speed",
					"5% increased Movement Speed if you haven't been Hit Recently"
				],
				"pseudoMods": [
					"(pseudo) +43% total Elemental Resistance",
					"(pseudo) +85 total maximum Life",
					"Sum: 213"
				],
				"accountText": "18TheRock > Meta_Necro_S",
				"whisper": "@Meta_Necro_S Hi, I would like to buy your Skull Goad Dragonscale Boots listed for 30 chaos in Metamorph (stash tab \"$\"; position: left 11, top 9)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 213,
				"evalPrice": 30
			},
			{
				"id": "b0c6bfc15b4697fdf7455a5bc811c6fb71588ca5e20355489323e7fb93f1e73a",
				"name": "Tempest Stride",
				"sockets": [
					[
						"R",
						"R"
					]
				],
				"itemLevel": 79,
				"implicitMods": [],
				"explicitMods": [
					"+77 to maximum Life",
					"+43% to Fire Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +43% total Elemental Resistance",
					"(pseudo) +85 total maximum Life",
					"Sum: 213"
				],
				"accountText": "barock1 > 할배여가자",
				"whisper": "@할배여가자 안녕하세요, 변형(보관함 탭 \"znjem\", 위치: 왼쪽 9, 상단 2)에 30 chaos(으)로 올려놓은 폭풍 질주 아룡 비늘 장화을(를) 구매하고 싶습니다",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 213,
				"evalPrice": 30
			},
			{
				"id": "ed9e293fd79c97599c2711fbc204b705693af8094dc37f945e845507e20284d8",
				"name": "Vengeance Road",
				"sockets": [
					[
						"G"
					],
					[
						"G"
					]
				],
				"itemLevel": 72,
				"implicitMods": [],
				"explicitMods": [
					"+10 to Strength",
					"25% increased Armour and Evasion",
					"+80 to maximum Life",
					"+7% to Cold Resistance",
					"+36% to Lightning Resistance",
					"30% increased Movement Speed",
					"10% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +43% total Elemental Resistance",
					"(pseudo) +85 total maximum Life",
					"Sum: 213"
				],
				"accountText": "wenpys > Stg_Kan",
				"whisper": "@Stg_Kan 안녕하세요, 변형(보관함 탭 \"6\", 위치: 왼쪽 9, 상단 2)에 30 chaos(으)로 올려놓은 복수의 길 히드라 비늘 장화을(를) 구매하고 싶습니다",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 213,
				"evalPrice": 30
			},
			{
				"id": "18286933ea0c55ba9cced2a5afc2b050d41b4b1aec7193299a43e83171a1f931",
				"name": "Ambush Spur",
				"sockets": [
					[
						"R"
					],
					[
						"R"
					]
				],
				"itemLevel": 79,
				"implicitMods": [
					"+9% to Fire and Cold Resistances"
				],
				"explicitMods": [
					"+25 to Armour",
					"+11 to Evasion Rating",
					"+42% to Fire Resistance",
					"+29% to Cold Resistance",
					"30% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +89% total Elemental Resistance",
					"(pseudo) +62 total maximum Life",
					"Sum: 213"
				],
				"accountText": "Blackmike80 > Crevette_Eclairante",
				"whisper": "@Crevette_Eclairante Hi, I would like to buy your Ambush Spur Two-Toned Boots listed for 30 chaos in Metamorph (stash tab \"$$\"; position: left 10, top 11)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 213,
				"evalPrice": 30
			},
			{
				"id": "7aa0ed8acb3059db7b298d04e404df46aad026687ee60ba4d8315e808a7968b7",
				"name": "Maelström Stride",
				"sockets": [
					[
						"B",
						"R"
					]
				],
				"itemLevel": 79,
				"implicitMods": [],
				"explicitMods": [
					"+64 to maximum Life",
					"+31% to Cold Resistance",
					"+19% to Lightning Resistance",
					"30% increased Movement Speed",
					"5% increased Movement Speed if you haven't been Hit Recently"
				],
				"pseudoMods": [
					"(pseudo) +85% total Elemental Resistance",
					"(pseudo) +64 total maximum Life",
					"Sum: 213"
				],
				"accountText": "Luciem > METAMORPH_Jin",
				"whisper": "@METAMORPH_Jin Hi, I would like to buy your Maelström Stride Murder Boots listed for 35 chaos in Metamorph (stash tab \"$\"; position: left 3, top 11)",
				"note": "~price 35 chaos",
				"priceText": "35 chaos",
				"evalValue": 213,
				"evalPrice": 35
			}
		]);
		this.renderItemsData(false, true);
	}

	clearItems() {
		this.itemsData.clear();
	}

	joinItems(items) {
		this.itemsData.join(items)
	}

	updateItemsProgress(text, ratio) {
		this.$('#results-progress-bar').value = ratio;
		let textEl = document.createElement('div');
		textEl.textContent = text;
		this.$('#results-progress-text').appendChild(textEl);
	}

	renderItemsData(listBackgroundsOnly = false, resetChartRange = false) {
		if (listBackgroundsOnly)
			this.renderItemsDataListBackgroundsOnly();
		else
			this.renderItemsDataList();
		this.renderItemsDataChart(resetChartRange);
	}

	renderItemsDataList() {
		XElement.clearChildren(this.$('#results-progress-text'));

		this.$('#results-count').textContent = this.itemsData.length;

		XElement.clearChildren(this.$('#results-list'));
		this.itemsData.items.forEach(itemData => {
			let itemListing = document.createElement('x-item-listing');
			this.$('#results-list').appendChild(itemListing);
			itemListing.addEventListener('select', () => {
				this.itemsData.selectItem(itemData);
				itemListing.selected = itemData.selected;
				this.renderItemsDataChart();
			});
			itemListing.addEventListener('hover', e => {
				this.itemsData.hoverItem(e.detail && itemData);
				renderItemsData(true);
			});
			itemListing.itemData = itemData;
		});
	}

	renderItemsDataListBackgroundsOnly() {
		[...this.$('#results-list').children].forEach((el, i) => {
			el.selected = this.itemsData.items[i].selected;
			el.hovered = this.itemsData.items[i].hovered;
		});
	}

	renderItemsDataChart(resetChartRange = false) {
		this.$('#results-chart').pointSets = [
			{
				color: 'rgb(255,255,255)',
				fill: true,
				size: 1,
				points: this.itemsData.searchBoundPath,
				isPath: true,
			}, {
				color: 'rgb(0,0,255)',
				size: 1,
				points: this.itemsData.bestBoundPath,
				isPath: true,
			}, {
				color: 'rgb(0,0,0)',
				fill: true,
				size: 4,
				points: ItemsData.itemsToPoints(this.itemsData.items),
			}, {
				color: 'rgb(0,0,255)',
				size: 8,
				points: ItemsData.itemsToPoints(this.itemsData.bestBoundItems),
			}, {
				color: 'rgb(170,170,0)',
				size: 8,
				points: ItemsData.itemsToPoints(this.itemsData.selectedItems),
			}, {
				color: 'rgb(100,70,20)',
				size: 8,
				points: ItemsData.itemsToPoints(this.itemsData.hoveredItems),
			},
		];
		if (resetChartRange)
			this.$('#results-chart').resetRange();
	}
});
