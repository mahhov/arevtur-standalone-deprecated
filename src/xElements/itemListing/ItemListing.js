const {XElement} = require('xx-element');
const template = require('fs').readFileSync(`${__dirname}/ItemListing.html`, 'utf8');

customElements.define('x-item-listing', class extends XElement {
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

		this.$('#price-text').textContent = value.priceText;
		this.$('#whisper-button').textContent = value.accountText;
	}

	copyWhisper() {
		navigator.clipboard.writeText(this.itemData_.whisper);
	}
});

// todo on hover, highlight chart dot
