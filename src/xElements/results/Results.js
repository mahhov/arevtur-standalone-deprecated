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
				"id": "85b5033f4970597c81429cf15db3395e463e5e7ce4157cee6836b32c418ede07",
				"name": "Kaom's Roots",
				"sockets": [],
				"itemLevel": 70,
				"defenseProperties": [
					"armour 255"
				],
				"implicitMods": [
					"7% chance to Dodge Spell Hits while moving"
				],
				"explicitMods": [
					"Has no Sockets",
					"Cannot be Knocked Back",
					"+180 to maximum Life",
					"Action Speed cannot be modified to below base value",
					"Unwavering Stance"
				],
				"pseudoMods": [
					"(pseudo) +180 total maximum Life",
					"Sum: 360"
				],
				"accountText": "Tymov > RS_W_Rzyci_Mam_Wszystko",
				"whisper": "@RS_W_Rzyci_Mam_Wszystko Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 10 chaos in Metamorph (stash tab \"For Sale\"; position: left 1, top 1)",
				"note": "~price 10 chaos",
				"priceText": "10 chaos",
				"valueExcludingProperties": 360,
				"evalValue": 360.255,
				"evalPrice": 10,
				"debug": {
					"id": "85b5033f4970597c81429cf15db3395e463e5e7ce4157cee6836b32c418ede07",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-20T23:04:10Z",
						"stash": {
							"name": "For Sale",
							"x": 0,
							"y": 0
						},
						"whisper": "@RS_W_Rzyci_Mam_Wszystko Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 10 chaos in Metamorph (stash tab \"For Sale\"; position: left 1, top 1)",
						"account": {
							"name": "Tymov",
							"lastCharacterName": "RS_W_Rzyci_Mam_Wszystko",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/KaomsRoots.png?scale=1&w=2&h=2&v=81f27d3abd8a538e3f90eec1f8f17ff7",
						"league": "Metamorph",
						"name": "Kaom's Roots",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 70,
						"note": "~price 10 chaos",
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
										"255",
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
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"7% chance to Dodge Spell Hits while moving"
						],
						"explicitMods": [
							"Has no Sockets",
							"Cannot be Knocked Back",
							"+180 to maximum Life",
							"Action Speed cannot be modified to below base value",
							"Unwavering Stance"
						],
						"flavourText": [
							"Don't flinch. It's a waste of good hitting time."
						],
						"frameType": 3,
						"extended": {
							"ar": 255,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_682182849",
												"min": 6,
												"max": 10
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
												"min": 150,
												"max": 200
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1683578560",
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
												"hash": "explicit.stat_4212255859",
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
												"hash": "explicit.stat_1493091477",
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
												"hash": "explicit.stat_628716294",
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
										"implicit.stat_682182849",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_1493091477",
										[
											3
										]
									],
									[
										"explicit.stat_4212255859",
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
										"explicit.stat_628716294",
										[
											4
										]
									],
									[
										"explicit.stat_1683578560",
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
							"text": "UmFyaXR5OiBVbmlxdWUNCkthb20ncyBSb290cw0KVGl0YW4gR3JlYXZlcw0KLS0tLS0tLS0NClF1YWxpdHk6ICs2JSAoYXVnbWVudGVkKQ0KQXJtb3VyOiAyNTUgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjgNClN0cjogMTIwDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzANCi0tLS0tLS0tDQo3JSBjaGFuY2UgdG8gRG9kZ2UgU3BlbGwgSGl0cyB3aGlsZSBtb3ZpbmcgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCkhhcyBubyBTb2NrZXRzDQpDYW5ub3QgYmUgS25vY2tlZCBCYWNrDQorMTgwIHRvIG1heGltdW0gTGlmZQ0KQWN0aW9uIFNwZWVkIGNhbm5vdCBiZSBtb2RpZmllZCB0byBiZWxvdyBiYXNlIHZhbHVlDQpVbndhdmVyaW5nIFN0YW5jZQ0KLS0tLS0tLS0NCkRvbid0IGZsaW5jaC4gSXQncyBhIHdhc3RlIG9mIGdvb2QgaGl0dGluZyB0aW1lLg0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAxMCBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +180 total maximum Life",
							"Sum: 360"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "84b0c2b6d8b911f413d8a0fcff9243b50d40f3024dcca604dd5616e885f24cf2",
				"name": "Kaom's Roots",
				"sockets": [],
				"itemLevel": 29,
				"defenseProperties": [
					"armour 289"
				],
				"implicitMods": [],
				"explicitMods": [
					"Has no Sockets",
					"Cannot be Knocked Back",
					"+173 to maximum Life",
					"Action Speed cannot be modified to below base value",
					"Unwavering Stance"
				],
				"pseudoMods": [
					"(pseudo) +173 total maximum Life",
					"Sum: 346"
				],
				"accountText": "madezz > mademm",
				"whisper": "@mademm 안녕하세요, 변형(보관함 탭 \"5\", 위치: 왼쪽 11, 상단 1)에 5 chaos(으)로 올려놓은 카옴의 근본(Kaom's Roots) 거신 각반을(를) 구매하고 싶습니다",
				"note": "~price 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 346,
				"evalValue": 346.289,
				"evalPrice": 5,
				"debug": {
					"id": "84b0c2b6d8b911f413d8a0fcff9243b50d40f3024dcca604dd5616e885f24cf2",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T07:50:06Z",
						"stash": {
							"name": "5",
							"x": 10,
							"y": 0
						},
						"whisper": "@mademm 안녕하세요, 변형(보관함 탭 \"5\", 위치: 왼쪽 11, 상단 1)에 5 chaos(으)로 올려놓은 카옴의 근본(Kaom's Roots) 거신 각반을(를) 구매하고 싶습니다",
						"account": {
							"name": "madezz",
							"lastCharacterName": "mademm",
							"online": null,
							"language": "ko_KR"
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/KaomsRoots.png?scale=1&w=2&h=2&v=81f27d3abd8a538e3f90eec1f8f17ff7",
						"league": "Metamorph",
						"name": "Kaom's Roots",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 29,
						"note": "~price 5 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"241",
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
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"Has no Sockets",
							"Cannot be Knocked Back",
							"+173 to maximum Life",
							"Action Speed cannot be modified to below base value",
							"Unwavering Stance"
						],
						"flavourText": [
							"Don't flinch. It's a waste of good hitting time."
						],
						"frameType": 3,
						"extended": {
							"ar": 289,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 150,
												"max": 200
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1683578560",
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
												"hash": "explicit.stat_4212255859",
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
												"hash": "explicit.stat_1493091477",
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
												"hash": "explicit.stat_628716294",
												"min": 1,
												"max": 1
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_1493091477",
										[
											3
										]
									],
									[
										"explicit.stat_4212255859",
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
										"explicit.stat_628716294",
										[
											4
										]
									],
									[
										"explicit.stat_1683578560",
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
							"text": "UmFyaXR5OiBVbmlxdWUNCkthb20ncyBSb290cw0KVGl0YW4gR3JlYXZlcw0KLS0tLS0tLS0NCkFybW91cjogMjQxDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY4DQpTdHI6IDEyMA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDI5DQotLS0tLS0tLQ0KSGFzIG5vIFNvY2tldHMNCkNhbm5vdCBiZSBLbm9ja2VkIEJhY2sNCisxNzMgdG8gbWF4aW11bSBMaWZlDQpBY3Rpb24gU3BlZWQgY2Fubm90IGJlIG1vZGlmaWVkIHRvIGJlbG93IGJhc2UgdmFsdWUNClVud2F2ZXJpbmcgU3RhbmNlDQotLS0tLS0tLQ0KRG9uJ3QgZmxpbmNoLiBJdCdzIGEgd2FzdGUgb2YgZ29vZCBoaXR0aW5nIHRpbWUuDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDUgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +173 total maximum Life",
							"Sum: 346"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "bcd4e28bc9becf4103b61023855c4dc330e901e23b97ddd0f19e5f72cbc13e86",
				"name": "Kaom's Roots",
				"sockets": [],
				"itemLevel": 80,
				"defenseProperties": [
					"armour 289"
				],
				"implicitMods": [],
				"explicitMods": [
					"Has no Sockets",
					"Cannot be Knocked Back",
					"+168 to maximum Life",
					"Action Speed cannot be modified to below base value",
					"Unwavering Stance"
				],
				"pseudoMods": [
					"(pseudo) +168 total maximum Life",
					"Sum: 336"
				],
				"accountText": "Renzkusan > DontAskMeForShit",
				"whisper": "@DontAskMeForShit Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 2 chaos in Metamorph (stash tab \"Trade\"; position: left 8, top 6)",
				"note": "~price 2 chaos",
				"priceText": "2 chaos",
				"valueExcludingProperties": 336,
				"evalValue": 336.289,
				"evalPrice": 2,
				"debug": {
					"id": "bcd4e28bc9becf4103b61023855c4dc330e901e23b97ddd0f19e5f72cbc13e86",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-18T09:28:58Z",
						"stash": {
							"name": "Trade",
							"x": 7,
							"y": 5
						},
						"whisper": "@DontAskMeForShit Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 2 chaos in Metamorph (stash tab \"Trade\"; position: left 8, top 6)",
						"account": {
							"name": "Renzkusan",
							"lastCharacterName": "DontAskMeForShit",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/KaomsRoots.png?scale=1&w=2&h=2&v=81f27d3abd8a538e3f90eec1f8f17ff7",
						"league": "Metamorph",
						"name": "Kaom's Roots",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 80,
						"note": "~price 2 chaos",
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+11%",
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
										"268",
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
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"Has no Sockets",
							"Cannot be Knocked Back",
							"+168 to maximum Life",
							"Action Speed cannot be modified to below base value",
							"Unwavering Stance"
						],
						"flavourText": [
							"Don't flinch. It's a waste of good hitting time."
						],
						"frameType": 3,
						"extended": {
							"ar": 289,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 150,
												"max": 200
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1683578560",
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
												"hash": "explicit.stat_4212255859",
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
												"hash": "explicit.stat_1493091477",
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
												"hash": "explicit.stat_628716294",
												"min": 1,
												"max": 1
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_1493091477",
										[
											3
										]
									],
									[
										"explicit.stat_4212255859",
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
										"explicit.stat_628716294",
										[
											4
										]
									],
									[
										"explicit.stat_1683578560",
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
							"text": "UmFyaXR5OiBVbmlxdWUNCkthb20ncyBSb290cw0KVGl0YW4gR3JlYXZlcw0KLS0tLS0tLS0NClF1YWxpdHk6ICsxMSUgKGF1Z21lbnRlZCkNCkFybW91cjogMjY4IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY4DQpTdHI6IDEyMA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgwDQotLS0tLS0tLQ0KSGFzIG5vIFNvY2tldHMNCkNhbm5vdCBiZSBLbm9ja2VkIEJhY2sNCisxNjggdG8gbWF4aW11bSBMaWZlDQpBY3Rpb24gU3BlZWQgY2Fubm90IGJlIG1vZGlmaWVkIHRvIGJlbG93IGJhc2UgdmFsdWUNClVud2F2ZXJpbmcgU3RhbmNlDQotLS0tLS0tLQ0KRG9uJ3QgZmxpbmNoLiBJdCdzIGEgd2FzdGUgb2YgZ29vZCBoaXR0aW5nIHRpbWUuDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDIgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +168 total maximum Life",
							"Sum: 336"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "b30a4570c786ef16d42d1dd4ad04d3a0c3a6b1edf44f5fabfe85688856a53ea7",
				"name": "Kaom's Roots",
				"sockets": [],
				"itemLevel": 69,
				"defenseProperties": [
					"armour 289"
				],
				"implicitMods": [],
				"explicitMods": [
					"Has no Sockets",
					"Cannot be Knocked Back",
					"+163 to maximum Life",
					"Action Speed cannot be modified to below base value",
					"Unwavering Stance"
				],
				"pseudoMods": [
					"(pseudo) +163 total maximum Life",
					"Sum: 326"
				],
				"accountText": "holysleven1 > ChewedSoftcore",
				"whisper": "@ChewedSoftcore Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 4 chaos in Metamorph (stash tab \"$$$$\"; position: left 9, top 4)",
				"note": "~price 4 chaos",
				"priceText": "4 chaos",
				"valueExcludingProperties": 326,
				"evalValue": 326.289,
				"evalPrice": 4,
				"debug": {
					"id": "b30a4570c786ef16d42d1dd4ad04d3a0c3a6b1edf44f5fabfe85688856a53ea7",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-18T22:22:57Z",
						"stash": {
							"name": "$$$$",
							"x": 8,
							"y": 3
						},
						"whisper": "@ChewedSoftcore Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 4 chaos in Metamorph (stash tab \"$$$$\"; position: left 9, top 4)",
						"account": {
							"name": "holysleven1",
							"lastCharacterName": "ChewedSoftcore",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/KaomsRoots.png?scale=1&w=2&h=2&v=81f27d3abd8a538e3f90eec1f8f17ff7",
						"league": "Metamorph",
						"name": "Kaom's Roots",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 69,
						"note": "~price 4 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"241",
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
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"Has no Sockets",
							"Cannot be Knocked Back",
							"+163 to maximum Life",
							"Action Speed cannot be modified to below base value",
							"Unwavering Stance"
						],
						"flavourText": [
							"Don't flinch. It's a waste of good hitting time."
						],
						"frameType": 3,
						"extended": {
							"ar": 289,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 150,
												"max": 200
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1683578560",
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
												"hash": "explicit.stat_4212255859",
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
												"hash": "explicit.stat_1493091477",
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
												"hash": "explicit.stat_628716294",
												"min": 1,
												"max": 1
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_1493091477",
										[
											3
										]
									],
									[
										"explicit.stat_4212255859",
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
										"explicit.stat_628716294",
										[
											4
										]
									],
									[
										"explicit.stat_1683578560",
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
							"text": "UmFyaXR5OiBVbmlxdWUNCkthb20ncyBSb290cw0KVGl0YW4gR3JlYXZlcw0KLS0tLS0tLS0NCkFybW91cjogMjQxDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY4DQpTdHI6IDEyMA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDY5DQotLS0tLS0tLQ0KSGFzIG5vIFNvY2tldHMNCkNhbm5vdCBiZSBLbm9ja2VkIEJhY2sNCisxNjMgdG8gbWF4aW11bSBMaWZlDQpBY3Rpb24gU3BlZWQgY2Fubm90IGJlIG1vZGlmaWVkIHRvIGJlbG93IGJhc2UgdmFsdWUNClVud2F2ZXJpbmcgU3RhbmNlDQotLS0tLS0tLQ0KRG9uJ3QgZmxpbmNoLiBJdCdzIGEgd2FzdGUgb2YgZ29vZCBoaXR0aW5nIHRpbWUuDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDQgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +163 total maximum Life",
							"Sum: 326"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "816a498a37922d558e1c9d2b4e61423dbd6ad76f3e9ca1fa364f93a00754b8d2",
				"name": "Kaom's Roots",
				"sockets": [],
				"itemLevel": 72,
				"defenseProperties": [
					"armour 289"
				],
				"implicitMods": [],
				"explicitMods": [
					"Has no Sockets",
					"Cannot be Knocked Back",
					"+160 to maximum Life",
					"Action Speed cannot be modified to below base value",
					"Unwavering Stance"
				],
				"pseudoMods": [
					"(pseudo) +160 total maximum Life",
					"Sum: 320"
				],
				"accountText": "peskyz > BabyBrainZane",
				"whisper": "@BabyBrainZane Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 3 chaos in Metamorph (stash tab \"~price 3 chaos\"; position: left 2, top 2)",
				"priceText": "3 chaos",
				"valueExcludingProperties": 320,
				"evalValue": 320.289,
				"evalPrice": 3,
				"debug": {
					"id": "816a498a37922d558e1c9d2b4e61423dbd6ad76f3e9ca1fa364f93a00754b8d2",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T23:20:30Z",
						"stash": {
							"name": "~price 3 chaos",
							"x": 1,
							"y": 1
						},
						"whisper": "@BabyBrainZane Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 3 chaos in Metamorph (stash tab \"~price 3 chaos\"; position: left 2, top 2)",
						"account": {
							"name": "peskyz",
							"lastCharacterName": "BabyBrainZane",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/KaomsRoots.png?scale=1&w=2&h=2&v=81f27d3abd8a538e3f90eec1f8f17ff7",
						"league": "Metamorph",
						"name": "Kaom's Roots",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 72,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"241",
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
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"Has no Sockets",
							"Cannot be Knocked Back",
							"+160 to maximum Life",
							"Action Speed cannot be modified to below base value",
							"Unwavering Stance"
						],
						"flavourText": [
							"Don't flinch. It's a waste of good hitting time."
						],
						"frameType": 3,
						"extended": {
							"ar": 289,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 150,
												"max": 200
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1683578560",
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
												"hash": "explicit.stat_4212255859",
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
												"hash": "explicit.stat_1493091477",
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
												"hash": "explicit.stat_628716294",
												"min": 1,
												"max": 1
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_1493091477",
										[
											3
										]
									],
									[
										"explicit.stat_4212255859",
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
										"explicit.stat_628716294",
										[
											4
										]
									],
									[
										"explicit.stat_1683578560",
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
							"text": "UmFyaXR5OiBVbmlxdWUNCkthb20ncyBSb290cw0KVGl0YW4gR3JlYXZlcw0KLS0tLS0tLS0NCkFybW91cjogMjQxDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY4DQpTdHI6IDEyMA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcyDQotLS0tLS0tLQ0KSGFzIG5vIFNvY2tldHMNCkNhbm5vdCBiZSBLbm9ja2VkIEJhY2sNCisxNjAgdG8gbWF4aW11bSBMaWZlDQpBY3Rpb24gU3BlZWQgY2Fubm90IGJlIG1vZGlmaWVkIHRvIGJlbG93IGJhc2UgdmFsdWUNClVud2F2ZXJpbmcgU3RhbmNlDQotLS0tLS0tLQ0KRG9uJ3QgZmxpbmNoLiBJdCdzIGEgd2FzdGUgb2YgZ29vZCBoaXR0aW5nIHRpbWUuDQo="
						},
						"pseudoMods": [
							"(pseudo) +160 total maximum Life",
							"Sum: 320"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "397b2d430661c2fb6ad29d674aa127b47d000e33bc43cc4482fc2855203ad8e8",
				"name": "Kaom's Roots",
				"sockets": [],
				"itemLevel": 80,
				"defenseProperties": [
					"armour 289"
				],
				"implicitMods": [],
				"explicitMods": [
					"Has no Sockets",
					"Cannot be Knocked Back",
					"+159 to maximum Life",
					"Action Speed cannot be modified to below base value",
					"Unwavering Stance"
				],
				"pseudoMods": [
					"(pseudo) +159 total maximum Life",
					"Sum: 318"
				],
				"accountText": "SoScrub > HotChicksDontPoop",
				"whisper": "@HotChicksDontPoop Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 2, top 21)",
				"priceText": "5 chaos",
				"valueExcludingProperties": 318,
				"evalValue": 318.289,
				"evalPrice": 5,
				"debug": {
					"id": "397b2d430661c2fb6ad29d674aa127b47d000e33bc43cc4482fc2855203ad8e8",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-16T05:48:29Z",
						"stash": {
							"name": "~price 5 chaos",
							"x": 1,
							"y": 20
						},
						"whisper": "@HotChicksDontPoop Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 2, top 21)",
						"account": {
							"name": "SoScrub",
							"lastCharacterName": "HotChicksDontPoop",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/KaomsRoots.png?scale=1&w=2&h=2&v=81f27d3abd8a538e3f90eec1f8f17ff7",
						"league": "Metamorph",
						"name": "Kaom's Roots",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 80,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"241",
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
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"Has no Sockets",
							"Cannot be Knocked Back",
							"+159 to maximum Life",
							"Action Speed cannot be modified to below base value",
							"Unwavering Stance"
						],
						"flavourText": [
							"Don't flinch. It's a waste of good hitting time."
						],
						"frameType": 3,
						"extended": {
							"ar": 289,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 150,
												"max": 200
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1683578560",
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
												"hash": "explicit.stat_4212255859",
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
												"hash": "explicit.stat_1493091477",
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
												"hash": "explicit.stat_628716294",
												"min": 1,
												"max": 1
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_1493091477",
										[
											3
										]
									],
									[
										"explicit.stat_4212255859",
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
										"explicit.stat_628716294",
										[
											4
										]
									],
									[
										"explicit.stat_1683578560",
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
							"text": "UmFyaXR5OiBVbmlxdWUNCkthb20ncyBSb290cw0KVGl0YW4gR3JlYXZlcw0KLS0tLS0tLS0NCkFybW91cjogMjQxDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY4DQpTdHI6IDEyMA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgwDQotLS0tLS0tLQ0KSGFzIG5vIFNvY2tldHMNCkNhbm5vdCBiZSBLbm9ja2VkIEJhY2sNCisxNTkgdG8gbWF4aW11bSBMaWZlDQpBY3Rpb24gU3BlZWQgY2Fubm90IGJlIG1vZGlmaWVkIHRvIGJlbG93IGJhc2UgdmFsdWUNClVud2F2ZXJpbmcgU3RhbmNlDQotLS0tLS0tLQ0KRG9uJ3QgZmxpbmNoLiBJdCdzIGEgd2FzdGUgb2YgZ29vZCBoaXR0aW5nIHRpbWUuDQo="
						},
						"pseudoMods": [
							"(pseudo) +159 total maximum Life",
							"Sum: 318"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "be953616675f06c63bfd7c9b1be1c5f7a23a7738fe184f0c8fcf227abb355544",
				"name": "Kaom's Roots",
				"sockets": [],
				"itemLevel": 75,
				"defenseProperties": [
					"armour 289"
				],
				"implicitMods": [],
				"explicitMods": [
					"Has no Sockets",
					"Cannot be Knocked Back",
					"+158 to maximum Life",
					"Action Speed cannot be modified to below base value",
					"Unwavering Stance"
				],
				"pseudoMods": [
					"(pseudo) +158 total maximum Life",
					"Sum: 316"
				],
				"accountText": "Sebbe04 > Shockz_M",
				"whisper": "@Shockz_M Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 2 chaos in Metamorph (stash tab \"Sales\"; position: left 3, top 4)",
				"note": "~price 2 chaos",
				"priceText": "2 chaos",
				"valueExcludingProperties": 316,
				"evalValue": 316.289,
				"evalPrice": 2,
				"debug": {
					"id": "be953616675f06c63bfd7c9b1be1c5f7a23a7738fe184f0c8fcf227abb355544",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-17T02:06:57Z",
						"stash": {
							"name": "Sales",
							"x": 2,
							"y": 3
						},
						"whisper": "@Shockz_M Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 2 chaos in Metamorph (stash tab \"Sales\"; position: left 3, top 4)",
						"account": {
							"name": "Sebbe04",
							"lastCharacterName": "Shockz_M",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/KaomsRoots.png?scale=1&w=2&h=2&v=81f27d3abd8a538e3f90eec1f8f17ff7",
						"league": "Metamorph",
						"name": "Kaom's Roots",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 75,
						"note": "~price 2 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"241",
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
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"Has no Sockets",
							"Cannot be Knocked Back",
							"+158 to maximum Life",
							"Action Speed cannot be modified to below base value",
							"Unwavering Stance"
						],
						"flavourText": [
							"Don't flinch. It's a waste of good hitting time."
						],
						"frameType": 3,
						"extended": {
							"ar": 289,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 150,
												"max": 200
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1683578560",
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
												"hash": "explicit.stat_4212255859",
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
												"hash": "explicit.stat_1493091477",
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
												"hash": "explicit.stat_628716294",
												"min": 1,
												"max": 1
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_1493091477",
										[
											3
										]
									],
									[
										"explicit.stat_4212255859",
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
										"explicit.stat_628716294",
										[
											4
										]
									],
									[
										"explicit.stat_1683578560",
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
							"text": "UmFyaXR5OiBVbmlxdWUNCkthb20ncyBSb290cw0KVGl0YW4gR3JlYXZlcw0KLS0tLS0tLS0NCkFybW91cjogMjQxDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY4DQpTdHI6IDEyMA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc1DQotLS0tLS0tLQ0KSGFzIG5vIFNvY2tldHMNCkNhbm5vdCBiZSBLbm9ja2VkIEJhY2sNCisxNTggdG8gbWF4aW11bSBMaWZlDQpBY3Rpb24gU3BlZWQgY2Fubm90IGJlIG1vZGlmaWVkIHRvIGJlbG93IGJhc2UgdmFsdWUNClVud2F2ZXJpbmcgU3RhbmNlDQotLS0tLS0tLQ0KRG9uJ3QgZmxpbmNoLiBJdCdzIGEgd2FzdGUgb2YgZ29vZCBoaXR0aW5nIHRpbWUuDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDIgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +158 total maximum Life",
							"Sum: 316"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "f81c643a729e7f0911b7b39f64a3f588fdc78127bc192eb054016fab5bdc1faa",
				"name": "Kaom's Roots",
				"sockets": [],
				"itemLevel": 77,
				"defenseProperties": [
					"armour 289"
				],
				"implicitMods": [],
				"explicitMods": [
					"Has no Sockets",
					"Cannot be Knocked Back",
					"+158 to maximum Life",
					"Action Speed cannot be modified to below base value",
					"Unwavering Stance"
				],
				"pseudoMods": [
					"(pseudo) +158 total maximum Life",
					"Sum: 316"
				],
				"accountText": "Ramberg > NoHonorAnxity",
				"whisper": "@NoHonorAnxity Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 3, top 11)",
				"priceText": "5 chaos",
				"valueExcludingProperties": 316,
				"evalValue": 316.289,
				"evalPrice": 5,
				"debug": {
					"id": "f81c643a729e7f0911b7b39f64a3f588fdc78127bc192eb054016fab5bdc1faa",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T17:41:56Z",
						"stash": {
							"name": "~b/o 5 chaos",
							"x": 2,
							"y": 10
						},
						"whisper": "@NoHonorAnxity Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 3, top 11)",
						"account": {
							"name": "Ramberg",
							"lastCharacterName": "NoHonorAnxity",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/KaomsRoots.png?scale=1&w=2&h=2&v=81f27d3abd8a538e3f90eec1f8f17ff7",
						"league": "Metamorph",
						"name": "Kaom's Roots",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 77,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"241",
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
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"Has no Sockets",
							"Cannot be Knocked Back",
							"+158 to maximum Life",
							"Action Speed cannot be modified to below base value",
							"Unwavering Stance"
						],
						"flavourText": [
							"Don't flinch. It's a waste of good hitting time."
						],
						"frameType": 3,
						"extended": {
							"ar": 289,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 150,
												"max": 200
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1683578560",
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
												"hash": "explicit.stat_4212255859",
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
												"hash": "explicit.stat_1493091477",
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
												"hash": "explicit.stat_628716294",
												"min": 1,
												"max": 1
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_1493091477",
										[
											3
										]
									],
									[
										"explicit.stat_4212255859",
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
										"explicit.stat_628716294",
										[
											4
										]
									],
									[
										"explicit.stat_1683578560",
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
							"text": "UmFyaXR5OiBVbmlxdWUNCkthb20ncyBSb290cw0KVGl0YW4gR3JlYXZlcw0KLS0tLS0tLS0NCkFybW91cjogMjQxDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY4DQpTdHI6IDEyMA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc3DQotLS0tLS0tLQ0KSGFzIG5vIFNvY2tldHMNCkNhbm5vdCBiZSBLbm9ja2VkIEJhY2sNCisxNTggdG8gbWF4aW11bSBMaWZlDQpBY3Rpb24gU3BlZWQgY2Fubm90IGJlIG1vZGlmaWVkIHRvIGJlbG93IGJhc2UgdmFsdWUNClVud2F2ZXJpbmcgU3RhbmNlDQotLS0tLS0tLQ0KRG9uJ3QgZmxpbmNoLiBJdCdzIGEgd2FzdGUgb2YgZ29vZCBoaXR0aW5nIHRpbWUuDQo="
						},
						"pseudoMods": [
							"(pseudo) +158 total maximum Life",
							"Sum: 316"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "9b976a21b61f3d15c8ddf6c0c3bbad293b1f39f67b48439fb64c6a5ffbea0a4e",
				"name": "Foe Road",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 71,
				"defenseProperties": [
					"armour 222",
					"energyShield 37"
				],
				"implicitMods": [],
				"explicitMods": [
					"+35 to Strength",
					"+24 to Armour",
					"53% increased Armour and Energy Shield",
					"+113 to maximum Life",
					"+14% to Fire Resistance",
					"+40% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +54% total Elemental Resistance",
					"(pseudo) +130.5 total maximum Life",
					"Sum: 315"
				],
				"accountText": "TDStrickshot > wastedtimeanyway",
				"whisper": "@wastedtimeanyway Hi, I would like to buy your Foe Road Crusader Boots listed for 2 chaos in Metamorph (stash tab \"Sell\"; position: left 6, top 3)",
				"note": "~price 2 chaos",
				"priceText": "2 chaos",
				"valueExcludingProperties": 315,
				"evalValue": 315.222,
				"evalPrice": 2,
				"debug": {
					"id": "9b976a21b61f3d15c8ddf6c0c3bbad293b1f39f67b48439fb64c6a5ffbea0a4e",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-18T08:42:17Z",
						"stash": {
							"name": "Sell",
							"x": 5,
							"y": 2
						},
						"whisper": "@wastedtimeanyway Hi, I would like to buy your Foe Road Crusader Boots listed for 2 chaos in Metamorph (stash tab \"Sell\"; position: left 6, top 3)",
						"account": {
							"name": "TDStrickshot",
							"lastCharacterName": "wastedtimeanyway",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrInt3.png?scale=1&w=2&h=2&v=3ca9bf635d09f26ef27ad85b922fd5e8",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Foe Road",
						"typeLine": "Crusader Boots",
						"identified": true,
						"ilvl": 71,
						"note": "~price 2 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"222",
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
										"37",
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
										"64",
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
										"62",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+35 to Strength",
							"+24 to Armour",
							"53% increased Armour and Energy Shield",
							"+113 to maximum Life",
							"+14% to Fire Resistance",
							"+40% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 222,
							"es": 37,
							"mods": {
								"explicit": [
									{
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Instilled",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_3321629045",
												"min": 43,
												"max": 55
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
										"name": "of the Goliath",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 33,
												"max": 37
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
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											4
										]
									],
									[
										"explicit.stat_3484657501",
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
											0,
											1
										]
									],
									[
										"explicit.stat_3372524247",
										[
											5
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
							"text": "UmFyaXR5OiBSYXJlDQpGb2UgUm9hZA0KQ3J1c2FkZXIgQm9vdHMNCi0tLS0tLS0tDQpBcm1vdXI6IDIyMiAoYXVnbWVudGVkKQ0KRW5lcmd5IFNoaWVsZDogMzcgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjQNClN0cjogNjINCkludDogNjINCi0tLS0tLS0tDQpTb2NrZXRzOiBSIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcxDQotLS0tLS0tLQ0KKzM1IHRvIFN0cmVuZ3RoDQorMjQgdG8gQXJtb3VyDQo1MyUgaW5jcmVhc2VkIEFybW91ciBhbmQgRW5lcmd5IFNoaWVsZA0KKzExMyB0byBtYXhpbXVtIExpZmUNCisxNCUgdG8gRmlyZSBSZXNpc3RhbmNlDQorNDAlIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQotLS0tLS0tLQ0KQ29ycnVwdGVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDIgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +54% total Elemental Resistance",
							"(pseudo) +130.5 total maximum Life",
							"Sum: 315"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "4fed71289abc67d27aa074685c5df390c46f1ec1ca4e1eeed7f8668fb424b60d",
				"name": "Kaom's Roots",
				"sockets": [],
				"itemLevel": 70,
				"defenseProperties": [
					"armour 289"
				],
				"implicitMods": [],
				"explicitMods": [
					"Has no Sockets",
					"Cannot be Knocked Back",
					"+152 to maximum Life",
					"Action Speed cannot be modified to below base value",
					"Unwavering Stance"
				],
				"pseudoMods": [
					"(pseudo) +152 total maximum Life",
					"Sum: 304"
				],
				"accountText": "Alphabait > ToxicPewPew",
				"whisper": "@ToxicPewPew Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 2 chaos in Metamorph (stash tab \"$$$\"; position: left 1, top 1)",
				"note": "~price 2 chaos",
				"priceText": "2 chaos",
				"valueExcludingProperties": 304,
				"evalValue": 304.289,
				"evalPrice": 2,
				"debug": {
					"id": "4fed71289abc67d27aa074685c5df390c46f1ec1ca4e1eeed7f8668fb424b60d",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-17T02:08:59Z",
						"stash": {
							"name": "$$$",
							"x": 0,
							"y": 0
						},
						"whisper": "@ToxicPewPew Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 2 chaos in Metamorph (stash tab \"$$$\"; position: left 1, top 1)",
						"account": {
							"name": "Alphabait",
							"lastCharacterName": "ToxicPewPew",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/KaomsRoots.png?scale=1&w=2&h=2&v=81f27d3abd8a538e3f90eec1f8f17ff7",
						"league": "Metamorph",
						"name": "Kaom's Roots",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 70,
						"note": "~price 2 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"241",
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
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"Has no Sockets",
							"Cannot be Knocked Back",
							"+152 to maximum Life",
							"Action Speed cannot be modified to below base value",
							"Unwavering Stance"
						],
						"flavourText": [
							"Don't flinch. It's a waste of good hitting time."
						],
						"frameType": 3,
						"extended": {
							"ar": 289,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 150,
												"max": 200
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1683578560",
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
												"hash": "explicit.stat_4212255859",
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
												"hash": "explicit.stat_1493091477",
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
												"hash": "explicit.stat_628716294",
												"min": 1,
												"max": 1
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_1493091477",
										[
											3
										]
									],
									[
										"explicit.stat_4212255859",
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
										"explicit.stat_628716294",
										[
											4
										]
									],
									[
										"explicit.stat_1683578560",
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
							"text": "UmFyaXR5OiBVbmlxdWUNCkthb20ncyBSb290cw0KVGl0YW4gR3JlYXZlcw0KLS0tLS0tLS0NCkFybW91cjogMjQxDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY4DQpTdHI6IDEyMA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcwDQotLS0tLS0tLQ0KSGFzIG5vIFNvY2tldHMNCkNhbm5vdCBiZSBLbm9ja2VkIEJhY2sNCisxNTIgdG8gbWF4aW11bSBMaWZlDQpBY3Rpb24gU3BlZWQgY2Fubm90IGJlIG1vZGlmaWVkIHRvIGJlbG93IGJhc2UgdmFsdWUNClVud2F2ZXJpbmcgU3RhbmNlDQotLS0tLS0tLQ0KRG9uJ3QgZmxpbmNoLiBJdCdzIGEgd2FzdGUgb2YgZ29vZCBoaXR0aW5nIHRpbWUuDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDIgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +152 total maximum Life",
							"Sum: 304"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "5c74ec52c06d36af841bcf10a899431bed84b746321e07aefd9d892cbc88aa82",
				"name": "Kaom's Roots",
				"sockets": [],
				"itemLevel": 79,
				"defenseProperties": [
					"armour 289"
				],
				"implicitMods": [],
				"explicitMods": [
					"Has no Sockets",
					"Cannot be Knocked Back",
					"+150 to maximum Life",
					"Action Speed cannot be modified to below base value",
					"Unwavering Stance"
				],
				"pseudoMods": [
					"(pseudo) +150 total maximum Life",
					"Sum: 300"
				],
				"accountText": "Zendria > ZenMeta",
				"whisper": "@ZenMeta Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 5 chaos in Metamorph (stash tab \"$\"; position: left 11, top 1)",
				"note": "~price 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 300,
				"evalValue": 300.289,
				"evalPrice": 5,
				"debug": {
					"id": "5c74ec52c06d36af841bcf10a899431bed84b746321e07aefd9d892cbc88aa82",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-18T15:25:21Z",
						"stash": {
							"name": "$",
							"x": 10,
							"y": 0
						},
						"whisper": "@ZenMeta Hi, I would like to buy your Kaom's Roots Titan Greaves listed for 5 chaos in Metamorph (stash tab \"$\"; position: left 11, top 1)",
						"account": {
							"name": "Zendria",
							"lastCharacterName": "ZenMeta",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/KaomsRoots.png?scale=1&w=2&h=2&v=81f27d3abd8a538e3f90eec1f8f17ff7",
						"league": "Metamorph",
						"name": "Kaom's Roots",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 79,
						"note": "~price 5 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"241",
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
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"Has no Sockets",
							"Cannot be Knocked Back",
							"+150 to maximum Life",
							"Action Speed cannot be modified to below base value",
							"Unwavering Stance"
						],
						"flavourText": [
							"Don't flinch. It's a waste of good hitting time."
						],
						"frameType": 3,
						"extended": {
							"ar": 289,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 150,
												"max": 200
											}
										]
									},
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "explicit.stat_1683578560",
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
												"hash": "explicit.stat_4212255859",
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
												"hash": "explicit.stat_1493091477",
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
												"hash": "explicit.stat_628716294",
												"min": 1,
												"max": 1
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_1493091477",
										[
											3
										]
									],
									[
										"explicit.stat_4212255859",
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
										"explicit.stat_628716294",
										[
											4
										]
									],
									[
										"explicit.stat_1683578560",
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
							"text": "UmFyaXR5OiBVbmlxdWUNCkthb20ncyBSb290cw0KVGl0YW4gR3JlYXZlcw0KLS0tLS0tLS0NCkFybW91cjogMjQxDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY4DQpTdHI6IDEyMA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc5DQotLS0tLS0tLQ0KSGFzIG5vIFNvY2tldHMNCkNhbm5vdCBiZSBLbm9ja2VkIEJhY2sNCisxNTAgdG8gbWF4aW11bSBMaWZlDQpBY3Rpb24gU3BlZWQgY2Fubm90IGJlIG1vZGlmaWVkIHRvIGJlbG93IGJhc2UgdmFsdWUNClVud2F2ZXJpbmcgU3RhbmNlDQotLS0tLS0tLQ0KRG9uJ3QgZmxpbmNoLiBJdCdzIGEgd2FzdGUgb2YgZ29vZCBoaXR0aW5nIHRpbWUuDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDUgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +150 total maximum Life",
							"Sum: 300"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "5749890d5709b0fdea713ba3448102a139e5fa4e09729697db179c66152a1b19",
				"name": "Brood Road",
				"sockets": [
					[
						"B",
						"R"
					]
				],
				"itemLevel": 74,
				"defenseProperties": [
					"armour 145",
					"energyShield 42"
				],
				"implicitMods": [],
				"explicitMods": [
					"+11 to maximum Energy Shield",
					"+114 to maximum Life",
					"+25% to Fire Resistance",
					"+44% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +69% total Elemental Resistance",
					"(pseudo) +114 total maximum Life",
					"Sum: 297"
				],
				"accountText": "Moocows18 > BEEGBALLISTABOI",
				"whisper": "@BEEGBALLISTABOI Hi, I would like to buy your Brood Road Crusader Boots listed for 10 chaos in Metamorph (stash tab \"$$$\"; position: left 3, top 1)",
				"note": "~price 10 chaos",
				"priceText": "10 chaos",
				"valueExcludingProperties": 297,
				"evalValue": 297.145,
				"evalPrice": 10,
				"debug": {
					"id": "5749890d5709b0fdea713ba3448102a139e5fa4e09729697db179c66152a1b19",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-21T05:25:31Z",
						"stash": {
							"name": "$$$",
							"x": 2,
							"y": 0
						},
						"whisper": "@BEEGBALLISTABOI Hi, I would like to buy your Brood Road Crusader Boots listed for 10 chaos in Metamorph (stash tab \"$$$\"; position: left 3, top 1)",
						"account": {
							"name": "Moocows18",
							"lastCharacterName": "BEEGBALLISTABOI",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrInt3.png?scale=1&w=2&h=2&v=3ca9bf635d09f26ef27ad85b922fd5e8",
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
						"name": "Brood Road",
						"typeLine": "Crusader Boots",
						"identified": true,
						"ilvl": 74,
						"note": "~price 10 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"121",
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
										"35",
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
										"64",
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
										"62",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+11 to maximum Energy Shield",
							"+114 to maximum Life",
							"+25% to Fire Resistance",
							"+44% to Cold Resistance"
						],
						"craftedMods": [
							"15% increased Movement Speed",
							"11% chance to gain Onslaught for 4 seconds on Kill"
						],
						"frameType": 2,
						"extended": {
							"ar": 145,
							"ar_aug": true,
							"es": 42,
							"es_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Prior's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_4052037485",
												"min": 11,
												"max": 15
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 24,
												"max": 28
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
								],
								"crafted": [
									{
										"name": "Chosen",
										"tier": "R2",
										"magnitudes": [
											{
												"hash": "crafted.stat_2250533757",
												"min": 15,
												"max": 17
											},
											{
												"hash": "crafted.stat_3023957681",
												"min": 8,
												"max": 12
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4052037485",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
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
									]
								],
								"crafted": [
									[
										"crafted.stat_2250533757",
										[
											0
										]
									],
									[
										"crafted.stat_3023957681",
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
							"text": "UmFyaXR5OiBSYXJlDQpCcm9vZCBSb2FkDQpDcnVzYWRlciBCb290cw0KLS0tLS0tLS0NCkFybW91cjogMTIxDQpFbmVyZ3kgU2hpZWxkOiAzNSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2NA0KU3RyOiA2Mg0KSW50OiA2Mg0KLS0tLS0tLS0NClNvY2tldHM6IEItUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3NA0KLS0tLS0tLS0NCisxMSB0byBtYXhpbXVtIEVuZXJneSBTaGllbGQNCisxMTQgdG8gbWF4aW11bSBMaWZlDQorMjUlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzQ0JSB0byBDb2xkIFJlc2lzdGFuY2UNCjE1JSBpbmNyZWFzZWQgTW92ZW1lbnQgU3BlZWQgKGNyYWZ0ZWQpDQoxMSUgY2hhbmNlIHRvIGdhaW4gT25zbGF1Z2h0IGZvciA0IHNlY29uZHMgb24gS2lsbCAoY3JhZnRlZCkNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMTAgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +69% total Elemental Resistance",
							"(pseudo) +114 total maximum Life",
							"Sum: 297"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "57c24e74ea8277754316fc85843cd120ae5041c865863512b567b5f1ca013f2d",
				"name": "Rift Slippers",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 81,
				"defenseProperties": [
					"armour 332"
				],
				"implicitMods": [],
				"explicitMods": [
					"+37 to Strength",
					"+33 to Armour",
					"38% increased Armour",
					"+93 to maximum Life",
					"+40% to Fire Resistance",
					"+23% to Lightning Resistance",
					"15% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +63% total Elemental Resistance",
					"(pseudo) +111.5 total maximum Life",
					"Sum: 286"
				],
				"accountText": "Endalay > MORPHALAY",
				"whisper": "@MORPHALAY Hi, I would like to buy your Rift Slippers Goliath Greaves listed for 6 chaos in Metamorph (stash tab \"~price 6 chaos\"; position: left 1, top 2)",
				"priceText": "6 chaos",
				"valueExcludingProperties": 286,
				"evalValue": 286.332,
				"evalPrice": 6,
				"debug": {
					"id": "57c24e74ea8277754316fc85843cd120ae5041c865863512b567b5f1ca013f2d",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T13:57:09Z",
						"stash": {
							"name": "~price 6 chaos",
							"x": 0,
							"y": 1
						},
						"whisper": "@MORPHALAY Hi, I would like to buy your Rift Slippers Goliath Greaves listed for 6 chaos in Metamorph (stash tab \"~price 6 chaos\"; position: left 1, top 2)",
						"account": {
							"name": "Endalay",
							"lastCharacterName": "MORPHALAY",
							"online": {
								"league": "Metamorph",
								"status": "afk"
							},
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Rift Slippers",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 81,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"290",
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
										"54",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+37 to Strength",
							"+33 to Armour",
							"38% increased Armour",
							"+93 to maximum Life",
							"+40% to Fire Resistance",
							"+23% to Lightning Resistance",
							"15% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 332,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "Elephant's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
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
										"name": "Rotund",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 60,
												"max": 69
											}
										]
									},
									{
										"name": "of the Goliath",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 33,
												"max": 37
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
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											3
										]
									],
									[
										"explicit.stat_3484657501",
										[
											0
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
											0,
											2
										]
									],
									[
										"explicit.stat_3372524247",
										[
											4
										]
									],
									[
										"explicit.stat_1671376347",
										[
											5
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
							"text": "UmFyaXR5OiBSYXJlDQpSaWZ0IFNsaXBwZXJzDQpHb2xpYXRoIEdyZWF2ZXMNCi0tLS0tLS0tDQpBcm1vdXI6IDI5MCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1NA0KU3RyOiA5NQ0KLS0tLS0tLS0NClNvY2tldHM6IFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODENCi0tLS0tLS0tDQorMzcgdG8gU3RyZW5ndGgNCiszMyB0byBBcm1vdXINCjM4JSBpbmNyZWFzZWQgQXJtb3VyDQorOTMgdG8gbWF4aW11bSBMaWZlDQorNDAlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzIzJSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KMTUlIGluY3JlYXNlZCBTdHVuIGFuZCBCbG9jayBSZWNvdmVyeQ0K"
						},
						"pseudoMods": [
							"(pseudo) +63% total Elemental Resistance",
							"(pseudo) +111.5 total maximum Life",
							"Sum: 286"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "5b5d8d88183c6bbac88966483ab4422e0808fbf84a4a4a3ec1fac31b91ea1084",
				"name": "Beast Urge",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"armour 383"
				],
				"implicitMods": [],
				"explicitMods": [
					"+30 to Armour",
					"65% increased Armour",
					"+113 to maximum Life",
					"+30% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +56% total Elemental Resistance",
					"(pseudo) +113 total maximum Life",
					"Sum: 282"
				],
				"accountText": "Kirkh4m > HeatstruckEmoGirl",
				"whisper": "@HeatstruckEmoGirl Hi, I would like to buy your Beast Urge Goliath Greaves listed for 5 chaos in Metamorph (stash tab \"sell1\"; position: left 1, top 3)",
				"note": "~price 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 282,
				"evalValue": 282.383,
				"evalPrice": 5,
				"debug": {
					"id": "5b5d8d88183c6bbac88966483ab4422e0808fbf84a4a4a3ec1fac31b91ea1084",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-18T15:28:52Z",
						"stash": {
							"name": "sell1",
							"x": 0,
							"y": 2
						},
						"whisper": "@HeatstruckEmoGirl Hi, I would like to buy your Beast Urge Goliath Greaves listed for 5 chaos in Metamorph (stash tab \"sell1\"; position: left 1, top 3)",
						"account": {
							"name": "Kirkh4m",
							"lastCharacterName": "HeatstruckEmoGirl",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Beast Urge",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 72,
						"note": "~price 5 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"342",
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
										"54",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+30 to Armour",
							"65% increased Armour",
							"+113 to maximum Life",
							"+30% to Cold Resistance"
						],
						"craftedMods": [
							"+13% to Fire and Lightning Resistances"
						],
						"frameType": 2,
						"extended": {
							"ar": 383,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Buttressed",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
												"min": 56,
												"max": 67
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
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Urchin's",
										"tier": "P1",
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
									}
								],
								"crafted": [
									{
										"name": "of Craft",
										"tier": "R2",
										"magnitudes": [
											{
												"hash": "crafted.stat_3441501978",
												"min": 13,
												"max": 16
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_3484657501",
										[
											3
										]
									],
									[
										"explicit.stat_1062208444",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2,
											3
										]
									],
									[
										"explicit.stat_4220027924",
										[
											1
										]
									]
								],
								"crafted": [
									[
										"crafted.stat_3441501978",
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
							"text": "UmFyaXR5OiBSYXJlDQpCZWFzdCBVcmdlDQpHb2xpYXRoIEdyZWF2ZXMNCi0tLS0tLS0tDQpBcm1vdXI6IDM0MiAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1NA0KU3RyOiA5NQ0KLS0tLS0tLS0NClNvY2tldHM6IFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzINCi0tLS0tLS0tDQorMzAgdG8gQXJtb3VyDQo2NSUgaW5jcmVhc2VkIEFybW91cg0KKzExMyB0byBtYXhpbXVtIExpZmUNCiszMCUgdG8gQ29sZCBSZXNpc3RhbmNlDQorMTMlIHRvIEZpcmUgYW5kIExpZ2h0bmluZyBSZXNpc3RhbmNlcyAoY3JhZnRlZCkNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgNSBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +56% total Elemental Resistance",
							"(pseudo) +113 total maximum Life",
							"Sum: 282"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "43925e156eb766d2c014bcd99f0de9c52d1d7862d4a7316d3c8c522c7dc5c752",
				"name": "Dire League",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 80,
				"defenseProperties": [
					"energyShield 82"
				],
				"implicitMods": [],
				"explicitMods": [
					"+21 to Intelligence",
					"+9 to maximum Energy Shield",
					"21% increased Energy Shield",
					"+103 to maximum Life",
					"+36% to Fire Resistance",
					"+39% to Lightning Resistance",
					"11% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +75% total Elemental Resistance",
					"(pseudo) +103 total maximum Life",
					"Sum: 281"
				],
				"accountText": "hobsa > MetaMinionzZZ",
				"whisper": "@MetaMinionzZZ Hi, I would like to buy your Dire League Sorcerer Boots listed for 3 chaos in Metamorph (stash tab \"ind\"; position: left 7, top 11)",
				"note": "~price 3 chaos",
				"priceText": "3 chaos",
				"valueExcludingProperties": 281,
				"evalValue": 281,
				"evalPrice": 3,
				"debug": {
					"id": "43925e156eb766d2c014bcd99f0de9c52d1d7862d4a7316d3c8c522c7dc5c752",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-20T11:59:42Z",
						"stash": {
							"name": "ind",
							"x": 6,
							"y": 10
						},
						"whisper": "@MetaMinionzZZ Hi, I would like to buy your Dire League Sorcerer Boots listed for 3 chaos in Metamorph (stash tab \"ind\"; position: left 7, top 11)",
						"account": {
							"name": "hobsa",
							"lastCharacterName": "MetaMinionzZZ",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsInt4.png?scale=1&w=2&h=2&v=4808dffa0aa9745b57119af9319d0be3",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Dire League",
						"typeLine": "Sorcerer Boots",
						"identified": true,
						"ilvl": 80,
						"note": "~price 3 chaos",
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"70",
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
										"67",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"123",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+21 to Intelligence",
							"+9 to maximum Energy Shield",
							"21% increased Energy Shield",
							"+103 to maximum Life",
							"+36% to Fire Resistance",
							"+39% to Lightning Resistance",
							"11% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"es": 82,
							"es_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Boggart's",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_4015621042",
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
										"name": "Monk's",
										"tier": "P2",
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "of the Prodigy",
										"tier": "S7",
										"magnitudes": [
											{
												"hash": "explicit.stat_328541901",
												"min": 18,
												"max": 22
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
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_328541901",
										[
											4
										]
									],
									[
										"explicit.stat_4052037485",
										[
											2
										]
									],
									[
										"explicit.stat_4015621042",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2,
											3
										]
									],
									[
										"explicit.stat_3372524247",
										[
											5
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
							"text": "UmFyaXR5OiBSYXJlDQpEaXJlIExlYWd1ZQ0KU29yY2VyZXIgQm9vdHMNCi0tLS0tLS0tDQpFbmVyZ3kgU2hpZWxkOiA3MCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2Nw0KSW50OiAxMjMNCi0tLS0tLS0tDQpTb2NrZXRzOiBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgwDQotLS0tLS0tLQ0KKzIxIHRvIEludGVsbGlnZW5jZQ0KKzkgdG8gbWF4aW11bSBFbmVyZ3kgU2hpZWxkDQoyMSUgaW5jcmVhc2VkIEVuZXJneSBTaGllbGQNCisxMDMgdG8gbWF4aW11bSBMaWZlDQorMzYlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzM5JSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KMTElIGluY3JlYXNlZCBTdHVuIGFuZCBCbG9jayBSZWNvdmVyeQ0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAzIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +75% total Elemental Resistance",
							"(pseudo) +103 total maximum Life",
							"Sum: 281"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "fde811d2cadd34d9709862d65f8fbfc1d4c661c48fd5d52a886abd4289e04354",
				"name": "Blight Urge",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"evasion 316"
				],
				"implicitMods": [],
				"explicitMods": [
					"+36 to Dexterity",
					"+17 to Evasion Rating",
					"+112 to maximum Life",
					"+44% to Cold Resistance",
					"+9% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +53% total Elemental Resistance",
					"(pseudo) +112 total maximum Life",
					"Sum: 277"
				],
				"accountText": "Konstruktor89L > Konstruktor_mk_I",
				"whisper": "@Konstruktor_mk_I Hi, I would like to buy your Blight Urge Slink Boots listed for 3 chaos in Metamorph (stash tab \"~price 3 chaos\"; position: left 1, top 2)",
				"priceText": "3 chaos",
				"valueExcludingProperties": 277,
				"evalValue": 277,
				"evalPrice": 3,
				"debug": {
					"id": "fde811d2cadd34d9709862d65f8fbfc1d4c661c48fd5d52a886abd4289e04354",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-16T18:30:58Z",
						"stash": {
							"name": "~price 3 chaos",
							"x": 0,
							"y": 1
						},
						"whisper": "@Konstruktor_mk_I Hi, I would like to buy your Blight Urge Slink Boots listed for 3 chaos in Metamorph (stash tab \"~price 3 chaos\"; position: left 1, top 2)",
						"account": {
							"name": "Konstruktor89L",
							"lastCharacterName": "Konstruktor_mk_I",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Blight Urge",
						"typeLine": "Slink Boots",
						"identified": true,
						"ilvl": 72,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"263",
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
										"69",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+36 to Dexterity",
							"+17 to Evasion Rating",
							"+112 to maximum Life",
							"+44% to Cold Resistance",
							"+9% to Lightning Resistance"
						],
						"enchantMods": [
							"10% reduced Mana Cost of Skills if you've been Hit Recently"
						],
						"frameType": 2,
						"extended": {
							"ev": 316,
							"ev_aug": true,
							"mods": {
								"enchant": [
									{
										"name": "Enchantment Mana Cost 1",
										"tier": "",
										"magnitudes": [
											{
												"hash": "enchant.stat_3693451031",
												"min": 10,
												"max": 10
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Flea's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
											}
										]
									},
									{
										"name": "of the Cloud",
										"tier": "S8",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 6,
												"max": 11
											}
										]
									},
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
								"enchant": [
									[
										"enchant.stat_3693451031",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											3
										]
									],
									[
										"explicit.stat_53045048",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
											1
										]
									],
									[
										"explicit.stat_4220027924",
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
							"text": "UmFyaXR5OiBSYXJlDQpCbGlnaHQgVXJnZQ0KU2xpbmsgQm9vdHMNCi0tLS0tLS0tDQpFdmFzaW9uIFJhdGluZzogMjYzIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY5DQpEZXg6IDEyMA0KLS0tLS0tLS0NClNvY2tldHM6IEcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzINCi0tLS0tLS0tDQoxMCUgcmVkdWNlZCBNYW5hIENvc3Qgb2YgU2tpbGxzIGlmIHlvdSd2ZSBiZWVuIEhpdCBSZWNlbnRseQ0KLS0tLS0tLS0NCiszNiB0byBEZXh0ZXJpdHkNCisxNyB0byBFdmFzaW9uIFJhdGluZw0KKzExMiB0byBtYXhpbXVtIExpZmUNCis0NCUgdG8gQ29sZCBSZXNpc3RhbmNlDQorOSUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCg=="
						},
						"pseudoMods": [
							"(pseudo) +53% total Elemental Resistance",
							"(pseudo) +112 total maximum Life",
							"Sum: 277"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "5d45aa0fbbc883b834dae8c53978717e2d2f17a2da16edabe19ec7dab7529acb",
				"name": "Apocalypse Goad",
				"sockets": [
					[
						"G",
						"R"
					],
					[
						"R"
					]
				],
				"itemLevel": 76,
				"defenseProperties": [
					"armour 137",
					"evasion 169"
				],
				"implicitMods": [],
				"explicitMods": [
					"+29 to Strength",
					"+22 to Armour",
					"+49 to Evasion Rating",
					"+105 to maximum Life",
					"Regenerate 12.8 Life per second",
					"+38% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +38% total Elemental Resistance",
					"(pseudo) +119.5 total maximum Life",
					"Sum: 277"
				],
				"accountText": "c0nspiracy > ConspiracyRanger",
				"whisper": "@ConspiracyRanger Hi, I would like to buy your Apocalypse Goad Wyrmscale Boots listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 1, top 7)",
				"priceText": "5 chaos",
				"valueExcludingProperties": 277,
				"evalValue": 277.137,
				"evalPrice": 5,
				"debug": {
					"id": "5d45aa0fbbc883b834dae8c53978717e2d2f17a2da16edabe19ec7dab7529acb",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-17T05:54:01Z",
						"stash": {
							"name": "~b/o 5 chaos",
							"x": 0,
							"y": 6
						},
						"whisper": "@ConspiracyRanger Hi, I would like to buy your Apocalypse Goad Wyrmscale Boots listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 1, top 7)",
						"account": {
							"name": "c0nspiracy",
							"lastCharacterName": "ConspiracyRanger",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrDex3.png?scale=1&w=2&h=2&v=601dc135a14c1121dca118c2640a1335",
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
						"name": "Apocalypse Goad",
						"typeLine": "Wyrmscale Boots",
						"identified": true,
						"ilvl": 76,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"114",
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
										"141",
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
										"51",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+29 to Strength",
							"+22 to Armour",
							"+49 to Evasion Rating",
							"+105 to maximum Life",
							"Regenerate 12.8 Life per second",
							"+38% to Lightning Resistance"
						],
						"enchantMods": [
							"50% chance to Avoid being Stunned if you've Killed Recently"
						],
						"frameType": 2,
						"extended": {
							"ev": 169,
							"ev_aug": true,
							"ar": 137,
							"ar_aug": true,
							"mods": {
								"enchant": [
									{
										"name": "Enchantment Stun Avoidance 1",
										"tier": "",
										"magnitudes": [
											{
												"hash": "enchant.stat_412905518",
												"min": 50,
												"max": 50
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
										"name": "Pliant",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 9,
												"max": 25
											},
											{
												"hash": "explicit.stat_53045048",
												"min": 9,
												"max": 25
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
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "of the Gorilla",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 28,
												"max": 32
											}
										]
									},
									{
										"name": "Fawn's",
										"tier": "P1",
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
									}
								]
							},
							"hashes": {
								"enchant": [
									[
										"enchant.stat_412905518",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											4
										]
									],
									[
										"explicit.stat_3484657501",
										[
											1
										]
									],
									[
										"explicit.stat_53045048",
										[
											1,
											5
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3,
											5
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
							"text": "UmFyaXR5OiBSYXJlDQpBcG9jYWx5cHNlIEdvYWQNCld5cm1zY2FsZSBCb290cw0KLS0tLS0tLS0NCkFybW91cjogMTE0IChhdWdtZW50ZWQpDQpFdmFzaW9uIFJhdGluZzogMTQxIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDUxDQpTdHI6IDQ4DQpEZXg6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogRy1SIFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzYNCi0tLS0tLS0tDQo1MCUgY2hhbmNlIHRvIEF2b2lkIGJlaW5nIFN0dW5uZWQgaWYgeW91J3ZlIEtpbGxlZCBSZWNlbnRseQ0KLS0tLS0tLS0NCisyOSB0byBTdHJlbmd0aA0KKzIyIHRvIEFybW91cg0KKzQ5IHRvIEV2YXNpb24gUmF0aW5nDQorMTA1IHRvIG1heGltdW0gTGlmZQ0KUmVnZW5lcmF0ZSAxMi44IExpZmUgcGVyIHNlY29uZA0KKzM4JSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0K"
						},
						"pseudoMods": [
							"(pseudo) +38% total Elemental Resistance",
							"(pseudo) +119.5 total maximum Life",
							"Sum: 277"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "120a1a40266f77b4d05db27f2a230a14b17e8919e268bbc93d7e053356d97692",
				"name": "Blood Track",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 73,
				"defenseProperties": [
					"armour 319"
				],
				"implicitMods": [],
				"explicitMods": [
					"+26 to Strength",
					"+25 to Armour",
					"+105 to maximum Life",
					"+39% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +39% total Elemental Resistance",
					"(pseudo) +118 total maximum Life",
					"Sum: 275"
				],
				"accountText": "Nightmilkz > HG_Najtmilks",
				"whisper": "@HG_Najtmilks Hi, I would like to buy your Blood Track Titan Greaves listed for 1 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 5, top 8)",
				"priceText": "1 chaos",
				"valueExcludingProperties": 275,
				"evalValue": 275.319,
				"evalPrice": 1,
				"debug": {
					"id": "120a1a40266f77b4d05db27f2a230a14b17e8919e268bbc93d7e053356d97692",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-20T17:04:38Z",
						"stash": {
							"name": "~price 1 chaos",
							"x": 4,
							"y": 7
						},
						"whisper": "@HG_Najtmilks Hi, I would like to buy your Blood Track Titan Greaves listed for 1 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 5, top 8)",
						"account": {
							"name": "Nightmilkz",
							"lastCharacterName": "HG_Najtmilks",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Blood Track",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 73,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"266",
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
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+26 to Strength",
							"+25 to Armour",
							"+105 to maximum Life",
							"+39% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 319,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "of the Lion",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 23,
												"max": 27
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
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
											0,
											3
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
							"text": "UmFyaXR5OiBSYXJlDQpCbG9vZCBUcmFjaw0KVGl0YW4gR3JlYXZlcw0KLS0tLS0tLS0NCkFybW91cjogMjY2IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY4DQpTdHI6IDEyMA0KLS0tLS0tLS0NClNvY2tldHM6IFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzMNCi0tLS0tLS0tDQorMjYgdG8gU3RyZW5ndGgNCisyNSB0byBBcm1vdXINCisxMDUgdG8gbWF4aW11bSBMaWZlDQorMzklIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQo="
						},
						"pseudoMods": [
							"(pseudo) +39% total Elemental Resistance",
							"(pseudo) +118 total maximum Life",
							"Sum: 275"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "2e2595c2788d49e8c714c5dc63a1ec32efb147450ecd000a4cf015948a90c51b",
				"name": "Corruption Span",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"evasion 254"
				],
				"implicitMods": [],
				"explicitMods": [
					"+32 to Evasion Rating",
					"+116 to maximum Life",
					"8% increased Rarity of Items found",
					"+43% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +43% total Elemental Resistance",
					"(pseudo) +116 total maximum Life",
					"Sum: 275"
				],
				"accountText": "MyNameIsGustav > nnundo_nugiBEEEF",
				"whisper": "@nnundo_nugiBEEEF Hi, I would like to buy your Corruption Span Shagreen Boots listed for 7 chaos in Metamorph (stash tab \"16\"; position: left 10, top 6)",
				"note": "~price 7 chaos",
				"priceText": "7 chaos",
				"valueExcludingProperties": 275,
				"evalValue": 275,
				"evalPrice": 7,
				"debug": {
					"id": "2e2595c2788d49e8c714c5dc63a1ec32efb147450ecd000a4cf015948a90c51b",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-17T01:02:10Z",
						"stash": {
							"name": "16",
							"x": 9,
							"y": 5
						},
						"whisper": "@nnundo_nugiBEEEF Hi, I would like to buy your Corruption Span Shagreen Boots listed for 7 chaos in Metamorph (stash tab \"16\"; position: left 10, top 6)",
						"account": {
							"name": "MyNameIsGustav",
							"lastCharacterName": "nnundo_nugiBEEEF",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Corruption Span",
						"typeLine": "Shagreen Boots",
						"identified": true,
						"ilvl": 72,
						"note": "~price 7 chaos",
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"212",
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
										"97",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+32 to Evasion Rating",
							"+116 to maximum Life",
							"8% increased Rarity of Items found",
							"+43% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 254,
							"ev_aug": true,
							"mods": {
								"explicit": [
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
									},
									{
										"name": "Fawn's",
										"tier": "P1",
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "of Plunder",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 6,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
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
										"explicit.stat_3917489142",
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
							"text": "UmFyaXR5OiBSYXJlDQpDb3JydXB0aW9uIFNwYW4NClNoYWdyZWVuIEJvb3RzDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDIxMiAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1Nw0KRGV4OiA5Nw0KLS0tLS0tLS0NClNvY2tldHM6IEcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzINCi0tLS0tLS0tDQorMzIgdG8gRXZhc2lvbiBSYXRpbmcNCisxMTYgdG8gbWF4aW11bSBMaWZlDQo4JSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIGZvdW5kDQorNDMlIHRvIENvbGQgUmVzaXN0YW5jZQ0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA3IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +43% total Elemental Resistance",
							"(pseudo) +116 total maximum Life",
							"Sum: 275"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "3d45933a6fc5c260f2bd24966b0eca134ae0571a5874f8d4d9d4d64cff45cf4a",
				"name": "Havoc Spark",
				"sockets": [
					[
						"G",
						"B"
					],
					[
						"G"
					]
				],
				"itemLevel": 73,
				"defenseProperties": [
					"evasion 238"
				],
				"implicitMods": [],
				"explicitMods": [
					"+18 to Evasion Rating",
					"+103 to maximum Life",
					"9% increased Rarity of Items found",
					"+44% to Fire Resistance",
					"+23% to Cold Resistance",
					"16% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +67% total Elemental Resistance",
					"(pseudo) +103 total maximum Life",
					"Sum: 273"
				],
				"accountText": "Foraylolz > Forayoe",
				"whisper": "@Forayoe Hi, I would like to buy your Havoc Spark Shagreen Boots listed for 3 chaos in Metamorph (stash tab \"~price 3 chaos\"; position: left 3, top 11)",
				"priceText": "3 chaos",
				"valueExcludingProperties": 273,
				"evalValue": 273,
				"evalPrice": 3,
				"debug": {
					"id": "3d45933a6fc5c260f2bd24966b0eca134ae0571a5874f8d4d9d4d64cff45cf4a",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-14T19:41:33Z",
						"stash": {
							"name": "~price 3 chaos",
							"x": 2,
							"y": 10
						},
						"whisper": "@Forayoe Hi, I would like to buy your Havoc Spark Shagreen Boots listed for 3 chaos in Metamorph (stash tab \"~price 3 chaos\"; position: left 3, top 11)",
						"account": {
							"name": "Foraylolz",
							"lastCharacterName": "Forayoe",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
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
						"name": "Havoc Spark",
						"typeLine": "Shagreen Boots",
						"identified": true,
						"ilvl": 73,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"198",
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
										"97",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+18 to Evasion Rating",
							"+103 to maximum Life",
							"9% increased Rarity of Items found",
							"+44% to Fire Resistance",
							"+23% to Cold Resistance",
							"16% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ev": 238,
							"ev_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Magpie's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 8,
												"max": 12
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
										"name": "of Stone Skin",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_2511217560",
												"min": 14,
												"max": 16
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
									},
									{
										"name": "Flea's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											4
										]
									],
									[
										"explicit.stat_3299347043",
										[
											4,
											5
										]
									],
									[
										"explicit.stat_3917489142",
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
							"text": "UmFyaXR5OiBSYXJlDQpIYXZvYyBTcGFyaw0KU2hhZ3JlZW4gQm9vdHMNCi0tLS0tLS0tDQpFdmFzaW9uIFJhdGluZzogMTk4IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU3DQpEZXg6IDk3DQotLS0tLS0tLQ0KU29ja2V0czogRy1CIEcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzMNCi0tLS0tLS0tDQorMTggdG8gRXZhc2lvbiBSYXRpbmcNCisxMDMgdG8gbWF4aW11bSBMaWZlDQo5JSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIGZvdW5kDQorNDQlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzIzJSB0byBDb2xkIFJlc2lzdGFuY2UNCjE2JSBpbmNyZWFzZWQgU3R1biBhbmQgQmxvY2sgUmVjb3ZlcnkNCg=="
						},
						"pseudoMods": [
							"(pseudo) +67% total Elemental Resistance",
							"(pseudo) +103 total maximum Life",
							"Sum: 273"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "08668fa8d0cebb894d959ed8c2b48ad344dd3361fc6a6c2b3a517e2f35aa841c",
				"name": "Carrion Hoof",
				"sockets": [
					[
						"G",
						"G"
					],
					[
						"G"
					]
				],
				"itemLevel": 79,
				"defenseProperties": [
					"evasion 242"
				],
				"implicitMods": [],
				"explicitMods": [
					"+22 to Evasion Rating",
					"+105 to maximum Life",
					"+25% to Cold Resistance",
					"+37% to Lightning Resistance",
					"10% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +62% total Elemental Resistance",
					"(pseudo) +105 total maximum Life",
					"Sum: 272"
				],
				"accountText": "comaleek > elmolol",
				"whisper": "@elmolol Hi, I would like to buy your Carrion Hoof Shagreen Boots listed for 8 chaos in Metamorph (stash tab \"$$$$$\"; position: left 7, top 11)",
				"note": "~price 8 chaos",
				"priceText": "8 chaos",
				"valueExcludingProperties": 272,
				"evalValue": 272,
				"evalPrice": 8,
				"debug": {
					"id": "08668fa8d0cebb894d959ed8c2b48ad344dd3361fc6a6c2b3a517e2f35aa841c",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-17T03:00:41Z",
						"stash": {
							"name": "$$$$$",
							"x": 6,
							"y": 10
						},
						"whisper": "@elmolol Hi, I would like to buy your Carrion Hoof Shagreen Boots listed for 8 chaos in Metamorph (stash tab \"$$$$$\"; position: left 7, top 11)",
						"account": {
							"name": "comaleek",
							"lastCharacterName": "elmolol",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
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
						"name": "Carrion Hoof",
						"typeLine": "Shagreen Boots",
						"identified": true,
						"ilvl": 79,
						"note": "~price 8 chaos",
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"202",
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
										"97",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+22 to Evasion Rating",
							"+105 to maximum Life",
							"+25% to Cold Resistance",
							"+37% to Lightning Resistance",
							"10% increased Movement Speed"
						],
						"frameType": 2,
						"extended": {
							"ev": 242,
							"ev_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "Runner's",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_2250533757",
												"min": 10,
												"max": 10
											}
										]
									},
									{
										"name": "of the Yeti",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 24,
												"max": 29
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
										"name": "Fawn's",
										"tier": "P1",
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
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											4
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
											4
										]
									],
									[
										"explicit.stat_4220027924",
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
										"explicit.stat_2250533757",
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
							"text": "UmFyaXR5OiBSYXJlDQpDYXJyaW9uIEhvb2YNClNoYWdyZWVuIEJvb3RzDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDIwMiAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1NQ0KRGV4OiA5Nw0KLS0tLS0tLS0NClNvY2tldHM6IEctRyBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc5DQotLS0tLS0tLQ0KKzIyIHRvIEV2YXNpb24gUmF0aW5nDQorMTA1IHRvIG1heGltdW0gTGlmZQ0KKzI1JSB0byBDb2xkIFJlc2lzdGFuY2UNCiszNyUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCjEwJSBpbmNyZWFzZWQgTW92ZW1lbnQgU3BlZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgOCBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +62% total Elemental Resistance",
							"(pseudo) +105 total maximum Life",
							"Sum: 272"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "14f6a5ecc2937c897611d14ed45b700f866aaa2d182cf94d7b191bc69c34f573",
				"name": "Rage Stride",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"evasion 247"
				],
				"implicitMods": [],
				"explicitMods": [
					"+16 to Evasion Rating",
					"6% increased Evasion Rating",
					"+104 to maximum Life",
					"Regenerate 12.6 Life per second",
					"+44% to Fire Resistance",
					"6% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +63% total Elemental Resistance",
					"(pseudo) +104 total maximum Life",
					"Sum: 271"
				],
				"accountText": "ColeWayneJones > TheThirteenthJones",
				"whisper": "@TheThirteenthJones Hi, I would like to buy your Rage Stride Shagreen Boots listed for 2 chaos in Metamorph (stash tab \"~b/o 2 chaos\"; position: left 4, top 1)",
				"priceText": "2 chaos",
				"valueExcludingProperties": 271,
				"evalValue": 271,
				"evalPrice": 2,
				"debug": {
					"id": "14f6a5ecc2937c897611d14ed45b700f866aaa2d182cf94d7b191bc69c34f573",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T01:04:56Z",
						"stash": {
							"name": "~b/o 2 chaos",
							"x": 3,
							"y": 0
						},
						"whisper": "@TheThirteenthJones Hi, I would like to buy your Rage Stride Shagreen Boots listed for 2 chaos in Metamorph (stash tab \"~b/o 2 chaos\"; position: left 4, top 1)",
						"account": {
							"name": "ColeWayneJones",
							"lastCharacterName": "TheThirteenthJones",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Rage Stride",
						"typeLine": "Shagreen Boots",
						"identified": true,
						"ilvl": 72,
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+5%",
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
										"218",
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
										"97",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+16 to Evasion Rating",
							"6% increased Evasion Rating",
							"+104 to maximum Life",
							"Regenerate 12.6 Life per second",
							"+44% to Fire Resistance",
							"6% increased Stun and Block Recovery"
						],
						"craftedMods": [
							"+19% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 247,
							"ev_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
										"name": "Flea's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 14,
												"max": 20
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
										"name": "Mosquito's",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 6,
												"max": 13
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 6,
												"max": 7
											}
										]
									}
								],
								"crafted": [
									{
										"name": "of Craft",
										"tier": "R1",
										"magnitudes": [
											{
												"hash": "crafted.stat_4220027924",
												"min": 16,
												"max": 20
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											2
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
											0,
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
										"explicit.stat_3372524247",
										[
											3
										]
									],
									[
										"explicit.stat_2511217560",
										[
											4
										]
									]
								],
								"crafted": [
									[
										"crafted.stat_4220027924",
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
							"text": "UmFyaXR5OiBSYXJlDQpSYWdlIFN0cmlkZQ0KU2hhZ3JlZW4gQm9vdHMNCi0tLS0tLS0tDQpRdWFsaXR5OiArNSUgKGF1Z21lbnRlZCkNCkV2YXNpb24gUmF0aW5nOiAyMTggKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTcNCkRleDogOTcNCi0tLS0tLS0tDQpTb2NrZXRzOiBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcyDQotLS0tLS0tLQ0KKzE2IHRvIEV2YXNpb24gUmF0aW5nDQo2JSBpbmNyZWFzZWQgRXZhc2lvbiBSYXRpbmcNCisxMDQgdG8gbWF4aW11bSBMaWZlDQpSZWdlbmVyYXRlIDEyLjYgTGlmZSBwZXIgc2Vjb25kDQorNDQlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KNiUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQorMTklIHRvIENvbGQgUmVzaXN0YW5jZSAoY3JhZnRlZCkNCg=="
						},
						"pseudoMods": [
							"(pseudo) +63% total Elemental Resistance",
							"(pseudo) +104 total maximum Life",
							"Sum: 271"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "b0ad89a908c97755bfd784ce66c5e91fcaecb74844b373bd40f37841cfd78eba",
				"name": "Phoenix March",
				"sockets": [
					[
						"R"
					],
					[
						"R"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"armour 266"
				],
				"implicitMods": [],
				"explicitMods": [
					"+30 to Strength",
					"56% increased Armour",
					"+84 to maximum Life",
					"9% increased Rarity of Items found",
					"+43% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +73% total Elemental Resistance",
					"(pseudo) +99 total maximum Life",
					"Sum: 271"
				],
				"accountText": "Jacobism > DEFEKT_FinalForm",
				"whisper": "@DEFEKT_FinalForm Hi, I would like to buy your Phoenix March Ancient Greaves listed for 5 chaos in Metamorph (stash tab \"Nice\"; position: left 5, top 11)",
				"note": "~b/o 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 271,
				"evalValue": 271.266,
				"evalPrice": 5,
				"debug": {
					"id": "b0ad89a908c97755bfd784ce66c5e91fcaecb74844b373bd40f37841cfd78eba",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-19T00:37:06Z",
						"stash": {
							"name": "Nice",
							"x": 4,
							"y": 10
						},
						"whisper": "@DEFEKT_FinalForm Hi, I would like to buy your Phoenix March Ancient Greaves listed for 5 chaos in Metamorph (stash tab \"Nice\"; position: left 5, top 11)",
						"account": {
							"name": "Jacobism",
							"lastCharacterName": "DEFEKT_FinalForm",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr3.png?scale=1&w=2&h=2&v=98f1f6d1137161abc1ef30ee82dadc62",
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
						"name": "Phoenix March",
						"typeLine": "Ancient Greaves",
						"identified": true,
						"ilvl": 72,
						"note": "~b/o 5 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"236",
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
										"57",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"82",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+30 to Strength",
							"56% increased Armour",
							"+84 to maximum Life",
							"9% increased Rarity of Items found",
							"+43% to Cold Resistance"
						],
						"craftedMods": [
							"+15% to Fire and Lightning Resistances"
						],
						"frameType": 2,
						"extended": {
							"ar": 266,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Buttressed",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
												"min": 56,
												"max": 67
											}
										]
									},
									{
										"name": "Magpie's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 8,
												"max": 12
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
									},
									{
										"name": "of the Gorilla",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 28,
												"max": 32
											}
										]
									}
								],
								"crafted": [
									{
										"name": "of Craft",
										"tier": "R2",
										"magnitudes": [
											{
												"hash": "crafted.stat_3441501978",
												"min": 13,
												"max": 16
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											4
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
										"explicit.stat_3917489142",
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
								"crafted": [
									[
										"crafted.stat_3441501978",
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
							"text": "UmFyaXR5OiBSYXJlDQpQaG9lbml4IE1hcmNoDQpBbmNpZW50IEdyZWF2ZXMNCi0tLS0tLS0tDQpBcm1vdXI6IDIzNiAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1Nw0KU3RyOiA4Mg0KLS0tLS0tLS0NClNvY2tldHM6IFIgUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3Mg0KLS0tLS0tLS0NCiszMCB0byBTdHJlbmd0aA0KNTYlIGluY3JlYXNlZCBBcm1vdXINCis4NCB0byBtYXhpbXVtIExpZmUNCjklIGluY3JlYXNlZCBSYXJpdHkgb2YgSXRlbXMgZm91bmQNCis0MyUgdG8gQ29sZCBSZXNpc3RhbmNlDQorMTUlIHRvIEZpcmUgYW5kIExpZ2h0bmluZyBSZXNpc3RhbmNlcyAoY3JhZnRlZCkNCi0tLS0tLS0tDQpOb3RlOiB+Yi9vIDUgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +73% total Elemental Resistance",
							"(pseudo) +99 total maximum Life",
							"Sum: 271"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "af6ad5136f0d071f0a86c448b501e5397bdbaf8b3e65e9d2317080528c7a2e6f",
				"name": "Demon Trail",
				"sockets": [
					[
						"R",
						"R"
					],
					[
						"G"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"armour 361"
				],
				"implicitMods": [],
				"explicitMods": [
					"+11 to Strength",
					"+19 to Armour",
					"31% increased Armour",
					"+106 to maximum Life",
					"+8% to Fire Resistance",
					"+40% to Cold Resistance",
					"12% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +48% total Elemental Resistance",
					"(pseudo) +111.5 total maximum Life",
					"Sum: 271"
				],
				"accountText": "JUOLA > Loppuu_Huumori",
				"whisper": "@Loppuu_Huumori Hi, I would like to buy your Demon Trail Vaal Greaves listed for 5 chaos in Metamorph (stash tab \"Sell\"; position: left 1, top 9)",
				"note": "~price 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 271,
				"evalValue": 271.361,
				"evalPrice": 5,
				"debug": {
					"id": "af6ad5136f0d071f0a86c448b501e5397bdbaf8b3e65e9d2317080528c7a2e6f",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-20T21:01:42Z",
						"stash": {
							"name": "Sell",
							"x": 0,
							"y": 8
						},
						"whisper": "@Loppuu_Huumori Hi, I would like to buy your Demon Trail Vaal Greaves listed for 5 chaos in Metamorph (stash tab \"Sell\"; position: left 1, top 9)",
						"account": {
							"name": "JUOLA",
							"lastCharacterName": "Loppuu_Huumori",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr3.png?scale=1&w=2&h=2&v=98f1f6d1137161abc1ef30ee82dadc62",
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
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Demon Trail",
						"typeLine": "Vaal Greaves",
						"identified": true,
						"ilvl": 72,
						"note": "~price 5 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"313",
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
										"62",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"117",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+11 to Strength",
							"+19 to Armour",
							"31% increased Armour",
							"+106 to maximum Life",
							"+8% to Fire Resistance",
							"+40% to Cold Resistance",
							"12% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 361,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "of the Brute",
										"tier": "S9",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 8,
												"max": 12
											}
										]
									},
									{
										"name": "of the Whelpling",
										"tier": "S8",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 6,
												"max": 11
											}
										]
									},
									{
										"name": "Oyster's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
											}
										]
									},
									{
										"name": "Rhino's",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
									}
								]
							},
							"hashes": {
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
											2
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
											2,
											4
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
											5
										]
									],
									[
										"explicit.stat_2511217560",
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
							"text": "UmFyaXR5OiBSYXJlDQpEZW1vbiBUcmFpbA0KVmFhbCBHcmVhdmVzDQotLS0tLS0tLQ0KQXJtb3VyOiAzMTMgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjINClN0cjogMTE3DQotLS0tLS0tLQ0KU29ja2V0czogUi1SIEcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzINCi0tLS0tLS0tDQorMTEgdG8gU3RyZW5ndGgNCisxOSB0byBBcm1vdXINCjMxJSBpbmNyZWFzZWQgQXJtb3VyDQorMTA2IHRvIG1heGltdW0gTGlmZQ0KKzglIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzQwJSB0byBDb2xkIFJlc2lzdGFuY2UNCjEyJSBpbmNyZWFzZWQgU3R1biBhbmQgQmxvY2sgUmVjb3ZlcnkNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgNSBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +48% total Elemental Resistance",
							"(pseudo) +111.5 total maximum Life",
							"Sum: 271"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "6bba0c91e5a7351d74af0919f42fe84ac34acca878c99bbac8f4aec52e62014f",
				"name": "Invasion Spur",
				"sockets": [
					[
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 73,
				"defenseProperties": [
					"evasion 337"
				],
				"implicitMods": [],
				"explicitMods": [
					"+35 to Evasion Rating",
					"+111 to maximum Life",
					"+15% to Cold Resistance",
					"+34% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +49% total Elemental Resistance",
					"(pseudo) +111 total maximum Life",
					"Sum: 271"
				],
				"accountText": "zcg74110 > AI_Q",
				"whisper": "@AI_Q Hi, I would like to buy your Invasion Spur Slink Boots listed for 5 chaos in Metamorph (stash tab \"duoduo\"; position: left 3, top 10)",
				"note": "~price 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 271,
				"evalValue": 271,
				"evalPrice": 5,
				"debug": {
					"id": "6bba0c91e5a7351d74af0919f42fe84ac34acca878c99bbac8f4aec52e62014f",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-20T18:53:37Z",
						"stash": {
							"name": "duoduo",
							"x": 2,
							"y": 9
						},
						"whisper": "@AI_Q Hi, I would like to buy your Invasion Spur Slink Boots listed for 5 chaos in Metamorph (stash tab \"duoduo\"; position: left 3, top 10)",
						"account": {
							"name": "zcg74110",
							"lastCharacterName": "AI_Q",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
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
						"name": "Invasion Spur",
						"typeLine": "Slink Boots",
						"identified": true,
						"ilvl": 73,
						"note": "~price 5 chaos",
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"281",
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
										"69",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+35 to Evasion Rating",
							"+111 to maximum Life",
							"+15% to Cold Resistance",
							"+34% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 337,
							"ev_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Fawn's",
										"tier": "P1",
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
										"name": "of the Tempest",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 30,
												"max": 35
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
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
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
							"text": "UmFyaXR5OiBSYXJlDQpJbnZhc2lvbiBTcHVyDQpTbGluayBCb290cw0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiAyODEgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjkNCkRleDogMTIwDQotLS0tLS0tLQ0KU29ja2V0czogRy1HLUcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzMNCi0tLS0tLS0tDQorMzUgdG8gRXZhc2lvbiBSYXRpbmcNCisxMTEgdG8gbWF4aW11bSBMaWZlDQorMTUlIHRvIENvbGQgUmVzaXN0YW5jZQ0KKzM0JSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA1IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +49% total Elemental Resistance",
							"(pseudo) +111 total maximum Life",
							"Sum: 271"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "b5fd2e0d85ab604d86f1b36d4c88eba56cfcec652d7156f4ab8cd6b9c67d3b9f",
				"name": "Nemesis Dash",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"armour 127",
					"evasion 127"
				],
				"implicitMods": [],
				"explicitMods": [
					"+31 to Strength",
					"+89 to maximum Life",
					"+43% to Fire Resistance",
					"+19% to Lightning Resistance",
					"15% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +62% total Elemental Resistance",
					"(pseudo) +104.5 total maximum Life",
					"Sum: 271"
				],
				"accountText": "nemur005 > XX_Hs_xX",
				"whisper": "@XX_Hs_xX Hi, I would like to buy your Nemesis Dash Hydrascale Boots listed for 7 chaos in Metamorph (stash tab \"$\"; position: left 7, top 3)",
				"note": "~b/o 7 chaos",
				"priceText": "7 chaos",
				"valueExcludingProperties": 271,
				"evalValue": 271.127,
				"evalPrice": 7,
				"debug": {
					"id": "b5fd2e0d85ab604d86f1b36d4c88eba56cfcec652d7156f4ab8cd6b9c67d3b9f",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T17:11:45Z",
						"stash": {
							"name": "$",
							"x": 6,
							"y": 2
						},
						"whisper": "@XX_Hs_xX Hi, I would like to buy your Nemesis Dash Hydrascale Boots listed for 7 chaos in Metamorph (stash tab \"$\"; position: left 7, top 3)",
						"account": {
							"name": "nemur005",
							"lastCharacterName": "XX_Hs_xX",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 7,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrDex2.png?scale=1&w=2&h=2&v=bdfb39d9a0b60c4ac542bedd8ff06e08",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Nemesis Dash",
						"typeLine": "Hydrascale Boots",
						"identified": true,
						"ilvl": 72,
						"note": "~b/o 7 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"106",
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
										"106",
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
										"56",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"56",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+31 to Strength",
							"+89 to maximum Life",
							"+43% to Fire Resistance",
							"+19% to Lightning Resistance",
							"15% increased Movement Speed"
						],
						"frameType": 2,
						"extended": {
							"ev": 127,
							"ev_aug": true,
							"ar": 127,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
										"name": "of the Gorilla",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 28,
												"max": 32
											}
										]
									},
									{
										"name": "Sprinter's",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_2250533757",
												"min": 15,
												"max": 15
											}
										]
									}
								]
							},
							"hashes": {
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
										"explicit.stat_2250533757",
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
							"text": "UmFyaXR5OiBSYXJlDQpOZW1lc2lzIERhc2gNCkh5ZHJhc2NhbGUgQm9vdHMNCi0tLS0tLS0tDQpBcm1vdXI6IDEwNg0KRXZhc2lvbiBSYXRpbmc6IDEwNg0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1OQ0KU3RyOiA1Ng0KRGV4OiA1Ng0KLS0tLS0tLS0NClNvY2tldHM6IFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzINCi0tLS0tLS0tDQorMzEgdG8gU3RyZW5ndGgNCis4OSB0byBtYXhpbXVtIExpZmUNCis0MyUgdG8gRmlyZSBSZXNpc3RhbmNlDQorMTklIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQoxNSUgaW5jcmVhc2VkIE1vdmVtZW50IFNwZWVkDQotLS0tLS0tLQ0KTm90ZTogfmIvbyA3IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +62% total Elemental Resistance",
							"(pseudo) +104.5 total maximum Life",
							"Sum: 271"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "58cfac5d98cb23d0bd7cd9355054d341927d9f99cfa170614bd0d3f67160d0bc",
				"name": "Eagle Hoof",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 73,
				"defenseProperties": [
					"armour 267"
				],
				"implicitMods": [],
				"explicitMods": [
					"+23 to Strength",
					"31% increased Armour",
					"+85 to maximum Life",
					"+44% to Fire Resistance",
					"+34% to Lightning Resistance",
					"12% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +78% total Elemental Resistance",
					"(pseudo) +96.5 total maximum Life",
					"Sum: 271"
				],
				"accountText": "imarunk > YEEIET",
				"whisper": "@YEEIET Hi, I would like to buy your Eagle Hoof Goliath Greaves listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 7, top 11)",
				"priceText": "10 chaos",
				"valueExcludingProperties": 271,
				"evalValue": 271.267,
				"evalPrice": 10,
				"debug": {
					"id": "58cfac5d98cb23d0bd7cd9355054d341927d9f99cfa170614bd0d3f67160d0bc",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-16T19:58:03Z",
						"stash": {
							"name": "~price 10 chaos",
							"x": 6,
							"y": 10
						},
						"whisper": "@YEEIET Hi, I would like to buy your Eagle Hoof Goliath Greaves listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 7, top 11)",
						"account": {
							"name": "imarunk",
							"lastCharacterName": "YEEIET",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Eagle Hoof",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 73,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"232",
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
										"57",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+23 to Strength",
							"31% increased Armour",
							"+85 to maximum Life",
							"+44% to Fire Resistance",
							"+34% to Lightning Resistance",
							"12% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 267,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "of the Lion",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 23,
												"max": 27
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
									},
									{
										"name": "Rhino's",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
												"min": 27,
												"max": 32
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 12,
												"max": 13
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											0
										]
									],
									[
										"explicit.stat_1062208444",
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
										"explicit.stat_3372524247",
										[
											1
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
							"text": "UmFyaXR5OiBSYXJlDQpFYWdsZSBIb29mDQpHb2xpYXRoIEdyZWF2ZXMNCi0tLS0tLS0tDQpBcm1vdXI6IDIzMiAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1Nw0KU3RyOiA5NQ0KLS0tLS0tLS0NClNvY2tldHM6IFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzMNCi0tLS0tLS0tDQorMjMgdG8gU3RyZW5ndGgNCjMxJSBpbmNyZWFzZWQgQXJtb3VyDQorODUgdG8gbWF4aW11bSBMaWZlDQorNDQlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzM0JSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KMTIlIGluY3JlYXNlZCBTdHVuIGFuZCBCbG9jayBSZWNvdmVyeQ0K"
						},
						"pseudoMods": [
							"(pseudo) +78% total Elemental Resistance",
							"(pseudo) +96.5 total maximum Life",
							"Sum: 271"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "55e56dbeff04b3fbc7ad289ce0d161760f9c16aadece833f4a41f119444ba701",
				"name": "Sorrow Sole",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 71,
				"defenseProperties": [
					"armour 152"
				],
				"implicitMods": [],
				"explicitMods": [
					"+18 to Armour",
					"+106 to maximum Life",
					"Regenerate 13 Life per second",
					"+24% to Fire Resistance",
					"+34% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +58% total Elemental Resistance",
					"(pseudo) +106 total maximum Life",
					"Sum: 270"
				],
				"accountText": "garius123123 > EhaltORB",
				"whisper": "@EhaltORB Hi, I would like to buy your Sorrow Sole Reinforced Greaves listed for 7 chaos in Metamorph (stash tab \"~b/o 7 chaos\"; position: left 3, top 11)",
				"priceText": "7 chaos",
				"valueExcludingProperties": 270,
				"evalValue": 270.152,
				"evalPrice": 7,
				"debug": {
					"id": "55e56dbeff04b3fbc7ad289ce0d161760f9c16aadece833f4a41f119444ba701",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T03:25:37Z",
						"stash": {
							"name": "~b/o 7 chaos",
							"x": 2,
							"y": 10
						},
						"whisper": "@EhaltORB Hi, I would like to buy your Sorrow Sole Reinforced Greaves listed for 7 chaos in Metamorph (stash tab \"~b/o 7 chaos\"; position: left 3, top 11)",
						"account": {
							"name": "garius123123",
							"lastCharacterName": "EhaltORB",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 7,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Sorrow Sole",
						"typeLine": "Reinforced Greaves",
						"identified": true,
						"ilvl": 71,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"127",
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
										"47",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"60",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+18 to Armour",
							"+106 to maximum Life",
							"Regenerate 13 Life per second",
							"+24% to Fire Resistance",
							"+34% to Cold Resistance"
						],
						"craftedMods": [
							"17% increased Movement Speed"
						],
						"frameType": 2,
						"extended": {
							"ar": 152,
							"ar_aug": true,
							"mods": {
								"explicit": [
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
										"name": "of the Walrus",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 30,
												"max": 35
											}
										]
									},
									{
										"name": "Oyster's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									}
								],
								"crafted": [
									{
										"name": "Upgraded",
										"tier": "R2",
										"magnitudes": [
											{
												"hash": "crafted.stat_2250533757",
												"min": 15,
												"max": 19
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_3484657501",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3,
											4
										]
									],
									[
										"explicit.stat_3325883026",
										[
											1
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
											2
										]
									]
								],
								"crafted": [
									[
										"crafted.stat_2250533757",
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
							"text": "UmFyaXR5OiBSYXJlDQpTb3Jyb3cgU29sZQ0KUmVpbmZvcmNlZCBHcmVhdmVzDQotLS0tLS0tLQ0KQXJtb3VyOiAxMjcgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDcNClN0cjogNjANCi0tLS0tLS0tDQpTb2NrZXRzOiBSIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcxDQotLS0tLS0tLQ0KKzE4IHRvIEFybW91cg0KKzEwNiB0byBtYXhpbXVtIExpZmUNClJlZ2VuZXJhdGUgMTMgTGlmZSBwZXIgc2Vjb25kDQorMjQlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzM0JSB0byBDb2xkIFJlc2lzdGFuY2UNCjE3JSBpbmNyZWFzZWQgTW92ZW1lbnQgU3BlZWQgKGNyYWZ0ZWQpDQo="
						},
						"pseudoMods": [
							"(pseudo) +58% total Elemental Resistance",
							"(pseudo) +106 total maximum Life",
							"Sum: 270"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "32096982dabde219b935406b597ca1f88ca2316d01444130a35167780e8acaa8",
				"name": "Havoc Urge",
				"sockets": [
					[
						"R",
						"R"
					],
					[
						"G"
					]
				],
				"itemLevel": 68,
				"defenseProperties": [
					"armour 173",
					"evasion 145"
				],
				"implicitMods": [],
				"explicitMods": [
					"+24 to Strength",
					"+23 to Armour",
					"+103 to maximum Life",
					"Regenerate 6.1 Life per second",
					"+39% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +39% total Elemental Resistance",
					"(pseudo) +115 total maximum Life",
					"Sum: 269"
				],
				"accountText": "Hathar > Hathar",
				"whisper": "@Hathar Hi, I would like to buy your Havoc Urge Dragonscale Boots listed for 3 chaos in Metamorph (stash tab \"~b/o 3 chaos\"; position: left 1, top 3)",
				"priceText": "3 chaos",
				"valueExcludingProperties": 269,
				"evalValue": 269.173,
				"evalPrice": 3,
				"debug": {
					"id": "32096982dabde219b935406b597ca1f88ca2316d01444130a35167780e8acaa8",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-21T01:16:42Z",
						"stash": {
							"name": "~b/o 3 chaos",
							"x": 0,
							"y": 2
						},
						"whisper": "@Hathar Hi, I would like to buy your Havoc Urge Dragonscale Boots listed for 3 chaos in Metamorph (stash tab \"~b/o 3 chaos\"; position: left 1, top 3)",
						"account": {
							"name": "Hathar",
							"lastCharacterName": "Hathar",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrDex3.png?scale=1&w=2&h=2&v=601dc135a14c1121dca118c2640a1335",
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
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Havoc Urge",
						"typeLine": "Dragonscale Boots",
						"identified": true,
						"ilvl": 68,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"144",
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
										"121",
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
										"62",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+24 to Strength",
							"+23 to Armour",
							"+103 to maximum Life",
							"Regenerate 6.1 Life per second",
							"+39% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 145,
							"ev_aug": true,
							"ar": 173,
							"ar_aug": true,
							"mods": {
								"explicit": [
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
										"name": "of the Lion",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 23,
												"max": 27
											}
										]
									},
									{
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											2
										]
									],
									[
										"explicit.stat_3484657501",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3,
											4
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
							"text": "UmFyaXR5OiBSYXJlDQpIYXZvYyBVcmdlDQpEcmFnb25zY2FsZSBCb290cw0KLS0tLS0tLS0NCkFybW91cjogMTQ0IChhdWdtZW50ZWQpDQpFdmFzaW9uIFJhdGluZzogMTIxDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY1DQpTdHI6IDYyDQpEZXg6IDYyDQotLS0tLS0tLQ0KU29ja2V0czogUi1SIEcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNjgNCi0tLS0tLS0tDQorMjQgdG8gU3RyZW5ndGgNCisyMyB0byBBcm1vdXINCisxMDMgdG8gbWF4aW11bSBMaWZlDQpSZWdlbmVyYXRlIDYuMSBMaWZlIHBlciBzZWNvbmQNCiszOSUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCg=="
						},
						"pseudoMods": [
							"(pseudo) +39% total Elemental Resistance",
							"(pseudo) +115 total maximum Life",
							"Sum: 269"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "f76f75b0e5c3f457ba934cf5c0a83cf47a7650412845648e93f661eaa1a2d7e5",
				"name": "Honour Dash",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 79,
				"defenseProperties": [
					"armour 309"
				],
				"implicitMods": [],
				"explicitMods": [
					"+24 to Strength",
					"+50 to Armour",
					"16% increased Armour",
					"+88 to maximum Life",
					"+40% to Cold Resistance",
					"+27% to Lightning Resistance",
					"9% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +67% total Elemental Resistance",
					"(pseudo) +100 total maximum Life",
					"Sum: 267"
				],
				"accountText": "CTL > EGGS_LONG_LEG",
				"whisper": "@EGGS_LONG_LEG Hi, I would like to buy your Honour Dash Goliath Greaves listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 1, top 11)",
				"priceText": "5 chaos",
				"valueExcludingProperties": 267,
				"evalValue": 267.309,
				"evalPrice": 5,
				"debug": {
					"id": "f76f75b0e5c3f457ba934cf5c0a83cf47a7650412845648e93f661eaa1a2d7e5",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-18T09:39:39Z",
						"stash": {
							"name": "~price 5 chaos",
							"x": 0,
							"y": 10
						},
						"whisper": "@EGGS_LONG_LEG Hi, I would like to buy your Honour Dash Goliath Greaves listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 1, top 11)",
						"account": {
							"name": "CTL",
							"lastCharacterName": "EGGS_LONG_LEG",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Honour Dash",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 79,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"263",
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
										"54",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+24 to Strength",
							"+50 to Armour",
							"16% increased Armour",
							"+88 to maximum Life",
							"+40% to Cold Resistance",
							"+27% to Lightning Resistance",
							"9% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 309,
							"ar_aug": true,
							"mods": {
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
										"name": "of the Lion",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 23,
												"max": 27
											}
										]
									},
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
										"name": "Crab's",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Ribbed",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 36,
												"max": 60
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
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
											0
										]
									],
									[
										"explicit.stat_1671376347",
										[
											2
										]
									],
									[
										"explicit.stat_2511217560",
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
							"text": "UmFyaXR5OiBSYXJlDQpIb25vdXIgRGFzaA0KR29saWF0aCBHcmVhdmVzDQotLS0tLS0tLQ0KQXJtb3VyOiAyNjMgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTQNClN0cjogOTUNCi0tLS0tLS0tDQpTb2NrZXRzOiBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc5DQotLS0tLS0tLQ0KKzI0IHRvIFN0cmVuZ3RoDQorNTAgdG8gQXJtb3VyDQoxNiUgaW5jcmVhc2VkIEFybW91cg0KKzg4IHRvIG1heGltdW0gTGlmZQ0KKzQwJSB0byBDb2xkIFJlc2lzdGFuY2UNCisyNyUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCjklIGluY3JlYXNlZCBTdHVuIGFuZCBCbG9jayBSZWNvdmVyeQ0K"
						},
						"pseudoMods": [
							"(pseudo) +67% total Elemental Resistance",
							"(pseudo) +100 total maximum Life",
							"Sum: 267"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "ffca4fad2a1c00d4972275d915c35cae517a3f4eb57997deceaca601232e37a6",
				"name": "Spirit Slippers",
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
				"itemLevel": 70,
				"defenseProperties": [
					"armour 260"
				],
				"implicitMods": [],
				"explicitMods": [
					"+36 to Strength",
					"+40 to Armour",
					"+110 to maximum Life",
					"+10% to Fire Resistance",
					"17% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +10% total Elemental Resistance",
					"(pseudo) +128 total maximum Life",
					"Sum: 266"
				],
				"accountText": "Teddera > ZecaPaGordim",
				"whisper": "@ZecaPaGordim Hi, I would like to buy your Spirit Slippers Goliath Greaves listed for 3 chaos in Metamorph (stash tab \"4\"; position: left 8, top 1)",
				"note": "~b/o 3 chaos",
				"priceText": "3 chaos",
				"valueExcludingProperties": 266,
				"evalValue": 266.26,
				"evalPrice": 3,
				"debug": {
					"id": "ffca4fad2a1c00d4972275d915c35cae517a3f4eb57997deceaca601232e37a6",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T20:20:57Z",
						"stash": {
							"name": "4",
							"x": 7,
							"y": 0
						},
						"whisper": "@ZecaPaGordim Hi, I would like to buy your Spirit Slippers Goliath Greaves listed for 3 chaos in Metamorph (stash tab \"4\"; position: left 8, top 1)",
						"account": {
							"name": "Teddera",
							"lastCharacterName": "ZecaPaGordim",
							"online": {
								"league": "Metamorph",
								"status": "afk"
							},
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
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
								"group": 2,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Spirit Slippers",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 70,
						"note": "~b/o 3 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"217",
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
										"54",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+36 to Strength",
							"+40 to Armour",
							"+110 to maximum Life",
							"+10% to Fire Resistance",
							"17% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 260,
							"ar_aug": true,
							"mods": {
								"explicit": [
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
									},
									{
										"name": "of the Whelpling",
										"tier": "S8",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 6,
												"max": 11
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "of the Goliath",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 33,
												"max": 37
											}
										]
									},
									{
										"name": "Urchin's",
										"tier": "P1",
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
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											3
										]
									],
									[
										"explicit.stat_3484657501",
										[
											4
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2,
											4
										]
									],
									[
										"explicit.stat_3372524247",
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
							"text": "UmFyaXR5OiBSYXJlDQpTcGlyaXQgU2xpcHBlcnMNCkdvbGlhdGggR3JlYXZlcw0KLS0tLS0tLS0NCkFybW91cjogMjE3IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU0DQpTdHI6IDk1DQotLS0tLS0tLQ0KU29ja2V0czogUiBSIFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzANCi0tLS0tLS0tDQorMzYgdG8gU3RyZW5ndGgNCis0MCB0byBBcm1vdXINCisxMTAgdG8gbWF4aW11bSBMaWZlDQorMTAlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KMTclIGluY3JlYXNlZCBTdHVuIGFuZCBCbG9jayBSZWNvdmVyeQ0KLS0tLS0tLS0NCk5vdGU6IH5iL28gMyBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +10% total Elemental Resistance",
							"(pseudo) +128 total maximum Life",
							"Sum: 266"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "a2242ade3d373401d75c40e78de9a4d07794a7b61d7c0ccf4abc2fc9f6b379d3",
				"name": "Rapture Pace",
				"sockets": [
					[
						"R",
						"R",
						"R"
					],
					[
						"R"
					]
				],
				"itemLevel": 70,
				"defenseProperties": [
					"armour 295"
				],
				"implicitMods": [],
				"explicitMods": [
					"+26 to Armour",
					"+114 to maximum Life",
					"Regenerate 1.2 Life per second",
					"+38% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +38% total Elemental Resistance",
					"(pseudo) +114 total maximum Life",
					"Sum: 266"
				],
				"accountText": "Nichtskönner > Nameless_Marodeur",
				"whisper": "@Nameless_Marodeur Hi, ich möchte 'Entrückungs-Tempo Vaal-Beinschienen' zum angebotenen Preis von 5 chaos in der Metamorph-Liga kaufen (Truhenfach \"Sell\"; Position: 1 von links, 1 von oben)",
				"note": "~price 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 266,
				"evalValue": 266.295,
				"evalPrice": 5,
				"debug": {
					"id": "a2242ade3d373401d75c40e78de9a4d07794a7b61d7c0ccf4abc2fc9f6b379d3",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-16T17:45:53Z",
						"stash": {
							"name": "Sell",
							"x": 0,
							"y": 0
						},
						"whisper": "@Nameless_Marodeur Hi, ich möchte 'Entrückungs-Tempo Vaal-Beinschienen' zum angebotenen Preis von 5 chaos in der Metamorph-Liga kaufen (Truhenfach \"Sell\"; Position: 1 von links, 1 von oben)",
						"account": {
							"name": "Nichtskönner",
							"lastCharacterName": "Nameless_Marodeur",
							"online": null,
							"language": "de_DE"
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr3.png?scale=1&w=2&h=2&v=98f1f6d1137161abc1ef30ee82dadc62",
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
								"group": 1,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Rapture Pace",
						"typeLine": "Vaal Greaves",
						"identified": true,
						"ilvl": 70,
						"note": "~price 5 chaos",
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
								"name": "Armour",
								"values": [
									[
										"280",
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
										"62",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"117",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+26 to Armour",
							"+114 to maximum Life",
							"Regenerate 1.2 Life per second",
							"+38% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 295,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "of the Newt",
										"tier": "S7",
										"magnitudes": [
											{
												"hash": "explicit.stat_3325883026",
												"min": 1,
												"max": 2
											}
										]
									}
								]
							},
							"hashes": {
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
											0,
											1
										]
									],
									[
										"explicit.stat_3325883026",
										[
											3
										]
									],
									[
										"explicit.stat_4220027924",
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
							"text": "UmFyaXR5OiBSYXJlDQpSYXB0dXJlIFBhY2UNClZhYWwgR3JlYXZlcw0KLS0tLS0tLS0NClF1YWxpdHk6ICsxNCUgKGF1Z21lbnRlZCkNCkFybW91cjogMjgwIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDYyDQpTdHI6IDExNw0KLS0tLS0tLS0NClNvY2tldHM6IFItUi1SIFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzANCi0tLS0tLS0tDQorMjYgdG8gQXJtb3VyDQorMTE0IHRvIG1heGltdW0gTGlmZQ0KUmVnZW5lcmF0ZSAxLjIgTGlmZSBwZXIgc2Vjb25kDQorMzglIHRvIENvbGQgUmVzaXN0YW5jZQ0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA1IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +38% total Elemental Resistance",
							"(pseudo) +114 total maximum Life",
							"Sum: 266"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "2638ee5d8c7cdd467adc97c327215376578e07afdfdd75854a849925ee6cc171",
				"name": "Phoenix Urge",
				"sockets": [
					[
						"R",
						"R"
					],
					[
						"R"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"armour 328"
				],
				"implicitMods": [],
				"explicitMods": [
					"+32 to Armour",
					"+101 to maximum Life",
					"+37% to Cold Resistance",
					"+27% to Lightning Resistance",
					"23% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +64% total Elemental Resistance",
					"(pseudo) +101 total maximum Life",
					"Sum: 266"
				],
				"accountText": "winterreise1988 > ReginaIp",
				"whisper": "@ReginaIp Hi, I would like to buy your Phoenix Urge Titan Greaves listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 5, top 11)",
				"priceText": "5 chaos",
				"valueExcludingProperties": 266,
				"evalValue": 266.328,
				"evalPrice": 5,
				"debug": {
					"id": "2638ee5d8c7cdd467adc97c327215376578e07afdfdd75854a849925ee6cc171",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T19:13:24Z",
						"stash": {
							"name": "~b/o 5 chaos",
							"x": 4,
							"y": 10
						},
						"whisper": "@ReginaIp Hi, I would like to buy your Phoenix Urge Titan Greaves listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 5, top 11)",
						"account": {
							"name": "winterreise1988",
							"lastCharacterName": "ReginaIp",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
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
							}
						],
						"name": "Phoenix Urge",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 72,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"273",
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
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+32 to Armour",
							"+101 to maximum Life",
							"+37% to Cold Resistance",
							"+27% to Lightning Resistance",
							"23% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 328,
							"ar_aug": true,
							"mods": {
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
										"name": "of Adamantite Skin",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_2511217560",
												"min": 23,
												"max": 25
											}
										]
									},
									{
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
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
										"name": "Urchin's",
										"tier": "P1",
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
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_3484657501",
										[
											4
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2,
											4
										]
									],
									[
										"explicit.stat_4220027924",
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
							"text": "UmFyaXR5OiBSYXJlDQpQaG9lbml4IFVyZ2UNClRpdGFuIEdyZWF2ZXMNCi0tLS0tLS0tDQpBcm1vdXI6IDI3MyAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2OA0KU3RyOiAxMjANCi0tLS0tLS0tDQpTb2NrZXRzOiBSLVIgUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3Mg0KLS0tLS0tLS0NCiszMiB0byBBcm1vdXINCisxMDEgdG8gbWF4aW11bSBMaWZlDQorMzclIHRvIENvbGQgUmVzaXN0YW5jZQ0KKzI3JSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KMjMlIGluY3JlYXNlZCBTdHVuIGFuZCBCbG9jayBSZWNvdmVyeQ0K"
						},
						"pseudoMods": [
							"(pseudo) +64% total Elemental Resistance",
							"(pseudo) +101 total maximum Life",
							"Sum: 266"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "965ffa2bd981635b914e11a8a868ba357cb4d435d98c2122f61fb50c394a8b54",
				"name": "Cataclysm Trail",
				"sockets": [
					[
						"R",
						"R"
					],
					[
						"R"
					]
				],
				"itemLevel": 75,
				"defenseProperties": [
					"armour 365"
				],
				"implicitMods": [],
				"explicitMods": [
					"86% increased Armour",
					"+88 to maximum Life",
					"+9% to Fire Resistance",
					"+41% to Cold Resistance",
					"+40% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +90% total Elemental Resistance",
					"(pseudo) +88 total maximum Life",
					"Sum: 266"
				],
				"accountText": "Roberthb > redoog",
				"whisper": "@redoog Hi, I would like to buy your Cataclysm Trail Goliath Greaves listed for 7 chaos in Metamorph (stash tab \"Shop\"; position: left 1, top 1)",
				"note": "~price 7 chaos",
				"priceText": "7 chaos",
				"valueExcludingProperties": 266,
				"evalValue": 266.365,
				"evalPrice": 7,
				"debug": {
					"id": "965ffa2bd981635b914e11a8a868ba357cb4d435d98c2122f61fb50c394a8b54",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-21T01:06:00Z",
						"stash": {
							"name": "Shop",
							"x": 0,
							"y": 0
						},
						"whisper": "@redoog Hi, I would like to buy your Cataclysm Trail Goliath Greaves listed for 7 chaos in Metamorph (stash tab \"Shop\"; position: left 1, top 1)",
						"account": {
							"name": "Roberthb",
							"lastCharacterName": "redoog",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
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
							}
						],
						"name": "Cataclysm Trail",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 75,
						"note": "~price 7 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"329",
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
										"57",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"86% increased Armour",
							"+88 to maximum Life",
							"+9% to Fire Resistance",
							"+41% to Cold Resistance",
							"+40% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 365,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "of the Whelpling",
										"tier": "S8",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 6,
												"max": 11
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
								"explicit": [
									[
										"explicit.stat_1062208444",
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
							"text": "UmFyaXR5OiBSYXJlDQpDYXRhY2x5c20gVHJhaWwNCkdvbGlhdGggR3JlYXZlcw0KLS0tLS0tLS0NCkFybW91cjogMzI5IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU3DQpTdHI6IDk1DQotLS0tLS0tLQ0KU29ja2V0czogUi1SIFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzUNCi0tLS0tLS0tDQo4NiUgaW5jcmVhc2VkIEFybW91cg0KKzg4IHRvIG1heGltdW0gTGlmZQ0KKzklIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzQxJSB0byBDb2xkIFJlc2lzdGFuY2UNCis0MCUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgNyBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +90% total Elemental Resistance",
							"(pseudo) +88 total maximum Life",
							"Sum: 266"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "94ff26b3c02c5bafdbaca5e1c58c3c95047c5ca293f3d5a9076f150437d6ec7e",
				"name": "Spirit Goad",
				"sockets": [
					[
						"B",
						"G"
					]
				],
				"itemLevel": 78,
				"defenseProperties": [
					"armour 139",
					"evasion 139"
				],
				"implicitMods": [],
				"explicitMods": [
					"11% increased Armour and Evasion",
					"+84 to maximum Life",
					"+42% to Fire Resistance",
					"+22% to Cold Resistance",
					"+33% to Lightning Resistance",
					"6% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +97% total Elemental Resistance",
					"(pseudo) +84 total maximum Life",
					"Sum: 265"
				],
				"accountText": "Rektify32 > RektifiedSoul",
				"whisper": "@RektifiedSoul Hi, I would like to buy your Spirit Goad Hydrascale Boots listed for 4 chaos in Metamorph (stash tab \"sale\"; position: left 1, top 6)",
				"note": "~b/o 4 chaos",
				"priceText": "4 chaos",
				"valueExcludingProperties": 265,
				"evalValue": 265.139,
				"evalPrice": 4,
				"debug": {
					"id": "94ff26b3c02c5bafdbaca5e1c58c3c95047c5ca293f3d5a9076f150437d6ec7e",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-19T00:11:01Z",
						"stash": {
							"name": "sale",
							"x": 0,
							"y": 5
						},
						"whisper": "@RektifiedSoul Hi, I would like to buy your Spirit Goad Hydrascale Boots listed for 4 chaos in Metamorph (stash tab \"sale\"; position: left 1, top 6)",
						"account": {
							"name": "Rektify32",
							"lastCharacterName": "RektifiedSoul",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 4,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrDex2.png?scale=1&w=2&h=2&v=bdfb39d9a0b60c4ac542bedd8ff06e08",
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
						"name": "Spirit Goad",
						"typeLine": "Hydrascale Boots",
						"identified": true,
						"ilvl": 78,
						"note": "~b/o 4 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"118",
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
										"118",
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
										"56",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"56",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"11% increased Armour and Evasion",
							"+84 to maximum Life",
							"+42% to Fire Resistance",
							"+22% to Cold Resistance",
							"+33% to Lightning Resistance",
							"6% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ev": 139,
							"ev_aug": true,
							"ar": 139,
							"ar_aug": true,
							"mods": {
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
										"name": "of the Tempest",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 30,
												"max": 35
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Beetle's",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_2451402625",
												"min": 6,
												"max": 13
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 6,
												"max": 7
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_2451402625",
										[
											4
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
										"explicit.stat_4220027924",
										[
											0
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
							"text": "UmFyaXR5OiBSYXJlDQpTcGlyaXQgR29hZA0KSHlkcmFzY2FsZSBCb290cw0KLS0tLS0tLS0NCkFybW91cjogMTE4IChhdWdtZW50ZWQpDQpFdmFzaW9uIFJhdGluZzogMTE4IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU5DQpTdHI6IDU2DQpEZXg6IDU2DQotLS0tLS0tLQ0KU29ja2V0czogQi1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc4DQotLS0tLS0tLQ0KMTElIGluY3JlYXNlZCBBcm1vdXIgYW5kIEV2YXNpb24NCis4NCB0byBtYXhpbXVtIExpZmUNCis0MiUgdG8gRmlyZSBSZXNpc3RhbmNlDQorMjIlIHRvIENvbGQgUmVzaXN0YW5jZQ0KKzMzJSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KNiUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQotLS0tLS0tLQ0KTm90ZTogfmIvbyA0IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +97% total Elemental Resistance",
							"(pseudo) +84 total maximum Life",
							"Sum: 265"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "61523a2d77cde64de0377cea1fe6c73861a1f57e95dc4b6f8e1e63e8993f5661",
				"name": "Rune Road",
				"sockets": [
					[
						"R",
						"R"
					]
				],
				"itemLevel": 71,
				"defenseProperties": [
					"armour 430"
				],
				"implicitMods": [],
				"explicitMods": [
					"+30 to Strength",
					"+23 to Armour",
					"43% increased Armour",
					"+98 to maximum Life",
					"+28% to Fire Resistance",
					"+10% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +38% total Elemental Resistance",
					"(pseudo) +113 total maximum Life",
					"Sum: 264"
				],
				"accountText": "aragenn > FwarlyHooker",
				"whisper": "@FwarlyHooker Hi, I would like to buy your Rune Road Titan Greaves listed for 1 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 2, top 10)",
				"priceText": "1 chaos",
				"valueExcludingProperties": 264,
				"evalValue": 264.43,
				"evalPrice": 1,
				"debug": {
					"id": "61523a2d77cde64de0377cea1fe6c73861a1f57e95dc4b6f8e1e63e8993f5661",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-16T01:50:11Z",
						"stash": {
							"name": "~price 1 chaos",
							"x": 1,
							"y": 9
						},
						"whisper": "@FwarlyHooker Hi, I would like to buy your Rune Road Titan Greaves listed for 1 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 2, top 10)",
						"account": {
							"name": "aragenn",
							"lastCharacterName": "FwarlyHooker",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
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
						"name": "Rune Road",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 71,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"378",
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
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+30 to Strength",
							"+23 to Armour",
							"43% increased Armour",
							"+98 to maximum Life",
							"+28% to Fire Resistance",
							"+10% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 430,
							"ar_aug": true,
							"mods": {
								"explicit": [
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
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "of the Gorilla",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 28,
												"max": 32
											}
										]
									},
									{
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "Lobstered",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
												"min": 43,
												"max": 55
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
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											2
										]
									],
									[
										"explicit.stat_3484657501",
										[
											3
										]
									],
									[
										"explicit.stat_1062208444",
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
										"explicit.stat_3372524247",
										[
											0
										]
									],
									[
										"explicit.stat_4220027924",
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
							"text": "UmFyaXR5OiBSYXJlDQpSdW5lIFJvYWQNClRpdGFuIEdyZWF2ZXMNCi0tLS0tLS0tDQpBcm1vdXI6IDM3OCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2OA0KU3RyOiAxMjANCi0tLS0tLS0tDQpTb2NrZXRzOiBSLVIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzENCi0tLS0tLS0tDQorMzAgdG8gU3RyZW5ndGgNCisyMyB0byBBcm1vdXINCjQzJSBpbmNyZWFzZWQgQXJtb3VyDQorOTggdG8gbWF4aW11bSBMaWZlDQorMjglIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzEwJSB0byBDb2xkIFJlc2lzdGFuY2UNCg=="
						},
						"pseudoMods": [
							"(pseudo) +38% total Elemental Resistance",
							"(pseudo) +113 total maximum Life",
							"Sum: 264"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "c4c8eed291f89ef9e87934f4d3e797ff1e620ba34c8c8e77fd25a48002f60662",
				"name": "Storm Dash",
				"sockets": [
					[
						"B",
						"G"
					]
				],
				"itemLevel": 69,
				"defenseProperties": [
					"evasion 216"
				],
				"implicitMods": [],
				"explicitMods": [
					"+89 to maximum Life",
					"12% increased Rarity of Items found",
					"+12% to Fire Resistance",
					"+41% to Cold Resistance",
					"+33% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +86% total Elemental Resistance",
					"(pseudo) +89 total maximum Life",
					"Sum: 264"
				],
				"accountText": "wangyijie > FrameMaiden",
				"whisper": "@FrameMaiden Hi, I would like to buy your Storm Dash Shagreen Boots listed for 5 chaos in Metamorph (stash tab \"5\"; position: left 5, top 8)",
				"note": "~b/o 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 264,
				"evalValue": 264,
				"evalPrice": 5,
				"debug": {
					"id": "c4c8eed291f89ef9e87934f4d3e797ff1e620ba34c8c8e77fd25a48002f60662",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T05:35:21Z",
						"stash": {
							"name": "5",
							"x": 4,
							"y": 7
						},
						"whisper": "@FrameMaiden Hi, I would like to buy your Storm Dash Shagreen Boots listed for 5 chaos in Metamorph (stash tab \"5\"; position: left 5, top 8)",
						"account": {
							"name": "wangyijie",
							"lastCharacterName": "FrameMaiden",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
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
						"name": "Storm Dash",
						"typeLine": "Shagreen Boots",
						"identified": true,
						"ilvl": 69,
						"note": "~b/o 5 chaos",
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
								"name": "Evasion Rating",
								"values": [
									[
										"191",
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
										"97",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+89 to maximum Life",
							"12% increased Rarity of Items found",
							"+12% to Fire Resistance",
							"+41% to Cold Resistance",
							"+33% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 216,
							"ev_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
										"name": "Magpie's",
										"tier": "P2",
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
								"explicit": [
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
							"text": "UmFyaXR5OiBSYXJlDQpTdG9ybSBEYXNoDQpTaGFncmVlbiBCb290cw0KLS0tLS0tLS0NClF1YWxpdHk6ICs2JSAoYXVnbWVudGVkKQ0KRXZhc2lvbiBSYXRpbmc6IDE5MSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1NQ0KRGV4OiA5Nw0KLS0tLS0tLS0NClNvY2tldHM6IEItRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA2OQ0KLS0tLS0tLS0NCis4OSB0byBtYXhpbXVtIExpZmUNCjEyJSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIGZvdW5kDQorMTIlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzQxJSB0byBDb2xkIFJlc2lzdGFuY2UNCiszMyUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpOb3RlOiB+Yi9vIDUgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +86% total Elemental Resistance",
							"(pseudo) +89 total maximum Life",
							"Sum: 264"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "3d9a17bcd228c410be9dca4c2724b9262ffe37478c29207566c4b9cb546272be",
				"name": "Torment Sole",
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
				"itemLevel": 62,
				"defenseProperties": [
					"armour 133",
					"evasion 207"
				],
				"implicitMods": [],
				"explicitMods": [
					"+42 to Evasion Rating",
					"55% increased Armour and Evasion",
					"+111 to maximum Life",
					"+8% to Cold Resistance",
					"+34% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +42% total Elemental Resistance",
					"(pseudo) +111 total maximum Life",
					"Sum: 264"
				],
				"accountText": "ATechN > Tcan_Tcapan",
				"whisper": "@Tcan_Tcapan Hi, I would like to buy your Torment Sole Serpentscale Boots listed for 10 chaos in Metamorph (stash tab \"32\"; position: left 9, top 11)",
				"note": "~b/o 10 chaos",
				"priceText": "10 chaos",
				"valueExcludingProperties": 264,
				"evalValue": 264.133,
				"evalPrice": 10,
				"debug": {
					"id": "3d9a17bcd228c410be9dca4c2724b9262ffe37478c29207566c4b9cb546272be",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-14T19:10:16Z",
						"stash": {
							"name": "32",
							"x": 8,
							"y": 10
						},
						"whisper": "@Tcan_Tcapan Hi, I would like to buy your Torment Sole Serpentscale Boots listed for 10 chaos in Metamorph (stash tab \"32\"; position: left 9, top 11)",
						"account": {
							"name": "ATechN",
							"lastCharacterName": "Tcan_Tcapan",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrDex2.png?scale=1&w=2&h=2&v=bdfb39d9a0b60c4ac542bedd8ff06e08",
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
						"name": "Torment Sole",
						"typeLine": "Serpentscale Boots",
						"identified": true,
						"ilvl": 62,
						"note": "~b/o 10 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"118",
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
										"183",
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
										"43",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"40",
										0
									]
								],
								"displayMode": 1
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
							}
						],
						"explicitMods": [
							"+42 to Evasion Rating",
							"55% increased Armour and Evasion",
							"+111 to maximum Life",
							"+8% to Cold Resistance",
							"+34% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 207,
							"ev_aug": true,
							"ar": 133,
							"ar_aug": true,
							"mods": {
								"explicit": [
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
										"name": "Fawn's",
										"tier": "P1",
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
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											4
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
											1,
											4
										]
									],
									[
										"explicit.stat_4220027924",
										[
											3
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
							"text": "UmFyaXR5OiBSYXJlDQpUb3JtZW50IFNvbGUNClNlcnBlbnRzY2FsZSBCb290cw0KLS0tLS0tLS0NCkFybW91cjogMTE4IChhdWdtZW50ZWQpDQpFdmFzaW9uIFJhdGluZzogMTgzIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQzDQpTdHI6IDQwDQpEZXg6IDQwDQotLS0tLS0tLQ0KU29ja2V0czogUiBSLUctUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA2Mg0KLS0tLS0tLS0NCis0MiB0byBFdmFzaW9uIFJhdGluZw0KNTUlIGluY3JlYXNlZCBBcm1vdXIgYW5kIEV2YXNpb24NCisxMTEgdG8gbWF4aW11bSBMaWZlDQorOCUgdG8gQ29sZCBSZXNpc3RhbmNlDQorMzQlIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQotLS0tLS0tLQ0KTm90ZTogfmIvbyAxMCBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +42% total Elemental Resistance",
							"(pseudo) +111 total maximum Life",
							"Sum: 264"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "e610bcbb30447f9127a5efcca78b981849543317f7c45ee2cdbe4d898890acf9",
				"name": "Nemesis Slippers",
				"sockets": [
					[
						"B",
						"R"
					]
				],
				"itemLevel": 54,
				"defenseProperties": [
					"energyShield 55"
				],
				"implicitMods": [],
				"explicitMods": [
					"18% reduced Attribute Requirements",
					"+8 to maximum Energy Shield",
					"28% increased Energy Shield",
					"+105 to maximum Life",
					"+27% to Fire Resistance",
					"+26% to Lightning Resistance",
					"13% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +53% total Elemental Resistance",
					"(pseudo) +105 total maximum Life",
					"Sum: 263"
				],
				"accountText": "Grifca > whatismetanow",
				"whisper": "@whatismetanow Hi, I would like to buy your Nemesis Slippers Samite Slippers listed for 2 chaos in Metamorph (stash tab \"~b/o 2 chaos\"; position: left 1, top 11)",
				"priceText": "2 chaos",
				"valueExcludingProperties": 263,
				"evalValue": 263,
				"evalPrice": 2,
				"debug": {
					"id": "e610bcbb30447f9127a5efcca78b981849543317f7c45ee2cdbe4d898890acf9",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-14T21:07:43Z",
						"stash": {
							"name": "~b/o 2 chaos",
							"x": 0,
							"y": 10
						},
						"whisper": "@whatismetanow Hi, I would like to buy your Nemesis Slippers Samite Slippers listed for 2 chaos in Metamorph (stash tab \"~b/o 2 chaos\"; position: left 1, top 11)",
						"account": {
							"name": "Grifca",
							"lastCharacterName": "whatismetanow",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsInt3.png?scale=1&w=2&h=2&v=77abd4784ad8e1666ac1b956c565a80e",
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
						"name": "Nemesis Slippers",
						"typeLine": "Samite Slippers",
						"identified": true,
						"ilvl": 54,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"47",
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
										"44",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"64",
										1
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"18% reduced Attribute Requirements",
							"+8 to maximum Energy Shield",
							"28% increased Energy Shield",
							"+105 to maximum Life",
							"+27% to Fire Resistance",
							"+26% to Lightning Resistance",
							"13% increased Stun and Block Recovery"
						],
						"enchantMods": [
							"6% increased Movement Speed if you haven't been Hit Recently"
						],
						"frameType": 2,
						"extended": {
							"es": 55,
							"es_aug": true,
							"mods": {
								"enchant": [
									{
										"name": "Enchantment Movement Speed 1",
										"tier": "",
										"magnitudes": [
											{
												"hash": "enchant.stat_308396001",
												"min": 6,
												"max": 6
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Monk's",
										"tier": "P2",
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Naga's",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_4015621042",
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
										"name": "of the Worthy",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3639275092",
												"min": -18,
												"max": -18
											}
										]
									}
								]
							},
							"hashes": {
								"enchant": [
									[
										"enchant.stat_308396001",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3639275092",
										[
											5
										]
									],
									[
										"explicit.stat_4052037485",
										[
											0
										]
									],
									[
										"explicit.stat_4015621042",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
											2
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
											4
										]
									],
									[
										"explicit.stat_2511217560",
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
							"text": "UmFyaXR5OiBSYXJlDQpOZW1lc2lzIFNsaXBwZXJzDQpTYW1pdGUgU2xpcHBlcnMNCi0tLS0tLS0tDQpFbmVyZ3kgU2hpZWxkOiA0NyAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA0NA0KSW50OiA2NCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClNvY2tldHM6IEItUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA1NA0KLS0tLS0tLS0NCjYlIGluY3JlYXNlZCBNb3ZlbWVudCBTcGVlZCBpZiB5b3UgaGF2ZW4ndCBiZWVuIEhpdCBSZWNlbnRseQ0KLS0tLS0tLS0NCjE4JSByZWR1Y2VkIEF0dHJpYnV0ZSBSZXF1aXJlbWVudHMNCis4IHRvIG1heGltdW0gRW5lcmd5IFNoaWVsZA0KMjglIGluY3JlYXNlZCBFbmVyZ3kgU2hpZWxkDQorMTA1IHRvIG1heGltdW0gTGlmZQ0KKzI3JSB0byBGaXJlIFJlc2lzdGFuY2UNCisyNiUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCjEzJSBpbmNyZWFzZWQgU3R1biBhbmQgQmxvY2sgUmVjb3ZlcnkNCg=="
						},
						"pseudoMods": [
							"(pseudo) +53% total Elemental Resistance",
							"(pseudo) +105 total maximum Life",
							"Sum: 263"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "4e8d68e27fa7f57e54f0f9c1144686175dadda3a85afada7330bfc875d66dfc3",
				"name": "Vengeance Trail",
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
				"itemLevel": 72,
				"defenseProperties": [
					"armour 211",
					"evasion 153"
				],
				"implicitMods": [],
				"explicitMods": [
					"+35 to Armour",
					"46% increased Armour and Evasion",
					"+107 to maximum Life",
					"+27% to Fire Resistance",
					"+22% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +49% total Elemental Resistance",
					"(pseudo) +107 total maximum Life",
					"Sum: 263"
				],
				"accountText": "akuzhubo9 > dugehenfannao",
				"whisper": "@dugehenfannao Hi, I would like to buy your Vengeance Trail Wyrmscale Boots listed for 3 chaos in Metamorph (stash tab \"11\"; position: left 1, top 7)",
				"note": "~b/o 3 chaos",
				"priceText": "3 chaos",
				"valueExcludingProperties": 263,
				"evalValue": 263.211,
				"evalPrice": 3,
				"debug": {
					"id": "4e8d68e27fa7f57e54f0f9c1144686175dadda3a85afada7330bfc875d66dfc3",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T08:07:54Z",
						"stash": {
							"name": "11",
							"x": 0,
							"y": 6
						},
						"whisper": "@dugehenfannao Hi, I would like to buy your Vengeance Trail Wyrmscale Boots listed for 3 chaos in Metamorph (stash tab \"11\"; position: left 1, top 7)",
						"account": {
							"name": "akuzhubo9",
							"lastCharacterName": "dugehenfannao",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrDex3.png?scale=1&w=2&h=2&v=601dc135a14c1121dca118c2640a1335",
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
						"name": "Vengeance Trail",
						"typeLine": "Wyrmscale Boots",
						"identified": true,
						"ilvl": 72,
						"note": "~b/o 3 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"185",
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
										"134",
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
										"51",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+35 to Armour",
							"46% increased Armour and Evasion",
							"+107 to maximum Life",
							"+27% to Fire Resistance",
							"+22% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 153,
							"ev_aug": true,
							"ar": 211,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "Fencer's",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_2451402625",
												"min": 43,
												"max": 55
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_3484657501",
										[
											3
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
											0,
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
										"explicit.stat_4220027924",
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
							"text": "UmFyaXR5OiBSYXJlDQpWZW5nZWFuY2UgVHJhaWwNCld5cm1zY2FsZSBCb290cw0KLS0tLS0tLS0NCkFybW91cjogMTg1IChhdWdtZW50ZWQpDQpFdmFzaW9uIFJhdGluZzogMTM0IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDUxDQpTdHI6IDQ4DQpEZXg6IDQ4DQotLS0tLS0tLQ0KU29ja2V0czogRy1SLVIgRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3Mg0KLS0tLS0tLS0NCiszNSB0byBBcm1vdXINCjQ2JSBpbmNyZWFzZWQgQXJtb3VyIGFuZCBFdmFzaW9uDQorMTA3IHRvIG1heGltdW0gTGlmZQ0KKzI3JSB0byBGaXJlIFJlc2lzdGFuY2UNCisyMiUgdG8gQ29sZCBSZXNpc3RhbmNlDQotLS0tLS0tLQ0KTm90ZTogfmIvbyAzIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +49% total Elemental Resistance",
							"(pseudo) +107 total maximum Life",
							"Sum: 263"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "612c4724ba0fe692d3f80c05ad25315cced76bda7b6a737d8cafb35136bef0cb",
				"name": "Torment Dash",
				"sockets": [
					[
						"B",
						"R",
						"R"
					]
				],
				"itemLevel": 84,
				"defenseProperties": [
					"armour 265"
				],
				"implicitMods": [],
				"explicitMods": [
					"+30 to Strength",
					"+22 to Armour",
					"33% increased Armour",
					"+104 to maximum Life",
					"+11% to Fire Resistance",
					"+14% to Cold Resistance",
					"14% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +25% total Elemental Resistance",
					"(pseudo) +119 total maximum Life",
					"Sum: 263"
				],
				"accountText": "asdsimonn > SomeSortOfMiner",
				"whisper": "@SomeSortOfMiner Hi, I would like to buy your Torment Dash Ancient Greaves listed for 4 chaos in Metamorph (stash tab \"$\"; position: left 3, top 10)",
				"note": "~price 4 chaos",
				"priceText": "4 chaos",
				"valueExcludingProperties": 263,
				"evalValue": 263.265,
				"evalPrice": 4,
				"debug": {
					"id": "612c4724ba0fe692d3f80c05ad25315cced76bda7b6a737d8cafb35136bef0cb",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-20T09:34:43Z",
						"stash": {
							"name": "$",
							"x": 2,
							"y": 9
						},
						"whisper": "@SomeSortOfMiner Hi, I would like to buy your Torment Dash Ancient Greaves listed for 4 chaos in Metamorph (stash tab \"$\"; position: left 3, top 10)",
						"account": {
							"name": "asdsimonn",
							"lastCharacterName": "SomeSortOfMiner",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr3.png?scale=1&w=2&h=2&v=98f1f6d1137161abc1ef30ee82dadc62",
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
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Torment Dash",
						"typeLine": "Ancient Greaves",
						"identified": true,
						"ilvl": 84,
						"note": "~price 4 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"230",
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
										"82",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+30 to Strength",
							"+22 to Armour",
							"33% increased Armour",
							"+104 to maximum Life",
							"+11% to Fire Resistance",
							"+14% to Cold Resistance",
							"14% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 265,
							"ar_aug": true,
							"mods": {
								"explicit": [
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
									},
									{
										"name": "of the Whelpling",
										"tier": "S8",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 6,
												"max": 11
											}
										]
									},
									{
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "of the Gorilla",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 28,
												"max": 32
											}
										]
									},
									{
										"name": "Elephant's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
												"min": 33,
												"max": 38
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 14,
												"max": 15
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											4
										]
									],
									[
										"explicit.stat_3484657501",
										[
											2
										]
									],
									[
										"explicit.stat_1062208444",
										[
											5
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2,
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
										"explicit.stat_4220027924",
										[
											0
										]
									],
									[
										"explicit.stat_2511217560",
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
							"text": "UmFyaXR5OiBSYXJlDQpUb3JtZW50IERhc2gNCkFuY2llbnQgR3JlYXZlcw0KLS0tLS0tLS0NCkFybW91cjogMjMwIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQ4DQpTdHI6IDgyDQotLS0tLS0tLQ0KU29ja2V0czogQi1SLVIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODQNCi0tLS0tLS0tDQorMzAgdG8gU3RyZW5ndGgNCisyMiB0byBBcm1vdXINCjMzJSBpbmNyZWFzZWQgQXJtb3VyDQorMTA0IHRvIG1heGltdW0gTGlmZQ0KKzExJSB0byBGaXJlIFJlc2lzdGFuY2UNCisxNCUgdG8gQ29sZCBSZXNpc3RhbmNlDQoxNCUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDQgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +25% total Elemental Resistance",
							"(pseudo) +119 total maximum Life",
							"Sum: 263"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "cded5915f2b6c5df18960c2570e32bb36e08d2f3da9b6fc041a1a1e41e470082",
				"name": "Torment Pace",
				"sockets": [
					[
						"R"
					],
					[
						"R"
					]
				],
				"itemLevel": 74,
				"defenseProperties": [
					"armour 238"
				],
				"implicitMods": [],
				"explicitMods": [
					"+21 to Armour",
					"+112 to maximum Life",
					"+39% to Fire Resistance",
					"18% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +39% total Elemental Resistance",
					"(pseudo) +112 total maximum Life",
					"Sum: 263"
				],
				"accountText": "Ares117 > BoneMolo",
				"whisper": "@BoneMolo Hi, I would like to buy your Torment Pace Goliath Greaves listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 1, top 7)",
				"priceText": "10 chaos",
				"valueExcludingProperties": 263,
				"evalValue": 263.238,
				"evalPrice": 10,
				"debug": {
					"id": "cded5915f2b6c5df18960c2570e32bb36e08d2f3da9b6fc041a1a1e41e470082",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-16T02:29:05Z",
						"stash": {
							"name": "~price 10 chaos",
							"x": 0,
							"y": 6
						},
						"whisper": "@BoneMolo Hi, I would like to buy your Torment Pace Goliath Greaves listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 1, top 7)",
						"account": {
							"name": "Ares117",
							"lastCharacterName": "BoneMolo",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
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
						"name": "Torment Pace",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 74,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"198",
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
										"54",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+21 to Armour",
							"+112 to maximum Life",
							"+39% to Fire Resistance",
							"18% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 238,
							"ar_aug": true,
							"mods": {
								"explicit": [
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
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									}
								]
							},
							"hashes": {
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
											2,
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
							"text": "UmFyaXR5OiBSYXJlDQpUb3JtZW50IFBhY2UNCkdvbGlhdGggR3JlYXZlcw0KLS0tLS0tLS0NCkFybW91cjogMTk4IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU0DQpTdHI6IDk1DQotLS0tLS0tLQ0KU29ja2V0czogUiBSIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc0DQotLS0tLS0tLQ0KKzIxIHRvIEFybW91cg0KKzExMiB0byBtYXhpbXVtIExpZmUNCiszOSUgdG8gRmlyZSBSZXNpc3RhbmNlDQoxOCUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQo="
						},
						"pseudoMods": [
							"(pseudo) +39% total Elemental Resistance",
							"(pseudo) +112 total maximum Life",
							"Sum: 263"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "c2c82585566b8b1463f57465ba772ff8ec7f31fbc3b7bb609d01388caacd19c1",
				"name": "Horror Slippers",
				"sockets": [
					[
						"G",
						"R",
						"B",
						"R"
					]
				],
				"itemLevel": 62,
				"defenseProperties": [
					"evasion 163"
				],
				"implicitMods": [],
				"explicitMods": [
					"+18 to Evasion Rating",
					"77% increased Evasion Rating",
					"+104 to maximum Life",
					"10% increased Rarity of Items found",
					"+26% to Fire Resistance",
					"+28% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +54% total Elemental Resistance",
					"(pseudo) +104 total maximum Life",
					"Sum: 262"
				],
				"accountText": "PanthuraxAuT > WOWImHorny",
				"whisper": "@WOWImHorny Hi, I would like to buy your Horror Slippers Deerskin Boots listed for 3 chaos in Metamorph (stash tab \"$$$\"; position: left 1, top 1)",
				"note": "~price 3 chaos",
				"priceText": "3 chaos",
				"valueExcludingProperties": 262,
				"evalValue": 262,
				"evalPrice": 3,
				"debug": {
					"id": "c2c82585566b8b1463f57465ba772ff8ec7f31fbc3b7bb609d01388caacd19c1",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-18T13:51:06Z",
						"stash": {
							"name": "$$$",
							"x": 0,
							"y": 0
						},
						"whisper": "@WOWImHorny Hi, I would like to buy your Horror Slippers Deerskin Boots listed for 3 chaos in Metamorph (stash tab \"$$$\"; position: left 1, top 1)",
						"account": {
							"name": "PanthuraxAuT",
							"lastCharacterName": "WOWImHorny",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex3.png?scale=1&w=2&h=2&v=597ff9da61bbd5547ef2b10d25b8e909",
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
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Horror Slippers",
						"typeLine": "Deerskin Boots",
						"identified": true,
						"ilvl": 62,
						"note": "~price 3 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"163",
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
						"explicitMods": [
							"+18 to Evasion Rating",
							"77% increased Evasion Rating",
							"+104 to maximum Life",
							"10% increased Rarity of Items found",
							"+26% to Fire Resistance",
							"+28% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 163,
							"mods": {
								"explicit": [
									{
										"name": "Flea's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
											}
										]
									},
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Phantasm's",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 68,
												"max": 79
											}
										]
									},
									{
										"name": "of Plunder",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 6,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
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
											0,
											3
										]
									],
									[
										"explicit.stat_3917489142",
										[
											5
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
							"text": "UmFyaXR5OiBSYXJlDQpIb3Jyb3IgU2xpcHBlcnMNCkRlZXJza2luIEJvb3RzDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDE2MyAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA0OA0KRGV4OiA0Mg0KLS0tLS0tLS0NClNvY2tldHM6IEctUi1CLVIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNjINCi0tLS0tLS0tDQorMTggdG8gRXZhc2lvbiBSYXRpbmcNCjc3JSBpbmNyZWFzZWQgRXZhc2lvbiBSYXRpbmcNCisxMDQgdG8gbWF4aW11bSBMaWZlDQoxMCUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBmb3VuZA0KKzI2JSB0byBGaXJlIFJlc2lzdGFuY2UNCisyOCUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpDb3JydXB0ZWQNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMyBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +54% total Elemental Resistance",
							"(pseudo) +104 total maximum Life",
							"Sum: 262"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "625d6e95bd96de2326d45d401914907fcb0f2bb617fceb23bee43ac6d089c8e4",
				"name": "Fate Hoof",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"armour 181"
				],
				"implicitMods": [],
				"explicitMods": [
					"+42 to Strength",
					"+83 to maximum Life",
					"+36% to Cold Resistance",
					"+17% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +53% total Elemental Resistance",
					"(pseudo) +104 total maximum Life",
					"Sum: 261"
				],
				"accountText": "masterkex > PSKEX",
				"whisper": "@PSKEX Hi, I would like to buy your Fate Hoof Ancient Greaves listed for 3 chaos in Metamorph (stash tab \"sell\"; position: left 1, top 6)",
				"note": "~price 3 chaos",
				"priceText": "3 chaos",
				"valueExcludingProperties": 261,
				"evalValue": 261.181,
				"evalPrice": 3,
				"debug": {
					"id": "625d6e95bd96de2326d45d401914907fcb0f2bb617fceb23bee43ac6d089c8e4",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-19T01:37:50Z",
						"stash": {
							"name": "sell",
							"x": 0,
							"y": 5
						},
						"whisper": "@PSKEX Hi, I would like to buy your Fate Hoof Ancient Greaves listed for 3 chaos in Metamorph (stash tab \"sell\"; position: left 1, top 6)",
						"account": {
							"name": "masterkex",
							"lastCharacterName": "PSKEX",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr3.png?scale=1&w=2&h=2&v=98f1f6d1137161abc1ef30ee82dadc62",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Fate Hoof",
						"typeLine": "Ancient Greaves",
						"identified": true,
						"ilvl": 72,
						"note": "~price 3 chaos",
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
								"name": "Armour",
								"values": [
									[
										"166",
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
										"52",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"82",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+42 to Strength",
							"+83 to maximum Life",
							"+36% to Cold Resistance",
							"+17% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 181,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
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
										"name": "of the Leviathan",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 38,
												"max": 42
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
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
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
										"explicit.stat_4220027924",
										[
											3
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
							"text": "UmFyaXR5OiBSYXJlDQpGYXRlIEhvb2YNCkFuY2llbnQgR3JlYXZlcw0KLS0tLS0tLS0NClF1YWxpdHk6ICsxMCUgKGF1Z21lbnRlZCkNCkFybW91cjogMTY2IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDUyDQpTdHI6IDgyDQotLS0tLS0tLQ0KU29ja2V0czogUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3Mg0KLS0tLS0tLS0NCis0MiB0byBTdHJlbmd0aA0KKzgzIHRvIG1heGltdW0gTGlmZQ0KKzM2JSB0byBDb2xkIFJlc2lzdGFuY2UNCisxNyUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMyBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +53% total Elemental Resistance",
							"(pseudo) +104 total maximum Life",
							"Sum: 261"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "1c277b6dfc09729be08a71a6d867062d0e698b49b5c06cb9f26cc42ccc0b5a03",
				"name": "Golem Slippers",
				"sockets": [
					[
						"R",
						"G"
					]
				],
				"itemLevel": 62,
				"defenseProperties": [
					"armour 146"
				],
				"implicitMods": [],
				"explicitMods": [
					"+31 to Strength",
					"+82 to maximum Life",
					"+28% to Fire Resistance",
					"+38% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +66% total Elemental Resistance",
					"(pseudo) +97.5 total maximum Life",
					"Sum: 261"
				],
				"accountText": "Nauze > Nauze_BVenomous",
				"whisper": "@Nauze_BVenomous Hi, I would like to buy your Golem Slippers Antique Greaves listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 1, top 1)",
				"priceText": "5 chaos",
				"valueExcludingProperties": 261,
				"evalValue": 261.146,
				"evalPrice": 5,
				"debug": {
					"id": "1c277b6dfc09729be08a71a6d867062d0e698b49b5c06cb9f26cc42ccc0b5a03",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-14T13:32:31Z",
						"stash": {
							"name": "~b/o 5 chaos",
							"x": 0,
							"y": 0
						},
						"whisper": "@Nauze_BVenomous Hi, I would like to buy your Golem Slippers Antique Greaves listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 1, top 1)",
						"account": {
							"name": "Nauze",
							"lastCharacterName": "Nauze_BVenomous",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr2.png?scale=1&w=2&h=2&v=399734b915715a11364011fd9451b370",
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
						"name": "Golem Slippers",
						"typeLine": "Antique Greaves",
						"identified": true,
						"ilvl": 62,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"122",
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
										"67",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+31 to Strength",
							"+82 to maximum Life",
							"+28% to Fire Resistance",
							"+38% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 146,
							"ar_aug": true,
							"mods": {
								"explicit": [
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
										"name": "of the Gorilla",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 28,
												"max": 32
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
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
										"explicit.stat_3372524247",
										[
											0
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
							"text": "UmFyaXR5OiBSYXJlDQpHb2xlbSBTbGlwcGVycw0KQW50aXF1ZSBHcmVhdmVzDQotLS0tLS0tLQ0KQXJtb3VyOiAxMjINCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDgNClN0cjogNjcNCi0tLS0tLS0tDQpTb2NrZXRzOiBSLUcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNjINCi0tLS0tLS0tDQorMzEgdG8gU3RyZW5ndGgNCis4MiB0byBtYXhpbXVtIExpZmUNCisyOCUgdG8gRmlyZSBSZXNpc3RhbmNlDQorMzglIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQo="
						},
						"pseudoMods": [
							"(pseudo) +66% total Elemental Resistance",
							"(pseudo) +97.5 total maximum Life",
							"Sum: 261"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "6ded54f3a7d536752a8aed481d91b033787627ed114546ef5a825754cdf0a9fd",
				"name": "Honour Tread",
				"sockets": [
					[
						"B",
						"G",
						"G"
					]
				],
				"itemLevel": 73,
				"defenseProperties": [
					"evasion 262"
				],
				"implicitMods": [],
				"explicitMods": [
					"+38 to Evasion Rating",
					"+97 to maximum Life",
					"Regenerate 9.4 Life per second",
					"+27% to Fire Resistance",
					"+40% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +67% total Elemental Resistance",
					"(pseudo) +97 total maximum Life",
					"Sum: 261"
				],
				"accountText": "L0b0 > BigOlDumpsterFire",
				"whisper": "@BigOlDumpsterFire Hi, I would like to buy your Honour Tread Shagreen Boots listed for 5 chaos in Metamorph (stash tab \"$$\"; position: left 11, top 4)",
				"note": "~price 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 261,
				"evalValue": 261,
				"evalPrice": 5,
				"debug": {
					"id": "6ded54f3a7d536752a8aed481d91b033787627ed114546ef5a825754cdf0a9fd",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T17:52:47Z",
						"stash": {
							"name": "$$",
							"x": 10,
							"y": 3
						},
						"whisper": "@BigOlDumpsterFire Hi, I would like to buy your Honour Tread Shagreen Boots listed for 5 chaos in Metamorph (stash tab \"$$\"; position: left 11, top 4)",
						"account": {
							"name": "L0b0",
							"lastCharacterName": "BigOlDumpsterFire",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
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
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Honour Tread",
						"typeLine": "Shagreen Boots",
						"identified": true,
						"ilvl": 73,
						"note": "~price 5 chaos",
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"218",
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
										"97",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+38 to Evasion Rating",
							"+97 to maximum Life",
							"Regenerate 9.4 Life per second",
							"+27% to Fire Resistance",
							"+40% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 262,
							"ev_aug": true,
							"mods": {
								"explicit": [
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
									},
									{
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
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
										"name": "Fawn's",
										"tier": "P1",
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
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											4
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1,
											4
										]
									],
									[
										"explicit.stat_3325883026",
										[
											0
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
							"text": "UmFyaXR5OiBSYXJlDQpIb25vdXIgVHJlYWQNClNoYWdyZWVuIEJvb3RzDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDIxOCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1NQ0KRGV4OiA5Nw0KLS0tLS0tLS0NClNvY2tldHM6IEItRy1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDczDQotLS0tLS0tLQ0KKzM4IHRvIEV2YXNpb24gUmF0aW5nDQorOTcgdG8gbWF4aW11bSBMaWZlDQpSZWdlbmVyYXRlIDkuNCBMaWZlIHBlciBzZWNvbmQNCisyNyUgdG8gRmlyZSBSZXNpc3RhbmNlDQorNDAlIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDUgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +67% total Elemental Resistance",
							"(pseudo) +97 total maximum Life",
							"Sum: 261"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "77beef9960c2e410b1c789d5daa8c954f307dfe8ce5b1202bf544ea321b4cdb3",
				"name": "Dire Road",
				"sockets": [
					[
						"G",
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 74,
				"defenseProperties": [
					"evasion 241"
				],
				"implicitMods": [],
				"explicitMods": [
					"+21 to Evasion Rating",
					"+97 to maximum Life",
					"+43% to Fire Resistance",
					"+24% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +67% total Elemental Resistance",
					"(pseudo) +97 total maximum Life",
					"Sum: 261"
				],
				"accountText": "sergeant27 > AssasinateMe",
				"whisper": "@AssasinateMe Hi, I would like to buy your Dire Road Shagreen Boots listed for 20 alch in Metamorph (stash tab \"~price 20 alch\"; position: left 3, top 13)",
				"priceText": "20 alch",
				"valueExcludingProperties": 261,
				"evalValue": 261,
				"evalPrice": 10,
				"debug": {
					"id": "77beef9960c2e410b1c789d5daa8c954f307dfe8ce5b1202bf544ea321b4cdb3",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-18T13:49:12Z",
						"stash": {
							"name": "~price 20 alch",
							"x": 2,
							"y": 12
						},
						"whisper": "@AssasinateMe Hi, I would like to buy your Dire Road Shagreen Boots listed for 20 alch in Metamorph (stash tab \"~price 20 alch\"; position: left 3, top 13)",
						"account": {
							"name": "sergeant27",
							"lastCharacterName": "AssasinateMe",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 20,
							"currency": "alch"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
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
						"name": "Dire Road",
						"typeLine": "Shagreen Boots",
						"identified": true,
						"ilvl": 74,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"201",
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
										"97",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+21 to Evasion Rating",
							"+97 to maximum Life",
							"+43% to Fire Resistance",
							"+24% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 241,
							"ev_aug": true,
							"mods": {
								"explicit": [
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
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "Fawn's",
										"tier": "P1",
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
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2,
											3
										]
									],
									[
										"explicit.stat_3372524247",
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
							"text": "UmFyaXR5OiBSYXJlDQpEaXJlIFJvYWQNClNoYWdyZWVuIEJvb3RzDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDIwMSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1Nw0KRGV4OiA5Nw0KLS0tLS0tLS0NClNvY2tldHM6IEctRy1HLUcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzQNCi0tLS0tLS0tDQorMjEgdG8gRXZhc2lvbiBSYXRpbmcNCis5NyB0byBtYXhpbXVtIExpZmUNCis0MyUgdG8gRmlyZSBSZXNpc3RhbmNlDQorMjQlIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQo="
						},
						"pseudoMods": [
							"(pseudo) +67% total Elemental Resistance",
							"(pseudo) +97 total maximum Life",
							"Sum: 261"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "6d71b631075e93e14a3255c093c273c3c78bc7252904404d64da61cf15845151",
				"name": "Dread Trail",
				"sockets": [
					[
						"R",
						"R"
					]
				],
				"itemLevel": 63,
				"defenseProperties": [
					"armour 127",
					"evasion 151"
				],
				"implicitMods": [],
				"explicitMods": [
					"+11 to Strength",
					"+20 to Evasion Rating",
					"+106 to maximum Life",
					"+13% to Cold Resistance",
					"+24% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +37% total Elemental Resistance",
					"(pseudo) +111.5 total maximum Life",
					"Sum: 260"
				],
				"accountText": "Amphrite > iAmMattyDaddy",
				"whisper": "@iAmMattyDaddy Hi, I would like to buy your Dread Trail Hydrascale Boots listed for 2 chaos in Metamorph (stash tab \"~b/o 2 chaos\"; position: left 1, top 3)",
				"priceText": "2 chaos",
				"valueExcludingProperties": 260,
				"evalValue": 260.127,
				"evalPrice": 2,
				"debug": {
					"id": "6d71b631075e93e14a3255c093c273c3c78bc7252904404d64da61cf15845151",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-14T06:32:05Z",
						"stash": {
							"name": "~b/o 2 chaos",
							"x": 0,
							"y": 2
						},
						"whisper": "@iAmMattyDaddy Hi, I would like to buy your Dread Trail Hydrascale Boots listed for 2 chaos in Metamorph (stash tab \"~b/o 2 chaos\"; position: left 1, top 3)",
						"account": {
							"name": "Amphrite",
							"lastCharacterName": "iAmMattyDaddy",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrDex2.png?scale=1&w=2&h=2&v=bdfb39d9a0b60c4ac542bedd8ff06e08",
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
						"name": "Dread Trail",
						"typeLine": "Hydrascale Boots",
						"identified": true,
						"ilvl": 63,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"106",
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
										"126",
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
										"56",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"56",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+11 to Strength",
							"+20 to Evasion Rating",
							"+106 to maximum Life",
							"+13% to Cold Resistance",
							"+24% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 151,
							"ev_aug": true,
							"ar": 127,
							"ar_aug": true,
							"mods": {
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
									},
									{
										"name": "Flea's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
											}
										]
									},
									{
										"name": "of the Brute",
										"tier": "S9",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 8,
												"max": 12
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											4
										]
									],
									[
										"explicit.stat_53045048",
										[
											3
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
										"explicit.stat_4220027924",
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
							"text": "UmFyaXR5OiBSYXJlDQpEcmVhZCBUcmFpbA0KSHlkcmFzY2FsZSBCb290cw0KLS0tLS0tLS0NCkFybW91cjogMTA2DQpFdmFzaW9uIFJhdGluZzogMTI2IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU5DQpTdHI6IDU2DQpEZXg6IDU2DQotLS0tLS0tLQ0KU29ja2V0czogUi1SIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDYzDQotLS0tLS0tLQ0KKzExIHRvIFN0cmVuZ3RoDQorMjAgdG8gRXZhc2lvbiBSYXRpbmcNCisxMDYgdG8gbWF4aW11bSBMaWZlDQorMTMlIHRvIENvbGQgUmVzaXN0YW5jZQ0KKzI0JSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0K"
						},
						"pseudoMods": [
							"(pseudo) +37% total Elemental Resistance",
							"(pseudo) +111.5 total maximum Life",
							"Sum: 260"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "08d7aac6b28914f37a59c52ed16e866ccd9b9fd34c0a9f3b1ebbf117fff0796b",
				"name": "Viper Road",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"armour 166",
					"evasion 127"
				],
				"implicitMods": [],
				"explicitMods": [
					"+28 to Strength",
					"+32 to Armour",
					"+97 to maximum Life",
					"+11% to Fire Resistance",
					"+26% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +37% total Elemental Resistance",
					"(pseudo) +111 total maximum Life",
					"Sum: 259"
				],
				"accountText": "Mazgill > RS_BlenderKurwaJegoMac",
				"whisper": "@RS_BlenderKurwaJegoMac Hi, I would like to buy your Viper Road Hydrascale Boots listed for 1 chaos in Metamorph (stash tab \"~b/o 1 chaos\"; position: left 6, top 1)",
				"priceText": "1 chaos",
				"valueExcludingProperties": 259,
				"evalValue": 259.166,
				"evalPrice": 1,
				"debug": {
					"id": "08d7aac6b28914f37a59c52ed16e866ccd9b9fd34c0a9f3b1ebbf117fff0796b",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-14T14:03:01Z",
						"stash": {
							"name": "~b/o 1 chaos",
							"x": 5,
							"y": 0
						},
						"whisper": "@RS_BlenderKurwaJegoMac Hi, I would like to buy your Viper Road Hydrascale Boots listed for 1 chaos in Metamorph (stash tab \"~b/o 1 chaos\"; position: left 6, top 1)",
						"account": {
							"name": "Mazgill",
							"lastCharacterName": "RS_BlenderKurwaJegoMac",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 1,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrDex2.png?scale=1&w=2&h=2&v=bdfb39d9a0b60c4ac542bedd8ff06e08",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Viper Road",
						"typeLine": "Hydrascale Boots",
						"identified": true,
						"ilvl": 72,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"138",
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
										"106",
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
										"56",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"56",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+28 to Strength",
							"+32 to Armour",
							"+97 to maximum Life",
							"+11% to Fire Resistance",
							"+26% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 127,
							"ev_aug": true,
							"ar": 166,
							"ar_aug": true,
							"mods": {
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
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "of the Whelpling",
										"tier": "S8",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 6,
												"max": 11
											}
										]
									},
									{
										"name": "of the Gorilla",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 28,
												"max": 32
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											4
										]
									],
									[
										"explicit.stat_3484657501",
										[
											2
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
											3
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
							"text": "UmFyaXR5OiBSYXJlDQpWaXBlciBSb2FkDQpIeWRyYXNjYWxlIEJvb3RzDQotLS0tLS0tLQ0KQXJtb3VyOiAxMzggKGF1Z21lbnRlZCkNCkV2YXNpb24gUmF0aW5nOiAxMDYNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTkNClN0cjogNTYNCkRleDogNTYNCi0tLS0tLS0tDQpTb2NrZXRzOiBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcyDQotLS0tLS0tLQ0KKzI4IHRvIFN0cmVuZ3RoDQorMzIgdG8gQXJtb3VyDQorOTcgdG8gbWF4aW11bSBMaWZlDQorMTElIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzI2JSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0K"
						},
						"pseudoMods": [
							"(pseudo) +37% total Elemental Resistance",
							"(pseudo) +111 total maximum Life",
							"Sum: 259"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "f241dc2309824f559eb6e2f145ac743193fe70f6983b62d6aa64d20baf7654ff",
				"name": "Eagle Spark",
				"sockets": [
					[
						"B"
					],
					[
						"G"
					]
				],
				"itemLevel": 62,
				"defenseProperties": [
					"evasion 99",
					"energyShield 31"
				],
				"implicitMods": [],
				"explicitMods": [
					"+21 to Dexterity",
					"+26 to Intelligence",
					"+12 to maximum Energy Shield",
					"+110 to maximum Life",
					"+42 to maximum Mana",
					"+39% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +39% total Elemental Resistance",
					"(pseudo) +110 total maximum Life",
					"Sum: 259"
				],
				"accountText": "krakenas > wortex_beater",
				"whisper": "@wortex_beater Hi, I would like to buy your Eagle Spark Carnal Boots listed for 1 chaos in Metamorph (stash tab \"$sell$\"; position: left 11, top 1)",
				"note": "~price 1 chaos",
				"priceText": "1 chaos",
				"valueExcludingProperties": 259,
				"evalValue": 259,
				"evalPrice": 1,
				"debug": {
					"id": "f241dc2309824f559eb6e2f145ac743193fe70f6983b62d6aa64d20baf7654ff",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T02:38:23Z",
						"stash": {
							"name": "$sell$",
							"x": 10,
							"y": 0
						},
						"whisper": "@wortex_beater Hi, I would like to buy your Eagle Spark Carnal Boots listed for 1 chaos in Metamorph (stash tab \"$sell$\"; position: left 11, top 1)",
						"account": {
							"name": "krakenas",
							"lastCharacterName": "wortex_beater",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDexInt4.png?scale=1&w=2&h=2&v=bfbd6b83d1a5a8dafbae030a0041b5fe",
						"league": "Metamorph",
						"sockets": [
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
						"name": "Eagle Spark",
						"typeLine": "Carnal Boots",
						"identified": true,
						"ilvl": 62,
						"note": "~price 1 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"99",
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
										"52",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"52",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+21 to Dexterity",
							"+26 to Intelligence",
							"+12 to maximum Energy Shield",
							"+110 to maximum Life",
							"+42 to maximum Mana",
							"+39% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 99,
							"es": 31,
							"mods": {
								"explicit": [
									{
										"name": "of the Fox",
										"tier": "S7",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 18,
												"max": 22
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
										"name": "Prior's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_4052037485",
												"min": 11,
												"max": 15
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 24,
												"max": 28
											}
										]
									},
									{
										"name": "of the Augur",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_328541901",
												"min": 23,
												"max": 27
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_328541901",
										[
											3
										]
									],
									[
										"explicit.stat_4052037485",
										[
											2
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2,
											4
										]
									],
									[
										"explicit.stat_1050105434",
										[
											5
										]
									],
									[
										"explicit.stat_4220027924",
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
							"text": "UmFyaXR5OiBSYXJlDQpFYWdsZSBTcGFyaw0KQ2FybmFsIEJvb3RzDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDk5DQpFbmVyZ3kgU2hpZWxkOiAzMSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1NQ0KRGV4OiA1Mg0KSW50OiA1Mg0KLS0tLS0tLS0NClNvY2tldHM6IEIgRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA2Mg0KLS0tLS0tLS0NCisyMSB0byBEZXh0ZXJpdHkNCisyNiB0byBJbnRlbGxpZ2VuY2UNCisxMiB0byBtYXhpbXVtIEVuZXJneSBTaGllbGQNCisxMTAgdG8gbWF4aW11bSBMaWZlDQorNDIgdG8gbWF4aW11bSBNYW5hDQorMzklIHRvIENvbGQgUmVzaXN0YW5jZQ0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAxIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +39% total Elemental Resistance",
							"(pseudo) +110 total maximum Life",
							"Sum: 259"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "4717a188858a7984ac36c731fdddca43f0542e1912380b7eb5e0b98468a93692",
				"name": "Rage Tread",
				"sockets": [
					[
						"G",
						"B"
					]
				],
				"itemLevel": 70,
				"defenseProperties": [
					"evasion 318"
				],
				"implicitMods": [],
				"explicitMods": [
					"+19 to Evasion Rating",
					"+105 to maximum Life",
					"+25% to Fire Resistance",
					"+24% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +49% total Elemental Resistance",
					"(pseudo) +105 total maximum Life",
					"Sum: 259"
				],
				"accountText": "trolley > MightyMorphinMetaShadow",
				"whisper": "@MightyMorphinMetaShadow Hi, I would like to buy your Rage Tread Slink Boots listed for 3 chaos in Metamorph (stash tab \"Sale\"; position: left 1, top 9)",
				"note": "~price 3 chaos",
				"priceText": "3 chaos",
				"valueExcludingProperties": 259,
				"evalValue": 259,
				"evalPrice": 3,
				"debug": {
					"id": "4717a188858a7984ac36c731fdddca43f0542e1912380b7eb5e0b98468a93692",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T22:04:39Z",
						"stash": {
							"name": "Sale",
							"x": 0,
							"y": 8
						},
						"whisper": "@MightyMorphinMetaShadow Hi, I would like to buy your Rage Tread Slink Boots listed for 3 chaos in Metamorph (stash tab \"Sale\"; position: left 1, top 9)",
						"account": {
							"name": "trolley",
							"lastCharacterName": "MightyMorphinMetaShadow",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
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
						"name": "Rage Tread",
						"typeLine": "Slink Boots",
						"identified": true,
						"ilvl": 70,
						"note": "~price 3 chaos",
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+17%",
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
										"69",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+19 to Evasion Rating",
							"+105 to maximum Life",
							"+25% to Fire Resistance",
							"+24% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 318,
							"ev_aug": true,
							"mods": {
								"explicit": [
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Flea's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
											}
										]
									},
									{
										"name": "of the Yeti",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 24,
												"max": 29
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											2
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
							"text": "UmFyaXR5OiBSYXJlDQpSYWdlIFRyZWFkDQpTbGluayBCb290cw0KLS0tLS0tLS0NClF1YWxpdHk6ICsxNyUgKGF1Z21lbnRlZCkNCkV2YXNpb24gUmF0aW5nOiAzMTAgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjkNCkRleDogMTIwDQotLS0tLS0tLQ0KU29ja2V0czogRy1CIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcwDQotLS0tLS0tLQ0KKzE5IHRvIEV2YXNpb24gUmF0aW5nDQorMTA1IHRvIG1heGltdW0gTGlmZQ0KKzI1JSB0byBGaXJlIFJlc2lzdGFuY2UNCisyNCUgdG8gQ29sZCBSZXNpc3RhbmNlDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDMgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +49% total Elemental Resistance",
							"(pseudo) +105 total maximum Life",
							"Sum: 259"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "2ea33800f50a49dcf5e08e3032dd085769ce8b746051493e709e8443d357448b",
				"name": "Brood Trail",
				"sockets": [
					[
						"R",
						"R"
					],
					[
						"B"
					]
				],
				"itemLevel": 71,
				"defenseProperties": [
					"armour 416"
				],
				"implicitMods": [],
				"explicitMods": [
					"+27 to Strength",
					"89% increased Armour",
					"+83 to maximum Life",
					"+32% to Cold Resistance",
					"+34% to Lightning Resistance",
					"15% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +66% total Elemental Resistance",
					"(pseudo) +96.5 total maximum Life",
					"Sum: 259"
				],
				"accountText": "CheeseExilist > LearningWhilePlaying",
				"whisper": "@LearningWhilePlaying Hi, I would like to buy your Brood Trail Vaal Greaves listed for 7 chaos in Metamorph (stash tab \"SELL41\"; position: left 11, top 11)",
				"note": "~b/o 7 chaos",
				"priceText": "7 chaos",
				"valueExcludingProperties": 259,
				"evalValue": 259.416,
				"evalPrice": 7,
				"debug": {
					"id": "2ea33800f50a49dcf5e08e3032dd085769ce8b746051493e709e8443d357448b",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-20T11:13:37Z",
						"stash": {
							"name": "SELL41",
							"x": 10,
							"y": 10
						},
						"whisper": "@LearningWhilePlaying Hi, I would like to buy your Brood Trail Vaal Greaves listed for 7 chaos in Metamorph (stash tab \"SELL41\"; position: left 11, top 11)",
						"account": {
							"name": "CheeseExilist",
							"lastCharacterName": "LearningWhilePlaying",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 7,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr3.png?scale=1&w=2&h=2&v=98f1f6d1137161abc1ef30ee82dadc62",
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
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Brood Trail",
						"typeLine": "Vaal Greaves",
						"identified": true,
						"ilvl": 71,
						"note": "~b/o 7 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"416",
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
										"62",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"117",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+27 to Strength",
							"89% increased Armour",
							"+83 to maximum Life",
							"+32% to Cold Resistance",
							"+34% to Lightning Resistance",
							"15% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 416,
							"mods": {
								"explicit": [
									{
										"name": "Elephant's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "of the Lion",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 23,
												"max": 27
											}
										]
									},
									{
										"name": "Lobstered",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
												"min": 43,
												"max": 55
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
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											2
										]
									],
									[
										"explicit.stat_1062208444",
										[
											0,
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
										"explicit.stat_4220027924",
										[
											5
										]
									],
									[
										"explicit.stat_1671376347",
										[
											4
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
							"text": "UmFyaXR5OiBSYXJlDQpCcm9vZCBUcmFpbA0KVmFhbCBHcmVhdmVzDQotLS0tLS0tLQ0KQXJtb3VyOiA0MTYgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjINClN0cjogMTE3DQotLS0tLS0tLQ0KU29ja2V0czogUi1SIEIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzENCi0tLS0tLS0tDQorMjcgdG8gU3RyZW5ndGgNCjg5JSBpbmNyZWFzZWQgQXJtb3VyDQorODMgdG8gbWF4aW11bSBMaWZlDQorMzIlIHRvIENvbGQgUmVzaXN0YW5jZQ0KKzM0JSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KMTUlIGluY3JlYXNlZCBTdHVuIGFuZCBCbG9jayBSZWNvdmVyeQ0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5iL28gNyBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +66% total Elemental Resistance",
							"(pseudo) +96.5 total maximum Life",
							"Sum: 259"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "009e04cc1f603cca5d2caaa01d1d677fc5ad084d52c52f7f50f9c27e557e0f1f",
				"name": "Vengeance Goad",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 71,
				"defenseProperties": [
					"armour 264"
				],
				"implicitMods": [],
				"explicitMods": [
					"+21 to Strength",
					"+84 to maximum Life",
					"+36% to Cold Resistance",
					"+34% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +70% total Elemental Resistance",
					"(pseudo) +94.5 total maximum Life",
					"Sum: 259"
				],
				"accountText": "MouDevyshkyBomjiYbili > xSuicideIsPainless",
				"whisper": "@xSuicideIsPainless Hi, I would like to buy your Vengeance Goad Vaal Greaves listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 1, top 2)",
				"priceText": "10 chaos",
				"valueExcludingProperties": 259,
				"evalValue": 259.264,
				"evalPrice": 10,
				"debug": {
					"id": "009e04cc1f603cca5d2caaa01d1d677fc5ad084d52c52f7f50f9c27e557e0f1f",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-18T18:29:02Z",
						"stash": {
							"name": "~price 10 chaos",
							"x": 0,
							"y": 1
						},
						"whisper": "@xSuicideIsPainless Hi, I would like to buy your Vengeance Goad Vaal Greaves listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 1, top 2)",
						"account": {
							"name": "MouDevyshkyBomjiYbili",
							"lastCharacterName": "xSuicideIsPainless",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr3.png?scale=1&w=2&h=2&v=98f1f6d1137161abc1ef30ee82dadc62",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Vengeance Goad",
						"typeLine": "Vaal Greaves",
						"identified": true,
						"ilvl": 71,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"220",
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
										"62",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"117",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+21 to Strength",
							"+84 to maximum Life",
							"+36% to Cold Resistance",
							"+34% to Lightning Resistance"
						],
						"craftedMods": [
							"19% increased Movement Speed"
						],
						"frameType": 2,
						"extended": {
							"ar": 264,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
								],
								"crafted": [
									{
										"name": "Upgraded",
										"tier": "R2",
										"magnitudes": [
											{
												"hash": "crafted.stat_2250533757",
												"min": 15,
												"max": 19
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
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
										"explicit.stat_4220027924",
										[
											1
										]
									],
									[
										"explicit.stat_1671376347",
										[
											3
										]
									]
								],
								"crafted": [
									[
										"crafted.stat_2250533757",
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
							"text": "UmFyaXR5OiBSYXJlDQpWZW5nZWFuY2UgR29hZA0KVmFhbCBHcmVhdmVzDQotLS0tLS0tLQ0KQXJtb3VyOiAyMjANCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjINClN0cjogMTE3DQotLS0tLS0tLQ0KU29ja2V0czogUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3MQ0KLS0tLS0tLS0NCisyMSB0byBTdHJlbmd0aA0KKzg0IHRvIG1heGltdW0gTGlmZQ0KKzM2JSB0byBDb2xkIFJlc2lzdGFuY2UNCiszNCUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCjE5JSBpbmNyZWFzZWQgTW92ZW1lbnQgU3BlZWQgKGNyYWZ0ZWQpDQo="
						},
						"pseudoMods": [
							"(pseudo) +70% total Elemental Resistance",
							"(pseudo) +94.5 total maximum Life",
							"Sum: 259"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "9361b89351fa01ffb633c9280968fdbb1fb37272f6aa6dcc8b9d0d9b3faaa732",
				"name": "Rage Spark",
				"sockets": [
					[
						"R",
						"G"
					],
					[
						"R"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"armour 202",
					"evasion 151"
				],
				"implicitMods": [
					"+10% to Fire and Cold Resistances"
				],
				"explicitMods": [
					"+15 to Strength",
					"+26 to Dexterity",
					"+42 to Armour",
					"+99 to maximum Life",
					"+25% to Fire Resistance"
				],
				"pseudoMods": [
					"(pseudo) +45% total Elemental Resistance",
					"(pseudo) +106.5 total maximum Life",
					"Sum: 258"
				],
				"accountText": "SirGlenn > NotBarovero",
				"whisper": "@NotBarovero Hi, I would like to buy your Rage Spark Two-Toned Boots listed for 1 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 1, top 4)",
				"priceText": "1 chaos",
				"valueExcludingProperties": 258,
				"evalValue": 258.202,
				"evalPrice": 1,
				"debug": {
					"id": "9361b89351fa01ffb633c9280968fdbb1fb37272f6aa6dcc8b9d0d9b3faaa732",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T18:39:42Z",
						"stash": {
							"name": "~price 1 chaos",
							"x": 0,
							"y": 3
						},
						"whisper": "@NotBarovero Hi, I would like to buy your Rage Spark Two-Toned Boots listed for 1 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 1, top 4)",
						"account": {
							"name": "SirGlenn",
							"lastCharacterName": "NotBarovero",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/TwoTonedBoots2B.png?scale=1&w=2&h=2&v=435eaf7c0d9a50d4c6cf92eed702ffb7",
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
							}
						],
						"name": "Rage Spark",
						"typeLine": "Two-Toned Boots",
						"identified": true,
						"ilvl": 72,
						"properties": [
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
										"126",
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
										"62",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+10% to Fire and Cold Resistances"
						],
						"explicitMods": [
							"+15 to Strength",
							"+26 to Dexterity",
							"+42 to Armour",
							"+99 to maximum Life",
							"+25% to Fire Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 151,
							"ev_aug": true,
							"ar": 202,
							"ar_aug": true,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_2915988346",
												"min": 8,
												"max": 12
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Falcon",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 23,
												"max": 27
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
										"name": "of the Wrestler",
										"tier": "S8",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 13,
												"max": 17
											}
										]
									},
									{
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "Urchin's",
										"tier": "P1",
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
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_2915988346",
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
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_3484657501",
										[
											4
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3,
											4
										]
									],
									[
										"explicit.stat_3372524247",
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
							"text": "UmFyaXR5OiBSYXJlDQpSYWdlIFNwYXJrDQpUd28tVG9uZWQgQm9vdHMNCi0tLS0tLS0tDQpBcm1vdXI6IDE2OCAoYXVnbWVudGVkKQ0KRXZhc2lvbiBSYXRpbmc6IDEyNg0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA3MA0KU3RyOiA2Mg0KRGV4OiA2Mg0KLS0tLS0tLS0NClNvY2tldHM6IFItRyBSIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcyDQotLS0tLS0tLQ0KKzEwJSB0byBGaXJlIGFuZCBDb2xkIFJlc2lzdGFuY2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorMTUgdG8gU3RyZW5ndGgNCisyNiB0byBEZXh0ZXJpdHkNCis0MiB0byBBcm1vdXINCis5OSB0byBtYXhpbXVtIExpZmUNCisyNSUgdG8gRmlyZSBSZXNpc3RhbmNlDQo="
						},
						"pseudoMods": [
							"(pseudo) +45% total Elemental Resistance",
							"(pseudo) +106.5 total maximum Life",
							"Sum: 258"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "8b90d9bf8126c7d49573f6e3b62ac68b8a5e0353e7f64ad635cd84a982b290e9",
				"name": "Pandemonium League",
				"sockets": [
					[
						"R",
						"G",
						"G",
						"G"
					]
				],
				"itemLevel": 52,
				"defenseProperties": [
					"evasion 116"
				],
				"implicitMods": [],
				"explicitMods": [
					"+23 to Evasion Rating",
					"+92 to maximum Life",
					"+30% to Fire Resistance",
					"+21% to Cold Resistance",
					"+23% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +74% total Elemental Resistance",
					"(pseudo) +92 total maximum Life",
					"Sum: 258"
				],
				"accountText": "Terap1st > Ebolastor",
				"whisper": "@Ebolastor Hi, I would like to buy your Pandemonium League Deerskin Boots listed for 5 chaos in Metamorph (stash tab \"4\"; position: left 1, top 1)",
				"note": "~b/o 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 258,
				"evalValue": 258,
				"evalPrice": 5,
				"debug": {
					"id": "8b90d9bf8126c7d49573f6e3b62ac68b8a5e0353e7f64ad635cd84a982b290e9",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-14T23:44:55Z",
						"stash": {
							"name": "4",
							"x": 0,
							"y": 0
						},
						"whisper": "@Ebolastor Hi, I would like to buy your Pandemonium League Deerskin Boots listed for 5 chaos in Metamorph (stash tab \"4\"; position: left 1, top 1)",
						"account": {
							"name": "Terap1st",
							"lastCharacterName": "Ebolastor",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex3.png?scale=1&w=2&h=2&v=597ff9da61bbd5547ef2b10d25b8e909",
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
						"name": "Pandemonium League",
						"typeLine": "Deerskin Boots",
						"identified": true,
						"ilvl": 52,
						"note": "~b/o 5 chaos",
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"97",
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
										"42",
										0
									]
								],
								"displayMode": 0
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
						"explicitMods": [
							"+23 to Evasion Rating",
							"+92 to maximum Life",
							"+30% to Fire Resistance",
							"+21% to Cold Resistance",
							"+23% to Lightning Resistance"
						],
						"enchantMods": [
							"Adds 44 to 64 Chaos Damage if you've taken a Critical Strike Recently"
						],
						"frameType": 2,
						"extended": {
							"ev": 116,
							"ev_aug": true,
							"mods": {
								"enchant": [
									{
										"name": "Enchantment Chaos Damage 1",
										"tier": "",
										"magnitudes": [
											{
												"hash": "enchant.stat_391609701",
												"min": 44,
												"max": 44
											},
											{
												"hash": "enchant.stat_391609701",
												"min": 64,
												"max": 64
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
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
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
										"name": "Flea's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
											}
										]
									},
									{
										"name": "Agile",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 3,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
								"enchant": [
									[
										"enchant.stat_391609701",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											4,
											5
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1,
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
							"text": "UmFyaXR5OiBSYXJlDQpQYW5kZW1vbml1bSBMZWFndWUNCkRlZXJza2luIEJvb3RzDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDk3IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDQyDQpEZXg6IDQyDQotLS0tLS0tLQ0KU29ja2V0czogUi1HLUctRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA1Mg0KLS0tLS0tLS0NCkFkZHMgNDQgdG8gNjQgQ2hhb3MgRGFtYWdlIGlmIHlvdSd2ZSB0YWtlbiBhIENyaXRpY2FsIFN0cmlrZSBSZWNlbnRseQ0KLS0tLS0tLS0NCisyMyB0byBFdmFzaW9uIFJhdGluZw0KKzkyIHRvIG1heGltdW0gTGlmZQ0KKzMwJSB0byBGaXJlIFJlc2lzdGFuY2UNCisyMSUgdG8gQ29sZCBSZXNpc3RhbmNlDQorMjMlIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQotLS0tLS0tLQ0KTm90ZTogfmIvbyA1IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +74% total Elemental Resistance",
							"(pseudo) +92 total maximum Life",
							"Sum: 258"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "f71e95798a9e96c9830dac2c479adc30d1545dbb343e0832c174bd5dfe5dc1e5",
				"name": "Blood Trail",
				"sockets": [
					[
						"B",
						"G"
					]
				],
				"itemLevel": 63,
				"defenseProperties": [
					"energyShield 50"
				],
				"implicitMods": [],
				"explicitMods": [
					"+13 to maximum Energy Shield",
					"+98 to maximum Life",
					"Regenerate 4.2 Life per second",
					"+18 to maximum Mana",
					"+35% to Fire Resistance",
					"+27% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +62% total Elemental Resistance",
					"(pseudo) +98 total maximum Life",
					"Sum: 258"
				],
				"accountText": "jakeled > DeadFarmer",
				"whisper": "@DeadFarmer Hi, I would like to buy your Blood Trail Samite Slippers listed for 5 chaos in Metamorph (stash tab \"Loot-1\"; position: left 1, top 3)",
				"note": "~price 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 258,
				"evalValue": 258,
				"evalPrice": 5,
				"debug": {
					"id": "f71e95798a9e96c9830dac2c479adc30d1545dbb343e0832c174bd5dfe5dc1e5",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T02:09:24Z",
						"stash": {
							"name": "Loot-1",
							"x": 0,
							"y": 2
						},
						"whisper": "@DeadFarmer Hi, I would like to buy your Blood Trail Samite Slippers listed for 5 chaos in Metamorph (stash tab \"Loot-1\"; position: left 1, top 3)",
						"account": {
							"name": "jakeled",
							"lastCharacterName": "DeadFarmer",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsInt3.png?scale=1&w=2&h=2&v=77abd4784ad8e1666ac1b956c565a80e",
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
						"name": "Blood Trail",
						"typeLine": "Samite Slippers",
						"identified": true,
						"ilvl": 63,
						"note": "~price 5 chaos",
						"properties": [
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
										"44",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"79",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+13 to maximum Energy Shield",
							"+98 to maximum Life",
							"Regenerate 4.2 Life per second",
							"+18 to maximum Mana",
							"+35% to Fire Resistance",
							"+27% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"es": 50,
							"es_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "of the Yeti",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 24,
												"max": 29
											}
										]
									},
									{
										"name": "Prior's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_4052037485",
												"min": 11,
												"max": 15
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 24,
												"max": 28
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
										"name": "Beryl",
										"tier": "P12",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 15,
												"max": 19
											}
										]
									}
								]
							},
							"hashes": {
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
											0,
											2
										]
									],
									[
										"explicit.stat_3325883026",
										[
											4
										]
									],
									[
										"explicit.stat_1050105434",
										[
											5
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
							"text": "UmFyaXR5OiBSYXJlDQpCbG9vZCBUcmFpbA0KU2FtaXRlIFNsaXBwZXJzDQotLS0tLS0tLQ0KRW5lcmd5IFNoaWVsZDogNDIgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDQNCkludDogNzkNCi0tLS0tLS0tDQpTb2NrZXRzOiBCLUcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNjMNCi0tLS0tLS0tDQorMTMgdG8gbWF4aW11bSBFbmVyZ3kgU2hpZWxkDQorOTggdG8gbWF4aW11bSBMaWZlDQpSZWdlbmVyYXRlIDQuMiBMaWZlIHBlciBzZWNvbmQNCisxOCB0byBtYXhpbXVtIE1hbmENCiszNSUgdG8gRmlyZSBSZXNpc3RhbmNlDQorMjclIHRvIENvbGQgUmVzaXN0YW5jZQ0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSA1IGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +62% total Elemental Resistance",
							"(pseudo) +98 total maximum Life",
							"Sum: 258"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "ce71fccfc278216120b364b8c4d932633e4a78c673109cf3aa60e27a66421831",
				"name": "Ambush Track",
				"sockets": [
					[
						"G",
						"G"
					]
				],
				"itemLevel": 70,
				"defenseProperties": [
					"evasion 240"
				],
				"implicitMods": [],
				"explicitMods": [
					"+20 to Evasion Rating",
					"+99 to maximum Life",
					"Regenerate 6.6 Life per second",
					"+32% to Fire Resistance",
					"+28% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +60% total Elemental Resistance",
					"(pseudo) +99 total maximum Life",
					"Sum: 258"
				],
				"accountText": "Onidemon > CharacterLimitTest",
				"whisper": "@CharacterLimitTest Hi, I would like to buy your Ambush Track Shagreen Boots listed for 5 chaos in Metamorph (stash tab \"Sale\"; position: left 1, top 1)",
				"note": "~price 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 258,
				"evalValue": 258,
				"evalPrice": 5,
				"debug": {
					"id": "ce71fccfc278216120b364b8c4d932633e4a78c673109cf3aa60e27a66421831",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-14T20:58:50Z",
						"stash": {
							"name": "Sale",
							"x": 0,
							"y": 0
						},
						"whisper": "@CharacterLimitTest Hi, I would like to buy your Ambush Track Shagreen Boots listed for 5 chaos in Metamorph (stash tab \"Sale\"; position: left 1, top 1)",
						"account": {
							"name": "Onidemon",
							"lastCharacterName": "CharacterLimitTest",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
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
						"name": "Ambush Track",
						"typeLine": "Shagreen Boots",
						"identified": true,
						"ilvl": 70,
						"note": "~price 5 chaos",
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"200",
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
										"97",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+20 to Evasion Rating",
							"+99 to maximum Life",
							"Regenerate 6.6 Life per second",
							"+32% to Fire Resistance",
							"+28% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 240,
							"ev_aug": true,
							"mods": {
								"explicit": [
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Flea's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
											}
										]
									},
									{
										"name": "of the Yeti",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 24,
												"max": 29
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
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											2
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
										"explicit.stat_3325883026",
										[
											0
										]
									],
									[
										"explicit.stat_3372524247",
										[
											4
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
							"text": "UmFyaXR5OiBSYXJlDQpBbWJ1c2ggVHJhY2sNClNoYWdyZWVuIEJvb3RzDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDIwMCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1NQ0KRGV4OiA5Nw0KLS0tLS0tLS0NClNvY2tldHM6IEctRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3MA0KLS0tLS0tLS0NCisyMCB0byBFdmFzaW9uIFJhdGluZw0KKzk5IHRvIG1heGltdW0gTGlmZQ0KUmVnZW5lcmF0ZSA2LjYgTGlmZSBwZXIgc2Vjb25kDQorMzIlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzI4JSB0byBDb2xkIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgNSBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +60% total Elemental Resistance",
							"(pseudo) +99 total maximum Life",
							"Sum: 258"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "d4f060ad7708c40f975b900cbb5cc1b61eeb5900aaf929aeb800593baaccf39c",
				"name": "Apocalypse Trail",
				"sockets": [
					[
						"B"
					],
					[
						"B"
					]
				],
				"itemLevel": 71,
				"defenseProperties": [
					"evasion 203",
					"energyShield 39"
				],
				"implicitMods": [
					"+8% to Cold and Lightning Resistances"
				],
				"explicitMods": [
					"41% increased Evasion and Energy Shield",
					"+85 to maximum Life",
					"Regenerate 1.4 Life per second",
					"+40% to Fire Resistance"
				],
				"pseudoMods": [
					"(pseudo) +88% total Elemental Resistance",
					"(pseudo) +85 total maximum Life",
					"Sum: 258"
				],
				"accountText": "Dontbejello > DPS_MEETS_FLAMEBLAST",
				"whisper": "@DPS_MEETS_FLAMEBLAST Hi, I would like to buy your Apocalypse Trail Two-Toned Boots listed for 8 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 11, top 8)",
				"note": "~price 8 chaos",
				"priceText": "8 chaos",
				"valueExcludingProperties": 258,
				"evalValue": 258,
				"evalPrice": 8,
				"debug": {
					"id": "d4f060ad7708c40f975b900cbb5cc1b61eeb5900aaf929aeb800593baaccf39c",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T06:05:47Z",
						"stash": {
							"name": "~price 1 chaos",
							"x": 10,
							"y": 7
						},
						"whisper": "@DPS_MEETS_FLAMEBLAST Hi, I would like to buy your Apocalypse Trail Two-Toned Boots listed for 8 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 11, top 8)",
						"account": {
							"name": "Dontbejello",
							"lastCharacterName": "DPS_MEETS_FLAMEBLAST",
							"online": {
								"league": "Metamorph",
								"status": "afk"
							},
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/TwoTonedBoots.png?scale=1&w=2&h=2&v=06ee4d5bd2996edf668a2265ff2f181a",
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
						"name": "Apocalypse Trail",
						"typeLine": "Two-Toned Boots",
						"identified": true,
						"ilvl": 71,
						"note": "~price 8 chaos",
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"178",
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
										"34",
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
										"62",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+8% to Cold and Lightning Resistances"
						],
						"explicitMods": [
							"41% increased Evasion and Energy Shield",
							"+85 to maximum Life",
							"Regenerate 1.4 Life per second",
							"+40% to Fire Resistance"
						],
						"craftedMods": [
							"+16% to Cold and Lightning Resistances"
						],
						"frameType": 2,
						"extended": {
							"ev": 203,
							"ev_aug": true,
							"es": 39,
							"es_aug": true,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_4277795662",
												"min": 8,
												"max": 12
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Newt",
										"tier": "S7",
										"magnitudes": [
											{
												"hash": "explicit.stat_3325883026",
												"min": 1,
												"max": 2
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Ethereal",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_1999113824",
												"min": 27,
												"max": 42
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
									}
								],
								"crafted": [
									{
										"name": "of Craft",
										"tier": "R2",
										"magnitudes": [
											{
												"hash": "crafted.stat_4277795662",
												"min": 13,
												"max": 16
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_4277795662",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_1999113824",
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
										"explicit.stat_3325883026",
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
							"text": "UmFyaXR5OiBSYXJlDQpBcG9jYWx5cHNlIFRyYWlsDQpUd28tVG9uZWQgQm9vdHMNCi0tLS0tLS0tDQpFdmFzaW9uIFJhdGluZzogMTc4IChhdWdtZW50ZWQpDQpFbmVyZ3kgU2hpZWxkOiAzNCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA3MA0KRGV4OiA2Mg0KSW50OiA2Mg0KLS0tLS0tLS0NClNvY2tldHM6IEIgQiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3MQ0KLS0tLS0tLS0NCis4JSB0byBDb2xkIGFuZCBMaWdodG5pbmcgUmVzaXN0YW5jZXMgKGltcGxpY2l0KQ0KLS0tLS0tLS0NCjQxJSBpbmNyZWFzZWQgRXZhc2lvbiBhbmQgRW5lcmd5IFNoaWVsZA0KKzg1IHRvIG1heGltdW0gTGlmZQ0KUmVnZW5lcmF0ZSAxLjQgTGlmZSBwZXIgc2Vjb25kDQorNDAlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzE2JSB0byBDb2xkIGFuZCBMaWdodG5pbmcgUmVzaXN0YW5jZXMgKGNyYWZ0ZWQpDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDggY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +88% total Elemental Resistance",
							"(pseudo) +85 total maximum Life",
							"Sum: 258"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "22f631fbd395deb1e6c7e112594260220de06fded5191c887b396b51160f558a",
				"name": "Behemoth Trail",
				"sockets": [
					[
						"R",
						"G"
					]
				],
				"itemLevel": 74,
				"defenseProperties": [
					"evasion 289"
				],
				"implicitMods": [],
				"explicitMods": [
					"+20 to Dexterity",
					"+61 to Evasion Rating",
					"+108 to maximum Life",
					"Regenerate 5.5 Life per second",
					"+42% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +42% total Elemental Resistance",
					"(pseudo) +108 total maximum Life",
					"Sum: 258"
				],
				"accountText": "CrosshairLunchbox > CrossSnowyBoiss",
				"whisper": "@CrossSnowyBoiss Hi, I would like to buy your Behemoth Trail Shagreen Boots listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 2, top 9)",
				"priceText": "10 chaos",
				"valueExcludingProperties": 258,
				"evalValue": 258,
				"evalPrice": 10,
				"debug": {
					"id": "22f631fbd395deb1e6c7e112594260220de06fded5191c887b396b51160f558a",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T20:56:31Z",
						"stash": {
							"name": "~price 10 chaos",
							"x": 1,
							"y": 8
						},
						"whisper": "@CrossSnowyBoiss Hi, I would like to buy your Behemoth Trail Shagreen Boots listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 2, top 9)",
						"account": {
							"name": "CrosshairLunchbox",
							"lastCharacterName": "CrossSnowyBoiss",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
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
						"name": "Behemoth Trail",
						"typeLine": "Shagreen Boots",
						"identified": true,
						"ilvl": 74,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"241",
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
										"97",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+20 to Dexterity",
							"+61 to Evasion Rating",
							"+108 to maximum Life",
							"Regenerate 5.5 Life per second",
							"+42% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 289,
							"ev_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "of the Fox",
										"tier": "S7",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 18,
												"max": 22
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
										"name": "Acrobat's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 36,
												"max": 60
											}
										]
									},
									{
										"name": "Fawn's",
										"tier": "P1",
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
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											0
										]
									],
									[
										"explicit.stat_53045048",
										[
											4,
											5
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1,
											5
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
							"text": "UmFyaXR5OiBSYXJlDQpCZWhlbW90aCBUcmFpbA0KU2hhZ3JlZW4gQm9vdHMNCi0tLS0tLS0tDQpFdmFzaW9uIFJhdGluZzogMjQxIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU3DQpEZXg6IDk3DQotLS0tLS0tLQ0KU29ja2V0czogUi1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc0DQotLS0tLS0tLQ0KKzIwIHRvIERleHRlcml0eQ0KKzYxIHRvIEV2YXNpb24gUmF0aW5nDQorMTA4IHRvIG1heGltdW0gTGlmZQ0KUmVnZW5lcmF0ZSA1LjUgTGlmZSBwZXIgc2Vjb25kDQorNDIlIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQo="
						},
						"pseudoMods": [
							"(pseudo) +42% total Elemental Resistance",
							"(pseudo) +108 total maximum Life",
							"Sum: 258"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "18c72f31a5b33aa8eaf2d9bfa8b166a3615426f2fa4a29d3d7a568b2e51b4079",
				"name": "Cataclysm League",
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
				"defenseProperties": [
					"armour 328"
				],
				"implicitMods": [],
				"explicitMods": [
					"+22 to Strength",
					"+32 to Armour",
					"37% increased Armour",
					"+103 to maximum Life",
					"9% increased Rarity of Items found",
					"+30% to Lightning Resistance",
					"14% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +30% total Elemental Resistance",
					"(pseudo) +114 total maximum Life",
					"Sum: 258"
				],
				"accountText": "AlcesMortum > TripppelSpinnner",
				"whisper": "@TripppelSpinnner Hi, I would like to buy your Cataclysm League Goliath Greaves listed for 10 chaos in Metamorph (stash tab \"7\"; position: left 3, top 1)",
				"note": "~price 10 chaos",
				"priceText": "10 chaos",
				"valueExcludingProperties": 258,
				"evalValue": 258.328,
				"evalPrice": 10,
				"debug": {
					"id": "18c72f31a5b33aa8eaf2d9bfa8b166a3615426f2fa4a29d3d7a568b2e51b4079",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-14T16:59:25Z",
						"stash": {
							"name": "7",
							"x": 2,
							"y": 0
						},
						"whisper": "@TripppelSpinnner Hi, I would like to buy your Cataclysm League Goliath Greaves listed for 10 chaos in Metamorph (stash tab \"7\"; position: left 3, top 1)",
						"account": {
							"name": "AlcesMortum",
							"lastCharacterName": "TripppelSpinnner",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
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
							}
						],
						"name": "Cataclysm League",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 71,
						"note": "~price 10 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"286",
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
										"54",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+22 to Strength",
							"+32 to Armour",
							"37% increased Armour",
							"+103 to maximum Life",
							"9% increased Rarity of Items found",
							"+30% to Lightning Resistance",
							"14% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 328,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "of Plunder",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 6,
												"max": 10
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
										"name": "Elephant's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
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
										"name": "of the Tempest",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_1671376347",
												"min": 30,
												"max": 35
											}
										]
									},
									{
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "Urchin's",
										"tier": "P1",
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
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
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
										"explicit.stat_1062208444",
										[
											2
										]
									],
									[
										"explicit.stat_3299347043",
										[
											4,
											5
										]
									],
									[
										"explicit.stat_3917489142",
										[
											0
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
							"text": "UmFyaXR5OiBSYXJlDQpDYXRhY2x5c20gTGVhZ3VlDQpHb2xpYXRoIEdyZWF2ZXMNCi0tLS0tLS0tDQpBcm1vdXI6IDI4NiAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1NA0KU3RyOiA5NQ0KLS0tLS0tLS0NClNvY2tldHM6IFItUiBSIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcxDQotLS0tLS0tLQ0KKzIyIHRvIFN0cmVuZ3RoDQorMzIgdG8gQXJtb3VyDQozNyUgaW5jcmVhc2VkIEFybW91cg0KKzEwMyB0byBtYXhpbXVtIExpZmUNCjklIGluY3JlYXNlZCBSYXJpdHkgb2YgSXRlbXMgZm91bmQNCiszMCUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCjE0JSBpbmNyZWFzZWQgU3R1biBhbmQgQmxvY2sgUmVjb3ZlcnkNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMTAgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +30% total Elemental Resistance",
							"(pseudo) +114 total maximum Life",
							"Sum: 258"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "8e898ca3eb44fb70eafa7a3ed7ed505ce5320428a80943f768eb662b3e925a3b",
				"name": "Invasion Pace",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 73,
				"defenseProperties": [
					"evasion 164",
					"energyShield 23"
				],
				"implicitMods": [],
				"explicitMods": [
					"+38 to Evasion Rating",
					"+110 to maximum Life",
					"8% increased Rarity of Items found",
					"+37% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +37% total Elemental Resistance",
					"(pseudo) +110 total maximum Life",
					"Sum: 257"
				],
				"accountText": "Senia > SeniaIceCold",
				"whisper": "@SeniaIceCold Hi, I would like to buy your Invasion Pace Carnal Boots listed for 2 alch in Metamorph (stash tab \"~price 2 alch\"; position: left 15, top 11)",
				"priceText": "2 alch",
				"valueExcludingProperties": 257,
				"evalValue": 257,
				"evalPrice": 1,
				"debug": {
					"id": "8e898ca3eb44fb70eafa7a3ed7ed505ce5320428a80943f768eb662b3e925a3b",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-19T02:55:23Z",
						"stash": {
							"name": "~price 2 alch",
							"x": 14,
							"y": 10
						},
						"whisper": "@SeniaIceCold Hi, I would like to buy your Invasion Pace Carnal Boots listed for 2 alch in Metamorph (stash tab \"~price 2 alch\"; position: left 15, top 11)",
						"account": {
							"name": "Senia",
							"lastCharacterName": "SeniaIceCold",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 2,
							"currency": "alch"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDexInt4.png?scale=1&w=2&h=2&v=bfbd6b83d1a5a8dafbae030a0041b5fe",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Invasion Pace",
						"typeLine": "Carnal Boots",
						"identified": true,
						"ilvl": 73,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"137",
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
										"52",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"52",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+38 to Evasion Rating",
							"+110 to maximum Life",
							"8% increased Rarity of Items found",
							"+37% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 164,
							"ev_aug": true,
							"es": 23,
							"es_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Fawn's",
										"tier": "P1",
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
										"name": "Magpie's",
										"tier": "P2",
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
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
											1
										]
									],
									[
										"explicit.stat_3917489142",
										[
											3
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
							"text": "UmFyaXR5OiBSYXJlDQpJbnZhc2lvbiBQYWNlDQpDYXJuYWwgQm9vdHMNCi0tLS0tLS0tDQpFdmFzaW9uIFJhdGluZzogMTM3IChhdWdtZW50ZWQpDQpFbmVyZ3kgU2hpZWxkOiAxOQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1NQ0KRGV4OiA1Mg0KSW50OiA1Mg0KLS0tLS0tLS0NClNvY2tldHM6IEcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzMNCi0tLS0tLS0tDQorMzggdG8gRXZhc2lvbiBSYXRpbmcNCisxMTAgdG8gbWF4aW11bSBMaWZlDQo4JSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIGZvdW5kDQorMzclIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQo="
						},
						"pseudoMods": [
							"(pseudo) +37% total Elemental Resistance",
							"(pseudo) +110 total maximum Life",
							"Sum: 257"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "2dfeaa725b8e881fce7c06be07365b378881d36e0392ad88b5b41c39877c9d96",
				"name": "Armageddon Spur",
				"sockets": [
					[
						"G",
						"B"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"evasion 262"
				],
				"implicitMods": [],
				"explicitMods": [
					"+38 to Evasion Rating",
					"+99 to maximum Life",
					"+33% to Fire Resistance",
					"20% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +59% total Elemental Resistance",
					"(pseudo) +99 total maximum Life",
					"Sum: 257"
				],
				"accountText": "Diputserauoy > ChocoBuscuit",
				"whisper": "@ChocoBuscuit Hi, I would like to buy your Armageddon Spur Shagreen Boots listed for 2 chaos in Metamorph (stash tab \"7\"; position: left 3, top 9)",
				"note": "~price 2 chaos",
				"priceText": "2 chaos",
				"valueExcludingProperties": 257,
				"evalValue": 257,
				"evalPrice": 2,
				"debug": {
					"id": "2dfeaa725b8e881fce7c06be07365b378881d36e0392ad88b5b41c39877c9d96",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-14T23:00:19Z",
						"stash": {
							"name": "7",
							"x": 2,
							"y": 8
						},
						"whisper": "@ChocoBuscuit Hi, I would like to buy your Armageddon Spur Shagreen Boots listed for 2 chaos in Metamorph (stash tab \"7\"; position: left 3, top 9)",
						"account": {
							"name": "Diputserauoy",
							"lastCharacterName": "ChocoBuscuit",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
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
						"name": "Armageddon Spur",
						"typeLine": "Shagreen Boots",
						"identified": true,
						"ilvl": 72,
						"note": "~price 2 chaos",
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"218",
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
										"97",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+38 to Evasion Rating",
							"+99 to maximum Life",
							"+33% to Fire Resistance",
							"20% increased Stun and Block Recovery"
						],
						"craftedMods": [
							"+13% to Cold and Lightning Resistances"
						],
						"frameType": 2,
						"extended": {
							"ev": 262,
							"ev_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
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
										"name": "of Steel Skin",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_2511217560",
												"min": 20,
												"max": 22
											}
										]
									},
									{
										"name": "Fawn's",
										"tier": "P1",
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
									}
								],
								"crafted": [
									{
										"name": "of Craft",
										"tier": "R2",
										"magnitudes": [
											{
												"hash": "crafted.stat_4277795662",
												"min": 13,
												"max": 16
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
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
										"explicit.stat_2511217560",
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
							"text": "UmFyaXR5OiBSYXJlDQpBcm1hZ2VkZG9uIFNwdXINClNoYWdyZWVuIEJvb3RzDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDIxOCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1NQ0KRGV4OiA5Nw0KLS0tLS0tLS0NClNvY2tldHM6IEctQiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3Mg0KLS0tLS0tLS0NCiszOCB0byBFdmFzaW9uIFJhdGluZw0KKzk5IHRvIG1heGltdW0gTGlmZQ0KKzMzJSB0byBGaXJlIFJlc2lzdGFuY2UNCjIwJSBpbmNyZWFzZWQgU3R1biBhbmQgQmxvY2sgUmVjb3ZlcnkNCisxMyUgdG8gQ29sZCBhbmQgTGlnaHRuaW5nIFJlc2lzdGFuY2VzIChjcmFmdGVkKQ0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAyIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +59% total Elemental Resistance",
							"(pseudo) +99 total maximum Life",
							"Sum: 257"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "48e0f942847482efca3d29d21d6278bcc5e6f1a2c4abc20abc811dff4efc034b",
				"name": "Rift Slippers",
				"sockets": [
					[
						"B",
						"B"
					]
				],
				"itemLevel": 75,
				"defenseProperties": [
					"evasion 119",
					"energyShield 23"
				],
				"implicitMods": [],
				"explicitMods": [
					"+89 to maximum Life",
					"+34% to Fire Resistance",
					"+27% to Cold Resistance",
					"+18% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +79% total Elemental Resistance",
					"(pseudo) +89 total maximum Life",
					"Sum: 257"
				],
				"accountText": "petsh0p > HelloWorldCurseYou",
				"whisper": "@HelloWorldCurseYou Hi, I would like to buy your Rift Slippers Carnal Boots listed for 3 chaos in Metamorph (stash tab \"~price 3 chaos\"; position: left 1, top 8)",
				"priceText": "3 chaos",
				"valueExcludingProperties": 257,
				"evalValue": 257,
				"evalPrice": 3,
				"debug": {
					"id": "48e0f942847482efca3d29d21d6278bcc5e6f1a2c4abc20abc811dff4efc034b",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-20T12:52:46Z",
						"stash": {
							"name": "~price 3 chaos",
							"x": 0,
							"y": 7
						},
						"whisper": "@HelloWorldCurseYou Hi, I would like to buy your Rift Slippers Carnal Boots listed for 3 chaos in Metamorph (stash tab \"~price 3 chaos\"; position: left 1, top 8)",
						"account": {
							"name": "petsh0p",
							"lastCharacterName": "HelloWorldCurseYou",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDexInt4.png?scale=1&w=2&h=2&v=bfbd6b83d1a5a8dafbae030a0041b5fe",
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
						"name": "Rift Slippers",
						"typeLine": "Carnal Boots",
						"identified": true,
						"ilvl": 75,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"99",
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
										"52",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"52",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+89 to maximum Life",
							"+34% to Fire Resistance",
							"+27% to Cold Resistance",
							"+18% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 119,
							"ev_aug": true,
							"es": 23,
							"es_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "of the Yeti",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 24,
												"max": 29
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
								"explicit": [
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
										"explicit.stat_4220027924",
										[
											1
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
							"text": "UmFyaXR5OiBSYXJlDQpSaWZ0IFNsaXBwZXJzDQpDYXJuYWwgQm9vdHMNCi0tLS0tLS0tDQpFdmFzaW9uIFJhdGluZzogOTkNCkVuZXJneSBTaGllbGQ6IDE5DQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU1DQpEZXg6IDUyDQpJbnQ6IDUyDQotLS0tLS0tLQ0KU29ja2V0czogQi1CIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc1DQotLS0tLS0tLQ0KKzg5IHRvIG1heGltdW0gTGlmZQ0KKzM0JSB0byBGaXJlIFJlc2lzdGFuY2UNCisyNyUgdG8gQ29sZCBSZXNpc3RhbmNlDQorMTglIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQo="
						},
						"pseudoMods": [
							"(pseudo) +79% total Elemental Resistance",
							"(pseudo) +89 total maximum Life",
							"Sum: 257"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "d5a39e9f3b1dc6b4513b026ba144f84e0050260731ae6f5308e8d5492105583e",
				"name": "Havoc Trail",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 71,
				"defenseProperties": [
					"armour 248"
				],
				"implicitMods": [],
				"explicitMods": [
					"18% reduced Attribute Requirements",
					"+30 to Armour",
					"+89 to maximum Life",
					"+39% to Fire Resistance",
					"+40% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +79% total Elemental Resistance",
					"(pseudo) +89 total maximum Life",
					"Sum: 257"
				],
				"accountText": "maomao20 > maoyikai",
				"whisper": "@maoyikai Hi, I would like to buy your Havoc Trail Goliath Greaves listed for 5 chaos in Metamorph (stash tab \"5\"; position: left 5, top 1)",
				"note": "~price 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 257,
				"evalValue": 257.248,
				"evalPrice": 5,
				"debug": {
					"id": "d5a39e9f3b1dc6b4513b026ba144f84e0050260731ae6f5308e8d5492105583e",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-16T15:31:06Z",
						"stash": {
							"name": "5",
							"x": 4,
							"y": 0
						},
						"whisper": "@maoyikai Hi, I would like to buy your Havoc Trail Goliath Greaves listed for 5 chaos in Metamorph (stash tab \"5\"; position: left 5, top 1)",
						"account": {
							"name": "maomao20",
							"lastCharacterName": "maoyikai",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Havoc Trail",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 71,
						"note": "~price 5 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"207",
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
										"54",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"77",
										1
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"18% reduced Attribute Requirements",
							"+30 to Armour",
							"+89 to maximum Life",
							"+39% to Fire Resistance",
							"+40% to Lightning Resistance"
						],
						"craftedMods": [
							"13% increased Movement Speed"
						],
						"frameType": 2,
						"extended": {
							"ar": 248,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "of the Worthy",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3639275092",
												"min": -18,
												"max": -18
											}
										]
									},
									{
										"name": "Rotund",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 60,
												"max": 69
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
										"name": "Urchin's",
										"tier": "P1",
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
									}
								],
								"crafted": [
									{
										"name": "Upgraded",
										"tier": "R1",
										"magnitudes": [
											{
												"hash": "crafted.stat_2250533757",
												"min": 10,
												"max": 14
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_3639275092",
										[
											0
										]
									],
									[
										"explicit.stat_3484657501",
										[
											4
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1,
											4
										]
									],
									[
										"explicit.stat_3372524247",
										[
											3
										]
									],
									[
										"explicit.stat_1671376347",
										[
											2
										]
									]
								],
								"crafted": [
									[
										"crafted.stat_2250533757",
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
							"text": "UmFyaXR5OiBSYXJlDQpIYXZvYyBUcmFpbA0KR29saWF0aCBHcmVhdmVzDQotLS0tLS0tLQ0KQXJtb3VyOiAyMDcgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTQNClN0cjogNzcgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpTb2NrZXRzOiBSIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcxDQotLS0tLS0tLQ0KMTglIHJlZHVjZWQgQXR0cmlidXRlIFJlcXVpcmVtZW50cw0KKzMwIHRvIEFybW91cg0KKzg5IHRvIG1heGltdW0gTGlmZQ0KKzM5JSB0byBGaXJlIFJlc2lzdGFuY2UNCis0MCUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCjEzJSBpbmNyZWFzZWQgTW92ZW1lbnQgU3BlZWQgKGNyYWZ0ZWQpDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDUgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +79% total Elemental Resistance",
							"(pseudo) +89 total maximum Life",
							"Sum: 257"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "a5abd9afee39f20eca68c6fce22cbf6eb4db8d5d4f94c69025ce79996ded4c6e",
				"name": "Armageddon Spark",
				"sockets": [
					[
						"R",
						"R",
						"R"
					]
				],
				"itemLevel": 71,
				"defenseProperties": [
					"armour 337"
				],
				"implicitMods": [],
				"explicitMods": [
					"18% reduced Attribute Requirements",
					"+40 to Armour",
					"+111 to maximum Life",
					"+35% to Lightning Resistance",
					"22% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +35% total Elemental Resistance",
					"(pseudo) +111 total maximum Life",
					"Sum: 257"
				],
				"accountText": "Lendenpein > Bratgeraet",
				"whisper": "@Bratgeraet Hi, I would like to buy your Armageddon Spark Titan Greaves listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 1, top 3)",
				"priceText": "5 chaos",
				"valueExcludingProperties": 257,
				"evalValue": 257.337,
				"evalPrice": 5,
				"debug": {
					"id": "a5abd9afee39f20eca68c6fce22cbf6eb4db8d5d4f94c69025ce79996ded4c6e",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-16T17:04:02Z",
						"stash": {
							"name": "~price 5 chaos",
							"x": 0,
							"y": 2
						},
						"whisper": "@Bratgeraet Hi, I would like to buy your Armageddon Spark Titan Greaves listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 1, top 3)",
						"account": {
							"name": "Lendenpein",
							"lastCharacterName": "Bratgeraet",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
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
							}
						],
						"name": "Armageddon Spark",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 71,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"281",
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
										"98",
										1
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"18% reduced Attribute Requirements",
							"+40 to Armour",
							"+111 to maximum Life",
							"+35% to Lightning Resistance",
							"22% increased Stun and Block Recovery"
						],
						"craftedMods": [
							"13% increased Movement Speed"
						],
						"frameType": 2,
						"extended": {
							"ar": 337,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "of Steel Skin",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_2511217560",
												"min": 20,
												"max": 22
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
									},
									{
										"name": "of the Worthy",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3639275092",
												"min": -18,
												"max": -18
											}
										]
									},
									{
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									}
								],
								"crafted": [
									{
										"name": "Upgraded",
										"tier": "R1",
										"magnitudes": [
											{
												"hash": "crafted.stat_2250533757",
												"min": 10,
												"max": 14
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_3639275092",
										[
											2
										]
									],
									[
										"explicit.stat_3484657501",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											3,
											4
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
											0
										]
									]
								],
								"crafted": [
									[
										"crafted.stat_2250533757",
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
							"text": "UmFyaXR5OiBSYXJlDQpBcm1hZ2VkZG9uIFNwYXJrDQpUaXRhbiBHcmVhdmVzDQotLS0tLS0tLQ0KQXJtb3VyOiAyODEgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjgNClN0cjogOTggKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpTb2NrZXRzOiBSLVItUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3MQ0KLS0tLS0tLS0NCjE4JSByZWR1Y2VkIEF0dHJpYnV0ZSBSZXF1aXJlbWVudHMNCis0MCB0byBBcm1vdXINCisxMTEgdG8gbWF4aW11bSBMaWZlDQorMzUlIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQoyMiUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQoxMyUgaW5jcmVhc2VkIE1vdmVtZW50IFNwZWVkIChjcmFmdGVkKQ0K"
						},
						"pseudoMods": [
							"(pseudo) +35% total Elemental Resistance",
							"(pseudo) +111 total maximum Life",
							"Sum: 257"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "d51a77bed9707870db4c61990db7c63208b502cd03c96edc3581ce6141d48da3",
				"name": "Spirit Spark",
				"sockets": [
					[
						"G",
						"G"
					],
					[
						"G"
					]
				],
				"itemLevel": 73,
				"defenseProperties": [
					"armour 145",
					"evasion 145"
				],
				"implicitMods": [],
				"explicitMods": [
					"+39 to Strength",
					"+84 to maximum Life",
					"+13% to Fire Resistance",
					"+37% to Lightning Resistance",
					"10% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +50% total Elemental Resistance",
					"(pseudo) +103.5 total maximum Life",
					"Sum: 257"
				],
				"accountText": "Molgor > кеьаь",
				"whisper": "@кеьаь Hi, I would like to buy your Spirit Spark Dragonscale Boots listed for 8 chaos in Metamorph (stash tab \"~price 8 chaos\"; position: left 22, top 23)",
				"priceText": "8 chaos",
				"valueExcludingProperties": 257,
				"evalValue": 257.145,
				"evalPrice": 8,
				"debug": {
					"id": "d51a77bed9707870db4c61990db7c63208b502cd03c96edc3581ce6141d48da3",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T22:19:13Z",
						"stash": {
							"name": "~price 8 chaos",
							"x": 21,
							"y": 22
						},
						"whisper": "@кеьаь Hi, I would like to buy your Spirit Spark Dragonscale Boots listed for 8 chaos in Metamorph (stash tab \"~price 8 chaos\"; position: left 22, top 23)",
						"account": {
							"name": "Molgor",
							"lastCharacterName": "кеьаь",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrDex3.png?scale=1&w=2&h=2&v=601dc135a14c1121dca118c2640a1335",
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
						"name": "Spirit Spark",
						"typeLine": "Dragonscale Boots",
						"identified": true,
						"ilvl": 73,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"121",
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
										"121",
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
										"62",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+39 to Strength",
							"+84 to maximum Life",
							"+13% to Fire Resistance",
							"+37% to Lightning Resistance",
							"10% increased Movement Speed"
						],
						"frameType": 2,
						"extended": {
							"ev": 145,
							"ev_aug": true,
							"ar": 145,
							"ar_aug": true,
							"mods": {
								"explicit": [
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
										"name": "of the Leviathan",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 38,
												"max": 42
											}
										]
									},
									{
										"name": "Runner's",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_2250533757",
												"min": 10,
												"max": 10
											}
										]
									}
								]
							},
							"hashes": {
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
									],
									[
										"explicit.stat_2250533757",
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
							"text": "UmFyaXR5OiBSYXJlDQpTcGlyaXQgU3BhcmsNCkRyYWdvbnNjYWxlIEJvb3RzDQotLS0tLS0tLQ0KQXJtb3VyOiAxMjENCkV2YXNpb24gUmF0aW5nOiAxMjENCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjUNClN0cjogNjINCkRleDogNjINCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUcgRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3Mw0KLS0tLS0tLS0NCiszOSB0byBTdHJlbmd0aA0KKzg0IHRvIG1heGltdW0gTGlmZQ0KKzEzJSB0byBGaXJlIFJlc2lzdGFuY2UNCiszNyUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCjEwJSBpbmNyZWFzZWQgTW92ZW1lbnQgU3BlZWQNCg=="
						},
						"pseudoMods": [
							"(pseudo) +50% total Elemental Resistance",
							"(pseudo) +103.5 total maximum Life",
							"Sum: 257"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "c128d9f5fca4f4c5e797b40c70dec37cfcc6a879207ec911eee7c907eaac7080",
				"name": "Nemesis Hoof",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 46,
				"defenseProperties": [
					"armour 133",
					"evasion 90"
				],
				"implicitMods": [],
				"explicitMods": [
					"+23 to Strength",
					"+24 to Dexterity",
					"+31 to Armour",
					"19% increased Armour and Evasion",
					"+104 to maximum Life",
					"+25% to Fire Resistance"
				],
				"pseudoMods": [
					"(pseudo) +25% total Elemental Resistance",
					"(pseudo) +115.5 total maximum Life",
					"Sum: 256"
				],
				"accountText": "ghaleonlt > Sephis",
				"whisper": "@Sephis Hi, I would like to buy your Nemesis Hoof Steelscale Boots listed for 1 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 10, top 3)",
				"priceText": "1 chaos",
				"valueExcludingProperties": 256,
				"evalValue": 256.133,
				"evalPrice": 1,
				"debug": {
					"id": "c128d9f5fca4f4c5e797b40c70dec37cfcc6a879207ec911eee7c907eaac7080",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-16T16:12:40Z",
						"stash": {
							"name": "~price 1 chaos",
							"x": 9,
							"y": 2
						},
						"whisper": "@Sephis Hi, I would like to buy your Nemesis Hoof Steelscale Boots listed for 1 chaos in Metamorph (stash tab \"~price 1 chaos\"; position: left 10, top 3)",
						"account": {
							"name": "ghaleonlt",
							"lastCharacterName": "Sephis",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrDex1.png?scale=1&w=2&h=2&v=a3cf4c2df53894a8e80f579b34661a4c",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Nemesis Hoof",
						"typeLine": "Steelscale Boots",
						"identified": true,
						"ilvl": 46,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"114",
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
										"77",
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
										"36",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"35",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"35",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+23 to Strength",
							"+24 to Dexterity",
							"+31 to Armour",
							"19% increased Armour and Evasion",
							"+104 to maximum Life",
							"+25% to Fire Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 90,
							"ev_aug": true,
							"ar": 133,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Scrapper's",
										"tier": "P7",
										"magnitudes": [
											{
												"hash": "explicit.stat_2451402625",
												"min": 15,
												"max": 26
											}
										]
									},
									{
										"name": "of the Falcon",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 23,
												"max": 27
											}
										]
									},
									{
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
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
										"name": "of the Lion",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 23,
												"max": 27
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											5
										]
									],
									[
										"explicit.stat_3261801346",
										[
											1
										]
									],
									[
										"explicit.stat_3484657501",
										[
											2
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
											2,
											3
										]
									],
									[
										"explicit.stat_3372524247",
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
							"text": "UmFyaXR5OiBSYXJlDQpOZW1lc2lzIEhvb2YNClN0ZWVsc2NhbGUgQm9vdHMNCi0tLS0tLS0tDQpBcm1vdXI6IDExNCAoYXVnbWVudGVkKQ0KRXZhc2lvbiBSYXRpbmc6IDc3IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDM2DQpTdHI6IDM1DQpEZXg6IDM1DQotLS0tLS0tLQ0KU29ja2V0czogRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA0Ng0KLS0tLS0tLS0NCisyMyB0byBTdHJlbmd0aA0KKzI0IHRvIERleHRlcml0eQ0KKzMxIHRvIEFybW91cg0KMTklIGluY3JlYXNlZCBBcm1vdXIgYW5kIEV2YXNpb24NCisxMDQgdG8gbWF4aW11bSBMaWZlDQorMjUlIHRvIEZpcmUgUmVzaXN0YW5jZQ0K"
						},
						"pseudoMods": [
							"(pseudo) +25% total Elemental Resistance",
							"(pseudo) +115.5 total maximum Life",
							"Sum: 256"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "081b41364e66b5a4578709b34773f47a7be7944561eec9b2790f7fc3d42970ee",
				"name": "Horror Track",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 64,
				"defenseProperties": [
					"evasion 362"
				],
				"implicitMods": [],
				"explicitMods": [
					"+25 to Dexterity",
					"+38 to Evasion Rating",
					"78% increased Evasion Rating",
					"+103 to maximum Life",
					"+9% to Cold Resistance",
					"+41% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +50% total Elemental Resistance",
					"(pseudo) +103 total maximum Life",
					"Sum: 256"
				],
				"accountText": "NekuReimu > DobrzeJestGBS",
				"whisper": "@DobrzeJestGBS Hi, I would like to buy your Horror Track Sharkskin Boots listed for 3 chaos in Metamorph (stash tab \"$$$\"; position: left 6, top 1)",
				"note": "~price 3 chaos",
				"priceText": "3 chaos",
				"valueExcludingProperties": 256,
				"evalValue": 256,
				"evalPrice": 3,
				"debug": {
					"id": "081b41364e66b5a4578709b34773f47a7be7944561eec9b2790f7fc3d42970ee",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-21T00:41:19Z",
						"stash": {
							"name": "$$$",
							"x": 5,
							"y": 0
						},
						"whisper": "@DobrzeJestGBS Hi, I would like to buy your Horror Track Sharkskin Boots listed for 3 chaos in Metamorph (stash tab \"$$$\"; position: left 6, top 1)",
						"account": {
							"name": "NekuReimu",
							"lastCharacterName": "DobrzeJestGBS",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex3.png?scale=1&w=2&h=2&v=597ff9da61bbd5547ef2b10d25b8e909",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Horror Track",
						"typeLine": "Sharkskin Boots",
						"identified": true,
						"ilvl": 64,
						"note": "~price 3 chaos",
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"326",
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
								"name": "Dex",
								"values": [
									[
										"79",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+25 to Dexterity",
							"+38 to Evasion Rating",
							"78% increased Evasion Rating",
							"+103 to maximum Life",
							"+9% to Cold Resistance",
							"+41% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 362,
							"ev_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Fawn's",
										"tier": "P1",
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
										"name": "of the Falcon",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_3261801346",
												"min": 23,
												"max": 27
											}
										]
									},
									{
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "Phantasm's",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 68,
												"max": 79
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
										"name": "of the Inuit",
										"tier": "S8",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 6,
												"max": 11
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_3261801346",
										[
											1
										]
									],
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_124859000",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
											2
										]
									],
									[
										"explicit.stat_4220027924",
										[
											5
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
							"text": "UmFyaXR5OiBSYXJlDQpIb3Jyb3IgVHJhY2sNClNoYXJrc2tpbiBCb290cw0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiAzMjYgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDgNCkRleDogNzkNCi0tLS0tLS0tDQpTb2NrZXRzOiBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDY0DQotLS0tLS0tLQ0KKzI1IHRvIERleHRlcml0eQ0KKzM4IHRvIEV2YXNpb24gUmF0aW5nDQo3OCUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorMTAzIHRvIG1heGltdW0gTGlmZQ0KKzklIHRvIENvbGQgUmVzaXN0YW5jZQ0KKzQxJSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAzIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +50% total Elemental Resistance",
							"(pseudo) +103 total maximum Life",
							"Sum: 256"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "978a0613dbf76c0a543a7242916c7243c957e3e065673f2e0806bd39917879b4",
				"name": "Hypnotic Spark",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"armour 204"
				],
				"implicitMods": [],
				"explicitMods": [
					"+19 to Armour",
					"+106 to maximum Life",
					"Regenerate 7.8 Life per second",
					"+44% to Fire Resistance"
				],
				"pseudoMods": [
					"(pseudo) +44% total Elemental Resistance",
					"(pseudo) +106 total maximum Life",
					"Sum: 256"
				],
				"accountText": "isdoggu > qwertythirteenMETAMORPH",
				"whisper": "@qwertythirteenMETAMORPH Hi, I would like to buy your Hypnotic Spark Ancient Greaves listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 3, top 11)",
				"priceText": "5 chaos",
				"valueExcludingProperties": 256,
				"evalValue": 256.204,
				"evalPrice": 5,
				"debug": {
					"id": "978a0613dbf76c0a543a7242916c7243c957e3e065673f2e0806bd39917879b4",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-19T01:50:03Z",
						"stash": {
							"name": "~b/o 5 chaos",
							"x": 2,
							"y": 10
						},
						"whisper": "@qwertythirteenMETAMORPH Hi, I would like to buy your Hypnotic Spark Ancient Greaves listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 3, top 11)",
						"account": {
							"name": "isdoggu",
							"lastCharacterName": "qwertythirteenMETAMORPH",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr3.png?scale=1&w=2&h=2&v=98f1f6d1137161abc1ef30ee82dadc62",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Hypnotic Spark",
						"typeLine": "Ancient Greaves",
						"identified": true,
						"ilvl": 72,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"170",
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
										"57",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"82",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+19 to Armour",
							"+106 to maximum Life",
							"Regenerate 7.8 Life per second",
							"+44% to Fire Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 204,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
										"name": "Oyster's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_3484657501",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
											3
										]
									],
									[
										"explicit.stat_3325883026",
										[
											1
										]
									],
									[
										"explicit.stat_3372524247",
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
							"text": "UmFyaXR5OiBSYXJlDQpIeXBub3RpYyBTcGFyaw0KQW5jaWVudCBHcmVhdmVzDQotLS0tLS0tLQ0KQXJtb3VyOiAxNzAgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTcNClN0cjogODINCi0tLS0tLS0tDQpTb2NrZXRzOiBSIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcyDQotLS0tLS0tLQ0KKzE5IHRvIEFybW91cg0KKzEwNiB0byBtYXhpbXVtIExpZmUNClJlZ2VuZXJhdGUgNy44IExpZmUgcGVyIHNlY29uZA0KKzQ0JSB0byBGaXJlIFJlc2lzdGFuY2UNCg=="
						},
						"pseudoMods": [
							"(pseudo) +44% total Elemental Resistance",
							"(pseudo) +106 total maximum Life",
							"Sum: 256"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "01d344318cd1895abdc916d33813d736de416502cc06ebf88c09e68996304628",
				"name": "Agony Spark",
				"sockets": [
					[
						"B",
						"B",
						"G",
						"B"
					]
				],
				"itemLevel": 54,
				"defenseProperties": [
					"energyShield 56"
				],
				"implicitMods": [],
				"explicitMods": [
					"+13 to maximum Energy Shield",
					"+113 to maximum Life",
					"+40 to maximum Mana",
					"+30% to Fire Resistance"
				],
				"pseudoMods": [
					"(pseudo) +30% total Elemental Resistance",
					"(pseudo) +113 total maximum Life",
					"Sum: 256"
				],
				"accountText": "PR1ME86 > hatar_melee",
				"whisper": "@hatar_melee Hi, I would like to buy your Agony Spark Conjurer Boots listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 3, top 7)",
				"priceText": "5 chaos",
				"valueExcludingProperties": 256,
				"evalValue": 256,
				"evalPrice": 5,
				"debug": {
					"id": "01d344318cd1895abdc916d33813d736de416502cc06ebf88c09e68996304628",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-14T03:47:42Z",
						"stash": {
							"name": "~price 5 chaos",
							"x": 2,
							"y": 6
						},
						"whisper": "@hatar_melee Hi, I would like to buy your Agony Spark Conjurer Boots listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 3, top 7)",
						"account": {
							"name": "PR1ME86",
							"lastCharacterName": "hatar_melee",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsInt4.png?scale=1&w=2&h=2&v=4808dffa0aa9745b57119af9319d0be3",
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
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Agony Spark",
						"typeLine": "Conjurer Boots",
						"identified": true,
						"ilvl": 54,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"47",
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
										"53",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"94",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+13 to maximum Energy Shield",
							"+113 to maximum Life",
							"+40 to maximum Mana",
							"+30% to Fire Resistance"
						],
						"enchantMods": [
							"60% increased Critical Strike Chance if you haven't Crit Recently"
						],
						"frameType": 2,
						"extended": {
							"es": 56,
							"es_aug": true,
							"mods": {
								"enchant": [
									{
										"name": "Enchantment Critical Strike Chance 1",
										"tier": "",
										"magnitudes": [
											{
												"hash": "enchant.stat_3010587200",
												"min": 60,
												"max": 60
											}
										]
									}
								],
								"explicit": [
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
										"name": "Prior's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_4052037485",
												"min": 11,
												"max": 15
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 24,
												"max": 28
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
								"enchant": [
									[
										"enchant.stat_3010587200",
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
											1,
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
							"text": "UmFyaXR5OiBSYXJlDQpBZ29ueSBTcGFyaw0KQ29uanVyZXIgQm9vdHMNCi0tLS0tLS0tDQpFbmVyZ3kgU2hpZWxkOiA0NyAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1Mw0KSW50OiA5NA0KLS0tLS0tLS0NClNvY2tldHM6IEItQi1HLUIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNTQNCi0tLS0tLS0tDQo2MCUgaW5jcmVhc2VkIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UgaWYgeW91IGhhdmVuJ3QgQ3JpdCBSZWNlbnRseQ0KLS0tLS0tLS0NCisxMyB0byBtYXhpbXVtIEVuZXJneSBTaGllbGQNCisxMTMgdG8gbWF4aW11bSBMaWZlDQorNDAgdG8gbWF4aW11bSBNYW5hDQorMzAlIHRvIEZpcmUgUmVzaXN0YW5jZQ0K"
						},
						"pseudoMods": [
							"(pseudo) +30% total Elemental Resistance",
							"(pseudo) +113 total maximum Life",
							"Sum: 256"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "9482bd647e4328987bf000020c94c144fc8eb84eebeaca8b0a6261aefa38e24f",
				"name": "Rapture Road",
				"sockets": [
					[
						"R"
					],
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
				"itemLevel": 54,
				"defenseProperties": [
					"evasion 221"
				],
				"implicitMods": [],
				"explicitMods": [
					"+39 to Evasion Rating",
					"+96 to maximum Life",
					"+28% to Cold Resistance",
					"+16% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +64% total Elemental Resistance",
					"(pseudo) +96 total maximum Life",
					"Sum: 256"
				],
				"accountText": "rjchaves93 > SlowMowGrowJow",
				"whisper": "@SlowMowGrowJow Hi, I would like to buy your Rapture Road Sharkskin Boots listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 1, top 11)",
				"priceText": "5 chaos",
				"valueExcludingProperties": 256,
				"evalValue": 256,
				"evalPrice": 5,
				"debug": {
					"id": "9482bd647e4328987bf000020c94c144fc8eb84eebeaca8b0a6261aefa38e24f",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-17T00:46:27Z",
						"stash": {
							"name": "~price 5 chaos",
							"x": 0,
							"y": 10
						},
						"whisper": "@SlowMowGrowJow Hi, I would like to buy your Rapture Road Sharkskin Boots listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 1, top 11)",
						"account": {
							"name": "rjchaves93",
							"lastCharacterName": "SlowMowGrowJow",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex3.png?scale=1&w=2&h=2&v=597ff9da61bbd5547ef2b10d25b8e909",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 2,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 3,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Rapture Road",
						"typeLine": "Sharkskin Boots",
						"identified": true,
						"ilvl": 54,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"184",
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
										"44",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"79",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+39 to Evasion Rating",
							"+96 to maximum Life",
							"+28% to Cold Resistance",
							"+16% to Lightning Resistance"
						],
						"craftedMods": [
							"+20% to Fire Resistance"
						],
						"enchantMods": [
							"50% chance to Avoid being Stunned if you've Killed Recently"
						],
						"frameType": 2,
						"extended": {
							"ev": 221,
							"ev_aug": true,
							"mods": {
								"enchant": [
									{
										"name": "Enchantment Stun Avoidance 1",
										"tier": "",
										"magnitudes": [
											{
												"hash": "enchant.stat_412905518",
												"min": 50,
												"max": 50
											}
										]
									}
								],
								"explicit": [
									{
										"name": "of the Yeti",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 24,
												"max": 29
											}
										]
									},
									{
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
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
										"name": "Fawn's",
										"tier": "P1",
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
									}
								],
								"crafted": [
									{
										"name": "of Craft",
										"tier": "R1",
										"magnitudes": [
											{
												"hash": "crafted.stat_3372524247",
												"min": 16,
												"max": 20
											}
										]
									}
								]
							},
							"hashes": {
								"enchant": [
									[
										"enchant.stat_412905518",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											3
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
										"explicit.stat_4220027924",
										[
											0
										]
									],
									[
										"explicit.stat_1671376347",
										[
											2
										]
									]
								],
								"crafted": [
									[
										"crafted.stat_3372524247",
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
							"text": "UmFyaXR5OiBSYXJlDQpSYXB0dXJlIFJvYWQNClNoYXJrc2tpbiBCb290cw0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiAxODQgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDQNCkRleDogNzkNCi0tLS0tLS0tDQpTb2NrZXRzOiBSIEIgRyBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDU0DQotLS0tLS0tLQ0KNTAlIGNoYW5jZSB0byBBdm9pZCBiZWluZyBTdHVubmVkIGlmIHlvdSd2ZSBLaWxsZWQgUmVjZW50bHkNCi0tLS0tLS0tDQorMzkgdG8gRXZhc2lvbiBSYXRpbmcNCis5NiB0byBtYXhpbXVtIExpZmUNCisyOCUgdG8gQ29sZCBSZXNpc3RhbmNlDQorMTYlIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQorMjAlIHRvIEZpcmUgUmVzaXN0YW5jZSAoY3JhZnRlZCkNCg=="
						},
						"pseudoMods": [
							"(pseudo) +64% total Elemental Resistance",
							"(pseudo) +96 total maximum Life",
							"Sum: 256"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "2d8bca3fbabc9c37d616c5328f4b2d4e80d473aa155365540fdb48feed444c2d",
				"name": "Glyph Track",
				"sockets": [
					[
						"B"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"energyShield 27"
				],
				"implicitMods": [],
				"explicitMods": [
					"+24 to Intelligence",
					"58% increased Energy Shield",
					"+85 to maximum Life",
					"+41% to Cold Resistance",
					"+45% to Lightning Resistance",
					"13% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +86% total Elemental Resistance",
					"(pseudo) +85 total maximum Life",
					"Sum: 256"
				],
				"accountText": "RuTma > Кряков",
				"whisper": "@Кряков Здравствуйте, хочу купить у вас Символический курс Шелковые сапоги за 5 chaos в лиге Метаморф (секция \"5\"; позиция: 5 столбец, 7 ряд)",
				"note": "~price 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 256,
				"evalValue": 256,
				"evalPrice": 5,
				"debug": {
					"id": "2d8bca3fbabc9c37d616c5328f4b2d4e80d473aa155365540fdb48feed444c2d",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-16T17:24:16Z",
						"stash": {
							"name": "5",
							"x": 4,
							"y": 6
						},
						"whisper": "@Кряков Здравствуйте, хочу купить у вас Символический курс Шелковые сапоги за 5 chaos в лиге Метаморф (секция \"5\"; позиция: 5 столбец, 7 ряд)",
						"account": {
							"name": "RuTma",
							"lastCharacterName": "Кряков",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsInt3.png?scale=1&w=2&h=2&v=77abd4784ad8e1666ac1b956c565a80e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Glyph Track",
						"typeLine": "Silk Slippers",
						"identified": true,
						"ilvl": 72,
						"note": "~price 5 chaos",
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"24",
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
										"57",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"42",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+24 to Intelligence",
							"58% increased Energy Shield",
							"+85 to maximum Life",
							"+41% to Cold Resistance",
							"+45% to Lightning Resistance",
							"13% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"es": 27,
							"es_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "of the Augur",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_328541901",
												"min": 23,
												"max": 27
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Strong-Willed",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_4015621042",
												"min": 27,
												"max": 42
											}
										]
									},
									{
										"name": "Naga's",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_4015621042",
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
								"explicit": [
									[
										"explicit.stat_328541901",
										[
											0
										]
									],
									[
										"explicit.stat_4015621042",
										[
											2,
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
										"explicit.stat_4220027924",
										[
											4
										]
									],
									[
										"explicit.stat_1671376347",
										[
											5
										]
									],
									[
										"explicit.stat_2511217560",
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
							"text": "UmFyaXR5OiBSYXJlDQpHbHlwaCBUcmFjaw0KU2lsayBTbGlwcGVycw0KLS0tLS0tLS0NCkVuZXJneSBTaGllbGQ6IDI0IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU3DQpJbnQ6IDQyDQotLS0tLS0tLQ0KU29ja2V0czogQiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3Mg0KLS0tLS0tLS0NCisyNCB0byBJbnRlbGxpZ2VuY2UNCjU4JSBpbmNyZWFzZWQgRW5lcmd5IFNoaWVsZA0KKzg1IHRvIG1heGltdW0gTGlmZQ0KKzQxJSB0byBDb2xkIFJlc2lzdGFuY2UNCis0NSUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCjEzJSBpbmNyZWFzZWQgU3R1biBhbmQgQmxvY2sgUmVjb3ZlcnkNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgNSBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +86% total Elemental Resistance",
							"(pseudo) +85 total maximum Life",
							"Sum: 256"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "60418e51c7bb444ebfb1e08871bfe3f8e2bbb691087b3789c6aa9f1d255a00c3",
				"name": "Doom Span",
				"sockets": [
					[
						"G"
					],
					[
						"G",
						"R"
					]
				],
				"itemLevel": 62,
				"defenseProperties": [
					"energyShield 78"
				],
				"implicitMods": [],
				"explicitMods": [
					"+44 to maximum Energy Shield",
					"+85 to maximum Life",
					"+37 to maximum Mana",
					"+32% to Fire Resistance",
					"+27% to Cold Resistance",
					"+27% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +86% total Elemental Resistance",
					"(pseudo) +85 total maximum Life",
					"Sum: 256"
				],
				"accountText": "sutuconvt > cafesuada_metamorph",
				"whisper": "@cafesuada_metamorph Hi, I would like to buy your Doom Span Conjurer Boots listed for 10 chaos in Metamorph (stash tab \"5\"; position: left 7, top 11)",
				"note": "~price 10 chaos",
				"priceText": "10 chaos",
				"valueExcludingProperties": 256,
				"evalValue": 256,
				"evalPrice": 10,
				"debug": {
					"id": "60418e51c7bb444ebfb1e08871bfe3f8e2bbb691087b3789c6aa9f1d255a00c3",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-21T00:15:42Z",
						"stash": {
							"name": "5",
							"x": 6,
							"y": 10
						},
						"whisper": "@cafesuada_metamorph Hi, I would like to buy your Doom Span Conjurer Boots listed for 10 chaos in Metamorph (stash tab \"5\"; position: left 7, top 11)",
						"account": {
							"name": "sutuconvt",
							"lastCharacterName": "cafesuada_metamorph",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsInt4.png?scale=1&w=2&h=2&v=4808dffa0aa9745b57119af9319d0be3",
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
								"group": 1,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Doom Span",
						"typeLine": "Conjurer Boots",
						"identified": true,
						"ilvl": 62,
						"note": "~price 10 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"78",
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
										"53",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"94",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+44 to maximum Energy Shield",
							"+85 to maximum Life",
							"+37 to maximum Mana",
							"+32% to Fire Resistance",
							"+27% to Cold Resistance",
							"+27% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"es": 78,
							"mods": {
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Cerulean",
										"tier": "P8",
										"magnitudes": [
											{
												"hash": "explicit.stat_1050105434",
												"min": 35,
												"max": 39
											}
										]
									},
									{
										"name": "of the Yeti",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 24,
												"max": 29
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
										"name": "Seething",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_4052037485",
												"min": 39,
												"max": 49
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4052037485",
										[
											5
										]
									],
									[
										"explicit.stat_3299347043",
										[
											1
										]
									],
									[
										"explicit.stat_1050105434",
										[
											2
										]
									],
									[
										"explicit.stat_3372524247",
										[
											4
										]
									],
									[
										"explicit.stat_4220027924",
										[
											3
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
							"text": "UmFyaXR5OiBSYXJlDQpEb29tIFNwYW4NCkNvbmp1cmVyIEJvb3RzDQotLS0tLS0tLQ0KRW5lcmd5IFNoaWVsZDogNzggKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTMNCkludDogOTQNCi0tLS0tLS0tDQpTb2NrZXRzOiBHIEctUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA2Mg0KLS0tLS0tLS0NCis0NCB0byBtYXhpbXVtIEVuZXJneSBTaGllbGQNCis4NSB0byBtYXhpbXVtIExpZmUNCiszNyB0byBtYXhpbXVtIE1hbmENCiszMiUgdG8gRmlyZSBSZXNpc3RhbmNlDQorMjclIHRvIENvbGQgUmVzaXN0YW5jZQ0KKzI3JSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAxMCBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +86% total Elemental Resistance",
							"(pseudo) +85 total maximum Life",
							"Sum: 256"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "64f318556c609ba517c913029a4a5c38323a9716ece72147775614e297608d48",
				"name": "Viper Dash",
				"sockets": [
					[
						"B"
					],
					[
						"R",
						"R"
					]
				],
				"itemLevel": 84,
				"defenseProperties": [
					"armour 212"
				],
				"implicitMods": [],
				"explicitMods": [
					"+16 to Strength",
					"+89 to maximum Life",
					"+33% to Fire Resistance",
					"+29% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +62% total Elemental Resistance",
					"(pseudo) +97 total maximum Life",
					"Sum: 256"
				],
				"accountText": "pigah > VendirTR",
				"whisper": "@VendirTR Hi, I would like to buy your Viper Dash Goliath Greaves listed for 10 chaos in Metamorph (stash tab \"6\"; position: left 7, top 11)",
				"note": "~price 10 chaos",
				"priceText": "10 chaos",
				"valueExcludingProperties": 256,
				"evalValue": 256.212,
				"evalPrice": 10,
				"debug": {
					"id": "64f318556c609ba517c913029a4a5c38323a9716ece72147775614e297608d48",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-20T21:27:20Z",
						"stash": {
							"name": "6",
							"x": 6,
							"y": 10
						},
						"whisper": "@VendirTR Hi, I would like to buy your Viper Dash Goliath Greaves listed for 10 chaos in Metamorph (stash tab \"6\"; position: left 7, top 11)",
						"account": {
							"name": "pigah",
							"lastCharacterName": "VendirTR",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
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
						"name": "Viper Dash",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 84,
						"note": "~price 10 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"177",
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
										"54",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+16 to Strength",
							"+89 to maximum Life",
							"+33% to Fire Resistance",
							"+29% to Lightning Resistance"
						],
						"craftedMods": [
							"22% increased Movement Speed"
						],
						"frameType": 2,
						"extended": {
							"ar": 212,
							"ar_aug": true,
							"mods": {
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
										"name": "of the Wrestler",
										"tier": "S8",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 13,
												"max": 17
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									}
								],
								"crafted": [
									{
										"name": "Upgraded",
										"tier": "R3",
										"magnitudes": [
											{
												"hash": "crafted.stat_2250533757",
												"min": 20,
												"max": 24
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
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
										"explicit.stat_3372524247",
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
								"crafted": [
									[
										"crafted.stat_2250533757",
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
							"text": "UmFyaXR5OiBSYXJlDQpWaXBlciBEYXNoDQpHb2xpYXRoIEdyZWF2ZXMNCi0tLS0tLS0tDQpBcm1vdXI6IDE3Nw0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1NA0KU3RyOiA5NQ0KLS0tLS0tLS0NClNvY2tldHM6IEIgUi1SIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDg0DQotLS0tLS0tLQ0KKzE2IHRvIFN0cmVuZ3RoDQorODkgdG8gbWF4aW11bSBMaWZlDQorMzMlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzI5JSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KMjIlIGluY3JlYXNlZCBNb3ZlbWVudCBTcGVlZCAoY3JhZnRlZCkNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMTAgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +62% total Elemental Resistance",
							"(pseudo) +97 total maximum Life",
							"Sum: 256"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "ec6a9690fb8085bc068d041556f981600fdf561e2a24b8921201caa061385f63",
				"name": "Maelström League",
				"sockets": [
					[
						"R",
						"R"
					]
				],
				"itemLevel": 71,
				"defenseProperties": [
					"armour 246"
				],
				"implicitMods": [],
				"explicitMods": [
					"+39 to Strength",
					"+28 to Armour",
					"+108 to maximum Life",
					"25% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +127.5 total maximum Life",
					"Sum: 255"
				],
				"accountText": "Sajanks > LimpDickRick",
				"whisper": "@LimpDickRick Hi, I would like to buy your Maelström League Goliath Greaves listed for 1 chaos in Metamorph (stash tab \"fs\"; position: left 1, top 1)",
				"note": "~b/o 1 chaos",
				"priceText": "1 chaos",
				"valueExcludingProperties": 255,
				"evalValue": 255.246,
				"evalPrice": 1,
				"debug": {
					"id": "ec6a9690fb8085bc068d041556f981600fdf561e2a24b8921201caa061385f63",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T21:28:59Z",
						"stash": {
							"name": "fs",
							"x": 0,
							"y": 0
						},
						"whisper": "@LimpDickRick Hi, I would like to buy your Maelström League Goliath Greaves listed for 1 chaos in Metamorph (stash tab \"fs\"; position: left 1, top 1)",
						"account": {
							"name": "Sajanks",
							"lastCharacterName": "LimpDickRick",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 1,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
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
						"name": "Maelström League",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 71,
						"note": "~b/o 1 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"205",
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
										"54",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+39 to Strength",
							"+28 to Armour",
							"+108 to maximum Life",
							"25% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 246,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Lacquered",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 3,
												"max": 10
											}
										]
									},
									{
										"name": "of Adamantite Skin",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_2511217560",
												"min": 23,
												"max": 25
											}
										]
									},
									{
										"name": "Oyster's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
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
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											4
										]
									],
									[
										"explicit.stat_3484657501",
										[
											1,
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
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
							"text": "UmFyaXR5OiBSYXJlDQpNYWVsc3Ryw7ZtIExlYWd1ZQ0KR29saWF0aCBHcmVhdmVzDQotLS0tLS0tLQ0KQXJtb3VyOiAyMDUgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTQNClN0cjogOTUNCi0tLS0tLS0tDQpTb2NrZXRzOiBSLVIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzENCi0tLS0tLS0tDQorMzkgdG8gU3RyZW5ndGgNCisyOCB0byBBcm1vdXINCisxMDggdG8gbWF4aW11bSBMaWZlDQoyNSUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQotLS0tLS0tLQ0KTm90ZTogfmIvbyAxIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +127.5 total maximum Life",
							"Sum: 255"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "d56210e99f4efb74f42d68388338d7e1a1c606855cc8ad3a14743fa9a6387d06",
				"name": "Armageddon Dash",
				"sockets": [
					[
						"R",
						"G"
					]
				],
				"itemLevel": 69,
				"defenseProperties": [
					"evasion 422"
				],
				"implicitMods": [],
				"explicitMods": [
					"+26 to Evasion Rating",
					"55% increased Evasion Rating",
					"+108 to maximum Life",
					"+23% to Fire Resistance",
					"+16% to Lightning Resistance",
					"13% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +39% total Elemental Resistance",
					"(pseudo) +108 total maximum Life",
					"Sum: 255"
				],
				"accountText": "Metregnome > MetremorphSummoner",
				"whisper": "@MetremorphSummoner Hi, I would like to buy your Armageddon Dash Slink Boots listed for 2 chaos in Metamorph (stash tab \"$\"; position: left 1, top 11)",
				"note": "~price 2 chaos",
				"priceText": "2 chaos",
				"valueExcludingProperties": 255,
				"evalValue": 255,
				"evalPrice": 2,
				"debug": {
					"id": "d56210e99f4efb74f42d68388338d7e1a1c606855cc8ad3a14743fa9a6387d06",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-17T00:57:11Z",
						"stash": {
							"name": "$",
							"x": 0,
							"y": 10
						},
						"whisper": "@MetremorphSummoner Hi, I would like to buy your Armageddon Dash Slink Boots listed for 2 chaos in Metamorph (stash tab \"$\"; position: left 1, top 11)",
						"account": {
							"name": "Metregnome",
							"lastCharacterName": "MetremorphSummoner",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
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
						"name": "Armageddon Dash",
						"typeLine": "Slink Boots",
						"identified": true,
						"ilvl": 69,
						"note": "~price 2 chaos",
						"corrupted": true,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"422",
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
										"69",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+26 to Evasion Rating",
							"55% increased Evasion Rating",
							"+108 to maximum Life",
							"+23% to Fire Resistance",
							"+16% to Lightning Resistance",
							"13% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ev": 422,
							"mods": {
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Spectre's",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_124859000",
												"min": 43,
												"max": 55
											}
										]
									},
									{
										"name": "Fawn's",
										"tier": "P1",
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
										"name": "of the Drake",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 18,
												"max": 23
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											3
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
											1,
											3
										]
									],
									[
										"explicit.stat_3372524247",
										[
											5
										]
									],
									[
										"explicit.stat_1671376347",
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
							"text": "UmFyaXR5OiBSYXJlDQpBcm1hZ2VkZG9uIERhc2gNClNsaW5rIEJvb3RzDQotLS0tLS0tLQ0KRXZhc2lvbiBSYXRpbmc6IDQyMiAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2OQ0KRGV4OiAxMjANCi0tLS0tLS0tDQpTb2NrZXRzOiBSLUcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNjkNCi0tLS0tLS0tDQorMjYgdG8gRXZhc2lvbiBSYXRpbmcNCjU1JSBpbmNyZWFzZWQgRXZhc2lvbiBSYXRpbmcNCisxMDggdG8gbWF4aW11bSBMaWZlDQorMjMlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzE2JSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KMTMlIGluY3JlYXNlZCBTdHVuIGFuZCBCbG9jayBSZWNvdmVyeQ0KLS0tLS0tLS0NCkNvcnJ1cHRlZA0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAyIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +39% total Elemental Resistance",
							"(pseudo) +108 total maximum Life",
							"Sum: 255"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "790204589fca9a1a9e58bd3aaf2a73bcfc58cb60ce8a6c2e3f193e0120479bcc",
				"name": "Beast Goad",
				"sockets": [
					[
						"G",
						"R"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"armour 140",
					"evasion 161"
				],
				"implicitMods": [],
				"explicitMods": [
					"+14 to Evasion Rating",
					"32% increased Armour and Evasion",
					"+94 to maximum Life",
					"Regenerate 10.4 Life per second",
					"+43% to Fire Resistance",
					"+24% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +67% total Elemental Resistance",
					"(pseudo) +94 total maximum Life",
					"Sum: 255"
				],
				"accountText": "ZMoKe > TRONCHU",
				"whisper": "@TRONCHU Hi, I would like to buy your Beast Goad Wyrmscale Boots listed for 10 alch in Metamorph (stash tab \"Normal 1\"; position: left 7, top 3)",
				"note": "~price 10 alch",
				"priceText": "10 alch",
				"valueExcludingProperties": 255,
				"evalValue": 255.14,
				"evalPrice": 5,
				"debug": {
					"id": "790204589fca9a1a9e58bd3aaf2a73bcfc58cb60ce8a6c2e3f193e0120479bcc",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-19T01:26:59Z",
						"stash": {
							"name": "Normal 1",
							"x": 6,
							"y": 2
						},
						"whisper": "@TRONCHU Hi, I would like to buy your Beast Goad Wyrmscale Boots listed for 10 alch in Metamorph (stash tab \"Normal 1\"; position: left 7, top 3)",
						"account": {
							"name": "ZMoKe",
							"lastCharacterName": "TRONCHU",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~price",
							"amount": 10,
							"currency": "alch"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrDex3.png?scale=1&w=2&h=2&v=601dc135a14c1121dca118c2640a1335",
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
						"name": "Beast Goad",
						"typeLine": "Wyrmscale Boots",
						"identified": true,
						"ilvl": 72,
						"note": "~price 10 alch",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"121",
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
										"140",
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
										"57",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"48",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+14 to Evasion Rating",
							"32% increased Armour and Evasion",
							"+94 to maximum Life",
							"Regenerate 10.4 Life per second",
							"+43% to Fire Resistance",
							"+24% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 161,
							"ev_aug": true,
							"ar": 140,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "of the Yeti",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 24,
												"max": 29
											}
										]
									},
									{
										"name": "Brawler's",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_2451402625",
												"min": 27,
												"max": 42
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
										"name": "Flea's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											5
										]
									],
									[
										"explicit.stat_2451402625",
										[
											2
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
											5
										]
									],
									[
										"explicit.stat_3325883026",
										[
											4
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
							"text": "UmFyaXR5OiBSYXJlDQpCZWFzdCBHb2FkDQpXeXJtc2NhbGUgQm9vdHMNCi0tLS0tLS0tDQpBcm1vdXI6IDEyMSAoYXVnbWVudGVkKQ0KRXZhc2lvbiBSYXRpbmc6IDE0MCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1Nw0KU3RyOiA0OA0KRGV4OiA0OA0KLS0tLS0tLS0NClNvY2tldHM6IEctUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3Mg0KLS0tLS0tLS0NCisxNCB0byBFdmFzaW9uIFJhdGluZw0KMzIlIGluY3JlYXNlZCBBcm1vdXIgYW5kIEV2YXNpb24NCis5NCB0byBtYXhpbXVtIExpZmUNClJlZ2VuZXJhdGUgMTAuNCBMaWZlIHBlciBzZWNvbmQNCis0MyUgdG8gRmlyZSBSZXNpc3RhbmNlDQorMjQlIHRvIENvbGQgUmVzaXN0YW5jZQ0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAxMCBhbGNoDQo="
						},
						"pseudoMods": [
							"(pseudo) +67% total Elemental Resistance",
							"(pseudo) +94 total maximum Life",
							"Sum: 255"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "2aa331c1104d0f7471c64f5e3391d9f77ffa67bfbb841fa4e2ce851e15634b72",
				"name": "Grim Spur",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 79,
				"defenseProperties": [
					"evasion 300",
					"energyShield 28"
				],
				"implicitMods": [],
				"explicitMods": [
					"42% increased Evasion and Energy Shield",
					"+84 to maximum Life",
					"Regenerate 13.2 Life per second",
					"+44% to Fire Resistance",
					"+43% to Cold Resistance",
					"16% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +87% total Elemental Resistance",
					"(pseudo) +84 total maximum Life",
					"Sum: 255"
				],
				"accountText": "voodooxdxd > necrovodekmeta",
				"whisper": "@necrovodekmeta Hi, I would like to buy your Grim Spur Murder Boots listed for 5 chaos in Metamorph (stash tab \"sk\"; position: left 8, top 4)",
				"note": "~price 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 255,
				"evalValue": 255,
				"evalPrice": 5,
				"debug": {
					"id": "2aa331c1104d0f7471c64f5e3391d9f77ffa67bfbb841fa4e2ce851e15634b72",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-17T11:24:12Z",
						"stash": {
							"name": "sk",
							"x": 7,
							"y": 3
						},
						"whisper": "@necrovodekmeta Hi, I would like to buy your Grim Spur Murder Boots listed for 5 chaos in Metamorph (stash tab \"sk\"; position: left 8, top 4)",
						"account": {
							"name": "voodooxdxd",
							"lastCharacterName": "necrovodekmeta",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDexInt4.png?scale=1&w=2&h=2&v=bfbd6b83d1a5a8dafbae030a0041b5fe",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Grim Spur",
						"typeLine": "Murder Boots",
						"identified": true,
						"ilvl": 79,
						"note": "~price 5 chaos",
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"263",
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
										"24",
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
								"name": "Dex",
								"values": [
									[
										"82",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"42",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"42% increased Evasion and Energy Shield",
							"+84 to maximum Life",
							"Regenerate 13.2 Life per second",
							"+44% to Fire Resistance",
							"+43% to Cold Resistance",
							"16% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ev": 300,
							"ev_aug": true,
							"es": 28,
							"es_aug": true,
							"mods": {
								"explicit": [
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
										"name": "of the Troll",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3325883026",
												"min": 13,
												"max": 16
											}
										]
									},
									{
										"name": "Hummingbird's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_1999113824",
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_1999113824",
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
										"explicit.stat_3325883026",
										[
											2
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
											0
										]
									],
									[
										"explicit.stat_2511217560",
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
							"text": "UmFyaXR5OiBSYXJlDQpHcmltIFNwdXINCk11cmRlciBCb290cw0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiAyNjMgKGF1Z21lbnRlZCkNCkVuZXJneSBTaGllbGQ6IDI0IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY5DQpEZXg6IDgyDQpJbnQ6IDQyDQotLS0tLS0tLQ0KU29ja2V0czogRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3OQ0KLS0tLS0tLS0NCjQyJSBpbmNyZWFzZWQgRXZhc2lvbiBhbmQgRW5lcmd5IFNoaWVsZA0KKzg0IHRvIG1heGltdW0gTGlmZQ0KUmVnZW5lcmF0ZSAxMy4yIExpZmUgcGVyIHNlY29uZA0KKzQ0JSB0byBGaXJlIFJlc2lzdGFuY2UNCis0MyUgdG8gQ29sZCBSZXNpc3RhbmNlDQoxNiUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDUgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +87% total Elemental Resistance",
							"(pseudo) +84 total maximum Life",
							"Sum: 255"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "d637f12bffffe15cbd6a0580c5a440d863d32a6577da459a275399e39011bae2",
				"name": "Gloom Dash",
				"sockets": [
					[
						"G",
						"G",
						"G",
						"R"
					]
				],
				"itemLevel": 70,
				"defenseProperties": [
					"evasion 260"
				],
				"implicitMods": [],
				"explicitMods": [
					"+37 to Evasion Rating",
					"+112 to maximum Life",
					"Regenerate 7.8 Life per second",
					"+31% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +31% total Elemental Resistance",
					"(pseudo) +112 total maximum Life",
					"Sum: 255"
				],
				"accountText": "Athennna > ImpaleSomeAthena",
				"whisper": "@ImpaleSomeAthena Hi, I would like to buy your Gloom Dash Shagreen Boots listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 2, top 11)",
				"priceText": "10 chaos",
				"valueExcludingProperties": 255,
				"evalValue": 255,
				"evalPrice": 10,
				"debug": {
					"id": "d637f12bffffe15cbd6a0580c5a440d863d32a6577da459a275399e39011bae2",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-14T20:33:20Z",
						"stash": {
							"name": "~price 10 chaos",
							"x": 1,
							"y": 10
						},
						"whisper": "@ImpaleSomeAthena Hi, I would like to buy your Gloom Dash Shagreen Boots listed for 10 chaos in Metamorph (stash tab \"~price 10 chaos\"; position: left 2, top 11)",
						"account": {
							"name": "Athennna",
							"lastCharacterName": "ImpaleSomeAthena",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
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
						"name": "Gloom Dash",
						"typeLine": "Shagreen Boots",
						"identified": true,
						"ilvl": 70,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"217",
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
										"97",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+37 to Evasion Rating",
							"+112 to maximum Life",
							"Regenerate 7.8 Life per second",
							"+31% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 260,
							"ev_aug": true,
							"mods": {
								"explicit": [
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
									},
									{
										"name": "Fawn's",
										"tier": "P1",
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
										"name": "of the Starfish",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3325883026",
												"min": 7,
												"max": 10
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											1
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
										"explicit.stat_3325883026",
										[
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
							"text": "UmFyaXR5OiBSYXJlDQpHbG9vbSBEYXNoDQpTaGFncmVlbiBCb290cw0KLS0tLS0tLS0NCkV2YXNpb24gUmF0aW5nOiAyMTcgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTUNCkRleDogOTcNCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUctRy1SIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcwDQotLS0tLS0tLQ0KKzM3IHRvIEV2YXNpb24gUmF0aW5nDQorMTEyIHRvIG1heGltdW0gTGlmZQ0KUmVnZW5lcmF0ZSA3LjggTGlmZSBwZXIgc2Vjb25kDQorMzElIHRvIENvbGQgUmVzaXN0YW5jZQ0K"
						},
						"pseudoMods": [
							"(pseudo) +31% total Elemental Resistance",
							"(pseudo) +112 total maximum Life",
							"Sum: 255"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "3cb665e09d4f2b72ecc6dbbedc17c1ca5e637471d3919ee0a91565c07bbc4252",
				"name": "Ghoul Span",
				"sockets": [
					[
						"R",
						"R"
					]
				],
				"itemLevel": 74,
				"defenseProperties": [
					"armour 289"
				],
				"implicitMods": [],
				"explicitMods": [
					"+21 to Strength",
					"+76 to maximum Life",
					"+45% to Fire Resistance",
					"+37% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +82% total Elemental Resistance",
					"(pseudo) +86.5 total maximum Life",
					"Sum: 255"
				],
				"accountText": "splashfire1 > Betamorphs",
				"whisper": "@Betamorphs Hi, I would like to buy your Ghoul Span Titan Greaves listed for 10 chaos in Metamorph (stash tab \"sell\"; position: left 10, top 9)",
				"note": "~b/o 10 chaos",
				"priceText": "10 chaos",
				"valueExcludingProperties": 255,
				"evalValue": 255.289,
				"evalPrice": 10,
				"debug": {
					"id": "3cb665e09d4f2b72ecc6dbbedc17c1ca5e637471d3919ee0a91565c07bbc4252",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-14T21:28:06Z",
						"stash": {
							"name": "sell",
							"x": 9,
							"y": 8
						},
						"whisper": "@Betamorphs Hi, I would like to buy your Ghoul Span Titan Greaves listed for 10 chaos in Metamorph (stash tab \"sell\"; position: left 10, top 9)",
						"account": {
							"name": "splashfire1",
							"lastCharacterName": "Betamorphs",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
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
						"name": "Ghoul Span",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 74,
						"note": "~b/o 10 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"241",
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
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+21 to Strength",
							"+76 to maximum Life",
							"+45% to Fire Resistance",
							"+37% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 289,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
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
										"name": "of the Magma",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 42,
												"max": 45
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
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
							"text": "UmFyaXR5OiBSYXJlDQpHaG91bCBTcGFuDQpUaXRhbiBHcmVhdmVzDQotLS0tLS0tLQ0KQXJtb3VyOiAyNDENCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjgNClN0cjogMTIwDQotLS0tLS0tLQ0KU29ja2V0czogUi1SIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc0DQotLS0tLS0tLQ0KKzIxIHRvIFN0cmVuZ3RoDQorNzYgdG8gbWF4aW11bSBMaWZlDQorNDUlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzM3JSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KLS0tLS0tLS0NCk5vdGU6IH5iL28gMTAgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +82% total Elemental Resistance",
							"(pseudo) +86.5 total maximum Life",
							"Sum: 255"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "af2f07381a9a9933daab62c89f90b1de91d3f541fadad93b2bb76eced852685e",
				"name": "Grim Hoof",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 71,
				"defenseProperties": [
					"armour 180",
					"evasion 162"
				],
				"implicitMods": [
					"+11% to Fire and Cold Resistances"
				],
				"explicitMods": [
					"+24 to Armour",
					"+9 to Evasion Rating",
					"+88 to maximum Life",
					"+27% to Fire Resistance",
					"+30% to Lightning Resistance",
					"15% increased Movement Speed"
				],
				"pseudoMods": [
					"(pseudo) +79% total Elemental Resistance",
					"(pseudo) +88 total maximum Life",
					"Sum: 255"
				],
				"accountText": "averse0915 > BBDotMetamorphSpecAgain",
				"whisper": "@BBDotMetamorphSpecAgain Hi, I would like to buy your Grim Hoof Two-Toned Boots listed for 10 chaos in Metamorph (stash tab \"sell\"; position: left 11, top 3)",
				"note": "~price 10 chaos",
				"priceText": "10 chaos",
				"valueExcludingProperties": 255,
				"evalValue": 255.18,
				"evalPrice": 10,
				"debug": {
					"id": "af2f07381a9a9933daab62c89f90b1de91d3f541fadad93b2bb76eced852685e",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T13:51:54Z",
						"stash": {
							"name": "sell",
							"x": 10,
							"y": 2
						},
						"whisper": "@BBDotMetamorphSpecAgain Hi, I would like to buy your Grim Hoof Two-Toned Boots listed for 10 chaos in Metamorph (stash tab \"sell\"; position: left 11, top 3)",
						"account": {
							"name": "averse0915",
							"lastCharacterName": "BBDotMetamorphSpecAgain",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/TwoTonedBoots2B.png?scale=1&w=2&h=2&v=435eaf7c0d9a50d4c6cf92eed702ffb7",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Grim Hoof",
						"typeLine": "Two-Toned Boots",
						"identified": true,
						"ilvl": 71,
						"note": "~price 10 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"150",
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
										"135",
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
										"62",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+11% to Fire and Cold Resistances"
						],
						"explicitMods": [
							"+24 to Armour",
							"+9 to Evasion Rating",
							"+88 to maximum Life",
							"+27% to Fire Resistance",
							"+30% to Lightning Resistance",
							"15% increased Movement Speed"
						],
						"frameType": 2,
						"extended": {
							"ev": 162,
							"ev_aug": true,
							"ar": 180,
							"ar_aug": true,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_2915988346",
												"min": 8,
												"max": 12
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
										"name": "Sprinter's",
										"tier": "P5",
										"magnitudes": [
											{
												"hash": "explicit.stat_2250533757",
												"min": 15,
												"max": 15
											}
										]
									},
									{
										"name": "Pliant",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 9,
												"max": 25
											},
											{
												"hash": "explicit.stat_53045048",
												"min": 9,
												"max": 25
											}
										]
									}
								]
							},
							"hashes": {
								"implicit": [
									[
										"implicit.stat_2915988346",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_3484657501",
										[
											4
										]
									],
									[
										"explicit.stat_53045048",
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
									],
									[
										"explicit.stat_2250533757",
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
							"text": "UmFyaXR5OiBSYXJlDQpHcmltIEhvb2YNClR3by1Ub25lZCBCb290cw0KLS0tLS0tLS0NCkFybW91cjogMTUwIChhdWdtZW50ZWQpDQpFdmFzaW9uIFJhdGluZzogMTM1IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDcwDQpTdHI6IDYyDQpEZXg6IDYyDQotLS0tLS0tLQ0KU29ja2V0czogUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3MQ0KLS0tLS0tLS0NCisxMSUgdG8gRmlyZSBhbmQgQ29sZCBSZXNpc3RhbmNlcyAoaW1wbGljaXQpDQotLS0tLS0tLQ0KKzI0IHRvIEFybW91cg0KKzkgdG8gRXZhc2lvbiBSYXRpbmcNCis4OCB0byBtYXhpbXVtIExpZmUNCisyNyUgdG8gRmlyZSBSZXNpc3RhbmNlDQorMzAlIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQoxNSUgaW5jcmVhc2VkIE1vdmVtZW50IFNwZWVkDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDEwIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +79% total Elemental Resistance",
							"(pseudo) +88 total maximum Life",
							"Sum: 255"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "841323483031d42958e718d00e7654d7f1268d0cdbaa06b42056015e94c98a05",
				"name": "Vengeance Dash",
				"sockets": [
					[
						"R"
					],
					[
						"R"
					]
				],
				"itemLevel": 73,
				"defenseProperties": [
					"armour 296"
				],
				"implicitMods": [],
				"explicitMods": [
					"+15 to Armour",
					"34% increased Armour",
					"+106 to maximum Life",
					"Regenerate 2.3 Life per second",
					"+42% to Fire Resistance",
					"35% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +42% total Elemental Resistance",
					"(pseudo) +106 total maximum Life",
					"Sum: 254"
				],
				"accountText": "Wipes > Oniry",
				"whisper": "@Oniry Hi, I would like to buy your Vengeance Dash Goliath Greaves listed for 2 chaos in Metamorph (stash tab \"$\"; position: left 1, top 1)",
				"note": "~price 2 chaos",
				"priceText": "2 chaos",
				"valueExcludingProperties": 254,
				"evalValue": 254.296,
				"evalPrice": 2,
				"debug": {
					"id": "841323483031d42958e718d00e7654d7f1268d0cdbaa06b42056015e94c98a05",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-18T16:41:46Z",
						"stash": {
							"name": "$",
							"x": 0,
							"y": 0
						},
						"whisper": "@Oniry Hi, I would like to buy your Vengeance Dash Goliath Greaves listed for 2 chaos in Metamorph (stash tab \"$\"; position: left 1, top 1)",
						"account": {
							"name": "Wipes",
							"lastCharacterName": "Oniry",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
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
						"name": "Vengeance Dash",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 73,
						"note": "~price 2 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"257",
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
										"57",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+15 to Armour",
							"34% increased Armour",
							"+106 to maximum Life",
							"Regenerate 2.3 Life per second",
							"+42% to Fire Resistance",
							"35% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 296,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Oyster's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
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
										"name": "of Steel Skin",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_2511217560",
												"min": 20,
												"max": 22
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
										"name": "Elephant's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
												"min": 33,
												"max": 38
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 14,
												"max": 15
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_3484657501",
										[
											1
										]
									],
									[
										"explicit.stat_1062208444",
										[
											5
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
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
										"explicit.stat_3372524247",
										[
											4
										]
									],
									[
										"explicit.stat_2511217560",
										[
											3,
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
							"text": "UmFyaXR5OiBSYXJlDQpWZW5nZWFuY2UgRGFzaA0KR29saWF0aCBHcmVhdmVzDQotLS0tLS0tLQ0KQXJtb3VyOiAyNTcgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTcNClN0cjogOTUNCi0tLS0tLS0tDQpTb2NrZXRzOiBSIFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzMNCi0tLS0tLS0tDQorMTUgdG8gQXJtb3VyDQozNCUgaW5jcmVhc2VkIEFybW91cg0KKzEwNiB0byBtYXhpbXVtIExpZmUNClJlZ2VuZXJhdGUgMi4zIExpZmUgcGVyIHNlY29uZA0KKzQyJSB0byBGaXJlIFJlc2lzdGFuY2UNCjM1JSBpbmNyZWFzZWQgU3R1biBhbmQgQmxvY2sgUmVjb3ZlcnkNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMiBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +42% total Elemental Resistance",
							"(pseudo) +106 total maximum Life",
							"Sum: 254"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "b71060f7eee50da410f962ae9779600938f7ced4c6c962859ca70d1529ba8532",
				"name": "Tempest League",
				"sockets": [
					[
						"R",
						"R"
					],
					[
						"G"
					],
					[
						"G"
					]
				],
				"itemLevel": 72,
				"defenseProperties": [
					"armour 138",
					"evasion 172"
				],
				"implicitMods": [],
				"explicitMods": [
					"+26 to Evasion Rating",
					"10% increased Armour and Evasion",
					"+114 to maximum Life",
					"14% increased Rarity of Items found",
					"+26% to Cold Resistance",
					"6% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +26% total Elemental Resistance",
					"(pseudo) +114 total maximum Life",
					"Sum: 254"
				],
				"accountText": "littleruk > somethingblahh",
				"whisper": "@somethingblahh Hi, I would like to buy your Tempest League Hydrascale Boots listed for 2 chaos in Metamorph (stash tab \"~price 2 chaos\"; position: left 5, top 4)",
				"priceText": "2 chaos",
				"valueExcludingProperties": 254,
				"evalValue": 254.138,
				"evalPrice": 2,
				"debug": {
					"id": "b71060f7eee50da410f962ae9779600938f7ced4c6c962859ca70d1529ba8532",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-20T14:54:58Z",
						"stash": {
							"name": "~price 2 chaos",
							"x": 4,
							"y": 3
						},
						"whisper": "@somethingblahh Hi, I would like to buy your Tempest League Hydrascale Boots listed for 2 chaos in Metamorph (stash tab \"~price 2 chaos\"; position: left 5, top 4)",
						"account": {
							"name": "littleruk",
							"lastCharacterName": "somethingblahh",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrDex2.png?scale=1&w=2&h=2&v=bdfb39d9a0b60c4ac542bedd8ff06e08",
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
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 2,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Tempest League",
						"typeLine": "Hydrascale Boots",
						"identified": true,
						"ilvl": 72,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"117",
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
										"145",
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
										"56",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"56",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+26 to Evasion Rating",
							"10% increased Armour and Evasion",
							"+114 to maximum Life",
							"14% increased Rarity of Items found",
							"+26% to Cold Resistance",
							"6% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ev": 172,
							"ev_aug": true,
							"ar": 138,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "of Raiding",
										"tier": "S1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 11,
												"max": 14
											}
										]
									},
									{
										"name": "Beetle's",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_2451402625",
												"min": 6,
												"max": 13
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 6,
												"max": 7
											}
										]
									},
									{
										"name": "Fawn's",
										"tier": "P1",
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "of the Yeti",
										"tier": "S5",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 24,
												"max": 29
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											2
										]
									],
									[
										"explicit.stat_2451402625",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2,
											3
										]
									],
									[
										"explicit.stat_3917489142",
										[
											0
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
							"text": "UmFyaXR5OiBSYXJlDQpUZW1wZXN0IExlYWd1ZQ0KSHlkcmFzY2FsZSBCb290cw0KLS0tLS0tLS0NCkFybW91cjogMTE3IChhdWdtZW50ZWQpDQpFdmFzaW9uIFJhdGluZzogMTQ1IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU5DQpTdHI6IDU2DQpEZXg6IDU2DQotLS0tLS0tLQ0KU29ja2V0czogUi1SIEcgRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3Mg0KLS0tLS0tLS0NCisyNiB0byBFdmFzaW9uIFJhdGluZw0KMTAlIGluY3JlYXNlZCBBcm1vdXIgYW5kIEV2YXNpb24NCisxMTQgdG8gbWF4aW11bSBMaWZlDQoxNCUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBmb3VuZA0KKzI2JSB0byBDb2xkIFJlc2lzdGFuY2UNCjYlIGluY3JlYXNlZCBTdHVuIGFuZCBCbG9jayBSZWNvdmVyeQ0K"
						},
						"pseudoMods": [
							"(pseudo) +26% total Elemental Resistance",
							"(pseudo) +114 total maximum Life",
							"Sum: 254"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "1bc48933341c2d1ece5d1707fdce46e77d939c90e15502919bb19b5ddaf328e8",
				"name": "Pain Slippers",
				"sockets": [
					[
						"R",
						"R",
						"R"
					]
				],
				"itemLevel": 74,
				"defenseProperties": [
					"armour 289"
				],
				"implicitMods": [],
				"explicitMods": [
					"+36 to Strength",
					"+84 to maximum Life",
					"+11% to Fire Resistance",
					"+39% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +50% total Elemental Resistance",
					"(pseudo) +102 total maximum Life",
					"Sum: 254"
				],
				"accountText": "Mshift > MxShift",
				"whisper": "@MxShift Hi, I would like to buy your Pain Slippers Titan Greaves listed for 3 chaos in Metamorph (stash tab \"S\"; position: left 17, top 1)",
				"note": "~price 3 chaos",
				"priceText": "3 chaos",
				"valueExcludingProperties": 254,
				"evalValue": 254.289,
				"evalPrice": 3,
				"debug": {
					"id": "1bc48933341c2d1ece5d1707fdce46e77d939c90e15502919bb19b5ddaf328e8",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-18T19:37:10Z",
						"stash": {
							"name": "S",
							"x": 16,
							"y": 0
						},
						"whisper": "@MxShift Hi, I would like to buy your Pain Slippers Titan Greaves listed for 3 chaos in Metamorph (stash tab \"S\"; position: left 17, top 1)",
						"account": {
							"name": "Mshift",
							"lastCharacterName": "MxShift",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
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
							}
						],
						"name": "Pain Slippers",
						"typeLine": "Titan Greaves",
						"identified": true,
						"ilvl": 74,
						"note": "~price 3 chaos",
						"properties": [
							{
								"name": "Quality",
								"values": [
									[
										"+5%",
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
										"253",
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
										"120",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+36 to Strength",
							"+84 to maximum Life",
							"+11% to Fire Resistance",
							"+39% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 289,
							"ar_aug": true,
							"mods": {
								"explicit": [
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
										"name": "of the Goliath",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 33,
												"max": 37
											}
										]
									},
									{
										"name": "of the Whelpling",
										"tier": "S8",
										"magnitudes": [
											{
												"hash": "explicit.stat_3372524247",
												"min": 6,
												"max": 11
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
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
							"text": "UmFyaXR5OiBSYXJlDQpQYWluIFNsaXBwZXJzDQpUaXRhbiBHcmVhdmVzDQotLS0tLS0tLQ0KUXVhbGl0eTogKzUlIChhdWdtZW50ZWQpDQpBcm1vdXI6IDI1MyAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2OA0KU3RyOiAxMjANCi0tLS0tLS0tDQpTb2NrZXRzOiBSLVItUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3NA0KLS0tLS0tLS0NCiszNiB0byBTdHJlbmd0aA0KKzg0IHRvIG1heGltdW0gTGlmZQ0KKzExJSB0byBGaXJlIFJlc2lzdGFuY2UNCiszOSUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMyBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +50% total Elemental Resistance",
							"(pseudo) +102 total maximum Life",
							"Sum: 254"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "cd30a34fb2faa95cd2e11e38397daefbe0b44bbdc57524972592f1c0d2c3647a",
				"name": "Rune Goad",
				"sockets": [
					[
						"G",
						"G"
					],
					[
						"B",
						"G"
					]
				],
				"itemLevel": 70,
				"defenseProperties": [
					"evasion 199"
				],
				"implicitMods": [],
				"explicitMods": [
					"+18 to Evasion Rating",
					"32% increased Evasion Rating",
					"+110 to maximum Life",
					"+34% to Lightning Resistance",
					"13% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +34% total Elemental Resistance",
					"(pseudo) +110 total maximum Life",
					"Sum: 254"
				],
				"accountText": "Than2014 > KingBold",
				"whisper": "@KingBold Hi, I would like to buy your Rune Goad Nubuck Boots listed for 4 chaos in Metamorph (stash tab \"~price 4 chaos\"; position: left 1, top 9)",
				"priceText": "4 chaos",
				"valueExcludingProperties": 254,
				"evalValue": 254,
				"evalPrice": 4,
				"debug": {
					"id": "cd30a34fb2faa95cd2e11e38397daefbe0b44bbdc57524972592f1c0d2c3647a",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-20T13:19:34Z",
						"stash": {
							"name": "~price 4 chaos",
							"x": 0,
							"y": 8
						},
						"whisper": "@KingBold Hi, I would like to buy your Rune Goad Nubuck Boots listed for 4 chaos in Metamorph (stash tab \"~price 4 chaos\"; position: left 1, top 9)",
						"account": {
							"name": "Than2014",
							"lastCharacterName": "KingBold",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
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
							},
							{
								"group": 1,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Rune Goad",
						"typeLine": "Nubuck Boots",
						"identified": true,
						"ilvl": 70,
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
										"186",
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
										"43",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Dex",
								"values": [
									[
										"62",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+18 to Evasion Rating",
							"32% increased Evasion Rating",
							"+110 to maximum Life",
							"+34% to Lightning Resistance",
							"13% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ev": 199,
							"ev_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Flea's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
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
											0,
											1
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
							"text": "UmFyaXR5OiBSYXJlDQpSdW5lIEdvYWQNCk51YnVjayBCb290cw0KLS0tLS0tLS0NClF1YWxpdHk6ICsxMCUgKGF1Z21lbnRlZCkNCkV2YXNpb24gUmF0aW5nOiAxODYgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDMNCkRleDogNjINCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUcgQi1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcwDQotLS0tLS0tLQ0KKzE4IHRvIEV2YXNpb24gUmF0aW5nDQozMiUgaW5jcmVhc2VkIEV2YXNpb24gUmF0aW5nDQorMTEwIHRvIG1heGltdW0gTGlmZQ0KKzM0JSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZQ0KMTMlIGluY3JlYXNlZCBTdHVuIGFuZCBCbG9jayBSZWNvdmVyeQ0K"
						},
						"pseudoMods": [
							"(pseudo) +34% total Elemental Resistance",
							"(pseudo) +110 total maximum Life",
							"Sum: 254"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "c52dc494a12f3e61ff8700f96d31e7c8c844ae577bd4c3f72f1129ea404ba944",
				"name": "Corpse Dash",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 73,
				"defenseProperties": [
					"armour 224",
					"energyShield 61"
				],
				"implicitMods": [],
				"explicitMods": [
					"+22 to Intelligence",
					"65% increased Armour and Energy Shield",
					"+9 to maximum Energy Shield",
					"+107 to maximum Life"
				],
				"pseudoMods": [
					"(pseudo) +40% total Elemental Resistance",
					"(pseudo) +107 total maximum Life",
					"Sum: 254"
				],
				"accountText": "TheCloud0103 > IceShoTeClou",
				"whisper": "@IceShoTeClou Hi, I would like to buy your Corpse Dash Crusader Boots listed for 4 chaos in Metamorph (stash tab \"Quad\"; position: left 3, top 5)",
				"note": "~price 4 chaos",
				"priceText": "4 chaos",
				"valueExcludingProperties": 254,
				"evalValue": 254.224,
				"evalPrice": 4,
				"debug": {
					"id": "c52dc494a12f3e61ff8700f96d31e7c8c844ae577bd4c3f72f1129ea404ba944",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-21T01:14:55Z",
						"stash": {
							"name": "Quad",
							"x": 2,
							"y": 4
						},
						"whisper": "@IceShoTeClou Hi, I would like to buy your Corpse Dash Crusader Boots listed for 4 chaos in Metamorph (stash tab \"Quad\"; position: left 3, top 5)",
						"account": {
							"name": "TheCloud0103",
							"lastCharacterName": "IceShoTeClou",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrInt3.png?scale=1&w=2&h=2&v=3ca9bf635d09f26ef27ad85b922fd5e8",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Corpse Dash",
						"typeLine": "Crusader Boots",
						"identified": true,
						"ilvl": 73,
						"note": "~price 4 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"200",
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
										"54",
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
										"64",
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
										"62",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+22 to Intelligence",
							"65% increased Armour and Energy Shield",
							"+9 to maximum Energy Shield",
							"+107 to maximum Life"
						],
						"craftedMods": [
							"+20% to Fire and Cold Resistances"
						],
						"frameType": 2,
						"extended": {
							"ar": 224,
							"ar_aug": true,
							"es": 61,
							"es_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Monk's",
										"tier": "P2",
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
										"name": "of the Prodigy",
										"tier": "S7",
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
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Infused",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3321629045",
												"min": 56,
												"max": 67
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
												"hash": "crafted.stat_2915988346",
												"min": 17,
												"max": 20
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_328541901",
										[
											1
										]
									],
									[
										"explicit.stat_3321629045",
										[
											3
										]
									],
									[
										"explicit.stat_4052037485",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
											2
										]
									]
								],
								"crafted": [
									[
										"crafted.stat_2915988346",
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
							"text": "UmFyaXR5OiBSYXJlDQpDb3Jwc2UgRGFzaA0KQ3J1c2FkZXIgQm9vdHMNCi0tLS0tLS0tDQpBcm1vdXI6IDIwMCAoYXVnbWVudGVkKQ0KRW5lcmd5IFNoaWVsZDogNTQgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNjQNClN0cjogNjINCkludDogNjINCi0tLS0tLS0tDQpTb2NrZXRzOiBSIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDczDQotLS0tLS0tLQ0KKzIyIHRvIEludGVsbGlnZW5jZQ0KNjUlIGluY3JlYXNlZCBBcm1vdXIgYW5kIEVuZXJneSBTaGllbGQNCis5IHRvIG1heGltdW0gRW5lcmd5IFNoaWVsZA0KKzEwNyB0byBtYXhpbXVtIExpZmUNCisyMCUgdG8gRmlyZSBhbmQgQ29sZCBSZXNpc3RhbmNlcyAoY3JhZnRlZCkNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgNCBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +40% total Elemental Resistance",
							"(pseudo) +107 total maximum Life",
							"Sum: 254"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "4c6b1b064c1b94b131eabccc01456df58e7a3124517f483350232c1561847801",
				"name": "Dire Tread",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 70,
				"defenseProperties": [
					"evasion 230",
					"energyShield 54"
				],
				"implicitMods": [
					"+8% to Cold and Lightning Resistances"
				],
				"explicitMods": [
					"+66 to Evasion Rating",
					"+21 to maximum Energy Shield",
					"+107 to maximum Life",
					"9% increased Rarity of Items found",
					"+24% to Fire Resistance",
					"+21% to Chaos Resistance"
				],
				"pseudoMods": [
					"(pseudo) +40% total Elemental Resistance",
					"(pseudo) +107 total maximum Life",
					"Sum: 254"
				],
				"accountText": "skyHellkite > Hellclast",
				"whisper": "@Hellclast Hi, I would like to buy your Dire Tread Two-Toned Boots listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 2, top 1)",
				"priceText": "5 chaos",
				"valueExcludingProperties": 254,
				"evalValue": 254,
				"evalPrice": 5,
				"debug": {
					"id": "4c6b1b064c1b94b131eabccc01456df58e7a3124517f483350232c1561847801",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-14T21:52:46Z",
						"stash": {
							"name": "~b/o 5 chaos",
							"x": 1,
							"y": 0
						},
						"whisper": "@Hellclast Hi, I would like to buy your Dire Tread Two-Toned Boots listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 2, top 1)",
						"account": {
							"name": "skyHellkite",
							"lastCharacterName": "Hellclast",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/TwoTonedBoots.png?scale=1&w=2&h=2&v=06ee4d5bd2996edf668a2265ff2f181a",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Dire Tread",
						"typeLine": "Two-Toned Boots",
						"identified": true,
						"ilvl": 70,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"192",
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
										"45",
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
										"62",
										0
									]
								],
								"displayMode": 1
							}
						],
						"implicitMods": [
							"+8% to Cold and Lightning Resistances"
						],
						"explicitMods": [
							"+66 to Evasion Rating",
							"+21 to maximum Energy Shield",
							"+107 to maximum Life",
							"9% increased Rarity of Items found",
							"+24% to Fire Resistance",
							"+21% to Chaos Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 230,
							"ev_aug": true,
							"es": 54,
							"es_aug": true,
							"mods": {
								"implicit": [
									{
										"name": "",
										"tier": "",
										"magnitudes": [
											{
												"hash": "implicit.stat_4277795662",
												"min": 8,
												"max": 12
											}
										]
									}
								],
								"explicit": [
									{
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "of Plunder",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 6,
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
									},
									{
										"name": "of Expulsion",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_2923486259",
												"min": 21,
												"max": 25
											}
										]
									},
									{
										"name": "Fawn's",
										"tier": "P1",
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
										"name": "Sylph's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 27,
												"max": 45
											},
											{
												"hash": "explicit.stat_4052037485",
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
										"implicit.stat_4277795662",
										[
											0
										]
									]
								],
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											4,
											5
										]
									],
									[
										"explicit.stat_4052037485",
										[
											5
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
											4
										]
									],
									[
										"explicit.stat_3917489142",
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
							"text": "UmFyaXR5OiBSYXJlDQpEaXJlIFRyZWFkDQpUd28tVG9uZWQgQm9vdHMNCi0tLS0tLS0tDQpFdmFzaW9uIFJhdGluZzogMTkyIChhdWdtZW50ZWQpDQpFbmVyZ3kgU2hpZWxkOiA0NSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA3MA0KRGV4OiA2Mg0KSW50OiA2Mg0KLS0tLS0tLS0NClNvY2tldHM6IEcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzANCi0tLS0tLS0tDQorOCUgdG8gQ29sZCBhbmQgTGlnaHRuaW5nIFJlc2lzdGFuY2VzIChpbXBsaWNpdCkNCi0tLS0tLS0tDQorNjYgdG8gRXZhc2lvbiBSYXRpbmcNCisyMSB0byBtYXhpbXVtIEVuZXJneSBTaGllbGQNCisxMDcgdG8gbWF4aW11bSBMaWZlDQo5JSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIGZvdW5kDQorMjQlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzIxJSB0byBDaGFvcyBSZXNpc3RhbmNlDQo="
						},
						"pseudoMods": [
							"(pseudo) +40% total Elemental Resistance",
							"(pseudo) +107 total maximum Life",
							"Sum: 254"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "5daff5b2e90b52ee9e6bb89fe431332c4dbd871ef797e390030f734f3330f1e5",
				"name": "Fate Track",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 81,
				"defenseProperties": [
					"armour 276"
				],
				"implicitMods": [],
				"explicitMods": [
					"+38 to Strength",
					"63% increased Armour",
					"+73 to maximum Life",
					"+35% to Fire Resistance"
				],
				"pseudoMods": [
					"(pseudo) +70% total Elemental Resistance",
					"(pseudo) +92 total maximum Life",
					"Sum: 254"
				],
				"accountText": "2x21 > xXxBloodxandxBonesxXx",
				"whisper": "@xXxBloodxandxBonesxXx Hi, I would like to buy your Fate Track Ancient Greaves listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 22, top 2)",
				"priceText": "5 chaos",
				"valueExcludingProperties": 254,
				"evalValue": 254.276,
				"evalPrice": 5,
				"debug": {
					"id": "5daff5b2e90b52ee9e6bb89fe431332c4dbd871ef797e390030f734f3330f1e5",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-20T11:07:12Z",
						"stash": {
							"name": "~b/o 5 chaos",
							"x": 21,
							"y": 1
						},
						"whisper": "@xXxBloodxandxBonesxXx Hi, I would like to buy your Fate Track Ancient Greaves listed for 5 chaos in Metamorph (stash tab \"~b/o 5 chaos\"; position: left 22, top 2)",
						"account": {
							"name": "2x21",
							"lastCharacterName": "xXxBloodxandxBonesxXx",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr3.png?scale=1&w=2&h=2&v=98f1f6d1137161abc1ef30ee82dadc62",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Fate Track",
						"typeLine": "Ancient Greaves",
						"identified": true,
						"ilvl": 81,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"246",
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
										"52",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"82",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+38 to Strength",
							"63% increased Armour",
							"+73 to maximum Life",
							"+35% to Fire Resistance"
						],
						"craftedMods": [
							"+35% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 276,
							"ar_aug": true,
							"mods": {
								"explicit": [
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
									},
									{
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
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
										"name": "Buttressed",
										"tier": "P4",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
												"min": 56,
												"max": 67
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
												"hash": "crafted.stat_1671376347",
												"min": 29,
												"max": 35
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
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
											1
										]
									],
									[
										"explicit.stat_3372524247",
										[
											2
										]
									]
								],
								"crafted": [
									[
										"crafted.stat_1671376347",
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
							"text": "UmFyaXR5OiBSYXJlDQpGYXRlIFRyYWNrDQpBbmNpZW50IEdyZWF2ZXMNCi0tLS0tLS0tDQpBcm1vdXI6IDI0NiAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1Mg0KU3RyOiA4Mg0KLS0tLS0tLS0NClNvY2tldHM6IFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODENCi0tLS0tLS0tDQorMzggdG8gU3RyZW5ndGgNCjYzJSBpbmNyZWFzZWQgQXJtb3VyDQorNzMgdG8gbWF4aW11bSBMaWZlDQorMzUlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzM1JSB0byBMaWdodG5pbmcgUmVzaXN0YW5jZSAoY3JhZnRlZCkNCg=="
						},
						"pseudoMods": [
							"(pseudo) +70% total Elemental Resistance",
							"(pseudo) +92 total maximum Life",
							"Sum: 254"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "bb40192c46f69942f7df07f43eba4a0a565817e7be5da206aaa735e4030791d1",
				"name": "Ambush Spur",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 70,
				"defenseProperties": [
					"armour 252"
				],
				"implicitMods": [],
				"explicitMods": [
					"+33 to Armour",
					"+116 to maximum Life",
					"Regenerate 7.2 Life per second",
					"+22% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +22% total Elemental Resistance",
					"(pseudo) +116 total maximum Life",
					"Sum: 254"
				],
				"accountText": "SeriousLee > VolatileCoCDestroyer",
				"whisper": "@VolatileCoCDestroyer Hi, I would like to buy your Ambush Spur Goliath Greaves listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 1, top 1)",
				"priceText": "5 chaos",
				"valueExcludingProperties": 254,
				"evalValue": 254.252,
				"evalPrice": 5,
				"debug": {
					"id": "bb40192c46f69942f7df07f43eba4a0a565817e7be5da206aaa735e4030791d1",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T21:49:12Z",
						"stash": {
							"name": "~price 5 chaos",
							"x": 0,
							"y": 0
						},
						"whisper": "@VolatileCoCDestroyer Hi, I would like to buy your Ambush Spur Goliath Greaves listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 1, top 1)",
						"account": {
							"name": "SeriousLee",
							"lastCharacterName": "VolatileCoCDestroyer",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Ambush Spur",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 70,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"210",
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
										"54",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+33 to Armour",
							"+116 to maximum Life",
							"Regenerate 7.2 Life per second",
							"+22% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 252,
							"ar_aug": true,
							"mods": {
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
										"name": "of the Starfish",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_3325883026",
												"min": 7,
												"max": 10
											}
										]
									},
									{
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									}
								]
							},
							"hashes": {
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
											2,
											3
										]
									],
									[
										"explicit.stat_3325883026",
										[
											1
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
							"text": "UmFyaXR5OiBSYXJlDQpBbWJ1c2ggU3B1cg0KR29saWF0aCBHcmVhdmVzDQotLS0tLS0tLQ0KQXJtb3VyOiAyMTAgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNTQNClN0cjogOTUNCi0tLS0tLS0tDQpTb2NrZXRzOiBSIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcwDQotLS0tLS0tLQ0KKzMzIHRvIEFybW91cg0KKzExNiB0byBtYXhpbXVtIExpZmUNClJlZ2VuZXJhdGUgNy4yIExpZmUgcGVyIHNlY29uZA0KKzIyJSB0byBDb2xkIFJlc2lzdGFuY2UNCg=="
						},
						"pseudoMods": [
							"(pseudo) +22% total Elemental Resistance",
							"(pseudo) +116 total maximum Life",
							"Sum: 254"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "47c72f8d356d2e3932aba699a8cfb473a2a99843ea0bebf5561a9bbdd86cf089",
				"name": "Viper March",
				"sockets": [
					[
						"G"
					],
					[
						"B",
						"B"
					]
				],
				"itemLevel": 66,
				"defenseProperties": [
					"energyShield 53"
				],
				"implicitMods": [],
				"explicitMods": [
					"+12 to maximum Energy Shield",
					"9% increased Energy Shield",
					"+104 to maximum Life",
					"Regenerate 7.9 Life per second",
					"+20% to Cold Resistance",
					"6% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +45% total Elemental Resistance",
					"(pseudo) +104 total maximum Life",
					"Sum: 253"
				],
				"accountText": "gbgoober > Wastoldtoplayarc",
				"whisper": "@Wastoldtoplayarc Hi, I would like to buy your Viper March Samite Slippers listed for 2 chaos in Metamorph (stash tab \"Sale Tab\"; position: left 4, top 5)",
				"note": "~price 2 chaos",
				"priceText": "2 chaos",
				"valueExcludingProperties": 253,
				"evalValue": 253,
				"evalPrice": 2,
				"debug": {
					"id": "47c72f8d356d2e3932aba699a8cfb473a2a99843ea0bebf5561a9bbdd86cf089",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-16T06:22:14Z",
						"stash": {
							"name": "Sale Tab",
							"x": 3,
							"y": 4
						},
						"whisper": "@Wastoldtoplayarc Hi, I would like to buy your Viper March Samite Slippers listed for 2 chaos in Metamorph (stash tab \"Sale Tab\"; position: left 4, top 5)",
						"account": {
							"name": "gbgoober",
							"lastCharacterName": "Wastoldtoplayarc",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsInt3.png?scale=1&w=2&h=2&v=77abd4784ad8e1666ac1b956c565a80e",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							},
							{
								"group": 1,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Viper March",
						"typeLine": "Samite Slippers",
						"identified": true,
						"ilvl": 66,
						"note": "~price 2 chaos",
						"properties": [
							{
								"name": "Energy Shield",
								"values": [
									[
										"45",
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
										"44",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Int",
								"values": [
									[
										"79",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+12 to maximum Energy Shield",
							"9% increased Energy Shield",
							"+104 to maximum Life",
							"Regenerate 7.9 Life per second",
							"+20% to Cold Resistance",
							"6% increased Stun and Block Recovery"
						],
						"craftedMods": [
							"+25% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"es": 53,
							"es_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
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
									},
									{
										"name": "Pixie's",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_4015621042",
												"min": 6,
												"max": 13
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 6,
												"max": 7
											}
										]
									},
									{
										"name": "Prior's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_4052037485",
												"min": 11,
												"max": 15
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 24,
												"max": 28
											}
										]
									}
								],
								"crafted": [
									{
										"name": "of Craft",
										"tier": "R2",
										"magnitudes": [
											{
												"hash": "crafted.stat_1671376347",
												"min": 21,
												"max": 28
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4052037485",
										[
											4
										]
									],
									[
										"explicit.stat_4015621042",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
											4
										]
									],
									[
										"explicit.stat_3325883026",
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
										"explicit.stat_2511217560",
										[
											3
										]
									]
								],
								"crafted": [
									[
										"crafted.stat_1671376347",
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
							"text": "UmFyaXR5OiBSYXJlDQpWaXBlciBNYXJjaA0KU2FtaXRlIFNsaXBwZXJzDQotLS0tLS0tLQ0KRW5lcmd5IFNoaWVsZDogNDUgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogNDQNCkludDogNzkNCi0tLS0tLS0tDQpTb2NrZXRzOiBHIEItQiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA2Ng0KLS0tLS0tLS0NCisxMiB0byBtYXhpbXVtIEVuZXJneSBTaGllbGQNCjklIGluY3JlYXNlZCBFbmVyZ3kgU2hpZWxkDQorMTA0IHRvIG1heGltdW0gTGlmZQ0KUmVnZW5lcmF0ZSA3LjkgTGlmZSBwZXIgc2Vjb25kDQorMjAlIHRvIENvbGQgUmVzaXN0YW5jZQ0KNiUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQorMjUlIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlIChjcmFmdGVkKQ0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAyIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +45% total Elemental Resistance",
							"(pseudo) +104 total maximum Life",
							"Sum: 253"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "295bc220201b0acab68be01508ca02ad3ea6049ca7d84dc078e08275860e433b",
				"name": "Blight League",
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
				"defenseProperties": [
					"armour 271"
				],
				"implicitMods": [],
				"explicitMods": [
					"+27 to Strength",
					"+21 to Armour",
					"17% increased Armour",
					"+113 to maximum Life",
					"Regenerate 3.5 Life per second",
					"20% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +126.5 total maximum Life",
					"Sum: 253"
				],
				"accountText": "TriggerPull > Tukker",
				"whisper": "@Tukker Hi, I would like to buy your Blight League Goliath Greaves listed for 2 chaos in Metamorph (stash tab \"Trade\"; position: left 11, top 5)",
				"note": "~price 2 chaos",
				"priceText": "2 chaos",
				"valueExcludingProperties": 253,
				"evalValue": 253.271,
				"evalPrice": 2,
				"debug": {
					"id": "295bc220201b0acab68be01508ca02ad3ea6049ca7d84dc078e08275860e433b",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-20T07:20:18Z",
						"stash": {
							"name": "Trade",
							"x": 10,
							"y": 4
						},
						"whisper": "@Tukker Hi, I would like to buy your Blight League Goliath Greaves listed for 2 chaos in Metamorph (stash tab \"Trade\"; position: left 11, top 5)",
						"account": {
							"name": "TriggerPull",
							"lastCharacterName": "Tukker",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
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
							}
						],
						"name": "Blight League",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 71,
						"note": "~price 2 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"232",
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
										"54",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+27 to Strength",
							"+21 to Armour",
							"17% increased Armour",
							"+113 to maximum Life",
							"Regenerate 3.5 Life per second",
							"20% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 271,
							"ar_aug": true,
							"mods": {
								"explicit": [
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
										"name": "of Steel Skin",
										"tier": "S3",
										"magnitudes": [
											{
												"hash": "explicit.stat_2511217560",
												"min": 20,
												"max": 22
											}
										]
									},
									{
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "of the Lion",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 23,
												"max": 27
											}
										]
									},
									{
										"name": "Reinforced",
										"tier": "P7",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
												"min": 15,
												"max": 26
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											4
										]
									],
									[
										"explicit.stat_3484657501",
										[
											2
										]
									],
									[
										"explicit.stat_1062208444",
										[
											5
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2,
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
							"text": "UmFyaXR5OiBSYXJlDQpCbGlnaHQgTGVhZ3VlDQpHb2xpYXRoIEdyZWF2ZXMNCi0tLS0tLS0tDQpBcm1vdXI6IDIzMiAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1NA0KU3RyOiA5NQ0KLS0tLS0tLS0NClNvY2tldHM6IFItUiBSIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcxDQotLS0tLS0tLQ0KKzI3IHRvIFN0cmVuZ3RoDQorMjEgdG8gQXJtb3VyDQoxNyUgaW5jcmVhc2VkIEFybW91cg0KKzExMyB0byBtYXhpbXVtIExpZmUNClJlZ2VuZXJhdGUgMy41IExpZmUgcGVyIHNlY29uZA0KMjAlIGluY3JlYXNlZCBTdHVuIGFuZCBCbG9jayBSZWNvdmVyeQ0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAyIGNoYW9zDQo="
						},
						"pseudoMods": [
							"(pseudo) +126.5 total maximum Life",
							"Sum: 253"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "d94e26c6142239af7e5f7d13ad0af82c8f2414eb7a79e19cd694cdd9635d1fa7",
				"name": "Anarchy Urge",
				"sockets": [
					[
						"B",
						"B"
					]
				],
				"itemLevel": 77,
				"defenseProperties": [
					"armour 234"
				],
				"implicitMods": [],
				"explicitMods": [
					"+18 to Armour",
					"+93 to maximum Life",
					"+44% to Cold Resistance",
					"+23% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +67% total Elemental Resistance",
					"(pseudo) +93 total maximum Life",
					"Sum: 253"
				],
				"accountText": "ICOS_Lich > AbortexVortex",
				"whisper": "@AbortexVortex Hi, I would like to buy your Anarchy Urge Goliath Greaves listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 1, top 6)",
				"priceText": "5 chaos",
				"valueExcludingProperties": 253,
				"evalValue": 253.234,
				"evalPrice": 5,
				"debug": {
					"id": "d94e26c6142239af7e5f7d13ad0af82c8f2414eb7a79e19cd694cdd9635d1fa7",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-16T16:25:34Z",
						"stash": {
							"name": "~price 5 chaos",
							"x": 0,
							"y": 5
						},
						"whisper": "@AbortexVortex Hi, I would like to buy your Anarchy Urge Goliath Greaves listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 1, top 6)",
						"account": {
							"name": "ICOS_Lich",
							"lastCharacterName": "AbortexVortex",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
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
						"name": "Anarchy Urge",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 77,
						"properties": [
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
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+18 to Armour",
							"+93 to maximum Life",
							"+44% to Cold Resistance",
							"+23% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 234,
							"ar_aug": true,
							"mods": {
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
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
									{
										"name": "Oyster's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
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
											1,
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
							"text": "UmFyaXR5OiBSYXJlDQpBbmFyY2h5IFVyZ2UNCkdvbGlhdGggR3JlYXZlcw0KLS0tLS0tLS0NCkFybW91cjogMTk1IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU3DQpTdHI6IDk1DQotLS0tLS0tLQ0KU29ja2V0czogQi1CIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc3DQotLS0tLS0tLQ0KKzE4IHRvIEFybW91cg0KKzkzIHRvIG1heGltdW0gTGlmZQ0KKzQ0JSB0byBDb2xkIFJlc2lzdGFuY2UNCisyMyUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCg=="
						},
						"pseudoMods": [
							"(pseudo) +67% total Elemental Resistance",
							"(pseudo) +93 total maximum Life",
							"Sum: 253"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "fe67045089d881243433749cf1d12143616a341b8b93f7b39f670382e83caaf2",
				"name": "Rune Trail",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 73,
				"defenseProperties": [
					"armour 265"
				],
				"implicitMods": [],
				"explicitMods": [
					"18% reduced Attribute Requirements",
					"+44 to Armour",
					"+98 to maximum Life",
					"+34% to Fire Resistance",
					"+23% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +57% total Elemental Resistance",
					"(pseudo) +98 total maximum Life",
					"Sum: 253"
				],
				"accountText": "xxazndragon01 > Toxic_spinner",
				"whisper": "@Toxic_spinner Hi, I would like to buy your Rune Trail Goliath Greaves listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 3, top 5)",
				"priceText": "5 chaos",
				"valueExcludingProperties": 253,
				"evalValue": 253.265,
				"evalPrice": 5,
				"debug": {
					"id": "fe67045089d881243433749cf1d12143616a341b8b93f7b39f670382e83caaf2",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-16T23:13:36Z",
						"stash": {
							"name": "~price 5 chaos",
							"x": 2,
							"y": 4
						},
						"whisper": "@Toxic_spinner Hi, I would like to buy your Rune Trail Goliath Greaves listed for 5 chaos in Metamorph (stash tab \"~price 5 chaos\"; position: left 3, top 5)",
						"account": {
							"name": "xxazndragon01",
							"lastCharacterName": "Toxic_spinner",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Rune Trail",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 73,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"221",
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
										"54",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"77",
										1
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"18% reduced Attribute Requirements",
							"+44 to Armour",
							"+98 to maximum Life",
							"+34% to Fire Resistance",
							"+23% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 265,
							"ar_aug": true,
							"mods": {
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
										"name": "Lacquered",
										"tier": "P3",
										"magnitudes": [
											{
												"hash": "explicit.stat_3484657501",
												"min": 3,
												"max": 10
											}
										]
									},
									{
										"name": "of the Worthy",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3639275092",
												"min": -18,
												"max": -18
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
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_3639275092",
										[
											2
										]
									],
									[
										"explicit.stat_3484657501",
										[
											1,
											4
										]
									],
									[
										"explicit.stat_3299347043",
										[
											4,
											5
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
							"text": "UmFyaXR5OiBSYXJlDQpSdW5lIFRyYWlsDQpHb2xpYXRoIEdyZWF2ZXMNCi0tLS0tLS0tDQpBcm1vdXI6IDIyMSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1NA0KU3RyOiA3NyAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClNvY2tldHM6IFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzMNCi0tLS0tLS0tDQoxOCUgcmVkdWNlZCBBdHRyaWJ1dGUgUmVxdWlyZW1lbnRzDQorNDQgdG8gQXJtb3VyDQorOTggdG8gbWF4aW11bSBMaWZlDQorMzQlIHRvIEZpcmUgUmVzaXN0YW5jZQ0KKzIzJSB0byBDb2xkIFJlc2lzdGFuY2UNCg=="
						},
						"pseudoMods": [
							"(pseudo) +57% total Elemental Resistance",
							"(pseudo) +98 total maximum Life",
							"Sum: 253"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "7e7689a24604af04cc75b77161f3a9e1c496d138d685ab2437602f6a87ca70a6",
				"name": "Brimstone March",
				"sockets": [
					[
						"B",
						"R"
					]
				],
				"itemLevel": 71,
				"defenseProperties": [
					"armour 106",
					"energyShield 20"
				],
				"implicitMods": [],
				"explicitMods": [
					"+27 to Strength",
					"+85 to maximum Life",
					"+18 to maximum Mana",
					"+40% to Cold Resistance",
					"+16% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +56% total Elemental Resistance",
					"(pseudo) +98.5 total maximum Life",
					"Sum: 253"
				],
				"accountText": "ProMindful > Chooyaya",
				"whisper": "@Chooyaya Hi, I would like to buy your Brimstone March Soldier Boots listed for 5 chaos in Metamorph (stash tab \"misc\"; position: left 5, top 9)",
				"note": "~b/o 5 chaos",
				"priceText": "5 chaos",
				"valueExcludingProperties": 253,
				"evalValue": 253.106,
				"evalPrice": 5,
				"debug": {
					"id": "7e7689a24604af04cc75b77161f3a9e1c496d138d685ab2437602f6a87ca70a6",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T00:51:14Z",
						"stash": {
							"name": "misc",
							"x": 4,
							"y": 8
						},
						"whisper": "@Chooyaya Hi, I would like to buy your Brimstone March Soldier Boots listed for 5 chaos in Metamorph (stash tab \"misc\"; position: left 5, top 9)",
						"account": {
							"name": "ProMindful",
							"lastCharacterName": "Chooyaya",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrInt3.png?scale=1&w=2&h=2&v=3ca9bf635d09f26ef27ad85b922fd5e8",
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
						"name": "Brimstone March",
						"typeLine": "Soldier Boots",
						"identified": true,
						"ilvl": 71,
						"note": "~b/o 5 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"88",
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
										"17",
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
								"name": "Str",
								"values": [
									[
										"47",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Int",
								"values": [
									[
										"47",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+27 to Strength",
							"+85 to maximum Life",
							"+18 to maximum Mana",
							"+40% to Cold Resistance",
							"+16% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 106,
							"ar_aug": true,
							"es": 20,
							"es_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "of the Lion",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 23,
												"max": 27
											}
										]
									},
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											4
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
											3
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
							"text": "UmFyaXR5OiBSYXJlDQpCcmltc3RvbmUgTWFyY2gNClNvbGRpZXIgQm9vdHMNCi0tLS0tLS0tDQpBcm1vdXI6IDg4DQpFbmVyZ3kgU2hpZWxkOiAxNw0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA0OQ0KU3RyOiA0Nw0KSW50OiA0Nw0KLS0tLS0tLS0NClNvY2tldHM6IEItUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3MQ0KLS0tLS0tLS0NCisyNyB0byBTdHJlbmd0aA0KKzg1IHRvIG1heGltdW0gTGlmZQ0KKzE4IHRvIG1heGltdW0gTWFuYQ0KKzQwJSB0byBDb2xkIFJlc2lzdGFuY2UNCisxNiUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpOb3RlOiB+Yi9vIDUgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +56% total Elemental Resistance",
							"(pseudo) +98.5 total maximum Life",
							"Sum: 253"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "a9a5553e587f52e4a7eac9485df6204e978848b5ee31862a1a6524f8548e5cd1",
				"name": "Kraken Goad",
				"sockets": [
					[
						"G"
					]
				],
				"itemLevel": 55,
				"defenseProperties": [
					"evasion 239"
				],
				"implicitMods": [],
				"explicitMods": [
					"+19 to Evasion Rating",
					"+111 to maximum Life",
					"Regenerate 3.3 Life per second",
					"+30% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +30% total Elemental Resistance",
					"(pseudo) +111 total maximum Life",
					"Sum: 252"
				],
				"accountText": "레몬맛덮밥 > 라임맛덮밥",
				"whisper": "@라임맛덮밥 안녕하세요, 변형(보관함 탭 \"판매\", 위치: 왼쪽 1, 상단 9)에 1 chaos(으)로 올려놓은 크라켄의 몰이 막대 거친 생가죽 장화을(를) 구매하고 싶습니다",
				"note": "~price 1 chaos",
				"priceText": "1 chaos",
				"valueExcludingProperties": 252,
				"evalValue": 252,
				"evalPrice": 1,
				"debug": {
					"id": "a9a5553e587f52e4a7eac9485df6204e978848b5ee31862a1a6524f8548e5cd1",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-18T14:45:31Z",
						"stash": {
							"name": "판매",
							"x": 0,
							"y": 8
						},
						"whisper": "@라임맛덮밥 안녕하세요, 변형(보관함 탭 \"판매\", 위치: 왼쪽 1, 상단 9)에 1 chaos(으)로 올려놓은 크라켄의 몰이 막대 거친 생가죽 장화을(를) 구매하고 싶습니다",
						"account": {
							"name": "레몬맛덮밥",
							"lastCharacterName": "라임맛덮밥",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "D",
								"sColour": "G"
							}
						],
						"name": "Kraken Goad",
						"typeLine": "Shagreen Boots",
						"identified": true,
						"ilvl": 55,
						"note": "~price 1 chaos",
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"199",
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
										"97",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+19 to Evasion Rating",
							"+111 to maximum Life",
							"Regenerate 3.3 Life per second",
							"+30% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 239,
							"ev_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Flea's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
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
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
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
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											0
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
											2
										]
									],
									[
										"explicit.stat_3325883026",
										[
											3
										]
									],
									[
										"explicit.stat_4220027924",
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
							"text": "UmFyaXR5OiBSYXJlDQpLcmFrZW4gR29hZA0KU2hhZ3JlZW4gQm9vdHMNCi0tLS0tLS0tDQpFdmFzaW9uIFJhdGluZzogMTk5IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU1DQpEZXg6IDk3DQotLS0tLS0tLQ0KU29ja2V0czogRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA1NQ0KLS0tLS0tLS0NCisxOSB0byBFdmFzaW9uIFJhdGluZw0KKzExMSB0byBtYXhpbXVtIExpZmUNClJlZ2VuZXJhdGUgMy4zIExpZmUgcGVyIHNlY29uZA0KKzMwJSB0byBDb2xkIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpOb3RlOiB+cHJpY2UgMSBjaGFvcw0K"
						},
						"pseudoMods": [
							"(pseudo) +30% total Elemental Resistance",
							"(pseudo) +111 total maximum Life",
							"Sum: 252"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "f47b18428789ec6a488b9ee6b962b99b05ce0a53e6d06bfd61a517c64fccc6a1",
				"name": "Viper Spark",
				"sockets": [
					[
						"G",
						"G"
					],
					[
						"G"
					]
				],
				"itemLevel": 71,
				"defenseProperties": [
					"evasion 238"
				],
				"implicitMods": [],
				"explicitMods": [
					"+18 to Evasion Rating",
					"+107 to maximum Life",
					"11% increased Rarity of Items found",
					"+38% to Cold Resistance"
				],
				"pseudoMods": [
					"(pseudo) +38% total Elemental Resistance",
					"(pseudo) +107 total maximum Life",
					"Sum: 252"
				],
				"accountText": "PassingBy > IlNino_Metamorph",
				"whisper": "@IlNino_Metamorph Hi, I would like to buy your Viper Spark Shagreen Boots listed for 2 chaos in Metamorph (stash tab \"~b/o 2 chaos\"; position: left 3, top 11)",
				"priceText": "2 chaos",
				"valueExcludingProperties": 252,
				"evalValue": 252,
				"evalPrice": 2,
				"debug": {
					"id": "f47b18428789ec6a488b9ee6b962b99b05ce0a53e6d06bfd61a517c64fccc6a1",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T21:00:34Z",
						"stash": {
							"name": "~b/o 2 chaos",
							"x": 2,
							"y": 10
						},
						"whisper": "@IlNino_Metamorph Hi, I would like to buy your Viper Spark Shagreen Boots listed for 2 chaos in Metamorph (stash tab \"~b/o 2 chaos\"; position: left 3, top 11)",
						"account": {
							"name": "PassingBy",
							"lastCharacterName": "IlNino_Metamorph",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsDex4.png?scale=1&w=2&h=2&v=62a68c142ba5a605dcf6b6603bf0ab0c",
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
						"name": "Viper Spark",
						"typeLine": "Shagreen Boots",
						"identified": true,
						"ilvl": 71,
						"properties": [
							{
								"name": "Evasion Rating",
								"values": [
									[
										"198",
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
										"97",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+18 to Evasion Rating",
							"+107 to maximum Life",
							"11% increased Rarity of Items found",
							"+38% to Cold Resistance"
						],
						"frameType": 2,
						"extended": {
							"ev": 238,
							"ev_aug": true,
							"mods": {
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
										"name": "of Raiding",
										"tier": "S1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3917489142",
												"min": 11,
												"max": 14
											}
										]
									},
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Flea's",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_53045048",
												"min": 14,
												"max": 20
											},
											{
												"hash": "explicit.stat_3299347043",
												"min": 18,
												"max": 23
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											3
										]
									],
									[
										"explicit.stat_3299347043",
										[
											2,
											3
										]
									],
									[
										"explicit.stat_3917489142",
										[
											1
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
							"text": "UmFyaXR5OiBSYXJlDQpWaXBlciBTcGFyaw0KU2hhZ3JlZW4gQm9vdHMNCi0tLS0tLS0tDQpFdmFzaW9uIFJhdGluZzogMTk4IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU1DQpEZXg6IDk3DQotLS0tLS0tLQ0KU29ja2V0czogRy1HIEcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzENCi0tLS0tLS0tDQorMTggdG8gRXZhc2lvbiBSYXRpbmcNCisxMDcgdG8gbWF4aW11bSBMaWZlDQoxMSUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBmb3VuZA0KKzM4JSB0byBDb2xkIFJlc2lzdGFuY2UNCg=="
						},
						"pseudoMods": [
							"(pseudo) +38% total Elemental Resistance",
							"(pseudo) +107 total maximum Life",
							"Sum: 252"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "5bd6a367ccaba17d604f3f76a657e650edf599fe54150eb5b10779f62f7d51d5",
				"name": "Cataclysm Stride",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 73,
				"defenseProperties": [
					"armour 78",
					"evasion 118"
				],
				"implicitMods": [],
				"explicitMods": [
					"+33 to Evasion Rating",
					"+105 to maximum Life",
					"+42% to Cold Resistance",
					"19% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +42% total Elemental Resistance",
					"(pseudo) +105 total maximum Life",
					"Sum: 252"
				],
				"accountText": "zmwmmz > Arc_yk",
				"whisper": "@Arc_yk 안녕하세요, 변형(보관함 탭 \"ss\", 위치: 왼쪽 3, 상단 10)에 2 chaos(으)로 올려놓은 대재앙 질주 강철 비늘 장화을(를) 구매하고 싶습니다",
				"note": "~price 2 chaos",
				"priceText": "2 chaos",
				"valueExcludingProperties": 252,
				"evalValue": 252.078,
				"evalPrice": 2,
				"debug": {
					"id": "5bd6a367ccaba17d604f3f76a657e650edf599fe54150eb5b10779f62f7d51d5",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-17T14:59:22Z",
						"stash": {
							"name": "ss",
							"x": 2,
							"y": 9
						},
						"whisper": "@Arc_yk 안녕하세요, 변형(보관함 탭 \"ss\", 위치: 왼쪽 3, 상단 10)에 2 chaos(으)로 올려놓은 대재앙 질주 강철 비늘 장화을(를) 구매하고 싶습니다",
						"account": {
							"name": "zmwmmz",
							"lastCharacterName": "Arc_yk",
							"online": null,
							"language": "ko_KR"
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStrDex1.png?scale=1&w=2&h=2&v=a3cf4c2df53894a8e80f579b34661a4c",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Cataclysm Stride",
						"typeLine": "Steelscale Boots",
						"identified": true,
						"ilvl": 73,
						"note": "~price 2 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"65",
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
										"98",
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
										"57",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"35",
										0
									]
								],
								"displayMode": 1
							},
							{
								"name": "Dex",
								"values": [
									[
										"35",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+33 to Evasion Rating",
							"+105 to maximum Life",
							"+42% to Cold Resistance",
							"19% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ev": 118,
							"ev_aug": true,
							"ar": 78,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Fawn's",
										"tier": "P1",
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
										"name": "of the Ice",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_4220027924",
												"min": 42,
												"max": 45
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
								"explicit": [
									[
										"explicit.stat_53045048",
										[
											1
										]
									],
									[
										"explicit.stat_3299347043",
										[
											0,
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
										"explicit.stat_2511217560",
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
							"text": "UmFyaXR5OiBSYXJlDQpDYXRhY2x5c20gU3RyaWRlDQpTdGVlbHNjYWxlIEJvb3RzDQotLS0tLS0tLQ0KQXJtb3VyOiA2NQ0KRXZhc2lvbiBSYXRpbmc6IDk4IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDU3DQpTdHI6IDM1DQpEZXg6IDM1DQotLS0tLS0tLQ0KU29ja2V0czogUiANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3Mw0KLS0tLS0tLS0NCiszMyB0byBFdmFzaW9uIFJhdGluZw0KKzEwNSB0byBtYXhpbXVtIExpZmUNCis0MiUgdG8gQ29sZCBSZXNpc3RhbmNlDQoxOSUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDIgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +42% total Elemental Resistance",
							"(pseudo) +105 total maximum Life",
							"Sum: 252"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "e18f167f3f2745556cfa96b922e030e0d860b830f89772b0b8de991b500f705e",
				"name": "Bramble Track",
				"sockets": [
					[
						"B"
					]
				],
				"itemLevel": 82,
				"defenseProperties": [
					"armour 181"
				],
				"implicitMods": [],
				"explicitMods": [
					"+37 to Strength",
					"+89 to maximum Life",
					"+37% to Fire Resistance",
					"24% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +37% total Elemental Resistance",
					"(pseudo) +107.5 total maximum Life",
					"Sum: 252"
				],
				"accountText": "Urchins > Ultranooben",
				"whisper": "@Ultranooben Hi, I would like to buy your Bramble Track Ancient Greaves listed for 3 chaos in Metamorph (stash tab \"~b/o 3 chaos baba\"; position: left 5, top 5)",
				"priceText": "3 chaos",
				"valueExcludingProperties": 252,
				"evalValue": 252.181,
				"evalPrice": 3,
				"debug": {
					"id": "e18f167f3f2745556cfa96b922e030e0d860b830f89772b0b8de991b500f705e",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-17T12:01:03Z",
						"stash": {
							"name": "~b/o 3 chaos baba",
							"x": 4,
							"y": 4
						},
						"whisper": "@Ultranooben Hi, I would like to buy your Bramble Track Ancient Greaves listed for 3 chaos in Metamorph (stash tab \"~b/o 3 chaos baba\"; position: left 5, top 5)",
						"account": {
							"name": "Urchins",
							"lastCharacterName": "Ultranooben",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr3.png?scale=1&w=2&h=2&v=98f1f6d1137161abc1ef30ee82dadc62",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "I",
								"sColour": "B"
							}
						],
						"name": "Bramble Track",
						"typeLine": "Ancient Greaves",
						"identified": true,
						"ilvl": 82,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"151",
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
										"82",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+37 to Strength",
							"+89 to maximum Life",
							"+37% to Fire Resistance",
							"24% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 181,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "of Adamantite Skin",
										"tier": "S2",
										"magnitudes": [
											{
												"hash": "explicit.stat_2511217560",
												"min": 23,
												"max": 25
											}
										]
									},
									{
										"name": "of the Goliath",
										"tier": "S4",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 33,
												"max": 37
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
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
										"explicit.stat_3372524247",
										[
											2
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
							"text": "UmFyaXR5OiBSYXJlDQpCcmFtYmxlIFRyYWNrDQpBbmNpZW50IEdyZWF2ZXMNCi0tLS0tLS0tDQpBcm1vdXI6IDE1MQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA0OA0KU3RyOiA4Mg0KLS0tLS0tLS0NClNvY2tldHM6IEIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODINCi0tLS0tLS0tDQorMzcgdG8gU3RyZW5ndGgNCis4OSB0byBtYXhpbXVtIExpZmUNCiszNyUgdG8gRmlyZSBSZXNpc3RhbmNlDQoyNCUgaW5jcmVhc2VkIFN0dW4gYW5kIEJsb2NrIFJlY292ZXJ5DQo="
						},
						"pseudoMods": [
							"(pseudo) +37% total Elemental Resistance",
							"(pseudo) +107.5 total maximum Life",
							"Sum: 252"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "e4f8cea4a560e13358ef597bf7eb5a2a4d05f22180cc01df41f2cc51085a7260",
				"name": "Wrath Dash",
				"sockets": [
					[
						"R"
					]
				],
				"itemLevel": 71,
				"defenseProperties": [
					"armour 252"
				],
				"implicitMods": [],
				"explicitMods": [
					"+33 to Armour",
					"+102 to maximum Life",
					"+35% to Fire Resistance",
					"+13% to Lightning Resistance"
				],
				"pseudoMods": [
					"(pseudo) +48% total Elemental Resistance",
					"(pseudo) +102 total maximum Life",
					"Sum: 252"
				],
				"accountText": "Inquisitor3D > iNSTaJiBiNQUiSiToR",
				"whisper": "@iNSTaJiBiNQUiSiToR Hi, I would like to buy your Wrath Dash Goliath Greaves listed for 4 chaos in Metamorph (stash tab \"Trade 2\"; position: left 5, top 5)",
				"note": "~b/o 4 chaos",
				"priceText": "4 chaos",
				"valueExcludingProperties": 252,
				"evalValue": 252.252,
				"evalPrice": 4,
				"debug": {
					"id": "e4f8cea4a560e13358ef597bf7eb5a2a4d05f22180cc01df41f2cc51085a7260",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-17T15:42:24Z",
						"stash": {
							"name": "Trade 2",
							"x": 4,
							"y": 4
						},
						"whisper": "@iNSTaJiBiNQUiSiToR Hi, I would like to buy your Wrath Dash Goliath Greaves listed for 4 chaos in Metamorph (stash tab \"Trade 2\"; position: left 5, top 5)",
						"account": {
							"name": "Inquisitor3D",
							"lastCharacterName": "iNSTaJiBiNQUiSiToR",
							"online": null,
							"language": "en_US"
						},
						"price": {
							"type": "~b/o",
							"amount": 4,
							"currency": "chaos"
						}
					},
					"item": {
						"verified": true,
						"w": 2,
						"h": 2,
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
						"league": "Metamorph",
						"sockets": [
							{
								"group": 0,
								"attr": "S",
								"sColour": "R"
							}
						],
						"name": "Wrath Dash",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 71,
						"note": "~b/o 4 chaos",
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"210",
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
										"54",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+33 to Armour",
							"+102 to maximum Life",
							"+35% to Fire Resistance",
							"+13% to Lightning Resistance"
						],
						"frameType": 2,
						"extended": {
							"ar": 252,
							"ar_aug": true,
							"mods": {
								"explicit": [
									{
										"name": "Urchin's",
										"tier": "P1",
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
										"name": "Virile",
										"tier": "P2",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 70,
												"max": 79
											}
										]
									},
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
											0,
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
							"text": "UmFyaXR5OiBSYXJlDQpXcmF0aCBEYXNoDQpHb2xpYXRoIEdyZWF2ZXMNCi0tLS0tLS0tDQpBcm1vdXI6IDIxMCAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1NA0KU3RyOiA5NQ0KLS0tLS0tLS0NClNvY2tldHM6IFIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzENCi0tLS0tLS0tDQorMzMgdG8gQXJtb3VyDQorMTAyIHRvIG1heGltdW0gTGlmZQ0KKzM1JSB0byBGaXJlIFJlc2lzdGFuY2UNCisxMyUgdG8gTGlnaHRuaW5nIFJlc2lzdGFuY2UNCi0tLS0tLS0tDQpOb3RlOiB+Yi9vIDQgY2hhb3MNCg=="
						},
						"pseudoMods": [
							"(pseudo) +48% total Elemental Resistance",
							"(pseudo) +102 total maximum Life",
							"Sum: 252"
						]
					}
				},
				"hovered": false
			},
			{
				"id": "5f4606b718fb2d10d7d233610bb3b870ebd640ee5f5a16e43aa4a18d9236a4ba",
				"name": "Oblivion Urge",
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
				"itemLevel": 72,
				"defenseProperties": [
					"armour 227"
				],
				"implicitMods": [],
				"explicitMods": [
					"+23 to Strength",
					"8% increased Armour",
					"+84 to maximum Life",
					"+44% to Fire Resistance",
					"+17% to Lightning Resistance",
					"7% increased Stun and Block Recovery"
				],
				"pseudoMods": [
					"(pseudo) +61% total Elemental Resistance",
					"(pseudo) +95.5 total maximum Life",
					"Sum: 252"
				],
				"accountText": "jpigg > PantslessPatrician",
				"whisper": "@PantslessPatrician Hi, I would like to buy your Oblivion Urge Goliath Greaves listed for 4 chaos in Metamorph (stash tab \"~price 4 chaos\"; position: left 6, top 8)",
				"priceText": "4 chaos",
				"valueExcludingProperties": 252,
				"evalValue": 252.227,
				"evalPrice": 4,
				"debug": {
					"id": "5f4606b718fb2d10d7d233610bb3b870ebd640ee5f5a16e43aa4a18d9236a4ba",
					"listing": {
						"method": "psapi",
						"indexed": "2019-12-15T02:22:22Z",
						"stash": {
							"name": "~price 4 chaos",
							"x": 5,
							"y": 7
						},
						"whisper": "@PantslessPatrician Hi, I would like to buy your Oblivion Urge Goliath Greaves listed for 4 chaos in Metamorph (stash tab \"~price 4 chaos\"; position: left 6, top 8)",
						"account": {
							"name": "jpigg",
							"lastCharacterName": "PantslessPatrician",
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
						"icon": "https://web.poecdn.com/image/Art/2DItems/Armours/Boots/BootsStr4.png?scale=1&w=2&h=2&v=e26e440ce9b34d249004f0c063d3fe12",
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
						"name": "Oblivion Urge",
						"typeLine": "Goliath Greaves",
						"identified": true,
						"ilvl": 72,
						"properties": [
							{
								"name": "Armour",
								"values": [
									[
										"191",
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
										"57",
										0
									]
								],
								"displayMode": 0
							},
							{
								"name": "Str",
								"values": [
									[
										"95",
										0
									]
								],
								"displayMode": 1
							}
						],
						"explicitMods": [
							"+23 to Strength",
							"8% increased Armour",
							"+84 to maximum Life",
							"+44% to Fire Resistance",
							"+17% to Lightning Resistance",
							"7% increased Stun and Block Recovery"
						],
						"frameType": 2,
						"extended": {
							"ar": 227,
							"ar_aug": true,
							"mods": {
								"explicit": [
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
										"name": "Athlete's",
										"tier": "P1",
										"magnitudes": [
											{
												"hash": "explicit.stat_3299347043",
												"min": 80,
												"max": 89
											}
										]
									},
									{
										"name": "Beetle's",
										"tier": "P6",
										"magnitudes": [
											{
												"hash": "explicit.stat_1062208444",
												"min": 6,
												"max": 13
											},
											{
												"hash": "explicit.stat_2511217560",
												"min": 6,
												"max": 7
											}
										]
									},
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
										"name": "of the Lion",
										"tier": "S6",
										"magnitudes": [
											{
												"hash": "explicit.stat_4080418644",
												"min": 23,
												"max": 27
											}
										]
									}
								]
							},
							"hashes": {
								"explicit": [
									[
										"explicit.stat_4080418644",
										[
											4
										]
									],
									[
										"explicit.stat_1062208444",
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
										"explicit.stat_3372524247",
										[
											0
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
							"text": "UmFyaXR5OiBSYXJlDQpPYmxpdmlvbiBVcmdlDQpHb2xpYXRoIEdyZWF2ZXMNCi0tLS0tLS0tDQpBcm1vdXI6IDE5MSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA1Nw0KU3RyOiA5NQ0KLS0tLS0tLS0NClNvY2tldHM6IFItUiBSLVIgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzINCi0tLS0tLS0tDQorMjMgdG8gU3RyZW5ndGgNCjglIGluY3JlYXNlZCBBcm1vdXINCis4NCB0byBtYXhpbXVtIExpZmUNCis0NCUgdG8gRmlyZSBSZXNpc3RhbmNlDQorMTclIHRvIExpZ2h0bmluZyBSZXNpc3RhbmNlDQo3JSBpbmNyZWFzZWQgU3R1biBhbmQgQmxvY2sgUmVjb3ZlcnkNCg=="
						},
						"pseudoMods": [
							"(pseudo) +61% total Elemental Resistance",
							"(pseudo) +95.5 total maximum Life",
							"Sum: 252"
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

	updateItemsProgitemress(text, ratio) {
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
