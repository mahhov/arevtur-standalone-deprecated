const {XElement, importUtil} = require('xx-element');
const {template, name} = importUtil(__filename);
const DataFetcher = require('../../DataFetcher');

customElements.define(name, class Inputs extends XElement {
	static get attributeTypes() {
		return {};
	}

	static get htmlTemplate() {
		return template;
	}

	connectedCallback() {
		this.inputSetIndex = parseInt(localStorage.getItem('input-set-index')) || 0;
		this.inputSets = JSON.parse(localStorage.getItem('input-sets')) || [];
		this.$('#submit-button').addEventListener('click', () => this.emit('submit'));
		this.$('#input-params').loadQueryParams(this.inputSets[this.inputSetsIndex]);
		this.$('#input-params').addEventListener('change', () => {
			this.inputSets[this.inputSetIndex] = this.$('#input-params').queryParams;
			localStorage.setItem('input-sets', JSON.stringify(this.inputSets));
		});
	}

	get query() {
		let {type, minValue, maxPrice, weightEntries, andEntries, notEntries} = this.inputSets[this.inputSetIndex];
		let weights = Object.fromEntries(weightEntries);
		let ands = Object.fromEntries(andEntries);
		let nots = Object.fromEntries(notEntries);
		return DataFetcher.formQuery(type, weights, ands, nots, parseInt(minValue), maxPrice);
	}
});
