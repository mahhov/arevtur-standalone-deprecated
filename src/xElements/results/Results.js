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
				"id": "4d9b77bc3694ecee2c0a42f618649c4ddb3fdce437483cc32cafe94a51ed401d",
				"name": "The Bringer of Rain",
				"type": "Nightmare Bascinet",
				"itemLevel": 72,
				"sockets": [
					[
						"G",
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 578",
					"evasion 832"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"Socketed Gems are Supported by Level 18 Melee Physical Damage",
					"Socketed Gems are Supported by Level 18 Faster Attacks",
					"Socketed Gems are supported by Level 18 Blind",
					"6% Chance to Block Attack Damage",
					"Adds 20 to 30 Physical Damage to Attacks",
					"257% increased Armour and Evasion",
					"+208 to maximum Life",
					"20% chance to gain an Endurance Charge when you Block",
					"Can't use Chest armour",
					"Extra gore"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +208 total maximum Life",
					"Sum: 416"
				],
				"accountText": "Kakashicafe > Kousakarin",
				"whisper": "@Kousakarin Hi, I would like to buy your The Bringer of Rain Nightmare Bascinet listed for 1 chaos in Metamorph (stash tab \"4\"; position: left 6, top 11)",
				"note": "~price 1 chaos",
				"weightValue": 416,
				"valueText": "416 + defense value 0 + value shift 0",
				"evalValue": 416,
				"priceText": "1 chaos",
				"evalPrice": 1,
				"debug": {
					"id": "4d9b77bc3694ecee2c0a42f618649c4ddb3fdce437483cc32cafe94a51ed401d",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-14T03:48:12Z",
						"stash": {
							"name": "4",
							"x": 5,
							"y": 10
						},
						"whisper": "@Kousakarin Hi, I would like to buy your The Bringer of Rain Nightmare Bascinet listed for 1 chaos in Metamorph (stash tab \"4\"; position: left 6, top 11)",
						"account": {
							"name": "Kakashicafe",
							"lastCharacterName": "Kousakarin",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 1,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/TheBringerofRain.png?scale=1&w=2&h=2&v=f1f30003d5ee2d2fb09f7fa8668a8337",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "The Bringer of Rain",
						"typeLine": "Nightmare Bascinet",
						"identified": true,
						"ilvl": 72,
						"note": "~price 1 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"578",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"832",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"67",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"62",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"85",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"Socketed Gems are Supported by Level 18 Melee Physical Damage",
							"Socketed Gems are Supported by Level 18 Faster Attacks",
							"Socketed Gems are supported by Level 18 Blind",
							"6% Chance to Block Attack Damage",
							"Adds 20 to 30 Physical Damage to Attacks",
							"257% increased Armour and Evasion",
							"+208 to maximum Life",
							"20% chance to gain an Endurance Charge when you Block",
							"Can't use Chest armour",
							"Extra gore"
						],
						"flavourText": [
							"\"What lies beneath your feet?!\"\r",
							"\"Sacred ground, watered with tears of blood!\""
						],
						"frameType": 3,
						"extended": {
							"ev": 832,
							"ar": 578,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2451402625",
												"min": 200,
												"max": 300
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3032590688",
												"min": 20,
												"max": 20
											},
											{
												"hash": "explicit.stat_3032590688",
												"min": 30,
												"max": 30
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 200,
												"max": 220
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2530372417",
												"min": 6,
												"max": 6
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2223640518",
												"min": 18,
												"max": 18
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_928701213",
												"min": 18,
												"max": 18
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2985291457",
												"min": 18,
												"max": 18
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_417188801",
												"min": 20,
												"max": 20
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_4007482102",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3403461239",
												"min": 1,
												"max": 1
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_2985291457",
										[
											6
										]
									],
									[
										"explicit.stat_928701213",
										[
											5
										]
									],
									[
										"explicit.stat_2223640518",
										[
											4
										]
									],
									[
										"explicit.stat_2530372417",
										[
											3
										]
									],
									[
										"explicit.stat_3032590688",
										[
											1
										]
									],
									[
										"explicit.stat_2451402625",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2
										]
									],
									[
										"explicit.stat_417188801",
										[
											7
										]
									],
									[
										"explicit.stat_4007482102",
										[
											8
										]
									],
									[
										"explicit.stat_3403461239",
										[
											9
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClRoZSBCcmluZ2VyIG9mIFJhaW4NCk5pZ2h0bWFyZSBCYXNjaW5ldA0KLS0tLS0tLS0NCkFybW91cjogNTc4IChhdWdtZW50ZWQpDQpFdmFzaW9uIFJhdGluZzogODMyIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY3DQpTdHI6IDYyDQpEZXg6IDg1DQotLS0tLS0tLQ0KU29ja2V0czogRy1SIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcyDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQpTb2NrZXRlZCBHZW1zIGFyZSBTdXBwb3J0ZWQgYnkgTGV2ZWwgMTggTWVsZWUgUGh5c2ljYWwgRGFtYWdlDQpTb2NrZXRlZCBHZW1zIGFyZSBTdXBwb3J0ZWQgYnkgTGV2ZWwgMTggRmFzdGVyIEF0dGFja3MNClNvY2tldGVkIEdlbXMgYXJlIHN1cHBvcnRlZCBieSBMZXZlbCAxOCBCbGluZA0KNiUgQ2hhbmNlIHRvIEJsb2NrIEF0dGFjayBEYW1hZ2UNCkFkZHMgMjAgdG8gMzAgUGh5c2ljYWwgRGFtYWdlIHRvIEF0dGFja3MNCjI1NyUgaW5jcmVhc2VkIEFybW91ciBhbmQgRXZhc2lvbg0KKzIwOCB0byBtYXhpbXVtIExpZmUNCjIwJSBjaGFuY2UgdG8gZ2FpbiBhbiBFbmR1cmFuY2UgQ2hhcmdlIHdoZW4geW91IEJsb2NrDQpDYW4ndCB1c2UgQ2hlc3QgYXJtb3VyDQpFeHRyYSBnb3JlDQotLS0tLS0tLQ0KIldoYXQgbGllcyBiZW5lYXRoIHlvdXIgZmVldD8hIg0KIlNhY3JlZCBncm91bmQsIHdhdGVyZWQgd2l0aCB0ZWFycyBvZiBibG9vZCEiDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDEgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +208 total maximum Life",
							"Sum: 416"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "e6624573a40c77eae2548a8a5e5dcf41b77bb0a8de0839ade0d9155c08f64ab4",
				"name": "The Bringer of Rain",
				"type": "Nightmare Bascinet",
				"itemLevel": 80,
				"sockets": [
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 562",
					"evasion 809"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"Socketed Gems are Supported by Level 18 Melee Physical Damage",
					"Socketed Gems are Supported by Level 18 Faster Attacks",
					"Socketed Gems are supported by Level 18 Blind",
					"6% Chance to Block Attack Damage",
					"Adds 20 to 30 Physical Damage to Attacks",
					"247% increased Armour and Evasion",
					"+202 to maximum Life",
					"20% chance to gain an Endurance Charge when you Block",
					"Can't use Chest armour",
					"Extra gore"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +202 total maximum Life",
					"Sum: 404"
				],
				"accountText": "Trollphrodite > KabukiCoC",
				"whisper": "@KabukiCoC Hi, I would like to buy your The Bringer of Rain Nightmare Bascinet listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 11, top 5)",
				"weightValue": 404,
				"valueText": "404 + defense value 0 + value shift 0",
				"evalValue": 404,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "e6624573a40c77eae2548a8a5e5dcf41b77bb0a8de0839ade0d9155c08f64ab4",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-03T08:33:12Z",
						"stash": {
							"name": "~price 10 chaos",
							"x": 10,
							"y": 4
						},
						"whisper": "@KabukiCoC Hi, I would like to buy your The Bringer of Rain Nightmare Bascinet listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 11, top 5)",
						"account": {
							"name": "Trollphrodite",
							"lastCharacterName": "KabukiCoC",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/TheBringerofRain.png?scale=1&w=2&h=2&v=f1f30003d5ee2d2fb09f7fa8668a8337",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "The Bringer of Rain",
						"typeLine": "Nightmare Bascinet",
						"identified": true,
						"ilvl": 80,
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"562",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"809",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"67",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"62",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"85",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"Socketed Gems are Supported by Level 18 Melee Physical Damage",
							"Socketed Gems are Supported by Level 18 Faster Attacks",
							"Socketed Gems are supported by Level 18 Blind",
							"6% Chance to Block Attack Damage",
							"Adds 20 to 30 Physical Damage to Attacks",
							"247% increased Armour and Evasion",
							"+202 to maximum Life",
							"20% chance to gain an Endurance Charge when you Block",
							"Can't use Chest armour",
							"Extra gore"
						],
						"flavourText": [
							"\"What lies beneath your feet?!\"\r",
							"\"Sacred ground, watered with tears of blood!\""
						],
						"frameType": 3,
						"extended": {
							"ev": 809,
							"ar": 562,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2451402625",
												"min": 200,
												"max": 300
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3032590688",
												"min": 20,
												"max": 20
											},
											{
												"hash": "explicit.stat_3032590688",
												"min": 30,
												"max": 30
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 200,
												"max": 220
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2530372417",
												"min": 6,
												"max": 6
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2223640518",
												"min": 18,
												"max": 18
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_928701213",
												"min": 18,
												"max": 18
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2985291457",
												"min": 18,
												"max": 18
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_417188801",
												"min": 20,
												"max": 20
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_4007482102",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3403461239",
												"min": 1,
												"max": 1
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_2985291457",
										[
											6
										]
									],
									[
										"explicit.stat_928701213",
										[
											5
										]
									],
									[
										"explicit.stat_2223640518",
										[
											4
										]
									],
									[
										"explicit.stat_2530372417",
										[
											3
										]
									],
									[
										"explicit.stat_3032590688",
										[
											1
										]
									],
									[
										"explicit.stat_2451402625",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2
										]
									],
									[
										"explicit.stat_417188801",
										[
											7
										]
									],
									[
										"explicit.stat_4007482102",
										[
											8
										]
									],
									[
										"explicit.stat_3403461239",
										[
											9
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClRoZSBCcmluZ2VyIG9mIFJhaW4NCk5pZ2h0bWFyZSBCYXNjaW5ldA0KLS0tLS0tLS0NCkFybW91cjogNTYyIChhdWdtZW50ZWQpDQpFdmFzaW9uIFJhdGluZzogODA5IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY3DQpTdHI6IDYyDQpEZXg6IDg1DQotLS0tLS0tLQ0KU29ja2V0czogRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA4MA0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KU29ja2V0ZWQgR2VtcyBhcmUgU3VwcG9ydGVkIGJ5IExldmVsIDE4IE1lbGVlIFBoeXNpY2FsIERhbWFnZQ0KU29ja2V0ZWQgR2VtcyBhcmUgU3VwcG9ydGVkIGJ5IExldmVsIDE4IEZhc3RlciBBdHRhY2tzDQpTb2NrZXRlZCBHZW1zIGFyZSBzdXBwb3J0ZWQgYnkgTGV2ZWwgMTggQmxpbmQNCjYlIENoYW5jZSB0byBCbG9jayBBdHRhY2sgRGFtYWdlDQpBZGRzIDIwIHRvIDMwIFBoeXNpY2FsIERhbWFnZSB0byBBdHRhY2tzDQoyNDclIGluY3JlYXNlZCBBcm1vdXIgYW5kIEV2YXNpb24NCisyMDIgdG8gbWF4aW11bSBMaWZlDQoyMCUgY2hhbmNlIHRvIGdhaW4gYW4gRW5kdXJhbmNlIENoYXJnZSB3aGVuIHlvdSBCbG9jaw0KQ2FuJ3QgdXNlIENoZXN0IGFybW91cg0KRXh0cmEgZ29yZQ0KLS0tLS0tLS0NCiJXaGF0IGxpZXMgYmVuZWF0aCB5b3VyIGZlZXQ/ISINCiJTYWNyZWQgZ3JvdW5kLCB3YXRlcmVkIHdpdGggdGVhcnMgb2YgYmxvb2QhIg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0K"
						},
						"pseudoMods": [
							"(pseudo) +202 total maximum Life",
							"Sum: 404"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "8e7bf07d2db0503b2b2dcacc550fc6a6343b4d6190325a20b421952911eec320",
				"name": "Ghoul Brow",
				"type": "Siege Helmet",
				"itemLevel": 81,
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
				"corrupted": true,
				"defenseProperties": [
					"armour 245"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+50 to Strength",
					"+8 to Armour",
					"+93 to maximum Life",
					"+37% to Fire Resistance",
					"+37% to Cold Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +74% total Elemental Resistance",
					"(pseudo) +118 total maximum Life",
					"Sum: 310"
				],
				"accountText": "bctoi > Mooncakezombies",
				"whisper": "@Mooncakezombies Hi, I would like to buy your Ghoul Brow Siege Helmet listed for 5 chaos in Metamorph (stash tab \"Sell2\"; position: left 10, top 10)",
				"note": "~price 5 chaos",
				"weightValue": 310,
				"valueText": "310 + defense value 0 + value shift 0",
				"evalValue": 310,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "8e7bf07d2db0503b2b2dcacc550fc6a6343b4d6190325a20b421952911eec320",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-15T18:19:44Z",
						"stash": {
							"name": "Sell2",
							"x": 9,
							"y": 9
						},
						"whisper": "@Mooncakezombies Hi, I would like to buy your Ghoul Brow Siege Helmet listed for 5 chaos in Metamorph (stash tab \"Sell2\"; position: left 10, top 10)",
						"account": {
							"name": "bctoi",
							"lastCharacterName": "Mooncakezombies",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStr7.png?scale=1&w=2&h=2&v=070db8eaafa69c5225d50554bf398ba0",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Ghoul Brow",
						"typeLine": "Siege Helmet",
						"identified": true,
						"ilvl": 81,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"245",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"59",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"101",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+50 to Strength",
							"+8 to Armour",
							"+93 to maximum Life",
							"+37% to Fire Resistance",
							"+37% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 245,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Titan",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 43,
												"max": 50
											}
										]
									},
									{
										"name": "Lacquered",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 3,
												"max": 10
											}
										]
									},
									{
										"name": "of the Volcano",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 36,
												"max": 41
											}
										]
									},
									{
										"name": "of the Polar Bear",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 36,
												"max": 41
											}
										]
									},
									{
										"name": "Fecund",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 90,
												"max": 99
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											0
										]
									],
									[
										"explicit.stat_3484657501",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											4
										]
									],
									[
										"explicit.stat_3372524247",
										[
											2
										]
									],
									[
										"explicit.stat_4220027924",
										[
											3
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpHaG91bCBCcm93DQpTaWVnZSBIZWxtZXQNCi0tLS0tLS0tDQpBcm1vdXI6IDI0NSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1OQ0KU3RyOiAxMDENCi0tLS0tLS0tDQpTb2NrZXRzOiBSLVIgUi1SIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgxDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNTAgdG8gU3RyZW5ndGgNCis4IHRvIEFybW91cg0KKzkzIHRvIG1heGltdW0gTGlmZQ0KKzM3JSB0byBGaXJlIFJlc2lzdGFuY2UNCiszNyUgdG8gQ29sZCBSZXNpc3RhbmNlDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDUgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +74% total Elemental Resistance",
							"(pseudo) +118 total maximum Life",
							"Sum: 310"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "3cc819f3f5f2347c78aaa1aa2dd0e4001d4f2003a24cfa0dd562ce248be5449a",
				"name": "Hypnotic Shelter",
				"type": "Lion Pelt",
				"itemLevel": 73,
				"sockets": [
					[
						"G",
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 540"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+323 to Accuracy Rating",
					"+35 to Evasion Rating",
					"30% increased Evasion Rating",
					"+119 to maximum Life",
					"+32% to Lightning Resistance",
					"23% chance to Avoid being Stunned",
					"13% increased Stun and Block Recovery"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +32% total Elemental Resistance",
					"(pseudo) +119 total maximum Life",
					"Sum: 270"
				],
				"accountText": "Kiyirra > Kyirra_Metamorph",
				"whisper": "@Kyirra_Metamorph Hi, I would like to buy your Hypnotic Shelter Lion Pelt listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 1, top 1)",
				"weightValue": 270,
				"valueText": "270 + defense value 0 + value shift 0",
				"evalValue": 270,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "3cc819f3f5f2347c78aaa1aa2dd0e4001d4f2003a24cfa0dd562ce248be5449a",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-25T13:29:15Z",
						"stash": {
							"name": "~b/o 5 chaos",
							"x": 0,
							"y": 0
						},
						"whisper": "@Kyirra_Metamorph Hi, I would like to buy your Hypnotic Shelter Lion Pelt listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 1, top 1)",
						"account": {
							"name": "Kiyirra",
							"lastCharacterName": "Kyirra_Metamorph",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDex10.png?scale=1&w=2&h=2&v=429392c896c4a48b46ed48d4e2e89e7f",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Hypnotic Shelter",
						"typeLine": "Lion Pelt",
						"identified": true,
						"ilvl": 73,
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"540",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"70",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"150",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+323 to Accuracy Rating",
							"+35 to Evasion Rating",
							"30% increased Evasion Rating",
							"+119 to maximum Life",
							"+32% to Lightning Resistance",
							"23% chance to Avoid being Stunned",
							"13% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ev": 540,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Essence",
										"tier": "S",
										"magnitudes": [
											{
												"hash": "explicit.stat_4262448838",
												"min": 23,
												"max": 26
											}
										]
									},
									{
										"name": "Fecund",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 90,
												"max": 99
											}
										]
									},
									{
										"name": "of the Marksman",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_803737631",
												"min": 251,
												"max": 350
											}
										]
									},
									{
										"name": "Fawn's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 21,
												"max": 42
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 24,
												"max": 28
											}
										]
									},
									{
										"name": "Wasp's",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 27,
												"max": 32
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 12,
												"max": 13
											}
										]
									},
									{
										"name": "of the Tempest",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 30,
												"max": 35
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_803737631",
										[
											2
										]
									],
									[
										"explicit.stat_53045048",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											4
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1,
											3
										]
									],
									[
										"explicit.stat_1671376347",
										[
											5
										]
									],
									[
										"explicit.stat_4262448838",
										[
											0
										]
									],
									[
										"explicit.stat_2511217560",
										[
											4
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpIeXBub3RpYyBTaGVsdGVyDQpMaW9uIFBlbHQNCi0tLS0tLS0tDQpFdmFzaW9uIFJhdGluZzogNTQwIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDcwDQpEZXg6IDE1MA0KLS0tLS0tLS0NClNvY2tldHM6IEctRy1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDczDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMzIzIHRvIEFjY3VyYWN5IFJhdGluZw0KKzM1IHRvIEV2YXNpb24gUmF0aW5nDQozMCUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorMTE5IHRvIG1heGltdW0gTGlmZQ0KKzMyJSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KMjMlIGNoYW5jZSB0byBBdm9pZCBiZWluZyBTdHVubmVkDQoxMyUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQotLS0tLS0tLQ0KQ29ycnVwdGVkDQo="
						},
						"pseudoMods": [
							"(pseudo) +32% total Elemental Resistance",
							"(pseudo) +119 total maximum Life",
							"Sum: 270"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "961f47946db09bb057673da9fa9a391882e79401555107c9046612c6c80fdab2",
				"name": "Rune Visor",
				"type": "Great Helmet",
				"itemLevel": 85,
				"sockets": [
					[
						"R"
					],
					[
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 80",
					"energyShield 17"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+55 to Strength",
					"31% increased Armour and Energy Shield",
					"+80 to maximum Life",
					"+35% to Cold Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +35% total Elemental Resistance",
					"(pseudo) +107.5 total maximum Life",
					"Sum: 250"
				],
				"accountText": "AnalOrGTFO > RazDuelist",
				"whisper": "@RazDuelist Hi, I would like to buy your Rune Visor Great Helmet listed for 10 chaos in Metamorph (stash tab \"8\"; position: left 11, top 9)",
				"note": "~b/o 10 chaos",
				"weightValue": 250,
				"valueText": "250 + defense value 0 + value shift 0",
				"evalValue": 250,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "961f47946db09bb057673da9fa9a391882e79401555107c9046612c6c80fdab2",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-31T20:38:44Z",
						"stash": {
							"name": "8",
							"x": 10,
							"y": 8
						},
						"whisper": "@RazDuelist Hi, I would like to buy your Rune Visor Great Helmet listed for 10 chaos in Metamorph (stash tab \"8\"; position: left 11, top 9)",
						"account": {
							"name": "AnalOrGTFO",
							"lastCharacterName": "RazDuelist",
							"online": {
								"league": "Metamorph"
							},
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStrInt3.png?scale=1&w=2&h=2&v=60ce62c5debeab64be98787298fa8e40",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Rune Visor",
						"typeLine": "Great Helmet",
						"identified": true,
						"ilvl": 85,
						"note": "~b/o 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"80",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"17",
										1
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"65",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"27",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"27",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+55 to Strength",
							"31% increased Armour and Energy Shield",
							"+80 to maximum Life",
							"+35% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 80,
							"es": 17,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Gods",
										"tier": "S1",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 51,
												"max": 55
											}
										]
									},
									{
										"name": "Ingrained",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_3321629045",
												"min": 27,
												"max": 42
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "of the Walrus",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 30,
												"max": 35
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											0
										]
									],
									[
										"explicit.stat_3321629045",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2
										]
									],
									[
										"explicit.stat_4220027924",
										[
											3
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpSdW5lIFZpc29yDQpHcmVhdCBIZWxtZXQNCi0tLS0tLS0tDQpBcm1vdXI6IDgwIChhdWdtZW50ZWQpDQpFbmVyZ3kgU2hpZWxkOiAxNyAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2NQ0KU3RyOiAyNw0KSW50OiAyNw0KLS0tLS0tLS0NClNvY2tldHM6IFIgUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA4NQ0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzU1IHRvIFN0cmVuZ3RoDQozMSUgaW5jcmVhc2VkIEFybW91ciBhbmQgRW5lcmd5IFNoaWVsZA0KKzgwIHRvIG1heGltdW0gTGlmZQ0KKzM1JSB0byBDb2xkIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+Yi9vIDEwIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +35% total Elemental Resistance",
							"(pseudo) +107.5 total maximum Life",
							"Sum: 250"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "bc6c119e0a8dac93f96494db5cf505c35215404dbc48481f1302710c06fc647f",
				"name": "Dusk Keep",
				"type": "Solaris Circlet",
				"itemLevel": 70,
				"sockets": [
					[
						"B",
						"B",
						"R",
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"energyShield 57"
				],
				"enchantMods": [
					"40% increased Flame Surge Damage against Burning Enemies"
				],
				"implicitMods": [
					"+2 to Level of Socketed Duration Gems",
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+1 to Level of Socketed Minion Gems",
					"+94 to maximum Life",
					"+32 to maximum Mana",
					"+40% to Lightning Resistance"
				],
				"craftedMods": [
					"+11 to Strength and Intelligence"
				],
				"pseudoMods": [
					"(pseudo) +40% total Elemental Resistance",
					"(pseudo) +99.5 total maximum Life",
					"Sum: 239"
				],
				"accountText": "Darnimcool > skellyboi_mm",
				"whisper": "@skellyboi_mm Hi, I would like to buy your Dusk Keep Solaris Circlet listed for 10 chaos in Metamorph (stash tab \"4\"; position: left 1, top 1)",
				"note": "~price 10 chaos",
				"weightValue": 239,
				"valueText": "239 + defense value 0 + value shift 0",
				"evalValue": 239,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "bc6c119e0a8dac93f96494db5cf505c35215404dbc48481f1302710c06fc647f",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-13T10:35:39Z",
						"stash": {
							"name": "4",
							"x": 0,
							"y": 0
						},
						"whisper": "@skellyboi_mm Hi, I would like to buy your Dusk Keep Solaris Circlet listed for 10 chaos in Metamorph (stash tab \"4\"; position: left 1, top 1)",
						"account": {
							"name": "Darnimcool",
							"lastCharacterName": "skellyboi_mm",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetInt9.png?scale=1&w=2&h=2&v=3aeebe40b6db3abe7e4d92e3402db35e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Dusk Keep",
						"typeLine": "Solaris Circlet",
						"identified": true,
						"ilvl": 70,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"57",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"59",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"122",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+2 to Level of Socketed Duration Gems",
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+1 to Level of Socketed Minion Gems",
							"+94 to maximum Life",
							"+32 to maximum Mana",
							"+40% to Lightning Resistance"
						],
						"craftedMods": [
							"+11 to Strength and Intelligence"
						],
						"enchantMods": [
							"40% increased Flame Surge Damage against Burning Enemies"
						],
						"frameType": 2,
						"incubatedItem": {
							"name": "Stacked Decks",
							"level": 68,
							"progress": 1645,
							"total": 4477
						},
						"extended": {
							"es": 57,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_2115168758",
												"min": 2,
												"max": 2
											}
										]
									}
								],
								"enchant": [
									{
										"name": "Enchantment Flame Surge Vs Burning Enemies 1",
										"tier": "",
										"magnitudes": [
											{
												"hash": "enchant.stat_430890565",
												"min": 40,
												"max": 40
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Fecund",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 90,
												"max": 99
											}
										]
									},
									{
										"name": "of the Maelstrom",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 36,
												"max": 41
											}
										]
									},
									{
										"name": "Sapphire",
										"tier": "P9",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 30,
												"max": 34
											}
										]
									},
									{
										"name": "Reanimator's",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3604946673",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"crafted": [
									{
										"name": "of the Order",
										"tier": "R1",
										"magnitudes": [
											{
												"hash": "crafted.stat_1535626285",
												"min": 11,
												"max": 12
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_2115168758",
										[
											1
										]
									],
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"enchant": [
									[
										"enchant.stat_430890565",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3604946673",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0
										]
									],
									[
										"explicit.stat_1050105434",
										[
											2
										]
									],
									[
										"explicit.stat_1671376347",
										[
											1
										]
									]
								],
								"crafted": [
									[
										"crafted.stat_1535626285",
										[
											0
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpEdXNrIEtlZXANClNvbGFyaXMgQ2lyY2xldA0KLS0tLS0tLS0NCkVuZXJneSBTaGllbGQ6IDU3DQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU5DQpJbnQ6IDEyMg0KLS0tLS0tLS0NClNvY2tldHM6IEItQi1SLVIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzANCi0tLS0tLS0tDQo0MCUgaW5jcmVhc2VkIEZsYW1lIFN1cmdlIERhbWFnZSBhZ2FpbnN0IEJ1cm5pbmcgRW5lbWllcw0KLS0tLS0tLS0NCisyIHRvIExldmVsIG9mIFNvY2tldGVkIER1cmF0aW9uIEdlbXMgKGltcGxpY2l0KQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMSB0byBMZXZlbCBvZiBTb2NrZXRlZCBNaW5pb24gR2Vtcw0KKzk0IHRvIG1heGltdW0gTGlmZQ0KKzMyIHRvIG1heGltdW0gTWFuYQ0KKzQwJSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KKzExIHRvIFN0cmVuZ3RoIGFuZCBJbnRlbGxpZ2VuY2UgKGNyYWZ0ZWQpDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDEwIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +40% total Elemental Resistance",
							"(pseudo) +99.5 total maximum Life",
							"Sum: 239"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "2d19259d9771ec7a8dc19813c306e1f6e930a8dc24a43d47a5568646e1d272b3",
				"name": "Dread Veil",
				"type": "Mind Cage",
				"itemLevel": 73,
				"sockets": [
					[
						"G",
						"B",
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"energyShield 125"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"81% increased Energy Shield",
					"+92 to maximum Life",
					"+51 to maximum Mana",
					"+45% to Lightning Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +45% total Elemental Resistance",
					"(pseudo) +92 total maximum Life",
					"Sum: 229"
				],
				"accountText": "EternallyBad > jfjufjf",
				"whisper": "@jfjufjf Hi, I would like to buy your Dread Veil Mind Cage listed for 5 chaos in Metamorph (stash tab \"6\"; position: left 3, top 1)",
				"note": "~price 5 chaos",
				"weightValue": 229,
				"valueText": "229 + defense value 0 + value shift 0",
				"evalValue": 229,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "2d19259d9771ec7a8dc19813c306e1f6e930a8dc24a43d47a5568646e1d272b3",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-19T01:13:23Z",
						"stash": {
							"name": "6",
							"x": 2,
							"y": 0
						},
						"whisper": "@jfjufjf Hi, I would like to buy your Dread Veil Mind Cage listed for 5 chaos in Metamorph (stash tab \"6\"; position: left 3, top 1)",
						"account": {
							"name": "EternallyBad",
							"lastCharacterName": "jfjufjf",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetInt10.png?scale=1&w=2&h=2&v=95b3b9abd4831891cb01ceead65b055a",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Dread Veil",
						"typeLine": "Mind Cage",
						"identified": true,
						"ilvl": 73,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"125",
										1
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"65",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"81% increased Energy Shield",
							"+92 to maximum Life",
							"+51 to maximum Mana",
							"+45% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"es": 125,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Lightning",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 42,
												"max": 45
											}
										]
									},
									{
										"name": "Gentian",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 50,
												"max": 54
											}
										]
									},
									{
										"name": "Indomitable",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_4015621042",
												"min": 80,
												"max": 91
											}
										]
									},
									{
										"name": "Fecund",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 90,
												"max": 99
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_4015621042",
										[
											2
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3
										]
									],
									[
										"explicit.stat_1050105434",
										[
											1
										]
									],
									[
										"explicit.stat_1671376347",
										[
											0
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpEcmVhZCBWZWlsDQpNaW5kIENhZ2UNCi0tLS0tLS0tDQpFbmVyZ3kgU2hpZWxkOiAxMjUgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjUNCkludDogMTM4DQotLS0tLS0tLQ0KU29ja2V0czogRy1CLUIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzMNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCjgxJSBpbmNyZWFzZWQgRW5lcmd5IFNoaWVsZA0KKzkyIHRvIG1heGltdW0gTGlmZQ0KKzUxIHRvIG1heGltdW0gTWFuYQ0KKzQ1JSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA1IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +45% total Elemental Resistance",
							"(pseudo) +92 total maximum Life",
							"Sum: 229"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "3ea0a6aa81dcd15f4647db5c05129190f63e3361cc2c0e19e2e1fe4341bfda4d",
				"name": "Blight Halo",
				"type": "Lion Pelt",
				"itemLevel": 70,
				"sockets": [
					[
						"G",
						"G"
					],
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 380"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+28 to Intelligence",
					"+95 to maximum Life",
					"+33% to Fire Resistance",
					"12% increased Stun and Block Recovery"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +33% total Elemental Resistance",
					"(pseudo) +95 total maximum Life",
					"Sum: 223"
				],
				"accountText": "noukheim > Ghumauthaya",
				"whisper": "@Ghumauthaya Hi, I would like to buy your Blight Halo Lion Pelt listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 8, top 1)",
				"weightValue": 223,
				"valueText": "223 + defense value 0 + value shift 0",
				"evalValue": 223,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "3ea0a6aa81dcd15f4647db5c05129190f63e3361cc2c0e19e2e1fe4341bfda4d",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-21T08:59:53Z",
						"stash": {
							"name": "~price 10 chaos",
							"x": 7,
							"y": 0
						},
						"whisper": "@Ghumauthaya Hi, I would like to buy your Blight Halo Lion Pelt listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 8, top 1)",
						"account": {
							"name": "noukheim",
							"lastCharacterName": "Ghumauthaya",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDex10.png?scale=1&w=2&h=2&v=429392c896c4a48b46ed48d4e2e89e7f",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Blight Halo",
						"typeLine": "Lion Pelt",
						"identified": true,
						"ilvl": 70,
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"380",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"70",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"150",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+28 to Intelligence",
							"+95 to maximum Life",
							"+33% to Fire Resistance",
							"12% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ev": 380,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Philosopher",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_328541901",
												"min": 28,
												"max": 32
											}
										]
									},
									{
										"name": "of Thick Skin",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_2511217560",
												"min": 11,
												"max": 13
											}
										]
									},
									{
										"name": "of the Furnace",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 30,
												"max": 35
											}
										]
									},
									{
										"name": "Fecund",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 90,
												"max": 99
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_328541901",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3
										]
									],
									[
										"explicit.stat_3372524247",
										[
											2
										]
									],
									[
										"explicit.stat_2511217560",
										[
											1
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpCbGlnaHQgSGFsbw0KTGlvbiBQZWx0DQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDM4MA0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA3MA0KRGV4OiAxNTANCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUcgRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3MA0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzI4IHRvIEludGVsbGlnZW5jZQ0KKzk1IHRvIG1heGltdW0gTGlmZQ0KKzMzJSB0byBGaXJlIFJlc2lzdGFuY2UNCjEyJSBpbmNyZWFzZWQgU3R1biBhbmQgQmxvY2sgUmVjb3ZlcnkNCi0tLS0tLS0tDQpDb3JydXB0ZWQNCg=="
						},
						"pseudoMods": [
							"(pseudo) +33% total Elemental Resistance",
							"(pseudo) +95 total maximum Life",
							"Sum: 223"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "2b3a4e0a7cc83027977b04bad9773eb8768a236b4e0e8bc0e69ea8f5d74cf161",
				"name": "Behemoth Crown",
				"type": "Ursine Pelt",
				"itemLevel": 75,
				"sockets": [
					[
						"G",
						"G"
					],
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 378"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"37% increased Evasion Rating",
					"+90 to maximum Life",
					"9% increased Rarity of Items found",
					"+39% to Lightning Resistance",
					"14% increased Stun and Block Recovery"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +39% total Elemental Resistance",
					"(pseudo) +90 total maximum Life",
					"Sum: 219"
				],
				"accountText": "PatortheWookiee > Hexerxom",
				"whisper": "@Hexerxom Hi, I would like to buy your Behemoth Crown Ursine Pelt listed for 10 chaos in Metamorph (stash tab \"~b/o 10 chaos\"; position: left 8, top 7)",
				"weightValue": 219,
				"valueText": "219 + defense value 0 + value shift 0",
				"evalValue": 219,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "2b3a4e0a7cc83027977b04bad9773eb8768a236b4e0e8bc0e69ea8f5d74cf161",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-12T07:06:58Z",
						"stash": {
							"name": "~b/o 10 chaos",
							"x": 7,
							"y": 6
						},
						"whisper": "@Hexerxom Hi, I would like to buy your Behemoth Crown Ursine Pelt listed for 10 chaos in Metamorph (stash tab \"~b/o 10 chaos\"; position: left 8, top 7)",
						"account": {
							"name": "PatortheWookiee",
							"lastCharacterName": "Hexerxom",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDex7.png?scale=1&w=2&h=2&v=8d01ba9ab32a8d671bcc66c25c0e90ec",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Behemoth Crown",
						"typeLine": "Ursine Pelt",
						"identified": true,
						"ilvl": 75,
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"378",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"55",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"114",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"37% increased Evasion Rating",
							"+90 to maximum Life",
							"9% increased Rarity of Items found",
							"+39% to Lightning Resistance",
							"14% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ev": 378,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Dragonfly's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 33,
												"max": 38
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 14,
												"max": 15
											}
										]
									},
									{
										"name": "Fecund",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 90,
												"max": 99
											}
										]
									},
									{
										"name": "Magpie's",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 8,
												"max": 12
											}
										]
									},
									{
										"name": "of the Maelstrom",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 36,
												"max": 41
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_124859000",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_3917489142",
										[
											2
										]
									],
									[
										"explicit.stat_1671376347",
										[
											3
										]
									],
									[
										"explicit.stat_2511217560",
										[
											0
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpCZWhlbW90aCBDcm93bg0KVXJzaW5lIFBlbHQNCi0tLS0tLS0tDQpFdmFzaW9uIFJhdGluZzogMzc4IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU1DQpEZXg6IDExNA0KLS0tLS0tLS0NClNvY2tldHM6IEctRyBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc1DQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQozNyUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorOTAgdG8gbWF4aW11bSBMaWZlDQo5JSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIGZvdW5kDQorMzklIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQoxNCUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQotLS0tLS0tLQ0KQ29ycnVwdGVkDQo="
						},
						"pseudoMods": [
							"(pseudo) +39% total Elemental Resistance",
							"(pseudo) +90 total maximum Life",
							"Sum: 219"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "5c34d85042ea44f972f0f5e66571c4e57476cc0da08da9718b5721410bf5fe91",
				"name": "Mind Crest",
				"type": "Mind Cage",
				"itemLevel": 79,
				"sockets": [
					[
						"B",
						"B"
					],
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"energyShield 69"
				],
				"enchantMods": [
					"24% increased Ice Shot Area of Effect"
				],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+19 to Intelligence",
					"+158 to Accuracy Rating",
					"+84 to maximum Life",
					"+24 to maximum Mana",
					"+33% to Fire Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +33% total Elemental Resistance",
					"(pseudo) +84 total maximum Life",
					"Sum: 201"
				],
				"accountText": "Drunge > FillinLucky",
				"whisper": "@FillinLucky Hi, I would like to buy your Mind Crest Mind Cage listed for 5 chaos in Metamorph (stash tab \"01\"; position: left 1, top 9)",
				"note": "~price 5 chaos",
				"weightValue": 201,
				"valueText": "201 + defense value 0 + value shift 0",
				"evalValue": 201,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "5c34d85042ea44f972f0f5e66571c4e57476cc0da08da9718b5721410bf5fe91",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-02T19:44:54Z",
						"stash": {
							"name": "01",
							"x": 0,
							"y": 8
						},
						"whisper": "@FillinLucky Hi, I would like to buy your Mind Crest Mind Cage listed for 5 chaos in Metamorph (stash tab \"01\"; position: left 1, top 9)",
						"account": {
							"name": "Drunge",
							"lastCharacterName": "FillinLucky",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetInt10.png?scale=1&w=2&h=2&v=95b3b9abd4831891cb01ceead65b055a",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Mind Crest",
						"typeLine": "Mind Cage",
						"identified": true,
						"ilvl": 79,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"69",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"65",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+19 to Intelligence",
							"+158 to Accuracy Rating",
							"+84 to maximum Life",
							"+24 to maximum Mana",
							"+33% to Fire Resistance"
						],
						"enchantMods": [
							"24% increased Ice Shot Area of Effect"
						],
						"frameType": 2,
						"extended": {
							"es": 69,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"enchant": [
									{
										"name": "Enchantment Ice Shot Area Of Effect 2",
										"tier": "",
										"magnitudes": [
											{
												"hash": "enchant.stat_1962401751",
												"min": 24,
												"max": 24
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Furnace",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 30,
												"max": 35
											}
										]
									},
									{
										"name": "of Precision",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_803737631",
												"min": 100,
												"max": 165
											}
										]
									},
									{
										"name": "of the Prodigy",
										"tier": "S8",
										"magnitudes": [
											{
												"hash": "explicit.stat_328541901",
												"min": 18,
												"max": 22
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Cobalt",
										"tier": "P11",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 20,
												"max": 24
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"enchant": [
									[
										"enchant.stat_1962401751",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_328541901",
										[
											2
										]
									],
									[
										"explicit.stat_803737631",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3
										]
									],
									[
										"explicit.stat_1050105434",
										[
											4
										]
									],
									[
										"explicit.stat_3372524247",
										[
											0
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpNaW5kIENyZXN0DQpNaW5kIENhZ2UNCi0tLS0tLS0tDQpFbmVyZ3kgU2hpZWxkOiA2OQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2NQ0KSW50OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBCLUIgQiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3OQ0KLS0tLS0tLS0NCjI0JSBpbmNyZWFzZWQgSWNlIFNob3QgQXJlYSBvZiBFZmZlY3QNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCisxOSB0byBJbnRlbGxpZ2VuY2UNCisxNTggdG8gQWNjdXJhY3kgUmF0aW5nDQorODQgdG8gbWF4aW11bSBMaWZlDQorMjQgdG8gbWF4aW11bSBNYW5hDQorMzMlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA1IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +33% total Elemental Resistance",
							"(pseudo) +84 total maximum Life",
							"Sum: 201"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "1a23095fbedf0ec62ef45f2786b2f071830767ea8596c3df8b31a7897cfdd45f",
				"name": "Vengeance Crown",
				"type": "Eternal Burgonet",
				"itemLevel": 85,
				"sockets": [
					[
						"G",
						"R"
					],
					[
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 474"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+101 to Armour",
					"+87 to maximum Life",
					"+27% to Fire Resistance",
					"13% increased Stun and Block Recovery"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +27% total Elemental Resistance",
					"(pseudo) +87 total maximum Life",
					"Sum: 201"
				],
				"accountText": "semma_car19 > Semma_Power_ranger",
				"whisper": "@Semma_Power_ranger Hi, I would like to buy your Vengeance Crown Eternal Burgonet listed for 10 chaos in Metamorph (stash tab \"~b/o 10 chaos\"; position: left 11, top 2)",
				"weightValue": 201,
				"valueText": "201 + defense value 0 + value shift 0",
				"evalValue": 201,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "1a23095fbedf0ec62ef45f2786b2f071830767ea8596c3df8b31a7897cfdd45f",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-27T01:29:57Z",
						"stash": {
							"name": "~b/o 10 chaos",
							"x": 10,
							"y": 1
						},
						"whisper": "@Semma_Power_ranger Hi, I would like to buy your Vengeance Crown Eternal Burgonet listed for 10 chaos in Metamorph (stash tab \"~b/o 10 chaos\"; position: left 11, top 2)",
						"account": {
							"name": "semma_car19",
							"lastCharacterName": "Semma_Power_ranger",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStr11.png?scale=1&w=2&h=2&v=342bd7655177cacda3928e191d7eb83c",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Vengeance Crown",
						"typeLine": "Eternal Burgonet",
						"identified": true,
						"ilvl": 85,
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"474",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"69",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+101 to Armour",
							"+87 to maximum Life",
							"+27% to Fire Resistance",
							"13% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 474,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "of Thick Skin",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_2511217560",
												"min": 11,
												"max": 13
											}
										]
									},
									{
										"name": "Fortified",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 61,
												"max": 138
											}
										]
									},
									{
										"name": "of the Kiln",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 24,
												"max": 29
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3484657501",
										[
											2
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0
										]
									],
									[
										"explicit.stat_3372524247",
										[
											3
										]
									],
									[
										"explicit.stat_2511217560",
										[
											1
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpWZW5nZWFuY2UgQ3Jvd24NCkV0ZXJuYWwgQnVyZ29uZXQNCi0tLS0tLS0tDQpBcm1vdXI6IDQ3NCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2OQ0KU3RyOiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLVIgUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA4NQ0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzEwMSB0byBBcm1vdXINCis4NyB0byBtYXhpbXVtIExpZmUNCisyNyUgdG8gRmlyZSBSZXNpc3RhbmNlDQoxMyUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQotLS0tLS0tLQ0KQ29ycnVwdGVkDQo="
						},
						"pseudoMods": [
							"(pseudo) +27% total Elemental Resistance",
							"(pseudo) +87 total maximum Life",
							"Sum: 201"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "7ae6e935f47d70c398ce1989c586bc768fd5d75144a9fb48f48e3befee2f5eb2",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 75,
				"sockets": [
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 727"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+67 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"110% increased Evasion Rating",
					"+99 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +99 total maximum Life",
					"Sum: 198"
				],
				"accountText": "StiaL13 > StiaLRanger",
				"whisper": "@StiaLRanger Здравствуйте, хочу купить у вас Голова Старконжи Шелковый капюшон за 1 chaos в лиге Метаморф (секция \"~price 1 chaos\"; позиция: 11 столбец, 3 ряд)",
				"weightValue": 198,
				"valueText": "198 + defense value 0 + value shift 0",
				"evalValue": 198,
				"priceText": "1 chaos",
				"evalPrice": 1,
				"debug": {
					"id": "7ae6e935f47d70c398ce1989c586bc768fd5d75144a9fb48f48e3befee2f5eb2",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-12T13:34:13Z",
						"stash": {
							"name": "~price 1 chaos",
							"x": 10,
							"y": 2
						},
						"whisper": "@StiaLRanger Здравствуйте, хочу купить у вас Голова Старконжи Шелковый капюшон за 1 chaos в лиге Метаморф (секция \"~price 1 chaos\"; позиция: 11 столбец, 3 ряд)",
						"account": {
							"name": "StiaL13",
							"lastCharacterName": "StiaLRanger",
							"online": null,
							"language": "ru_RU"
						},
						"price": {
							"type": "~price",
							"amount": 1,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 75,
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"727",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+67 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"110% increased Evasion Rating",
							"+99 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 727,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDcyNyAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc1DQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNjcgdG8gRGV4dGVyaXR5DQo1MCUgcmVkdWNlZCBEYW1hZ2Ugd2hlbiBvbiBMb3cgTGlmZQ0KMTAlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjI1JSBpbmNyZWFzZWQgR2xvYmFsIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjExMCUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorOTkgdG8gbWF4aW11bSBMaWZlDQoxNTAlIGluY3JlYXNlZCBHbG9iYWwgRXZhc2lvbiBSYXRpbmcgd2hlbiBvbiBMb3cgTGlmZQ0KLS0tLS0tLS0NClRoZXJlIHdhcyBubyBoZXJvIG1hZGUgb3V0IG9mIFN0YXJrb25qYSdzIGRlYXRoLA0KYnV0IG1lcmVseSBhIGxvbmcgc2xlZXAgbWFkZSBldGVybmFsLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0K"
						},
						"pseudoMods": [
							"(pseudo) +99 total maximum Life",
							"Sum: 198"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "52c7e84f224b00322e8d53a39b537fb741ad75a81ce8b3a8f004a7999f6e282d",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 84,
				"sockets": [
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 709"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+56 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"105% increased Evasion Rating",
					"+99 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +99 total maximum Life",
					"Sum: 198"
				],
				"accountText": "Dradors > Gnzzzmine",
				"whisper": "@Gnzzzmine Hi, I would like to buy your Starkonja's Head Silken Hood listed for 4 chaos in Metamorph (stash tab \"~price 4 chaos\"; position: left 7, top 11)",
				"weightValue": 198,
				"valueText": "198 + defense value 0 + value shift 0",
				"evalValue": 198,
				"priceText": "4 chaos",
				"evalPrice": 4,
				"debug": {
					"id": "52c7e84f224b00322e8d53a39b537fb741ad75a81ce8b3a8f004a7999f6e282d",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-03T20:22:20Z",
						"stash": {
							"name": "~price 4 chaos",
							"x": 6,
							"y": 10
						},
						"whisper": "@Gnzzzmine Hi, I would like to buy your Starkonja's Head Silken Hood listed for 4 chaos in Metamorph (stash tab \"~price 4 chaos\"; position: left 7, top 11)",
						"account": {
							"name": "Dradors",
							"lastCharacterName": "Gnzzzmine",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 4,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 84,
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"709",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+56 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"105% increased Evasion Rating",
							"+99 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 709,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDcwOSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDg0DQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNTYgdG8gRGV4dGVyaXR5DQo1MCUgcmVkdWNlZCBEYW1hZ2Ugd2hlbiBvbiBMb3cgTGlmZQ0KMTAlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjI1JSBpbmNyZWFzZWQgR2xvYmFsIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjEwNSUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorOTkgdG8gbWF4aW11bSBMaWZlDQoxNTAlIGluY3JlYXNlZCBHbG9iYWwgRXZhc2lvbiBSYXRpbmcgd2hlbiBvbiBMb3cgTGlmZQ0KLS0tLS0tLS0NClRoZXJlIHdhcyBubyBoZXJvIG1hZGUgb3V0IG9mIFN0YXJrb25qYSdzIGRlYXRoLA0KYnV0IG1lcmVseSBhIGxvbmcgc2xlZXAgbWFkZSBldGVybmFsLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0K"
						},
						"pseudoMods": [
							"(pseudo) +99 total maximum Life",
							"Sum: 198"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "e23062c81e8dccdc914474e8cd2ef06244be23a16cbb8276b05f1d60d6fb90ec",
				"name": "Brimstone Keep",
				"type": "Magistrate Crown",
				"itemLevel": 74,
				"sockets": [
					[
						"R",
						"B",
						"R",
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 224",
					"energyShield 43"
				],
				"enchantMods": [
					"Smite has 30% increased Aura Effect"
				],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"Socketed Gems are Supported by Level 16 Concentrated Effect",
					"20% increased Armour and Energy Shield",
					"+70 to maximum Life",
					"+21% to Cold Resistance",
					"9% increased Stun and Block Recovery",
					"17% increased Area Damage"
				],
				"craftedMods": [
					"+17% to Cold and Lightning Resistances"
				],
				"pseudoMods": [
					"(pseudo) +55% total Elemental Resistance",
					"(pseudo) +70 total maximum Life",
					"Sum: 195"
				],
				"accountText": "homespoe > Mettamoe",
				"whisper": "@Mettamoe Hi, I would like to buy your Brimstone Keep Magistrate Crown listed for 5 chaos in Metamorph (stash tab \"$ell\"; position: left 9, top 6)",
				"note": "~price 5 chaos",
				"weightValue": 195,
				"valueText": "195 + defense value 0 + value shift 0",
				"evalValue": 195,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "e23062c81e8dccdc914474e8cd2ef06244be23a16cbb8276b05f1d60d6fb90ec",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-26T19:48:53Z",
						"stash": {
							"name": "$ell",
							"x": 8,
							"y": 5
						},
						"whisper": "@Mettamoe Hi, I would like to buy your Brimstone Keep Magistrate Crown listed for 5 chaos in Metamorph (stash tab \"$ell\"; position: left 9, top 6)",
						"account": {
							"name": "homespoe",
							"lastCharacterName": "Mettamoe",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStrInt8.png?scale=1&w=2&h=2&elder=1&v=59807b6bf308473f389a97b37513c89e",
						"league": "Metamorph",
						"influences": {
							"elder": true
						},
						"elder": true,
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Brimstone Keep",
						"typeLine": "Magistrate Crown",
						"identified": true,
						"ilvl": 74,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+20%",
										1
									]
								],
								"displayMode": 0,
								"type": 6
							},
							{
								"name": "Armour",
								"values": [
									[
										"224",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"43",
										1
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"Socketed Gems are Supported by Level 16 Concentrated Effect",
							"20% increased Armour and Energy Shield",
							"+70 to maximum Life",
							"+21% to Cold Resistance",
							"9% increased Stun and Block Recovery",
							"17% increased Area Damage"
						],
						"craftedMods": [
							"+17% to Cold and Lightning Resistances"
						],
						"enchantMods": [
							"Smite has 30% increased Aura Effect"
						],
						"frameType": 2,
						"extended": {
							"ar": 224,
							"es": 43,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"enchant": [
									{
										"name": "Enchantment Smite Aura Effect 2",
										"tier": "",
										"magnitudes": [
											{
												"hash": "enchant.stat_2294732229",
												"min": 30,
												"max": 30
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Eldritch",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_2388360415",
												"min": 16,
												"max": 16
											},
											{
												"hash": "explicit.stat_4251717817",
												"min": 15,
												"max": 18
											}
										]
									},
									{
										"name": "Virile",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "Gremlin's",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_3321629045",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 8,
												"max": 9
											}
										]
									},
									{
										"name": "of the Penguin",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 18,
												"max": 23
											}
										]
									}
								],
								"crafted": [
									{
										"name": "of Craft",
										"tier": "R3",
										"magnitudes": [
											{
												"hash": "crafted.stat_4277795662",
												"min": 17,
												"max": 20
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"enchant": [
									[
										"enchant.stat_2294732229",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_2388360415",
										[
											0
										]
									],
									[
										"explicit.stat_3321629045",
										[
											2
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_4220027924",
										[
											3
										]
									],
									[
										"explicit.stat_2511217560",
										[
											2
										]
									],
									[
										"explicit.stat_4251717817",
										[
											0
										]
									]
								],
								"crafted": [
									[
										"crafted.stat_4277795662",
										[
											0
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpCcmltc3RvbmUgS2VlcA0KTWFnaXN0cmF0ZSBDcm93bg0KLS0tLS0tLS0NClF1YWxpdHk6ICsyMCUgKGF1Z21lbnRlZCkNCkFybW91cjogMjI0IChhdWdtZW50ZWQpDQpFbmVyZ3kgU2hpZWxkOiA0MyAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KU3RyOiA2NA0KSW50OiA2NA0KLS0tLS0tLS0NClNvY2tldHM6IFItQi1SLVIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzQNCi0tLS0tLS0tDQpTbWl0ZSBoYXMgMzAlIGluY3JlYXNlZCBBdXJhIEVmZmVjdA0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KU29ja2V0ZWQgR2VtcyBhcmUgU3VwcG9ydGVkIGJ5IExldmVsIDE2IENvbmNlbnRyYXRlZCBFZmZlY3QNCjIwJSBpbmNyZWFzZWQgQXJtb3VyIGFuZCBFbmVyZ3kgU2hpZWxkDQorNzAgdG8gbWF4aW11bSBMaWZlDQorMjElIHRvIENvbGQgUmVzaXN0YW5jZQ0KOSUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQoxNyUgaW5jcmVhc2VkIEFyZWEgRGFtYWdlDQorMTclIHRvIENvbGQgYW5kIExpZ2h0bmluZyBSZXNpc3RhbmNlcyAoY3JhZnRlZCkNCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpFbGRlciBJdGVtDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDUgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +55% total Elemental Resistance",
							"(pseudo) +70 total maximum Life",
							"Sum: 195"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "a857ee5adec3571ea807f34de567b3f252a45e0a2612611a2e6f29987aae0732",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 73,
				"sockets": [
					[
						"G",
						"G"
					],
					[
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 727"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+62 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"110% increased Evasion Rating",
					"+96 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +96 total maximum Life",
					"Sum: 192"
				],
				"accountText": "Avrai > Thorbrain",
				"whisper": "@Thorbrain Hi, I would like to buy your Starkonja's Head Silken Hood listed for 10 chaos in Metamorph (stash tab \"$\"; position: left 11, top 4)",
				"note": "~price 10 chaos",
				"weightValue": 192,
				"valueText": "192 + defense value 0 + value shift 0",
				"evalValue": 192,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "a857ee5adec3571ea807f34de567b3f252a45e0a2612611a2e6f29987aae0732",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-29T18:59:25Z",
						"stash": {
							"name": "$",
							"x": 10,
							"y": 3
						},
						"whisper": "@Thorbrain Hi, I would like to buy your Starkonja's Head Silken Hood listed for 10 chaos in Metamorph (stash tab \"$\"; position: left 11, top 4)",
						"account": {
							"name": "Avrai",
							"lastCharacterName": "Thorbrain",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 73,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"727",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+62 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"110% increased Evasion Rating",
							"+96 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"incubatedItem": {
							"name": "Rare Abyss Item",
							"level": 64,
							"progress": 2332,
							"total": 8000
						},
						"extended": {
							"ev": 727,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDcyNyAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUcgRy1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDczDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNjIgdG8gRGV4dGVyaXR5DQo1MCUgcmVkdWNlZCBEYW1hZ2Ugd2hlbiBvbiBMb3cgTGlmZQ0KMTAlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjI1JSBpbmNyZWFzZWQgR2xvYmFsIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjExMCUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorOTYgdG8gbWF4aW11bSBMaWZlDQoxNTAlIGluY3JlYXNlZCBHbG9iYWwgRXZhc2lvbiBSYXRpbmcgd2hlbiBvbiBMb3cgTGlmZQ0KLS0tLS0tLS0NClRoZXJlIHdhcyBubyBoZXJvIG1hZGUgb3V0IG9mIFN0YXJrb25qYSdzIGRlYXRoLA0KYnV0IG1lcmVseSBhIGxvbmcgc2xlZXAgbWFkZSBldGVybmFsLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAxMCBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +96 total maximum Life",
							"Sum: 192"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "6bc5e4e09a43d918783369ff207400a913f80297576b37bcc6b093d74778e8e2",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 74,
				"sockets": [
					[
						"G",
						"G"
					],
					[
						"R",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 772"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+67 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"123% increased Evasion Rating",
					"+95 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +95 total maximum Life",
					"Sum: 190"
				],
				"accountText": "Xyzer00 > Chix_With_Dix",
				"whisper": "@Chix_With_Dix Hi, I would like to buy your Starkonja's Head Silken Hood listed for 2 chaos in Metamorph (stash tab \"~price 2 chaos\"; position: left 1, top 3)",
				"weightValue": 190,
				"valueText": "190 + defense value 0 + value shift 0",
				"evalValue": 190,
				"priceText": "2 chaos",
				"evalPrice": 2,
				"debug": {
					"id": "6bc5e4e09a43d918783369ff207400a913f80297576b37bcc6b093d74778e8e2",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-03T06:21:50Z",
						"stash": {
							"name": "~price 2 chaos",
							"x": 0,
							"y": 2
						},
						"whisper": "@Chix_With_Dix Hi, I would like to buy your Starkonja's Head Silken Hood listed for 2 chaos in Metamorph (stash tab \"~price 2 chaos\"; position: left 1, top 3)",
						"account": {
							"name": "Xyzer00",
							"lastCharacterName": "Chix_With_Dix",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 2,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 74,
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"772",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+67 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"123% increased Evasion Rating",
							"+95 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 772,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDc3MiAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUcgUi1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc0DQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNjcgdG8gRGV4dGVyaXR5DQo1MCUgcmVkdWNlZCBEYW1hZ2Ugd2hlbiBvbiBMb3cgTGlmZQ0KMTAlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjI1JSBpbmNyZWFzZWQgR2xvYmFsIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjEyMyUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorOTUgdG8gbWF4aW11bSBMaWZlDQoxNTAlIGluY3JlYXNlZCBHbG9iYWwgRXZhc2lvbiBSYXRpbmcgd2hlbiBvbiBMb3cgTGlmZQ0KLS0tLS0tLS0NClRoZXJlIHdhcyBubyBoZXJvIG1hZGUgb3V0IG9mIFN0YXJrb25qYSdzIGRlYXRoLA0KYnV0IG1lcmVseSBhIGxvbmcgc2xlZXAgbWFkZSBldGVybmFsLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0K"
						},
						"pseudoMods": [
							"(pseudo) +95 total maximum Life",
							"Sum: 190"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "70b6d38e5987cfe674105ca7371553a2e08b58c5eb9c22fcda6ac5d073ce4907",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 63,
				"sockets": [
					[
						"G"
					],
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 761"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+65 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"120% increased Evasion Rating",
					"+95 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +95 total maximum Life",
					"Sum: 190"
				],
				"accountText": "SuperTacoman > Super_Tacoman",
				"whisper": "@Super_Tacoman Hi, I would like to buy your Starkonja's Head Silken Hood listed for 7 chaos in Metamorph (stash tab \"sell\"; position: left 4, top 11)",
				"note": "~price 7 chaos",
				"weightValue": 190,
				"valueText": "190 + defense value 0 + value shift 0",
				"evalValue": 190,
				"priceText": "7 chaos",
				"evalPrice": 7,
				"debug": {
					"id": "70b6d38e5987cfe674105ca7371553a2e08b58c5eb9c22fcda6ac5d073ce4907",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-02T15:11:55Z",
						"stash": {
							"name": "sell",
							"x": 3,
							"y": 10
						},
						"whisper": "@Super_Tacoman Hi, I would like to buy your Starkonja's Head Silken Hood listed for 7 chaos in Metamorph (stash tab \"sell\"; position: left 4, top 11)",
						"account": {
							"name": "SuperTacoman",
							"lastCharacterName": "Super_Tacoman",
							"online": {
								"league": "Metamorph"
							},
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 7,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 63,
						"note": "~price 7 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"761",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+65 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"120% increased Evasion Rating",
							"+95 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 761,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDc2MSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHIEcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNjMNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCis2NSB0byBEZXh0ZXJpdHkNCjUwJSByZWR1Y2VkIERhbWFnZSB3aGVuIG9uIExvdyBMaWZlDQoxMCUgaW5jcmVhc2VkIEF0dGFjayBTcGVlZA0KMjUlIGluY3JlYXNlZCBHbG9iYWwgQ3JpdGljYWwgU3RyaWtlIENoYW5jZQ0KMTIwJSBpbmNyZWFzZWQgRXZhc2lvbiBSYXRpbmcNCis5NSB0byBtYXhpbXVtIExpZmUNCjE1MCUgaW5jcmVhc2VkIEdsb2JhbCBFdmFzaW9uIFJhdGluZyB3aGVuIG9uIExvdyBMaWZlDQotLS0tLS0tLQ0KVGhlcmUgd2FzIG5vIGhlcm8gbWFkZSBvdXQgb2YgU3RhcmtvbmphJ3MgZGVhdGgsDQpidXQgbWVyZWx5IGEgbG9uZyBzbGVlcCBtYWRlIGV0ZXJuYWwuDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDcgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +95 total maximum Life",
							"Sum: 190"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "9d90780fe474f80a47e5c130f4e64987b3cc87f0bae028c4039a37cfccf23f9a",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 80,
				"sockets": [
					[
						"G",
						"G"
					],
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 751"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+65 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"110% increased Evasion Rating",
					"+95 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +95 total maximum Life",
					"Sum: 190"
				],
				"accountText": "PrimeStrats > dootdootdadoot",
				"whisper": "@dootdootdadoot Hi, I would like to buy your Starkonja's Head Silken Hood listed for 9 chaos in Metamorph (stash tab \"Stuff\"; position: left 7, top 6)",
				"note": "~price 9 chaos",
				"weightValue": 190,
				"valueText": "190 + defense value 0 + value shift 0",
				"evalValue": 190,
				"priceText": "9 chaos",
				"evalPrice": 9,
				"debug": {
					"id": "9d90780fe474f80a47e5c130f4e64987b3cc87f0bae028c4039a37cfccf23f9a",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-21T21:31:24Z",
						"stash": {
							"name": "Stuff",
							"x": 6,
							"y": 5
						},
						"whisper": "@dootdootdadoot Hi, I would like to buy your Starkonja's Head Silken Hood listed for 9 chaos in Metamorph (stash tab \"Stuff\"; position: left 7, top 6)",
						"account": {
							"name": "PrimeStrats",
							"lastCharacterName": "dootdootdadoot",
							"online": {
								"league": "Metamorph"
							},
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 9,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 80,
						"note": "~price 9 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+7%",
										1
									]
								],
								"displayMode": 0,
								"type": 6
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"751",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+65 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"110% increased Evasion Rating",
							"+95 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 751,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KUXVhbGl0eTogKzclIChhdWdtZW50ZWQpDQpFdmFzaW9uIFJhdGluZzogNzUxIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDYwDQpEZXg6IDEzOA0KLS0tLS0tLS0NClNvY2tldHM6IEctRyBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgwDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNjUgdG8gRGV4dGVyaXR5DQo1MCUgcmVkdWNlZCBEYW1hZ2Ugd2hlbiBvbiBMb3cgTGlmZQ0KMTAlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjI1JSBpbmNyZWFzZWQgR2xvYmFsIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjExMCUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorOTUgdG8gbWF4aW11bSBMaWZlDQoxNTAlIGluY3JlYXNlZCBHbG9iYWwgRXZhc2lvbiBSYXRpbmcgd2hlbiBvbiBMb3cgTGlmZQ0KLS0tLS0tLS0NClRoZXJlIHdhcyBubyBoZXJvIG1hZGUgb3V0IG9mIFN0YXJrb25qYSdzIGRlYXRoLA0KYnV0IG1lcmVseSBhIGxvbmcgc2xlZXAgbWFkZSBldGVybmFsLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA5IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +95 total maximum Life",
							"Sum: 190"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "40883f7a932375aaf1e88e6a92ce5e05df5885dc3cef83c812d97b38da924ed4",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 79,
				"sockets": [
					[
						"G",
						"G",
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 713"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+54 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"106% increased Evasion Rating",
					"+93 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +93 total maximum Life",
					"Sum: 186"
				],
				"accountText": "LexMac > Maleficent_Evill",
				"whisper": "@Maleficent_Evill Hi, I would like to buy your Starkonja's Head Silken Hood listed for 9 chaos in Metamorph (stash tab \"Торговля\"; position: left 9, top 11)",
				"note": "~price 9 chaos",
				"weightValue": 186,
				"valueText": "186 + defense value 0 + value shift 0",
				"evalValue": 186,
				"priceText": "9 chaos",
				"evalPrice": 9,
				"debug": {
					"id": "40883f7a932375aaf1e88e6a92ce5e05df5885dc3cef83c812d97b38da924ed4",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-03T12:17:25Z",
						"stash": {
							"name": "Торговля",
							"x": 8,
							"y": 10
						},
						"whisper": "@Maleficent_Evill Hi, I would like to buy your Starkonja's Head Silken Hood listed for 9 chaos in Metamorph (stash tab \"Торговля\"; position: left 9, top 11)",
						"account": {
							"name": "LexMac",
							"lastCharacterName": "Maleficent_Evill",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 9,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 79,
						"note": "~price 9 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"713",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+54 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"106% increased Evasion Rating",
							"+93 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 713,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDcxMyAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUctRy1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc5DQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNTQgdG8gRGV4dGVyaXR5DQo1MCUgcmVkdWNlZCBEYW1hZ2Ugd2hlbiBvbiBMb3cgTGlmZQ0KMTAlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjI1JSBpbmNyZWFzZWQgR2xvYmFsIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjEwNiUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorOTMgdG8gbWF4aW11bSBMaWZlDQoxNTAlIGluY3JlYXNlZCBHbG9iYWwgRXZhc2lvbiBSYXRpbmcgd2hlbiBvbiBMb3cgTGlmZQ0KLS0tLS0tLS0NClRoZXJlIHdhcyBubyBoZXJvIG1hZGUgb3V0IG9mIFN0YXJrb25qYSdzIGRlYXRoLA0KYnV0IG1lcmVseSBhIGxvbmcgc2xlZXAgbWFkZSBldGVybmFsLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA5IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +93 total maximum Life",
							"Sum: 186"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "441230b9e83fe980aad5a7eb7f14cda19e18a0dc4d94a6b380587bf98aefdd33",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 80,
				"sockets": [
					[
						"G",
						"G"
					],
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 768"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+64 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"122% increased Evasion Rating",
					"+92 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +92 total maximum Life",
					"Sum: 184"
				],
				"accountText": "destroyall322 > GhostImpaleLastBuild",
				"whisper": "@GhostImpaleLastBuild Hi, I would like to buy your Starkonja's Head Silken Hood listed for 10 chaos in Metamorph (stash tab \"Vender Tudo 2\"; position: left 9, top 1)",
				"note": "~b/o 10 chaos",
				"weightValue": 184,
				"valueText": "184 + defense value 0 + value shift 0",
				"evalValue": 184,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "441230b9e83fe980aad5a7eb7f14cda19e18a0dc4d94a6b380587bf98aefdd33",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-29T17:57:25Z",
						"stash": {
							"name": "Vender Tudo 2",
							"x": 8,
							"y": 0
						},
						"whisper": "@GhostImpaleLastBuild Hi, I would like to buy your Starkonja's Head Silken Hood listed for 10 chaos in Metamorph (stash tab \"Vender Tudo 2\"; position: left 9, top 1)",
						"account": {
							"name": "destroyall322",
							"lastCharacterName": "GhostImpaleLastBuild",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 80,
						"note": "~b/o 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"768",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+64 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"122% increased Evasion Rating",
							"+92 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 768,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDc2OCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUcgRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA4MA0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzY0IHRvIERleHRlcml0eQ0KNTAlIHJlZHVjZWQgRGFtYWdlIHdoZW4gb24gTG93IExpZmUNCjEwJSBpbmNyZWFzZWQgQXR0YWNrIFNwZWVkDQoyNSUgaW5jcmVhc2VkIEdsb2JhbCBDcml0aWNhbCBTdHJpa2UgQ2hhbmNlDQoxMjIlIGluY3JlYXNlZCBFdmFzaW9uIFJhdGluZw0KKzkyIHRvIG1heGltdW0gTGlmZQ0KMTUwJSBpbmNyZWFzZWQgR2xvYmFsIEV2YXNpb24gUmF0aW5nIHdoZW4gb24gTG93IExpZmUNCi0tLS0tLS0tDQpUaGVyZSB3YXMgbm8gaGVybyBtYWRlIG91dCBvZiBTdGFya29uamEncyBkZWF0aCwNCmJ1dCBtZXJlbHkgYSBsb25nIHNsZWVwIG1hZGUgZXRlcm5hbC4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+Yi9vIDEwIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +92 total maximum Life",
							"Sum: 184"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "fc6116df48b27462d5e521cbfc920113ed3f1154226909b19b748d645d9a30f9",
				"name": "Skull Salvation",
				"type": "Harlequin Mask",
				"itemLevel": 72,
				"sockets": [
					[
						"G"
					],
					[
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 157",
					"energyShield 31"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+19 to Intelligence",
					"+79 to maximum Life",
					"+22 to maximum Mana",
					"+25% to Lightning Resistance",
					"Reflects 8 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +25% total Elemental Resistance",
					"(pseudo) +79 total maximum Life",
					"Sum: 183"
				],
				"accountText": "xantion92 > hittaringenyttnamn",
				"whisper": "@hittaringenyttnamn Hi, I would like to buy your Skull Salvation Harlequin Mask listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 1, top 1)",
				"weightValue": 183,
				"valueText": "183 + defense value 0 + value shift 0",
				"evalValue": 183,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "fc6116df48b27462d5e521cbfc920113ed3f1154226909b19b748d645d9a30f9",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-28T13:50:00Z",
						"stash": {
							"name": "~price 5 chaos",
							"x": 0,
							"y": 0
						},
						"whisper": "@hittaringenyttnamn Hi, I would like to buy your Skull Salvation Harlequin Mask listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 1, top 1)",
						"account": {
							"name": "xantion92",
							"lastCharacterName": "hittaringenyttnamn",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexInt9.png?scale=1&w=2&h=2&v=f16dbb804ba232a15e23b3539c67b774",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Skull Salvation",
						"typeLine": "Harlequin Mask",
						"identified": true,
						"ilvl": 72,
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"157",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"31",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"57",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+19 to Intelligence",
							"+79 to maximum Life",
							"+22 to maximum Mana",
							"+25% to Lightning Resistance",
							"Reflects 8 Physical Damage to Melee Attackers"
						],
						"frameType": 2,
						"extended": {
							"ev": 157,
							"es": 31,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Thunderhead",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 24,
												"max": 29
											}
										]
									},
									{
										"name": "of the Prodigy",
										"tier": "S8",
										"magnitudes": [
											{
												"hash": "explicit.stat_328541901",
												"min": 18,
												"max": 22
											}
										]
									},
									{
										"name": "Virile",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "Cobalt",
										"tier": "P11",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 20,
												"max": 24
											}
										]
									},
									{
										"name": "Spiny",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 5,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_328541901",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2
										]
									],
									[
										"explicit.stat_1050105434",
										[
											3
										]
									],
									[
										"explicit.stat_1671376347",
										[
											0
										]
									],
									[
										"explicit.stat_3767873853",
										[
											4
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpTa3VsbCBTYWx2YXRpb24NCkhhcmxlcXVpbiBNYXNrDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDE1Nw0KRW5lcmd5IFNoaWVsZDogMzENCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTcNCkRleDogNjQNCkludDogNjQNCi0tLS0tLS0tDQpTb2NrZXRzOiBHIFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzINCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCisxOSB0byBJbnRlbGxpZ2VuY2UNCis3OSB0byBtYXhpbXVtIExpZmUNCisyMiB0byBtYXhpbXVtIE1hbmENCisyNSUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNClJlZmxlY3RzIDggUGh5c2ljYWwgRGFtYWdlIHRvIE1lbGVlIEF0dGFja2Vycw0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0K"
						},
						"pseudoMods": [
							"(pseudo) +25% total Elemental Resistance",
							"(pseudo) +79 total maximum Life",
							"Sum: 183"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "9343a3d49d441634c83489e855b0b968302eadfd2c68233b0c9d187dde92b38a",
				"name": "Dusk Corona",
				"type": "Great Crown",
				"itemLevel": 83,
				"sockets": [
					[
						"R"
					],
					[
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 143",
					"energyShield 28"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+73 to maximum Life",
					"Regenerate 18.1 Life per second",
					"+33 to maximum Mana",
					"+37% to Cold Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +37% total Elemental Resistance",
					"(pseudo) +73 total maximum Life",
					"Sum: 183"
				],
				"accountText": "IM_WANG > IMW_InBow",
				"whisper": "@IMW_InBow Hi, I would like to buy your Dusk Corona Great Crown listed for 10 chaos in Metamorph (stash tab \"$\"; position: left 1, top 9)",
				"note": "~price 10 chaos",
				"weightValue": 183,
				"valueText": "183 + defense value 0 + value shift 0",
				"evalValue": 183,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "9343a3d49d441634c83489e855b0b968302eadfd2c68233b0c9d187dde92b38a",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-05T09:58:19Z",
						"stash": {
							"name": "$",
							"x": 0,
							"y": 8
						},
						"whisper": "@IMW_InBow Hi, I would like to buy your Dusk Corona Great Crown listed for 10 chaos in Metamorph (stash tab \"$\"; position: left 1, top 9)",
						"account": {
							"name": "IM_WANG",
							"lastCharacterName": "IMW_InBow",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStrInt7.png?scale=1&w=2&h=2&v=bf2963e78379f6eb35bbfede3ade0164",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Dusk Corona",
						"typeLine": "Great Crown",
						"identified": true,
						"ilvl": 83,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"143",
										0
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"28",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"66",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"59",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"59",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+73 to maximum Life",
							"Regenerate 18.1 Life per second",
							"+33 to maximum Mana",
							"+37% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 143,
							"es": 28,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Polar Bear",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 36,
												"max": 41
											}
										]
									},
									{
										"name": "Virile",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "of Ryslatha",
										"tier": "S1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3325883026",
												"min": 16,
												"max": 20
											}
										]
									},
									{
										"name": "Sapphire",
										"tier": "P9",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 30,
												"max": 34
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_3325883026",
										[
											2
										]
									],
									[
										"explicit.stat_1050105434",
										[
											3
										]
									],
									[
										"explicit.stat_4220027924",
										[
											0
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpEdXNrIENvcm9uYQ0KR3JlYXQgQ3Jvd24NCi0tLS0tLS0tDQpBcm1vdXI6IDE0Mw0KRW5lcmd5IFNoaWVsZDogMjgNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjYNClN0cjogNTkNCkludDogNTkNCi0tLS0tLS0tDQpTb2NrZXRzOiBSIFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODMNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCis3MyB0byBtYXhpbXVtIExpZmUNClJlZ2VuZXJhdGUgMTguMSBMaWZlIHBlciBzZWNvbmQNCiszMyB0byBtYXhpbXVtIE1hbmENCiszNyUgdG8gQ29sZCBSZXNpc3RhbmNlDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDEwIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +37% total Elemental Resistance",
							"(pseudo) +73 total maximum Life",
							"Sum: 183"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "480b5bb9553d92050c034cbd5e48fda0dc2bb0b7d269a8ce77ae3af5405b3e85",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 84,
				"sockets": [
					[
						"G",
						"G",
						"B",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 799"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+55 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"111% increased Evasion Rating",
					"+91 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +91 total maximum Life",
					"Sum: 182"
				],
				"accountText": "Keksil > ПредвестницаВайпа",
				"whisper": "@ПредвестницаВайпа Здравствуйте, хочу купить у вас Голова Старконжи Шелковый капюшон за 5 chaos в лиге Метаморф (секция \"~b/o  alt\"; позиция: 11 столбец, 11 ряд)",
				"note": "~b/o 5 chaos",
				"weightValue": 182,
				"valueText": "182 + defense value 0 + value shift 0",
				"evalValue": 182,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "480b5bb9553d92050c034cbd5e48fda0dc2bb0b7d269a8ce77ae3af5405b3e85",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-03T19:31:30Z",
						"stash": {
							"name": "~b/o  alt",
							"x": 10,
							"y": 10
						},
						"whisper": "@ПредвестницаВайпа Здравствуйте, хочу купить у вас Голова Старконжи Шелковый капюшон за 5 chaos в лиге Метаморф (секция \"~b/o  alt\"; позиция: 11 столбец, 11 ряд)",
						"account": {
							"name": "Keksil",
							"lastCharacterName": "ПредвестницаВайпа",
							"online": null,
							"language": "ru_RU"
						},
						"price": {
							"type": "~b/o",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 84,
						"note": "~b/o 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+20%",
										1
									]
								],
								"displayMode": 0,
								"type": 6
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"799",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+55 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"111% increased Evasion Rating",
							"+91 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 799,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KUXVhbGl0eTogKzIwJSAoYXVnbWVudGVkKQ0KRXZhc2lvbiBSYXRpbmc6IDc5OSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUctQi1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDg0DQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNTUgdG8gRGV4dGVyaXR5DQo1MCUgcmVkdWNlZCBEYW1hZ2Ugd2hlbiBvbiBMb3cgTGlmZQ0KMTAlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjI1JSBpbmNyZWFzZWQgR2xvYmFsIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjExMSUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorOTEgdG8gbWF4aW11bSBMaWZlDQoxNTAlIGluY3JlYXNlZCBHbG9iYWwgRXZhc2lvbiBSYXRpbmcgd2hlbiBvbiBMb3cgTGlmZQ0KLS0tLS0tLS0NClRoZXJlIHdhcyBubyBoZXJvIG1hZGUgb3V0IG9mIFN0YXJrb25qYSdzIGRlYXRoLA0KYnV0IG1lcmVseSBhIGxvbmcgc2xlZXAgbWFkZSBldGVybmFsLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5iL28gNSBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +91 total maximum Life",
							"Sum: 182"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "8f10b675b74d39d1ab30ecbc9a18eb43130be6ca5ccb7950fffa880d03116793",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 84,
				"sockets": [
					[
						"G",
						"G",
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 792"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+64 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"109% increased Evasion Rating",
					"+90 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +90 total maximum Life",
					"Sum: 180"
				],
				"accountText": "riojano0 > _Rynas",
				"whisper": "@_Rynas Hi, I would like to buy your Starkonja's Head Silken Hood listed for 2 chaos in Metamorph (stash tab \"Selleando\"; position: left 1, top 5)",
				"note": "~price 2 chaos",
				"weightValue": 180,
				"valueText": "180 + defense value 0 + value shift 0",
				"evalValue": 180,
				"priceText": "2 chaos",
				"evalPrice": 2,
				"debug": {
					"id": "8f10b675b74d39d1ab30ecbc9a18eb43130be6ca5ccb7950fffa880d03116793",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-01T22:48:47Z",
						"stash": {
							"name": "Selleando",
							"x": 0,
							"y": 4
						},
						"whisper": "@_Rynas Hi, I would like to buy your Starkonja's Head Silken Hood listed for 2 chaos in Metamorph (stash tab \"Selleando\"; position: left 1, top 5)",
						"account": {
							"name": "riojano0",
							"lastCharacterName": "_Rynas",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 2,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 84,
						"note": "~price 2 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+20%",
										1
									]
								],
								"displayMode": 0,
								"type": 6
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"792",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+64 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"109% increased Evasion Rating",
							"+90 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 792,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KUXVhbGl0eTogKzIwJSAoYXVnbWVudGVkKQ0KRXZhc2lvbiBSYXRpbmc6IDc5MiAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUctRy1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDg0DQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNjQgdG8gRGV4dGVyaXR5DQo1MCUgcmVkdWNlZCBEYW1hZ2Ugd2hlbiBvbiBMb3cgTGlmZQ0KMTAlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjI1JSBpbmNyZWFzZWQgR2xvYmFsIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjEwOSUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorOTAgdG8gbWF4aW11bSBMaWZlDQoxNTAlIGluY3JlYXNlZCBHbG9iYWwgRXZhc2lvbiBSYXRpbmcgd2hlbiBvbiBMb3cgTGlmZQ0KLS0tLS0tLS0NClRoZXJlIHdhcyBubyBoZXJvIG1hZGUgb3V0IG9mIFN0YXJrb25qYSdzIGRlYXRoLA0KYnV0IG1lcmVseSBhIGxvbmcgc2xlZXAgbWFkZSBldGVybmFsLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAyIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +90 total maximum Life",
							"Sum: 180"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "56cefabc880ed0b02d5f5cddba1ec5fb7933abfc1acb14d6582f216eb0fa25fc",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 82,
				"sockets": [
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 744"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+61 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"115% increased Evasion Rating",
					"+90 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +90 total maximum Life",
					"Sum: 180"
				],
				"accountText": "xxpeplxx > Koozspins",
				"whisper": "@Koozspins Hi, I would like to buy your Starkonja's Head Silken Hood listed for 5 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 20, top 21)",
				"note": "~price 5 chaos",
				"weightValue": 180,
				"valueText": "180 + defense value 0 + value shift 0",
				"evalValue": 180,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "56cefabc880ed0b02d5f5cddba1ec5fb7933abfc1acb14d6582f216eb0fa25fc",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-02T05:40:59Z",
						"stash": {
							"name": "~price 1 chaos",
							"x": 19,
							"y": 20
						},
						"whisper": "@Koozspins Hi, I would like to buy your Starkonja's Head Silken Hood listed for 5 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 20, top 21)",
						"account": {
							"name": "xxpeplxx",
							"lastCharacterName": "Koozspins",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 82,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"744",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+61 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"115% increased Evasion Rating",
							"+90 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 744,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDc0NCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgyDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNjEgdG8gRGV4dGVyaXR5DQo1MCUgcmVkdWNlZCBEYW1hZ2Ugd2hlbiBvbiBMb3cgTGlmZQ0KMTAlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjI1JSBpbmNyZWFzZWQgR2xvYmFsIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjExNSUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorOTAgdG8gbWF4aW11bSBMaWZlDQoxNTAlIGluY3JlYXNlZCBHbG9iYWwgRXZhc2lvbiBSYXRpbmcgd2hlbiBvbiBMb3cgTGlmZQ0KLS0tLS0tLS0NClRoZXJlIHdhcyBubyBoZXJvIG1hZGUgb3V0IG9mIFN0YXJrb25qYSdzIGRlYXRoLA0KYnV0IG1lcmVseSBhIGxvbmcgc2xlZXAgbWFkZSBldGVybmFsLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA1IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +90 total maximum Life",
							"Sum: 180"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "0954d057325bebfff82733decdf7f428d0adf4ee4c143d7bbd97cd8dc02f74c9",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 78,
				"sockets": [
					[
						"G",
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 758"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+50 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"119% increased Evasion Rating",
					"+90 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +90 total maximum Life",
					"Sum: 180"
				],
				"accountText": "Auv5 > SpectralMommy",
				"whisper": "@SpectralMommy Hi, I would like to buy your Starkonja's Head Silken Hood listed for 5 chaos in Metamorph (stash tab \"$$$\"; position: left 8, top 6)",
				"note": "~price 5 chaos",
				"weightValue": 180,
				"valueText": "180 + defense value 0 + value shift 0",
				"evalValue": 180,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "0954d057325bebfff82733decdf7f428d0adf4ee4c143d7bbd97cd8dc02f74c9",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-04T01:56:34Z",
						"stash": {
							"name": "$$$",
							"x": 7,
							"y": 5
						},
						"whisper": "@SpectralMommy Hi, I would like to buy your Starkonja's Head Silken Hood listed for 5 chaos in Metamorph (stash tab \"$$$\"; position: left 8, top 6)",
						"account": {
							"name": "Auv5",
							"lastCharacterName": "SpectralMommy",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 78,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"758",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+50 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"119% increased Evasion Rating",
							"+90 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 758,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDc1OCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUctRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3OA0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzUwIHRvIERleHRlcml0eQ0KNTAlIHJlZHVjZWQgRGFtYWdlIHdoZW4gb24gTG93IExpZmUNCjEwJSBpbmNyZWFzZWQgQXR0YWNrIFNwZWVkDQoyNSUgaW5jcmVhc2VkIEdsb2JhbCBDcml0aWNhbCBTdHJpa2UgQ2hhbmNlDQoxMTklIGluY3JlYXNlZCBFdmFzaW9uIFJhdGluZw0KKzkwIHRvIG1heGltdW0gTGlmZQ0KMTUwJSBpbmNyZWFzZWQgR2xvYmFsIEV2YXNpb24gUmF0aW5nIHdoZW4gb24gTG93IExpZmUNCi0tLS0tLS0tDQpUaGVyZSB3YXMgbm8gaGVybyBtYWRlIG91dCBvZiBTdGFya29uamEncyBkZWF0aCwNCmJ1dCBtZXJlbHkgYSBsb25nIHNsZWVwIG1hZGUgZXRlcm5hbC4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgNSBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +90 total maximum Life",
							"Sum: 180"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "1eaaf1cac4a159a4d024a1d22f77c5c5f92f5faae5334ef3971d68f899aa59f2",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 77,
				"sockets": [
					[
						"G",
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 747"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+60 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"116% increased Evasion Rating",
					"+90 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +90 total maximum Life",
					"Sum: 180"
				],
				"accountText": "Wa1kerzzz > LASERATORBLEAD",
				"whisper": "@LASERATORBLEAD Hi, I would like to buy your Starkonja's Head Silken Hood listed for 10 chaos in Metamorph (stash tab \"PRODAU\"; position: left 3, top 5)",
				"note": "~price 10 chaos",
				"weightValue": 180,
				"valueText": "180 + defense value 0 + value shift 0",
				"evalValue": 180,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "1eaaf1cac4a159a4d024a1d22f77c5c5f92f5faae5334ef3971d68f899aa59f2",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-05T07:37:48Z",
						"stash": {
							"name": "PRODAU",
							"x": 2,
							"y": 4
						},
						"whisper": "@LASERATORBLEAD Hi, I would like to buy your Starkonja's Head Silken Hood listed for 10 chaos in Metamorph (stash tab \"PRODAU\"; position: left 3, top 5)",
						"account": {
							"name": "Wa1kerzzz",
							"lastCharacterName": "LASERATORBLEAD",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 77,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"747",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+60 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"116% increased Evasion Rating",
							"+90 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 747,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDc0NyAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUctRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3Nw0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzYwIHRvIERleHRlcml0eQ0KNTAlIHJlZHVjZWQgRGFtYWdlIHdoZW4gb24gTG93IExpZmUNCjEwJSBpbmNyZWFzZWQgQXR0YWNrIFNwZWVkDQoyNSUgaW5jcmVhc2VkIEdsb2JhbCBDcml0aWNhbCBTdHJpa2UgQ2hhbmNlDQoxMTYlIGluY3JlYXNlZCBFdmFzaW9uIFJhdGluZw0KKzkwIHRvIG1heGltdW0gTGlmZQ0KMTUwJSBpbmNyZWFzZWQgR2xvYmFsIEV2YXNpb24gUmF0aW5nIHdoZW4gb24gTG93IExpZmUNCi0tLS0tLS0tDQpUaGVyZSB3YXMgbm8gaGVybyBtYWRlIG91dCBvZiBTdGFya29uamEncyBkZWF0aCwNCmJ1dCBtZXJlbHkgYSBsb25nIHNsZWVwIG1hZGUgZXRlcm5hbC4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMTAgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +90 total maximum Life",
							"Sum: 180"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "e4c40230109bd6319a08d0114f3f32b08a9fcdc5534f024ef1239d7a160d202e",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 71,
				"sockets": [
					[
						"G",
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 751"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+55 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"117% increased Evasion Rating",
					"+90 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +90 total maximum Life",
					"Sum: 180"
				],
				"accountText": "locokk3 > SoNaBolinhaDeCaos",
				"whisper": "@SoNaBolinhaDeCaos Hi, I would like to buy your Starkonja's Head Silken Hood listed for 10 chaos in Metamorph (stash tab \"SELL\"; position: left 6, top 11)",
				"note": "~price 10 chaos",
				"weightValue": 180,
				"valueText": "180 + defense value 0 + value shift 0",
				"evalValue": 180,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "e4c40230109bd6319a08d0114f3f32b08a9fcdc5534f024ef1239d7a160d202e",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-14T12:05:54Z",
						"stash": {
							"name": "SELL",
							"x": 5,
							"y": 10
						},
						"whisper": "@SoNaBolinhaDeCaos Hi, I would like to buy your Starkonja's Head Silken Hood listed for 10 chaos in Metamorph (stash tab \"SELL\"; position: left 6, top 11)",
						"account": {
							"name": "locokk3",
							"lastCharacterName": "SoNaBolinhaDeCaos",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 71,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"751",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+55 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"117% increased Evasion Rating",
							"+90 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 751,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDc1MSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUctRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3MQ0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzU1IHRvIERleHRlcml0eQ0KNTAlIHJlZHVjZWQgRGFtYWdlIHdoZW4gb24gTG93IExpZmUNCjEwJSBpbmNyZWFzZWQgQXR0YWNrIFNwZWVkDQoyNSUgaW5jcmVhc2VkIEdsb2JhbCBDcml0aWNhbCBTdHJpa2UgQ2hhbmNlDQoxMTclIGluY3JlYXNlZCBFdmFzaW9uIFJhdGluZw0KKzkwIHRvIG1heGltdW0gTGlmZQ0KMTUwJSBpbmNyZWFzZWQgR2xvYmFsIEV2YXNpb24gUmF0aW5nIHdoZW4gb24gTG93IExpZmUNCi0tLS0tLS0tDQpUaGVyZSB3YXMgbm8gaGVybyBtYWRlIG91dCBvZiBTdGFya29uamEncyBkZWF0aCwNCmJ1dCBtZXJlbHkgYSBsb25nIHNsZWVwIG1hZGUgZXRlcm5hbC4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMTAgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +90 total maximum Life",
							"Sum: 180"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "a2ff59e8ee38959d3ec8636781d1bf9f9aefdf430c8eef3becd05c9f1463b872",
				"name": "Storm Shelter",
				"type": "Siege Helmet",
				"itemLevel": 70,
				"sockets": [
					[
						"R"
					],
					[
						"R",
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 277"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+40 to Armour",
					"+82 to maximum Life",
					"+14% to Fire Resistance",
					"+14% to Chaos Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +14% total Elemental Resistance",
					"(pseudo) +82 total maximum Life",
					"Sum: 178"
				],
				"accountText": "IrokeZuk > Ivan_Number_One",
				"whisper": "@Ivan_Number_One Здравствуйте, хочу купить у вас Бушующий кров Осадный шлем за 10 chaos в лиге Метаморф (секция \"TR\"; позиция: 5 столбец, 5 ряд)",
				"note": "~price 10 chaos",
				"weightValue": 178,
				"valueText": "178 + defense value 0 + value shift 0",
				"evalValue": 178,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "a2ff59e8ee38959d3ec8636781d1bf9f9aefdf430c8eef3becd05c9f1463b872",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-24T11:22:28Z",
						"stash": {
							"name": "TR",
							"x": 4,
							"y": 4
						},
						"whisper": "@Ivan_Number_One Здравствуйте, хочу купить у вас Бушующий кров Осадный шлем за 10 chaos в лиге Метаморф (секция \"TR\"; позиция: 5 столбец, 5 ряд)",
						"account": {
							"name": "IrokeZuk",
							"lastCharacterName": "Ivan_Number_One",
							"online": null,
							"language": "ru_RU"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStr7.png?scale=1&w=2&h=2&v=070db8eaafa69c5225d50554bf398ba0",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Storm Shelter",
						"typeLine": "Siege Helmet",
						"identified": true,
						"ilvl": 70,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"277",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"101",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+40 to Armour",
							"+82 to maximum Life",
							"+14% to Fire Resistance",
							"+14% to Chaos Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 277,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Salamander",
										"tier": "S7",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 12,
												"max": 17
											}
										]
									},
									{
										"name": "Urchin's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 21,
												"max": 42
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 24,
												"max": 28
											}
										]
									},
									{
										"name": "Robust",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 50,
												"max": 59
											}
										]
									},
									{
										"name": "of Banishment",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_2923486259",
												"min": 11,
												"max": 15
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3484657501",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1,
											2
										]
									],
									[
										"explicit.stat_3372524247",
										[
											0
										]
									],
									[
										"explicit.stat_2923486259",
										[
											3
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpTdG9ybSBTaGVsdGVyDQpTaWVnZSBIZWxtZXQNCi0tLS0tLS0tDQpBcm1vdXI6IDI3NyAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA0OA0KU3RyOiAxMDENCi0tLS0tLS0tDQpTb2NrZXRzOiBSIFItUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3MA0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzQwIHRvIEFybW91cg0KKzgyIHRvIG1heGltdW0gTGlmZQ0KKzE0JSB0byBGaXJlIFJlc2lzdGFuY2UNCisxNCUgdG8gQ2hhb3MgUmVzaXN0YW5jZQ0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAxMCBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +14% total Elemental Resistance",
							"(pseudo) +82 total maximum Life",
							"Sum: 178"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "594bc582547ce1d265ffd1ac064b40c294d50ea0839fd395086da0c25f00dfb9",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 83,
				"sockets": [
					[
						"G",
						"G",
						"G",
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 740"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+55 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"114% increased Evasion Rating",
					"+86 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +86 total maximum Life",
					"Sum: 172"
				],
				"accountText": "ShadiKhoury > GuardianMetamorphZombie",
				"whisper": "@GuardianMetamorphZombie Hi, I would like to buy your Starkonja's Head Silken Hood listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 4, top 5)",
				"weightValue": 172,
				"valueText": "172 + defense value 0 + value shift 0",
				"evalValue": 172,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "594bc582547ce1d265ffd1ac064b40c294d50ea0839fd395086da0c25f00dfb9",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-01T11:39:53Z",
						"stash": {
							"name": "~price 10 chaos",
							"x": 3,
							"y": 4
						},
						"whisper": "@GuardianMetamorphZombie Hi, I would like to buy your Starkonja's Head Silken Hood listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 4, top 5)",
						"account": {
							"name": "ShadiKhoury",
							"lastCharacterName": "GuardianMetamorphZombie",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 83,
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"740",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+55 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"114% increased Evasion Rating",
							"+86 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 740,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDc0MCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUctRy1SIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgzDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNTUgdG8gRGV4dGVyaXR5DQo1MCUgcmVkdWNlZCBEYW1hZ2Ugd2hlbiBvbiBMb3cgTGlmZQ0KMTAlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjI1JSBpbmNyZWFzZWQgR2xvYmFsIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjExNCUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorODYgdG8gbWF4aW11bSBMaWZlDQoxNTAlIGluY3JlYXNlZCBHbG9iYWwgRXZhc2lvbiBSYXRpbmcgd2hlbiBvbiBMb3cgTGlmZQ0KLS0tLS0tLS0NClRoZXJlIHdhcyBubyBoZXJvIG1hZGUgb3V0IG9mIFN0YXJrb25qYSdzIGRlYXRoLA0KYnV0IG1lcmVseSBhIGxvbmcgc2xlZXAgbWFkZSBldGVybmFsLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0K"
						},
						"pseudoMods": [
							"(pseudo) +86 total maximum Life",
							"Sum: 172"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "e14016be5a5abfe56f75c50f17d4325d4e903b4439a13bb3655dcb5578e5990f",
				"name": "Soul Brow",
				"type": "Siege Helmet",
				"itemLevel": 70,
				"sockets": [
					[
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 237"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+23 to Intelligence",
					"+65 to maximum Life",
					"Regenerate 11.1 Life per second",
					"+41% to Lightning Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +41% total Elemental Resistance",
					"(pseudo) +65 total maximum Life",
					"Sum: 171"
				],
				"accountText": "Valfo > Valfo_TeamGuard",
				"whisper": "@Valfo_TeamGuard Hi, I would like to buy your Soul Brow Siege Helmet listed for 5 chaos in Metamorph (stash tab \"Ð\"; position: left 10, top 2)",
				"note": "~price 5 chaos",
				"weightValue": 171,
				"valueText": "171 + defense value 0 + value shift 0",
				"evalValue": 171,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "e14016be5a5abfe56f75c50f17d4325d4e903b4439a13bb3655dcb5578e5990f",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-26T14:00:09Z",
						"stash": {
							"name": "Ð",
							"x": 9,
							"y": 1
						},
						"whisper": "@Valfo_TeamGuard Hi, I would like to buy your Soul Brow Siege Helmet listed for 5 chaos in Metamorph (stash tab \"Ð\"; position: left 10, top 2)",
						"account": {
							"name": "Valfo",
							"lastCharacterName": "Valfo_TeamGuard",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStr7.png?scale=1&w=2&h=2&v=070db8eaafa69c5225d50554bf398ba0",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Soul Brow",
						"typeLine": "Siege Helmet",
						"identified": true,
						"ilvl": 70,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"237",
										0
									]
								],
								"displayMode": 0,
								"type": 16
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"101",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+23 to Intelligence",
							"+65 to maximum Life",
							"Regenerate 11.1 Life per second",
							"+41% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 237,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Hydra",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3325883026",
												"min": 10,
												"max": 13
											}
										]
									},
									{
										"name": "of the Maelstrom",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 36,
												"max": 41
											}
										]
									},
									{
										"name": "of the Augur",
										"tier": "S7",
										"magnitudes": [
											{
												"hash": "explicit.stat_328541901",
												"min": 23,
												"max": 27
											}
										]
									},
									{
										"name": "Rotund",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 60,
												"max": 69
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_328541901",
										[
											2
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3
										]
									],
									[
										"explicit.stat_3325883026",
										[
											0
										]
									],
									[
										"explicit.stat_1671376347",
										[
											1
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpTb3VsIEJyb3cNClNpZWdlIEhlbG1ldA0KLS0tLS0tLS0NCkFybW91cjogMjM3DQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQpTdHI6IDEwMQ0KLS0tLS0tLS0NClNvY2tldHM6IFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzANCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCisyMyB0byBJbnRlbGxpZ2VuY2UNCis2NSB0byBtYXhpbXVtIExpZmUNClJlZ2VuZXJhdGUgMTEuMSBMaWZlIHBlciBzZWNvbmQNCis0MSUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgNSBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +41% total Elemental Resistance",
							"(pseudo) +65 total maximum Life",
							"Sum: 171"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "0b900e820b074fd6599a5e21a3419db0af8960ffe9b357e46ad807738aa762a7",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 70,
				"sockets": [
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 713"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+54 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"106% increased Evasion Rating",
					"+85 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +85 total maximum Life",
					"Sum: 170"
				],
				"accountText": "Enco0408 > BasssboostedCyclone",
				"whisper": "@BasssboostedCyclone Hi, I would like to buy your Starkonja's Head Silken Hood listed for 5 chaos in Metamorph (stash tab \"trade\"; position: left 3, top 3)",
				"note": "~price 5 chaos",
				"weightValue": 170,
				"valueText": "170 + defense value 0 + value shift 0",
				"evalValue": 170,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "0b900e820b074fd6599a5e21a3419db0af8960ffe9b357e46ad807738aa762a7",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-09T18:37:59Z",
						"stash": {
							"name": "trade",
							"x": 2,
							"y": 2
						},
						"whisper": "@BasssboostedCyclone Hi, I would like to buy your Starkonja's Head Silken Hood listed for 5 chaos in Metamorph (stash tab \"trade\"; position: left 3, top 3)",
						"account": {
							"name": "Enco0408",
							"lastCharacterName": "BasssboostedCyclone",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 70,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"713",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+54 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"106% increased Evasion Rating",
							"+85 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 713,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDcxMyAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcwDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNTQgdG8gRGV4dGVyaXR5DQo1MCUgcmVkdWNlZCBEYW1hZ2Ugd2hlbiBvbiBMb3cgTGlmZQ0KMTAlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjI1JSBpbmNyZWFzZWQgR2xvYmFsIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjEwNiUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorODUgdG8gbWF4aW11bSBMaWZlDQoxNTAlIGluY3JlYXNlZCBHbG9iYWwgRXZhc2lvbiBSYXRpbmcgd2hlbiBvbiBMb3cgTGlmZQ0KLS0tLS0tLS0NClRoZXJlIHdhcyBubyBoZXJvIG1hZGUgb3V0IG9mIFN0YXJrb25qYSdzIGRlYXRoLA0KYnV0IG1lcmVseSBhIGxvbmcgc2xlZXAgbWFkZSBldGVybmFsLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA1IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +85 total maximum Life",
							"Sum: 170"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "da9161ab5be7c7ab60726235953f349114de0a23ca81f05c1842663f00d6a9a7",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 84,
				"sockets": [
					[
						"R",
						"G",
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 716"
				],
				"enchantMods": [
					"40% increased Charged Dash Damage"
				],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+51 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"107% increased Evasion Rating",
					"+85 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +85 total maximum Life",
					"Sum: 170"
				],
				"accountText": "NanaPet > HahaWee",
				"whisper": "@HahaWee Hi, I would like to buy your Starkonja's Head Silken Hood listed for 5 chaos in Metamorph (stash tab \"Offer\"; position: left 11, top 11)",
				"note": "~price 5 chaos",
				"weightValue": 170,
				"valueText": "170 + defense value 0 + value shift 0",
				"evalValue": 170,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "da9161ab5be7c7ab60726235953f349114de0a23ca81f05c1842663f00d6a9a7",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-05T15:58:32Z",
						"stash": {
							"name": "Offer",
							"x": 10,
							"y": 10
						},
						"whisper": "@HahaWee Hi, I would like to buy your Starkonja's Head Silken Hood listed for 5 chaos in Metamorph (stash tab \"Offer\"; position: left 11, top 11)",
						"account": {
							"name": "NanaPet",
							"lastCharacterName": "HahaWee",
							"online": {
								"league": "Metamorph"
							},
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 84,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"716",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+51 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"107% increased Evasion Rating",
							"+85 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"enchantMods": [
							"40% increased Charged Dash Damage"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 716,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"enchant": [
									{
										"name": "Enchantment Charged Dash Damage 2",
										"tier": "",
										"magnitudes": [
											{
												"hash": "enchant.stat_1265055278",
												"min": 40,
												"max": 40
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"enchant": [
									[
										"enchant.stat_1265055278",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDcxNiAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBSLUctRy1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDg0DQotLS0tLS0tLQ0KNDAlIGluY3JlYXNlZCBDaGFyZ2VkIERhc2ggRGFtYWdlDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNTEgdG8gRGV4dGVyaXR5DQo1MCUgcmVkdWNlZCBEYW1hZ2Ugd2hlbiBvbiBMb3cgTGlmZQ0KMTAlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjI1JSBpbmNyZWFzZWQgR2xvYmFsIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjEwNyUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorODUgdG8gbWF4aW11bSBMaWZlDQoxNTAlIGluY3JlYXNlZCBHbG9iYWwgRXZhc2lvbiBSYXRpbmcgd2hlbiBvbiBMb3cgTGlmZQ0KLS0tLS0tLS0NClRoZXJlIHdhcyBubyBoZXJvIG1hZGUgb3V0IG9mIFN0YXJrb25qYSdzIGRlYXRoLA0KYnV0IG1lcmVseSBhIGxvbmcgc2xlZXAgbWFkZSBldGVybmFsLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA1IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +85 total maximum Life",
							"Sum: 170"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "ef04a3b3075b8cca926c0616c738f4c45954e11f69229b2686dbf3fbb382a7ee",
				"name": "Skullhead",
				"type": "Secutor Helm",
				"itemLevel": 72,
				"sockets": [
					[
						"R",
						"G",
						"G",
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 195",
					"evasion 195"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"79% increased Armour and Evasion",
					"+56 to maximum Life",
					"+60 to maximum Mana",
					"+19% to all Elemental Resistances",
					"Minions have +10% Chance to Block Attack Damage",
					"Minions have +347 to Armour",
					"Minions Regenerate 2% of Life per second"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +57% total Elemental Resistance",
					"(pseudo) +56 total maximum Life",
					"Sum: 169"
				],
				"accountText": "przemo94x > META_DILER",
				"whisper": "@META_DILER Hi, I would like to buy your Skullhead Secutor Helm listed for 10 chaos in Metamorph (stash tab \"shop\"; position: left 10, top 1)",
				"note": "~price 10 chaos",
				"weightValue": 169,
				"valueText": "169 + defense value 0 + value shift 0",
				"evalValue": 169,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "ef04a3b3075b8cca926c0616c738f4c45954e11f69229b2686dbf3fbb382a7ee",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-31T09:31:48Z",
						"stash": {
							"name": "shop",
							"x": 9,
							"y": 0
						},
						"whisper": "@META_DILER Hi, I would like to buy your Skullhead Secutor Helm listed for 10 chaos in Metamorph (stash tab \"shop\"; position: left 10, top 1)",
						"account": {
							"name": "przemo94x",
							"lastCharacterName": "META_DILER",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Skullhead.png?scale=1&w=2&h=2&v=4c6467dabbf7489d0eb5750f9f36bc34",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Skullhead",
						"typeLine": "Secutor Helm",
						"identified": true,
						"ilvl": 72,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+20%",
										1
									]
								],
								"displayMode": 0,
								"type": 6
							},
							{
								"name": "Armour",
								"values": [
									[
										"195",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"195",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"42",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"42",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"79% increased Armour and Evasion",
							"+56 to maximum Life",
							"+60 to maximum Mana",
							"+19% to all Elemental Resistances",
							"Minions have +10% Chance to Block Attack Damage",
							"Minions have +347 to Armour",
							"Minions Regenerate 2% of Life per second"
						],
						"flavourText": [
							"All that was left of the Iron King was his bleached skull.\r",
							"Yet it was all the Iron King needed."
						],
						"frameType": 3,
						"extended": {
							"ev": 195,
							"ar": 195,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2451402625",
												"min": 60,
												"max": 80
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2048970144",
												"min": 300,
												"max": 350
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2479683456",
												"min": 2,
												"max": 2
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3374054207",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 10,
												"max": 20
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_2451402625",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0
										]
									],
									[
										"explicit.stat_1050105434",
										[
											2
										]
									],
									[
										"explicit.stat_2901986750",
										[
											6
										]
									],
									[
										"explicit.stat_3374054207",
										[
											5
										]
									],
									[
										"explicit.stat_2048970144",
										[
											3
										]
									],
									[
										"explicit.stat_2479683456",
										[
											4
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClNrdWxsaGVhZA0KU2VjdXRvciBIZWxtDQotLS0tLS0tLQ0KUXVhbGl0eTogKzIwJSAoYXVnbWVudGVkKQ0KQXJtb3VyOiAxOTUgKGF1Z21lbnRlZCkNCkV2YXNpb24gUmF0aW5nOiAxOTUgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDgNClN0cjogNDINCkRleDogNDINCi0tLS0tLS0tDQpTb2NrZXRzOiBSLUctRy1SIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcyDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQo3OSUgaW5jcmVhc2VkIEFybW91ciBhbmQgRXZhc2lvbg0KKzU2IHRvIG1heGltdW0gTGlmZQ0KKzYwIHRvIG1heGltdW0gTWFuYQ0KKzE5JSB0byBhbGwgRWxlbWVudGFsIFJlc2lzdGFuY2VzDQpNaW5pb25zIGhhdmUgKzEwJSBDaGFuY2UgdG8gQmxvY2sgQXR0YWNrIERhbWFnZQ0KTWluaW9ucyBoYXZlICszNDcgdG8gQXJtb3VyDQpNaW5pb25zIFJlZ2VuZXJhdGUgMiUgb2YgTGlmZSBwZXIgc2Vjb25kDQotLS0tLS0tLQ0KQWxsIHRoYXQgd2FzIGxlZnQgb2YgdGhlIElyb24gS2luZyB3YXMgaGlzIGJsZWFjaGVkIHNrdWxsLg0KWWV0IGl0IHdhcyBhbGwgdGhlIElyb24gS2luZyBuZWVkZWQuDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDEwIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +57% total Elemental Resistance",
							"(pseudo) +56 total maximum Life",
							"Sum: 169"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "8b3b0e1b67c10340965e6242e67fa4c9c9fd5844b8407eb7383ca1187c5ca139",
				"name": "Torment Crest",
				"type": "Eternal Burgonet",
				"itemLevel": 83,
				"sockets": [
					[
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 470"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+24 to Intelligence",
					"26% increased Armour",
					"+73 to maximum Life",
					"+21% to Cold Resistance",
					"11% increased Stun and Block Recovery"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +21% total Elemental Resistance",
					"(pseudo) +73 total maximum Life",
					"Sum: 167"
				],
				"accountText": "eurneukes > sharptoxicfaceroll",
				"whisper": "@sharptoxicfaceroll Hi, I would like to buy your Torment Crest Eternal Burgonet listed for 10 chaos in Metamorph (stash tab \"€\"; position: left 3, top 1)",
				"note": "~price 10 chaos",
				"weightValue": 167,
				"valueText": "167 + defense value 0 + value shift 0",
				"evalValue": 167,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "8b3b0e1b67c10340965e6242e67fa4c9c9fd5844b8407eb7383ca1187c5ca139",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-13T11:24:16Z",
						"stash": {
							"name": "€",
							"x": 2,
							"y": 0
						},
						"whisper": "@sharptoxicfaceroll Hi, I would like to buy your Torment Crest Eternal Burgonet listed for 10 chaos in Metamorph (stash tab \"€\"; position: left 3, top 1)",
						"account": {
							"name": "eurneukes",
							"lastCharacterName": "sharptoxicfaceroll",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStr11.png?scale=1&w=2&h=2&v=342bd7655177cacda3928e191d7eb83c",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Torment Crest",
						"typeLine": "Eternal Burgonet",
						"identified": true,
						"ilvl": 83,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"470",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"69",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+24 to Intelligence",
							"26% increased Armour",
							"+73 to maximum Life",
							"+21% to Cold Resistance",
							"11% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 470,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Penguin",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 18,
												"max": 23
											}
										]
									},
									{
										"name": "Armadillo's",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
												"min": 21,
												"max": 26
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 10,
												"max": 11
											}
										]
									},
									{
										"name": "Virile",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "of the Augur",
										"tier": "S7",
										"magnitudes": [
											{
												"hash": "explicit.stat_328541901",
												"min": 23,
												"max": 27
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_328541901",
										[
											3
										]
									],
									[
										"explicit.stat_1062208444",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2
										]
									],
									[
										"explicit.stat_4220027924",
										[
											0
										]
									],
									[
										"explicit.stat_2511217560",
										[
											1
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpUb3JtZW50IENyZXN0DQpFdGVybmFsIEJ1cmdvbmV0DQotLS0tLS0tLQ0KQXJtb3VyOiA0NzAgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjkNClN0cjogMTM4DQotLS0tLS0tLQ0KU29ja2V0czogUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA4Mw0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzI0IHRvIEludGVsbGlnZW5jZQ0KMjYlIGluY3JlYXNlZCBBcm1vdXINCis3MyB0byBtYXhpbXVtIExpZmUNCisyMSUgdG8gQ29sZCBSZXNpc3RhbmNlDQoxMSUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDEwIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +21% total Elemental Resistance",
							"(pseudo) +73 total maximum Life",
							"Sum: 167"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "7cccf8e507235d82b5fcc8f1c201dd703f8c75a6d6074f3d38a90746ab6fff3d",
				"name": "Horror Crest",
				"type": "Lion Pelt",
				"itemLevel": 81,
				"sockets": [
					[
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 521"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+12 to Evasion Rating",
					"19% increased Evasion Rating",
					"+83 to maximum Life",
					"26% increased Stun and Block Recovery"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +83 total maximum Life",
					"Sum: 166"
				],
				"accountText": "viktorbx126 > ESCAMETAKasiner",
				"whisper": "@ESCAMETAKasiner Hi, I would like to buy your Horror Crest Lion Pelt listed for 5 chaos in Metamorph (stash tab \"$\"; position: left 3, top 6)",
				"note": "~price 5 chaos",
				"weightValue": 166,
				"valueText": "166 + defense value 0 + value shift 0",
				"evalValue": 166,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "7cccf8e507235d82b5fcc8f1c201dd703f8c75a6d6074f3d38a90746ab6fff3d",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-29T20:12:34Z",
						"stash": {
							"name": "$",
							"x": 2,
							"y": 5
						},
						"whisper": "@ESCAMETAKasiner Hi, I would like to buy your Horror Crest Lion Pelt listed for 5 chaos in Metamorph (stash tab \"$\"; position: left 3, top 6)",
						"account": {
							"name": "viktorbx126",
							"lastCharacterName": "ESCAMETAKasiner",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDex10.png?scale=1&w=2&h=2&v=429392c896c4a48b46ed48d4e2e89e7f",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Horror Crest",
						"typeLine": "Lion Pelt",
						"identified": true,
						"ilvl": 81,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+14%",
										1
									]
								],
								"displayMode": 0,
								"type": 6
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"521",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"70",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"150",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+12 to Evasion Rating",
							"19% increased Evasion Rating",
							"+83 to maximum Life",
							"26% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ev": 521,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Dancer's",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 11,
												"max": 35
											}
										]
									},
									{
										"name": "Moth's",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 8,
												"max": 9
											}
										]
									},
									{
										"name": "of Iron Skin",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_2511217560",
												"min": 17,
												"max": 19
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											1
										]
									],
									[
										"explicit.stat_124859000",
										[
											2
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0
										]
									],
									[
										"explicit.stat_2511217560",
										[
											2,
											3
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpIb3Jyb3IgQ3Jlc3QNCkxpb24gUGVsdA0KLS0tLS0tLS0NClF1YWxpdHk6ICsxNCUgKGF1Z21lbnRlZCkNCkV2YXNpb24gUmF0aW5nOiA1MjEgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNzANCkRleDogMTUwDQotLS0tLS0tLQ0KU29ja2V0czogRy1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgxDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMTIgdG8gRXZhc2lvbiBSYXRpbmcNCjE5JSBpbmNyZWFzZWQgRXZhc2lvbiBSYXRpbmcNCis4MyB0byBtYXhpbXVtIExpZmUNCjI2JSBpbmNyZWFzZWQgU3R1biBhbmQgQmxvY2sgUmVjb3ZlcnkNCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgNSBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +83 total maximum Life",
							"Sum: 166"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "c72cf2f652841410da2741e212dfece503011b539fb8e9c4faf73275d1e06b9a",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 73,
				"sockets": [
					[
						"G"
					],
					[
						"G"
					],
					[
						"B"
					],
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 789"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+58 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"118% increased Evasion Rating",
					"+81 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +81 total maximum Life",
					"Sum: 162"
				],
				"accountText": "dreamrsx > CobraLashDream",
				"whisper": "@CobraLashDream Hi, I would like to buy your Starkonja's Head Silken Hood listed for 6 chaos in Metamorph (stash tab \"Custom $\"; position: left 10, top 2)",
				"note": "~price 6 chaos",
				"weightValue": 162,
				"valueText": "162 + defense value 0 + value shift 0",
				"evalValue": 162,
				"priceText": "6 chaos",
				"evalPrice": 6,
				"debug": {
					"id": "c72cf2f652841410da2741e212dfece503011b539fb8e9c4faf73275d1e06b9a",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-09T18:23:30Z",
						"stash": {
							"name": "Custom $",
							"x": 9,
							"y": 1
						},
						"whisper": "@CobraLashDream Hi, I would like to buy your Starkonja's Head Silken Hood listed for 6 chaos in Metamorph (stash tab \"Custom $\"; position: left 10, top 2)",
						"account": {
							"name": "dreamrsx",
							"lastCharacterName": "CobraLashDream",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 6,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 2,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 3,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 73,
						"note": "~price 6 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+10%",
										1
									]
								],
								"displayMode": 0,
								"type": 6
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"789",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+58 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"118% increased Evasion Rating",
							"+81 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 789,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KUXVhbGl0eTogKzEwJSAoYXVnbWVudGVkKQ0KRXZhc2lvbiBSYXRpbmc6IDc4OSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHIEcgQiBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDczDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNTggdG8gRGV4dGVyaXR5DQo1MCUgcmVkdWNlZCBEYW1hZ2Ugd2hlbiBvbiBMb3cgTGlmZQ0KMTAlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjI1JSBpbmNyZWFzZWQgR2xvYmFsIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjExOCUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorODEgdG8gbWF4aW11bSBMaWZlDQoxNTAlIGluY3JlYXNlZCBHbG9iYWwgRXZhc2lvbiBSYXRpbmcgd2hlbiBvbiBMb3cgTGlmZQ0KLS0tLS0tLS0NClRoZXJlIHdhcyBubyBoZXJvIG1hZGUgb3V0IG9mIFN0YXJrb25qYSdzIGRlYXRoLA0KYnV0IG1lcmVseSBhIGxvbmcgc2xlZXAgbWFkZSBldGVybmFsLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA2IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +81 total maximum Life",
							"Sum: 162"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "91dafb82f9340c51f4ded6a061c6b7f54f59f5045d468fd0d8f793740c18737a",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 83,
				"sockets": [
					[
						"G",
						"B",
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 772"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+63 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"103% increased Evasion Rating",
					"+81 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +81 total maximum Life",
					"Sum: 162"
				],
				"accountText": "cgzell > Dadthatyou_Sum_TTV",
				"whisper": "@Dadthatyou_Sum_TTV Hi, I would like to buy your Starkonja's Head Silken Hood listed for 9 chaos in Metamorph (stash tab \"8\"; position: left 3, top 4)",
				"note": "~b/o 9 chaos",
				"weightValue": 162,
				"valueText": "162 + defense value 0 + value shift 0",
				"evalValue": 162,
				"priceText": "9 chaos",
				"evalPrice": 9,
				"debug": {
					"id": "91dafb82f9340c51f4ded6a061c6b7f54f59f5045d468fd0d8f793740c18737a",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-12T05:33:15Z",
						"stash": {
							"name": "8",
							"x": 2,
							"y": 3
						},
						"whisper": "@Dadthatyou_Sum_TTV Hi, I would like to buy your Starkonja's Head Silken Hood listed for 9 chaos in Metamorph (stash tab \"8\"; position: left 3, top 4)",
						"account": {
							"name": "cgzell",
							"lastCharacterName": "Dadthatyou_Sum_TTV",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 9,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 83,
						"note": "~b/o 9 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+20%",
										1
									]
								],
								"displayMode": 0,
								"type": 6
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"772",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+63 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"103% increased Evasion Rating",
							"+81 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 772,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KUXVhbGl0eTogKzIwJSAoYXVnbWVudGVkKQ0KRXZhc2lvbiBSYXRpbmc6IDc3MiAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUItRy1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgzDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNjMgdG8gRGV4dGVyaXR5DQo1MCUgcmVkdWNlZCBEYW1hZ2Ugd2hlbiBvbiBMb3cgTGlmZQ0KMTAlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjI1JSBpbmNyZWFzZWQgR2xvYmFsIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjEwMyUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorODEgdG8gbWF4aW11bSBMaWZlDQoxNTAlIGluY3JlYXNlZCBHbG9iYWwgRXZhc2lvbiBSYXRpbmcgd2hlbiBvbiBMb3cgTGlmZQ0KLS0tLS0tLS0NClRoZXJlIHdhcyBubyBoZXJvIG1hZGUgb3V0IG9mIFN0YXJrb25qYSdzIGRlYXRoLA0KYnV0IG1lcmVseSBhIGxvbmcgc2xlZXAgbWFkZSBldGVybmFsLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5iL28gOSBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +81 total maximum Life",
							"Sum: 162"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "b0792bbd10c7505d2a2a08437de54a69d677a133ab7c5f176fabe14042290bad",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 84,
				"sockets": [
					[
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 709"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+59 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"105% increased Evasion Rating",
					"+80 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +80 total maximum Life",
					"Sum: 160"
				],
				"accountText": "Kyno_the_Ryno > ggezARC",
				"whisper": "@ggezARC Hi, I would like to buy your Starkonja's Head Silken Hood listed for 5 chaos in Metamorph (stash tab \"Trade\"; position: left 3, top 8)",
				"note": "~price 5 chaos",
				"weightValue": 160,
				"valueText": "160 + defense value 0 + value shift 0",
				"evalValue": 160,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "b0792bbd10c7505d2a2a08437de54a69d677a133ab7c5f176fabe14042290bad",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-04T05:25:54Z",
						"stash": {
							"name": "Trade",
							"x": 2,
							"y": 7
						},
						"whisper": "@ggezARC Hi, I would like to buy your Starkonja's Head Silken Hood listed for 5 chaos in Metamorph (stash tab \"Trade\"; position: left 3, top 8)",
						"account": {
							"name": "Kyno_the_Ryno",
							"lastCharacterName": "ggezARC",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 84,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"709",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+59 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"105% increased Evasion Rating",
							"+80 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 709,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDcwOSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODQNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCis1OSB0byBEZXh0ZXJpdHkNCjUwJSByZWR1Y2VkIERhbWFnZSB3aGVuIG9uIExvdyBMaWZlDQoxMCUgaW5jcmVhc2VkIEF0dGFjayBTcGVlZA0KMjUlIGluY3JlYXNlZCBHbG9iYWwgQ3JpdGljYWwgU3RyaWtlIENoYW5jZQ0KMTA1JSBpbmNyZWFzZWQgRXZhc2lvbiBSYXRpbmcNCis4MCB0byBtYXhpbXVtIExpZmUNCjE1MCUgaW5jcmVhc2VkIEdsb2JhbCBFdmFzaW9uIFJhdGluZyB3aGVuIG9uIExvdyBMaWZlDQotLS0tLS0tLQ0KVGhlcmUgd2FzIG5vIGhlcm8gbWFkZSBvdXQgb2YgU3RhcmtvbmphJ3MgZGVhdGgsDQpidXQgbWVyZWx5IGEgbG9uZyBzbGVlcCBtYWRlIGV0ZXJuYWwuDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDUgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +80 total maximum Life",
							"Sum: 160"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "c2c2ffd72c416c94c5c2f409a055d5d4cc8b3d3fdb16f17c99d681082a354784",
				"name": "Starkonja's Head",
				"type": "Silken Hood",
				"itemLevel": 79,
				"sockets": [
					[
						"G",
						"G"
					],
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 796"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+60 to Dexterity",
					"50% reduced Damage when on Low Life",
					"10% increased Attack Speed",
					"25% increased Global Critical Strike Chance",
					"130% increased Evasion Rating",
					"+80 to maximum Life",
					"150% increased Global Evasion Rating when on Low Life"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +80 total maximum Life",
					"Sum: 160"
				],
				"accountText": "jkhhhh > 하드코어출격일호기",
				"whisper": "@하드코어출격일호기 안녕하세요, 변형(보관함 탭 \"판\", 위치: 왼쪽 11, 상단 1)에 10 chaos(으)로 올려놓은 스타콘자의 머리(Starkonja's Head) 실크 두건을(를) 구매하고 싶습니다",
				"note": "~price 10 chaos",
				"weightValue": 160,
				"valueText": "160 + defense value 0 + value shift 0",
				"evalValue": 160,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "c2c2ffd72c416c94c5c2f409a055d5d4cc8b3d3fdb16f17c99d681082a354784",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-26T13:01:20Z",
						"stash": {
							"name": "판",
							"x": 10,
							"y": 0
						},
						"whisper": "@하드코어출격일호기 안녕하세요, 변형(보관함 탭 \"판\", 위치: 왼쪽 11, 상단 1)에 10 chaos(으)로 올려놓은 스타콘자의 머리(Starkonja's Head) 실크 두건을(를) 구매하고 싶습니다",
						"account": {
							"name": "jkhhhh",
							"lastCharacterName": "하드코어출격일호기",
							"online": null,
							"language": "ko_KR"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Furryheadofstarkonja.png?scale=1&w=2&h=2&v=e540882692b90c8990e86806919ebf12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Starkonja's Head",
						"typeLine": "Silken Hood",
						"identified": true,
						"ilvl": 79,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"796",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+60 to Dexterity",
							"50% reduced Damage when on Low Life",
							"10% increased Attack Speed",
							"25% increased Global Critical Strike Chance",
							"130% increased Evasion Rating",
							"+80 to maximum Life",
							"150% increased Global Evasion Rating when on Low Life"
						],
						"flavourText": [
							"There was no hero made out of Starkonja's death,\r",
							"but merely a long sleep made eternal."
						],
						"frameType": 3,
						"extended": {
							"ev": 796,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 100
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_681332047",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_587431675",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1513447578",
												"min": -50,
												"max": -50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2695354435",
												"min": 150,
												"max": 150
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 100,
												"max": 130
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_1513447578",
										[
											4
										]
									],
									[
										"explicit.stat_681332047",
										[
											2
										]
									],
									[
										"explicit.stat_587431675",
										[
											3
										]
									],
									[
										"explicit.stat_124859000",
										[
											6
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_2695354435",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClN0YXJrb25qYSdzIEhlYWQNClNpbGtlbiBIb29kDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDc5NiAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2MA0KRGV4OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUcgQiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3OQ0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzYwIHRvIERleHRlcml0eQ0KNTAlIHJlZHVjZWQgRGFtYWdlIHdoZW4gb24gTG93IExpZmUNCjEwJSBpbmNyZWFzZWQgQXR0YWNrIFNwZWVkDQoyNSUgaW5jcmVhc2VkIEdsb2JhbCBDcml0aWNhbCBTdHJpa2UgQ2hhbmNlDQoxMzAlIGluY3JlYXNlZCBFdmFzaW9uIFJhdGluZw0KKzgwIHRvIG1heGltdW0gTGlmZQ0KMTUwJSBpbmNyZWFzZWQgR2xvYmFsIEV2YXNpb24gUmF0aW5nIHdoZW4gb24gTG93IExpZmUNCi0tLS0tLS0tDQpUaGVyZSB3YXMgbm8gaGVybyBtYWRlIG91dCBvZiBTdGFya29uamEncyBkZWF0aCwNCmJ1dCBtZXJlbHkgYSBsb25nIHNsZWVwIG1hZGUgZXRlcm5hbC4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMTAgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +80 total maximum Life",
							"Sum: 160"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "760f1e841ccbd4d26a3aa77580c2f014ec1228f73effa2eaddc1e46841fdd88b",
				"name": "Hate Halo",
				"type": "Magistrate Crown",
				"itemLevel": 70,
				"sockets": [
					[
						"R",
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 160",
					"energyShield 31"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+19 to Intelligence",
					"14% increased Global Accuracy Rating",
					"+80 to maximum Life",
					"23% increased Rarity of Items found",
					"10% increased Light Radius"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +80 total maximum Life",
					"Sum: 160"
				],
				"accountText": "Alissnbtbk > Karim_bada",
				"whisper": "@Karim_bada Hi, I would like to buy your Hate Halo Magistrate Crown listed for 10 chaos in Metamorph (stash tab \"9\"; position: left 11, top 8)",
				"note": "~price 10 chaos",
				"weightValue": 160,
				"valueText": "160 + defense value 0 + value shift 0",
				"evalValue": 160,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "760f1e841ccbd4d26a3aa77580c2f014ec1228f73effa2eaddc1e46841fdd88b",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-29T01:02:51Z",
						"stash": {
							"name": "9",
							"x": 10,
							"y": 7
						},
						"whisper": "@Karim_bada Hi, I would like to buy your Hate Halo Magistrate Crown listed for 10 chaos in Metamorph (stash tab \"9\"; position: left 11, top 8)",
						"account": {
							"name": "Alissnbtbk",
							"lastCharacterName": "Karim_bada",
							"online": {
								"league": "Metamorph"
							},
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStrInt8.png?scale=1&w=2&h=2&v=59807b6bf308473f389a97b37513c89e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Hate Halo",
						"typeLine": "Magistrate Crown",
						"identified": true,
						"ilvl": 70,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"160",
										0
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"31",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"58",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+19 to Intelligence",
							"14% increased Global Accuracy Rating",
							"+80 to maximum Life",
							"23% increased Rarity of Items found",
							"10% increased Light Radius"
						],
						"frameType": 2,
						"extended": {
							"ar": 160,
							"es": 31,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Dragon's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 19,
												"max": 24
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "of Light",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_624954515",
												"min": 12,
												"max": 15
											},
											{
												"hash": "explicit.stat_1263695895",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "of the Prodigy",
										"tier": "S8",
										"magnitudes": [
											{
												"hash": "explicit.stat_328541901",
												"min": 18,
												"max": 22
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_328541901",
										[
											3
										]
									],
									[
										"explicit.stat_624954515",
										[
											2
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_3917489142",
										[
											0
										]
									],
									[
										"explicit.stat_1263695895",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpIYXRlIEhhbG8NCk1hZ2lzdHJhdGUgQ3Jvd24NCi0tLS0tLS0tDQpBcm1vdXI6IDE2MA0KRW5lcmd5IFNoaWVsZDogMzENCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTgNClN0cjogNjQNCkludDogNjQNCi0tLS0tLS0tDQpTb2NrZXRzOiBSLVIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzANCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCisxOSB0byBJbnRlbGxpZ2VuY2UNCjE0JSBpbmNyZWFzZWQgR2xvYmFsIEFjY3VyYWN5IFJhdGluZw0KKzgwIHRvIG1heGltdW0gTGlmZQ0KMjMlIGluY3JlYXNlZCBSYXJpdHkgb2YgSXRlbXMgZm91bmQNCjEwJSBpbmNyZWFzZWQgTGlnaHQgUmFkaXVzDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDEwIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +80 total maximum Life",
							"Sum: 160"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "c9cac3e37caec3ed27fe6aaf71e65965984037f89394914c4b8007e1edbbe836",
				"name": "Hale Negator",
				"type": "Mind Cage",
				"itemLevel": 85,
				"sockets": [
					[
						"B",
						"B"
					],
					[
						"A"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"energyShield 69"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"Has 1 Abyssal Socket",
					"8% increased maximum Life",
					"+1 to Maximum Spirit Charges per Abyss Jewel affecting you",
					"Gain a Spirit Charge every second",
					"You lose all Spirit Charges when taking a Savage Hit",
					"Recover 3% of Life when you lose a Spirit Charge",
					"Recover 2% of Energy Shield when you lose a Spirit Charge"
				],
				"craftedMods": [],
				"pseudoMods": [
					"Sum: 160"
				],
				"accountText": "Rhobalass > Rhobalass",
				"whisper": "@Rhobalass Hi, I would like to buy your Hale Negator Mind Cage listed for 10 chaos in Metamorph (stash tab \"Sales 1\"; position: left 3, top 21)",
				"note": "~price 10 chaos",
				"weightValue": 160,
				"valueText": "160 + defense value 0 + value shift 0",
				"evalValue": 160,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "c9cac3e37caec3ed27fe6aaf71e65965984037f89394914c4b8007e1edbbe836",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-03T21:58:47Z",
						"stash": {
							"name": "Sales 1",
							"x": 2,
							"y": 20
						},
						"whisper": "@Rhobalass Hi, I would like to buy your Hale Negator Mind Cage listed for 10 chaos in Metamorph (stash tab \"Sales 1\"; position: left 3, top 21)",
						"account": {
							"name": "Rhobalass",
							"lastCharacterName": "Rhobalass",
							"online": {
								"league": "Metamorph"
							},
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HaleNegator.png?scale=1&w=2&h=2&v=d0550b36d52b5b957a74c967cae9638f",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "A",
								"sColour": "A"
							}
						],
						"name": "Hale Negator",
						"typeLine": "Mind Cage",
						"identified": true,
						"ilvl": 85,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"69",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"65",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"Has 1 Abyssal Socket",
							"8% increased maximum Life",
							"+1 to Maximum Spirit Charges per Abyss Jewel affecting you",
							"Gain a Spirit Charge every second",
							"You lose all Spirit Charges when taking a Savage Hit",
							"Recover 3% of Life when you lose a Spirit Charge",
							"Recover 2% of Energy Shield when you lose a Spirit Charge"
						],
						"flavourText": [
							"\"Feel the pain of ancient wounds.\r",
							"Feel the doom of dying souls.\""
						],
						"frameType": 3,
						"extended": {
							"es": 69,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3527617737",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_983749596",
												"min": 6,
												"max": 8
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_4053097676",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_328131617",
												"min": 1000,
												"max": 1000
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2663792764",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_305634887",
												"min": 2,
												"max": 3
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1996775727",
												"min": 2,
												"max": 3
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3527617737",
										[
											0
										]
									],
									[
										"explicit.stat_983749596",
										[
											1
										]
									],
									[
										"explicit.stat_4053097676",
										[
											2
										]
									],
									[
										"explicit.stat_328131617",
										[
											3
										]
									],
									[
										"explicit.stat_2663792764",
										[
											4
										]
									],
									[
										"explicit.stat_305634887",
										[
											5
										]
									],
									[
										"explicit.stat_1996775727",
										[
											6
										]
									]
								],
								"pseudo": [
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkhhbGUgTmVnYXRvcg0KTWluZCBDYWdlDQotLS0tLS0tLQ0KRW5lcmd5IFNoaWVsZDogNjkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjUNCkludDogMTM4DQotLS0tLS0tLQ0KU29ja2V0czogQi1CIEEgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODUNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCkhhcyAxIEFieXNzYWwgU29ja2V0DQo4JSBpbmNyZWFzZWQgbWF4aW11bSBMaWZlDQorMSB0byBNYXhpbXVtIFNwaXJpdCBDaGFyZ2VzIHBlciBBYnlzcyBKZXdlbCBhZmZlY3RpbmcgeW91DQpHYWluIGEgU3Bpcml0IENoYXJnZSBldmVyeSBzZWNvbmQNCllvdSBsb3NlIGFsbCBTcGlyaXQgQ2hhcmdlcyB3aGVuIHRha2luZyBhIFNhdmFnZSBIaXQNClJlY292ZXIgMyUgb2YgTGlmZSB3aGVuIHlvdSBsb3NlIGEgU3Bpcml0IENoYXJnZQ0KUmVjb3ZlciAyJSBvZiBFbmVyZ3kgU2hpZWxkIHdoZW4geW91IGxvc2UgYSBTcGlyaXQgQ2hhcmdlDQotLS0tLS0tLQ0KIkZlZWwgdGhlIHBhaW4gb2YgYW5jaWVudCB3b3VuZHMuDQpGZWVsIHRoZSBkb29tIG9mIGR5aW5nIHNvdWxzLiINCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMTAgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"Sum: 160"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "52d9f2db0c883fe7859f6ceb6514f3a55b89f1aabbcf189f0f5aba8d6f25d3be",
				"name": "Hrimnor's Resolve",
				"type": "Samite Helmet",
				"itemLevel": 82,
				"sockets": [
					[
						"R",
						"B"
					],
					[
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 599"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"35% increased Fire Damage",
					"117% increased Armour",
					"+64 to maximum Life",
					"+30% to Cold Resistance",
					"Cannot be Chilled or Frozen if you have used a Fire Skill Recently"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +30% total Elemental Resistance",
					"(pseudo) +64 total maximum Life",
					"Sum: 158"
				],
				"accountText": "solarstar14 > IIIIsolarisIIIII",
				"whisper": "@IIIIsolarisIIIII Hi, I would like to buy your Hrimnor's Resolve Samite Helmet listed for 10 chaos in Metamorph (stash tab \"8\"; position: left 3, top 8)",
				"note": "~price 10 chaos",
				"weightValue": 158,
				"valueText": "158 + defense value 0 + value shift 0",
				"evalValue": 158,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "52d9f2db0c883fe7859f6ceb6514f3a55b89f1aabbcf189f0f5aba8d6f25d3be",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-01T01:04:17Z",
						"stash": {
							"name": "8",
							"x": 2,
							"y": 7
						},
						"whisper": "@IIIIsolarisIIIII Hi, I would like to buy your Hrimnor's Resolve Samite Helmet listed for 10 chaos in Metamorph (stash tab \"8\"; position: left 3, top 8)",
						"account": {
							"name": "solarstar14",
							"lastCharacterName": "IIIIsolarisIIIII",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HrimnorsResolve.png?scale=1&w=2&h=2&v=1f6f41257a7b1634ebfad220ae5e9b99",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Hrimnor's Resolve",
						"typeLine": "Samite Helmet",
						"identified": true,
						"ilvl": 82,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"599",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"55",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"114",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"35% increased Fire Damage",
							"117% increased Armour",
							"+64 to maximum Life",
							"+30% to Cold Resistance",
							"Cannot be Chilled or Frozen if you have used a Fire Skill Recently"
						],
						"flavourText": [
							"Hrimnor's presence was as cold as ice,\r",
							"but his heart burned for vengeance."
						],
						"frameType": 3,
						"extended": {
							"ar": 599,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3962278098",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 30,
												"max": 30
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3483999943",
												"min": 0,
												"max": 0
											},
											{
												"hash": "explicit.stat_1514829491",
												"min": 0,
												"max": 0
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
												"min": 100,
												"max": 120
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3706656107",
												"min": 100,
												"max": 100
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3962278098",
										[
											0
										]
									],
									[
										"explicit.stat_1062208444",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											4
										]
									],
									[
										"explicit.stat_4220027924",
										[
											1
										]
									],
									[
										"explicit.stat_3706656107",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkhyaW1ub3IncyBSZXNvbHZlDQpTYW1pdGUgSGVsbWV0DQotLS0tLS0tLQ0KQXJtb3VyOiA1OTkgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTUNClN0cjogMTE0DQotLS0tLS0tLQ0KU29ja2V0czogUi1CIFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODINCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCjM1JSBpbmNyZWFzZWQgRmlyZSBEYW1hZ2UNCjExNyUgaW5jcmVhc2VkIEFybW91cg0KKzY0IHRvIG1heGltdW0gTGlmZQ0KKzMwJSB0byBDb2xkIFJlc2lzdGFuY2UNCkNhbm5vdCBiZSBDaGlsbGVkIG9yIEZyb3plbiBpZiB5b3UgaGF2ZSB1c2VkIGEgRmlyZSBTa2lsbCBSZWNlbnRseQ0KLS0tLS0tLS0NCkhyaW1ub3IncyBwcmVzZW5jZSB3YXMgYXMgY29sZCBhcyBpY2UsDQpidXQgaGlzIGhlYXJ0IGJ1cm5lZCBmb3IgdmVuZ2VhbmNlLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAxMCBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +30% total Elemental Resistance",
							"(pseudo) +64 total maximum Life",
							"Sum: 158"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "0abcb910d7b84a492dde6b5428479888731ddb99aa62007570627e5960071501",
				"name": "Ahn's Contempt",
				"type": "Praetor Crown",
				"itemLevel": 80,
				"sockets": [
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 386",
					"energyShield 115"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+17 to all Attributes",
					"140% increased Armour and Energy Shield",
					"+67 to maximum Life",
					"-1 to Maximum Power Charges",
					"Gain 10% of Physical Damage as Extra Chaos Damage while at maximum Power Charges",
					"You take 50% reduced Extra Damage from Critical Strikes while you have no Power Charges"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +75.5 total maximum Life",
					"Sum: 151"
				],
				"accountText": "Erodion > ThePainNeverEnds",
				"whisper": "@ThePainNeverEnds Hi, I would like to buy your Ahn's Contempt Praetor Crown listed for 10 chaos in Metamorph (stash tab \"22\"; position: left 1, top 11)",
				"note": "~price 10 chaos",
				"weightValue": 151,
				"valueText": "151 + defense value 0 + value shift 0",
				"evalValue": 151,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "0abcb910d7b84a492dde6b5428479888731ddb99aa62007570627e5960071501",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-24T21:04:15Z",
						"stash": {
							"name": "22",
							"x": 0,
							"y": 10
						},
						"whisper": "@ThePainNeverEnds Hi, I would like to buy your Ahn's Contempt Praetor Crown listed for 10 chaos in Metamorph (stash tab \"22\"; position: left 1, top 11)",
						"account": {
							"name": "Erodion",
							"lastCharacterName": "ThePainNeverEnds",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/AhnsContempt.png?scale=1&w=2&h=2&v=d2afddcd55a4ad62088b8e54f9b4cb02",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Ahn's Contempt",
						"typeLine": "Praetor Crown",
						"identified": true,
						"ilvl": 80,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"386",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"115",
										1
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"68",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"62",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"91",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+17 to all Attributes",
							"140% increased Armour and Energy Shield",
							"+67 to maximum Life",
							"-1 to Maximum Power Charges",
							"Gain 10% of Physical Damage as Extra Chaos Damage while at maximum Power Charges",
							"You take 50% reduced Extra Damage from Critical Strikes while you have no Power Charges"
						],
						"flavourText": [
							"\"To touch it is to be overwhelmed with the need to carve your name into history.\r",
							"A face no one remembers, yet once you have seen it, you will never forget.\"\r",
							"- Icius Perandus, Antiquities Collection, Item 48"
						],
						"frameType": 3,
						"extended": {
							"ar": 386,
							"es": 115,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3544527742",
												"min": 50,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3492297134",
												"min": 8,
												"max": 12
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3321629045",
												"min": 60,
												"max": 140
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 60,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1379411836",
												"min": 15,
												"max": 20
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_227523295",
												"min": -1,
												"max": -1
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_1379411836",
										[
											4
										]
									],
									[
										"explicit.stat_3321629045",
										[
											2
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3
										]
									],
									[
										"explicit.stat_227523295",
										[
											5
										]
									],
									[
										"explicit.stat_3492297134",
										[
											1
										]
									],
									[
										"explicit.stat_3544527742",
										[
											0
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkFobidzIENvbnRlbXB0DQpQcmFldG9yIENyb3duDQotLS0tLS0tLQ0KQXJtb3VyOiAzODYgKGF1Z21lbnRlZCkNCkVuZXJneSBTaGllbGQ6IDExNSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2OA0KU3RyOiA2Mg0KSW50OiA5MQ0KLS0tLS0tLS0NClNvY2tldHM6IEIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODANCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCisxNyB0byBhbGwgQXR0cmlidXRlcw0KMTQwJSBpbmNyZWFzZWQgQXJtb3VyIGFuZCBFbmVyZ3kgU2hpZWxkDQorNjcgdG8gbWF4aW11bSBMaWZlDQotMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMNCkdhaW4gMTAlIG9mIFBoeXNpY2FsIERhbWFnZSBhcyBFeHRyYSBDaGFvcyBEYW1hZ2Ugd2hpbGUgYXQgbWF4aW11bSBQb3dlciBDaGFyZ2VzDQpZb3UgdGFrZSA1MCUgcmVkdWNlZCBFeHRyYSBEYW1hZ2UgZnJvbSBDcml0aWNhbCBTdHJpa2VzIHdoaWxlIHlvdSBoYXZlIG5vIFBvd2VyIENoYXJnZXMNCi0tLS0tLS0tDQoiVG8gdG91Y2ggaXQgaXMgdG8gYmUgb3ZlcndoZWxtZWQgd2l0aCB0aGUgbmVlZCB0byBjYXJ2ZSB5b3VyIG5hbWUgaW50byBoaXN0b3J5Lg0KQSBmYWNlIG5vIG9uZSByZW1lbWJlcnMsIHlldCBvbmNlIHlvdSBoYXZlIHNlZW4gaXQsIHlvdSB3aWxsIG5ldmVyIGZvcmdldC4iDQotIEljaXVzIFBlcmFuZHVzLCBBbnRpcXVpdGllcyBDb2xsZWN0aW9uLCBJdGVtIDQ4DQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDEwIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +75.5 total maximum Life",
							"Sum: 151"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "8eb830fc2f3b69c13c1c919e3efe9231742e91fba45a086ee63fa02c31b836ed",
				"name": "Skullhead",
				"type": "Secutor Helm",
				"itemLevel": 71,
				"sockets": [
					[
						"B",
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 168",
					"evasion 168"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"65% increased Armour and Evasion",
					"+51 to maximum Life",
					"+59 to maximum Mana",
					"+16% to all Elemental Resistances",
					"Minions have +10% Chance to Block Attack Damage",
					"Minions have +323 to Armour",
					"Minions Regenerate 2% of Life per second"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +48% total Elemental Resistance",
					"(pseudo) +51 total maximum Life",
					"Sum: 150"
				],
				"accountText": "레이샤민 > csaerr",
				"whisper": "@csaerr 안녕하세요, 변형(보관함 탭 \"~price  chaos\", 위치: 왼쪽 7, 상단 1)에 3 chaos(으)로 올려놓은 두개골 투구(Skullhead) 호위병 샐릿을(를) 구매하고 싶습니다",
				"note": "~price 3 chaos",
				"weightValue": 150,
				"valueText": "150 + defense value 0 + value shift 0",
				"evalValue": 150,
				"priceText": "3 chaos",
				"evalPrice": 3,
				"debug": {
					"id": "8eb830fc2f3b69c13c1c919e3efe9231742e91fba45a086ee63fa02c31b836ed",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-01T10:17:05Z",
						"stash": {
							"name": "~price  chaos",
							"x": 6,
							"y": 0
						},
						"whisper": "@csaerr 안녕하세요, 변형(보관함 탭 \"~price  chaos\", 위치: 왼쪽 7, 상단 1)에 3 chaos(으)로 올려놓은 두개골 투구(Skullhead) 호위병 샐릿을(를) 구매하고 싶습니다",
						"account": {
							"name": "레이샤민",
							"lastCharacterName": "csaerr",
							"online": null,
							"language": "ko_KR"
						},
						"price": {
							"type": "~price",
							"amount": 3,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/Skullhead.png?scale=1&w=2&h=2&v=4c6467dabbf7489d0eb5750f9f36bc34",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Skullhead",
						"typeLine": "Secutor Helm",
						"identified": true,
						"ilvl": 71,
						"note": "~price 3 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+6%",
										1
									]
								],
								"displayMode": 0,
								"type": 6
							},
							{
								"name": "Armour",
								"values": [
									[
										"168",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"168",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"42",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"42",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"65% increased Armour and Evasion",
							"+51 to maximum Life",
							"+59 to maximum Mana",
							"+16% to all Elemental Resistances",
							"Minions have +10% Chance to Block Attack Damage",
							"Minions have +323 to Armour",
							"Minions Regenerate 2% of Life per second"
						],
						"flavourText": [
							"All that was left of the Iron King was his bleached skull.\r",
							"Yet it was all the Iron King needed."
						],
						"frameType": 3,
						"extended": {
							"ev": 168,
							"ar": 168,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2451402625",
												"min": 60,
												"max": 80
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2048970144",
												"min": 300,
												"max": 350
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2479683456",
												"min": 2,
												"max": 2
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3374054207",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 10,
												"max": 20
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_2451402625",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0
										]
									],
									[
										"explicit.stat_1050105434",
										[
											2
										]
									],
									[
										"explicit.stat_2901986750",
										[
											6
										]
									],
									[
										"explicit.stat_3374054207",
										[
											5
										]
									],
									[
										"explicit.stat_2048970144",
										[
											3
										]
									],
									[
										"explicit.stat_2479683456",
										[
											4
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClNrdWxsaGVhZA0KU2VjdXRvciBIZWxtDQotLS0tLS0tLQ0KUXVhbGl0eTogKzYlIChhdWdtZW50ZWQpDQpBcm1vdXI6IDE2OCAoYXVnbWVudGVkKQ0KRXZhc2lvbiBSYXRpbmc6IDE2OCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA0OA0KU3RyOiA0Mg0KRGV4OiA0Mg0KLS0tLS0tLS0NClNvY2tldHM6IEItUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3MQ0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KNjUlIGluY3JlYXNlZCBBcm1vdXIgYW5kIEV2YXNpb24NCis1MSB0byBtYXhpbXVtIExpZmUNCis1OSB0byBtYXhpbXVtIE1hbmENCisxNiUgdG8gYWxsIEVsZW1lbnRhbCBSZXNpc3RhbmNlcw0KTWluaW9ucyBoYXZlICsxMCUgQ2hhbmNlIHRvIEJsb2NrIEF0dGFjayBEYW1hZ2UNCk1pbmlvbnMgaGF2ZSArMzIzIHRvIEFybW91cg0KTWluaW9ucyBSZWdlbmVyYXRlIDIlIG9mIExpZmUgcGVyIHNlY29uZA0KLS0tLS0tLS0NCkFsbCB0aGF0IHdhcyBsZWZ0IG9mIHRoZSBJcm9uIEtpbmcgd2FzIGhpcyBibGVhY2hlZCBza3VsbC4NCllldCBpdCB3YXMgYWxsIHRoZSBJcm9uIEtpbmcgbmVlZGVkLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAzIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +48% total Elemental Resistance",
							"(pseudo) +51 total maximum Life",
							"Sum: 150"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "eadeee3130456467c6b36f441fd0c5961fa066ca08f59cf3d21133c7d444fe40",
				"name": "Gloom Salvation",
				"type": "Sinner Tricorne",
				"itemLevel": 75,
				"sockets": [
					[
						"G",
						"G",
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 369"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+37 to Intelligence",
					"+477 to Accuracy Rating",
					"+64 to maximum Life",
					"17% increased Rarity of Items found",
					"+18% to Lightning Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +18% total Elemental Resistance",
					"(pseudo) +64 total maximum Life",
					"Sum: 146"
				],
				"accountText": "lemajor777 > Humki_Metamorph",
				"whisper": "@Humki_Metamorph Hi, I would like to buy your Gloom Salvation Sinner Tricorne listed for 10 chaos in Metamorph (stash tab \"Trade\"; position: left 9, top 8)",
				"note": "~price 10 chaos",
				"weightValue": 146,
				"valueText": "146 + defense value 0 + value shift 0",
				"evalValue": 146,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "eadeee3130456467c6b36f441fd0c5961fa066ca08f59cf3d21133c7d444fe40",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-01T23:12:08Z",
						"stash": {
							"name": "Trade",
							"x": 8,
							"y": 7
						},
						"whisper": "@Humki_Metamorph Hi, I would like to buy your Gloom Salvation Sinner Tricorne listed for 10 chaos in Metamorph (stash tab \"Trade\"; position: left 9, top 8)",
						"account": {
							"name": "lemajor777",
							"lastCharacterName": "Humki_Metamorph",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDex9.png?scale=1&w=2&h=2&v=e6a9c07a19f574356cad3d7fc7506641",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Gloom Salvation",
						"typeLine": "Sinner Tricorne",
						"identified": true,
						"ilvl": 75,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"369",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+37 to Intelligence",
							"+477 to Accuracy Rating",
							"+64 to maximum Life",
							"17% increased Rarity of Items found",
							"+18% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 369,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Rotund",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 60,
												"max": 69
											}
										]
									},
									{
										"name": "of the Sage",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_328541901",
												"min": 33,
												"max": 37
											}
										]
									},
									{
										"name": "of the Storm",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 18,
												"max": 23
											}
										]
									},
									{
										"name": "of the Ranger",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_803737631",
												"min": 351,
												"max": 480
											}
										]
									},
									{
										"name": "Pirate's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 13,
												"max": 18
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_328541901",
										[
											1
										]
									],
									[
										"explicit.stat_803737631",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											4
										]
									],
									[
										"explicit.stat_1671376347",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpHbG9vbSBTYWx2YXRpb24NClNpbm5lciBUcmljb3JuZQ0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiAzNjkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjQNCkRleDogMTM4DQotLS0tLS0tLQ0KU29ja2V0czogRy1HLUctRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3NQ0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzM3IHRvIEludGVsbGlnZW5jZQ0KKzQ3NyB0byBBY2N1cmFjeSBSYXRpbmcNCis2NCB0byBtYXhpbXVtIExpZmUNCjE3JSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIGZvdW5kDQorMTglIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDEwIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +18% total Elemental Resistance",
							"(pseudo) +64 total maximum Life",
							"Sum: 146"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "0a642379b8bf8baa10d27f22b98dc0c7db1a3e560ce6bf35ccad1f8ed6744608",
				"name": "Bramble Dome",
				"type": "Fluted Bascinet",
				"itemLevel": 83,
				"sockets": [
					[
						"G"
					],
					[
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 160",
					"evasion 160"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+41 to Strength",
					"+21 to maximum Life",
					"+39% to Fire Resistance",
					"+23% to Lightning Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +62% total Elemental Resistance",
					"(pseudo) +41.5 total maximum Life",
					"Sum: 145"
				],
				"accountText": "Yartik > YartikDelvier",
				"whisper": "@YartikDelvier Hi, I would like to buy your Bramble Dome Fluted Bascinet listed for 10 chaos in Metamorph (stash tab \"Trade\"; position: left 11, top 7)",
				"note": "~price 10 chaos",
				"weightValue": 145,
				"valueText": "145 + defense value 0 + value shift 0",
				"evalValue": 145,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "0a642379b8bf8baa10d27f22b98dc0c7db1a3e560ce6bf35ccad1f8ed6744608",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-24T04:07:23Z",
						"stash": {
							"name": "Trade",
							"x": 10,
							"y": 6
						},
						"whisper": "@YartikDelvier Hi, I would like to buy your Bramble Dome Fluted Bascinet listed for 10 chaos in Metamorph (stash tab \"Trade\"; position: left 11, top 7)",
						"account": {
							"name": "Yartik",
							"lastCharacterName": "YartikDelvier",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStrDex8.png?scale=1&w=2&h=2&v=e041f1d30cb6e997023b09d2a822b7a6",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Bramble Dome",
						"typeLine": "Fluted Bascinet",
						"identified": true,
						"ilvl": 83,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"160",
										0
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"160",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"58",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+41 to Strength",
							"+21 to maximum Life",
							"+39% to Fire Resistance",
							"+23% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 160,
							"ar": 160,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Storm",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 18,
												"max": 23
											}
										]
									},
									{
										"name": "Sanguine",
										"tier": "P8",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 20,
												"max": 29
											}
										]
									},
									{
										"name": "of the Volcano",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 36,
												"max": 41
											}
										]
									},
									{
										"name": "of the Leviathan",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 38,
												"max": 42
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_3372524247",
										[
											2
										]
									],
									[
										"explicit.stat_1671376347",
										[
											0
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpCcmFtYmxlIERvbWUNCkZsdXRlZCBCYXNjaW5ldA0KLS0tLS0tLS0NCkFybW91cjogMTYwDQpFdmFzaW9uIFJhdGluZzogMTYwDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU4DQpTdHI6IDY0DQpEZXg6IDY0DQotLS0tLS0tLQ0KU29ja2V0czogRyBSIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgzDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNDEgdG8gU3RyZW5ndGgNCisyMSB0byBtYXhpbXVtIExpZmUNCiszOSUgdG8gRmlyZSBSZXNpc3RhbmNlDQorMjMlIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDEwIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +62% total Elemental Resistance",
							"(pseudo) +41.5 total maximum Life",
							"Sum: 145"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "217b5c3fba264779e31be4c4d2c48f81f9cbdad2921791e9bf29baeba8bf86e9",
				"name": "Brimstone Corona",
				"type": "Hubris Circlet",
				"itemLevel": 70,
				"sockets": [
					[
						"B",
						"B"
					],
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"energyShield 84"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+121 to Accuracy Rating",
					"+61 to maximum Life",
					"+53 to maximum Mana",
					"+20% to Lightning Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +20% total Elemental Resistance",
					"(pseudo) +61 total maximum Life",
					"Sum: 142"
				],
				"accountText": "seungbin789 > 이천이십년일월삼일사이온",
				"whisper": "@이천이십년일월삼일사이온 안녕하세요, 변형(보관함 탭 \"~price 1 chaos\", 위치: 왼쪽 6, 상단 6)에 1 chaos(으)로 올려놓은 유황 광환 자만의 관을(를) 구매하고 싶습니다",
				"weightValue": 142,
				"valueText": "142 + defense value 0 + value shift 0",
				"evalValue": 142,
				"priceText": "1 chaos",
				"evalPrice": 1,
				"debug": {
					"id": "217b5c3fba264779e31be4c4d2c48f81f9cbdad2921791e9bf29baeba8bf86e9",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-05T17:05:06Z",
						"stash": {
							"name": "~price 1 chaos",
							"x": 5,
							"y": 5
						},
						"whisper": "@이천이십년일월삼일사이온 안녕하세요, 변형(보관함 탭 \"~price 1 chaos\", 위치: 왼쪽 6, 상단 6)에 1 chaos(으)로 올려놓은 유황 광환 자만의 관을(를) 구매하고 싶습니다",
						"account": {
							"name": "seungbin789",
							"lastCharacterName": "이천이십년일월삼일사이온",
							"online": null,
							"language": "ko_KR"
						},
						"price": {
							"type": "~price",
							"amount": 1,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetInt11.png?scale=1&w=2&h=2&v=e785517985bfa266e348519edfc14485",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Brimstone Corona",
						"typeLine": "Hubris Circlet",
						"identified": true,
						"ilvl": 70,
						"corrupted": true,
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+10%",
										1
									]
								],
								"displayMode": 0,
								"type": 6
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"84",
										1
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"69",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"154",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+121 to Accuracy Rating",
							"+61 to maximum Life",
							"+53 to maximum Mana",
							"+20% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"es": 84,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Gentian",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 50,
												"max": 54
											}
										]
									},
									{
										"name": "of Precision",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_803737631",
												"min": 100,
												"max": 165
											}
										]
									},
									{
										"name": "Rotund",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 60,
												"max": 69
											}
										]
									},
									{
										"name": "of the Storm",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 18,
												"max": 23
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_803737631",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2
										]
									],
									[
										"explicit.stat_1050105434",
										[
											0
										]
									],
									[
										"explicit.stat_1671376347",
										[
											3
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpCcmltc3RvbmUgQ29yb25hDQpIdWJyaXMgQ2lyY2xldA0KLS0tLS0tLS0NClF1YWxpdHk6ICsxMCUgKGF1Z21lbnRlZCkNCkVuZXJneSBTaGllbGQ6IDg0IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY5DQpJbnQ6IDE1NA0KLS0tLS0tLS0NClNvY2tldHM6IEItQiBCIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcwDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMTIxIHRvIEFjY3VyYWN5IFJhdGluZw0KKzYxIHRvIG1heGltdW0gTGlmZQ0KKzUzIHRvIG1heGltdW0gTWFuYQ0KKzIwJSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0K"
						},
						"pseudoMods": [
							"(pseudo) +20% total Elemental Resistance",
							"(pseudo) +61 total maximum Life",
							"Sum: 142"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "941a0a028561b26de69d4451a56b6182a4c4c37d95c46b29e717c928e30d6f22",
				"name": "Hale Negator",
				"type": "Mind Cage",
				"itemLevel": 82,
				"sockets": [
					[
						"B",
						"B",
						"B"
					],
					[
						"A"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"energyShield 69"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"Has 1 Abyssal Socket",
					"7% increased maximum Life",
					"+1 to Maximum Spirit Charges per Abyss Jewel affecting you",
					"Gain a Spirit Charge every second",
					"You lose all Spirit Charges when taking a Savage Hit",
					"Recover 2% of Life when you lose a Spirit Charge",
					"Recover 3% of Energy Shield when you lose a Spirit Charge"
				],
				"craftedMods": [],
				"pseudoMods": [
					"Sum: 140"
				],
				"accountText": "Tiduxx > Tidduxixixix",
				"whisper": "@Tidduxixixix Hi, ich möchte 'Lebensinverter Gedankenkäfig' zum angebotenen Preis von 2 chaos in der Metamorph-Liga kaufen (Truhenfach \"~price 2 chaos\"; Position: 1 von links, 9 von oben)",
				"weightValue": 140,
				"valueText": "140 + defense value 0 + value shift 0",
				"evalValue": 140,
				"priceText": "2 chaos",
				"evalPrice": 2,
				"debug": {
					"id": "941a0a028561b26de69d4451a56b6182a4c4c37d95c46b29e717c928e30d6f22",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-05T10:35:41Z",
						"stash": {
							"name": "~price 2 chaos",
							"x": 0,
							"y": 8
						},
						"whisper": "@Tidduxixixix Hi, ich möchte 'Lebensinverter Gedankenkäfig' zum angebotenen Preis von 2 chaos in der Metamorph-Liga kaufen (Truhenfach \"~price 2 chaos\"; Position: 1 von links, 9 von oben)",
						"account": {
							"name": "Tiduxx",
							"lastCharacterName": "Tidduxixixix",
							"online": null,
							"language": "de_DE"
						},
						"price": {
							"type": "~price",
							"amount": 2,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HaleNegator.png?scale=1&w=2&h=2&v=d0550b36d52b5b957a74c967cae9638f",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "A",
								"sColour": "A"
							}
						],
						"name": "Hale Negator",
						"typeLine": "Mind Cage",
						"identified": true,
						"ilvl": 82,
						"corrupted": true,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"69",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"65",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"Has 1 Abyssal Socket",
							"7% increased maximum Life",
							"+1 to Maximum Spirit Charges per Abyss Jewel affecting you",
							"Gain a Spirit Charge every second",
							"You lose all Spirit Charges when taking a Savage Hit",
							"Recover 2% of Life when you lose a Spirit Charge",
							"Recover 3% of Energy Shield when you lose a Spirit Charge"
						],
						"flavourText": [
							"\"Feel the pain of ancient wounds.\r",
							"Feel the doom of dying souls.\""
						],
						"frameType": 3,
						"extended": {
							"es": 69,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3527617737",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_983749596",
												"min": 6,
												"max": 8
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_4053097676",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_328131617",
												"min": 1000,
												"max": 1000
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2663792764",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_305634887",
												"min": 2,
												"max": 3
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1996775727",
												"min": 2,
												"max": 3
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3527617737",
										[
											0
										]
									],
									[
										"explicit.stat_983749596",
										[
											1
										]
									],
									[
										"explicit.stat_4053097676",
										[
											2
										]
									],
									[
										"explicit.stat_328131617",
										[
											3
										]
									],
									[
										"explicit.stat_2663792764",
										[
											4
										]
									],
									[
										"explicit.stat_305634887",
										[
											5
										]
									],
									[
										"explicit.stat_1996775727",
										[
											6
										]
									]
								],
								"pseudo": [
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkhhbGUgTmVnYXRvcg0KTWluZCBDYWdlDQotLS0tLS0tLQ0KRW5lcmd5IFNoaWVsZDogNjkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjUNCkludDogMTM4DQotLS0tLS0tLQ0KU29ja2V0czogQi1CLUIgQSANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA4Mg0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KSGFzIDEgQWJ5c3NhbCBTb2NrZXQNCjclIGluY3JlYXNlZCBtYXhpbXVtIExpZmUNCisxIHRvIE1heGltdW0gU3Bpcml0IENoYXJnZXMgcGVyIEFieXNzIEpld2VsIGFmZmVjdGluZyB5b3UNCkdhaW4gYSBTcGlyaXQgQ2hhcmdlIGV2ZXJ5IHNlY29uZA0KWW91IGxvc2UgYWxsIFNwaXJpdCBDaGFyZ2VzIHdoZW4gdGFraW5nIGEgU2F2YWdlIEhpdA0KUmVjb3ZlciAyJSBvZiBMaWZlIHdoZW4geW91IGxvc2UgYSBTcGlyaXQgQ2hhcmdlDQpSZWNvdmVyIDMlIG9mIEVuZXJneSBTaGllbGQgd2hlbiB5b3UgbG9zZSBhIFNwaXJpdCBDaGFyZ2UNCi0tLS0tLS0tDQoiRmVlbCB0aGUgcGFpbiBvZiBhbmNpZW50IHdvdW5kcy4NCkZlZWwgdGhlIGRvb20gb2YgZHlpbmcgc291bHMuIg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0K"
						},
						"pseudoMods": [
							"Sum: 140"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "60b0eea74ad3d82d6b770beb8139af5f3f8753048ac95f6474aaf5599100925b",
				"name": "Hrimnor's Resolve",
				"type": "Samite Helmet",
				"itemLevel": 83,
				"sockets": [
					[
						"G",
						"R"
					],
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 580"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"30% increased Fire Damage",
					"110% increased Armour",
					"+54 to maximum Life",
					"+30% to Cold Resistance",
					"Cannot be Chilled or Frozen if you have used a Fire Skill Recently"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +30% total Elemental Resistance",
					"(pseudo) +54 total maximum Life",
					"Sum: 138"
				],
				"accountText": "sunyc > black_Ninja",
				"whisper": "@black_Ninja Hi, I would like to buy your Hrimnor's Resolve Samite Helmet listed for 10 chaos in Metamorph (stash tab \"67\"; position: left 3, top 11)",
				"note": "~price 10 chaos",
				"weightValue": 138,
				"valueText": "138 + defense value 0 + value shift 0",
				"evalValue": 138,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "60b0eea74ad3d82d6b770beb8139af5f3f8753048ac95f6474aaf5599100925b",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-16T18:05:25Z",
						"stash": {
							"name": "67",
							"x": 2,
							"y": 10
						},
						"whisper": "@black_Ninja Hi, I would like to buy your Hrimnor's Resolve Samite Helmet listed for 10 chaos in Metamorph (stash tab \"67\"; position: left 3, top 11)",
						"account": {
							"name": "sunyc",
							"lastCharacterName": "black_Ninja",
							"online": {
								"league": "Metamorph",
								"status": "afk"
							},
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HrimnorsResolve.png?scale=1&w=2&h=2&v=1f6f41257a7b1634ebfad220ae5e9b99",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Hrimnor's Resolve",
						"typeLine": "Samite Helmet",
						"identified": true,
						"ilvl": 83,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"580",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"55",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"114",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"30% increased Fire Damage",
							"110% increased Armour",
							"+54 to maximum Life",
							"+30% to Cold Resistance",
							"Cannot be Chilled or Frozen if you have used a Fire Skill Recently"
						],
						"flavourText": [
							"Hrimnor's presence was as cold as ice,\r",
							"but his heart burned for vengeance."
						],
						"frameType": 3,
						"extended": {
							"ar": 580,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3962278098",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 30,
												"max": 30
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3483999943",
												"min": 0,
												"max": 0
											},
											{
												"hash": "explicit.stat_1514829491",
												"min": 0,
												"max": 0
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
												"min": 100,
												"max": 120
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 50,
												"max": 70
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3706656107",
												"min": 100,
												"max": 100
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3962278098",
										[
											0
										]
									],
									[
										"explicit.stat_1062208444",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											4
										]
									],
									[
										"explicit.stat_4220027924",
										[
											1
										]
									],
									[
										"explicit.stat_3706656107",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkhyaW1ub3IncyBSZXNvbHZlDQpTYW1pdGUgSGVsbWV0DQotLS0tLS0tLQ0KQXJtb3VyOiA1ODAgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTUNClN0cjogMTE0DQotLS0tLS0tLQ0KU29ja2V0czogRy1SIEIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODMNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCjMwJSBpbmNyZWFzZWQgRmlyZSBEYW1hZ2UNCjExMCUgaW5jcmVhc2VkIEFybW91cg0KKzU0IHRvIG1heGltdW0gTGlmZQ0KKzMwJSB0byBDb2xkIFJlc2lzdGFuY2UNCkNhbm5vdCBiZSBDaGlsbGVkIG9yIEZyb3plbiBpZiB5b3UgaGF2ZSB1c2VkIGEgRmlyZSBTa2lsbCBSZWNlbnRseQ0KLS0tLS0tLS0NCkhyaW1ub3IncyBwcmVzZW5jZSB3YXMgYXMgY29sZCBhcyBpY2UsDQpidXQgaGlzIGhlYXJ0IGJ1cm5lZCBmb3IgdmVuZ2VhbmNlLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAxMCBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +30% total Elemental Resistance",
							"(pseudo) +54 total maximum Life",
							"Sum: 138"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "0d3445c1c913be505821ec7c66af78c9a6df00b27d29f051da15a35e017795e3",
				"name": "Corpse Keep",
				"type": "Magistrate Crown",
				"itemLevel": 70,
				"sockets": [
					[
						"R",
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 160",
					"energyShield 31"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+39 to Intelligence",
					"+55 to maximum Life",
					"16% increased Rarity of Items found",
					"+22% to Lightning Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +22% total Elemental Resistance",
					"(pseudo) +55 total maximum Life",
					"Sum: 132"
				],
				"accountText": "IComeYouDie > Tamira_IceDarkRanger",
				"whisper": "@Tamira_IceDarkRanger Hi, I would like to buy your Corpse Keep Magistrate Crown listed for 2 chaos in Metamorph (stash tab \"Sell3\"; position: left 5, top 9)",
				"note": "~price 2 chaos",
				"weightValue": 132,
				"valueText": "132 + defense value 0 + value shift 0",
				"evalValue": 132,
				"priceText": "2 chaos",
				"evalPrice": 2,
				"debug": {
					"id": "0d3445c1c913be505821ec7c66af78c9a6df00b27d29f051da15a35e017795e3",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-02T13:05:36Z",
						"stash": {
							"name": "Sell3",
							"x": 4,
							"y": 8
						},
						"whisper": "@Tamira_IceDarkRanger Hi, I would like to buy your Corpse Keep Magistrate Crown listed for 2 chaos in Metamorph (stash tab \"Sell3\"; position: left 5, top 9)",
						"account": {
							"name": "IComeYouDie",
							"lastCharacterName": "Tamira_IceDarkRanger",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 2,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStrInt8.png?scale=1&w=2&h=2&v=59807b6bf308473f389a97b37513c89e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Corpse Keep",
						"typeLine": "Magistrate Crown",
						"identified": true,
						"ilvl": 70,
						"note": "~price 2 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"160",
										0
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"31",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"58",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+39 to Intelligence",
							"+55 to maximum Life",
							"16% increased Rarity of Items found",
							"+22% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 160,
							"es": 31,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Savant",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_328541901",
												"min": 38,
												"max": 42
											}
										]
									},
									{
										"name": "Robust",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 50,
												"max": 59
											}
										]
									},
									{
										"name": "of Archaeology",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 15,
												"max": 20
											}
										]
									},
									{
										"name": "of the Storm",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 18,
												"max": 23
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_328541901",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_3917489142",
										[
											2
										]
									],
									[
										"explicit.stat_1671376347",
										[
											3
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpDb3Jwc2UgS2VlcA0KTWFnaXN0cmF0ZSBDcm93bg0KLS0tLS0tLS0NCkFybW91cjogMTYwDQpFbmVyZ3kgU2hpZWxkOiAzMQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1OA0KU3RyOiA2NA0KSW50OiA2NA0KLS0tLS0tLS0NClNvY2tldHM6IFItQiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3MA0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzM5IHRvIEludGVsbGlnZW5jZQ0KKzU1IHRvIG1heGltdW0gTGlmZQ0KMTYlIGluY3JlYXNlZCBSYXJpdHkgb2YgSXRlbXMgZm91bmQNCisyMiUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMiBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +22% total Elemental Resistance",
							"(pseudo) +55 total maximum Life",
							"Sum: 132"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "4612f4a0068d6eb450545bff50c0f07e8c2900621f07a3ad9e6071853d0c49db",
				"name": "Rage Corona",
				"type": "Harlequin Mask",
				"itemLevel": 72,
				"sockets": [
					[
						"B",
						"B"
					],
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 157",
					"energyShield 31"
				],
				"enchantMods": [
					"20% reduced Spectral Throw Projectile Deceleration"
				],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+36 to Dexterity",
					"+258 to Accuracy Rating",
					"+66 to maximum Life",
					"13% increased Stun and Block Recovery"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +66 total maximum Life",
					"Sum: 132"
				],
				"accountText": "wrech > ZombieWrech",
				"whisper": "@ZombieWrech Hi, I would like to buy your Rage Corona Harlequin Mask listed for 10 chaos in Metamorph (stash tab \"$\"; position: left 7, top 1)",
				"note": "~b/o 10 chaos",
				"weightValue": 132,
				"valueText": "132 + defense value 0 + value shift 0",
				"evalValue": 132,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "4612f4a0068d6eb450545bff50c0f07e8c2900621f07a3ad9e6071853d0c49db",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-18T13:28:57Z",
						"stash": {
							"name": "$",
							"x": 6,
							"y": 0
						},
						"whisper": "@ZombieWrech Hi, I would like to buy your Rage Corona Harlequin Mask listed for 10 chaos in Metamorph (stash tab \"$\"; position: left 7, top 1)",
						"account": {
							"name": "wrech",
							"lastCharacterName": "ZombieWrech",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexInt9.png?scale=1&w=2&h=2&v=f16dbb804ba232a15e23b3539c67b774",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Rage Corona",
						"typeLine": "Harlequin Mask",
						"identified": true,
						"ilvl": 72,
						"note": "~b/o 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"157",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"31",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"57",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+36 to Dexterity",
							"+258 to Accuracy Rating",
							"+66 to maximum Life",
							"13% increased Stun and Block Recovery"
						],
						"enchantMods": [
							"20% reduced Spectral Throw Projectile Deceleration"
						],
						"frameType": 2,
						"extended": {
							"ev": 157,
							"es": 31,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"enchant": [
									{
										"name": "Enchantment Spectral Throw Projectile Deceleration 1",
										"tier": "",
										"magnitudes": [
											{
												"hash": "enchant.stat_444686294",
												"min": 20,
												"max": 20
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Leopard",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 33,
												"max": 37
											}
										]
									},
									{
										"name": "of the Marksman",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_803737631",
												"min": 251,
												"max": 350
											}
										]
									},
									{
										"name": "of Thick Skin",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_2511217560",
												"min": 11,
												"max": 13
											}
										]
									},
									{
										"name": "Rotund",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 60,
												"max": 69
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"enchant": [
									[
										"enchant.stat_444686294",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_803737631",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3
										]
									],
									[
										"explicit.stat_2511217560",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpSYWdlIENvcm9uYQ0KSGFybGVxdWluIE1hc2sNCi0tLS0tLS0tDQpFdmFzaW9uIFJhdGluZzogMTU3DQpFbmVyZ3kgU2hpZWxkOiAzMQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1Nw0KRGV4OiA2NA0KSW50OiA2NA0KLS0tLS0tLS0NClNvY2tldHM6IEItQiBCIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcyDQotLS0tLS0tLQ0KMjAlIHJlZHVjZWQgU3BlY3RyYWwgVGhyb3cgUHJvamVjdGlsZSBEZWNlbGVyYXRpb24NCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCiszNiB0byBEZXh0ZXJpdHkNCisyNTggdG8gQWNjdXJhY3kgUmF0aW5nDQorNjYgdG8gbWF4aW11bSBMaWZlDQoxMyUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfmIvbyAxMCBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +66 total maximum Life",
							"Sum: 132"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "7b2e0b21d3456676e5daa9e6f261b52fcdc1f421191d57a029091b5a4892b8b4",
				"name": "Torment Visage",
				"type": "Nightmare Bascinet",
				"itemLevel": 75,
				"sockets": [
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 215",
					"evasion 310"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+19 to Strength",
					"33% increased Armour and Evasion",
					"+35 to maximum Life",
					"Regenerate 6.1 Life per second",
					"+40% to Lightning Resistance",
					"15% increased Stun and Block Recovery",
					"Reflects 9 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +40% total Elemental Resistance",
					"(pseudo) +44.5 total maximum Life",
					"Sum: 129"
				],
				"accountText": "Maukka4ever > MetamoMancer",
				"whisper": "@MetamoMancer Hi, I would like to buy your Torment Visage Nightmare Bascinet listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 7, top 4)",
				"weightValue": 129,
				"valueText": "129 + defense value 0 + value shift 0",
				"evalValue": 129,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "7b2e0b21d3456676e5daa9e6f261b52fcdc1f421191d57a029091b5a4892b8b4",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-29T19:24:47Z",
						"stash": {
							"name": "~b/o 5 chaos",
							"x": 6,
							"y": 3
						},
						"whisper": "@MetamoMancer Hi, I would like to buy your Torment Visage Nightmare Bascinet listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 7, top 4)",
						"account": {
							"name": "Maukka4ever",
							"lastCharacterName": "MetamoMancer",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStrDex10.png?scale=1&w=2&h=2&v=0a540f285248cdb64d4607186e348e3d",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Torment Visage",
						"typeLine": "Nightmare Bascinet",
						"identified": true,
						"ilvl": 75,
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"215",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"310",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"67",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"62",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"85",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+19 to Strength",
							"33% increased Armour and Evasion",
							"+35 to maximum Life",
							"Regenerate 6.1 Life per second",
							"+40% to Lightning Resistance",
							"15% increased Stun and Block Recovery",
							"Reflects 9 Physical Damage to Melee Attackers"
						],
						"frameType": 2,
						"extended": {
							"ev": 310,
							"ar": 215,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Stalwart",
										"tier": "P7",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 30,
												"max": 39
											}
										]
									},
									{
										"name": "of the Maelstrom",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 36,
												"max": 41
											}
										]
									},
									{
										"name": "of the Bear",
										"tier": "S7",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 18,
												"max": 22
											}
										]
									},
									{
										"name": "of the Flatworm",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_3325883026",
												"min": 4,
												"max": 7
											}
										]
									},
									{
										"name": "Elephant's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_2451402625",
												"min": 33,
												"max": 38
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 14,
												"max": 15
											}
										]
									},
									{
										"name": "Spiny",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 5,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											2
										]
									],
									[
										"explicit.stat_2451402625",
										[
											4
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0
										]
									],
									[
										"explicit.stat_3325883026",
										[
											3
										]
									],
									[
										"explicit.stat_1671376347",
										[
											1
										]
									],
									[
										"explicit.stat_2511217560",
										[
											4
										]
									],
									[
										"explicit.stat_3767873853",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpUb3JtZW50IFZpc2FnZQ0KTmlnaHRtYXJlIEJhc2NpbmV0DQotLS0tLS0tLQ0KQXJtb3VyOiAyMTUgKGF1Z21lbnRlZCkNCkV2YXNpb24gUmF0aW5nOiAzMTAgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjcNClN0cjogNjINCkRleDogODUNCi0tLS0tLS0tDQpTb2NrZXRzOiBCIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc1DQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMTkgdG8gU3RyZW5ndGgNCjMzJSBpbmNyZWFzZWQgQXJtb3VyIGFuZCBFdmFzaW9uDQorMzUgdG8gbWF4aW11bSBMaWZlDQpSZWdlbmVyYXRlIDYuMSBMaWZlIHBlciBzZWNvbmQNCis0MCUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCjE1JSBpbmNyZWFzZWQgU3R1biBhbmQgQmxvY2sgUmVjb3ZlcnkNClJlZmxlY3RzIDkgUGh5c2ljYWwgRGFtYWdlIHRvIE1lbGVlIEF0dGFja2Vycw0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0K"
						},
						"pseudoMods": [
							"(pseudo) +40% total Elemental Resistance",
							"(pseudo) +44.5 total maximum Life",
							"Sum: 129"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "6bc5c44ee88ca488ccc9039543e3c634e6533c1fd53e5ad34b16ef2ed6c0e03d",
				"name": "Rage Cowl",
				"type": "Fluted Bascinet",
				"itemLevel": 81,
				"sockets": [
					[
						"G",
						"G"
					],
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 339",
					"evasion 373"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+48 to Strength",
					"+294 to Accuracy Rating",
					"+48 to Armour",
					"+69 to Evasion Rating",
					"50% increased Armour and Evasion",
					"+40 to maximum Life",
					"14% increased Rarity of Items found"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +64 total maximum Life",
					"Sum: 128"
				],
				"accountText": "J0unin > xKyuubei",
				"whisper": "@xKyuubei Hi, I would like to buy your Rage Cowl Fluted Bascinet listed for 5 chaos in Metamorph (stash tab \"R\"; position: left 2, top 4)",
				"note": "~price 5 chaos",
				"weightValue": 128,
				"valueText": "128 + defense value 0 + value shift 0",
				"evalValue": 128,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "6bc5c44ee88ca488ccc9039543e3c634e6533c1fd53e5ad34b16ef2ed6c0e03d",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-12T10:46:21Z",
						"stash": {
							"name": "R",
							"x": 1,
							"y": 3
						},
						"whisper": "@xKyuubei Hi, I would like to buy your Rage Cowl Fluted Bascinet listed for 5 chaos in Metamorph (stash tab \"R\"; position: left 2, top 4)",
						"account": {
							"name": "J0unin",
							"lastCharacterName": "xKyuubei",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStrDex8.png?scale=1&w=2&h=2&v=e041f1d30cb6e997023b09d2a822b7a6",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Rage Cowl",
						"typeLine": "Fluted Bascinet",
						"identified": true,
						"ilvl": 81,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+13%",
										1
									]
								],
								"displayMode": 0,
								"type": 6
							},
							{
								"name": "Armour",
								"values": [
									[
										"339",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"373",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"59",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+48 to Strength",
							"+294 to Accuracy Rating",
							"+48 to Armour",
							"+69 to Evasion Rating",
							"50% increased Armour and Evasion",
							"+40 to maximum Life",
							"14% increased Rarity of Items found"
						],
						"frameType": 2,
						"extended": {
							"ev": 373,
							"ar": 339,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Titan",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 43,
												"max": 50
											}
										]
									},
									{
										"name": "of the Marksman",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_803737631",
												"min": 251,
												"max": 350
											}
										]
									},
									{
										"name": "of Raiding",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 11,
												"max": 14
											}
										]
									},
									{
										"name": "Fencer's",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_2451402625",
												"min": 43,
												"max": 55
											}
										]
									},
									{
										"name": "Stout",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 40,
												"max": 49
											}
										]
									},
									{
										"name": "Durable",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 46,
												"max": 103
											},
											{
												"hash": "explicit.stat_53045048",
												"min": 46,
												"max": 103
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											0
										]
									],
									[
										"explicit.stat_803737631",
										[
											1
										]
									],
									[
										"explicit.stat_3484657501",
										[
											5
										]
									],
									[
										"explicit.stat_53045048",
										[
											5
										]
									],
									[
										"explicit.stat_2451402625",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											4
										]
									],
									[
										"explicit.stat_3917489142",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpSYWdlIENvd2wNCkZsdXRlZCBCYXNjaW5ldA0KLS0tLS0tLS0NClF1YWxpdHk6ICsxMyUgKGF1Z21lbnRlZCkNCkFybW91cjogMzM5IChhdWdtZW50ZWQpDQpFdmFzaW9uIFJhdGluZzogMzczIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU5DQpTdHI6IDY0DQpEZXg6IDY0DQotLS0tLS0tLQ0KU29ja2V0czogRy1HIEcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODENCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCis0OCB0byBTdHJlbmd0aA0KKzI5NCB0byBBY2N1cmFjeSBSYXRpbmcNCis0OCB0byBBcm1vdXINCis2OSB0byBFdmFzaW9uIFJhdGluZw0KNTAlIGluY3JlYXNlZCBBcm1vdXIgYW5kIEV2YXNpb24NCis0MCB0byBtYXhpbXVtIExpZmUNCjE0JSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIGZvdW5kDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDUgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +64 total maximum Life",
							"Sum: 128"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "cc610a45070a967f78bdfd0444534c29286599cf62f43efc63708442ccef1f06",
				"name": "Corpse Brow",
				"type": "Hubris Circlet",
				"itemLevel": 81,
				"sockets": [
					[
						"B"
					],
					[
						"B"
					],
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"energyShield 90"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+14 to maximum Energy Shield",
					"+62 to maximum Life",
					"34% increased Rarity of Items found"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +62 total maximum Life",
					"Sum: 124"
				],
				"accountText": "DireDrop > METAHURT",
				"whisper": "@METAHURT Hi, I would like to buy your Corpse Brow Hubris Circlet listed for 5 chaos in Metamorph (stash tab \"SALE2\"; position: left 1, top 10)",
				"note": "~price 5 chaos",
				"weightValue": 124,
				"valueText": "124 + defense value 0 + value shift 0",
				"evalValue": 124,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "cc610a45070a967f78bdfd0444534c29286599cf62f43efc63708442ccef1f06",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-05T07:53:33Z",
						"stash": {
							"name": "SALE2",
							"x": 0,
							"y": 9
						},
						"whisper": "@METAHURT Hi, I would like to buy your Corpse Brow Hubris Circlet listed for 5 chaos in Metamorph (stash tab \"SALE2\"; position: left 1, top 10)",
						"account": {
							"name": "DireDrop",
							"lastCharacterName": "METAHURT",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetInt11.png?scale=1&w=2&h=2&v=e785517985bfa266e348519edfc14485",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 2,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Corpse Brow",
						"typeLine": "Hubris Circlet",
						"identified": true,
						"ilvl": 81,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"90",
										1
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"69",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"154",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+14 to maximum Energy Shield",
							"+62 to maximum Life",
							"34% increased Rarity of Items found"
						],
						"frameType": 2,
						"extended": {
							"es": 90,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of Archaeology",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 15,
												"max": 20
											}
										]
									},
									{
										"name": "Pirate's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 13,
												"max": 18
											}
										]
									},
									{
										"name": "Glittering",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_4052037485",
												"min": 12,
												"max": 16
											}
										]
									},
									{
										"name": "Rotund",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 60,
												"max": 69
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_4052037485",
										[
											2
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3
										]
									],
									[
										"explicit.stat_3917489142",
										[
											0,
											1
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpDb3Jwc2UgQnJvdw0KSHVicmlzIENpcmNsZXQNCi0tLS0tLS0tDQpFbmVyZ3kgU2hpZWxkOiA5MCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2OQ0KSW50OiAxNTQNCi0tLS0tLS0tDQpTb2NrZXRzOiBCIEIgQiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA4MQ0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzE0IHRvIG1heGltdW0gRW5lcmd5IFNoaWVsZA0KKzYyIHRvIG1heGltdW0gTGlmZQ0KMzQlIGluY3JlYXNlZCBSYXJpdHkgb2YgSXRlbXMgZm91bmQNCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgNSBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +62 total maximum Life",
							"Sum: 124"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "06560effa1d1acc770e88deabfaf824cb2614e1d114dc0d16bf3112afbf21e0d",
				"name": "Brimstone Cowl",
				"type": "Eternal Burgonet",
				"itemLevel": 85,
				"sockets": [
					[
						"R",
						"G"
					],
					[
						"R",
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 470"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+411 to Accuracy Rating",
					"26% increased Armour",
					"+61 to maximum Life",
					"Regenerate 7.3 Life per second",
					"10% increased Stun and Block Recovery"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +61 total maximum Life",
					"Sum: 122"
				],
				"accountText": "M4RKJ0K3R > JaiminhoMolotov",
				"whisper": "@JaiminhoMolotov Hi, I would like to buy your Brimstone Cowl Eternal Burgonet listed for 6 chaos in Metamorph (stash tab \"~b/o 6 chaos\"; position: left 5, top 7)",
				"weightValue": 122,
				"valueText": "122 + defense value 0 + value shift 0",
				"evalValue": 122,
				"priceText": "6 chaos",
				"evalPrice": 6,
				"debug": {
					"id": "06560effa1d1acc770e88deabfaf824cb2614e1d114dc0d16bf3112afbf21e0d",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-28T23:45:46Z",
						"stash": {
							"name": "~b/o 6 chaos",
							"x": 4,
							"y": 6
						},
						"whisper": "@JaiminhoMolotov Hi, I would like to buy your Brimstone Cowl Eternal Burgonet listed for 6 chaos in Metamorph (stash tab \"~b/o 6 chaos\"; position: left 5, top 7)",
						"account": {
							"name": "M4RKJ0K3R",
							"lastCharacterName": "JaiminhoMolotov",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 6,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStr11.png?scale=1&w=2&h=2&v=342bd7655177cacda3928e191d7eb83c",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Brimstone Cowl",
						"typeLine": "Eternal Burgonet",
						"identified": true,
						"ilvl": 85,
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"470",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"69",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+411 to Accuracy Rating",
							"26% increased Armour",
							"+61 to maximum Life",
							"Regenerate 7.3 Life per second",
							"10% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 470,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Rotund",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 60,
												"max": 69
											}
										]
									},
									{
										"name": "Armadillo's",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
												"min": 21,
												"max": 26
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 10,
												"max": 11
											}
										]
									},
									{
										"name": "of the Ranger",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_803737631",
												"min": 351,
												"max": 480
											}
										]
									},
									{
										"name": "of the Starfish",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3325883026",
												"min": 7,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_803737631",
										[
											2
										]
									],
									[
										"explicit.stat_1062208444",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0
										]
									],
									[
										"explicit.stat_3325883026",
										[
											3
										]
									],
									[
										"explicit.stat_2511217560",
										[
											1
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpCcmltc3RvbmUgQ293bA0KRXRlcm5hbCBCdXJnb25ldA0KLS0tLS0tLS0NCkFybW91cjogNDcwIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY5DQpTdHI6IDEzOA0KLS0tLS0tLS0NClNvY2tldHM6IFItRyBSLVIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODUNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCis0MTEgdG8gQWNjdXJhY3kgUmF0aW5nDQoyNiUgaW5jcmVhc2VkIEFybW91cg0KKzYxIHRvIG1heGltdW0gTGlmZQ0KUmVnZW5lcmF0ZSA3LjMgTGlmZSBwZXIgc2Vjb25kDQoxMCUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQotLS0tLS0tLQ0KQ29ycnVwdGVkDQo="
						},
						"pseudoMods": [
							"(pseudo) +61 total maximum Life",
							"Sum: 122"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "2edb57819e3879ec75512ed52f7228b37bc563c1fa79bd97fb7987d209b5cdf4",
				"name": "Craiceann's Chitin",
				"type": "Magistrate Crown",
				"itemLevel": 83,
				"sockets": [
					[
						"B"
					],
					[
						"B",
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 386",
					"energyShield 75"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"4% Chance to Block Spell Damage",
					"141% increased Armour and Energy Shield",
					"6% increased maximum Life",
					"Cannot lose Crab Barriers if you have lost Crab Barriers Recently",
					"+3% Chance to Block Attack Damage while you have at least 5 Crab Barriers",
					"+5% Chance to Block Attack Damage while you have at least 10 Crab Barriers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"Sum: 120"
				],
				"accountText": "darling87 > Whisky_Poison",
				"whisper": "@Whisky_Poison Hi, I would like to buy your Craiceann's Chitin Magistrate Crown listed for 5 chaos in Metamorph (stash tab \"shop\"; position: left 7, top 16)",
				"note": "~price 5 chaos",
				"weightValue": 120,
				"valueText": "120 + defense value 0 + value shift 0",
				"evalValue": 120,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "2edb57819e3879ec75512ed52f7228b37bc563c1fa79bd97fb7987d209b5cdf4",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-27T06:48:00Z",
						"stash": {
							"name": "shop",
							"x": 6,
							"y": 15
						},
						"whisper": "@Whisky_Poison Hi, I would like to buy your Craiceann's Chitin Magistrate Crown listed for 5 chaos in Metamorph (stash tab \"shop\"; position: left 7, top 16)",
						"account": {
							"name": "darling87",
							"lastCharacterName": "Whisky_Poison",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/CrabUniqueHelmet.png?scale=1&w=2&h=2&v=9d8b353bd53e739027a1f40aa9cde8da",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Craiceann's Chitin",
						"typeLine": "Magistrate Crown",
						"identified": true,
						"ilvl": 83,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"386",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"75",
										1
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"58",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"4% Chance to Block Spell Damage",
							"141% increased Armour and Energy Shield",
							"6% increased maximum Life",
							"Cannot lose Crab Barriers if you have lost Crab Barriers Recently",
							"+3% Chance to Block Attack Damage while you have at least 5 Crab Barriers",
							"+5% Chance to Block Attack Damage while you have at least 10 Crab Barriers"
						],
						"flavourText": [
							"When the rains come, we cower beneath shelter.\r",
							"The First of the Deep teaches us\r",
							"that we should seek no shelter but ourselves."
						],
						"frameType": 3,
						"extended": {
							"ar": 386,
							"es": 75,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1354504703",
												"min": 3,
												"max": 3
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_653107703",
												"min": 5,
												"max": 5
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_983749596",
												"min": 4,
												"max": 7
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3321629045",
												"min": 140,
												"max": 180
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_561307714",
												"min": 4,
												"max": 6
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_241251790",
												"min": 1,
												"max": 1
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_561307714",
										[
											4
										]
									],
									[
										"explicit.stat_3321629045",
										[
											3
										]
									],
									[
										"explicit.stat_983749596",
										[
											2
										]
									],
									[
										"explicit.stat_241251790",
										[
											5
										]
									],
									[
										"explicit.stat_1354504703",
										[
											0
										]
									],
									[
										"explicit.stat_653107703",
										[
											1
										]
									]
								],
								"pseudo": [
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkNyYWljZWFubidzIENoaXRpbg0KTWFnaXN0cmF0ZSBDcm93bg0KLS0tLS0tLS0NCkFybW91cjogMzg2IChhdWdtZW50ZWQpDQpFbmVyZ3kgU2hpZWxkOiA3NSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1OA0KU3RyOiA2NA0KSW50OiA2NA0KLS0tLS0tLS0NClNvY2tldHM6IEIgQi1SIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgzDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQo0JSBDaGFuY2UgdG8gQmxvY2sgU3BlbGwgRGFtYWdlDQoxNDElIGluY3JlYXNlZCBBcm1vdXIgYW5kIEVuZXJneSBTaGllbGQNCjYlIGluY3JlYXNlZCBtYXhpbXVtIExpZmUNCkNhbm5vdCBsb3NlIENyYWIgQmFycmllcnMgaWYgeW91IGhhdmUgbG9zdCBDcmFiIEJhcnJpZXJzIFJlY2VudGx5DQorMyUgQ2hhbmNlIHRvIEJsb2NrIEF0dGFjayBEYW1hZ2Ugd2hpbGUgeW91IGhhdmUgYXQgbGVhc3QgNSBDcmFiIEJhcnJpZXJzDQorNSUgQ2hhbmNlIHRvIEJsb2NrIEF0dGFjayBEYW1hZ2Ugd2hpbGUgeW91IGhhdmUgYXQgbGVhc3QgMTAgQ3JhYiBCYXJyaWVycw0KLS0tLS0tLS0NCldoZW4gdGhlIHJhaW5zIGNvbWUsIHdlIGNvd2VyIGJlbmVhdGggc2hlbHRlci4NClRoZSBGaXJzdCBvZiB0aGUgRGVlcCB0ZWFjaGVzIHVzDQp0aGF0IHdlIHNob3VsZCBzZWVrIG5vIHNoZWx0ZXIgYnV0IG91cnNlbHZlcy4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgNSBjaGFvcw0K"
						},
						"pseudoMods": [
							"Sum: 120"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "88ac2e114ff924ec5301f9560afd38bfb743e214a0010ad4f5d79e965d45dfab",
				"name": "Vengeance Glance",
				"type": "Lion Pelt",
				"itemLevel": 81,
				"sockets": [
					[
						"G",
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 380"
				],
				"enchantMods": [
					"16% increased Righteous Fire Area of Effect"
				],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+23 to Intelligence",
					"+33 to maximum Life",
					"24% increased Rarity of Items found",
					"+11% to Cold Resistance",
					"+42% to Lightning Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +53% total Elemental Resistance",
					"(pseudo) +33 total maximum Life",
					"Sum: 119"
				],
				"accountText": "Zapzdoughnut > IcedDoughnut",
				"whisper": "@IcedDoughnut Hi, I would like to buy your Vengeance Glance Lion Pelt listed for 3 vaal in Metamorph (stash tab \"~b/o 3 vaal\"; position: left 4, top 7)",
				"weightValue": 119,
				"valueText": "119 + defense value 0 + value shift 0",
				"evalValue": 119,
				"priceText": "3 vaal",
				"evalPrice": 6,
				"debug": {
					"id": "88ac2e114ff924ec5301f9560afd38bfb743e214a0010ad4f5d79e965d45dfab",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-02T19:32:05Z",
						"stash": {
							"name": "~b/o 3 vaal",
							"x": 3,
							"y": 6
						},
						"whisper": "@IcedDoughnut Hi, I would like to buy your Vengeance Glance Lion Pelt listed for 3 vaal in Metamorph (stash tab \"~b/o 3 vaal\"; position: left 4, top 7)",
						"account": {
							"name": "Zapzdoughnut",
							"lastCharacterName": "IcedDoughnut",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 3,
							"currency": "vaal"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDex10.png?scale=1&w=2&h=2&v=429392c896c4a48b46ed48d4e2e89e7f",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Vengeance Glance",
						"typeLine": "Lion Pelt",
						"identified": true,
						"ilvl": 81,
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"380",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"70",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"150",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+23 to Intelligence",
							"+33 to maximum Life",
							"24% increased Rarity of Items found",
							"+11% to Cold Resistance",
							"+42% to Lightning Resistance"
						],
						"enchantMods": [
							"16% increased Righteous Fire Area of Effect"
						],
						"frameType": 2,
						"extended": {
							"ev": 380,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"enchant": [
									{
										"name": "Enchantment Righteous Fire Area Of Effect 1",
										"tier": "",
										"magnitudes": [
											{
												"hash": "enchant.stat_2430635444",
												"min": 16,
												"max": 16
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Stalwart",
										"tier": "P7",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 30,
												"max": 39
											}
										]
									},
									{
										"name": "of the Inuit",
										"tier": "S8",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 6,
												"max": 11
											}
										]
									},
									{
										"name": "Dragon's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 19,
												"max": 24
											}
										]
									},
									{
										"name": "of the Augur",
										"tier": "S7",
										"magnitudes": [
											{
												"hash": "explicit.stat_328541901",
												"min": 23,
												"max": 27
											}
										]
									},
									{
										"name": "of the Lightning",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 42,
												"max": 45
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"enchant": [
									[
										"enchant.stat_2430635444",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_328541901",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											2
										]
									],
									[
										"explicit.stat_4220027924",
										[
											1
										]
									],
									[
										"explicit.stat_1671376347",
										[
											4
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpWZW5nZWFuY2UgR2xhbmNlDQpMaW9uIFBlbHQNCi0tLS0tLS0tDQpFdmFzaW9uIFJhdGluZzogMzgwDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDcwDQpEZXg6IDE1MA0KLS0tLS0tLS0NClNvY2tldHM6IEctQiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA4MQ0KLS0tLS0tLS0NCjE2JSBpbmNyZWFzZWQgUmlnaHRlb3VzIEZpcmUgQXJlYSBvZiBFZmZlY3QNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCisyMyB0byBJbnRlbGxpZ2VuY2UNCiszMyB0byBtYXhpbXVtIExpZmUNCjI0JSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIGZvdW5kDQorMTElIHRvIENvbGQgUmVzaXN0YW5jZQ0KKzQyJSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0K"
						},
						"pseudoMods": [
							"(pseudo) +53% total Elemental Resistance",
							"(pseudo) +33 total maximum Life",
							"Sum: 119"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "6d498bf38ae7115b3c5412dabd734101b1a6e2bf04ad38cd51b7bfc3ae6d49c4",
				"name": "Goldrim",
				"type": "Leather Cap",
				"itemLevel": 75,
				"sockets": [
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 57"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+38 to Evasion Rating",
					"10% increased Rarity of Items found",
					"+39% to all Elemental Resistances",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +117% total Elemental Resistance",
					"Sum: 117"
				],
				"accountText": "darkzero1982 > Qyxx_WhirlingAround",
				"whisper": "@Qyxx_WhirlingAround Hi, I would like to buy your Goldrim Leather Cap listed for 7 chaos in Metamorph (stash tab \"$Sell$\"; position: left 11, top 7)",
				"note": "~price 7 chaos",
				"weightValue": 117,
				"valueText": "117 + defense value 0 + value shift 0",
				"evalValue": 117,
				"priceText": "7 chaos",
				"evalPrice": 7,
				"debug": {
					"id": "6d498bf38ae7115b3c5412dabd734101b1a6e2bf04ad38cd51b7bfc3ae6d49c4",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-29T18:27:27Z",
						"stash": {
							"name": "$Sell$",
							"x": 10,
							"y": 6
						},
						"whisper": "@Qyxx_WhirlingAround Hi, I would like to buy your Goldrim Leather Cap listed for 7 chaos in Metamorph (stash tab \"$Sell$\"; position: left 11, top 7)",
						"account": {
							"name": "darkzero1982",
							"lastCharacterName": "Qyxx_WhirlingAround",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 7,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?scale=1&w=2&h=2&v=3a1d216d1feccd885829f6dd4d0f1d5e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Goldrim",
						"typeLine": "Leather Cap",
						"identified": true,
						"ilvl": 75,
						"note": "~price 7 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"57",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+38 to Evasion Rating",
							"10% increased Rarity of Items found",
							"+39% to all Elemental Resistances",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"flavourText": [
							"No metal slips as easily through the fingers as gold."
						],
						"frameType": 3,
						"extended": {
							"ev": 57,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 30,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 4,
												"max": 4
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_2901986750",
										[
											1
										]
									],
									[
										"explicit.stat_3767873853",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkdvbGRyaW0NCkxlYXRoZXIgQ2FwDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDU3IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3NQ0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzM4IHRvIEV2YXNpb24gUmF0aW5nDQoxMCUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBmb3VuZA0KKzM5JSB0byBhbGwgRWxlbWVudGFsIFJlc2lzdGFuY2VzDQpSZWZsZWN0cyA0IFBoeXNpY2FsIERhbWFnZSB0byBNZWxlZSBBdHRhY2tlcnMNCi0tLS0tLS0tDQpObyBtZXRhbCBzbGlwcyBhcyBlYXNpbHkgdGhyb3VnaCB0aGUgZmluZ2VycyBhcyBnb2xkLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA3IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +117% total Elemental Resistance",
							"Sum: 117"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "ee8daa5fbc0ce18c8370c3594dfc2290d6495fa545bd2f89ca082b9dd0ef4e64",
				"name": "Hypnotic Crest",
				"type": "Gilded Sallet",
				"itemLevel": 78,
				"sockets": [
					[
						"R"
					],
					[
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 104",
					"evasion 104"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+47 to Strength",
					"16% increased Armour and Evasion",
					"+31% to Fire Resistance",
					"+36% to Cold Resistance",
					"9% increased Stun and Block Recovery"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +67% total Elemental Resistance",
					"(pseudo) +23.5 total maximum Life",
					"Sum: 114"
				],
				"accountText": "magnusblitz > ImpalatorMagnus",
				"whisper": "@ImpalatorMagnus Hi, I would like to buy your Hypnotic Crest Gilded Sallet listed for 5 chaos in Metamorph (stash tab \"Sell\"; position: left 10, top 3)",
				"note": "~price 5 chaos",
				"weightValue": 114,
				"valueText": "114 + defense value 0 + value shift 0",
				"evalValue": 114,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "ee8daa5fbc0ce18c8370c3594dfc2290d6495fa545bd2f89ca082b9dd0ef4e64",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-05T04:57:55Z",
						"stash": {
							"name": "Sell",
							"x": 9,
							"y": 2
						},
						"whisper": "@ImpalatorMagnus Hi, I would like to buy your Hypnotic Crest Gilded Sallet listed for 5 chaos in Metamorph (stash tab \"Sell\"; position: left 10, top 3)",
						"account": {
							"name": "magnusblitz",
							"lastCharacterName": "ImpalatorMagnus",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStrDex4.png?scale=1&w=2&h=2&v=914c35569f1e1f0f521c1e25b882a27e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Hypnotic Crest",
						"typeLine": "Gilded Sallet",
						"identified": true,
						"ilvl": 78,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"104",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"104",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"59",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"38",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"38",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+47 to Strength",
							"16% increased Armour and Evasion",
							"+31% to Fire Resistance",
							"+36% to Cold Resistance",
							"9% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ev": 104,
							"ar": 104,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Titan",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 43,
												"max": 50
											}
										]
									},
									{
										"name": "Crab's",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_2451402625",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 8,
												"max": 9
											}
										]
									},
									{
										"name": "of the Polar Bear",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 36,
												"max": 41
											}
										]
									},
									{
										"name": "of the Furnace",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 30,
												"max": 35
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											0
										]
									],
									[
										"explicit.stat_2451402625",
										[
											1
										]
									],
									[
										"explicit.stat_3372524247",
										[
											3
										]
									],
									[
										"explicit.stat_4220027924",
										[
											2
										]
									],
									[
										"explicit.stat_2511217560",
										[
											1
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpIeXBub3RpYyBDcmVzdA0KR2lsZGVkIFNhbGxldA0KLS0tLS0tLS0NCkFybW91cjogMTA0IChhdWdtZW50ZWQpDQpFdmFzaW9uIFJhdGluZzogMTA0IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU5DQpTdHI6IDM4DQpEZXg6IDM4DQotLS0tLS0tLQ0KU29ja2V0czogUiBHLUcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzgNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCis0NyB0byBTdHJlbmd0aA0KMTYlIGluY3JlYXNlZCBBcm1vdXIgYW5kIEV2YXNpb24NCiszMSUgdG8gRmlyZSBSZXNpc3RhbmNlDQorMzYlIHRvIENvbGQgUmVzaXN0YW5jZQ0KOSUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDUgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +67% total Elemental Resistance",
							"(pseudo) +23.5 total maximum Life",
							"Sum: 114"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "748c348e11578db951b959957022b7079c8a6b580bfc1724fe8ebb9580d43bdb",
				"name": "Goldrim",
				"type": "Leather Cap",
				"itemLevel": 83,
				"sockets": [
					[
						"R",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 49"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+30 to Evasion Rating",
					"10% increased Rarity of Items found",
					"+38% to all Elemental Resistances",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +114% total Elemental Resistance",
					"Sum: 114"
				],
				"accountText": "으이구뱀냄시야아 > ㅇㅂㄱㅁ",
				"whisper": "@ㅇㅂㄱㅁ 안녕하세요, 변형(보관함 탭 \"비싼\", 위치: 왼쪽 5, 상단 11)에 10 chaos(으)로 올려놓은 금테(Goldrim) 가죽 모자을(를) 구매하고 싶습니다",
				"note": "~price 10 chaos",
				"weightValue": 114,
				"valueText": "114 + defense value 0 + value shift 0",
				"evalValue": 114,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "748c348e11578db951b959957022b7079c8a6b580bfc1724fe8ebb9580d43bdb",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-03T07:51:04Z",
						"stash": {
							"name": "비싼",
							"x": 4,
							"y": 10
						},
						"whisper": "@ㅇㅂㄱㅁ 안녕하세요, 변형(보관함 탭 \"비싼\", 위치: 왼쪽 5, 상단 11)에 10 chaos(으)로 올려놓은 금테(Goldrim) 가죽 모자을(를) 구매하고 싶습니다",
						"account": {
							"name": "으이구뱀냄시야아",
							"lastCharacterName": "ㅇㅂㄱㅁ",
							"online": null,
							"language": "ko_KR"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?scale=1&w=2&h=2&v=3a1d216d1feccd885829f6dd4d0f1d5e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Goldrim",
						"typeLine": "Leather Cap",
						"identified": true,
						"ilvl": 83,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"49",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+30 to Evasion Rating",
							"10% increased Rarity of Items found",
							"+38% to all Elemental Resistances",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"flavourText": [
							"No metal slips as easily through the fingers as gold."
						],
						"frameType": 3,
						"extended": {
							"ev": 49,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 30,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 4,
												"max": 4
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_2901986750",
										[
											1
										]
									],
									[
										"explicit.stat_3767873853",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkdvbGRyaW0NCkxlYXRoZXIgQ2FwDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDQ5IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogUi1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgzDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMzAgdG8gRXZhc2lvbiBSYXRpbmcNCjEwJSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIGZvdW5kDQorMzglIHRvIGFsbCBFbGVtZW50YWwgUmVzaXN0YW5jZXMNClJlZmxlY3RzIDQgUGh5c2ljYWwgRGFtYWdlIHRvIE1lbGVlIEF0dGFja2Vycw0KLS0tLS0tLS0NCk5vIG1ldGFsIHNsaXBzIGFzIGVhc2lseSB0aHJvdWdoIHRoZSBmaW5nZXJzIGFzIGdvbGQuDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDEwIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +114% total Elemental Resistance",
							"Sum: 114"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "d6f85cc2f7b76bc1b9a7dc4c423c16754c1e390ab86079f5f8f70e8f1cad8a2a",
				"name": "Dragon Crest",
				"type": "Magistrate Crown",
				"itemLevel": 74,
				"sockets": [
					[
						"G",
						"B"
					],
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 160",
					"energyShield 31"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+50 to Strength",
					"12% increased Rarity of Items found",
					"+15% to Fire Resistance",
					"+41% to Lightning Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +56% total Elemental Resistance",
					"(pseudo) +25 total maximum Life",
					"Sum: 106"
				],
				"accountText": "ADiefenbach > Deenarah",
				"whisper": "@Deenarah Hi, I would like to buy your Dragon Crest Magistrate Crown listed for 10 chaos in Metamorph (stash tab \"Sell2\"; position: left 16, top 4)",
				"note": "~price 10 chaos",
				"weightValue": 106,
				"valueText": "106 + defense value 0 + value shift 0",
				"evalValue": 106,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "d6f85cc2f7b76bc1b9a7dc4c423c16754c1e390ab86079f5f8f70e8f1cad8a2a",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-22T20:32:32Z",
						"stash": {
							"name": "Sell2",
							"x": 15,
							"y": 3
						},
						"whisper": "@Deenarah Hi, I would like to buy your Dragon Crest Magistrate Crown listed for 10 chaos in Metamorph (stash tab \"Sell2\"; position: left 16, top 4)",
						"account": {
							"name": "ADiefenbach",
							"lastCharacterName": "Deenarah",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStrInt8.png?scale=1&w=2&h=2&v=59807b6bf308473f389a97b37513c89e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Dragon Crest",
						"typeLine": "Magistrate Crown",
						"identified": true,
						"ilvl": 74,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"160",
										0
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"31",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"59",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+50 to Strength",
							"12% increased Rarity of Items found",
							"+15% to Fire Resistance",
							"+41% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 160,
							"es": 31,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Titan",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 43,
												"max": 50
											}
										]
									},
									{
										"name": "of the Maelstrom",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 36,
												"max": 41
											}
										]
									},
									{
										"name": "of the Salamander",
										"tier": "S7",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 12,
												"max": 17
											}
										]
									},
									{
										"name": "Magpie's",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 8,
												"max": 12
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_3372524247",
										[
											2
										]
									],
									[
										"explicit.stat_1671376347",
										[
											1
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpEcmFnb24gQ3Jlc3QNCk1hZ2lzdHJhdGUgQ3Jvd24NCi0tLS0tLS0tDQpBcm1vdXI6IDE2MA0KRW5lcmd5IFNoaWVsZDogMzENCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTkNClN0cjogNjQNCkludDogNjQNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUIgQiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3NA0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzUwIHRvIFN0cmVuZ3RoDQoxMiUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBmb3VuZA0KKzE1JSB0byBGaXJlIFJlc2lzdGFuY2UNCis0MSUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMTAgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +56% total Elemental Resistance",
							"(pseudo) +25 total maximum Life",
							"Sum: 106"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "4fe778fa4c085adf9d2c132e1cf64f200c759307fca2c358e72812730204c084",
				"name": "Goldrim",
				"type": "Leather Cap",
				"itemLevel": 85,
				"sockets": [
					[
						"G"
					],
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 72"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+45 to Evasion Rating",
					"10% increased Rarity of Items found",
					"+35% to all Elemental Resistances",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +105% total Elemental Resistance",
					"Sum: 105"
				],
				"accountText": "DangerDev > Heckin_Chonk",
				"whisper": "@Heckin_Chonk Hi, I would like to buy your Goldrim Leather Cap listed for 8 chaos in Metamorph (stash tab \"shop2\"; position: left 1, top 23)",
				"note": "~price 8 chaos",
				"weightValue": 105,
				"valueText": "105 + defense value 0 + value shift 0",
				"evalValue": 105,
				"priceText": "8 chaos",
				"evalPrice": 8,
				"debug": {
					"id": "4fe778fa4c085adf9d2c132e1cf64f200c759307fca2c358e72812730204c084",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-04T18:36:20Z",
						"stash": {
							"name": "shop2",
							"x": 0,
							"y": 22
						},
						"whisper": "@Heckin_Chonk Hi, I would like to buy your Goldrim Leather Cap listed for 8 chaos in Metamorph (stash tab \"shop2\"; position: left 1, top 23)",
						"account": {
							"name": "DangerDev",
							"lastCharacterName": "Heckin_Chonk",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 8,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?scale=1&w=2&h=2&v=3a1d216d1feccd885829f6dd4d0f1d5e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Goldrim",
						"typeLine": "Leather Cap",
						"identified": true,
						"ilvl": 85,
						"note": "~price 8 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+12%",
										1
									]
								],
								"displayMode": 0,
								"type": 6
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"72",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+45 to Evasion Rating",
							"10% increased Rarity of Items found",
							"+35% to all Elemental Resistances",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"flavourText": [
							"No metal slips as easily through the fingers as gold."
						],
						"frameType": 3,
						"extended": {
							"ev": 72,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 30,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 4,
												"max": 4
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_2901986750",
										[
											1
										]
									],
									[
										"explicit.stat_3767873853",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkdvbGRyaW0NCkxlYXRoZXIgQ2FwDQotLS0tLS0tLQ0KUXVhbGl0eTogKzEyJSAoYXVnbWVudGVkKQ0KRXZhc2lvbiBSYXRpbmc6IDcyIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogRyBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDg1DQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNDUgdG8gRXZhc2lvbiBSYXRpbmcNCjEwJSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIGZvdW5kDQorMzUlIHRvIGFsbCBFbGVtZW50YWwgUmVzaXN0YW5jZXMNClJlZmxlY3RzIDQgUGh5c2ljYWwgRGFtYWdlIHRvIE1lbGVlIEF0dGFja2Vycw0KLS0tLS0tLS0NCk5vIG1ldGFsIHNsaXBzIGFzIGVhc2lseSB0aHJvdWdoIHRoZSBmaW5nZXJzIGFzIGdvbGQuDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDggY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +105% total Elemental Resistance",
							"Sum: 105"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "4ce6f0ca5095d21243495eba4e9293c6269d4fe1260c12fce0e81dc232997178",
				"name": "Goldrim",
				"type": "Leather Cap",
				"itemLevel": 78,
				"sockets": [
					[
						"G",
						"G",
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 53"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+34 to Evasion Rating",
					"10% increased Rarity of Items found",
					"+35% to all Elemental Resistances",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +105% total Elemental Resistance",
					"Sum: 105"
				],
				"accountText": "catsfamily > Myphryl",
				"whisper": "@Myphryl Здравствуйте, хочу купить у вас Золотой колпак Кожаный чепец за 10 chaos в лиге Метаморф (секция \"mm5\"; позиция: 9 столбец, 1 ряд)",
				"note": "~price 10 chaos",
				"weightValue": 105,
				"valueText": "105 + defense value 0 + value shift 0",
				"evalValue": 105,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "4ce6f0ca5095d21243495eba4e9293c6269d4fe1260c12fce0e81dc232997178",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-19T21:15:46Z",
						"stash": {
							"name": "mm5",
							"x": 8,
							"y": 0
						},
						"whisper": "@Myphryl Здравствуйте, хочу купить у вас Золотой колпак Кожаный чепец за 10 chaos в лиге Метаморф (секция \"mm5\"; позиция: 9 столбец, 1 ряд)",
						"account": {
							"name": "catsfamily",
							"lastCharacterName": "Myphryl",
							"online": null,
							"language": "ru_RU"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?scale=1&w=2&h=2&v=3a1d216d1feccd885829f6dd4d0f1d5e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Goldrim",
						"typeLine": "Leather Cap",
						"identified": true,
						"ilvl": 78,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"53",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+34 to Evasion Rating",
							"10% increased Rarity of Items found",
							"+35% to all Elemental Resistances",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"flavourText": [
							"No metal slips as easily through the fingers as gold."
						],
						"frameType": 3,
						"extended": {
							"ev": 53,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 30,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 4,
												"max": 4
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_2901986750",
										[
											1
										]
									],
									[
										"explicit.stat_3767873853",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkdvbGRyaW0NCkxlYXRoZXIgQ2FwDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDUzIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogRy1HLUIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzgNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCiszNCB0byBFdmFzaW9uIFJhdGluZw0KMTAlIGluY3JlYXNlZCBSYXJpdHkgb2YgSXRlbXMgZm91bmQNCiszNSUgdG8gYWxsIEVsZW1lbnRhbCBSZXNpc3RhbmNlcw0KUmVmbGVjdHMgNCBQaHlzaWNhbCBEYW1hZ2UgdG8gTWVsZWUgQXR0YWNrZXJzDQotLS0tLS0tLQ0KTm8gbWV0YWwgc2xpcHMgYXMgZWFzaWx5IHRocm91Z2ggdGhlIGZpbmdlcnMgYXMgZ29sZC4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMTAgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +105% total Elemental Resistance",
							"Sum: 105"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "d5dab22a4b612a54a21eb31877d2b87a867e211241df92f88b072361fc83881a",
				"name": "Goldrim",
				"type": "Leather Cap",
				"itemLevel": 82,
				"sockets": [
					[
						"G",
						"B",
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 63"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+44 to Evasion Rating",
					"10% increased Rarity of Items found",
					"+34% to all Elemental Resistances",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +102% total Elemental Resistance",
					"Sum: 102"
				],
				"accountText": "Nick8991 > MELIKETOFREEZE",
				"whisper": "@MELIKETOFREEZE Hi, I would like to buy your Goldrim Leather Cap listed for 5 chaos in Metamorph (stash tab \"Sell\"; position: left 6, top 8)",
				"note": "~price 5 chaos",
				"weightValue": 102,
				"valueText": "102 + defense value 0 + value shift 0",
				"evalValue": 102,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "d5dab22a4b612a54a21eb31877d2b87a867e211241df92f88b072361fc83881a",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-29T13:59:34Z",
						"stash": {
							"name": "Sell",
							"x": 5,
							"y": 7
						},
						"whisper": "@MELIKETOFREEZE Hi, I would like to buy your Goldrim Leather Cap listed for 5 chaos in Metamorph (stash tab \"Sell\"; position: left 6, top 8)",
						"account": {
							"name": "Nick8991",
							"lastCharacterName": "MELIKETOFREEZE",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?scale=1&w=2&h=2&v=3a1d216d1feccd885829f6dd4d0f1d5e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Goldrim",
						"typeLine": "Leather Cap",
						"identified": true,
						"ilvl": 82,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"63",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+44 to Evasion Rating",
							"10% increased Rarity of Items found",
							"+34% to all Elemental Resistances",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"flavourText": [
							"No metal slips as easily through the fingers as gold."
						],
						"frameType": 3,
						"extended": {
							"ev": 63,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 30,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 4,
												"max": 4
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_2901986750",
										[
											1
										]
									],
									[
										"explicit.stat_3767873853",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkdvbGRyaW0NCkxlYXRoZXIgQ2FwDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDYzIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogRy1CLUctRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA4Mg0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzQ0IHRvIEV2YXNpb24gUmF0aW5nDQoxMCUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBmb3VuZA0KKzM0JSB0byBhbGwgRWxlbWVudGFsIFJlc2lzdGFuY2VzDQpSZWZsZWN0cyA0IFBoeXNpY2FsIERhbWFnZSB0byBNZWxlZSBBdHRhY2tlcnMNCi0tLS0tLS0tDQpObyBtZXRhbCBzbGlwcyBhcyBlYXNpbHkgdGhyb3VnaCB0aGUgZmluZ2VycyBhcyBnb2xkLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA1IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +102% total Elemental Resistance",
							"Sum: 102"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "3fdb9d16ecb26ff0bebacba78d84b59d027b8e3adb9dd64831e7884ada973a8e",
				"name": "Goldrim",
				"type": "Leather Cap",
				"itemLevel": 85,
				"sockets": [
					[
						"G",
						"R"
					],
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 67"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+48 to Evasion Rating",
					"10% increased Rarity of Items found",
					"+34% to all Elemental Resistances",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +102% total Elemental Resistance",
					"Sum: 102"
				],
				"accountText": "LordKarotte > LetThemKillThemSelves",
				"whisper": "@LetThemKillThemSelves Hi, I would like to buy your Goldrim Leather Cap listed for 5 chaos in Metamorph (stash tab \"$SALE$\"; position: left 5, top 11)",
				"note": "~price 5 chaos",
				"weightValue": 102,
				"valueText": "102 + defense value 0 + value shift 0",
				"evalValue": 102,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "3fdb9d16ecb26ff0bebacba78d84b59d027b8e3adb9dd64831e7884ada973a8e",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-24T18:59:21Z",
						"stash": {
							"name": "$SALE$",
							"x": 4,
							"y": 10
						},
						"whisper": "@LetThemKillThemSelves Hi, I would like to buy your Goldrim Leather Cap listed for 5 chaos in Metamorph (stash tab \"$SALE$\"; position: left 5, top 11)",
						"account": {
							"name": "LordKarotte",
							"lastCharacterName": "LetThemKillThemSelves",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?scale=1&w=2&h=2&v=3a1d216d1feccd885829f6dd4d0f1d5e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Goldrim",
						"typeLine": "Leather Cap",
						"identified": true,
						"ilvl": 85,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"67",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+48 to Evasion Rating",
							"10% increased Rarity of Items found",
							"+34% to all Elemental Resistances",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"flavourText": [
							"No metal slips as easily through the fingers as gold."
						],
						"frameType": 3,
						"extended": {
							"ev": 67,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 30,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 4,
												"max": 4
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_2901986750",
										[
											1
										]
									],
									[
										"explicit.stat_3767873853",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkdvbGRyaW0NCkxlYXRoZXIgQ2FwDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDY3IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogRy1SIEcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODUNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCis0OCB0byBFdmFzaW9uIFJhdGluZw0KMTAlIGluY3JlYXNlZCBSYXJpdHkgb2YgSXRlbXMgZm91bmQNCiszNCUgdG8gYWxsIEVsZW1lbnRhbCBSZXNpc3RhbmNlcw0KUmVmbGVjdHMgNCBQaHlzaWNhbCBEYW1hZ2UgdG8gTWVsZWUgQXR0YWNrZXJzDQotLS0tLS0tLQ0KTm8gbWV0YWwgc2xpcHMgYXMgZWFzaWx5IHRocm91Z2ggdGhlIGZpbmdlcnMgYXMgZ29sZC4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgNSBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +102% total Elemental Resistance",
							"Sum: 102"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "7e34a2da02580e70eb34983696c66bc894dde1ff7b344a77d24b73eb47cfc0cb",
				"name": "Goldrim",
				"type": "Leather Cap",
				"itemLevel": 77,
				"sockets": [
					[
						"G",
						"B"
					],
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 69"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+50 to Evasion Rating",
					"10% increased Rarity of Items found",
					"+34% to all Elemental Resistances",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +102% total Elemental Resistance",
					"Sum: 102"
				],
				"accountText": "MAiDaN15 > sfsefgsetgt",
				"whisper": "@sfsefgsetgt Hi, I would like to buy your Goldrim Leather Cap listed for 10 chaos in Metamorph (stash tab \"$$$\"; position: left 9, top 7)",
				"note": "~b/o 10 chaos",
				"weightValue": 102,
				"valueText": "102 + defense value 0 + value shift 0",
				"evalValue": 102,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "7e34a2da02580e70eb34983696c66bc894dde1ff7b344a77d24b73eb47cfc0cb",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-28T00:51:19Z",
						"stash": {
							"name": "$$$",
							"x": 8,
							"y": 6
						},
						"whisper": "@sfsefgsetgt Hi, I would like to buy your Goldrim Leather Cap listed for 10 chaos in Metamorph (stash tab \"$$$\"; position: left 9, top 7)",
						"account": {
							"name": "MAiDaN15",
							"lastCharacterName": "sfsefgsetgt",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?scale=1&w=2&h=2&v=3a1d216d1feccd885829f6dd4d0f1d5e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Goldrim",
						"typeLine": "Leather Cap",
						"identified": true,
						"ilvl": 77,
						"note": "~b/o 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"69",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+50 to Evasion Rating",
							"10% increased Rarity of Items found",
							"+34% to all Elemental Resistances",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"flavourText": [
							"No metal slips as easily through the fingers as gold."
						],
						"frameType": 3,
						"extended": {
							"ev": 69,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 30,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 4,
												"max": 4
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_2901986750",
										[
											1
										]
									],
									[
										"explicit.stat_3767873853",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkdvbGRyaW0NCkxlYXRoZXIgQ2FwDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDY5IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogRy1CIEcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzcNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCis1MCB0byBFdmFzaW9uIFJhdGluZw0KMTAlIGluY3JlYXNlZCBSYXJpdHkgb2YgSXRlbXMgZm91bmQNCiszNCUgdG8gYWxsIEVsZW1lbnRhbCBSZXNpc3RhbmNlcw0KUmVmbGVjdHMgNCBQaHlzaWNhbCBEYW1hZ2UgdG8gTWVsZWUgQXR0YWNrZXJzDQotLS0tLS0tLQ0KTm8gbWV0YWwgc2xpcHMgYXMgZWFzaWx5IHRocm91Z2ggdGhlIGZpbmdlcnMgYXMgZ29sZC4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+Yi9vIDEwIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +102% total Elemental Resistance",
							"Sum: 102"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "8a6e28dde9c7896f6832f315d01f1984916c7b33f178a5e7ccef9bed5f590dd4",
				"name": "Goldrim",
				"type": "Leather Cap",
				"itemLevel": 85,
				"sockets": [
					[
						"G",
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 57"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+38 to Evasion Rating",
					"10% increased Rarity of Items found",
					"+34% to all Elemental Resistances",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +102% total Elemental Resistance",
					"Sum: 102"
				],
				"accountText": "Dashan94 > GigaTrashBuild",
				"whisper": "@GigaTrashBuild Hi, I would like to buy your Goldrim Leather Cap listed for 10 chaos in Metamorph (stash tab \"$$\"; position: left 1, top 11)",
				"note": "~price 10 chaos",
				"weightValue": 102,
				"valueText": "102 + defense value 0 + value shift 0",
				"evalValue": 102,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "8a6e28dde9c7896f6832f315d01f1984916c7b33f178a5e7ccef9bed5f590dd4",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-25T11:37:59Z",
						"stash": {
							"name": "$$",
							"x": 0,
							"y": 10
						},
						"whisper": "@GigaTrashBuild Hi, I would like to buy your Goldrim Leather Cap listed for 10 chaos in Metamorph (stash tab \"$$\"; position: left 1, top 11)",
						"account": {
							"name": "Dashan94",
							"lastCharacterName": "GigaTrashBuild",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?scale=1&w=2&h=2&v=3a1d216d1feccd885829f6dd4d0f1d5e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Goldrim",
						"typeLine": "Leather Cap",
						"identified": true,
						"ilvl": 85,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"57",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+38 to Evasion Rating",
							"10% increased Rarity of Items found",
							"+34% to all Elemental Resistances",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"flavourText": [
							"No metal slips as easily through the fingers as gold."
						],
						"frameType": 3,
						"extended": {
							"ev": 57,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 30,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 4,
												"max": 4
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_2901986750",
										[
											1
										]
									],
									[
										"explicit.stat_3767873853",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkdvbGRyaW0NCkxlYXRoZXIgQ2FwDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDU3IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogRy1CIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDg1DQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMzggdG8gRXZhc2lvbiBSYXRpbmcNCjEwJSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIGZvdW5kDQorMzQlIHRvIGFsbCBFbGVtZW50YWwgUmVzaXN0YW5jZXMNClJlZmxlY3RzIDQgUGh5c2ljYWwgRGFtYWdlIHRvIE1lbGVlIEF0dGFja2Vycw0KLS0tLS0tLS0NCk5vIG1ldGFsIHNsaXBzIGFzIGVhc2lseSB0aHJvdWdoIHRoZSBmaW5nZXJzIGFzIGdvbGQuDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDEwIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +102% total Elemental Resistance",
							"Sum: 102"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "ee2900adb52c9c0c915c0a0a0bf818ffa9b780cfc25575f26054bdf3b461c57e",
				"name": "Fate Guardian",
				"type": "Mind Cage",
				"itemLevel": 72,
				"sockets": [
					[
						"B"
					],
					[
						"B"
					],
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"energyShield 69"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"6% increased Intelligence",
					"+50 to maximum Life",
					"Regenerate 12.9 Life per second",
					"+5% to Chaos Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +50 total maximum Life",
					"Sum: 100"
				],
				"accountText": "Citiscape > Bealtu",
				"whisper": "@Bealtu Hi, I would like to buy your Fate Guardian Mind Cage listed for 1 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 3, top 4)",
				"weightValue": 100,
				"valueText": "100 + defense value 0 + value shift 0",
				"evalValue": 100,
				"priceText": "1 chaos",
				"evalPrice": 1,
				"debug": {
					"id": "ee2900adb52c9c0c915c0a0a0bf818ffa9b780cfc25575f26054bdf3b461c57e",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-30T05:30:53Z",
						"stash": {
							"name": "~price 1 chaos",
							"x": 2,
							"y": 3
						},
						"whisper": "@Bealtu Hi, I would like to buy your Fate Guardian Mind Cage listed for 1 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 3, top 4)",
						"account": {
							"name": "Citiscape",
							"lastCharacterName": "Bealtu",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 1,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetInt10.png?scale=1&w=2&h=2&v=95b3b9abd4831891cb01ceead65b055a",
						"league": "Metamorph",
						"influences": {
							"hunter": true
						},
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 2,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Fate Guardian",
						"typeLine": "Mind Cage",
						"identified": true,
						"ilvl": 72,
						"corrupted": true,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"69",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"65",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"6% increased Intelligence",
							"+50 to maximum Life",
							"Regenerate 12.9 Life per second",
							"+5% to Chaos Resistance"
						],
						"frameType": 2,
						"extended": {
							"es": 69,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Hunt",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_656461285",
												"min": 6,
												"max": 8
											}
										]
									},
									{
										"name": "of the Hydra",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3325883026",
												"min": 10,
												"max": 13
											}
										]
									},
									{
										"name": "Robust",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 50,
												"max": 59
											}
										]
									},
									{
										"name": "of the Lost",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_2923486259",
												"min": 5,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_656461285",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2
										]
									],
									[
										"explicit.stat_3325883026",
										[
											1
										]
									],
									[
										"explicit.stat_2923486259",
										[
											3
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpGYXRlIEd1YXJkaWFuDQpNaW5kIENhZ2UNCi0tLS0tLS0tDQpFbmVyZ3kgU2hpZWxkOiA2OQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2NQ0KSW50OiAxMzgNCi0tLS0tLS0tDQpTb2NrZXRzOiBCIEIgQiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3Mg0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KNiUgaW5jcmVhc2VkIEludGVsbGlnZW5jZQ0KKzUwIHRvIG1heGltdW0gTGlmZQ0KUmVnZW5lcmF0ZSAxMi45IExpZmUgcGVyIHNlY29uZA0KKzUlIHRvIENoYW9zIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpIdW50ZXIgSXRlbQ0K"
						},
						"pseudoMods": [
							"(pseudo) +50 total maximum Life",
							"Sum: 100"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "a9f3386d82a3f443a1a436a7653192f61f1d7f774ebea051fd87709de080d583",
				"name": "Goldrim",
				"type": "Leather Cap",
				"itemLevel": 79,
				"sockets": [
					[
						"B",
						"G"
					],
					[
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 63"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+44 to Evasion Rating",
					"10% increased Rarity of Items found",
					"+33% to all Elemental Resistances",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +99% total Elemental Resistance",
					"Sum: 99"
				],
				"accountText": "DETRIX18 > BOOMEDxTwo",
				"whisper": "@BOOMEDxTwo Hi, I would like to buy your Goldrim Leather Cap listed for 5 chaos in Metamorph (stash tab \"££\"; position: left 8, top 6)",
				"note": "~price 5 chaos",
				"weightValue": 99,
				"valueText": "99 + defense value 0 + value shift 0",
				"evalValue": 99,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "a9f3386d82a3f443a1a436a7653192f61f1d7f774ebea051fd87709de080d583",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-03T15:29:27Z",
						"stash": {
							"name": "££",
							"x": 7,
							"y": 5
						},
						"whisper": "@BOOMEDxTwo Hi, I would like to buy your Goldrim Leather Cap listed for 5 chaos in Metamorph (stash tab \"££\"; position: left 8, top 6)",
						"account": {
							"name": "DETRIX18",
							"lastCharacterName": "BOOMEDxTwo",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?scale=1&w=2&h=2&v=3a1d216d1feccd885829f6dd4d0f1d5e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Goldrim",
						"typeLine": "Leather Cap",
						"identified": true,
						"ilvl": 79,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"63",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+44 to Evasion Rating",
							"10% increased Rarity of Items found",
							"+33% to all Elemental Resistances",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"flavourText": [
							"No metal slips as easily through the fingers as gold."
						],
						"frameType": 3,
						"extended": {
							"ev": 63,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 30,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 4,
												"max": 4
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_2901986750",
										[
											1
										]
									],
									[
										"explicit.stat_3767873853",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkdvbGRyaW0NCkxlYXRoZXIgQ2FwDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDYzIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogQi1HIEctRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3OQ0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzQ0IHRvIEV2YXNpb24gUmF0aW5nDQoxMCUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBmb3VuZA0KKzMzJSB0byBhbGwgRWxlbWVudGFsIFJlc2lzdGFuY2VzDQpSZWZsZWN0cyA0IFBoeXNpY2FsIERhbWFnZSB0byBNZWxlZSBBdHRhY2tlcnMNCi0tLS0tLS0tDQpObyBtZXRhbCBzbGlwcyBhcyBlYXNpbHkgdGhyb3VnaCB0aGUgZmluZ2VycyBhcyBnb2xkLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA1IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +99% total Elemental Resistance",
							"Sum: 99"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "8dc7f45fe976834b0371cfdbef2ca896ea7f47b5add111c6f574f81f44bdbdea",
				"name": "Goldrim",
				"type": "Leather Cap",
				"itemLevel": 77,
				"sockets": [
					[
						"R",
						"G"
					],
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 57"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+38 to Evasion Rating",
					"10% increased Rarity of Items found",
					"+33% to all Elemental Resistances",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +99% total Elemental Resistance",
					"Sum: 99"
				],
				"accountText": "Chaos_W > 싸뽀쭈어",
				"whisper": "@싸뽀쭈어 안녕하세요, 변형(보관함 탭 \"~price 9 chaos\", 위치: 왼쪽 1, 상단 7)에 9 chaos(으)로 올려놓은 금테(Goldrim) 가죽 모자을(를) 구매하고 싶습니다",
				"weightValue": 99,
				"valueText": "99 + defense value 0 + value shift 0",
				"evalValue": 99,
				"priceText": "9 chaos",
				"evalPrice": 9,
				"debug": {
					"id": "8dc7f45fe976834b0371cfdbef2ca896ea7f47b5add111c6f574f81f44bdbdea",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-14T15:26:10Z",
						"stash": {
							"name": "~price 9 chaos",
							"x": 0,
							"y": 6
						},
						"whisper": "@싸뽀쭈어 안녕하세요, 변형(보관함 탭 \"~price 9 chaos\", 위치: 왼쪽 1, 상단 7)에 9 chaos(으)로 올려놓은 금테(Goldrim) 가죽 모자을(를) 구매하고 싶습니다",
						"account": {
							"name": "Chaos_W",
							"lastCharacterName": "싸뽀쭈어",
							"online": null,
							"language": "ko_KR"
						},
						"price": {
							"type": "~price",
							"amount": 9,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?scale=1&w=2&h=2&v=3a1d216d1feccd885829f6dd4d0f1d5e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Goldrim",
						"typeLine": "Leather Cap",
						"identified": true,
						"ilvl": 77,
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"57",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+38 to Evasion Rating",
							"10% increased Rarity of Items found",
							"+33% to all Elemental Resistances",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"flavourText": [
							"No metal slips as easily through the fingers as gold."
						],
						"frameType": 3,
						"extended": {
							"ev": 57,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 30,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 4,
												"max": 4
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_2901986750",
										[
											1
										]
									],
									[
										"explicit.stat_3767873853",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkdvbGRyaW0NCkxlYXRoZXIgQ2FwDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDU3IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogUi1HIEIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzcNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCiszOCB0byBFdmFzaW9uIFJhdGluZw0KMTAlIGluY3JlYXNlZCBSYXJpdHkgb2YgSXRlbXMgZm91bmQNCiszMyUgdG8gYWxsIEVsZW1lbnRhbCBSZXNpc3RhbmNlcw0KUmVmbGVjdHMgNCBQaHlzaWNhbCBEYW1hZ2UgdG8gTWVsZWUgQXR0YWNrZXJzDQotLS0tLS0tLQ0KTm8gbWV0YWwgc2xpcHMgYXMgZWFzaWx5IHRocm91Z2ggdGhlIGZpbmdlcnMgYXMgZ29sZC4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCg=="
						},
						"pseudoMods": [
							"(pseudo) +99% total Elemental Resistance",
							"Sum: 99"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "b548baaf278a8c52ec5ecdf349ee8514787be0096358c69b8a288b327c312758",
				"name": "Goldrim",
				"type": "Leather Cap",
				"itemLevel": 79,
				"sockets": [
					[
						"G",
						"R",
						"G",
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 49"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+30 to Evasion Rating",
					"10% increased Rarity of Items found",
					"+33% to all Elemental Resistances",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +99% total Elemental Resistance",
					"Sum: 99"
				],
				"accountText": "OverlyAgressiveWombat > Walter_Wombat",
				"whisper": "@Walter_Wombat Hi, I would like to buy your Goldrim Leather Cap listed for 10 chaos in Metamorph (stash tab \"4 sale\"; position: left 8, top 4)",
				"note": "~price 10 chaos",
				"weightValue": 99,
				"valueText": "99 + defense value 0 + value shift 0",
				"evalValue": 99,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "b548baaf278a8c52ec5ecdf349ee8514787be0096358c69b8a288b327c312758",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-13T01:19:01Z",
						"stash": {
							"name": "4 sale",
							"x": 7,
							"y": 3
						},
						"whisper": "@Walter_Wombat Hi, I would like to buy your Goldrim Leather Cap listed for 10 chaos in Metamorph (stash tab \"4 sale\"; position: left 8, top 4)",
						"account": {
							"name": "OverlyAgressiveWombat",
							"lastCharacterName": "Walter_Wombat",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?scale=1&w=2&h=2&v=3a1d216d1feccd885829f6dd4d0f1d5e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Goldrim",
						"typeLine": "Leather Cap",
						"identified": true,
						"ilvl": 79,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"49",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+30 to Evasion Rating",
							"10% increased Rarity of Items found",
							"+33% to all Elemental Resistances",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"flavourText": [
							"No metal slips as easily through the fingers as gold."
						],
						"frameType": 3,
						"extended": {
							"ev": 49,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 30,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 4,
												"max": 4
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_2901986750",
										[
											1
										]
									],
									[
										"explicit.stat_3767873853",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkdvbGRyaW0NCkxlYXRoZXIgQ2FwDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDQ5IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogRy1SLUctUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3OQ0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzMwIHRvIEV2YXNpb24gUmF0aW5nDQoxMCUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBmb3VuZA0KKzMzJSB0byBhbGwgRWxlbWVudGFsIFJlc2lzdGFuY2VzDQpSZWZsZWN0cyA0IFBoeXNpY2FsIERhbWFnZSB0byBNZWxlZSBBdHRhY2tlcnMNCi0tLS0tLS0tDQpObyBtZXRhbCBzbGlwcyBhcyBlYXNpbHkgdGhyb3VnaCB0aGUgZmluZ2VycyBhcyBnb2xkLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAxMCBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +99% total Elemental Resistance",
							"Sum: 99"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "a5ecd4cfbc4cf8ffbeb47ed2565cfc11dc0adcd15017cb02ee9c304fb28eeb38",
				"name": "Goldrim",
				"type": "Leather Cap",
				"itemLevel": 82,
				"sockets": [
					[
						"G",
						"R",
						"R"
					],
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 59"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+40 to Evasion Rating",
					"10% increased Rarity of Items found",
					"+33% to all Elemental Resistances",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +99% total Elemental Resistance",
					"Sum: 99"
				],
				"accountText": "Akzora > Akzara",
				"whisper": "@Akzara Hi, I would like to buy your Goldrim Leather Cap listed for 10 chaos in Metamorph (stash tab \"Sell\"; position: left 4, top 10)",
				"note": "~price 10 chaos",
				"weightValue": 99,
				"valueText": "99 + defense value 0 + value shift 0",
				"evalValue": 99,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "a5ecd4cfbc4cf8ffbeb47ed2565cfc11dc0adcd15017cb02ee9c304fb28eeb38",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-14T23:56:36Z",
						"stash": {
							"name": "Sell",
							"x": 3,
							"y": 9
						},
						"whisper": "@Akzara Hi, I would like to buy your Goldrim Leather Cap listed for 10 chaos in Metamorph (stash tab \"Sell\"; position: left 4, top 10)",
						"account": {
							"name": "Akzora",
							"lastCharacterName": "Akzara",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?scale=1&w=2&h=2&v=3a1d216d1feccd885829f6dd4d0f1d5e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Goldrim",
						"typeLine": "Leather Cap",
						"identified": true,
						"ilvl": 82,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"59",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+40 to Evasion Rating",
							"10% increased Rarity of Items found",
							"+33% to all Elemental Resistances",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"flavourText": [
							"No metal slips as easily through the fingers as gold."
						],
						"frameType": 3,
						"extended": {
							"ev": 59,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 30,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 4,
												"max": 4
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_2901986750",
										[
											1
										]
									],
									[
										"explicit.stat_3767873853",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkdvbGRyaW0NCkxlYXRoZXIgQ2FwDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDU5IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogRy1SLVIgRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA4Mg0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzQwIHRvIEV2YXNpb24gUmF0aW5nDQoxMCUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBmb3VuZA0KKzMzJSB0byBhbGwgRWxlbWVudGFsIFJlc2lzdGFuY2VzDQpSZWZsZWN0cyA0IFBoeXNpY2FsIERhbWFnZSB0byBNZWxlZSBBdHRhY2tlcnMNCi0tLS0tLS0tDQpObyBtZXRhbCBzbGlwcyBhcyBlYXNpbHkgdGhyb3VnaCB0aGUgZmluZ2VycyBhcyBnb2xkLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAxMCBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +99% total Elemental Resistance",
							"Sum: 99"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "53dbdfd0165f4e1d3a9595c6deb8e1830ee5aa4d33a1454631bb4047d1b5d0bf",
				"name": "Ezomyte Peak",
				"type": "Iron Hat",
				"itemLevel": 80,
				"sockets": [
					[
						"R",
						"B"
					],
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 29"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"20% increased Global Physical Damage",
					"+20 to Armour",
					"+49 to maximum Life",
					"Cannot Evade Enemy Attacks"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +49 total maximum Life",
					"Sum: 98"
				],
				"accountText": "Richatze > RicusAcutus",
				"whisper": "@RicusAcutus Hi, I would like to buy your Ezomyte Peak Iron Hat listed for 5 chaos in Metamorph (stash tab \"Premium\"; position: left 9, top 10)",
				"note": "~price 5 chaos",
				"weightValue": 98,
				"valueText": "98 + defense value 0 + value shift 0",
				"evalValue": 98,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "53dbdfd0165f4e1d3a9595c6deb8e1830ee5aa4d33a1454631bb4047d1b5d0bf",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-15T16:52:43Z",
						"stash": {
							"name": "Premium",
							"x": 8,
							"y": 9
						},
						"whisper": "@RicusAcutus Hi, I would like to buy your Ezomyte Peak Iron Hat listed for 5 chaos in Metamorph (stash tab \"Premium\"; position: left 9, top 10)",
						"account": {
							"name": "Richatze",
							"lastCharacterName": "RicusAcutus",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/EzomytePeak.png?scale=1&w=2&h=2&v=1ea157f8fe142f5abe41f1342ed3a02c",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Ezomyte Peak",
						"typeLine": "Iron Hat",
						"identified": true,
						"ilvl": 80,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"29",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"20% increased Global Physical Damage",
							"+20 to Armour",
							"+49 to maximum Life",
							"Cannot Evade Enemy Attacks"
						],
						"flavourText": [
							"Centuries of servitude, a day\r",
							"of glory, an eternity of death."
						],
						"frameType": 3,
						"extended": {
							"ar": 29,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 15,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 25,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1310194496",
												"min": 20,
												"max": 20
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_474452755",
												"min": 1,
												"max": 1
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_1310194496",
										[
											2
										]
									],
									[
										"explicit.stat_3484657501",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_474452755",
										[
											3
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkV6b215dGUgUGVhaw0KSXJvbiBIYXQNCi0tLS0tLS0tDQpBcm1vdXI6IDI5IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogUi1CIEIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODANCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCjIwJSBpbmNyZWFzZWQgR2xvYmFsIFBoeXNpY2FsIERhbWFnZQ0KKzIwIHRvIEFybW91cg0KKzQ5IHRvIG1heGltdW0gTGlmZQ0KQ2Fubm90IEV2YWRlIEVuZW15IEF0dGFja3MNCi0tLS0tLS0tDQpDZW50dXJpZXMgb2Ygc2Vydml0dWRlLCBhIGRheQ0Kb2YgZ2xvcnksIGFuIGV0ZXJuaXR5IG9mIGRlYXRoLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA1IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +49 total maximum Life",
							"Sum: 98"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "84ed28eb938501c424141e099fe5e272d5b22c9872b1ffa1fd8318b41fcbc7ec",
				"name": "Beast Guardian",
				"type": "Eternal Burgonet",
				"itemLevel": 72,
				"sockets": [
					[
						"R"
					],
					[
						"G"
					],
					[
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 724"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+10 to Armour",
					"89% increased Armour",
					"+35 to maximum Life",
					"+27% to Fire Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +27% total Elemental Resistance",
					"(pseudo) +35 total maximum Life",
					"Sum: 97"
				],
				"accountText": "Adurwth > Rawth_Necro_Meta",
				"whisper": "@Rawth_Necro_Meta Hi, I would like to buy your Beast Guardian Eternal Burgonet listed for 1 alch in Metamorph (stash tab \"~price 1 alch\"; position: left 16, top 21)",
				"weightValue": 97,
				"valueText": "97 + defense value 0 + value shift 0",
				"evalValue": 97,
				"priceText": "1 alch",
				"evalPrice": 0.5,
				"debug": {
					"id": "84ed28eb938501c424141e099fe5e272d5b22c9872b1ffa1fd8318b41fcbc7ec",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-31T01:50:26Z",
						"stash": {
							"name": "~price 1 alch",
							"x": 15,
							"y": 20
						},
						"whisper": "@Rawth_Necro_Meta Hi, I would like to buy your Beast Guardian Eternal Burgonet listed for 1 alch in Metamorph (stash tab \"~price 1 alch\"; position: left 16, top 21)",
						"account": {
							"name": "Adurwth",
							"lastCharacterName": "Rawth_Necro_Meta",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 1,
							"currency": "alch"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStr11.png?scale=1&w=2&h=2&v=342bd7655177cacda3928e191d7eb83c",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 2,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Beast Guardian",
						"typeLine": "Eternal Burgonet",
						"identified": true,
						"ilvl": 72,
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"724",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"69",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"138",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+10 to Armour",
							"89% increased Armour",
							"+35 to maximum Life",
							"+27% to Fire Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 724,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Stalwart",
										"tier": "P7",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 30,
												"max": 39
											}
										]
									},
									{
										"name": "Girded",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
												"min": 80,
												"max": 91
											}
										]
									},
									{
										"name": "Lacquered",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 3,
												"max": 10
											}
										]
									},
									{
										"name": "of the Kiln",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 24,
												"max": 29
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3484657501",
										[
											2
										]
									],
									[
										"explicit.stat_1062208444",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0
										]
									],
									[
										"explicit.stat_3372524247",
										[
											3
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpCZWFzdCBHdWFyZGlhbg0KRXRlcm5hbCBCdXJnb25ldA0KLS0tLS0tLS0NCkFybW91cjogNzI0IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY5DQpTdHI6IDEzOA0KLS0tLS0tLS0NClNvY2tldHM6IFIgRyBSIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcyDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMTAgdG8gQXJtb3VyDQo4OSUgaW5jcmVhc2VkIEFybW91cg0KKzM1IHRvIG1heGltdW0gTGlmZQ0KKzI3JSB0byBGaXJlIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpDb3JydXB0ZWQNCg=="
						},
						"pseudoMods": [
							"(pseudo) +27% total Elemental Resistance",
							"(pseudo) +35 total maximum Life",
							"Sum: 97"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "31f6caea458e25ef1592b208db0bbfb9a06da38054e806ab5066c5b72de082a9",
				"name": "Goldrim",
				"type": "Leather Cap",
				"itemLevel": 83,
				"sockets": [
					[
						"R"
					],
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 57"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+38 to Evasion Rating",
					"10% increased Rarity of Items found",
					"+32% to all Elemental Resistances",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +96% total Elemental Resistance",
					"Sum: 96"
				],
				"accountText": "Yobamarina > NASA_TERRORWANDER",
				"whisper": "@NASA_TERRORWANDER Hi, I would like to buy your Goldrim Leather Cap listed for 8 chaos in Metamorph (stash tab \"~price 8 chaos\"; position: left 6, top 5)",
				"weightValue": 96,
				"valueText": "96 + defense value 0 + value shift 0",
				"evalValue": 96,
				"priceText": "8 chaos",
				"evalPrice": 8,
				"debug": {
					"id": "31f6caea458e25ef1592b208db0bbfb9a06da38054e806ab5066c5b72de082a9",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-20T09:32:22Z",
						"stash": {
							"name": "~price 8 chaos",
							"x": 5,
							"y": 4
						},
						"whisper": "@NASA_TERRORWANDER Hi, I would like to buy your Goldrim Leather Cap listed for 8 chaos in Metamorph (stash tab \"~price 8 chaos\"; position: left 6, top 5)",
						"account": {
							"name": "Yobamarina",
							"lastCharacterName": "NASA_TERRORWANDER",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 8,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?scale=1&w=2&h=2&v=3a1d216d1feccd885829f6dd4d0f1d5e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Goldrim",
						"typeLine": "Leather Cap",
						"identified": true,
						"ilvl": 83,
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"57",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+38 to Evasion Rating",
							"10% increased Rarity of Items found",
							"+32% to all Elemental Resistances",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"flavourText": [
							"No metal slips as easily through the fingers as gold."
						],
						"frameType": 3,
						"extended": {
							"ev": 57,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 30,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 4,
												"max": 4
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_2901986750",
										[
											1
										]
									],
									[
										"explicit.stat_3767873853",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkdvbGRyaW0NCkxlYXRoZXIgQ2FwDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDU3IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogUiBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgzDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMzggdG8gRXZhc2lvbiBSYXRpbmcNCjEwJSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIGZvdW5kDQorMzIlIHRvIGFsbCBFbGVtZW50YWwgUmVzaXN0YW5jZXMNClJlZmxlY3RzIDQgUGh5c2ljYWwgRGFtYWdlIHRvIE1lbGVlIEF0dGFja2Vycw0KLS0tLS0tLS0NCk5vIG1ldGFsIHNsaXBzIGFzIGVhc2lseSB0aHJvdWdoIHRoZSBmaW5nZXJzIGFzIGdvbGQuDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQo="
						},
						"pseudoMods": [
							"(pseudo) +96% total Elemental Resistance",
							"Sum: 96"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "58222cf832d0b342537031e98fb205dfcd04e97fe42a3d31b2a008f91e8e3152",
				"name": "Behemoth Dome",
				"type": "Solaris Circlet",
				"itemLevel": 73,
				"sockets": [
					[
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"energyShield 67"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"17% increased Global Accuracy Rating",
					"17% increased Energy Shield",
					"+42 to maximum Life",
					"+56 to maximum Mana",
					"+12% to Lightning Resistance",
					"15% increased Light Radius"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +12% total Elemental Resistance",
					"(pseudo) +42 total maximum Life",
					"Sum: 96"
				],
				"accountText": "Embodimenthor > ImageOfTheForgottenPast",
				"whisper": "@ImageOfTheForgottenPast Hi, I would like to buy your Behemoth Dome Solaris Circlet listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 1, top 10)",
				"weightValue": 96,
				"valueText": "96 + defense value 0 + value shift 0",
				"evalValue": 96,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "58222cf832d0b342537031e98fb205dfcd04e97fe42a3d31b2a008f91e8e3152",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-04T17:23:51Z",
						"stash": {
							"name": "~price 10 chaos",
							"x": 0,
							"y": 9
						},
						"whisper": "@ImageOfTheForgottenPast Hi, I would like to buy your Behemoth Dome Solaris Circlet listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 1, top 10)",
						"account": {
							"name": "Embodimenthor",
							"lastCharacterName": "ImageOfTheForgottenPast",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetInt9.png?scale=1&w=2&h=2&v=3aeebe40b6db3abe7e4d92e3402db35e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Behemoth Dome",
						"typeLine": "Solaris Circlet",
						"identified": true,
						"ilvl": 73,
						"corrupted": true,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"67",
										1
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"59",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"122",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"17% increased Global Accuracy Rating",
							"17% increased Energy Shield",
							"+42 to maximum Life",
							"+56 to maximum Mana",
							"+12% to Lightning Resistance",
							"15% increased Light Radius"
						],
						"frameType": 2,
						"extended": {
							"es": 67,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Squall",
										"tier": "S7",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 12,
												"max": 17
											}
										]
									},
									{
										"name": "of Radiance",
										"tier": "S1",
										"magnitudes": [
											{
												"hash": "explicit.stat_624954515",
												"min": 16,
												"max": 20
											},
											{
												"hash": "explicit.stat_1263695895",
												"min": 15,
												"max": 15
											}
										]
									},
									{
										"name": "Stout",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 40,
												"max": 49
											}
										]
									},
									{
										"name": "Chalybeous",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 55,
												"max": 59
											}
										]
									},
									{
										"name": "Protective",
										"tier": "P7",
										"magnitudes": [
											{
												"hash": "explicit.stat_4015621042",
												"min": 11,
												"max": 28
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_624954515",
										[
											1
										]
									],
									[
										"explicit.stat_4015621042",
										[
											4
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2
										]
									],
									[
										"explicit.stat_1050105434",
										[
											3
										]
									],
									[
										"explicit.stat_1671376347",
										[
											0
										]
									],
									[
										"explicit.stat_1263695895",
										[
											1
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpCZWhlbW90aCBEb21lDQpTb2xhcmlzIENpcmNsZXQNCi0tLS0tLS0tDQpFbmVyZ3kgU2hpZWxkOiA2NyAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1OQ0KSW50OiAxMjINCi0tLS0tLS0tDQpTb2NrZXRzOiBSIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDczDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQoxNyUgaW5jcmVhc2VkIEdsb2JhbCBBY2N1cmFjeSBSYXRpbmcNCjE3JSBpbmNyZWFzZWQgRW5lcmd5IFNoaWVsZA0KKzQyIHRvIG1heGltdW0gTGlmZQ0KKzU2IHRvIG1heGltdW0gTWFuYQ0KKzEyJSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KMTUlIGluY3JlYXNlZCBMaWdodCBSYWRpdXMNCi0tLS0tLS0tDQpDb3JydXB0ZWQNCg=="
						},
						"pseudoMods": [
							"(pseudo) +12% total Elemental Resistance",
							"(pseudo) +42 total maximum Life",
							"Sum: 96"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "6117ce9b9e70b4dfb86b6cce78315137b4ff6bb9a06870e1d7d927d644e100e6",
				"name": "Goldrim",
				"type": "Leather Cap",
				"itemLevel": 83,
				"sockets": [
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 51"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+32 to Evasion Rating",
					"10% increased Rarity of Items found",
					"+32% to all Elemental Resistances",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +96% total Elemental Resistance",
					"Sum: 96"
				],
				"accountText": "pticouic > Toxik_Meta",
				"whisper": "@Toxik_Meta Hi, I would like to buy your Goldrim Leather Cap listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 20, top 23)",
				"weightValue": 96,
				"valueText": "96 + defense value 0 + value shift 0",
				"evalValue": 96,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "6117ce9b9e70b4dfb86b6cce78315137b4ff6bb9a06870e1d7d927d644e100e6",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-26T20:04:02Z",
						"stash": {
							"name": "~price 10 chaos",
							"x": 19,
							"y": 22
						},
						"whisper": "@Toxik_Meta Hi, I would like to buy your Goldrim Leather Cap listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 20, top 23)",
						"account": {
							"name": "pticouic",
							"lastCharacterName": "Toxik_Meta",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?scale=1&w=2&h=2&v=3a1d216d1feccd885829f6dd4d0f1d5e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Goldrim",
						"typeLine": "Leather Cap",
						"identified": true,
						"ilvl": 83,
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"51",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+32 to Evasion Rating",
							"10% increased Rarity of Items found",
							"+32% to all Elemental Resistances",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"flavourText": [
							"No metal slips as easily through the fingers as gold."
						],
						"frameType": 3,
						"extended": {
							"ev": 51,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 30,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 4,
												"max": 4
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_2901986750",
										[
											1
										]
									],
									[
										"explicit.stat_3767873853",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkdvbGRyaW0NCkxlYXRoZXIgQ2FwDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDUxIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogQiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA4Mw0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzMyIHRvIEV2YXNpb24gUmF0aW5nDQoxMCUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBmb3VuZA0KKzMyJSB0byBhbGwgRWxlbWVudGFsIFJlc2lzdGFuY2VzDQpSZWZsZWN0cyA0IFBoeXNpY2FsIERhbWFnZSB0byBNZWxlZSBBdHRhY2tlcnMNCi0tLS0tLS0tDQpObyBtZXRhbCBzbGlwcyBhcyBlYXNpbHkgdGhyb3VnaCB0aGUgZmluZ2VycyBhcyBnb2xkLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0K"
						},
						"pseudoMods": [
							"(pseudo) +96% total Elemental Resistance",
							"Sum: 96"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "ba0ae0700d33920b6fa1d5c1b487bd36b53f96589369a9b019385cd989b0a549",
				"name": "Skull Star",
				"type": "Magistrate Crown",
				"itemLevel": 76,
				"sockets": [
					[
						"R",
						"R",
						"R",
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 214",
					"energyShield 42"
				],
				"enchantMods": [
					"Ice Shot has 60% increased Area of Effect angle"
				],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"11% increased Global Accuracy Rating",
					"34% increased Armour and Energy Shield",
					"+14 to maximum Life",
					"+25% to Fire Resistance",
					"5% increased Light Radius"
				],
				"craftedMods": [
					"+20% to Cold and Lightning Resistances"
				],
				"pseudoMods": [
					"(pseudo) +65% total Elemental Resistance",
					"(pseudo) +14 total maximum Life",
					"Sum: 93"
				],
				"accountText": "wickedprayer > SABSrs",
				"whisper": "@SABSrs Hi, I would like to buy your Skull Star Magistrate Crown listed for 2 chaos in Metamorph (stash tab \"Anysos\"; position: left 5, top 11)",
				"note": "~price 2 chaos",
				"weightValue": 93,
				"valueText": "93 + defense value 0 + value shift 0",
				"evalValue": 93,
				"priceText": "2 chaos",
				"evalPrice": 2,
				"debug": {
					"id": "ba0ae0700d33920b6fa1d5c1b487bd36b53f96589369a9b019385cd989b0a549",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-19T21:05:13Z",
						"stash": {
							"name": "Anysos",
							"x": 4,
							"y": 10
						},
						"whisper": "@SABSrs Hi, I would like to buy your Skull Star Magistrate Crown listed for 2 chaos in Metamorph (stash tab \"Anysos\"; position: left 5, top 11)",
						"account": {
							"name": "wickedprayer",
							"lastCharacterName": "SABSrs",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 2,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetStrInt8.png?scale=1&w=2&h=2&v=59807b6bf308473f389a97b37513c89e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Skull Star",
						"typeLine": "Magistrate Crown",
						"identified": true,
						"ilvl": 76,
						"note": "~price 2 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"214",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"42",
										1
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"64",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"11% increased Global Accuracy Rating",
							"34% increased Armour and Energy Shield",
							"+14 to maximum Life",
							"+25% to Fire Resistance",
							"5% increased Light Radius"
						],
						"craftedMods": [
							"+20% to Cold and Lightning Resistances"
						],
						"enchantMods": [
							"Ice Shot has 60% increased Area of Effect angle"
						],
						"frameType": 2,
						"extended": {
							"ar": 214,
							"es": 42,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"enchant": [
									{
										"name": "Enchantment Ice Shot Cone Angle 2",
										"tier": "",
										"magnitudes": [
											{
												"hash": "enchant.stat_3781924200",
												"min": 60,
												"max": 60
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Ingrained",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_3321629045",
												"min": 27,
												"max": 42
											}
										]
									},
									{
										"name": "of the Kiln",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 24,
												"max": 29
											}
										]
									},
									{
										"name": "of Shining",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_624954515",
												"min": 9,
												"max": 11
											},
											{
												"hash": "explicit.stat_1263695895",
												"min": 5,
												"max": 5
											}
										]
									},
									{
										"name": "Healthy",
										"tier": "P9",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 10,
												"max": 19
											}
										]
									}
								],
								"crafted": [
									{
										"name": "of Craft",
										"tier": "R3",
										"magnitudes": [
											{
												"hash": "crafted.stat_4277795662",
												"min": 17,
												"max": 20
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"enchant": [
									[
										"enchant.stat_3781924200",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_624954515",
										[
											2
										]
									],
									[
										"explicit.stat_3321629045",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3
										]
									],
									[
										"explicit.stat_3372524247",
										[
											1
										]
									],
									[
										"explicit.stat_1263695895",
										[
											2
										]
									]
								],
								"crafted": [
									[
										"crafted.stat_4277795662",
										[
											0
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpTa3VsbCBTdGFyDQpNYWdpc3RyYXRlIENyb3duDQotLS0tLS0tLQ0KQXJtb3VyOiAyMTQgKGF1Z21lbnRlZCkNCkVuZXJneSBTaGllbGQ6IDQyIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDYwDQpTdHI6IDY0DQpJbnQ6IDY0DQotLS0tLS0tLQ0KU29ja2V0czogUi1SLVItQiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3Ng0KLS0tLS0tLS0NCkljZSBTaG90IGhhcyA2MCUgaW5jcmVhc2VkIEFyZWEgb2YgRWZmZWN0IGFuZ2xlDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQoxMSUgaW5jcmVhc2VkIEdsb2JhbCBBY2N1cmFjeSBSYXRpbmcNCjM0JSBpbmNyZWFzZWQgQXJtb3VyIGFuZCBFbmVyZ3kgU2hpZWxkDQorMTQgdG8gbWF4aW11bSBMaWZlDQorMjUlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KNSUgaW5jcmVhc2VkIExpZ2h0IFJhZGl1cw0KKzIwJSB0byBDb2xkIGFuZCBMaWdodG5pbmcgUmVzaXN0YW5jZXMgKGNyYWZ0ZWQpDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDIgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +65% total Elemental Resistance",
							"(pseudo) +14 total maximum Life",
							"Sum: 93"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "7d98e2cf25827f59fe8971b11595f6f70fe6473ccf6fdb1cd2bbea6d7023153c",
				"name": "Goldrim",
				"type": "Leather Cap",
				"itemLevel": 85,
				"sockets": [
					[
						"G",
						"G",
						"R",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 49"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+30 to Evasion Rating",
					"10% increased Rarity of Items found",
					"+31% to all Elemental Resistances",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +93% total Elemental Resistance",
					"Sum: 93"
				],
				"accountText": "AstonFergo > Too_Many_Bows",
				"whisper": "@Too_Many_Bows Hi, I would like to buy your Goldrim Leather Cap listed for 10 chaos in Metamorph (stash tab \"£\"; position: left 11, top 8)",
				"note": "~price 10 chaos",
				"weightValue": 93,
				"valueText": "93 + defense value 0 + value shift 0",
				"evalValue": 93,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "7d98e2cf25827f59fe8971b11595f6f70fe6473ccf6fdb1cd2bbea6d7023153c",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-03T14:05:00Z",
						"stash": {
							"name": "£",
							"x": 10,
							"y": 7
						},
						"whisper": "@Too_Many_Bows Hi, I would like to buy your Goldrim Leather Cap listed for 10 chaos in Metamorph (stash tab \"£\"; position: left 11, top 8)",
						"account": {
							"name": "AstonFergo",
							"lastCharacterName": "Too_Many_Bows",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?scale=1&w=2&h=2&v=3a1d216d1feccd885829f6dd4d0f1d5e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Goldrim",
						"typeLine": "Leather Cap",
						"identified": true,
						"ilvl": 85,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"49",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+30 to Evasion Rating",
							"10% increased Rarity of Items found",
							"+31% to all Elemental Resistances",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"flavourText": [
							"No metal slips as easily through the fingers as gold."
						],
						"frameType": 3,
						"extended": {
							"ev": 49,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 30,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 30,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 4,
												"max": 4
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
										]
									],
									[
										"explicit.stat_2901986750",
										[
											1
										]
									],
									[
										"explicit.stat_3767873853",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkdvbGRyaW0NCkxlYXRoZXIgQ2FwDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDQ5IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogRy1HLVItRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA4NQ0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzMwIHRvIEV2YXNpb24gUmF0aW5nDQoxMCUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBmb3VuZA0KKzMxJSB0byBhbGwgRWxlbWVudGFsIFJlc2lzdGFuY2VzDQpSZWZsZWN0cyA0IFBoeXNpY2FsIERhbWFnZSB0byBNZWxlZSBBdHRhY2tlcnMNCi0tLS0tLS0tDQpObyBtZXRhbCBzbGlwcyBhcyBlYXNpbHkgdGhyb3VnaCB0aGUgZmluZ2VycyBhcyBnb2xkLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAxMCBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +93% total Elemental Resistance",
							"Sum: 93"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "3b550e81f52e4ab83297f7e25f4bf77b484da3040c149d9ba9c232e39282552e",
				"name": "The Three Dragons",
				"type": "Golden Mask",
				"itemLevel": 82,
				"sockets": [
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 96",
					"energyShield 19"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+30% to all Elemental Resistances",
					"Your Fire Damage can Shock but not Ignite",
					"Your Cold Damage can Ignite but not Freeze or Chill",
					"Your Lightning Damage can Freeze but not Shock"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +90% total Elemental Resistance",
					"Sum: 90"
				],
				"accountText": "uryiwen > BowerAttack",
				"whisper": "@BowerAttack Hi, I would like to buy your The Three Dragons Golden Mask listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 11, top 1)",
				"weightValue": 90,
				"valueText": "90 + defense value 0 + value shift 0",
				"evalValue": 90,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "3b550e81f52e4ab83297f7e25f4bf77b484da3040c149d9ba9c232e39282552e",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-19T15:14:50Z",
						"stash": {
							"name": "~price 10 chaos",
							"x": 10,
							"y": 0
						},
						"whisper": "@BowerAttack Hi, I would like to buy your The Three Dragons Golden Mask listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 11, top 1)",
						"account": {
							"name": "uryiwen",
							"lastCharacterName": "BowerAttack",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/ThreeDragons.png?scale=1&w=2&h=2&v=61fed7da15e678cfd57b6dd9154865f8",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "The Three Dragons",
						"typeLine": "Golden Mask",
						"identified": true,
						"ilvl": 82,
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"96",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"19",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+30% to all Elemental Resistances",
							"Your Fire Damage can Shock but not Ignite",
							"Your Cold Damage can Ignite but not Freeze or Chill",
							"Your Lightning Damage can Freeze but not Shock"
						],
						"flavourText": [
							"\"The ice seared his naked feet\r",
							"As the lightning stilled his heart,\r",
							"But it was the flames upon his lover's face\r",
							"That roused him to vengeance.\"\r",
							"- From 'The Three Dragons' by Victario of Sarn"
						],
						"frameType": 3,
						"extended": {
							"ev": 96,
							"es": 19,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2949096603",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1261612903",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1011772129",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 26,
												"max": 30
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_2901986750",
										[
											3
										]
									],
									[
										"explicit.stat_2949096603",
										[
											0
										]
									],
									[
										"explicit.stat_1261612903",
										[
											1
										]
									],
									[
										"explicit.stat_1011772129",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClRoZSBUaHJlZSBEcmFnb25zDQpHb2xkZW4gTWFzaw0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiA5Ng0KRW5lcmd5IFNoaWVsZDogMTkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDgNCkRleDogNDANCkludDogNDANCi0tLS0tLS0tDQpTb2NrZXRzOiBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgyDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMzAlIHRvIGFsbCBFbGVtZW50YWwgUmVzaXN0YW5jZXMNCllvdXIgRmlyZSBEYW1hZ2UgY2FuIFNob2NrIGJ1dCBub3QgSWduaXRlDQpZb3VyIENvbGQgRGFtYWdlIGNhbiBJZ25pdGUgYnV0IG5vdCBGcmVlemUgb3IgQ2hpbGwNCllvdXIgTGlnaHRuaW5nIERhbWFnZSBjYW4gRnJlZXplIGJ1dCBub3QgU2hvY2sNCi0tLS0tLS0tDQoiVGhlIGljZSBzZWFyZWQgaGlzIG5ha2VkIGZlZXQNCkFzIHRoZSBsaWdodG5pbmcgc3RpbGxlZCBoaXMgaGVhcnQsDQpCdXQgaXQgd2FzIHRoZSBmbGFtZXMgdXBvbiBoaXMgbG92ZXIncyBmYWNlDQpUaGF0IHJvdXNlZCBoaW0gdG8gdmVuZ2VhbmNlLiINCi0gRnJvbSAnVGhlIFRocmVlIERyYWdvbnMnIGJ5IFZpY3RhcmlvIG9mIFNhcm4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCg=="
						},
						"pseudoMods": [
							"(pseudo) +90% total Elemental Resistance",
							"Sum: 90"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "41829029a4bc90173de647f0962e39cca704346c0062e6027d75084b39ac6ede",
				"name": "The Three Dragons",
				"type": "Golden Mask",
				"itemLevel": 79,
				"sockets": [
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 96",
					"energyShield 19"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+29% to all Elemental Resistances",
					"Your Fire Damage can Shock but not Ignite",
					"Your Cold Damage can Ignite but not Freeze or Chill",
					"Your Lightning Damage can Freeze but not Shock"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +87% total Elemental Resistance",
					"Sum: 87"
				],
				"accountText": "I_am_Gary > goes_to_eleven",
				"whisper": "@goes_to_eleven Hi, I would like to buy your The Three Dragons Golden Mask listed for 5 chaos in Metamorph (stash tab \"Sale\"; position: left 11, top 11)",
				"note": "~price 5 chaos",
				"weightValue": 87,
				"valueText": "87 + defense value 0 + value shift 0",
				"evalValue": 87,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "41829029a4bc90173de647f0962e39cca704346c0062e6027d75084b39ac6ede",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-04T21:37:15Z",
						"stash": {
							"name": "Sale",
							"x": 10,
							"y": 10
						},
						"whisper": "@goes_to_eleven Hi, I would like to buy your The Three Dragons Golden Mask listed for 5 chaos in Metamorph (stash tab \"Sale\"; position: left 11, top 11)",
						"account": {
							"name": "I_am_Gary",
							"lastCharacterName": "goes_to_eleven",
							"online": {
								"league": "Metamorph"
							},
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/ThreeDragons.png?scale=1&w=2&h=2&v=61fed7da15e678cfd57b6dd9154865f8",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "The Three Dragons",
						"typeLine": "Golden Mask",
						"identified": true,
						"ilvl": 79,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"96",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"19",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+29% to all Elemental Resistances",
							"Your Fire Damage can Shock but not Ignite",
							"Your Cold Damage can Ignite but not Freeze or Chill",
							"Your Lightning Damage can Freeze but not Shock"
						],
						"flavourText": [
							"\"The ice seared his naked feet\r",
							"As the lightning stilled his heart,\r",
							"But it was the flames upon his lover's face\r",
							"That roused him to vengeance.\"\r",
							"- From 'The Three Dragons' by Victario of Sarn"
						],
						"frameType": 3,
						"extended": {
							"ev": 96,
							"es": 19,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2949096603",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1261612903",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1011772129",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 26,
												"max": 30
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_2901986750",
										[
											3
										]
									],
									[
										"explicit.stat_2949096603",
										[
											0
										]
									],
									[
										"explicit.stat_1261612903",
										[
											1
										]
									],
									[
										"explicit.stat_1011772129",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClRoZSBUaHJlZSBEcmFnb25zDQpHb2xkZW4gTWFzaw0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiA5Ng0KRW5lcmd5IFNoaWVsZDogMTkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDgNCkRleDogNDANCkludDogNDANCi0tLS0tLS0tDQpTb2NrZXRzOiBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc5DQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMjklIHRvIGFsbCBFbGVtZW50YWwgUmVzaXN0YW5jZXMNCllvdXIgRmlyZSBEYW1hZ2UgY2FuIFNob2NrIGJ1dCBub3QgSWduaXRlDQpZb3VyIENvbGQgRGFtYWdlIGNhbiBJZ25pdGUgYnV0IG5vdCBGcmVlemUgb3IgQ2hpbGwNCllvdXIgTGlnaHRuaW5nIERhbWFnZSBjYW4gRnJlZXplIGJ1dCBub3QgU2hvY2sNCi0tLS0tLS0tDQoiVGhlIGljZSBzZWFyZWQgaGlzIG5ha2VkIGZlZXQNCkFzIHRoZSBsaWdodG5pbmcgc3RpbGxlZCBoaXMgaGVhcnQsDQpCdXQgaXQgd2FzIHRoZSBmbGFtZXMgdXBvbiBoaXMgbG92ZXIncyBmYWNlDQpUaGF0IHJvdXNlZCBoaW0gdG8gdmVuZ2VhbmNlLiINCi0gRnJvbSAnVGhlIFRocmVlIERyYWdvbnMnIGJ5IFZpY3RhcmlvIG9mIFNhcm4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgNSBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +87% total Elemental Resistance",
							"Sum: 87"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "1c15b70342fa08eb55e7e738b2d2641a63fe2f0cc27a7e2851caa9b5f148bbf0",
				"name": "The Three Dragons",
				"type": "Golden Mask",
				"itemLevel": 100,
				"sockets": [
					[
						"B",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 96",
					"energyShield 19"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+29% to all Elemental Resistances",
					"Your Fire Damage can Shock but not Ignite",
					"Your Cold Damage can Ignite but not Freeze or Chill",
					"Your Lightning Damage can Freeze but not Shock"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +87% total Elemental Resistance",
					"Sum: 87"
				],
				"accountText": "Khang_ > Kgfsda",
				"whisper": "@Kgfsda Hi, I would like to buy your The Three Dragons Golden Mask listed for 5 chaos in Metamorph (stash tab \"T2\"; position: left 11, top 11)",
				"note": "~price 5 chaos",
				"weightValue": 87,
				"valueText": "87 + defense value 0 + value shift 0",
				"evalValue": 87,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "1c15b70342fa08eb55e7e738b2d2641a63fe2f0cc27a7e2851caa9b5f148bbf0",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-28T23:41:41Z",
						"stash": {
							"name": "T2",
							"x": 10,
							"y": 10
						},
						"whisper": "@Kgfsda Hi, I would like to buy your The Three Dragons Golden Mask listed for 5 chaos in Metamorph (stash tab \"T2\"; position: left 11, top 11)",
						"account": {
							"name": "Khang_",
							"lastCharacterName": "Kgfsda",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/ThreeDragons.png?scale=1&w=2&h=2&v=61fed7da15e678cfd57b6dd9154865f8",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "The Three Dragons",
						"typeLine": "Golden Mask",
						"identified": true,
						"ilvl": 100,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"96",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"19",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+29% to all Elemental Resistances",
							"Your Fire Damage can Shock but not Ignite",
							"Your Cold Damage can Ignite but not Freeze or Chill",
							"Your Lightning Damage can Freeze but not Shock"
						],
						"flavourText": [
							"\"The ice seared his naked feet\r",
							"As the lightning stilled his heart,\r",
							"But it was the flames upon his lover's face\r",
							"That roused him to vengeance.\"\r",
							"- From 'The Three Dragons' by Victario of Sarn"
						],
						"frameType": 3,
						"extended": {
							"ev": 96,
							"es": 19,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2949096603",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1261612903",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1011772129",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 26,
												"max": 30
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_2901986750",
										[
											3
										]
									],
									[
										"explicit.stat_2949096603",
										[
											0
										]
									],
									[
										"explicit.stat_1261612903",
										[
											1
										]
									],
									[
										"explicit.stat_1011772129",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClRoZSBUaHJlZSBEcmFnb25zDQpHb2xkZW4gTWFzaw0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiA5Ng0KRW5lcmd5IFNoaWVsZDogMTkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDgNCkRleDogNDANCkludDogNDANCi0tLS0tLS0tDQpTb2NrZXRzOiBCLUcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogMTAwDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMjklIHRvIGFsbCBFbGVtZW50YWwgUmVzaXN0YW5jZXMNCllvdXIgRmlyZSBEYW1hZ2UgY2FuIFNob2NrIGJ1dCBub3QgSWduaXRlDQpZb3VyIENvbGQgRGFtYWdlIGNhbiBJZ25pdGUgYnV0IG5vdCBGcmVlemUgb3IgQ2hpbGwNCllvdXIgTGlnaHRuaW5nIERhbWFnZSBjYW4gRnJlZXplIGJ1dCBub3QgU2hvY2sNCi0tLS0tLS0tDQoiVGhlIGljZSBzZWFyZWQgaGlzIG5ha2VkIGZlZXQNCkFzIHRoZSBsaWdodG5pbmcgc3RpbGxlZCBoaXMgaGVhcnQsDQpCdXQgaXQgd2FzIHRoZSBmbGFtZXMgdXBvbiBoaXMgbG92ZXIncyBmYWNlDQpUaGF0IHJvdXNlZCBoaW0gdG8gdmVuZ2VhbmNlLiINCi0gRnJvbSAnVGhlIFRocmVlIERyYWdvbnMnIGJ5IFZpY3RhcmlvIG9mIFNhcm4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgNSBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +87% total Elemental Resistance",
							"Sum: 87"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "c5059ce7c1df1e1a4a387799559ca86f1188bf81fcfd5af485b3ead1b78b671b",
				"name": "The Three Dragons",
				"type": "Golden Mask",
				"itemLevel": 76,
				"sockets": [
					[
						"B",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 96",
					"energyShield 19"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+29% to all Elemental Resistances",
					"Your Fire Damage can Shock but not Ignite",
					"Your Cold Damage can Ignite but not Freeze or Chill",
					"Your Lightning Damage can Freeze but not Shock"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +87% total Elemental Resistance",
					"Sum: 87"
				],
				"accountText": "cbeer > boringgamelul",
				"whisper": "@boringgamelul Hi, I would like to buy your The Three Dragons Golden Mask listed for 10 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 3, top 1)",
				"note": "~b/o 10 chaos",
				"weightValue": 87,
				"valueText": "87 + defense value 0 + value shift 0",
				"evalValue": 87,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "c5059ce7c1df1e1a4a387799559ca86f1188bf81fcfd5af485b3ead1b78b671b",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-06T16:56:09Z",
						"stash": {
							"name": "~b/o 5 chaos",
							"x": 2,
							"y": 0
						},
						"whisper": "@boringgamelul Hi, I would like to buy your The Three Dragons Golden Mask listed for 10 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 3, top 1)",
						"account": {
							"name": "cbeer",
							"lastCharacterName": "boringgamelul",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/ThreeDragons.png?scale=1&w=2&h=2&v=61fed7da15e678cfd57b6dd9154865f8",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "The Three Dragons",
						"typeLine": "Golden Mask",
						"identified": true,
						"ilvl": 76,
						"note": "~b/o 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"96",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"19",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+29% to all Elemental Resistances",
							"Your Fire Damage can Shock but not Ignite",
							"Your Cold Damage can Ignite but not Freeze or Chill",
							"Your Lightning Damage can Freeze but not Shock"
						],
						"flavourText": [
							"\"The ice seared his naked feet\r",
							"As the lightning stilled his heart,\r",
							"But it was the flames upon his lover's face\r",
							"That roused him to vengeance.\"\r",
							"- From 'The Three Dragons' by Victario of Sarn"
						],
						"frameType": 3,
						"extended": {
							"ev": 96,
							"es": 19,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2949096603",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1261612903",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1011772129",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 26,
												"max": 30
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_2901986750",
										[
											3
										]
									],
									[
										"explicit.stat_2949096603",
										[
											0
										]
									],
									[
										"explicit.stat_1261612903",
										[
											1
										]
									],
									[
										"explicit.stat_1011772129",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClRoZSBUaHJlZSBEcmFnb25zDQpHb2xkZW4gTWFzaw0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiA5Ng0KRW5lcmd5IFNoaWVsZDogMTkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDgNCkRleDogNDANCkludDogNDANCi0tLS0tLS0tDQpTb2NrZXRzOiBCLUcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzYNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCisyOSUgdG8gYWxsIEVsZW1lbnRhbCBSZXNpc3RhbmNlcw0KWW91ciBGaXJlIERhbWFnZSBjYW4gU2hvY2sgYnV0IG5vdCBJZ25pdGUNCllvdXIgQ29sZCBEYW1hZ2UgY2FuIElnbml0ZSBidXQgbm90IEZyZWV6ZSBvciBDaGlsbA0KWW91ciBMaWdodG5pbmcgRGFtYWdlIGNhbiBGcmVlemUgYnV0IG5vdCBTaG9jaw0KLS0tLS0tLS0NCiJUaGUgaWNlIHNlYXJlZCBoaXMgbmFrZWQgZmVldA0KQXMgdGhlIGxpZ2h0bmluZyBzdGlsbGVkIGhpcyBoZWFydCwNCkJ1dCBpdCB3YXMgdGhlIGZsYW1lcyB1cG9uIGhpcyBsb3ZlcidzIGZhY2UNClRoYXQgcm91c2VkIGhpbSB0byB2ZW5nZWFuY2UuIg0KLSBGcm9tICdUaGUgVGhyZWUgRHJhZ29ucycgYnkgVmljdGFyaW8gb2YgU2Fybg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5iL28gMTAgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +87% total Elemental Resistance",
							"Sum: 87"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "34c55cf8fa87ce5ea36453abacdc32df315792f33e36f182eabb7b6d2dde3ad6",
				"name": "The Three Dragons",
				"type": "Golden Mask",
				"itemLevel": 83,
				"sockets": [
					[
						"B",
						"B",
						"G",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 96",
					"energyShield 19"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+29% to all Elemental Resistances",
					"Your Fire Damage can Shock but not Ignite",
					"Your Cold Damage can Ignite but not Freeze or Chill",
					"Your Lightning Damage can Freeze but not Shock"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +87% total Elemental Resistance",
					"Sum: 87"
				],
				"accountText": "Wizerok > Ra_va_ger",
				"whisper": "@Ra_va_ger Hi, I would like to buy your The Three Dragons Golden Mask listed for 10 chaos in Metamorph (stash tab \"SCRA\"; position: left 1, top 5)",
				"note": "~price 10 chaos",
				"weightValue": 87,
				"valueText": "87 + defense value 0 + value shift 0",
				"evalValue": 87,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "34c55cf8fa87ce5ea36453abacdc32df315792f33e36f182eabb7b6d2dde3ad6",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-10T15:30:21Z",
						"stash": {
							"name": "SCRA",
							"x": 0,
							"y": 4
						},
						"whisper": "@Ra_va_ger Hi, I would like to buy your The Three Dragons Golden Mask listed for 10 chaos in Metamorph (stash tab \"SCRA\"; position: left 1, top 5)",
						"account": {
							"name": "Wizerok",
							"lastCharacterName": "Ra_va_ger",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/ThreeDragons.png?scale=1&w=2&h=2&v=61fed7da15e678cfd57b6dd9154865f8",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "The Three Dragons",
						"typeLine": "Golden Mask",
						"identified": true,
						"ilvl": 83,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"96",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"19",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+29% to all Elemental Resistances",
							"Your Fire Damage can Shock but not Ignite",
							"Your Cold Damage can Ignite but not Freeze or Chill",
							"Your Lightning Damage can Freeze but not Shock"
						],
						"flavourText": [
							"\"The ice seared his naked feet\r",
							"As the lightning stilled his heart,\r",
							"But it was the flames upon his lover's face\r",
							"That roused him to vengeance.\"\r",
							"- From 'The Three Dragons' by Victario of Sarn"
						],
						"frameType": 3,
						"extended": {
							"ev": 96,
							"es": 19,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2949096603",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1261612903",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1011772129",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 26,
												"max": 30
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_2901986750",
										[
											3
										]
									],
									[
										"explicit.stat_2949096603",
										[
											0
										]
									],
									[
										"explicit.stat_1261612903",
										[
											1
										]
									],
									[
										"explicit.stat_1011772129",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClRoZSBUaHJlZSBEcmFnb25zDQpHb2xkZW4gTWFzaw0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiA5Ng0KRW5lcmd5IFNoaWVsZDogMTkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDgNCkRleDogNDANCkludDogNDANCi0tLS0tLS0tDQpTb2NrZXRzOiBCLUItRy1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgzDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMjklIHRvIGFsbCBFbGVtZW50YWwgUmVzaXN0YW5jZXMNCllvdXIgRmlyZSBEYW1hZ2UgY2FuIFNob2NrIGJ1dCBub3QgSWduaXRlDQpZb3VyIENvbGQgRGFtYWdlIGNhbiBJZ25pdGUgYnV0IG5vdCBGcmVlemUgb3IgQ2hpbGwNCllvdXIgTGlnaHRuaW5nIERhbWFnZSBjYW4gRnJlZXplIGJ1dCBub3QgU2hvY2sNCi0tLS0tLS0tDQoiVGhlIGljZSBzZWFyZWQgaGlzIG5ha2VkIGZlZXQNCkFzIHRoZSBsaWdodG5pbmcgc3RpbGxlZCBoaXMgaGVhcnQsDQpCdXQgaXQgd2FzIHRoZSBmbGFtZXMgdXBvbiBoaXMgbG92ZXIncyBmYWNlDQpUaGF0IHJvdXNlZCBoaW0gdG8gdmVuZ2VhbmNlLiINCi0gRnJvbSAnVGhlIFRocmVlIERyYWdvbnMnIGJ5IFZpY3RhcmlvIG9mIFNhcm4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMTAgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +87% total Elemental Resistance",
							"Sum: 87"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "0d8c3bbbe5cad269ae43371155dbb6817a2f7c8b8bb3354b88da65b57be56146",
				"name": "Ezomyte Peak",
				"type": "Iron Hat",
				"itemLevel": 70,
				"sockets": [
					[
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 28"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"20% increased Global Physical Damage",
					"+19 to Armour",
					"+43 to maximum Life",
					"Cannot Evade Enemy Attacks"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +43 total maximum Life",
					"Sum: 86"
				],
				"accountText": "DefectedMaN_tv > OneLastOneNow",
				"whisper": "@OneLastOneNow Hi, I would like to buy your Ezomyte Peak Iron Hat listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 8, top 7)",
				"weightValue": 86,
				"valueText": "86 + defense value 0 + value shift 0",
				"evalValue": 86,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "0d8c3bbbe5cad269ae43371155dbb6817a2f7c8b8bb3354b88da65b57be56146",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-01T06:13:53Z",
						"stash": {
							"name": "~b/o 5 chaos",
							"x": 7,
							"y": 6
						},
						"whisper": "@OneLastOneNow Hi, I would like to buy your Ezomyte Peak Iron Hat listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 8, top 7)",
						"account": {
							"name": "DefectedMaN_tv",
							"lastCharacterName": "OneLastOneNow",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/EzomytePeak.png?scale=1&w=2&h=2&v=1ea157f8fe142f5abe41f1342ed3a02c",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Ezomyte Peak",
						"typeLine": "Iron Hat",
						"identified": true,
						"ilvl": 70,
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"28",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"20% increased Global Physical Damage",
							"+19 to Armour",
							"+43 to maximum Life",
							"Cannot Evade Enemy Attacks"
						],
						"flavourText": [
							"Centuries of servitude, a day\r",
							"of glory, an eternity of death."
						],
						"frameType": 3,
						"extended": {
							"ar": 28,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 15,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 25,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1310194496",
												"min": 20,
												"max": 20
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_474452755",
												"min": 1,
												"max": 1
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_1310194496",
										[
											2
										]
									],
									[
										"explicit.stat_3484657501",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_474452755",
										[
											3
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkV6b215dGUgUGVhaw0KSXJvbiBIYXQNCi0tLS0tLS0tDQpBcm1vdXI6IDI4IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3MA0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KMjAlIGluY3JlYXNlZCBHbG9iYWwgUGh5c2ljYWwgRGFtYWdlDQorMTkgdG8gQXJtb3VyDQorNDMgdG8gbWF4aW11bSBMaWZlDQpDYW5ub3QgRXZhZGUgRW5lbXkgQXR0YWNrcw0KLS0tLS0tLS0NCkNlbnR1cmllcyBvZiBzZXJ2aXR1ZGUsIGEgZGF5DQpvZiBnbG9yeSwgYW4gZXRlcm5pdHkgb2YgZGVhdGguDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQo="
						},
						"pseudoMods": [
							"(pseudo) +43 total maximum Life",
							"Sum: 86"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "fae30ddcfe7f629954302d5ff486fcb27b4528483ac1df6769cc1182bcf99cf9",
				"name": "The Three Dragons",
				"type": "Golden Mask",
				"itemLevel": 80,
				"sockets": [
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 96",
					"energyShield 19"
				],
				"enchantMods": [
					"Cremation can have up to 1 additional Geyser at a time"
				],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+28% to all Elemental Resistances",
					"Your Fire Damage can Shock but not Ignite",
					"Your Cold Damage can Ignite but not Freeze or Chill",
					"Your Lightning Damage can Freeze but not Shock"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +84% total Elemental Resistance",
					"Sum: 84"
				],
				"accountText": "panleeleune > PanleelCZ",
				"whisper": "@PanleelCZ Hi, I would like to buy your The Three Dragons Golden Mask listed for 3 chaos in Metamorph (stash tab \"SELL1\"; position: left 8, top 1)",
				"note": "~price 3 chaos",
				"weightValue": 84,
				"valueText": "84 + defense value 0 + value shift 0",
				"evalValue": 84,
				"priceText": "3 chaos",
				"evalPrice": 3,
				"debug": {
					"id": "fae30ddcfe7f629954302d5ff486fcb27b4528483ac1df6769cc1182bcf99cf9",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-29T13:16:28Z",
						"stash": {
							"name": "SELL1",
							"x": 7,
							"y": 0
						},
						"whisper": "@PanleelCZ Hi, I would like to buy your The Three Dragons Golden Mask listed for 3 chaos in Metamorph (stash tab \"SELL1\"; position: left 8, top 1)",
						"account": {
							"name": "panleeleune",
							"lastCharacterName": "PanleelCZ",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 3,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/ThreeDragons.png?scale=1&w=2&h=2&v=61fed7da15e678cfd57b6dd9154865f8",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "The Three Dragons",
						"typeLine": "Golden Mask",
						"identified": true,
						"ilvl": 80,
						"note": "~price 3 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"96",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"19",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+28% to all Elemental Resistances",
							"Your Fire Damage can Shock but not Ignite",
							"Your Cold Damage can Ignite but not Freeze or Chill",
							"Your Lightning Damage can Freeze but not Shock"
						],
						"enchantMods": [
							"Cremation can have up to 1 additional Geyser at a time"
						],
						"flavourText": [
							"\"The ice seared his naked feet\r",
							"As the lightning stilled his heart,\r",
							"But it was the flames upon his lover's face\r",
							"That roused him to vengeance.\"\r",
							"- From 'The Three Dragons' by Victario of Sarn"
						],
						"frameType": 3,
						"extended": {
							"ev": 96,
							"es": 19,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"enchant": [
									{
										"name": "Enchantment Cremation Maximum Geysers 1",
										"tier": "",
										"magnitudes": [
											{
												"hash": "enchant.stat_3503624267",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2949096603",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1261612903",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1011772129",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 26,
												"max": 30
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"enchant": [
									[
										"enchant.stat_3503624267",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_2901986750",
										[
											3
										]
									],
									[
										"explicit.stat_2949096603",
										[
											0
										]
									],
									[
										"explicit.stat_1261612903",
										[
											1
										]
									],
									[
										"explicit.stat_1011772129",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClRoZSBUaHJlZSBEcmFnb25zDQpHb2xkZW4gTWFzaw0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiA5Ng0KRW5lcmd5IFNoaWVsZDogMTkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjANCkRleDogNDANCkludDogNDANCi0tLS0tLS0tDQpTb2NrZXRzOiBCIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgwDQotLS0tLS0tLQ0KQ3JlbWF0aW9uIGNhbiBoYXZlIHVwIHRvIDEgYWRkaXRpb25hbCBHZXlzZXIgYXQgYSB0aW1lDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMjglIHRvIGFsbCBFbGVtZW50YWwgUmVzaXN0YW5jZXMNCllvdXIgRmlyZSBEYW1hZ2UgY2FuIFNob2NrIGJ1dCBub3QgSWduaXRlDQpZb3VyIENvbGQgRGFtYWdlIGNhbiBJZ25pdGUgYnV0IG5vdCBGcmVlemUgb3IgQ2hpbGwNCllvdXIgTGlnaHRuaW5nIERhbWFnZSBjYW4gRnJlZXplIGJ1dCBub3QgU2hvY2sNCi0tLS0tLS0tDQoiVGhlIGljZSBzZWFyZWQgaGlzIG5ha2VkIGZlZXQNCkFzIHRoZSBsaWdodG5pbmcgc3RpbGxlZCBoaXMgaGVhcnQsDQpCdXQgaXQgd2FzIHRoZSBmbGFtZXMgdXBvbiBoaXMgbG92ZXIncyBmYWNlDQpUaGF0IHJvdXNlZCBoaW0gdG8gdmVuZ2VhbmNlLiINCi0gRnJvbSAnVGhlIFRocmVlIERyYWdvbnMnIGJ5IFZpY3RhcmlvIG9mIFNhcm4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMyBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +84% total Elemental Resistance",
							"Sum: 84"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "afef0daa9747d43f0be73e15577a89615d51382fad69455f5afce9571cb4109b",
				"name": "The Three Dragons",
				"type": "Golden Mask",
				"itemLevel": 83,
				"sockets": [
					[
						"R",
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 96",
					"energyShield 19"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+28% to all Elemental Resistances",
					"Your Fire Damage can Shock but not Ignite",
					"Your Cold Damage can Ignite but not Freeze or Chill",
					"Your Lightning Damage can Freeze but not Shock"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +84% total Elemental Resistance",
					"Sum: 84"
				],
				"accountText": "maliknadija > nemanista",
				"whisper": "@nemanista Hi, I would like to buy your The Three Dragons Golden Mask listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 7, top 1)",
				"weightValue": 84,
				"valueText": "84 + defense value 0 + value shift 0",
				"evalValue": 84,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "afef0daa9747d43f0be73e15577a89615d51382fad69455f5afce9571cb4109b",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-31T14:39:25Z",
						"stash": {
							"name": "~price 10 chaos",
							"x": 6,
							"y": 0
						},
						"whisper": "@nemanista Hi, I would like to buy your The Three Dragons Golden Mask listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 7, top 1)",
						"account": {
							"name": "maliknadija",
							"lastCharacterName": "nemanista",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/ThreeDragons.png?scale=1&w=2&h=2&v=61fed7da15e678cfd57b6dd9154865f8",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "The Three Dragons",
						"typeLine": "Golden Mask",
						"identified": true,
						"ilvl": 83,
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"96",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"19",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+28% to all Elemental Resistances",
							"Your Fire Damage can Shock but not Ignite",
							"Your Cold Damage can Ignite but not Freeze or Chill",
							"Your Lightning Damage can Freeze but not Shock"
						],
						"flavourText": [
							"\"The ice seared his naked feet\r",
							"As the lightning stilled his heart,\r",
							"But it was the flames upon his lover's face\r",
							"That roused him to vengeance.\"\r",
							"- From 'The Three Dragons' by Victario of Sarn"
						],
						"frameType": 3,
						"extended": {
							"ev": 96,
							"es": 19,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2949096603",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1261612903",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1011772129",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 26,
												"max": 30
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_2901986750",
										[
											3
										]
									],
									[
										"explicit.stat_2949096603",
										[
											0
										]
									],
									[
										"explicit.stat_1261612903",
										[
											1
										]
									],
									[
										"explicit.stat_1011772129",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClRoZSBUaHJlZSBEcmFnb25zDQpHb2xkZW4gTWFzaw0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiA5Ng0KRW5lcmd5IFNoaWVsZDogMTkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDgNCkRleDogNDANCkludDogNDANCi0tLS0tLS0tDQpTb2NrZXRzOiBSLUcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODMNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCisyOCUgdG8gYWxsIEVsZW1lbnRhbCBSZXNpc3RhbmNlcw0KWW91ciBGaXJlIERhbWFnZSBjYW4gU2hvY2sgYnV0IG5vdCBJZ25pdGUNCllvdXIgQ29sZCBEYW1hZ2UgY2FuIElnbml0ZSBidXQgbm90IEZyZWV6ZSBvciBDaGlsbA0KWW91ciBMaWdodG5pbmcgRGFtYWdlIGNhbiBGcmVlemUgYnV0IG5vdCBTaG9jaw0KLS0tLS0tLS0NCiJUaGUgaWNlIHNlYXJlZCBoaXMgbmFrZWQgZmVldA0KQXMgdGhlIGxpZ2h0bmluZyBzdGlsbGVkIGhpcyBoZWFydCwNCkJ1dCBpdCB3YXMgdGhlIGZsYW1lcyB1cG9uIGhpcyBsb3ZlcidzIGZhY2UNClRoYXQgcm91c2VkIGhpbSB0byB2ZW5nZWFuY2UuIg0KLSBGcm9tICdUaGUgVGhyZWUgRHJhZ29ucycgYnkgVmljdGFyaW8gb2YgU2Fybg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0K"
						},
						"pseudoMods": [
							"(pseudo) +84% total Elemental Resistance",
							"Sum: 84"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "f707428f04a4f4f0a3a60a9bec9b9c6a0a08a19afe38847eb03677f2e3646b98",
				"name": "Horror Visor",
				"type": "Solaris Circlet",
				"itemLevel": 75,
				"sockets": [
					[
						"B",
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"energyShield 105"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+48 to maximum Energy Shield",
					"+20 to maximum Life",
					"+25 to maximum Mana",
					"16% increased Rarity of Items found",
					"+43% to Fire Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +43% total Elemental Resistance",
					"(pseudo) +20 total maximum Life",
					"Sum: 83"
				],
				"accountText": "goodcha2 > Ttrapss",
				"whisper": "@Ttrapss Hi, I would like to buy your Horror Visor Solaris Circlet listed for 1 alch in Metamorph (stash tab \"~price 1 alch\"; position: left 11, top 4)",
				"weightValue": 83,
				"valueText": "83 + defense value 0 + value shift 0",
				"evalValue": 83,
				"priceText": "1 alch",
				"evalPrice": 0.5,
				"debug": {
					"id": "f707428f04a4f4f0a3a60a9bec9b9c6a0a08a19afe38847eb03677f2e3646b98",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-19T19:50:55Z",
						"stash": {
							"name": "~price 1 alch",
							"x": 10,
							"y": 3
						},
						"whisper": "@Ttrapss Hi, I would like to buy your Horror Visor Solaris Circlet listed for 1 alch in Metamorph (stash tab \"~price 1 alch\"; position: left 11, top 4)",
						"account": {
							"name": "goodcha2",
							"lastCharacterName": "Ttrapss",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 1,
							"currency": "alch"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetInt9.png?scale=1&w=2&h=2&v=3aeebe40b6db3abe7e4d92e3402db35e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Horror Visor",
						"typeLine": "Solaris Circlet",
						"identified": true,
						"ilvl": 75,
						"corrupted": true,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"105",
										1
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"59",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"122",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+48 to maximum Energy Shield",
							"+20 to maximum Life",
							"+25 to maximum Mana",
							"16% increased Rarity of Items found",
							"+43% to Fire Resistance"
						],
						"frameType": 2,
						"extended": {
							"es": 105,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Azure",
										"tier": "P10",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 25,
												"max": 29
											}
										]
									},
									{
										"name": "Seething",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_4052037485",
												"min": 39,
												"max": 49
											}
										]
									},
									{
										"name": "Monk's",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_4052037485",
												"min": 8,
												"max": 10
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
											}
										]
									},
									{
										"name": "of the Magma",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 42,
												"max": 45
											}
										]
									},
									{
										"name": "of Archaeology",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 15,
												"max": 20
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_4052037485",
										[
											1,
											2
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2
										]
									],
									[
										"explicit.stat_1050105434",
										[
											0
										]
									],
									[
										"explicit.stat_3917489142",
										[
											4
										]
									],
									[
										"explicit.stat_3372524247",
										[
											3
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpIb3Jyb3IgVmlzb3INClNvbGFyaXMgQ2lyY2xldA0KLS0tLS0tLS0NCkVuZXJneSBTaGllbGQ6IDEwNSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1OQ0KSW50OiAxMjINCi0tLS0tLS0tDQpTb2NrZXRzOiBCLUIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzUNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCis0OCB0byBtYXhpbXVtIEVuZXJneSBTaGllbGQNCisyMCB0byBtYXhpbXVtIExpZmUNCisyNSB0byBtYXhpbXVtIE1hbmENCjE2JSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIGZvdW5kDQorNDMlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0K"
						},
						"pseudoMods": [
							"(pseudo) +43% total Elemental Resistance",
							"(pseudo) +20 total maximum Life",
							"Sum: 83"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "2284a3727a133ad4fc44e16a1e95715b2161b0fd1af0f9a105cda4df99a2b0aa",
				"name": "Maelström Dome",
				"type": "Solaris Circlet",
				"itemLevel": 70,
				"sockets": [
					[
						"B",
						"G"
					],
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"energyShield 65"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+8 to maximum Energy Shield",
					"+37 to maximum Life",
					"+60 to maximum Mana",
					"+7% to Cold Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +7% total Elemental Resistance",
					"(pseudo) +37 total maximum Life",
					"Sum: 81"
				],
				"accountText": "Karkento > KenzyCharges",
				"whisper": "@KenzyCharges Hi, I would like to buy your Maelström Dome Solaris Circlet listed for 1 chaos in Metamorph (stash tab \"sell\"; position: left 1, top 16)",
				"note": "~price 1 chaos",
				"weightValue": 81,
				"valueText": "81 + defense value 0 + value shift 0",
				"evalValue": 81,
				"priceText": "1 chaos",
				"evalPrice": 1,
				"debug": {
					"id": "2284a3727a133ad4fc44e16a1e95715b2161b0fd1af0f9a105cda4df99a2b0aa",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-30T04:29:53Z",
						"stash": {
							"name": "sell",
							"x": 0,
							"y": 15
						},
						"whisper": "@KenzyCharges Hi, I would like to buy your Maelström Dome Solaris Circlet listed for 1 chaos in Metamorph (stash tab \"sell\"; position: left 1, top 16)",
						"account": {
							"name": "Karkento",
							"lastCharacterName": "KenzyCharges",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 1,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetInt9.png?scale=1&w=2&h=2&v=3aeebe40b6db3abe7e4d92e3402db35e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Maelström Dome",
						"typeLine": "Solaris Circlet",
						"identified": true,
						"ilvl": 70,
						"note": "~price 1 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"65",
										1
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"59",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"122",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+8 to maximum Energy Shield",
							"+37 to maximum Life",
							"+60 to maximum Mana",
							"+7% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"es": 65,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Inuit",
										"tier": "S8",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 6,
												"max": 11
											}
										]
									},
									{
										"name": "Acolyte's",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_4052037485",
												"min": 8,
												"max": 10
											},
											{
												"hash": "explicit.stat_1050105434",
												"min": 11,
												"max": 15
											}
										]
									},
									{
										"name": "Opalescent",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 45,
												"max": 49
											}
										]
									},
									{
										"name": "Stalwart",
										"tier": "P7",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 30,
												"max": 39
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_4052037485",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3
										]
									],
									[
										"explicit.stat_1050105434",
										[
											1,
											2
										]
									],
									[
										"explicit.stat_4220027924",
										[
											0
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpNYWVsc3Ryw7ZtIERvbWUNClNvbGFyaXMgQ2lyY2xldA0KLS0tLS0tLS0NCkVuZXJneSBTaGllbGQ6IDY1IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU5DQpJbnQ6IDEyMg0KLS0tLS0tLS0NClNvY2tldHM6IEItRyBCIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcwDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorOCB0byBtYXhpbXVtIEVuZXJneSBTaGllbGQNCiszNyB0byBtYXhpbXVtIExpZmUNCis2MCB0byBtYXhpbXVtIE1hbmENCis3JSB0byBDb2xkIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMSBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +7% total Elemental Resistance",
							"(pseudo) +37 total maximum Life",
							"Sum: 81"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "1e2df72bda30eedb47b484c4388f6b3aef6ab7ef6a56e33ba3f01c18204b61f5",
				"name": "The Three Dragons",
				"type": "Golden Mask",
				"itemLevel": 81,
				"sockets": [
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 96",
					"energyShield 19"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+27% to all Elemental Resistances",
					"Your Fire Damage can Shock but not Ignite",
					"Your Cold Damage can Ignite but not Freeze or Chill",
					"Your Lightning Damage can Freeze but not Shock"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +81% total Elemental Resistance",
					"Sum: 81"
				],
				"accountText": "Philthz0r > PhilthyOwl",
				"whisper": "@PhilthyOwl Hi, I would like to buy your The Three Dragons Golden Mask listed for 10 chaos in Metamorph (stash tab \"KFC HOW CAN I HELP YOU\"; position: left 4, top 5)",
				"note": "~price 10 chaos",
				"weightValue": 81,
				"valueText": "81 + defense value 0 + value shift 0",
				"evalValue": 81,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "1e2df72bda30eedb47b484c4388f6b3aef6ab7ef6a56e33ba3f01c18204b61f5",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-02T18:15:29Z",
						"stash": {
							"name": "KFC HOW CAN I HELP YOU",
							"x": 3,
							"y": 4
						},
						"whisper": "@PhilthyOwl Hi, I would like to buy your The Three Dragons Golden Mask listed for 10 chaos in Metamorph (stash tab \"KFC HOW CAN I HELP YOU\"; position: left 4, top 5)",
						"account": {
							"name": "Philthz0r",
							"lastCharacterName": "PhilthyOwl",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/ThreeDragons.png?scale=1&w=2&h=2&v=61fed7da15e678cfd57b6dd9154865f8",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "The Three Dragons",
						"typeLine": "Golden Mask",
						"identified": true,
						"ilvl": 81,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"96",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"19",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+27% to all Elemental Resistances",
							"Your Fire Damage can Shock but not Ignite",
							"Your Cold Damage can Ignite but not Freeze or Chill",
							"Your Lightning Damage can Freeze but not Shock"
						],
						"flavourText": [
							"\"The ice seared his naked feet\r",
							"As the lightning stilled his heart,\r",
							"But it was the flames upon his lover's face\r",
							"That roused him to vengeance.\"\r",
							"- From 'The Three Dragons' by Victario of Sarn"
						],
						"frameType": 3,
						"extended": {
							"ev": 96,
							"es": 19,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2949096603",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1261612903",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1011772129",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 26,
												"max": 30
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_2901986750",
										[
											3
										]
									],
									[
										"explicit.stat_2949096603",
										[
											0
										]
									],
									[
										"explicit.stat_1261612903",
										[
											1
										]
									],
									[
										"explicit.stat_1011772129",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClRoZSBUaHJlZSBEcmFnb25zDQpHb2xkZW4gTWFzaw0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiA5Ng0KRW5lcmd5IFNoaWVsZDogMTkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDgNCkRleDogNDANCkludDogNDANCi0tLS0tLS0tDQpTb2NrZXRzOiBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgxDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMjclIHRvIGFsbCBFbGVtZW50YWwgUmVzaXN0YW5jZXMNCllvdXIgRmlyZSBEYW1hZ2UgY2FuIFNob2NrIGJ1dCBub3QgSWduaXRlDQpZb3VyIENvbGQgRGFtYWdlIGNhbiBJZ25pdGUgYnV0IG5vdCBGcmVlemUgb3IgQ2hpbGwNCllvdXIgTGlnaHRuaW5nIERhbWFnZSBjYW4gRnJlZXplIGJ1dCBub3QgU2hvY2sNCi0tLS0tLS0tDQoiVGhlIGljZSBzZWFyZWQgaGlzIG5ha2VkIGZlZXQNCkFzIHRoZSBsaWdodG5pbmcgc3RpbGxlZCBoaXMgaGVhcnQsDQpCdXQgaXQgd2FzIHRoZSBmbGFtZXMgdXBvbiBoaXMgbG92ZXIncyBmYWNlDQpUaGF0IHJvdXNlZCBoaW0gdG8gdmVuZ2VhbmNlLiINCi0gRnJvbSAnVGhlIFRocmVlIERyYWdvbnMnIGJ5IFZpY3RhcmlvIG9mIFNhcm4NCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMTAgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +81% total Elemental Resistance",
							"Sum: 81"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "81153bbc1e2897d50550824a1c39e2bb2d66d25139f1ca196755bdc6a6c0f20c",
				"name": "The Formless Flame",
				"type": "Siege Helmet",
				"itemLevel": 72,
				"sockets": [
					[
						"R"
					],
					[
						"R",
						"G",
						"R"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 355"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+118 to Armour",
					"+40 to maximum Life",
					"-20 Fire Damage taken from Hits",
					"Armour is increased by Uncapped Fire Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +40 total maximum Life",
					"Sum: 80"
				],
				"accountText": "Verticalz > GODCOMPLEXITY",
				"whisper": "@GODCOMPLEXITY Hi, I would like to buy your The Formless Flame Siege Helmet listed for 10 chaos in Metamorph (stash tab \"emoney\"; position: left 4, top 5)",
				"note": "~price 10 chaos",
				"weightValue": 80,
				"valueText": "80 + defense value 0 + value shift 0",
				"evalValue": 80,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "81153bbc1e2897d50550824a1c39e2bb2d66d25139f1ca196755bdc6a6c0f20c",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-09T01:04:43Z",
						"stash": {
							"name": "emoney",
							"x": 3,
							"y": 4
						},
						"whisper": "@GODCOMPLEXITY Hi, I would like to buy your The Formless Flame Siege Helmet listed for 10 chaos in Metamorph (stash tab \"emoney\"; position: left 4, top 5)",
						"account": {
							"name": "Verticalz",
							"lastCharacterName": "GODCOMPLEXITY",
							"online": {
								"league": "Metamorph"
							},
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/FormlessInFlames.png?scale=1&w=2&h=2&v=5e472e809db69a5b61b91976382f8dc4",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "The Formless Flame",
						"typeLine": "Siege Helmet",
						"identified": true,
						"ilvl": 72,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"355",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"101",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+118 to Armour",
							"+40 to maximum Life",
							"-20 Fire Damage taken from Hits",
							"Armour is increased by Uncapped Fire Resistance"
						],
						"flavourText": [
							"Our skin turns to ash\r",
							"and we are swallowed by his brilliant red light.\r",
							"\r",
							"<default>{This item can be transformed with a Blessing of Xoph}"
						],
						"frameType": 3,
						"extended": {
							"ar": 355,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 100,
												"max": 120
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_614758785",
												"min": -20,
												"max": -20
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_713266390",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 40,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": null
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3484657501",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3
										]
									],
									[
										"explicit.stat_614758785",
										[
											1
										]
									],
									[
										"explicit.stat_713266390",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClRoZSBGb3JtbGVzcyBGbGFtZQ0KU2llZ2UgSGVsbWV0DQotLS0tLS0tLQ0KQXJtb3VyOiAzNTUgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDgNClN0cjogMTAxDQotLS0tLS0tLQ0KU29ja2V0czogUiBSLUctUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3Mg0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzExOCB0byBBcm1vdXINCis0MCB0byBtYXhpbXVtIExpZmUNCi0yMCBGaXJlIERhbWFnZSB0YWtlbiBmcm9tIEhpdHMNCkFybW91ciBpcyBpbmNyZWFzZWQgYnkgVW5jYXBwZWQgRmlyZSBSZXNpc3RhbmNlDQotLS0tLS0tLQ0KT3VyIHNraW4gdHVybnMgdG8gYXNoDQphbmQgd2UgYXJlIHN3YWxsb3dlZCBieSBoaXMgYnJpbGxpYW50IHJlZCBsaWdodC4NCg0KVGhpcyBpdGVtIGNhbiBiZSB0cmFuc2Zvcm1lZCB3aXRoIGEgQmxlc3Npbmcgb2YgWG9waA0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAxMCBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +40 total maximum Life",
							"Sum: 80"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "c9117f40c93301068815e040b28d5c81f5a38c9aec9b902c6f88362ab3b0dffc",
				"name": "The Three Dragons",
				"type": "Golden Mask",
				"itemLevel": 72,
				"sockets": [
					[
						"G"
					],
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 96",
					"energyShield 19"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+26% to all Elemental Resistances",
					"Your Fire Damage can Shock but not Ignite",
					"Your Cold Damage can Ignite but not Freeze or Chill",
					"Your Lightning Damage can Freeze but not Shock"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +78% total Elemental Resistance",
					"Sum: 78"
				],
				"accountText": "DevElements > DevLeagueAgony",
				"whisper": "@DevLeagueAgony Hi, I would like to buy your The Three Dragons Golden Mask listed for 10 chaos in Metamorph (stash tab \"Sale\"; position: left 9, top 4)",
				"note": "~price 10 chaos",
				"weightValue": 78,
				"valueText": "78 + defense value 0 + value shift 0",
				"evalValue": 78,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "c9117f40c93301068815e040b28d5c81f5a38c9aec9b902c6f88362ab3b0dffc",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-02T23:08:18Z",
						"stash": {
							"name": "Sale",
							"x": 8,
							"y": 3
						},
						"whisper": "@DevLeagueAgony Hi, I would like to buy your The Three Dragons Golden Mask listed for 10 chaos in Metamorph (stash tab \"Sale\"; position: left 9, top 4)",
						"account": {
							"name": "DevElements",
							"lastCharacterName": "DevLeagueAgony",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/ThreeDragons.png?scale=1&w=2&h=2&v=61fed7da15e678cfd57b6dd9154865f8",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "The Three Dragons",
						"typeLine": "Golden Mask",
						"identified": true,
						"ilvl": 72,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"96",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"19",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+26% to all Elemental Resistances",
							"Your Fire Damage can Shock but not Ignite",
							"Your Cold Damage can Ignite but not Freeze or Chill",
							"Your Lightning Damage can Freeze but not Shock"
						],
						"flavourText": [
							"\"The ice seared his naked feet\r",
							"As the lightning stilled his heart,\r",
							"But it was the flames upon his lover's face\r",
							"That roused him to vengeance.\"\r",
							"- From 'The Three Dragons' by Victario of Sarn"
						],
						"frameType": 3,
						"extended": {
							"ev": 96,
							"es": 19,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2949096603",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1261612903",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1011772129",
												"min": 1,
												"max": 1
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2901986750",
												"min": 26,
												"max": 30
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_2901986750",
										[
											3
										]
									],
									[
										"explicit.stat_2949096603",
										[
											0
										]
									],
									[
										"explicit.stat_1261612903",
										[
											1
										]
									],
									[
										"explicit.stat_1011772129",
										[
											2
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNClRoZSBUaHJlZSBEcmFnb25zDQpHb2xkZW4gTWFzaw0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiA5Ng0KRW5lcmd5IFNoaWVsZDogMTkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDgNCkRleDogNDANCkludDogNDANCi0tLS0tLS0tDQpTb2NrZXRzOiBHIEcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzINCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCisyNiUgdG8gYWxsIEVsZW1lbnRhbCBSZXNpc3RhbmNlcw0KWW91ciBGaXJlIERhbWFnZSBjYW4gU2hvY2sgYnV0IG5vdCBJZ25pdGUNCllvdXIgQ29sZCBEYW1hZ2UgY2FuIElnbml0ZSBidXQgbm90IEZyZWV6ZSBvciBDaGlsbA0KWW91ciBMaWdodG5pbmcgRGFtYWdlIGNhbiBGcmVlemUgYnV0IG5vdCBTaG9jaw0KLS0tLS0tLS0NCiJUaGUgaWNlIHNlYXJlZCBoaXMgbmFrZWQgZmVldA0KQXMgdGhlIGxpZ2h0bmluZyBzdGlsbGVkIGhpcyBoZWFydCwNCkJ1dCBpdCB3YXMgdGhlIGZsYW1lcyB1cG9uIGhpcyBsb3ZlcidzIGZhY2UNClRoYXQgcm91c2VkIGhpbSB0byB2ZW5nZWFuY2UuIg0KLSBGcm9tICdUaGUgVGhyZWUgRHJhZ29ucycgYnkgVmljdGFyaW8gb2YgU2Fybg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAxMCBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +78% total Elemental Resistance",
							"Sum: 78"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "d115a238d572da230f6a5dbe17e718b7421585d9b75226981e793981882e9755",
				"name": "Mind Crest",
				"type": "Lunaris Circlet",
				"itemLevel": 75,
				"sockets": [
					[
						"B"
					],
					[
						"B"
					],
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"energyShield 38"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+50 to maximum Mana",
					"22% increased Rarity of Items found",
					"+41% to Fire Resistance",
					"+33% to Cold Resistance"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +74% total Elemental Resistance",
					"Sum: 74"
				],
				"accountText": "Kikubao > SpreadYoButtchicks",
				"whisper": "@SpreadYoButtchicks Hi, I would like to buy your Mind Crest Lunaris Circlet listed for 2 chaos in Metamorph (stash tab \"S\"; position: left 1, top 7)",
				"note": "~b/o 2 chaos",
				"weightValue": 74,
				"valueText": "74 + defense value 0 + value shift 0",
				"evalValue": 74,
				"priceText": "2 chaos",
				"evalPrice": 2,
				"debug": {
					"id": "d115a238d572da230f6a5dbe17e718b7421585d9b75226981e793981882e9755",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-15T16:27:25Z",
						"stash": {
							"name": "S",
							"x": 0,
							"y": 6
						},
						"whisper": "@SpreadYoButtchicks Hi, I would like to buy your Mind Crest Lunaris Circlet listed for 2 chaos in Metamorph (stash tab \"S\"; position: left 1, top 7)",
						"account": {
							"name": "Kikubao",
							"lastCharacterName": "SpreadYoButtchicks",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 2,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetInt6.png?scale=1&w=2&h=2&v=539aa00b0793c4adb79ba0559efd8a15",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 2,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Mind Crest",
						"typeLine": "Lunaris Circlet",
						"identified": true,
						"ilvl": 75,
						"note": "~b/o 2 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"38",
										0
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"49",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"83",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+50 to maximum Mana",
							"22% increased Rarity of Items found",
							"+41% to Fire Resistance",
							"+33% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"es": 38,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Volcano",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 36,
												"max": 41
											}
										]
									},
									{
										"name": "Gentian",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 50,
												"max": 54
											}
										]
									},
									{
										"name": "Dragon's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 19,
												"max": 24
											}
										]
									},
									{
										"name": "of the Walrus",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 30,
												"max": 35
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_1050105434",
										[
											1
										]
									],
									[
										"explicit.stat_3917489142",
										[
											2
										]
									],
									[
										"explicit.stat_3372524247",
										[
											0
										]
									],
									[
										"explicit.stat_4220027924",
										[
											3
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpNaW5kIENyZXN0DQpMdW5hcmlzIENpcmNsZXQNCi0tLS0tLS0tDQpFbmVyZ3kgU2hpZWxkOiAzOA0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA0OQ0KSW50OiA4Mw0KLS0tLS0tLS0NClNvY2tldHM6IEIgQiBCIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc1DQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNTAgdG8gbWF4aW11bSBNYW5hDQoyMiUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBmb3VuZA0KKzQxJSB0byBGaXJlIFJlc2lzdGFuY2UNCiszMyUgdG8gQ29sZCBSZXNpc3RhbmNlDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfmIvbyAyIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +74% total Elemental Resistance",
							"Sum: 74"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "29e722e818c2da46756a5463d761dd29a3771beaf7e2b2e842b62d2a4eea91fc",
				"name": "Gale Crown",
				"type": "Ursine Pelt",
				"itemLevel": 81,
				"sockets": [
					[
						"G"
					],
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 276"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+38 to Dexterity",
					"+34% to Fire Resistance",
					"+40% to Lightning Resistance",
					"Reflects 4 Physical Damage to Melee Attackers"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +74% total Elemental Resistance",
					"Sum: 74"
				],
				"accountText": "Voldaren2012 > VolNeco",
				"whisper": "@VolNeco Hi, I would like to buy your Gale Crown Ursine Pelt listed for 8 chaos in Metamorph (stash tab \"~b/o 8 chaos\"; position: left 5, top 1)",
				"weightValue": 74,
				"valueText": "74 + defense value 0 + value shift 0",
				"evalValue": 74,
				"priceText": "8 chaos",
				"evalPrice": 8,
				"debug": {
					"id": "29e722e818c2da46756a5463d761dd29a3771beaf7e2b2e842b62d2a4eea91fc",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-04T05:51:43Z",
						"stash": {
							"name": "~b/o 8 chaos",
							"x": 4,
							"y": 0
						},
						"whisper": "@VolNeco Hi, I would like to buy your Gale Crown Ursine Pelt listed for 8 chaos in Metamorph (stash tab \"~b/o 8 chaos\"; position: left 5, top 1)",
						"account": {
							"name": "Voldaren2012",
							"lastCharacterName": "VolNeco",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 8,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDex7.png?scale=1&w=2&h=2&v=8d01ba9ab32a8d671bcc66c25c0e90ec",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Gale Crown",
						"typeLine": "Ursine Pelt",
						"identified": true,
						"ilvl": 81,
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"276",
										0
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"55",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"114",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+38 to Dexterity",
							"+34% to Fire Resistance",
							"+40% to Lightning Resistance",
							"Reflects 4 Physical Damage to Melee Attackers"
						],
						"frameType": 2,
						"extended": {
							"ev": 276,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Jaguar",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 38,
												"max": 42
											}
										]
									},
									{
										"name": "of the Furnace",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 30,
												"max": 35
											}
										]
									},
									{
										"name": "of the Maelstrom",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 36,
												"max": 41
											}
										]
									},
									{
										"name": "Thorny",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3767873853",
												"min": 1,
												"max": 4
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_3372524247",
										[
											1
										]
									],
									[
										"explicit.stat_1671376347",
										[
											2
										]
									],
									[
										"explicit.stat_3767873853",
										[
											3
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpHYWxlIENyb3duDQpVcnNpbmUgUGVsdA0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiAyNzYNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTUNCkRleDogMTE0DQotLS0tLS0tLQ0KU29ja2V0czogRyBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgxDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMzggdG8gRGV4dGVyaXR5DQorMzQlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzQwJSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KUmVmbGVjdHMgNCBQaHlzaWNhbCBEYW1hZ2UgdG8gTWVsZWUgQXR0YWNrZXJzDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQo="
						},
						"pseudoMods": [
							"(pseudo) +74% total Elemental Resistance",
							"Sum: 74"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "44b87287f6dbbcae617f5d2b09567aac6165c502ea8d6ab5e81f9836b7419b25",
				"name": "Eye of Malice",
				"type": "Callous Mask",
				"itemLevel": 83,
				"sockets": [
					[
						"B"
					],
					[
						"B"
					],
					[
						"B",
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 617",
					"energyShield 121"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"406% increased Evasion and Energy Shield",
					"+29% to Fire Resistance",
					"+39% to Cold Resistance",
					"25% chance to inflict Cold Exposure on Hit",
					"25% chance to inflict Fire Exposure on Hit",
					"Nearby Enemies have 50% increased Fire and Cold Resistances"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +68% total Elemental Resistance",
					"Sum: 68"
				],
				"accountText": "Дэфи > Take_my_mine",
				"whisper": "@Take_my_mine Здравствуйте, хочу купить у вас Око злобы Маска равнодушия за 5 chaos в лиге Метаморф (секция \"13\"; позиция: 3 столбец, 5 ряд)",
				"note": "~price 5 chaos",
				"weightValue": 68,
				"valueText": "68 + defense value 0 + value shift 0",
				"evalValue": 68,
				"priceText": "5 chaos",
				"evalPrice": 5,
				"debug": {
					"id": "44b87287f6dbbcae617f5d2b09567aac6165c502ea8d6ab5e81f9836b7419b25",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-04T16:33:58Z",
						"stash": {
							"name": "13",
							"x": 2,
							"y": 4
						},
						"whisper": "@Take_my_mine Здравствуйте, хочу купить у вас Око злобы Маска равнодушия за 5 chaos в лиге Метаморф (секция \"13\"; позиция: 3 столбец, 5 ряд)",
						"account": {
							"name": "Дэфи",
							"lastCharacterName": "Take_my_mine",
							"online": null,
							"language": "ru_RU"
						},
						"price": {
							"type": "~price",
							"amount": 5,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/EyeOfDesire.png?scale=1&w=2&h=2&v=b8808fd91dd41dca76c6ffc5e09b1391",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 2,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 2,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Eye of Malice",
						"typeLine": "Callous Mask",
						"identified": true,
						"ilvl": 83,
						"note": "~price 5 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"617",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							},
							{
								"name": "Energy Shield",
								"values": [
									[
										"121",
										1
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"51",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"51",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"406% increased Evasion and Energy Shield",
							"+29% to Fire Resistance",
							"+39% to Cold Resistance",
							"25% chance to inflict Cold Exposure on Hit",
							"25% chance to inflict Fire Exposure on Hit",
							"Nearby Enemies have 50% increased Fire and Cold Resistances"
						],
						"flavourText": [
							"Through vision coloured by burning rage and icy hate\r",
							"peers a visitor from a realm of ill intent..."
						],
						"frameType": 3,
						"extended": {
							"ev": 617,
							"es": 121,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1999113824",
												"min": 400,
												"max": 500
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 20,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 20,
												"max": 40
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_2630708439",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3602667353",
												"min": 25,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_4273356746",
												"min": 50,
												"max": 50
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_1999113824",
										[
											0
										]
									],
									[
										"explicit.stat_3372524247",
										[
											1
										]
									],
									[
										"explicit.stat_4220027924",
										[
											2
										]
									],
									[
										"explicit.stat_2630708439",
										[
											3
										]
									],
									[
										"explicit.stat_3602667353",
										[
											4
										]
									],
									[
										"explicit.stat_4273356746",
										[
											5
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkV5ZSBvZiBNYWxpY2UNCkNhbGxvdXMgTWFzaw0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiA2MTcgKGF1Z21lbnRlZCkNCkVuZXJneSBTaGllbGQ6IDEyMSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA0OA0KRGV4OiA1MQ0KSW50OiA1MQ0KLS0tLS0tLS0NClNvY2tldHM6IEIgQiBCLUIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODMNCi0tLS0tLS0tDQorMSB0byBNYXhpbXVtIFBvd2VyIENoYXJnZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCjQwNiUgaW5jcmVhc2VkIEV2YXNpb24gYW5kIEVuZXJneSBTaGllbGQNCisyOSUgdG8gRmlyZSBSZXNpc3RhbmNlDQorMzklIHRvIENvbGQgUmVzaXN0YW5jZQ0KMjUlIGNoYW5jZSB0byBpbmZsaWN0IENvbGQgRXhwb3N1cmUgb24gSGl0DQoyNSUgY2hhbmNlIHRvIGluZmxpY3QgRmlyZSBFeHBvc3VyZSBvbiBIaXQNCk5lYXJieSBFbmVtaWVzIGhhdmUgNTAlIGluY3JlYXNlZCBGaXJlIGFuZCBDb2xkIFJlc2lzdGFuY2VzDQotLS0tLS0tLQ0KVGhyb3VnaCB2aXNpb24gY29sb3VyZWQgYnkgYnVybmluZyByYWdlIGFuZCBpY3kgaGF0ZQ0KcGVlcnMgYSB2aXNpdG9yIGZyb20gYSByZWFsbSBvZiBpbGwgaW50ZW50Li4uDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDUgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +68% total Elemental Resistance",
							"Sum: 68"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "386b6a0de9baa3f82fa2ec520c1ebe4d38e2694f24903d378dafa11aef7397fe",
				"name": "Pain Cowl",
				"type": "Hubris Circlet",
				"itemLevel": 79,
				"sockets": [
					[
						"B",
						"B"
					],
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"energyShield 105"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"38% increased Energy Shield",
					"+34 to maximum Life",
					"+43 to maximum Mana",
					"8% increased Rarity of Items found",
					"14% increased Stun and Block Recovery"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +34 total maximum Life",
					"Sum: 68"
				],
				"accountText": "Juzamlord > Raal_Meta",
				"whisper": "@Raal_Meta Hi, I would like to buy your Pain Cowl Hubris Circlet listed for 10 chaos in Metamorph (stash tab \"€\"; position: left 7, top 4)",
				"note": "~b/o 10 chaos",
				"weightValue": 68,
				"valueText": "68 + defense value 0 + value shift 0",
				"evalValue": 68,
				"priceText": "10 chaos",
				"evalPrice": 10,
				"debug": {
					"id": "386b6a0de9baa3f82fa2ec520c1ebe4d38e2694f24903d378dafa11aef7397fe",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-14T20:22:27Z",
						"stash": {
							"name": "€",
							"x": 6,
							"y": 3
						},
						"whisper": "@Raal_Meta Hi, I would like to buy your Pain Cowl Hubris Circlet listed for 10 chaos in Metamorph (stash tab \"€\"; position: left 7, top 4)",
						"account": {
							"name": "Juzamlord",
							"lastCharacterName": "Raal_Meta",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 10,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetInt11.png?scale=1&w=2&h=2&v=e785517985bfa266e348519edfc14485",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Pain Cowl",
						"typeLine": "Hubris Circlet",
						"identified": true,
						"ilvl": 79,
						"note": "~b/o 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"105",
										1
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"69",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"154",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"38% increased Energy Shield",
							"+34 to maximum Life",
							"+43 to maximum Mana",
							"8% increased Rarity of Items found",
							"14% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"es": 105,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Djinn's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_4015621042",
												"min": 33,
												"max": 38
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 14,
												"max": 15
											}
										]
									},
									{
										"name": "of Plunder",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 6,
												"max": 10
											}
										]
									},
									{
										"name": "Aqua",
										"tier": "P7",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 40,
												"max": 44
											}
										]
									},
									{
										"name": "Stalwart",
										"tier": "P7",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 30,
												"max": 39
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_4015621042",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3
										]
									],
									[
										"explicit.stat_1050105434",
										[
											2
										]
									],
									[
										"explicit.stat_3917489142",
										[
											1
										]
									],
									[
										"explicit.stat_2511217560",
										[
											0
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpQYWluIENvd2wNCkh1YnJpcyBDaXJjbGV0DQotLS0tLS0tLQ0KRW5lcmd5IFNoaWVsZDogMTA1IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY5DQpJbnQ6IDE1NA0KLS0tLS0tLS0NClNvY2tldHM6IEItQiBCIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc5DQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQozOCUgaW5jcmVhc2VkIEVuZXJneSBTaGllbGQNCiszNCB0byBtYXhpbXVtIExpZmUNCis0MyB0byBtYXhpbXVtIE1hbmENCjglIGluY3JlYXNlZCBSYXJpdHkgb2YgSXRlbXMgZm91bmQNCjE0JSBpbmNyZWFzZWQgU3R1biBhbmQgQmxvY2sgUmVjb3ZlcnkNCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+Yi9vIDEwIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +34 total maximum Life",
							"Sum: 68"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "db1a3fffee0c335e860f0e1ec1a65f1a400518c0c46643f42ef568dd4596c2e5",
				"name": "Wrath Shelter",
				"type": "Necromancer Circlet",
				"itemLevel": 70,
				"sockets": [
					[
						"B"
					],
					[
						"B"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"energyShield 61"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"18% increased Energy Shield",
					"+27 to maximum Life",
					"Regenerate 2.5 Life per second",
					"+15 to maximum Mana",
					"+13% to Cold Resistance",
					"9% increased Stun and Block Recovery"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +13% total Elemental Resistance",
					"(pseudo) +27 total maximum Life",
					"Sum: 67"
				],
				"accountText": "Grundlewarg > EllfieMcElphinator",
				"whisper": "@EllfieMcElphinator Hi, I would like to buy your Wrath Shelter Necromancer Circlet listed for 1 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 7, top 1)",
				"weightValue": 67,
				"valueText": "67 + defense value 0 + value shift 0",
				"evalValue": 67,
				"priceText": "1 chaos",
				"evalPrice": 1,
				"debug": {
					"id": "db1a3fffee0c335e860f0e1ec1a65f1a400518c0c46643f42ef568dd4596c2e5",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-09T05:45:23Z",
						"stash": {
							"name": "~price 1 chaos",
							"x": 6,
							"y": 0
						},
						"whisper": "@EllfieMcElphinator Hi, I would like to buy your Wrath Shelter Necromancer Circlet listed for 1 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 7, top 1)",
						"account": {
							"name": "Grundlewarg",
							"lastCharacterName": "EllfieMcElphinator",
							"online": {
								"league": "Metamorph"
							},
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 1,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetInt8.png?scale=1&w=2&h=2&v=ac2e8f600c1f786b95f0aaa816d0a1c5",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Wrath Shelter",
						"typeLine": "Necromancer Circlet",
						"identified": true,
						"ilvl": 70,
						"corrupted": true,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"61",
										1
									]
								],
								"displayMode": 0,
								"type": 18
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"54",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"112",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"18% increased Energy Shield",
							"+27 to maximum Life",
							"Regenerate 2.5 Life per second",
							"+15 to maximum Mana",
							"+13% to Cold Resistance",
							"9% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"es": 61,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Sanguine",
										"tier": "P8",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 20,
												"max": 29
											}
										]
									},
									{
										"name": "Gremlin's",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4015621042",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 8,
												"max": 9
											}
										]
									},
									{
										"name": "Beryl",
										"tier": "P12",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 15,
												"max": 19
											}
										]
									},
									{
										"name": "of the Lizard",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_3325883026",
												"min": 2,
												"max": 4
											}
										]
									},
									{
										"name": "of the Seal",
										"tier": "S7",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 12,
												"max": 17
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_4015621042",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0
										]
									],
									[
										"explicit.stat_3325883026",
										[
											3
										]
									],
									[
										"explicit.stat_1050105434",
										[
											2
										]
									],
									[
										"explicit.stat_4220027924",
										[
											4
										]
									],
									[
										"explicit.stat_2511217560",
										[
											1
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpXcmF0aCBTaGVsdGVyDQpOZWNyb21hbmNlciBDaXJjbGV0DQotLS0tLS0tLQ0KRW5lcmd5IFNoaWVsZDogNjEgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTQNCkludDogMTEyDQotLS0tLS0tLQ0KU29ja2V0czogQiBCIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcwDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQoxOCUgaW5jcmVhc2VkIEVuZXJneSBTaGllbGQNCisyNyB0byBtYXhpbXVtIExpZmUNClJlZ2VuZXJhdGUgMi41IExpZmUgcGVyIHNlY29uZA0KKzE1IHRvIG1heGltdW0gTWFuYQ0KKzEzJSB0byBDb2xkIFJlc2lzdGFuY2UNCjklIGluY3JlYXNlZCBTdHVuIGFuZCBCbG9jayBSZWNvdmVyeQ0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0K"
						},
						"pseudoMods": [
							"(pseudo) +13% total Elemental Resistance",
							"(pseudo) +27 total maximum Life",
							"Sum: 67"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "3b1695149b71bf027c0cdbac2cd12dd27f25054f84dd755279d9328a4037e4c4",
				"name": "Ezomyte Peak",
				"type": "Iron Hat",
				"itemLevel": 74,
				"sockets": [
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"armour 32"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"20% increased Global Physical Damage",
					"+23 to Armour",
					"+32 to maximum Life",
					"Cannot Evade Enemy Attacks"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +32 total maximum Life",
					"Sum: 64"
				],
				"accountText": "Goldhelm > Goldhelm_Me",
				"whisper": "@Goldhelm_Me Hi, I would like to buy your Ezomyte Peak Iron Hat listed for 1 chaos in Metamorph (stash tab \"Sell\"; position: left 1, top 8)",
				"note": "~price 1 chaos",
				"weightValue": 64,
				"valueText": "64 + defense value 0 + value shift 0",
				"evalValue": 64,
				"priceText": "1 chaos",
				"evalPrice": 1,
				"debug": {
					"id": "3b1695149b71bf027c0cdbac2cd12dd27f25054f84dd755279d9328a4037e4c4",
					"listing": {
						"method": "psapi",
						"indexed": "2020-02-03T20:20:09Z",
						"stash": {
							"name": "Sell",
							"x": 0,
							"y": 7
						},
						"whisper": "@Goldhelm_Me Hi, I would like to buy your Ezomyte Peak Iron Hat listed for 1 chaos in Metamorph (stash tab \"Sell\"; position: left 1, top 8)",
						"account": {
							"name": "Goldhelm",
							"lastCharacterName": "Goldhelm_Me",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 1,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/EzomytePeak.png?scale=1&w=2&h=2&v=1ea157f8fe142f5abe41f1342ed3a02c",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Ezomyte Peak",
						"typeLine": "Iron Hat",
						"identified": true,
						"ilvl": 74,
						"note": "~price 1 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"32",
										1
									]
								],
								"displayMode": 0,
								"type": 16
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 0
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"20% increased Global Physical Damage",
							"+23 to Armour",
							"+32 to maximum Life",
							"Cannot Evade Enemy Attacks"
						],
						"flavourText": [
							"Centuries of servitude, a day\r",
							"of glory, an eternity of death."
						],
						"frameType": 3,
						"extended": {
							"ar": 32,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 15,
												"max": 25
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 25,
												"max": 50
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1310194496",
												"min": 20,
												"max": 20
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_474452755",
												"min": 1,
												"max": 1
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_1310194496",
										[
											2
										]
									],
									[
										"explicit.stat_3484657501",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_474452755",
										[
											3
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_life",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBVbmlxdWUNCkV6b215dGUgUGVhaw0KSXJvbiBIYXQNCi0tLS0tLS0tDQpBcm1vdXI6IDMyIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3NA0KLS0tLS0tLS0NCisxIHRvIE1heGltdW0gUG93ZXIgQ2hhcmdlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KMjAlIGluY3JlYXNlZCBHbG9iYWwgUGh5c2ljYWwgRGFtYWdlDQorMjMgdG8gQXJtb3VyDQorMzIgdG8gbWF4aW11bSBMaWZlDQpDYW5ub3QgRXZhZGUgRW5lbXkgQXR0YWNrcw0KLS0tLS0tLS0NCkNlbnR1cmllcyBvZiBzZXJ2aXR1ZGUsIGEgZGF5DQpvZiBnbG9yeSwgYW4gZXRlcm5pdHkgb2YgZGVhdGguDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDEgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +32 total maximum Life",
							"Sum: 64"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "255e6f0056a8a32fc34626706fa3ca68a84a6617d84db70de1b06c1262ccaf5f",
				"name": "Brood Halo",
				"type": "Lion Pelt",
				"itemLevel": 83,
				"sockets": [
					[
						"G"
					],
					[
						"G"
					]
				],
				"corrupted": true,
				"defenseProperties": [
					"evasion 562"
				],
				"enchantMods": [],
				"implicitMods": [
					"+1 to Maximum Power Charges"
				],
				"explicitMods": [
					"+34 to Intelligence",
					"40% increased Evasion Rating",
					"+21% to Fire Resistance",
					"+43% to Cold Resistance",
					"17% increased Stun and Block Recovery"
				],
				"craftedMods": [],
				"pseudoMods": [
					"(pseudo) +64% total Elemental Resistance",
					"Sum: 64"
				],
				"accountText": "Avu > Ancient_Mai",
				"whisper": "@Ancient_Mai Hi, I would like to buy your Brood Halo Lion Pelt listed for 3 chaos in Metamorph (stash tab \"~b/o 3 chaos\"; position: left 7, top 11)",
				"weightValue": 64,
				"valueText": "64 + defense value 0 + value shift 0",
				"evalValue": 64,
				"priceText": "3 chaos",
				"evalPrice": 3,
				"debug": {
					"id": "255e6f0056a8a32fc34626706fa3ca68a84a6617d84db70de1b06c1262ccaf5f",
					"listing": {
						"method": "psapi",
						"indexed": "2020-01-25T10:50:48Z",
						"stash": {
							"name": "~b/o 3 chaos",
							"x": 6,
							"y": 10
						},
						"whisper": "@Ancient_Mai Hi, I would like to buy your Brood Halo Lion Pelt listed for 3 chaos in Metamorph (stash tab \"~b/o 3 chaos\"; position: left 7, top 11)",
						"account": {
							"name": "Avu",
							"lastCharacterName": "Ancient_Mai",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 3,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDex10.png?scale=1&w=2&h=2&v=429392c896c4a48b46ed48d4e2e89e7f",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Brood Halo",
						"typeLine": "Lion Pelt",
						"identified": true,
						"ilvl": 83,
						"corrupted": true,
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+8%",
										1
									]
								],
								"displayMode": 0,
								"type": 6
							},
							{
								"name": "Evasion Rating",
								"values": [
									[
										"562",
										1
									]
								],
								"displayMode": 0,
								"type": 17
							}
						],
						"requirements": [
							{
								"name": "Level",
								"values": [
									[
										"70",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"150",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+1 to Maximum Power Charges"
						],
						"explicitMods": [
							"+34 to Intelligence",
							"40% increased Evasion Rating",
							"+21% to Fire Resistance",
							"+43% to Cold Resistance",
							"17% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ev": 562,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_227523295",
												"min": 1,
												"max": 1
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Sage",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_328541901",
												"min": 33,
												"max": 37
											}
										]
									},
									{
										"name": "Hummingbird's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 39,
												"max": 42
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 16,
												"max": 17
											}
										]
									},
									{
										"name": "of the Drake",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 18,
												"max": 23
											}
										]
									},
									{
										"name": "of the Ice",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 42,
												"max": 45
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_227523295",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_328541901",
										[
											0
										]
									],
									[
										"explicit.stat_124859000",
										[
											1
										]
									],
									[
										"explicit.stat_3372524247",
										[
											2
										]
									],
									[
										"explicit.stat_4220027924",
										[
											3
										]
									],
									[
										"explicit.stat_2511217560",
										[
											1
										]
									]
								],
								"pseudo": [
									[
										"pseudo.pseudo_total_elemental_resistance",
										null
									],
									[
										"statgroup.0",
										null
									]
								]
							},
							"text": "UmFyaXR5OiBSYXJlDQpCcm9vZCBIYWxvDQpMaW9uIFBlbHQNCi0tLS0tLS0tDQpRdWFsaXR5OiArOCUgKGF1Z21lbnRlZCkNCkV2YXNpb24gUmF0aW5nOiA1NjIgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNzANCkRleDogMTUwDQotLS0tLS0tLQ0KU29ja2V0czogRyBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgzDQotLS0tLS0tLQ0KKzEgdG8gTWF4aW11bSBQb3dlciBDaGFyZ2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMzQgdG8gSW50ZWxsaWdlbmNlDQo0MCUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorMjElIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzQzJSB0byBDb2xkIFJlc2lzdGFuY2UNCjE3JSBpbmNyZWFzZWQgU3R1biBhbmQgQmxvY2sgUmVjb3ZlcnkNCi0tLS0tLS0tDQpDb3JydXB0ZWQNCg=="
						},
						"pseudoMods": [
							"(pseudo) +64% total Elemental Resistance",
							"Sum: 64"
						]
					}
				},
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
