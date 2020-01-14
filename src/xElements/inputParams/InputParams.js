const {XElement, importUtil} = require('xx-element');
const {template, name} = importUtil(__filename);
const ApiConstants = require('../../ApiConstants');

const QUERY_PROPERTY_TEXTS = ApiConstants.PROPERTIES_FLAT.map(property => property.text);

customElements.define(name, class extends XElement {
	static get attributeTypes() {
		return {type: {}, minValue: {}, price: {}};
	}

	static get htmlTemplate() {
		return template;
	}

	connectedCallback() {
		this.$('#type-input').autocompletes = ApiConstants.TYPES.map(({text}) => text);
		this.$('#type-input').addEventListener('change', () => {
			this.type = this.$('#type-input').value;
			this.updateQueryParams();
		});
		this.$('#min-value-input').addEventListener('change', () => {
			this.minValue = this.$('#min-value-input').value;
			this.updateQueryParams();
		});
		this.$('#price-input').addEventListener('change', () => {
			this.price = this.$('#price-input').value;
			this.updateQueryParams();
		});
		this.$('#query-properties-list').addEventListener('arrange', () => {
			this.checkLocksAndEmptyQueryProperty();
			this.updateQueryParams();
		});
		this.$('#add-property-button').addEventListener('click', () => this.addQueryProperty());
		this.queryParams = {};
	}

	set type(value) {
		this.$('#type-input').value = value;
	}

	set minValue(value) {
		this.$('#min-value-input').value = value;
	}

	set price(value) {
		this.$('#price-input').value = value;
	}

	loadQueryParams(queryParams = {weightEntries: [], andEntries: [], notEntries: []}) {
		this.type = ApiConstants.TYPES_ID_TO_TEXT[queryParams.type] || '';
		this.minValue = queryParams.minValue || 0;
		this.price = queryParams.maxPrice || 0;
		XElement.clearChildren(this.$('#query-properties-list'));
		queryParams.weightEntries
			.forEach(([property, weight, locked], i) => {
				let queryProperty = this.addQueryProperty();
				queryProperty.property = ApiConstants.PROPERTIES_ID_TO_TEXT[property];
				queryProperty.weight = weight;
				queryProperty.filter = 'weight';
				queryProperty.locked = locked;
			});
		queryParams.andEntries
			.forEach(([property, weight, locked]) => {
				let queryProperty = this.addQueryProperty();
				queryProperty.property = ApiConstants.PROPERTIES_ID_TO_TEXT[property];
				queryProperty.weight = weight;
				queryProperty.filter = 'and';
				queryProperty.locked = locked;
			});
		queryParams.notEntries
			.forEach(([property]) => {
				let queryProperty = this.addQueryProperty();
				queryProperty.property = ApiConstants.PROPERTIES_ID_TO_TEXT[property];
				queryProperty.filter = 'not';
			});
		this.addQueryProperty();
		this.updateQueryParams();
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
		queryProperty.properties = QUERY_PROPERTY_TEXTS;
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
		let type = ApiConstants.TYPES_TEXT_TO_ID[this.type];

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
			minValue: this.minValue,
			maxPrice: this.price,
			weightEntries,
			andEntries,
			notEntries
		};

		this.emit('change');
	}
});
