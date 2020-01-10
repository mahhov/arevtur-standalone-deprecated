const {XElement} = require('xx-element');
const template = require('fs').readFileSync(`${__dirname}/QueryProperty.html`, 'utf8');

customElements.define('x-query-property', class extends XElement {
	static get attributeTypes() {
		return {property: false, weight: false};
	}

	static get htmlTemplate() {
		return template;
	}

	connectedCallback() {
		this.$('#property').addEventListener('change', () => {
			this.property = this.$('#property').value;
			this.emit('change');
		});
		this.$('#weight').addEventListener('input', () => {
			this.weight = this.$('#weight').value;
			this.emit('change');
		});
		this.$('#delete').addEventListener('click', () => this.emit('delete'));
	}

	get empty() {
		return !this.property && !this.weight;
	}

	set properties(value) {
		this.$('#property').autocompletes = value;
	}

	set property(value) {
		if (this.$('#property').value !== value)
			this.$('#property').value = value;
	}

	set weight(value) {
		this.$('#weight').value = value;
	}
});
