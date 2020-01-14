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
		this.$('#type-input').addEventListener('change', () => this.updateQueryParams());
		this.$('#value-input').addEventListener('change', () => this.updateQueryParams());
		this.$('#price-input').addEventListener('change', () => this.updateQueryParams());
		this.$('#query-properties-list').addEventListener('arrange', () => {
			this.checkLocksAndEmptyQueryProperty();
			this.updateQueryParams();
		});
		this.$('#add-property-button').addEventListener('click', () => this.addQueryProperty());
		this.$('#submit-button').addEventListener('click', () => this.emit('submit'));
		this.restore();
		this.updateQueryParams();
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

	store(queryParams) {
		localStorage.setItem('last-query-inputs', JSON.stringify(this.queryParams));
	}

	checkLocksAndEmptyQueryProperty() {
		let queryProperties = this.$$('#query-properties-list x-query-property');
		queryProperties.forEach(queryProperty =>
			queryProperty.locked = queryProperty.locked && queryProperty.previousSibling &&
				queryProperty.weight === queryProperty.previousSibling.weight &&
				queryProperty.filter === queryProperty.previousSibling.filter &&
				queryProperty.filter !== 'not');
		if (!this.$('#query-properties-list').lastChild.empty)
			this.addQueryProperty();
	}

	propagateLockedWeights(queryProperty) {
		let next = queryProperty.nextSibling;
		while (next && next.locked) {
			next.weight = queryProperty.weight;
			next = next.nextSibling;
		}
	}

	addQueryProperty() {
		let queryProperty = document.createElement('x-query-property');
		queryProperty.properties = this.queryPropertyTexts;
		queryProperty.slot = 'list';
		this.$('#query-properties-list').appendChild(queryProperty);
		queryProperty.addEventListener('change', () => {
			this.propagateLockedWeights(queryProperty);
			this.checkLocksAndEmptyQueryProperty();
			this.updateQueryParams();
		});
		queryProperty.addEventListener('lock-change', () => {
			if (!queryProperty.locked)
				return;
			if (!queryProperty.previousSibling)
				return queryProperty.locked = false;
			queryProperty.weight = queryProperty.previousSibling.weight;
			this.propagateLockedWeights(queryProperty);
			this.checkLocksAndEmptyQueryProperty();
			this.updateQueryParams();
		});
		queryProperty.addEventListener('remove', () => {
			queryProperty.remove();
			this.updateQueryParams();
		});
		return queryProperty;
	};

	updateQueryParams() {
		let type = ApiConstants.TYPES_TEXT_TO_ID[this.$('#type-input').value];
		let minValue = this.$('#value-input').value;
		let maxPrice = this.$('#price-input').value;

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
		let andEntries = propertyEntries
			.filter(entry => entry.filter === 'and' && entry.weight)
			.map(entry => [entry.propertyId, entry.weight, entry.locked]);
		let notEntries = propertyEntries
			.filter(entry => entry.filter === 'not')
			.map(entry => [entry.propertyId]);

		this.queryParams = {
			type,
			minValue,
			maxPrice,
			weightEntries,
			andEntries,
			notEntries
		};
		this.store(this.queryParams);
	}

	get query() {
		let {type, minValue, maxPrice, weightEntries, andEntries, notEntries} = this.queryParams;
		let weights = Object.fromEntries(weightEntries);
		let ands = Object.fromEntries(andEntries);
		let nots = Object.fromEntries(notEntries);
		return DataFetcher.formQuery(type, weights, ands, nots, parseInt(minValue), maxPrice);
	}
});
