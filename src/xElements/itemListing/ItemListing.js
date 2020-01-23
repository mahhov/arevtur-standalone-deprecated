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

		// todo display armour/evasion/es, implicits, open affixes, craftedMods, corrupted
		// enchantMods, implicitMods, fracturedMods, explicitMods, craftedMods, pseudoMods, rproperties

		this.$('#name-row').textContent = value.name;

		XElement.clearChildren(this.$('#sockets-list'));
		value.sockets.forEach(socketGroup => {
			let socketDiv = document.createElement('div');
			socketDiv.textContent = socketGroup.join(' ');
			this.$('#sockets-list').appendChild(socketDiv);
		});

		XElement.clearChildren(this.$('#details-list'));
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
