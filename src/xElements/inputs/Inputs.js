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
		this.inputSets = JSON.parse(localStorage.getItem('input-sets')) || [{}];

		this.$('#input-set-list').addEventListener('arrange', () => {
			this.checkLocksAndEmptyQueryProperty();
			this.updateQueryParams();
			// todo
		});
		this.$('#add-input-set-button').addEventListener('click', e => {
			this.inputSetIndex = this.inputSets.push({});
			let inputSetEl = this.addQuerySetEl();
			// todo extract below 6 duplicate lines
			let indexSetEls = [...this.$('#input-set-list').children];
			if (!e.ctrlKey)
				indexSetEls.forEach(indexSetEl => indexSetEl.active = false);
			inputSetEl.active = true;
			this.inputSetIndex = indexSetEls.indexOf(inputSetEl);
			this.loadSelectedInputSet();
		});
		this.$('#input-params').addEventListener('change', () => {
			this.inputSets[this.inputSetIndex].queryParams = this.$('#input-params').queryParams;
			this.store();
		});
		this.$('#submit-button').addEventListener('click', () => this.emit('submit'));

		this.inputSets.forEach(inputSet => {
			let inputSetEl = this.addQuerySetEl();
			inputSetEl.name = inputSet.name;
			inputSetEl.active = inputSet.active;
		});
		this.loadSelectedInputSet();
	}

	addQuerySetEl() {
		let inputSetEl = document.createElement('x-input-set');
		inputSetEl.slot = 'list';
		inputSetEl.name = '';
		this.$('#input-set-list').appendChild(inputSetEl);
		inputSetEl.addEventListener('click', e => {
			let indexSetEls = [...this.$('#input-set-list').children];
			if (!e.ctrlKey)
				indexSetEls.forEach(indexSetEl => indexSetEl.active = false);
			inputSetEl.active = true;
			this.inputSetIndex = indexSetEls.indexOf(inputSetEl);
			this.loadSelectedInputSet();
			this.store();
		});
		inputSetEl.addEventListener('name-change', () => {
			let index = [...this.$('#input-set-list').children].indexOf(inputSetEl);
			this.inputSets[this.inputSetIndex].name = inputSetEl.name;
			this.store();
		});
		inputSetEl.addEventListener('active-change', () => {
			let index = [...this.$('#input-set-list').children].indexOf(inputSetEl);
			this.inputSets[this.inputSetIndex].active = inputSetEl.active;
			this.store();
		});
		inputSetEl.addEventListener('remove', () => {
			let inputSetEls = [...this.$('#input-set-list').children];
			let index = inputSetEls.indexOf(inputSetEl);
			if (this.inputSetIndex >= index)
				this.inputSetIndex--;
			this.inputSets.splice(index, 1);
			if (!this.inputSets.length) {
				this.inputSets.push({});
				this.inputSetIndex = 0;
				let inputSetEl = this.addQuerySetEl();
				inputSetEl.active = true;
			}
			inputSetEl.remove();
			inputSetEls[this.inputSetIndex].active = true;
			this.store();
		});
		return inputSetEl;
	}

	loadSelectedInputSet() {
		this.$('#input-params').loadQueryParams(this.inputSets[this.inputSetIndex].queryParams);
	}

	store() {
		localStorage.setItem('input-set-index', this.inputSetIndex);
		localStorage.setItem('input-sets', JSON.stringify(this.inputSets));
	}

	get query() {
		let {type, minValue, maxPrice, weightEntries, andEntries, notEntries} = this.inputSets[this.inputSetIndex];
		let weights = Object.fromEntries(weightEntries);
		let ands = Object.fromEntries(andEntries);
		let nots = Object.fromEntries(notEntries);
		return DataFetcher.formQuery(type, weights, ands, nots, parseInt(minValue), maxPrice);
	}
});
