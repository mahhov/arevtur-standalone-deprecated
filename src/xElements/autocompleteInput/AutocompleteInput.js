const {XElement} = require('xx-element');
const template = require('fs').readFileSync(`${__dirname}/AutocompleteInput.html`, 'utf8');

customElements.define('x-autocomplete-input', class AutocompleteInput extends XElement {
	static get attributeTypes() {
		return {size: false, value: false};
	}

	static get htmlTemplate() {
		return template;
	}

	connectedCallback() {
		this.$('input').addEventListener('input', () => this.updateAutocompletes());
		this.autocompletes = [];
		this.size = 10;
	}

	set autocompletes(value) {
		this.autocompletes_ = value;
		this.updateAutocompletes();
	}

	set size(value) {
		this.$('select').size = value;
		XElement.clearChildren(this.$('select'));
		for (let i = 0; i < this.size; i++) {
			let optionEl = document.createElement('option');
			this.$('select').appendChild(optionEl);
			optionEl.addEventListener('click', () => this.value = optionEl.textContent);
		}
		this.updateAutocompletes();
	}

	set value(value) {
		this.$('input').value = value;
	}

	updateAutocompletes() {
		let optionValues = AutocompleteInput.smartFilter(this.$('input').value, this.autocompletes_, this.size);
		this.$$('select option').forEach((el, i) => el.textContent = optionValues[i]);
	}

	static smartFilter(input, array, maxSize = Infinity) {
		if (!input)
			return array.slice(0, maxSize);

		const regexSpecial = '.*+?^${}()|[]\\';
		let inputRegexString = [...input.replace(/\s/g, '')]
			.map(c => regexSpecial.includes(c) ? '\\' + c : c)
			.join('(.* )?');
		let inputRegex = new RegExp(inputRegexString, 'i');

		let size = 0;
		return array.filter(v =>
			size < maxSize && inputRegex.test(v.match(/[a-z]+|[A-Z][a-z]*|\d+|./g).join(' ')) && ++size);
	};
});
