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

		// todo open affixes, fracturedMods

		this.$('#name-text').textContent = value.name;
		this.$('#type-text').textContent = value.type;

		XElement.clearChildren(this.$('#sockets-list'));
		value.sockets.forEach(socketGroup => {
			let socketDiv = document.createElement('div');
			socketDiv.textContent = socketGroup.join(' ');
			this.$('#sockets-list').appendChild(socketDiv);
		});

		this.$('#corrupted-text').classList.toggle('hidden', !value.corrupted);

		// todo extract duplicated code

		XElement.clearChildren(this.$('#defense-list'));
		value.defenseProperties.forEach(mod => {
			let modDiv = document.createElement('div');
			modDiv.textContent = mod;
			this.$('#defense-list').appendChild(modDiv);
		});

		XElement.clearChildren(this.$('#enchant-list'));
		value.enchantMods.forEach(mod => {
			let modDiv = document.createElement('div');
			modDiv.textContent = mod;
			this.$('#enchant-list').appendChild(modDiv);
		});

		XElement.clearChildren(this.$('#implicit-list'));
		value.implicitMods.forEach(mod => {
			let modDiv = document.createElement('div');
			modDiv.textContent = mod;
			this.$('#implicit-list').appendChild(modDiv);
		});

		XElement.clearChildren(this.$('#explicit-list'));
		value.explicitMods.forEach(mod => {
			let modDiv = document.createElement('div');
			modDiv.textContent = mod;
			this.$('#explicit-list').appendChild(modDiv);
		});

		XElement.clearChildren(this.$('#crafted-list'));
		value.craftedMods.forEach(mod => {
			let modDiv = document.createElement('div');
			modDiv.textContent = mod;
			this.$('#crafted-list').appendChild(modDiv);
		});

		XElement.clearChildren(this.$('#pseudo-list'));
		value.pseudoMods.forEach(mod => {
			let modDiv = document.createElement('div');
			modDiv.textContent = mod;
			this.$('#pseudo-list').appendChild(modDiv);
		});

		this.$('#value-text').textContent = value.evalValue;
		this.$('#value-expanded-text').textContent = value.valueText;
		this.$('#price-text').textContent = value.evalPrice;
		this.$('#price-expanded-text').textContent = value.priceText;
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
