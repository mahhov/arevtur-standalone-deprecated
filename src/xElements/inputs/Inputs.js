const {XElement, importUtil} = require('xx-element');
const {template, name} = importUtil(__filename);
const ApiConstants = require('../../ApiConstants');
const DataFetcher = require('../../DataFetcher');

customElements.define(name, class extends XElement {
	static get attributeTypes() {
		return {type: {}, value: {}, price: {}};
	}

	static get htmlTemplate() {
		return template;
	}

	connectedCallback() {
		this.queryPropertyTexts = ApiConstants.PROPERTIES_FLAT.map(property => property.text);
		this.$('#type-input').autocompletes = ApiConstants.TYPES.map(({text}) => text);
		this.$('#add-property-button').addEventListener('click', () => this.addQueryProperty());
		this.$('#submit-button').addEventListener('click', () => this.emit('submit'));
		this.restore();
		this.addQueryProperty();
	}

	restore() {
		let lastQueryInputs = JSON.parse(localStorage.getItem('last-query-inputs')) ||
			{weightEntries: [], andEntries: [], notEntries: []};
		this.$('#type-input').value = ApiConstants.TYPES_ID_TO_TEXT[lastQueryInputs.type];
		this.$('#value-input').value = lastQueryInputs.minValue;
		this.$('#price-input').value = lastQueryInputs.maxPrice;
		lastQueryInputs.weightEntries
			.forEach(([property, weight, locked], i) => {
				let queryProperty = this.addQueryProperty();
				queryProperty.property = ApiConstants.PROPERTIES_ID_TO_TEXT[property];
				queryProperty.weight = weight;
				queryProperty.filter = 'weight';
				queryProperty.locked = locked;
			});
		lastQueryInputs.andEntries
			.forEach(([property, weight, locked]) => {
				let queryProperty = this.addQueryProperty();
				queryProperty.property = ApiConstants.PROPERTIES_ID_TO_TEXT[property];
				queryProperty.weight = weight;
				queryProperty.filter = 'and';
				queryProperty.locked = locked;
			});
		lastQueryInputs.notEntries
			.forEach(([property]) => {
				let queryProperty = this.addQueryProperty();
				queryProperty.property = ApiConstants.PROPERTIES_ID_TO_TEXT[property];
				queryProperty.filter = 'not';
			});
	}

	store() {
		localStorage.setItem('last-query-inputs', JSON.stringify({
			type,
			minValue,
			maxPrice,
			weightEntries,
			andEntries,
			notEntries
		}));
	}

	addQueryProperty() {
		let queryProperty = document.createElement('x-query-property');
		queryProperty.properties = this.queryPropertyTexts;
		queryProperty.slot = 'list';
		this.$('#query-properties-list').appendChild(queryProperty);
		queryProperty.addEventListener('change', () => {
			if (queryProperty === this.$('#query-properties-list').lastChild && !queryProperty.empty)
				this.addQueryProperty();
			if (queryProperty.previousSibling && queryProperty.weight !== queryProperty.previousSibling.weight)
				queryProperty.locked = false;
			let next = queryProperty.nextSibling;
			while (next && next.locked) {
				next.weight = queryProperty.weight;
				next = next.nextSibling;
			}
		});
		queryProperty.addEventListener('lock-change', () => {
			// todo update locking status when dragging
			if (!queryProperty.locked)
				return;
			if (!queryProperty.previousSibling)
				return queryProperty.locked = false;
			queryProperty.weight = queryProperty.previousSibling.weight;
			let next = queryProperty.nextSibling;
			while (next && next.locked) {
				next.weight = queryProperty.weight;
				next = next.nextSibling;
			}
		});
		queryProperty.addEventListener('remove', () => queryProperty.remove());
		return queryProperty;
	};

	get query() {
		let type = ApiConstants.TYPES_TEXT_TO_ID[this.$('#type-input').value];
		let minValue = this.$('#value-input').value;
		let maxPrice = this.$('#price-input').value;
		if (!type || !minValue || !maxPrice)
			return;

		let propertyEntries = [...this.$$('#query-properties-list x-query-property')]
			.map(queryProperty => ({
				propertyId: ApiConstants.PROPERTIES_TEXT_TO_ID[queryProperty.property],
				weight: queryProperty.weight,
				filter: queryProperty.filter,
				locked: queryProperty.locked,
			})).filter(({propertyId}) => propertyId);

		let weightEntries = propertyEntries
			.filter(entry => entry.filter === 'weight' && entry.weight)
			.map(entry => [entry.propertyId, entry.weight, entry.locked]);
		let weights = Object.fromEntries(weightEntries);

		let andEntries = propertyEntries
			.filter(entry => entry.filter === 'and' && entry.weight)
			.map(entry => [entry.propertyId, entry.weight, entry.locked]);
		let ands = Object.fromEntries(andEntries);

		let notEntries = propertyEntries
			.filter(entry => entry.filter === 'not')
			.map(entry => [entry.propertyId]);
		let nots = Object.fromEntries(notEntries);

		if (!weightEntries.length && !andEntries.length && !notEntries.length)
			return;

		// this.store(); // todo save on input change rather than wait on submit. reuse saved summary for get query
		localStorage.setItem('last-query-inputs', JSON.stringify({
			type,
			minValue,
			maxPrice,
			weightEntries,
			andEntries,
			notEntries
		}));

		return DataFetcher.formQuery(type, weights, ands, nots, parseInt(minValue), maxPrice);
	}

});
