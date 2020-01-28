const {XElement, importUtil} = require('xx-element');
const {template, name} = importUtil(__filename);
const ApiConstants = require('../../ApiConstants');

const QUERY_PROPERTY_TEXTS = ApiConstants.PROPERTIES_FLAT.map(property => property.text);

const defensePropertyTuples = [
	['evasion', '#evasion-input'],
	['armour', '#armour-input'],
	['energyShield', '#energy-shield-input'],
];

customElements.define(name, class extends XElement {
	static get attributeTypes() {
		return {
			type: {},
			minValue: {},
			price: {},
			evasion: {},
			armour: {},
			energyShield: {},
			linked: {boolean: true}
		};
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
		defensePropertyTuples.forEach(([property, query]) => {
			this.$(query).addEventListener('change', () => {
				this[property] = this.$(query).value;
				this.updateQueryParams();
			});
		});
		this.$('#linked-check').addEventListener('change', () => {
			this.linked = this.$('#linked-check').checked;
			this.updateQueryParams();
		});
		this.$('#query-properties-list').addEventListener('arrange', () => {
			this.checkProperties();
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

	set evasion(value) {
		this.$('#evasion-input').value = value;
	}

	set armour(value) {
		this.$('#armour-input').value = value;
	}

	set energyShield(value) {
		this.$('#energy-shield-input').value = value;
	}

	set linked(value) {
		this.$('#linked-check').checked = value;
	}

	loadQueryParams(queryParams = {minValue: 0, maxPrice: 0, defenseProperties: {}, linked: false, weightEntries: [], andEntries: [], notEntries: []}, sharedWeightEntries) {
		this.type = ApiConstants.TYPES_ID_TO_TEXT[queryParams.type] || '';
		this.minValue = queryParams.minValue;
		this.price = queryParams.maxPrice;
		defensePropertyTuples.forEach(([property]) => {
			let defenseProperty = queryParams.defenseProperties[property];
			this[property] = defenseProperty ? defenseProperty.weight : 0;
		});
		this.linked = queryParams.linked;
		XElement.clearChildren(this.$('#query-properties-list'));
		sharedWeightEntries
			.forEach(([property, weight, locked]) => {
				let queryProperty = this.addQueryProperty();
				queryProperty.property = ApiConstants.PROPERTIES_ID_TO_TEXT[property];
				queryProperty.weight = weight;
				queryProperty.filter = 'weight';
				queryProperty.locked = locked;
				queryProperty.shared = true;
			});
		queryParams.weightEntries
			.forEach(([property, weight, locked]) => {
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

	checkProperties() {
		let queryProperties = this.$$('#query-properties-list x-query-property');

		// check locked checkboxes
		queryProperties.forEach(queryProperty =>
			queryProperty.locked = queryProperty.locked && queryProperty.previousSibling &&
				queryProperty.weight === queryProperty.previousSibling.weight &&
				queryProperty.filter === queryProperty.previousSibling.filter &&
				queryProperty.filter !== 'not');

		// check shared checkboxes
		queryProperties.forEach(queryProperty =>
			queryProperty.shared = queryProperty.shared && queryProperty.filter === 'weight');

		// check if last input is empty
		if (this.$('#query-properties-list').lastChild.property)
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
			this.checkProperties();
			this.updateQueryParams();
		});
		queryProperty.addEventListener('lock-change', () => {
			if (!queryProperty.locked)
				return;
			if (!queryProperty.previousSibling)
				return queryProperty.locked = false;
			queryProperty.weight = queryProperty.previousSibling.weight;
			this.propagateLockedWeights(queryProperty);
			this.checkProperties();
			this.updateQueryParams();
		});
		queryProperty.addEventListener('share-change', () => {
			this.checkProperties();
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

		let defenseProperties = Object.fromEntries(defensePropertyTuples
			.map(([property]) => [property, {weight: parseInt(this[property]), min: 0}]));

		let propertyEntries = [...this.$$('#query-properties-list x-query-property')]
			.map(queryProperty => ({
				propertyId: ApiConstants.PROPERTIES_TEXT_TO_ID[queryProperty.property],
				weight: queryProperty.weight,
				filter: queryProperty.filter,
				locked: queryProperty.locked,
				shared: queryProperty.shared,
			})).filter(({propertyId}) => propertyId);

		let sharedWeightEntries = propertyEntries
			.filter(entry => entry.filter === 'weight' && entry.weight && entry.shared)
			.map(entry => [entry.propertyId, entry.weight, entry.locked]);
		let weightEntries = propertyEntries
			.filter(entry => entry.filter === 'weight' && entry.weight && !entry.shared)
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
			defenseProperties,
			linked: this.linked,
			weightEntries,
			andEntries,
			notEntries
		};
		this.sharedWeightEntries = sharedWeightEntries;

		this.emit('change');
	}
});
