const {XElement, importUtil} = require('xx-element');
const {template, name} = importUtil(__filename);

customElements.define(name, class extends XElement {
	static get attributeTypes() {
		return {};
	}

	static get htmlTemplate() {
		return template;
	}

	connectedCallback() {
		this.$('#whisper-button').addEventListener('click', () => this.copyWhisper());
	}

	set itemData(value) {
		this.itemData_ = value;

		// todo display whisper, account, socket, armour/evasion/es, implicits, open affixes, craftedMods
		// enchantMods, implicitMods, fracturedMods, explicitMods, craftedMods, pseudoMods, rproperties
		$c('div', ['item-name'], value.name, this.$('#details-list'));
		value.explicitMods.forEach(mod =>
			$c('div', ['item-mod'], mod, this.$('#details-list')));

		this.$('#value-text').textContent = value.evalValue;
		this.$('#price-text').textContent = value.priceText;
		this.$('#whisper-button').textContent = value.accountText;
	}

	copyWhisper() {
		navigator.clipboard.writeText(this.itemData_.whisper);
	}
});

// todo on hover, highlight chart dot
