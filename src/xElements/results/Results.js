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
				"id": "29edc47d7d695c088b183ef226b64a11b77fbd355e776cdf1358a1f58a5a0ddd",
				"name": "Death Ward",
				"sockets": [
					[
						"G",
						"G",
						"G",
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 83,
				"properties": [
					"Quality +20%",
					"Evasion Rating 846"
				],
				"implicitMods": [],
				"explicitMods": [
					"+146 to Evasion Rating",
					"+149 to maximum Life",
					"+25% to Fire Resistance"
				],
				"pseudoMods": [
					"(pseudo) +58% total Elemental Resistance",
					"(pseudo) +149 total maximum Life",
					"Sum: 356"
				],
				"accountText": "mah1303 > Matixima",
				"whisper": "@Matixima Hi, I would like to buy your Death Ward Sharkskin Tunic listed for 30 chaos in Metamorph (stash tab \"7\"; position: left 4, top 5)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 440.6,
				"evalPrice": 30,
				"hovered": false
			},
			{
				"id": "bc5fee814793988b734bbde0eca0622fad381105afd69e19886bbf5738645ab2",
				"name": "Hypnotic Keep",
				"sockets": [
					[
						"R",
						"R",
						"G",
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Evasion Rating 945"
				],
				"implicitMods": [],
				"explicitMods": [
					"+33 to Dexterity",
					"49% increased Evasion Rating",
					"+127 to maximum Life",
					"+43% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +83% total Elemental Resistance",
					"(pseudo) +127 total maximum Life",
					"Sum: 337"
				],
				"accountText": "naramalssam > Crow_nn",
				"whisper": "@Crow_nn 안녕하세요, 변형(보관함 탭 \"trade\", 위치: 왼쪽 1, 상단 7)에 70 chaos(으)로 올려놓은 최면의 감옥 상어가죽 튜닉을(를) 구매하고 싶습니다",
				"note": "~price 70 chaos",
				"priceText": "70 chaos",
				"evalValue": 431.5,
				"evalPrice": 70,
				"hovered": false
			},
			{
				"id": "0c38ff3a5f0d54705e883fdba07dbb3196926912504d5af0cbf03db05c5e87de",
				"name": "Horror Shroud",
				"sockets": [
					[
						"R",
						"B",
						"R",
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 85,
				"properties": [
					"Quality +20%",
					"Evasion Rating 950"
				],
				"implicitMods": [],
				"explicitMods": [
					"38% increased Evasion Rating",
					"+126 to maximum Life",
					"+47% to Cold Resistance",
					"+37% to Lightning Resistance",
					"40% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +84% total Elemental Resistance",
					"(pseudo) +126 total maximum Life",
					"Sum: 336"
				],
				"accountText": "tqkviptqk > NoPantiesNoGain",
				"whisper": "@NoPantiesNoGain Hi, I would like to buy your Horror Shroud Destiny Leather listed for 65 chaos in Metamorph (stash tab \"Punching\"; position: left 11, top 6)",
				"note": "~b/o 65 chaos",
				"priceText": "65 chaos",
				"evalValue": 431,
				"evalPrice": 65,
				"hovered": false
			},
			{
				"id": "6d9edd4160f4cecb72bf712cb3d0520c4e6c7f839e2123a3127d8f02fcbd5710",
				"name": "Blood Shroud",
				"sockets": [
					[
						"G",
						"G",
						"R",
						"R",
						"R",
						"G"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Armour 796",
					"Evasion Rating 770"
				],
				"implicitMods": [],
				"explicitMods": [
					"+51 to Strength",
					"+298 to Armour",
					"+279 to Evasion Rating",
					"+120 to maximum Life",
					"Regenerate 24.9 Life per second",
					"+25% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +25% total Elemental Resistance",
					"(pseudo) +164.5 total maximum Life",
					"Sum: 354"
				],
				"accountText": "Vargeeen > Bane_Witch_mm",
				"whisper": "@Bane_Witch_mm Hi, I would like to buy your Blood Shroud Commander's Brigandine listed for 100 chaos in Metamorph (stash tab \"Trade\"; position: left 3, top 10)",
				"note": "~price 100 chaos",
				"priceText": "100 chaos",
				"evalValue": 431,
				"evalPrice": 100,
				"hovered": false
			},
			{
				"id": "812989ec014a403e5ebbb2485383aa8d15f33580ea488ba24b403f24da5cb2ce",
				"name": "Plague Suit",
				"sockets": [
					[
						"B",
						"G",
						"B",
						"G",
						"R",
						"B"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Armour 423",
					"Evasion Rating 487"
				],
				"implicitMods": [],
				"explicitMods": [
					"+42 to Strength",
					"+48 to Evasion Rating",
					"35% increased Armour and Evasion",
					"+148 to maximum Life",
					"+44% to Fire Resistance",
					"34% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +44% total Elemental Resistance",
					"(pseudo) +169 total maximum Life",
					"Sum: 382"
				],
				"accountText": "schluppimeister > NecroFecaPhilia",
				"whisper": "@NecroFecaPhilia Hi, I would like to buy your Plague Suit Dragonscale Doublet listed for 50 chaos in Metamorph (stash tab \"dump\"; position: left 21, top 21)",
				"note": "~price 50 chaos",
				"priceText": "50 chaos",
				"evalValue": 430.7,
				"evalPrice": 50,
				"hovered": false
			},
			{
				"id": "6d6f5e7ddb9a34551eb55d612d331471689a30d2d0f045ba236eabb85c077fe7",
				"name": "Doom Mantle",
				"sockets": [
					[
						"G",
						"G",
						"R",
						"G",
						"G",
						"R"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Quality +20%",
					"Evasion Rating 964"
				],
				"implicitMods": [],
				"explicitMods": [
					"+117 to maximum Life",
					"Regenerate 8 Life per second",
					"+39% to Fire Resistance",
					"+31% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +70% total Elemental Resistance",
					"(pseudo) +132 total maximum Life",
					"Sum: 334"
				],
				"accountText": "simengiga > PanzerNina",
				"whisper": "@PanzerNina Hi, I would like to buy your Doom Mantle Exquisite Leather listed for 70 chaos in Metamorph (stash tab \"Trade\"; position: left 5, top 15)",
				"note": "~price 70 chaos",
				"priceText": "70 chaos",
				"evalValue": 430.4,
				"evalPrice": 70,
				"hovered": false
			},
			{
				"id": "51f0ef26c8ad0a615971df27878a5a78ebb674644390fcae73d006d4d6f5544c",
				"name": "Hypnotic Pelt",
				"sockets": [
					[
						"G",
						"G",
						"G",
						"G",
						"R",
						"B"
					]
				],
				"itemLevel": 85,
				"properties": [
					"Evasion Rating 800"
				],
				"implicitMods": [],
				"explicitMods": [
					"+241 to Evasion Rating",
					"+142 to maximum Life",
					"+14% to Fire Resistance",
					"+48% to Cold Resistance",
					"+19% to Chaos Resistance"
				],
				"pseudoMods": [
					"(pseudo) +62% total Elemental Resistance",
					"(pseudo) +142 total maximum Life",
					"Sum: 346"
				],
				"accountText": "Latroxx > GALatro",
				"whisper": "@GALatro Hi, I would like to buy your Hypnotic Pelt Sharkskin Tunic listed for 50 chaos in Metamorph (stash tab \"Sales\"; position: left 3, top 9)",
				"note": "~price 50 chaos",
				"priceText": "50 chaos",
				"evalValue": 426,
				"evalPrice": 50,
				"hovered": false
			},
			{
				"id": "985af8a87a2b23e1be504f38c2ccd2cfab819cbebd6ef5345c1ff733b2d7e2e5",
				"name": "Armageddon Wrap",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"B",
						"R",
						"B"
					]
				],
				"itemLevel": 85,
				"properties": [
					"Evasion Rating 892"
				],
				"implicitMods": [],
				"explicitMods": [
					"+54 to Dexterity",
					"+38 to Evasion Rating",
					"+132 to maximum Life",
					"+25% to Fire Resistance",
					"+47% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +72% total Elemental Resistance",
					"(pseudo) +132 total maximum Life",
					"Sum: 336"
				],
				"accountText": "DarkCelestin > Bélénosse",
				"whisper": "@Bélénosse Hi, I would like to buy your Armageddon Wrap Zodiac Leather listed for 60 chaos in Metamorph (stash tab \"9\"; position: left 3, top 19)",
				"note": "~price 60 chaos",
				"priceText": "60 chaos",
				"evalValue": 425.2,
				"evalPrice": 60,
				"hovered": false
			},
			{
				"id": "03efc0eaa0cab8512ce633c82306ad364c17c96bc8a32af04003bfe18d0864c6",
				"name": "Wrath Hide",
				"sockets": [
					[
						"R",
						"G",
						"B",
						"R",
						"G",
						"R"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Quality +12%",
					"Armour 780",
					"Evasion Rating 849"
				],
				"implicitMods": [],
				"explicitMods": [
					"+58 to Armour",
					"66% increased Armour and Evasion",
					"+145 to maximum Life",
					"+30% to Fire Resistance",
					"+19% to Lightning Resistance",
					"24% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +49% total Elemental Resistance",
					"(pseudo) +145 total maximum Life",
					"Sum: 339"
				],
				"accountText": "draked90 > TesterRE",
				"whisper": "@TesterRE Hi, I would like to buy your Wrath Hide Triumphant Lamellar listed for 50 chaos in Metamorph (stash tab \"sklep\"; position: left 5, top 4)",
				"note": "~price 50 chaos",
				"priceText": "50 chaos",
				"evalValue": 423.9,
				"evalPrice": 50,
				"hovered": false
			},
			{
				"id": "085a0a26f49d955778aa4806e14ec2a790218b2e628cbcd950ec77022ea84e4b",
				"name": "Loath Salvation",
				"sockets": [
					[
						"G",
						"B",
						"R",
						"B",
						"G",
						"G"
					]
				],
				"itemLevel": 80,
				"properties": [
					"Quality +20%",
					"Evasion Rating 955"
				],
				"implicitMods": [],
				"explicitMods": [
					"+21 to Dexterity",
					"+19 to Evasion Rating",
					"34% increased Evasion Rating",
					"+126 to maximum Life",
					"+42% to Lightning Resistance",
					"15% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +76% total Elemental Resistance",
					"(pseudo) +126 total maximum Life",
					"Sum: 328"
				],
				"accountText": "StarsFire > ПоСоСник",
				"whisper": "@ПоСоСник Hi, I would like to buy your Loath Salvation Destiny Leather listed for 100 chaos in Metamorph (stash tab \"хули смотришь, бери давай\"; position: left 11, top 3)",
				"note": "~b/o 100 chaos",
				"priceText": "100 chaos",
				"evalValue": 423.5,
				"evalPrice": 100,
				"hovered": false
			},
			{
				"id": "41cfcd6d9d134f5847c9f7c682f789738a4599ed1454db56eab97684bf7e6e13",
				"name": "Golem Mantle",
				"sockets": [
					[
						"G",
						"B",
						"G",
						"G",
						"G",
						"B"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Evasion Rating 756",
					"Energy Shield 118"
				],
				"implicitMods": [],
				"explicitMods": [
					"+42 to Intelligence",
					"+74 to Evasion Rating",
					"110% increased Evasion and Energy Shield",
					"+140 to maximum Life",
					"+27% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +67% total Elemental Resistance",
					"(pseudo) +140 total maximum Life",
					"Sum: 347"
				],
				"accountText": "Yowming3214 > EightyThreeLechBlz",
				"whisper": "@EightyThreeLechBlz Hi, I would like to buy your Golem Mantle Lacquered Garb listed for 100 chaos in Metamorph (stash tab \"1\"; position: left 3, top 4)",
				"note": "~b/o 100 chaos",
				"priceText": "100 chaos",
				"evalValue": 422.6,
				"evalPrice": 100,
				"hovered": false
			},
			{
				"id": "8dad681084c2484dc8858e42bf9ef0642f3de2653219ef882377a84fe58bc832",
				"name": "Phoenix Shroud",
				"sockets": [
					[
						"B",
						"G",
						"G",
						"R",
						"G",
						"G"
					]
				],
				"itemLevel": 82,
				"properties": [
					"Evasion Rating 733"
				],
				"implicitMods": [],
				"explicitMods": [
					"+17 to Evasion Rating",
					"34% increased Evasion Rating",
					"+124 to maximum Life",
					"+35% to Fire Resistance",
					"+25% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +100% total Elemental Resistance",
					"(pseudo) +124 total maximum Life",
					"Sum: 348"
				],
				"accountText": "Wosojoe > Ziah",
				"whisper": "@Ziah Hi, I would like to buy your Phoenix Shroud Cutthroat's Garb listed for 80 chaos in Metamorph (stash tab \"UwU\"; position: left 16, top 14)",
				"note": "~price 80 chaos",
				"priceText": "80 chaos",
				"evalValue": 421.3,
				"evalPrice": 80,
				"hovered": false
			},
			{
				"id": "94df8d9de128cdf0a1c0df94c3997121b00b4a08846a1d47fe6e29ad0cfab42b",
				"name": "Corruption Keep",
				"sockets": [
					[
						"B",
						"G",
						"G",
						"G",
						"G",
						"B"
					]
				],
				"itemLevel": 72,
				"properties": [
					"Quality +20%",
					"Evasion Rating 690"
				],
				"implicitMods": [],
				"explicitMods": [
					"+84 to Evasion Rating",
					"+149 to maximum Life",
					"+14% to Lightning Resistance",
					"12% increased Stun and Block Recovery",
					"Reflects 37 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +54% total Elemental Resistance",
					"(pseudo) +149 total maximum Life",
					"Sum: 352"
				],
				"accountText": "ramonas2 > Velenazzi",
				"whisper": "@Velenazzi Hi, I would like to buy your Corruption Keep Coronal Leather listed for 40 chaos in Metamorph (stash tab \"SELL 2\"; position: left 1, top 1)",
				"note": "~price 40 chaos",
				"priceText": "40 chaos",
				"evalValue": 421,
				"evalPrice": 40,
				"hovered": false
			},
			{
				"id": "3a1dc7d35cce702206a6f5635d7bd2ba535357374caa5c035d8ba382a9fdd428",
				"name": "Skull Shell",
				"sockets": [
					[
						"B",
						"R",
						"R",
						"G",
						"R",
						"G"
					]
				],
				"itemLevel": 83,
				"properties": [
					"Evasion Rating 795"
				],
				"implicitMods": [],
				"explicitMods": [
					"+52 to Dexterity",
					"+39 to Evasion Rating",
					"50% increased Evasion Rating",
					"+140 to maximum Life",
					"+30% to Fire Resistance",
					"+28% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +58% total Elemental Resistance",
					"(pseudo) +140 total maximum Life",
					"Sum: 338"
				],
				"accountText": "kladee > SkelKlade",
				"whisper": "@SkelKlade Hi, I would like to buy your Skull Shell Coronal Leather listed for 70 chaos in Metamorph (stash tab \"SELL\"; position: left 11, top 4)",
				"note": "~price 70 chaos",
				"priceText": "70 chaos",
				"evalValue": 417.5,
				"evalPrice": 70,
				"hovered": false
			},
			{
				"id": "ecee2d9e9c258a64535908db388db67869a1182dc79124758c0212ad4a9cef3d",
				"name": "Phoenix Wrap",
				"sockets": [
					[
						"R",
						"G",
						"G",
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 80,
				"properties": [
					"Quality +20%",
					"Evasion Rating 805"
				],
				"implicitMods": [],
				"explicitMods": [
					"+70 to Evasion Rating",
					"+123 to maximum Life",
					"+30% to Fire Resistance",
					"+24% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +87% total Elemental Resistance",
					"(pseudo) +123 total maximum Life",
					"Sum: 333"
				],
				"accountText": "elektronique > SATORaRex",
				"whisper": "@SATORaRex Hi, I would like to buy your Phoenix Wrap Destiny Leather listed for 70 chaos in Metamorph (stash tab \"shp\"; position: left 1, top 10)",
				"note": "~price 70 chaos",
				"priceText": "70 chaos",
				"evalValue": 413.5,
				"evalPrice": 70,
				"hovered": false
			},
			{
				"id": "77564764aba06b1bf8fbc01f555e8c51d67e00b122de9c1f6d5d474f94a05dd2",
				"name": "Dragon Salvation",
				"sockets": [
					[
						"G",
						"G",
						"G",
						"B",
						"G",
						"G"
					]
				],
				"itemLevel": 78,
				"properties": [
					"Evasion Rating 839"
				],
				"implicitMods": [],
				"explicitMods": [
					"29% increased Evasion Rating",
					"+122 to maximum Life",
					"+44% to Lightning Resistance",
					"22% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +44% total Elemental Resistance",
					"(pseudo) +141 total maximum Life",
					"Sum: 326"
				],
				"accountText": "yxcv > oogiiee",
				"whisper": "@oogiiee Hi, I would like to buy your Dragon Salvation Sharkskin Tunic listed for 30 chaos in Metamorph (stash tab \"10\"; position: left 13, top 5)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 409.9,
				"evalPrice": 30,
				"hovered": false
			},
			{
				"id": "17342bfd08f2c30654d7c9c2b515154399907142c280f2cf20680698b379da40",
				"name": "Corruption Suit",
				"sockets": [
					[
						"G",
						"G",
						"G",
						"B",
						"G",
						"R"
					]
				],
				"itemLevel": 75,
				"properties": [
					"Quality +7%",
					"Armour 493",
					"Evasion Rating 551"
				],
				"implicitMods": [],
				"explicitMods": [
					"+44 to Strength",
					"+30 to Evasion Rating",
					"87% increased Armour and Evasion",
					"+115 to maximum Life",
					"+43% to Cold Resistance",
					"+37% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +80% total Elemental Resistance",
					"(pseudo) +137 total maximum Life",
					"Sum: 354"
				],
				"accountText": "Smi12noff > Sminoff",
				"whisper": "@Sminoff Hi, I would like to buy your Corruption Suit Full Wyrmscale listed for 60 chaos in Metamorph (stash tab \"Sell\"; position: left 1, top 1)",
				"note": "~price 60 chaos",
				"priceText": "60 chaos",
				"evalValue": 409.1,
				"evalPrice": 60,
				"hovered": false
			},
			{
				"id": "989b9506ec554411f2f6e28538f0706d2de4552590c07bd64f1be3825f15ec5f",
				"name": "Apocalypse Shell",
				"sockets": [
					[
						"B",
						"G",
						"R",
						"R",
						"B",
						"G"
					]
				],
				"itemLevel": 83,
				"properties": [
					"Armour 738",
					"Evasion Rating 500"
				],
				"implicitMods": [],
				"explicitMods": [
					"+11 to Strength",
					"+81 to Armour",
					"34% increased Armour and Evasion",
					"+138 to maximum Life",
					"+35% to Fire Resistance",
					"+37% to Lightning Resistance",
					"15% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +72% total Elemental Resistance",
					"(pseudo) +143.5 total maximum Life",
					"Sum: 359"
				],
				"accountText": "NameSven > Sven_Maximus",
				"whisper": "@Sven_Maximus Здравствуйте, хочу купить у вас Пророческая броня Полный доспех из чешуи дракона за 50 chaos в лиге Метаморф (секция \"барыжная 2\"; позиция: 3 столбец, 5 ряд)",
				"note": "~b/o 50 chaos",
				"priceText": "50 chaos",
				"evalValue": 409,
				"evalPrice": 50,
				"hovered": false
			},
			{
				"id": "83f08ee6e6e9289efd1a30e702a2c571420cbca0ebb4d0b35b5135142f4977dc",
				"name": "Corpse Salvation",
				"sockets": [
					[
						"R",
						"B",
						"G",
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Quality +20%",
					"Evasion Rating 778"
				],
				"implicitMods": [],
				"explicitMods": [
					"+118 to Evasion Rating",
					"+129 to maximum Life",
					"Regenerate 13.1 Life per second",
					"+39% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +72% total Elemental Resistance",
					"(pseudo) +129 total maximum Life",
					"Sum: 330"
				],
				"accountText": "djstorm2004 > OneDeadWinter",
				"whisper": "@OneDeadWinter Hi, I would like to buy your Corpse Salvation Cutthroat's Garb listed for 95 chaos in Metamorph (stash tab \"SALE $$$\"; position: left 23, top 5)",
				"note": "~price 95 chaos",
				"priceText": "95 chaos",
				"evalValue": 407.8,
				"evalPrice": 95,
				"hovered": false
			},
			{
				"id": "2547b4f94dc8bf4020473e7ab061f32e43c750e13f5ad2df6eaf5b9c658ba83b",
				"name": "Cataclysm Skin",
				"sockets": [
					[
						"B",
						"G",
						"R",
						"R",
						"G",
						"G"
					]
				],
				"itemLevel": 73,
				"properties": [
					"Armour 330",
					"Evasion Rating 386"
				],
				"implicitMods": [],
				"explicitMods": [
					"+47 to Evasion Rating",
					"20% increased Armour and Evasion",
					"+145 to maximum Life",
					"+43% to Cold Resistance",
					"15% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +79% total Elemental Resistance",
					"(pseudo) +145 total maximum Life",
					"Sum: 369"
				],
				"accountText": "Raviqt > Ravipedia",
				"whisper": "@Ravipedia Hi, I would like to buy your Cataclysm Skin Commander's Brigandine listed for 80 chaos in Metamorph (stash tab \"~b/o 80 chaos\"; position: left 1, top 1)",
				"priceText": "80 chaos",
				"evalValue": 407.6,
				"evalPrice": 80,
				"hovered": false
			},
			{
				"id": "bfae8c81bbb7982b00db314d3ca35da7155cc4cd10f052b5286bbd53e36ffb18",
				"name": "Behemoth Pelt",
				"sockets": [
					[
						"G",
						"R",
						"R",
						"B",
						"G",
						"B"
					]
				],
				"itemLevel": 82,
				"properties": [
					"Evasion Rating 774"
				],
				"implicitMods": [],
				"explicitMods": [
					"+27 to Evasion Rating",
					"32% increased Evasion Rating",
					"+107 to maximum Life",
					"+44% to Fire Resistance",
					"+42% to Cold Resistance",
					"+30% to Lightning Resistance",
					"12% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +116% total Elemental Resistance",
					"(pseudo) +107 total maximum Life",
					"Sum: 330"
				],
				"accountText": "Calamitation > Braindeadicus",
				"whisper": "@Braindeadicus Hi, I would like to buy your Behemoth Pelt Sharkskin Tunic listed for 100 chaos in Metamorph (stash tab \"T\"; position: left 5, top 1)",
				"note": "~b/o 100 chaos",
				"priceText": "100 chaos",
				"evalValue": 407.4,
				"evalPrice": 100,
				"hovered": false
			},
			{
				"id": "2a9aa3c1e8477f1cb48daa7e2b3231919611d28bf054feb4f58782d743168887",
				"name": "Death Shell",
				"sockets": [
					[
						"R",
						"G",
						"G",
						"G",
						"G",
						"R"
					]
				],
				"itemLevel": 80,
				"properties": [
					"Quality +20%",
					"Evasion Rating 779"
				],
				"implicitMods": [],
				"explicitMods": [
					"+119 to Evasion Rating",
					"+124 to maximum Life",
					"+45% to Cold Resistance",
					"24% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +81% total Elemental Resistance",
					"(pseudo) +124 total maximum Life",
					"Sum: 329"
				],
				"accountText": "잔향의숲 > 그리고겨울",
				"whisper": "@그리고겨울 안녕하세요, 변형(보관함 탭 \"T\", 위치: 왼쪽 1, 상단 7)에 40 chaos(으)로 올려놓은 죽음의 껍질 살인자의 의복을(를) 구매하고 싶습니다",
				"note": "~price 40 chaos",
				"priceText": "40 chaos",
				"evalValue": 406.9,
				"evalPrice": 40,
				"hovered": false
			},
			{
				"id": "ae982fbbe91e28062845094628f6abfd2175a721ce2e91fb0d92d03ac630215e",
				"name": "Vortex Hide",
				"sockets": [
					[
						"G",
						"G",
						"B",
						"G",
						"G",
						"R"
					]
				],
				"itemLevel": 80,
				"properties": [
					"Evasion Rating 511"
				],
				"implicitMods": [],
				"explicitMods": [
					"+20 to Evasion Rating",
					"+146 to maximum Life",
					"+29% to Lightning Resistance",
					"3% chance to Dodge Attack Hits"
				],
				"pseudoMods": [
					"(pseudo) +62% total Elemental Resistance",
					"(pseudo) +146 total maximum Life",
					"Sum: 354"
				],
				"accountText": "Luo > Nekro_Metamorph",
				"whisper": "@Nekro_Metamorph Hi, I would like to buy your Vortex Hide Coronal Leather listed for 100 chaos in Metamorph (stash tab \"S32\"; position: left 11, top 4)",
				"note": "~price 100 chaos",
				"priceText": "100 chaos",
				"evalValue": 405.1,
				"evalPrice": 100,
				"hovered": false
			},
			{
				"id": "42cb3ed773f93bacc30edb9fe1ec107e1c7b859d97b56aa1c18490df94fb1a83",
				"name": "Victory Suit",
				"sockets": [
					[
						"R",
						"G",
						"G",
						"R",
						"G",
						"R"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Armour 466",
					"Evasion Rating 360"
				],
				"implicitMods": [],
				"explicitMods": [
					"+81 to Armour",
					"31% increased Armour and Evasion",
					"+154 to maximum Life",
					"+33% to Cold Resistance",
					"13% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +61% total Elemental Resistance",
					"(pseudo) +154 total maximum Life",
					"Sum: 369"
				],
				"accountText": "pshmakov > SovietPartyWeeeeeeeeeee",
				"whisper": "@SovietPartyWeeeeeeeeeee Hi, I would like to buy your Victory Suit Commander's Brigandine listed for 40 chaos in Metamorph (stash tab \"$$\"; position: left 1, top 1)",
				"note": "~b/o 40 chaos",
				"priceText": "40 chaos",
				"evalValue": 405,
				"evalPrice": 40,
				"hovered": false
			},
			{
				"id": "7e1fe7db391961fba82448af177b5223bb65e15dbd3de36f267a7a62c0801161",
				"name": "Ghoul Ward",
				"sockets": [
					[
						"B",
						"G",
						"G",
						"B",
						"B",
						"G"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Evasion Rating 479",
					"Energy Shield 77"
				],
				"implicitMods": [],
				"explicitMods": [
					"+69 to Evasion Rating",
					"+137 to maximum Life",
					"+45 to maximum Mana",
					"+44% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +82% total Elemental Resistance",
					"(pseudo) +137 total maximum Life",
					"Sum: 356"
				],
				"accountText": "Sorzki > BoomBoomSorzki",
				"whisper": "@BoomBoomSorzki Hi, I would like to buy your Ghoul Ward Sentinel Jacket listed for 75 chaos in Metamorph (stash tab \"\"; position: left 11, top 1)",
				"note": "~price 75 chaos",
				"priceText": "75 chaos",
				"evalValue": 403.9,
				"evalPrice": 75,
				"hovered": false
			},
			{
				"id": "39e8dba08b775dcdf0511d4b52d7f024a5d78927a0accb851a00d23164022df9",
				"name": "Beast Carapace",
				"sockets": [
					[
						"G",
						"B",
						"G",
						"G",
						"R",
						"R"
					]
				],
				"itemLevel": 75,
				"properties": [
					"Evasion Rating 646"
				],
				"implicitMods": [],
				"explicitMods": [
					"+155 to Evasion Rating",
					"+130 to maximum Life",
					"Regenerate 10.6 Life per second",
					"+43% to Fire Resistance",
					"+36% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +79% total Elemental Resistance",
					"(pseudo) +130 total maximum Life",
					"Sum: 339"
				],
				"accountText": "Razorshark > RazorMeta",
				"whisper": "@RazorMeta Hi, I would like to buy your Beast Carapace Coronal Leather listed for 50 chaos in Metamorph (stash tab \"sale\"; position: left 11, top 4)",
				"note": "~price 50 chaos",
				"priceText": "50 chaos",
				"evalValue": 403.6,
				"evalPrice": 50,
				"hovered": false
			},
			{
				"id": "643d4f525594c7ed166287e17c1c6028ca76853c368ea6094302282d0357fed8",
				"name": "Soul Ward",
				"sockets": [
					[
						"G",
						"B",
						"G",
						"B",
						"B",
						"G"
					]
				],
				"itemLevel": 83,
				"properties": [
					"Evasion Rating 584"
				],
				"implicitMods": [],
				"explicitMods": [
					"+39 to Dexterity",
					"+25 to Evasion Rating",
					"+135 to maximum Life",
					"+39% to Fire Resistance",
					"Reflects 13 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +75% total Elemental Resistance",
					"(pseudo) +135 total maximum Life",
					"Sum: 345"
				],
				"accountText": "Archvile69 > FastAsFkBoiiiiiiiiiii",
				"whisper": "@FastAsFkBoiiiiiiiiiii Hi, I would like to buy your Soul Ward Sharkskin Tunic listed for 45 chaos in Metamorph (stash tab \"~price 40 chaos\"; position: left 7, top 8)",
				"note": "~price 45 chaos",
				"priceText": "45 chaos",
				"evalValue": 403.4,
				"evalPrice": 45,
				"hovered": false
			},
			{
				"id": "1bc527ed54f679a591dcb824feceafcfdf558424d8c101b842feb6a7125fb7ce",
				"name": "Beast Hide",
				"sockets": [
					[
						"G",
						"G",
						"G",
						"R",
						"G",
						"G"
					]
				],
				"itemLevel": 84,
				"properties": [
					"Evasion Rating 612"
				],
				"implicitMods": [],
				"explicitMods": [
					"64% increased Evasion Rating",
					"+111 to maximum Life",
					"+47% to Fire Resistance",
					"+36% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +119% total Elemental Resistance",
					"(pseudo) +111 total maximum Life",
					"Sum: 341"
				],
				"accountText": "KiseKise > DevochkasHH",
				"whisper": "@DevochkasHH Hi, I would like to buy your Beast Hide Eelskin Tunic listed for 100 chaos in Metamorph (stash tab \"~b/o 35 chaos\"; position: left 11, top 4)",
				"note": "~price 100 chaos",
				"priceText": "100 chaos",
				"evalValue": 402.2,
				"evalPrice": 100,
				"hovered": false
			},
			{
				"id": "1a5e27f1372519d1d0547bbac6e6dd58a79001a2ca5d8411d383ffac546ec450",
				"name": "Fate Jack",
				"sockets": [
					[
						"B",
						"R",
						"R",
						"B",
						"G",
						"G"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Evasion Rating 721"
				],
				"implicitMods": [],
				"explicitMods": [
					"+126 to maximum Life",
					"+37% to Lightning Resistance",
					"15% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +77% total Elemental Resistance",
					"(pseudo) +126 total maximum Life",
					"Sum: 329"
				],
				"accountText": "deistrei > ЯДУМАЮ",
				"whisper": "@ЯДУМАЮ Здравствуйте, хочу купить у вас Благой обыватель Кожанка призвания за 55 chaos в лиге Метаморф (секция \"$\"; позиция: 11 столбец, 8 ряд)",
				"note": "~price 55 chaos",
				"priceText": "55 chaos",
				"evalValue": 401.1,
				"evalPrice": 55,
				"hovered": false
			},
			{
				"id": "347785d0028944407d130c3d5343e632059ebbd7d7e170f99ae99c4213d55a7d",
				"name": "Eagle Guardian",
				"sockets": [
					[
						"R",
						"B",
						"B",
						"B",
						"B",
						"R"
					]
				],
				"itemLevel": 82,
				"properties": [
					"Evasion Rating 560"
				],
				"implicitMods": [],
				"explicitMods": [
					"+25 to Dexterity",
					"+109 to Evasion Rating",
					"+150 to maximum Life",
					"Regenerate 3.9 Life per second",
					"+45% to Cold Resistance",
					"Reflects 1 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +45% total Elemental Resistance",
					"(pseudo) +150 total maximum Life",
					"Sum: 345"
				],
				"accountText": "jcreden567 > JaytexMeta",
				"whisper": "@JaytexMeta Hi, I would like to buy your Eagle Guardian Glorious Leather listed for 49 chaos in Metamorph (stash tab \"~price 49 chaos\"; position: left 3, top 4)",
				"priceText": "49 chaos",
				"evalValue": 401,
				"evalPrice": 49,
				"hovered": false
			},
			{
				"id": "b4ef8d0b5acc5dd0c8e6a3ea5a525ab9f2f8eea37eb166092d8dfdb6d9d5eebe",
				"name": "Eagle Guardian",
				"sockets": [
					[
						"R",
						"B",
						"B",
						"B",
						"B",
						"R"
					]
				],
				"itemLevel": 82,
				"properties": [
					"Evasion Rating 560"
				],
				"implicitMods": [],
				"explicitMods": [
					"+25 to Dexterity",
					"+109 to Evasion Rating",
					"+150 to maximum Life",
					"Regenerate 3.9 Life per second",
					"+45% to Cold Resistance",
					"Reflects 1 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +45% total Elemental Resistance",
					"(pseudo) +150 total maximum Life",
					"Sum: 345"
				],
				"accountText": "jcreden567 > JaytexMeta",
				"whisper": "@JaytexMeta Hi, I would like to buy your Eagle Guardian Glorious Leather listed for 49 chaos in Metamorph (stash tab \"~price 49 chaos\"; position: left 5, top 5)",
				"priceText": "49 chaos",
				"evalValue": 401,
				"evalPrice": 49,
				"hovered": false
			},
			{
				"id": "c38a91206b246097e7790a85bc8954a836c1ec935bc536475fdf87381cbb4fed",
				"name": "Demon Cloak",
				"sockets": [
					[
						"G",
						"G",
						"G",
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Evasion Rating 721"
				],
				"implicitMods": [],
				"explicitMods": [
					"+126 to maximum Life",
					"Regenerate 21 Life per second",
					"+40% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +75% total Elemental Resistance",
					"(pseudo) +126 total maximum Life",
					"Sum: 327"
				],
				"accountText": "Emerald12 > MorphScandinaTogether",
				"whisper": "@MorphScandinaTogether Hi, I would like to buy your Demon Cloak Destiny Leather listed for 40 chaos in Metamorph (stash tab \"Sell\"; position: left 5, top 1)",
				"note": "~price 40 chaos",
				"priceText": "40 chaos",
				"evalValue": 399.1,
				"evalPrice": 40,
				"hovered": false
			},
			{
				"id": "caaaca53380a4428a837c973be4b66781f43f07fcbecba3328d3e78bd1811da1",
				"name": "Viper Pelt",
				"sockets": [
					[
						"B",
						"G",
						"B",
						"B",
						"B",
						"G"
					]
				],
				"itemLevel": 84,
				"properties": [
					"Quality +20%",
					"Evasion Rating 565",
					"Energy Shield 84"
				],
				"implicitMods": [],
				"explicitMods": [
					"+35 to Intelligence",
					"+35 to Evasion Rating",
					"+151 to maximum Life",
					"+47 to maximum Mana"
				],
				"pseudoMods": [
					"(pseudo) +40% total Elemental Resistance",
					"(pseudo) +151 total maximum Life",
					"Sum: 342"
				],
				"accountText": "Livertino > Cyganish_Arc",
				"whisper": "@Cyganish_Arc Hi, I would like to buy your Viper Pelt Blood Raiment listed for 90 chaos in Metamorph (stash tab \"#1 S\"; position: left 1, top 1)",
				"note": "~price 90 chaos",
				"priceText": "90 chaos",
				"evalValue": 398.5,
				"evalPrice": 90,
				"hovered": false
			},
			{
				"id": "3382a410907bafb0224ad2544692206e5c2fd94990d884f07f20a8b4c7b7cdd4",
				"name": "Victory Hide",
				"sockets": [
					[
						"G",
						"R",
						"R",
						"R",
						"B",
						"G"
					]
				],
				"itemLevel": 80,
				"properties": [
					"Quality +20%",
					"Armour 371",
					"Evasion Rating 546"
				],
				"implicitMods": [],
				"explicitMods": [
					"+92 to Evasion Rating",
					"+135 to maximum Life",
					"+31% to Fire Resistance",
					"+25% to Cold Resistance",
					"+16% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +72% total Elemental Resistance",
					"(pseudo) +135 total maximum Life",
					"Sum: 342"
				],
				"accountText": "koraa54 > 바비디봄",
				"whisper": "@바비디봄 안녕하세요, 변형(보관함 탭 \"PC방1\", 위치: 왼쪽 9, 상단 4)에 85 chaos(으)로 올려놓은 승리자의 가죽 야전 라멜라을(를) 구매하고 싶습니다",
				"note": "~price 85 chaos",
				"priceText": "85 chaos",
				"evalValue": 396.6,
				"evalPrice": 85,
				"hovered": false
			},
			{
				"id": "2010ea272547ee540eae07897788bb1e32d0d83927f88442bec4248d07db6ceb",
				"name": "Woe Sanctuary",
				"sockets": [
					[
						"G",
						"G",
						"R",
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +15%",
					"Evasion Rating 329",
					"Energy Shield 64"
				],
				"implicitMods": [],
				"explicitMods": [
					"+127 to maximum Life",
					"+19 to maximum Mana",
					"+25% to Fire Resistance",
					"+46% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +109% total Elemental Resistance",
					"(pseudo) +127 total maximum Life",
					"Sum: 363"
				],
				"accountText": "dcmallo > DidacticEleHit",
				"whisper": "@DidacticEleHit Hi, I would like to buy your Woe Sanctuary Lacquered Garb listed for 100 chaos in Metamorph (stash tab \"~b/o 100 chaos\"; position: left 11, top 1)",
				"priceText": "100 chaos",
				"evalValue": 395.9,
				"evalPrice": 100,
				"hovered": false
			},
			{
				"id": "c891ecc0fcd092940df705b4797403942b46849e5a68bfea26bf95aeea18749c",
				"name": "Beast Salvation",
				"sockets": [
					[
						"G",
						"R",
						"G",
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Evasion Rating 667"
				],
				"implicitMods": [],
				"explicitMods": [
					"18% reduced Attribute Requirements",
					"28% increased Evasion Rating",
					"+117 to maximum Life",
					"+47% to Fire Resistance",
					"+47% to Cold Resistance",
					"12% increased Stun and Block Recovery",
					"Reflects 21 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +94% total Elemental Resistance",
					"(pseudo) +117 total maximum Life",
					"Sum: 328"
				],
				"accountText": "CommanderStuhl > MinesAreHomosexuell",
				"whisper": "@MinesAreHomosexuell Hi, I would like to buy your Beast Salvation Glorious Leather listed for 70 chaos in Metamorph (stash tab \"$\"; position: left 6, top 4)",
				"note": "~b/o 70 chaos",
				"priceText": "70 chaos",
				"evalValue": 394.7,
				"evalPrice": 70,
				"hovered": false
			},
			{
				"id": "d032305f1ed49ce277429bd158615fcf0fe9793a1343b2f09a04945c8c084c0d",
				"name": "Horror Shroud",
				"sockets": [
					[
						"R",
						"G",
						"B",
						"G",
						"G",
						"R"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Armour 328",
					"Evasion Rating 313"
				],
				"implicitMods": [],
				"explicitMods": [
					"+15 to Armour",
					"+146 to maximum Life",
					"+32% to Cold Resistance",
					"2% additional Physical Damage Reduction"
				],
				"pseudoMods": [
					"(pseudo) +70% total Elemental Resistance",
					"(pseudo) +146 total maximum Life",
					"Sum: 362"
				],
				"accountText": "P1ndDiesel > Boeven",
				"whisper": "@Boeven Hi, I would like to buy your Horror Shroud Dragonscale Doublet listed for 35 chaos in Metamorph (stash tab \"Sell\"; position: left 10, top 6)",
				"note": "~price 35 chaos",
				"priceText": "35 chaos",
				"evalValue": 393.3,
				"evalPrice": 35,
				"hovered": false
			},
			{
				"id": "bb96fd63225d29f5c6839122a4fe1738aca56fd85277c7dd851088f2c0b36ee9",
				"name": "Dusk Coat",
				"sockets": [
					[
						"G",
						"G",
						"G",
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 83,
				"properties": [
					"Evasion Rating 603"
				],
				"implicitMods": [],
				"explicitMods": [
					"+112 to Evasion Rating",
					"+129 to maximum Life",
					"+40% to Fire Resistance",
					"Reflects 16 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +73% total Elemental Resistance",
					"(pseudo) +129 total maximum Life",
					"Sum: 331"
				],
				"accountText": "aj1stly > ArcTeslaElonMusk",
				"whisper": "@ArcTeslaElonMusk Hi, I would like to buy your Dusk Coat Coronal Leather listed for 20 chaos in Metamorph (stash tab \"Premium bling\"; position: left 7, top 4)",
				"note": "~price 20 chaos",
				"priceText": "20 chaos",
				"evalValue": 391.3,
				"evalPrice": 20,
				"hovered": false
			},
			{
				"id": "223c5526d860187e490aff8192fd78c24baa28cbf8dc52a45562abe645cff583",
				"name": "Wrath Coat",
				"sockets": [
					[
						"B",
						"G",
						"B",
						"B",
						"G",
						"B"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Evasion Rating 589",
					"Energy Shield 95"
				],
				"implicitMods": [],
				"explicitMods": [
					"35% increased Evasion and Energy Shield",
					"+123 to maximum Life",
					"Regenerate 23.9 Life per second",
					"+46% to Fire Resistance",
					"14% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +84% total Elemental Resistance",
					"(pseudo) +123 total maximum Life",
					"Sum: 330"
				],
				"accountText": "svarions23 > VprAuraMeta",
				"whisper": "@VprAuraMeta Hi, I would like to buy your Wrath Coat Blood Raiment listed for 80 chaos in Metamorph (stash tab \"Trade\"; position: left 7, top 4)",
				"note": "~price 80 chaos",
				"priceText": "80 chaos",
				"evalValue": 388.9,
				"evalPrice": 80,
				"hovered": false
			},
			{
				"id": "f1ec75e2e06aba38ef7e2e5f4a9a26f368760c0734282adea5236703380841c8",
				"name": "Rune Jack",
				"sockets": [
					[
						"B",
						"B",
						"B",
						"B",
						"G",
						"G"
					]
				],
				"itemLevel": 82,
				"properties": [
					"Evasion Rating 464",
					"Energy Shield 98"
				],
				"implicitMods": [
					"+20 to maximum Mana"
				],
				"explicitMods": [
					"+55 to Intelligence",
					"+111 to Evasion Rating",
					"+156 to maximum Life",
					"+24 to maximum Mana",
					"+30% to Fire Resistance",
					"+19% to Chaos Resistance"
				],
				"pseudoMods": [
					"(pseudo) +30% total Elemental Resistance",
					"(pseudo) +156 total maximum Life",
					"Sum: 342"
				],
				"accountText": "brewsauce65 > Touch_My_CoC_Daddy",
				"whisper": "@Touch_My_CoC_Daddy Hi, I would like to buy your Rune Jack Carnal Armour listed for 50 chaos in Metamorph (stash tab \"Monieees\"; position: left 11, top 10)",
				"note": "~price 50 chaos",
				"priceText": "50 chaos",
				"evalValue": 388.4,
				"evalPrice": 50,
				"hovered": false
			},
			{
				"id": "267946c13f816596425cb2cf9a0f4d920db0cda6d911dba2a17834dcfb02a71d",
				"name": "Dusk Salvation",
				"sockets": [
					[
						"G",
						"B",
						"R",
						"B",
						"R",
						"R"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Armour 401",
					"Evasion Rating 355"
				],
				"implicitMods": [],
				"explicitMods": [
					"+11 to Strength",
					"+25 to Armour",
					"63% increased Armour and Evasion",
					"+144 to maximum Life",
					"+41% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +50% total Elemental Resistance",
					"(pseudo) +149.5 total maximum Life",
					"Sum: 349"
				],
				"accountText": "jeyjeymaniac02 > J_DeathWalker",
				"whisper": "@J_DeathWalker  สวัสดี, เราต้องการจะชื้อของคุณ Dusk Salvation Field Lamellar ใน ราคา 53 chaos ใน Metamorph (stash tab \"$+2\"; ตำแหน่ง: ซ้าย 7, บน 1)",
				"note": "~price 53 chaos",
				"priceText": "53 chaos",
				"evalValue": 384.5,
				"evalPrice": 53,
				"hovered": false
			},
			{
				"id": "318895a34458910137c7ebd9f997a0e5896f2338a338c391e7baa4db6a426921",
				"name": "Glyph Pelt",
				"sockets": [
					[
						"G",
						"B",
						"B",
						"G",
						"G",
						"R"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Armour 313",
					"Evasion Rating 420"
				],
				"implicitMods": [],
				"explicitMods": [
					"+22 to Dexterity",
					"+107 to Evasion Rating",
					"+136 to maximum Life",
					"+27% to Fire Resistance",
					"+42% to Lightning Resistance",
					"Reflects 47 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +69% total Elemental Resistance",
					"(pseudo) +136 total maximum Life",
					"Sum: 341"
				],
				"accountText": "spiritlessness > poisonkekassasin",
				"whisper": "@poisonkekassasin Hi, I would like to buy your Glyph Pelt Dragonscale Doublet listed for 70 chaos in Metamorph (stash tab \"5\"; position: left 9, top 6)",
				"note": "~price 70 chaos",
				"priceText": "70 chaos",
				"evalValue": 383,
				"evalPrice": 70,
				"hovered": false
			},
			{
				"id": "d83936f272e8029bd40e6ba0b39ca16cdc406981207b1edc35005b77c1f1ebc9",
				"name": "Doom Sanctuary",
				"sockets": [
					[
						"B",
						"B",
						"G",
						"G",
						"G",
						"B"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Evasion Rating 388",
					"Energy Shield 72"
				],
				"implicitMods": [],
				"explicitMods": [
					"+15 to Evasion Rating",
					"+144 to maximum Life",
					"Regenerate 21.1 Life per second",
					"+20 to maximum Mana",
					"+47% to Fire Resistance",
					"+8% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +55% total Elemental Resistance",
					"(pseudo) +144 total maximum Life",
					"Sum: 343"
				],
				"accountText": "LeQSpell > FreezingPulseInq",
				"whisper": "@FreezingPulseInq Hi, I would like to buy your Doom Sanctuary Crypt Armour listed for 60 chaos in Metamorph (stash tab \"Trades\"; position: left 11, top 10)",
				"note": "~price 60 chaos",
				"priceText": "60 chaos",
				"evalValue": 381.8,
				"evalPrice": 60,
				"hovered": false
			},
			{
				"id": "55f56c713f5441ea2f1f88e62b5d953ccc5b065b8b81bb2d3df92d6942c1f1dc",
				"name": "Sol Skin",
				"sockets": [
					[
						"G",
						"B",
						"B",
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Evasion Rating 370",
					"Energy Shield 102"
				],
				"implicitMods": [],
				"explicitMods": [
					"+25 to maximum Energy Shield",
					"+129 to maximum Life",
					"+45% to Fire Resistance",
					"17% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +85% total Elemental Resistance",
					"(pseudo) +129 total maximum Life",
					"Sum: 343"
				],
				"accountText": "HannaFabius > HannaOreaDotDotBoom",
				"whisper": "@HannaOreaDotDotBoom Hi, I would like to buy your Sol Skin Crypt Armour listed for 64 chaos in Metamorph (stash tab \"-2-\"; position: left 1, top 4)",
				"note": "~b/o 64 chaos",
				"priceText": "64 chaos",
				"evalValue": 380,
				"evalPrice": 64,
				"hovered": false
			},
			{
				"id": "e6b5613368bd58d72dd521784d5331da374fcd0655b607452642e5e2db557a57",
				"name": "Gale Veil",
				"sockets": [
					[
						"R",
						"R",
						"G",
						"G",
						"B",
						"R"
					]
				],
				"itemLevel": 83,
				"properties": [
					"Quality +20%",
					"Armour 383",
					"Evasion Rating 330"
				],
				"implicitMods": [],
				"explicitMods": [
					"+44 to Armour",
					"+132 to maximum Life",
					"+42% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +80% total Elemental Resistance",
					"(pseudo) +132 total maximum Life",
					"Sum: 344"
				],
				"accountText": "DanteMoo > Moioch",
				"whisper": "@Moioch Hi, I would like to buy your Gale Veil Commander's Brigandine listed for 40 chaos in Metamorph (stash tab \"Pazar\"; position: left 3, top 8)",
				"note": "~price 40 chaos",
				"priceText": "40 chaos",
				"evalValue": 377,
				"evalPrice": 40,
				"hovered": false
			},
			{
				"id": "98ef206ca2751eaf4dd36d6b8852fc6cb5e521ade64e662b04ebb026196c018b",
				"name": "Hate Coat",
				"sockets": [
					[
						"G",
						"R",
						"G",
						"B",
						"R",
						"B"
					]
				],
				"itemLevel": 71,
				"properties": [
					"Armour 487",
					"Evasion Rating 473"
				],
				"implicitMods": [],
				"explicitMods": [
					"+37 to Strength",
					"+17 to Armour",
					"+100 to Evasion Rating",
					"+128 to maximum Life",
					"+36% to Lightning Resistance",
					"3% chance to Dodge Attack Hits"
				],
				"pseudoMods": [
					"(pseudo) +36% total Elemental Resistance",
					"(pseudo) +146.5 total maximum Life",
					"Sum: 329"
				],
				"accountText": "TheAudioMan > TheAudioMan________Meta",
				"whisper": "@TheAudioMan________Meta Hi, I would like to buy your Hate Coat Full Dragonscale listed for 54 chaos in Metamorph (stash tab \"~price 54 chaos\"; position: left 9, top 3)",
				"priceText": "54 chaos",
				"evalValue": 376.3,
				"evalPrice": 54,
				"hovered": false
			},
			{
				"id": "fe5f7d7af5a79aeb934f02b2596baa1c097998f379dfd079934a4350565275e2",
				"name": "Plague Cloak",
				"sockets": [
					[
						"B",
						"B",
						"B",
						"B",
						"B",
						"B"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Energy Shield 158"
				],
				"implicitMods": [],
				"explicitMods": [
					"+15 to maximum Energy Shield",
					"+149 to maximum Life",
					"+46% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +77% total Elemental Resistance",
					"(pseudo) +149 total maximum Life",
					"Sum: 375"
				],
				"accountText": "stresas > Raganate",
				"whisper": "@Raganate Hi, I would like to buy your Plague Cloak Necromancer Silks listed for 55 chaos in Metamorph (stash tab \"parde\"; position: left 9, top 8)",
				"note": "~b/o 55 chaos",
				"priceText": "55 chaos",
				"evalValue": 375,
				"evalPrice": 55,
				"hovered": false
			},
			{
				"id": "0e5028525864295c4b9631b40d63b542d66c0821bff75ebea8c4eb95450fdc51",
				"name": "Foe Veil",
				"sockets": [
					[
						"R",
						"B",
						"B",
						"G",
						"B",
						"R"
					]
				],
				"itemLevel": 86,
				"properties": [
					"Quality +20%",
					"Evasion Rating 412",
					"Energy Shield 81"
				],
				"implicitMods": [],
				"explicitMods": [
					"36% increased Evasion and Energy Shield",
					"+118 to maximum Life",
					"+33% to Fire Resistance",
					"+23% to Cold Resistance",
					"15% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +94% total Elemental Resistance",
					"(pseudo) +118 total maximum Life",
					"Sum: 330"
				],
				"accountText": "18kimchi18 > 찌릿찌릿할껄",
				"whisper": "@찌릿찌릿할껄 안녕하세요, 변형(보관함 탭 \"~price 5 chaos\", 위치: 왼쪽 3, 상단 10)에 80 chaos(으)로 올려놓은 적의 장막 진홍색 의복을(를) 구매하고 싶습니다",
				"note": "~price 80 chaos",
				"priceText": "80 chaos",
				"evalValue": 371.2,
				"evalPrice": 80,
				"hovered": false
			},
			{
				"id": "68980ed4e115b247ac95d10a8417eb726194adbd4ce6915556e2d020acbad751",
				"name": "Kraken Mantle",
				"sockets": [
					[
						"G",
						"G",
						"G",
						"B",
						"G",
						"B"
					]
				],
				"itemLevel": 84,
				"properties": [
					"Evasion Rating 400",
					"Energy Shield 87"
				],
				"implicitMods": [],
				"explicitMods": [
					"+13 to Evasion Rating",
					"+12 to maximum Energy Shield",
					"+125 to maximum Life",
					"+48% to Lightning Resistance",
					"Reflects 9 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +81% total Elemental Resistance",
					"(pseudo) +125 total maximum Life",
					"Sum: 331"
				],
				"accountText": "LucaIonut > NecroJohnnys",
				"whisper": "@NecroJohnnys Hi, I would like to buy your Kraken Mantle Varnished Coat listed for 50 chaos in Metamorph (stash tab \"sell\"; position: left 4, top 9)",
				"note": "~price 50 chaos",
				"priceText": "50 chaos",
				"evalValue": 371,
				"evalPrice": 50,
				"hovered": false
			},
			{
				"id": "d51131433ffe078602c24336ce020fa273877da318baa932a73f4fdcd0859534",
				"name": "Corpse Jack",
				"sockets": [
					[
						"R",
						"B",
						"G",
						"B",
						"B",
						"R"
					]
				],
				"itemLevel": 83,
				"properties": [
					"Quality +20%",
					"Armour 364",
					"Evasion Rating 386"
				],
				"implicitMods": [],
				"explicitMods": [
					"+52 to Strength",
					"+14 to Evasion Rating",
					"37% increased Armour and Evasion",
					"+140 to maximum Life",
					"Regenerate 6.1 Life per second",
					"15% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +166 total maximum Life",
					"Sum: 332"
				],
				"accountText": "Speedy992 > Velexyx",
				"whisper": "@Velexyx Hi, I would like to buy your Corpse Jack Hussar Brigandine listed for 50 chaos in Metamorph (stash tab \"pr\"; position: left 3, top 3)",
				"note": "~price 50 chaos",
				"priceText": "50 chaos",
				"evalValue": 370.6,
				"evalPrice": 50,
				"hovered": false
			},
			{
				"id": "53cdadf77d4e6899b611547de725494279036ca8c5de4ec999957f32e6fb141f",
				"name": "Havoc Carapace",
				"sockets": [
					[
						"G",
						"G",
						"G",
						"G",
						"B",
						"G"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Evasion Rating 396",
					"Energy Shield 77"
				],
				"implicitMods": [],
				"explicitMods": [
					"+123 to maximum Life",
					"+22 to maximum Mana",
					"+43% to Cold Resistance",
					"Reflects 5 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +81% total Elemental Resistance",
					"(pseudo) +123 total maximum Life",
					"Sum: 327"
				],
				"accountText": "R1S1NG > EleGolemBeef",
				"whisper": "@EleGolemBeef Hi, I would like to buy your Havoc Carapace Sentinel Jacket listed for 60 chaos in Metamorph (stash tab \"~price 60 chaos\"; position: left 11, top 1)",
				"priceText": "60 chaos",
				"evalValue": 366.6,
				"evalPrice": 60,
				"hovered": false
			},
			{
				"id": "5793b87d5f59865056f03d7ccd38a918747b923ec8e78a3301708cd3b3f6f7c9",
				"name": "Woe Ward",
				"sockets": [
					[
						"R",
						"G",
						"B",
						"G",
						"B",
						"B"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Evasion Rating 342",
					"Energy Shield 60"
				],
				"implicitMods": [],
				"explicitMods": [
					"+29 to Intelligence",
					"+34 to Evasion Rating",
					"+139 to maximum Life",
					"+16% to Lightning Resistance",
					"Reflects 24 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +54% total Elemental Resistance",
					"(pseudo) +139 total maximum Life",
					"Sum: 332"
				],
				"accountText": "thenvisible > Morphralash",
				"whisper": "@Morphralash Hi, I would like to buy your Woe Ward Crypt Armour listed for 55 chaos in Metamorph (stash tab \"-b/o\"; position: left 23, top 1)",
				"note": "~price 55 chaos",
				"priceText": "55 chaos",
				"evalValue": 366.2,
				"evalPrice": 55,
				"hovered": false
			},
			{
				"id": "a4f4dba14f48da406c6b8a3d19418bfe2c01e48e1edf9b7bbbcf2f0b93aecba2",
				"name": "Dragon Mantle",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"R",
						"R",
						"R"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Armour 721"
				],
				"implicitMods": [],
				"explicitMods": [
					"+38 to Strength",
					"+129 to maximum Life",
					"+33% to Fire Resistance",
					"Reflects 5 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +69% total Elemental Resistance",
					"(pseudo) +148 total maximum Life",
					"Sum: 365"
				],
				"accountText": "XionoiX > Chargemeupscot",
				"whisper": "@Chargemeupscot Hi, I would like to buy your Dragon Mantle Crusader Plate listed for 75 chaos in Metamorph (stash tab \"SHop dif\"; position: left 9, top 22)",
				"note": "~price 75 chaos",
				"priceText": "75 chaos",
				"evalValue": 365,
				"evalPrice": 75,
				"hovered": false
			},
			{
				"id": "4b4115dc2900d9240f4ab659addc9498856bbb78f780accbb6d747b6fad8f067",
				"name": "Havoc Keep",
				"sockets": [
					[
						"B",
						"B",
						"R",
						"R",
						"B",
						"R"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Armour 481",
					"Energy Shield 122"
				],
				"implicitMods": [],
				"explicitMods": [
					"+34 to Strength",
					"+11 to maximum Energy Shield",
					"+148 to maximum Life",
					"Regenerate 3.9 Life per second"
				],
				"pseudoMods": [
					"(pseudo) +35% total Elemental Resistance",
					"(pseudo) +165 total maximum Life",
					"Sum: 365"
				],
				"accountText": "PlusKuro > KuroShips",
				"whisper": "@KuroShips Hi, I would like to buy your Havoc Keep Saintly Chainmail listed for 100 chaos in Metamorph (stash tab \"~bru\"; position: left 3, top 1)",
				"note": "~price 100 chaos",
				"priceText": "100 chaos",
				"evalValue": 365,
				"evalPrice": 100,
				"hovered": false
			},
			{
				"id": "66e13be8ae7ffec30338d6345415a62e49f72c2c45190752c4b1d0f6e7c7d918",
				"name": "Death Hide",
				"sockets": [
					[
						"G",
						"G",
						"G",
						"G",
						"G",
						"B"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Armour 291",
					"Evasion Rating 273"
				],
				"implicitMods": [],
				"explicitMods": [
					"+14 to Armour",
					"30% increased Armour and Evasion",
					"+139 to maximum Life",
					"+25% to Fire Resistance",
					"+34% to Cold Resistance",
					"24% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +59% total Elemental Resistance",
					"(pseudo) +139 total maximum Life",
					"Sum: 337"
				],
				"accountText": "aaeeiioo > doomdreamers",
				"whisper": "@doomdreamers Hi, I would like to buy your Death Hide Wyrmscale Doublet listed for 25 chaos in Metamorph (stash tab \"6\"; position: left 3, top 8)",
				"note": "~price 25 chaos",
				"priceText": "25 chaos",
				"evalValue": 364.3,
				"evalPrice": 25,
				"hovered": false
			},
			{
				"id": "31912c102604ad6c828ea6b4212d8bade68e7a8de8b4775497f5e3e334a779b9",
				"name": "Storm Coat",
				"sockets": [
					[
						"G",
						"G",
						"B",
						"G",
						"B",
						"R"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Quality +7%",
					"Armour 379",
					"Energy Shield 79"
				],
				"implicitMods": [],
				"explicitMods": [
					"+46 to Intelligence",
					"+73 to Armour",
					"+19 to maximum Energy Shield",
					"+149 to maximum Life",
					"+37% to Fire Resistance",
					"+29% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +66% total Elemental Resistance",
					"(pseudo) +149 total maximum Life",
					"Sum: 364"
				],
				"accountText": "Spovoxz > Spovox_ToxicRain",
				"whisper": "@Spovox_ToxicRain Hi, I would like to buy your Storm Coat Chain Hauberk listed for 20 chaos in Metamorph (stash tab \"~price 20 chaos\"; position: left 2, top 8)",
				"priceText": "20 chaos",
				"evalValue": 364,
				"evalPrice": 20,
				"hovered": false
			},
			{
				"id": "e81831b8dd36286851a34771866e7fa6ead149162c62b1fb9acd221d041ef5fd",
				"name": "Mind Guardian",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"R",
						"R",
						"R"
					]
				],
				"itemLevel": 72,
				"properties": [
					"Quality +20%",
					"Armour 768"
				],
				"implicitMods": [],
				"explicitMods": [
					"+37 to Strength",
					"+110 to Armour",
					"+140 to maximum Life",
					"+9% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +47% total Elemental Resistance",
					"(pseudo) +158.5 total maximum Life",
					"Sum: 364"
				],
				"accountText": "iver99 > Dvoe_Protiv_Vseh",
				"whisper": "@Dvoe_Protiv_Vseh Здравствуйте, хочу купить у вас Разумный стражник Величественные латы за 80 chaos в лиге Метаморф (секция \"3\"; позиция: 5 столбец, 4 ряд)",
				"note": "~price 80 chaos",
				"priceText": "80 chaos",
				"evalValue": 364,
				"evalPrice": 80,
				"hovered": false
			},
			{
				"id": "107ee5ff4d7502ddb513b38de20ad06d0910cecd088892d5c88a76dc063c9491",
				"name": "Fate Ward",
				"sockets": [
					[
						"R",
						"B",
						"G",
						"B",
						"R",
						"R"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Armour 536",
					"Energy Shield 109"
				],
				"implicitMods": [],
				"explicitMods": [
					"+44 to Strength",
					"+10 to Intelligence",
					"+145 to Armour",
					"+32 to maximum Energy Shield",
					"+143 to maximum Life"
				],
				"pseudoMods": [
					"(pseudo) +34% total Elemental Resistance",
					"(pseudo) +165 total maximum Life",
					"Sum: 364"
				],
				"accountText": "iver99 > Dvoe_Protiv_Vseh",
				"whisper": "@Dvoe_Protiv_Vseh Здравствуйте, хочу купить у вас Благая опека Кольчуга праведника за 100 chaos в лиге Метаморф (секция \"3\"; позиция: 7 столбец, 7 ряд)",
				"note": "~price 100 chaos",
				"priceText": "100 chaos",
				"evalValue": 364,
				"evalPrice": 100,
				"hovered": false
			},
			{
				"id": "b7f4b7f04f80fb3c1ee2a3645713de02496885e311d6a20b8d217de463273ee4",
				"name": "Foe Shell",
				"sockets": [
					[
						"R",
						"B",
						"B",
						"B",
						"G",
						"B"
					]
				],
				"itemLevel": 82,
				"properties": [
					"Evasion Rating 334",
					"Energy Shield 52"
				],
				"implicitMods": [],
				"explicitMods": [
					"+42 to Dexterity",
					"+70 to Evasion Rating",
					"+144 to maximum Life",
					"+51 to maximum Mana",
					"+18% to Cold Resistance",
					"+23% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +41% total Elemental Resistance",
					"(pseudo) +144 total maximum Life",
					"Sum: 329"
				],
				"accountText": "Merkzi > Merkzi",
				"whisper": "@Merkzi Hi, I would like to buy your Foe Shell Crimson Raiment listed for 30 chaos in Metamorph (stash tab \"$SALES$\"; position: left 7, top 8)",
				"note": "~price 30 chaos",
				"priceText": "30 chaos",
				"evalValue": 362.4,
				"evalPrice": 30,
				"hovered": false
			},
			{
				"id": "ed901d4467e020e0bcd9da8c9205cdde7e659c44c7762665adbe405a51e7c173",
				"name": "Vengeance Skin",
				"sockets": [
					[
						"R",
						"B",
						"B",
						"B",
						"R",
						"R"
					]
				],
				"itemLevel": 84,
				"properties": [
					"Armour 936"
				],
				"implicitMods": [],
				"explicitMods": [
					"+19 to Strength",
					"+117 to Armour",
					"54% increased Armour",
					"+162 to maximum Life",
					"+17% to Cold Resistance",
					"16% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +17% total Elemental Resistance",
					"(pseudo) +171.5 total maximum Life",
					"Sum: 360"
				],
				"accountText": "DevilHimself2970 > DeadlyIcePower",
				"whisper": "@DeadlyIcePower Hi, I would like to buy your Vengeance Skin Colosseum Plate listed for 95 chaos in Metamorph (stash tab \"Sell#1\"; position: left 8, top 10)",
				"note": "~price 95 chaos",
				"priceText": "95 chaos",
				"evalValue": 360,
				"evalPrice": 95,
				"hovered": false
			},
			{
				"id": "c82b4024cef3581fd28d9450a12c56f949b44b0fd5eee6889c328ebc16755426",
				"name": "Rune Jack",
				"sockets": [
					[
						"B",
						"G",
						"B",
						"B",
						"G",
						"B"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Energy Shield 160"
				],
				"implicitMods": [],
				"explicitMods": [
					"+44 to maximum Energy Shield",
					"+136 to maximum Life",
					"+45% to Fire Resistance",
					"+43% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +88% total Elemental Resistance",
					"(pseudo) +136 total maximum Life",
					"Sum: 360"
				],
				"accountText": "tonypas1 > FermerFarmer",
				"whisper": "@FermerFarmer Здравствуйте, хочу купить у вас Рунный обыватель Халат чародея за 100 chaos в лиге Метаморф (секция \"trade\"; позиция: 5 столбец, 8 ряд)",
				"note": "~price 100 chaos",
				"priceText": "100 chaos",
				"evalValue": 360,
				"evalPrice": 100,
				"hovered": false
			},
			{
				"id": "680966841195cb7dc6aa4086bee1d973366843f8ba685be78880b80a62193490",
				"name": "Woe Curtain",
				"sockets": [
					[
						"R",
						"R",
						"G",
						"R",
						"R",
						"R"
					]
				],
				"itemLevel": 71,
				"properties": [
					"Quality +20%",
					"Armour 284",
					"Evasion Rating 284"
				],
				"implicitMods": [],
				"explicitMods": [
					"+32 to Strength",
					"+99 to maximum Life",
					"+32% to Cold Resistance",
					"+38% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +70% total Elemental Resistance",
					"(pseudo) +130 total maximum Life",
					"Sum: 330"
				],
				"accountText": "Gosudevil > ZoMg",
				"whisper": "@ZoMg Hi, I would like to buy your Woe Curtain Wyrmscale Doublet listed for 65 chaos in Metamorph (stash tab \"6L\"; position: left 5, top 1)",
				"note": "~price 65 chaos",
				"priceText": "65 chaos",
				"evalValue": 358.4,
				"evalPrice": 65,
				"hovered": false
			},
			{
				"id": "bae6bfe823d0190a0c9e25754d7c8dd340f083fbf1858016292da8a7a0167dc9",
				"name": "Cataclysm Carapace",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"R",
						"R",
						"B"
					]
				],
				"itemLevel": 83,
				"properties": [
					"Armour 446"
				],
				"implicitMods": [],
				"explicitMods": [
					"+53 to Strength",
					"+34 to Armour",
					"+25 to maximum Life",
					"+45% to Cold Resistance",
					"+42% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +87% total Elemental Resistance",
					"(pseudo) +135.5 total maximum Life",
					"Sum: 358"
				],
				"accountText": "VeenGarland > Virnag",
				"whisper": "@Virnag Hi, I would like to buy your Cataclysm Carapace Battle Plate listed for 50 chaos in Metamorph (stash tab \"shtuff\"; position: left 3, top 1)",
				"note": "~price 50 chaos",
				"priceText": "50 chaos",
				"evalValue": 358,
				"evalPrice": 50,
				"hovered": false
			},
			{
				"id": "71fe10b8b34116bb679374e4fedb90afb8df6e871bd204007c9c1ce999a14bf5",
				"name": "Carrion Pelt",
				"sockets": [
					[
						"R",
						"B",
						"R",
						"R",
						"R",
						"R"
					]
				],
				"itemLevel": 83,
				"properties": [
					"Armour 639"
				],
				"implicitMods": [],
				"explicitMods": [
					"+24 to Strength",
					"+80 to Armour",
					"+137 to maximum Life",
					"+14% to Cold Resistance",
					"+45% to Lightning Resistance",
					"Reflects 1 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +59% total Elemental Resistance",
					"(pseudo) +149 total maximum Life",
					"Sum: 357"
				],
				"accountText": "wesleysilvakuran > cocuruta",
				"whisper": "@cocuruta Olá, eu gostaria de comprar o seu item Pele da Carniça Placas Douradas listado por 50 chaos na Metamorph (aba do baú: \"venda\"; posição: esquerda 5, topo 6)",
				"note": "~price 50 chaos",
				"priceText": "50 chaos",
				"evalValue": 357,
				"evalPrice": 50,
				"hovered": false
			},
			{
				"id": "969ca046ecad2e81f5fbd2d4635431d30cfad649db47e8eb7a3f8278b3848af0",
				"name": "Behemoth Skin",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"R",
						"G",
						"B"
					]
				],
				"itemLevel": 73,
				"properties": [
					"Armour 355",
					"Energy Shield 109"
				],
				"implicitMods": [],
				"explicitMods": [
					"+29 to Strength",
					"+74 to Armour",
					"+54 to maximum Energy Shield",
					"+133 to maximum Life",
					"+20% to Cold Resistance",
					"+41% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +61% total Elemental Resistance",
					"(pseudo) +147.5 total maximum Life",
					"Sum: 356"
				],
				"accountText": "ghostello888 > metamogolems",
				"whisper": "@metamogolems Hi, I would like to buy your Behemoth Skin Chain Hauberk listed for 50 chaos in Metamorph (stash tab \"5\"; position: left 10, top 6)",
				"note": "~price 50 chaos",
				"priceText": "50 chaos",
				"evalValue": 356,
				"evalPrice": 50,
				"hovered": false
			},
			{
				"id": "f5db613febe5412b2b249089aee846167702b83543e25810b4f7a7399de44732",
				"name": "Behemoth Guardian",
				"sockets": [
					[
						"R",
						"B",
						"B",
						"G",
						"B",
						"B"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Armour 419",
					"Energy Shield 101"
				],
				"implicitMods": [],
				"explicitMods": [
					"9% increased Armour and Energy Shield",
					"+15 to maximum Energy Shield",
					"+113 to maximum Life",
					"+16 to maximum Mana",
					"+40% to Cold Resistance",
					"+45% to Lightning Resistance",
					"6% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +123% total Elemental Resistance",
					"(pseudo) +113 total maximum Life",
					"Sum: 349"
				],
				"accountText": "나노나 > 쿡크다스",
				"whisper": "@쿡크다스 안녕하세요, 변형(보관함 탭 \"tr1\", 위치: 왼쪽 5, 상단 2)에 100 chaos(으)로 올려놓은 거대한 가디언 단단한 고리 갑옷을(를) 구매하고 싶습니다",
				"note": "~price 100 chaos",
				"priceText": "100 chaos",
				"evalValue": 349,
				"evalPrice": 100,
				"hovered": false
			},
			{
				"id": "ff6f831ef8774dd8c4351eeadec3a2b3c8a18c02648487b5cca6a1b944ae249d",
				"name": "Chimeric Guardian",
				"sockets": [
					[
						"R",
						"R",
						"G",
						"B",
						"B",
						"G"
					]
				],
				"itemLevel": 69,
				"properties": [
					"Quality +20%",
					"Armour 412",
					"Energy Shield 94"
				],
				"implicitMods": [],
				"explicitMods": [
					"+41 to Armour",
					"+19 to maximum Energy Shield",
					"+117 to maximum Life",
					"+39% to Fire Resistance",
					"+37% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +114% total Elemental Resistance",
					"(pseudo) +117 total maximum Life",
					"Sum: 348"
				],
				"accountText": "나노나 > 쿡크다스",
				"whisper": "@쿡크다스 안녕하세요, 변형(보관함 탭 \"tr1\", 위치: 왼쪽 7, 상단 2)에 60 chaos(으)로 올려놓은 키메라의 가디언 신도 사슬 갑옷을(를) 구매하고 싶습니다",
				"note": "~price 60 chaos",
				"priceText": "60 chaos",
				"evalValue": 348,
				"evalPrice": 60,
				"hovered": false
			},
			{
				"id": "0eb8d792bcfbab5fc5df96277ae7d838f93884fb9ca2cb4d15116bbade148bde",
				"name": "Horror Coat",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"G",
						"B",
						"R"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Energy Shield 154"
				],
				"implicitMods": [],
				"explicitMods": [
					"+28 to maximum Energy Shield",
					"24% increased Energy Shield",
					"+151 to maximum Life",
					"+34% to Cold Resistance",
					"+12% to Lightning Resistance",
					"31% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +46% total Elemental Resistance",
					"(pseudo) +151 total maximum Life",
					"Sum: 348"
				],
				"accountText": "희야꺼 > 지뢰피카추",
				"whisper": "@지뢰피카추 안녕하세요, 변형(보관함 탭 \"거래2\", 위치: 왼쪽 3, 상단 1)에 80 chaos(으)로 올려놓은 경악의 외투 거미줄 실크 로브을(를) 구매하고 싶습니다",
				"note": "~price 80 chaos",
				"priceText": "80 chaos",
				"evalValue": 348,
				"evalPrice": 80,
				"hovered": false
			},
			{
				"id": "c7ea0e713bda93c49475f56a29c4821a09664813f7cff49cf980eaf213b21b63",
				"name": "Damnation Jack",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"R",
						"B",
						"R"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +13%",
					"Armour 769"
				],
				"implicitMods": [],
				"explicitMods": [
					"+18 to Strength",
					"32% increased Armour",
					"+124 to maximum Life",
					"+46% to Fire Resistance",
					"13% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +82% total Elemental Resistance",
					"(pseudo) +133 total maximum Life",
					"Sum: 348"
				],
				"accountText": "DXReaper > Percy_Jacksum",
				"whisper": "@Percy_Jacksum Hi, I would like to buy your Damnation Jack Majestic Plate listed for 90 chaos in Metamorph (stash tab \"sale2\"; position: left 6, top 6)",
				"note": "~b/o 90 chaos",
				"priceText": "90 chaos",
				"evalValue": 348,
				"evalPrice": 90,
				"hovered": false
			},
			{
				"id": "19e9f7619a285569627e46974c9aedf9cf1151f46ef62972b8edbe6a39669260",
				"name": "Cataclysm Sanctuary",
				"sockets": [
					[
						"R",
						"R",
						"G",
						"W",
						"R",
						"G"
					]
				],
				"itemLevel": 86,
				"properties": [
					"Quality +20%",
					"Armour 560"
				],
				"implicitMods": [],
				"explicitMods": [
					"+16 to Armour",
					"+146 to maximum Life",
					"+43% to Fire Resistance",
					"+10% to Cold Resistance",
					"Reflects 39 Physical Damage to Melee Attackers",
					"2% additional Physical Damage Reduction"
				],
				"pseudoMods": [
					"(pseudo) +53% total Elemental Resistance",
					"(pseudo) +146 total maximum Life",
					"Sum: 345"
				],
				"accountText": "Ready3 > ReadyDual",
				"whisper": "@ReadyDual Здравствуйте, хочу купить у вас Катастрофическое убежище Солнечные латы за 70 chaos в лиге Метаморф (секция \"$$$\"; позиция: 5 столбец, 5 ряд)",
				"note": "~price 70 chaos",
				"priceText": "70 chaos",
				"evalValue": 345,
				"evalPrice": 70,
				"hovered": false
			},
			{
				"id": "b3b9c4bfe0af5a7c2e27101d65ff8aef7873097d53441c3d0fb0274912c09b45",
				"name": "Morbid Curtain",
				"sockets": [
					[
						"R",
						"B",
						"R",
						"R",
						"R",
						"R"
					]
				],
				"itemLevel": 84,
				"properties": [
					"Quality +20%",
					"Armour 348",
					"Energy Shield 69"
				],
				"implicitMods": [],
				"explicitMods": [
					"41% increased Armour and Energy Shield",
					"+122 to maximum Life",
					"+20% to Cold Resistance",
					"+46% to Lightning Resistance",
					"17% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +100% total Elemental Resistance",
					"(pseudo) +122 total maximum Life",
					"Sum: 344"
				],
				"accountText": "MottyOrzz > RiseBeneathMe",
				"whisper": "@RiseBeneathMe Hi, I would like to buy your Morbid Curtain Latticed Ringmail listed for 75 chaos in Metamorph (stash tab \"S1\"; position: left 1, top 1)",
				"note": "~price 75 chaos",
				"priceText": "75 chaos",
				"evalValue": 344,
				"evalPrice": 75,
				"hovered": false
			},
			{
				"id": "239f4f451bb0bfb8427016efb83f9e19bb99472872d21f7037473b1ed150ff82",
				"name": "Pain Skin",
				"sockets": [
					[
						"B",
						"B",
						"R",
						"R",
						"B",
						"B"
					]
				],
				"itemLevel": 82,
				"properties": [
					"Quality +20%",
					"Energy Shield 161"
				],
				"implicitMods": [],
				"explicitMods": [
					"+116 to maximum Life",
					"Regenerate 6.6 Life per second",
					"+43% to Cold Resistance",
					"+30% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +73% total Elemental Resistance",
					"(pseudo) +133 total maximum Life",
					"Sum: 339"
				],
				"accountText": "iktonic > ChoVee",
				"whisper": "@ChoVee 안녕하세요, 변형(보관함 탭 \"$$\", 위치: 왼쪽 5, 상단 4)에 60 chaos(으)로 올려놓은 고통의 피부 네크로맨서 실크 갑옷을(를) 구매하고 싶습니다",
				"note": "~price 60 chaos",
				"priceText": "60 chaos",
				"evalValue": 339,
				"evalPrice": 60,
				"hovered": false
			},
			{
				"id": "7aa55c34bca60630bcbbc1630ad36f140e6e78058d7a4024b44567016f4eb7e6",
				"name": "Horror Keep",
				"sockets": [
					[
						"B",
						"R",
						"B",
						"R",
						"B",
						"G"
					]
				],
				"itemLevel": 75,
				"properties": [
					"Armour 325",
					"Energy Shield 87"
				],
				"implicitMods": [],
				"explicitMods": [
					"+24 to maximum Energy Shield",
					"+131 to maximum Life",
					"+36 to maximum Mana",
					"+34% to Fire Resistance",
					"+42% to Lightning Resistance",
					"23% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +76% total Elemental Resistance",
					"(pseudo) +131 total maximum Life",
					"Sum: 338"
				],
				"accountText": "Dombenexile > Brotheralmostthirtyyear",
				"whisper": "@Brotheralmostthirtyyear Hi, I would like to buy your Horror Keep Loricated Ringmail listed for 75 chaos in Metamorph (stash tab \"Money\"; position: left 16, top 7)",
				"note": "~b/o 75 chaos",
				"priceText": "75 chaos",
				"evalValue": 338,
				"evalPrice": 75,
				"hovered": false
			},
			{
				"id": "294271e228428bfe6897ffac22c5d1a3a5c3d7a04d78063cb681264d3063e25b",
				"name": "Storm Jack",
				"sockets": [
					[
						"B",
						"R",
						"B",
						"G",
						"B",
						"G"
					]
				],
				"itemLevel": 85,
				"properties": [
					"Energy Shield 132"
				],
				"implicitMods": [],
				"explicitMods": [
					"+26 to Intelligence",
					"+15 to maximum Energy Shield",
					"+134 to maximum Life",
					"+73 to maximum Mana",
					"+31% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +69% total Elemental Resistance",
					"(pseudo) +134 total maximum Life",
					"Sum: 337"
				],
				"accountText": "미역이랑 > 유비랑_듀얼",
				"whisper": "@유비랑_듀얼 안녕하세요, 변형(보관함 탭 \"사사장사\", 위치: 왼쪽 11, 상단 3)에 35 chaos(으)로 올려놓은 태풍 상인 네크로맨서 실크 갑옷을(를) 구매하고 싶습니다",
				"note": "~price 35 chaos",
				"priceText": "35 chaos",
				"evalValue": 337,
				"evalPrice": 35,
				"hovered": false
			},
			{
				"id": "7e4f89e7190e2cf15d3ffd737ac909eb5482df04cab9db2d805db308098540a1",
				"name": "Bramble Carapace",
				"sockets": [
					[
						"B",
						"B",
						"G",
						"R",
						"B",
						"G"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Armour 902"
				],
				"implicitMods": [],
				"explicitMods": [
					"+39 to Strength",
					"+15 to Armour",
					"14% increased Armour",
					"+138 to maximum Life",
					"+21% to Fire Resistance",
					"28% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +21% total Elemental Resistance",
					"(pseudo) +157.5 total maximum Life",
					"Sum: 336"
				],
				"accountText": "Slaughtah > Slaughtah",
				"whisper": "@Slaughtah Hi, I would like to buy your Bramble Carapace Glorious Plate listed for 35 chaos in Metamorph (stash tab \"~price to sell\"; position: left 1, top 6)",
				"note": "~price 35 chaos",
				"priceText": "35 chaos",
				"evalValue": 336,
				"evalPrice": 35,
				"hovered": false
			},
			{
				"id": "d2fae24e84b52526633c08e015950755a6c9c2716f5d448b52e5227522a6ac60",
				"name": "Rune Wrap",
				"sockets": [
					[
						"B",
						"R",
						"R",
						"B",
						"R",
						"R"
					]
				],
				"itemLevel": 83,
				"properties": [
					"Quality +20%",
					"Armour 607",
					"Energy Shield 119"
				],
				"implicitMods": [],
				"explicitMods": [
					"81% increased Armour and Energy Shield",
					"+122 to maximum Life",
					"+20% to Cold Resistance",
					"+32% to Lightning Resistance",
					"Reflects 1 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +92% total Elemental Resistance",
					"(pseudo) +122 total maximum Life",
					"Sum: 336"
				],
				"accountText": "exsecror > xxGerman",
				"whisper": "@xxGerman Hi, I would like to buy your Rune Wrap Devout Chainmail listed for 50 chaos in Metamorph (stash tab \"SELL\"; position: left 1, top 16)",
				"note": "~price 50 chaos",
				"priceText": "50 chaos",
				"evalValue": 336,
				"evalPrice": 50,
				"hovered": false
			},
			{
				"id": "2fd1301efa081c80c2497739927891ce20f09fce5d00ba8dc2a98f1ecc9b7a01",
				"name": "Honour Keep",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"B",
						"G",
						"B"
					]
				],
				"itemLevel": 73,
				"properties": [
					"Quality +20%",
					"Armour 390",
					"Energy Shield 95"
				],
				"implicitMods": [],
				"explicitMods": [
					"+16 to maximum Energy Shield",
					"+146 to maximum Life",
					"+16 to maximum Mana",
					"+10% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +44% total Elemental Resistance",
					"(pseudo) +146 total maximum Life",
					"Sum: 336"
				],
				"accountText": "iver99 > Dvoe_Protiv_Vseh",
				"whisper": "@Dvoe_Protiv_Vseh Здравствуйте, хочу купить у вас Почетный бастион Калантарь за 75 chaos в лиге Метаморф (секция \"3\"; позиция: 1 столбец, 7 ряд)",
				"note": "~price 75 chaos",
				"priceText": "75 chaos",
				"evalValue": 336,
				"evalPrice": 75,
				"hovered": false
			},
			{
				"id": "45065c33c9281510200f6985128538ed1dbaf561d020c6dd3a55b263073f88db",
				"name": "Dread Coat",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"R",
						"B",
						"R"
					]
				],
				"itemLevel": 73,
				"properties": [
					"Quality +20%",
					"Armour 568"
				],
				"implicitMods": [],
				"explicitMods": [
					"+28 to Strength",
					"6% increased Armour",
					"+117 to maximum Life",
					"+37% to Lightning Resistance",
					"6% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +72% total Elemental Resistance",
					"(pseudo) +131 total maximum Life",
					"Sum: 334"
				],
				"accountText": "Pepe1982 > OlmaBrotwurst",
				"whisper": "@OlmaBrotwurst Hi, I would like to buy your Dread Coat Sun Plate listed for 80 chaos in Metamorph (stash tab \"~price 12 chaos\"; position: left 8, top 10)",
				"note": "~price 80 chaos",
				"priceText": "80 chaos",
				"evalValue": 334,
				"evalPrice": 80,
				"hovered": false
			},
			{
				"id": "65ed9faebcde0e569109c2daa435f32e115b67b6958544699735544aae10f017",
				"name": "Dusk Jack",
				"sockets": [
					[
						"B",
						"B",
						"G",
						"B",
						"R",
						"G"
					]
				],
				"itemLevel": 80,
				"properties": [
					"Quality +20%",
					"Armour 388",
					"Energy Shield 91"
				],
				"implicitMods": [],
				"explicitMods": [
					"18% increased Armour and Energy Shield",
					"+11 to maximum Energy Shield",
					"+143 to maximum Life",
					"+14% to Cold Resistance",
					"9% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +48% total Elemental Resistance",
					"(pseudo) +143 total maximum Life",
					"Sum: 334"
				],
				"accountText": "iver99 > Dvoe_Protiv_Vseh",
				"whisper": "@Dvoe_Protiv_Vseh Здравствуйте, хочу купить у вас Сумрачный обыватель Хауберг за 100 chaos в лиге Метаморф (секция \"3\"; позиция: 1 столбец, 4 ряд)",
				"note": "~price 100 chaos",
				"priceText": "100 chaos",
				"evalValue": 334,
				"evalPrice": 100,
				"hovered": false
			},
			{
				"id": "ec929a46ad2dd9b260cc672e234b084038c870f0596687e15750dcedf7d798e2",
				"name": "Dragon Wrap",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"B",
						"G",
						"R"
					]
				],
				"itemLevel": 74,
				"properties": [
					"Armour 509",
					"Energy Shield 88"
				],
				"implicitMods": [],
				"explicitMods": [
					"+48 to Strength",
					"+41 to Armour",
					"39% increased Armour and Energy Shield",
					"+123 to maximum Life",
					"+39% to Fire Resistance",
					"18% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +39% total Elemental Resistance",
					"(pseudo) +147 total maximum Life",
					"Sum: 333"
				],
				"accountText": "secondaccountcauseban > Meltdamorphs",
				"whisper": "@Meltdamorphs Hi, I would like to buy your Dragon Wrap Loricated Ringmail listed for 27 chaos in Metamorph (stash tab \"Sale\"; position: left 11, top 8)",
				"note": "~price 27 chaos",
				"priceText": "27 chaos",
				"evalValue": 333,
				"evalPrice": 27,
				"hovered": false
			},
			{
				"id": "d23e6f0f254f9db34e0a46aeb758819be5bec17915df3e1a6dd18a505f56bdca",
				"name": "Apocalypse Pelt",
				"sockets": [
					[
						"G",
						"G",
						"G",
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 85,
				"properties": [
					"Armour 466",
					"Energy Shield 108"
				],
				"implicitMods": [],
				"explicitMods": [
					"+46 to Strength",
					"+4 to Armour",
					"15% increased Armour and Energy Shield",
					"+3 to maximum Energy Shield",
					"+118 to maximum Life",
					"+33% to Fire Resistance",
					"+18% to Cold Resistance",
					"9% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +51% total Elemental Resistance",
					"(pseudo) +141 total maximum Life",
					"Sum: 333"
				],
				"accountText": "Maleficent_TR > Bae_Joo_hyun",
				"whisper": "@Bae_Joo_hyun Hi, I would like to buy your Apocalypse Pelt Saintly Chainmail listed for 29 chaos in Metamorph (stash tab \"S\"; position: left 1, top 10)",
				"note": "~b/o 29 chaos",
				"priceText": "29 chaos",
				"evalValue": 333,
				"evalPrice": 29,
				"hovered": false
			},
			{
				"id": "d935806c06445eaa50fbc947ae4b00c25ef39d073b587b24b754db7912965164",
				"name": "Onslaught Cloak",
				"sockets": [
					[
						"R",
						"R",
						"G",
						"B",
						"B",
						"G"
					]
				],
				"itemLevel": 84,
				"properties": [
					"Armour 1133"
				],
				"implicitMods": [],
				"explicitMods": [
					"+41 to Strength",
					"+54 to Armour",
					"94% increased Armour",
					"+146 to maximum Life",
					"28% increased Stun and Block Recovery",
					"2% additional Physical Damage Reduction"
				],
				"pseudoMods": [
					"(pseudo) +166.5 total maximum Life",
					"Sum: 333"
				],
				"accountText": "김라이 > 주민등본",
				"whisper": "@주민등본 안녕하세요, 변형(보관함 탭 \"비싼판매\", 위치: 왼쪽 11, 상단 1)에 60 chaos(으)로 올려놓은 맹공 망토 압도적인 판금 갑옷을(를) 구매하고 싶습니다",
				"note": "~price 60 chaos",
				"priceText": "60 chaos",
				"evalValue": 333,
				"evalPrice": 60,
				"hovered": false
			},
			{
				"id": "99f9e2e998ed2aeeea22f8e3e2ae2b2460954e4a238c9d564bca7b6a38e1e164",
				"name": "Hate Pelt",
				"sockets": [
					[
						"B",
						"G",
						"R",
						"W",
						"R",
						"R"
					]
				],
				"itemLevel": 64,
				"properties": [
					"Quality +20%",
					"Armour 750"
				],
				"implicitMods": [],
				"explicitMods": [
					"+24 to Armour",
					"+142 to maximum Life",
					"+33% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +48% total Elemental Resistance",
					"(pseudo) +142 total maximum Life",
					"Sum: 332"
				],
				"accountText": "Red1999 > Terminam",
				"whisper": "@Terminam Hi, I would like to buy your Hate Pelt Crusader Plate listed for 50 chaos in Metamorph (stash tab \"~price 50 chaos\"; position: left 11, top 4)",
				"priceText": "50 chaos",
				"evalValue": 332,
				"evalPrice": 50,
				"hovered": false
			},
			{
				"id": "53cc619e8d4fe9edfb3b75650a09950a609510eb18f142720be157d73bcf6ca8",
				"name": "Cataclysm Jack",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"R",
						"G",
						"G"
					]
				],
				"itemLevel": 75,
				"properties": [
					"Armour 779"
				],
				"implicitMods": [],
				"explicitMods": [
					"+11 to Strength",
					"+31 to Armour",
					"32% increased Armour",
					"+130 to maximum Life",
					"+24% to Fire Resistance",
					"+37% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +61% total Elemental Resistance",
					"(pseudo) +135.5 total maximum Life",
					"Sum: 332"
				],
				"accountText": "Kingmuse > 철퇴로후리자",
				"whisper": "@철퇴로후리자 안녕하세요, 변형(보관함 탭 \"팜\", 위치: 왼쪽 7, 상단 10)에 70 chaos(으)로 올려놓은 대재앙 상인 황금 판금 갑옷을(를) 구매하고 싶습니다",
				"note": "~price 70 chaos",
				"priceText": "70 chaos",
				"evalValue": 332,
				"evalPrice": 70,
				"hovered": false
			},
			{
				"id": "7e092ae7a8ed2309fd6de137a9564025c4f089b19a03dd7b1eb2de88cd89f606",
				"name": "Bramble Cloak",
				"sockets": [
					[
						"B",
						"B",
						"B",
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Armour 755"
				],
				"implicitMods": [],
				"explicitMods": [
					"+196 to Armour",
					"+140 to maximum Life",
					"+42% to Cold Resistance",
					"+9% to Lightning Resistance",
					"23% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +51% total Elemental Resistance",
					"(pseudo) +140 total maximum Life",
					"Sum: 331"
				],
				"accountText": "ZumziRo > NekkomancerJewAgain",
				"whisper": "@NekkomancerJewAgain Hi, I would like to buy your Bramble Cloak Golden Plate listed for 40 chaos in Metamorph (stash tab \"$\"; position: left 11, top 4)",
				"note": "~price 40 chaos",
				"priceText": "40 chaos",
				"evalValue": 331,
				"evalPrice": 40,
				"hovered": false
			},
			{
				"id": "b74f98a53bda4bfcbe60ee0735aa41ba682ede90b38d52132226a9c79ca26773",
				"name": "Torment Hide",
				"sockets": [
					[
						"B",
						"G",
						"B",
						"R",
						"G",
						"R"
					]
				],
				"itemLevel": 84,
				"properties": [
					"Armour 667"
				],
				"implicitMods": [],
				"explicitMods": [
					"+50 to Strength",
					"+19 to Armour",
					"42% increased Armour",
					"+133 to maximum Life",
					"+15% to Cold Resistance",
					"29% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +15% total Elemental Resistance",
					"(pseudo) +158 total maximum Life",
					"Sum: 331"
				],
				"accountText": "ShakToth > BeiThorsHammer",
				"whisper": "@BeiThorsHammer Hi, I would like to buy your Torment Hide Sun Plate listed for 50 chaos in Metamorph (stash tab \"€€€2\"; position: left 11, top 10)",
				"note": "~price 50 chaos",
				"priceText": "50 chaos",
				"evalValue": 331,
				"evalPrice": 50,
				"hovered": false
			},
			{
				"id": "5562c7324bd0c61db3e47a873f48771db6eac091ca89947e3aed607cea4f4b2d",
				"name": "Fate Carapace",
				"sockets": [
					[
						"B",
						"B",
						"B",
						"B",
						"B",
						"B"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Energy Shield 158"
				],
				"implicitMods": [],
				"explicitMods": [
					"25% increased Energy Shield",
					"+125 to maximum Life",
					"+48% to Lightning Resistance",
					"23% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +81% total Elemental Resistance",
					"(pseudo) +125 total maximum Life",
					"Sum: 331"
				],
				"accountText": "PlusKuro > KuroShips",
				"whisper": "@KuroShips Hi, I would like to buy your Fate Carapace Savant's Robe listed for 55 chaos in Metamorph (stash tab \"~bru\"; position: left 11, top 1)",
				"note": "~price 55 chaos",
				"priceText": "55 chaos",
				"evalValue": 331,
				"evalPrice": 55,
				"hovered": false
			},
			{
				"id": "4da5b88ffde8c9f026e0e9ade06e88724b80aa0d8c3f7b80bb1fa5ed404dbd28",
				"name": "Damnation Skin",
				"sockets": [
					[
						"R",
						"B",
						"B",
						"B",
						"G",
						"B"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Energy Shield 193"
				],
				"implicitMods": [],
				"explicitMods": [
					"+11 to maximum Energy Shield",
					"11% increased Energy Shield",
					"+142 to maximum Life",
					"Regenerate 5.8 Life per second",
					"+6% to Cold Resistance",
					"+41% to Lightning Resistance",
					"6% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +47% total Elemental Resistance",
					"(pseudo) +142 total maximum Life",
					"Sum: 331"
				],
				"accountText": "잠자는사나 > 싸클기임빱",
				"whisper": "@싸클기임빱 안녕하세요, 변형(보관함 탭 \"방어구\", 위치: 왼쪽 3, 상단 10)에 100 chaos(으)로 올려놓은 지옥 피부 바알 예복을(를) 구매하고 싶습니다",
				"note": "~price 100 chaos",
				"priceText": "100 chaos",
				"evalValue": 331,
				"evalPrice": 100,
				"hovered": false
			},
			{
				"id": "f860d10fd6a1a8661932b46f7dce9d3c5e167607181f40bd8bff7e7cf11f6602",
				"name": "Loath Curtain",
				"sockets": [
					[
						"R",
						"B",
						"G",
						"G",
						"R",
						"R"
					]
				],
				"itemLevel": 83,
				"properties": [
					"Quality +20%",
					"Armour 766"
				],
				"implicitMods": [],
				"explicitMods": [
					"+30 to Strength",
					"+126 to maximum Life",
					"+18% to Lightning Resistance",
					"Reflects 3 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +18% total Elemental Resistance",
					"(pseudo) +156 total maximum Life",
					"Sum: 330"
				],
				"accountText": "_Catboy_ > CarBoy_",
				"whisper": "@CarBoy_ Hi, I would like to buy your Loath Curtain Golden Plate listed for 40 chaos in Metamorph (stash tab \"Продавалка!\"; position: left 4, top 3)",
				"note": "~price 40 chaos",
				"priceText": "40 chaos",
				"evalValue": 330,
				"evalPrice": 40,
				"hovered": false
			},
			{
				"id": "d3c95d48323df4a58bf832ead4f7b9eb62890996ee25727adde0bbdb6d443a52",
				"name": "Miracle Hide",
				"sockets": [
					[
						"B",
						"R",
						"B",
						"B",
						"R",
						"G"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Quality +13%",
					"Armour 437",
					"Energy Shield 95"
				],
				"implicitMods": [],
				"explicitMods": [
					"+42 to Strength",
					"+9 to maximum Energy Shield",
					"+127 to maximum Life",
					"+15 to maximum Mana",
					"+6% to Fire Resistance",
					"+28% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +34% total Elemental Resistance",
					"(pseudo) +148 total maximum Life",
					"Sum: 330"
				],
				"accountText": "Haute666 > SophieMaus",
				"whisper": "@SophieMaus Hi, I would like to buy your Miracle Hide Conquest Chainmail listed for 50 chaos in Metamorph (stash tab \"~price 50 chaos\"; position: left 1, top 9)",
				"priceText": "50 chaos",
				"evalValue": 330,
				"evalPrice": 50,
				"hovered": false
			},
			{
				"id": "0db240020258a4abb4c4914b096084017538fb375eff7b849cbce5d70c99ef27",
				"name": "Woe Veil",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"R",
						"R",
						"R"
					]
				],
				"itemLevel": 84,
				"properties": [
					"Armour 1096"
				],
				"implicitMods": [],
				"explicitMods": [
					"18% reduced Attribute Requirements",
					"+114 to Armour",
					"94% increased Armour",
					"+143 to maximum Life",
					"+44% to Fire Resistance",
					"13% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +44% total Elemental Resistance",
					"(pseudo) +143 total maximum Life",
					"Sum: 330"
				],
				"accountText": "BabuinPower > BloodForTheBloodyGod",
				"whisper": "@BloodForTheBloodyGod Hi, I would like to buy your Woe Veil Sun Plate listed for 75 chaos in Metamorph (stash tab \"~b/o 30 chaos\"; position: left 15, top 6)",
				"note": "~price 75 chaos",
				"priceText": "75 chaos",
				"evalValue": 330,
				"evalPrice": 75,
				"hovered": false
			},
			{
				"id": "13ec86214cff6975c2ba07811d1a73ea5dd8244c1d647cdce42a5909c4207b07",
				"name": "Armageddon Veil",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"R",
						"R",
						"R"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Armour 1181"
				],
				"implicitMods": [],
				"explicitMods": [
					"40% increased Armour",
					"+126 to maximum Life",
					"+47% to Cold Resistance",
					"17% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +78% total Elemental Resistance",
					"(pseudo) +126 total maximum Life",
					"Sum: 330"
				],
				"accountText": "Walle746 > Waltermelonas",
				"whisper": "@Waltermelonas Hi, I would like to buy your Armageddon Veil Gladiator Plate listed for 90 chaos in Metamorph (stash tab \"$\"; position: left 7, top 1)",
				"note": "~price 90 chaos",
				"priceText": "90 chaos",
				"evalValue": 330,
				"evalPrice": 90,
				"hovered": false
			},
			{
				"id": "6b4d03ff28cca7845bbb0edc82eb9fd296481d4f8e4438ea53db9713f6b5a1a3",
				"name": "Victory Cloak",
				"sockets": [
					[
						"B",
						"R",
						"R",
						"R",
						"R",
						"B"
					]
				],
				"itemLevel": 85,
				"properties": [
					"Quality +20%",
					"Armour 445",
					"Energy Shield 82"
				],
				"implicitMods": [],
				"explicitMods": [
					"+27 to Strength",
					"+50 to Intelligence",
					"+19 to Armour",
					"40% increased Armour and Energy Shield",
					"+135 to maximum Life",
					"+32% to Cold Resistance",
					"16% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +32% total Elemental Resistance",
					"(pseudo) +148.5 total maximum Life",
					"Sum: 329"
				],
				"accountText": "Rusi1991 > BlackOutLOL",
				"whisper": "@BlackOutLOL Hi, I would like to buy your Victory Cloak Ornate Ringmail listed for 70 chaos in Metamorph (stash tab \"Silller \"; position: left 9, top 2)",
				"note": "~price 70 chaos",
				"priceText": "70 chaos",
				"evalValue": 329,
				"evalPrice": 70,
				"hovered": false
			},
			{
				"id": "e9a858f55e7cf694af9944435bb340620299b89b463af7b5fbd950f373824058",
				"name": "Rune Shell",
				"sockets": [
					[
						"B",
						"B",
						"G",
						"R",
						"R",
						"B"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Quality +20%",
					"Armour 311",
					"Energy Shield 61"
				],
				"implicitMods": [],
				"explicitMods": [
					"+125 to maximum Life",
					"+68 to maximum Mana",
					"+46% to Lightning Resistance",
					"22% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +78% total Elemental Resistance",
					"(pseudo) +125 total maximum Life",
					"Sum: 328"
				],
				"accountText": "PlusKuro > KuroShips",
				"whisper": "@KuroShips Hi, I would like to buy your Rune Shell Ornate Ringmail listed for 55 chaos in Metamorph (stash tab \"9\"; position: left 9, top 7)",
				"note": "~price 55 chaos",
				"priceText": "55 chaos",
				"evalValue": 328,
				"evalPrice": 55,
				"hovered": false
			},
			{
				"id": "2827e1d6c2eee626cab679213d68734f38e6d93383c7ff7a503545648646b1ad",
				"name": "Empyrean Jack",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"R",
						"R",
						"R"
					]
				],
				"itemLevel": 82,
				"properties": [
					"Armour 682"
				],
				"implicitMods": [],
				"explicitMods": [
					"+21 to Strength",
					"+18 to Armour",
					"34% increased Armour",
					"+123 to maximum Life",
					"+36% to Fire Resistance",
					"+25% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +61% total Elemental Resistance",
					"(pseudo) +133.5 total maximum Life",
					"Sum: 328"
				],
				"accountText": "X_7071_k1773R_X > xXx_osuplayer_xXx",
				"whisper": "@xXx_osuplayer_xXx Hi, I would like to buy your Empyrean Jack Colosseum Plate listed for 70 chaos in Metamorph (stash tab \"blbl\"; position: left 5, top 10)",
				"note": "~price 70 chaos",
				"priceText": "70 chaos",
				"evalValue": 328,
				"evalPrice": 70,
				"hovered": false
			},
			{
				"id": "5d61a4cd04166e28cbc4fe60c931c0b4a55748545012614a002f7378cfa6de84",
				"name": "Maelström Skin",
				"sockets": [
					[
						"R",
						"R",
						"R",
						"B",
						"B",
						"R"
					]
				],
				"itemLevel": 84,
				"properties": [
					"Quality +20%",
					"Armour 726"
				],
				"implicitMods": [],
				"explicitMods": [
					"+52 to Strength",
					"+46 to Armour",
					"+103 to maximum Life",
					"+40% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +70% total Elemental Resistance",
					"(pseudo) +129 total maximum Life",
					"Sum: 328"
				],
				"accountText": "pixfos > Jonter",
				"whisper": "@Jonter Hi, I would like to buy your Maelström Skin Golden Plate listed for 80 chaos in Metamorph (stash tab \"SELL2\"; position: left 1, top 5)",
				"note": "~price 80 chaos",
				"priceText": "80 chaos",
				"evalValue": 328,
				"evalPrice": 80,
				"hovered": false
			},
			{
				"id": "9657f734409df9c285796be9d84bc2c591716fe968ad234742fe3c81e756404f",
				"name": "Armageddon Shelter",
				"sockets": [
					[
						"R",
						"R",
						"G",
						"R",
						"R",
						"R"
					]
				],
				"itemLevel": 100,
				"properties": [
					"Armour 649"
				],
				"implicitMods": [],
				"explicitMods": [
					"+90 to Armour",
					"+125 to maximum Life",
					"+40% to Cold Resistance",
					"+8% to Lightning Resistance",
					"Reflects 48 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +77% total Elemental Resistance",
					"(pseudo) +125 total maximum Life",
					"Sum: 327"
				],
				"accountText": "BG_dob > BondyRoar",
				"whisper": "@BondyRoar Hi, I would like to buy your Armageddon Shelter Golden Plate listed for 80 chaos in Metamorph (stash tab \"$\"; position: left 1, top 6)",
				"note": "~price 80 chaos",
				"priceText": "80 chaos",
				"evalValue": 327,
				"evalPrice": 80,
				"hovered": false
			},
			{
				"id": "20dd531fb10863fc1673c84da2c4b907e76e76484c5d7e2293b1f034cc2c2634",
				"name": "Grim Keep",
				"sockets": [
					[
						"G",
						"B",
						"R",
						"R",
						"G",
						"G"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Armour 901"
				],
				"implicitMods": [],
				"explicitMods": [
					"+39 to Strength",
					"+371 to Armour",
					"+103 to maximum Life",
					"+41% to Cold Resistance",
					"+41% to Lightning Resistance",
					"Reflects 18 Physical Damage to Melee Attackers"
				],
				"pseudoMods": [
					"(pseudo) +82% total Elemental Resistance",
					"(pseudo) +122.5 total maximum Life",
					"Sum: 327"
				],
				"accountText": "msw668 > DepthCharj",
				"whisper": "@DepthCharj Hi, I would like to buy your Grim Keep Majestic Plate listed for 100 chaos in Metamorph (stash tab \"Sale\"; position: left 6, top 3)",
				"note": "~b/o 100 chaos",
				"priceText": "100 chaos",
				"evalValue": 327,
				"evalPrice": 100,
				"hovered": false
			},
			{
				"id": "f88d0785e064668ba14f85ff3e5e1936556fa9315ae864388dded017a715a0c9",
				"name": "Entropy Skin",
				"sockets": [
					[
						"B",
						"B",
						"B",
						"G",
						"R",
						"R"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Armour 329",
					"Energy Shield 59"
				],
				"implicitMods": [
					"You take 50% reduced Extra Damage from Critical Strikes"
				],
				"explicitMods": [
					"+27 to Armour",
					"+144 to maximum Life",
					"+43 to maximum Mana",
					"22% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +38% total Elemental Resistance",
					"(pseudo) +144 total maximum Life",
					"Sum: 326"
				],
				"accountText": "GogoColdd > Малайкбилайк",
				"whisper": "@Малайкбилайк Hi, I would like to buy your Entropy Skin Devout Chainmail listed for 20 chaos in Metamorph (stash tab \"~b/o 20 chaos\"; position: left 2, top 1)",
				"priceText": "20 chaos",
				"evalValue": 326,
				"evalPrice": 20,
				"hovered": false
			},
			{
				"id": "3c720b90a0c6e051473dcced993aba9e65eeeceb3e93969df8541db7d0d3d15e",
				"name": "Hate Jack",
				"sockets": [
					[
						"G",
						"B",
						"B",
						"G",
						"G",
						"R"
					]
				],
				"itemLevel": 81,
				"properties": [
					"Armour 841"
				],
				"implicitMods": [],
				"explicitMods": [
					"+31 to Armour",
					"33% increased Armour",
					"+145 to maximum Life",
					"+21% to Cold Resistance",
					"+15% to Lightning Resistance",
					"31% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +36% total Elemental Resistance",
					"(pseudo) +145 total maximum Life",
					"Sum: 326"
				],
				"accountText": "SadisticChipmunk > BiggestBlackestCoC",
				"whisper": "@BiggestBlackestCoC Hi, I would like to buy your Hate Jack Crusader Plate listed for 45 chaos in Metamorph (stash tab \"20+\"; position: left 5, top 4)",
				"note": "~price 45 chaos",
				"priceText": "45 chaos",
				"evalValue": 326,
				"evalPrice": 45,
				"hovered": false
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
		this.itemsData.items.forEach((itemData, i) => {
			let itemListing = document.createElement('x-item-listing');
			this.$('#results-list').appendChild(itemListing);
			itemListing.addEventListener('select', () => {
				this.itemsData.selectItem(i);
				itemListing.selected = itemData.selected;
				this.renderItemsDataChart();
			});
			itemListing.addEventListener('hover', e => {
				this.itemsData.hoverItem(e.detail && i);
				this.renderItemsData(true);
			});
			itemListing.itemData = itemData;
		});
	}

	renderItemsDataListBackgroundsOnly() {
		[...this.$('#results-list').children].forEach((el, i) => {
			if (i >= this.itemsData.items.length)
				return;
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
