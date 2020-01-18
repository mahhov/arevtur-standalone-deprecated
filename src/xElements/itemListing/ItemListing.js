const {XElement, importUtil} = require('xx-element');
const {template, name} = importUtil(__filename);

customElements.define(name, class extends XElement {
	static get attributeTypes() {
		return {selected: {boolean: true}, hovered: {boolean: true}};
	}

	static get htmlTemplate() {
		return template;
	}

	connectedCallback() {
		this.$('#whisper-button').addEventListener('click', e => {
			navigator.clipboard.writeText(this.itemData_.whisper);
			e.stopPropagation();
		});
		this.addEventListener('click', () => this.emit('select'));
		this.addEventListener('mouseenter', () => {
			if (!this.hovered)
				this.emit('hover', true);
		});
		this.addEventListener('mouseleave', () => this.emit('hover', false));
	}

	set itemData(value) {
		this.itemData_ = value;

		// todo display whisper, account, socket, armour/evasion/es, implicits, open affixes, craftedMods
		// enchantMods, implicitMods, fracturedMods, explicitMods, craftedMods, pseudoMods, rproperties

		XElement.clearChildren(this.$('#details-list'));

		let name = document.createElement('div');
		name.textContent = value.name;
		this.$('#details-list').appendChild(name);

		value.explicitMods.forEach(mod => {
			let modDiv = document.createElement('div');
			modDiv.textContent = mod;
			this.$('#details-list').appendChild(modDiv);
		});

		this.$('#value-text').textContent = value.evalValue;
		this.$('#price-text').textContent = value.priceText;
		this.$('#whisper-button').textContent = value.accountText;

		this.selected = value.selected;
		this.hovered = value.hovered;
	}

	set selected(value) {
		this.classList.toggle('selected', value);
	}

	set hovered(value) {
		this.classList.toggle('hovered', value);
	}
});

// todo on hover, highlight chart dot
