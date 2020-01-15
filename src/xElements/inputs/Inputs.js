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
			// todo
		});
		this.$('#add-input-set-button').addEventListener('click', e => {
			this.inputSets.push({});
			let inputSetEl = this.addInputSetEl();
			this.setInputSetIndex(this.inputSets.length - 1, null, !e.ctrlKey);
			this.store();
		});
		this.$('#input-params').addEventListener('change', () => {
			this.inputSets[this.inputSetIndex].queryParams = this.$('#input-params').queryParams;
			this.store();
		});
		this.$('#submit-button').addEventListener('click', () => this.emit('submit'));

		this.inputSets.forEach(inputSet => {
			let inputSetEl = this.addInputSetEl();
			inputSetEl.name = inputSet.name;
			inputSetEl.active = inputSet.active;
		});
		this.setInputSetIndex(this.inputSetIndex);
	}

	setInputSetIndex(index, fromEl = null, exclusive = true) {
		// if fromEl is specified, index is ignored
		let indexSetEls = [...this.$('#input-set-list').children];
		this.inputSetIndex = fromEl ? indexSetEls.indexOf(fromEl) : index;
		if (exclusive)
			indexSetEls.forEach(indexSetEl => indexSetEl.active = false);
		indexSetEls.forEach(indexSetEl => indexSetEl.selected = false);
		indexSetEls[this.inputSetIndex].active = true;
		indexSetEls[this.inputSetIndex].selected = true;
		this.$('#input-params').loadQueryParams(this.inputSets[this.inputSetIndex].queryParams);
	}

	inputSetIndexFromEl(inputSetEl) {
		let indexSetEls = [...this.$('#input-set-list').children];
		return indexSetEls.indexOf(inputSetEl);
	}

	inputSetFromEl(inputSetEl) {
		let index = this.inputSetIndexFromEl(inputSetEl);
		return this.inputSets[index];
	}

	addInputSetEl() {
		let inputSetEl = document.createElement('x-input-set');
		inputSetEl.slot = 'list';
		this.$('#input-set-list').appendChild(inputSetEl);
		inputSetEl.addEventListener('click', e =>
			this.setInputSetIndex(0, inputSetEl, !e.ctrlKey));
		inputSetEl.addEventListener('name-change', () => {
			this.inputSetFromEl(inputSetEl).name = inputSetEl.name;
			this.store();
		});
		inputSetEl.addEventListener('active-change', () => {
			this.inputSetFromEl(inputSetEl).active = inputSetEl.active;
			this.store();
		});
		inputSetEl.addEventListener('remove', () => {
			let index = this.inputSetIndexFromEl(inputSetEl);
			if (this.inputSetIndex >= index && this.inputSetIndex)
				this.inputSetIndex--;
			this.inputSets.splice(index, 1);
			inputSetEl.remove();
			if (!this.inputSets.length) {
				this.inputSets.push({});
				this.addInputSetEl();
				this.setInputSetIndex(0);
			} else
				this.setInputSetIndex(this.inputSetIndex);
			this.store();
		});
		return inputSetEl;
	}

	store() {
		localStorage.setItem('input-set-index', this.inputSetIndex);
		localStorage.setItem('input-sets', JSON.stringify(this.inputSets));
	}

	get query() {
		let {type, minValue, maxPrice, weightEntries, andEntries, notEntries} = this.inputSets[this.inputSetIndex].queryParams;
		let weights = Object.fromEntries(weightEntries);
		let ands = Object.fromEntries(andEntries);
		let nots = Object.fromEntries(notEntries);
		return DataFetcher.formQuery(type, weights, ands, nots, parseInt(minValue), maxPrice);
	}
});
