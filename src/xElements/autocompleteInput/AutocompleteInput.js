const {XElement} = require('xx-element');
const template = require('fs').readFileSync(`${__dirname}/AutocompleteInput.html`, 'utf8');

customElements.define('x-autocomplete-input', class AutocompleteInput extends XElement {
	static get attributeTypes() {
		return {size: false, value: false, placeholder: false};
	}

	static get htmlTemplate() {
		return template;
	}

	connectedCallback() {
		// todo fix: type incomplete text, press enter, text is cleared
		// todo arrow keys shouldn't scroll page
		this.$('input').addEventListener('change', () => this.internalSetValue(this.$('input').value));
		this.$('input').addEventListener('input', () => {
			this.updateAutocompletes();
			this.$('select').selectedIndex = -1;
		});
		this.$('input').addEventListener('keydown', e => {
			if (e.key === 'ArrowDown') {
				this.$('select').selectedIndex = 0;
				this.$('select').focus();
			} else if (e.key === 'ArrowUp') {
				this.$('select').selectedIndex = this.$('select').length - 1;
				this.$('select').focus();
			}
		});
		this.$('select').addEventListener('keydown', e => {
			if (e.key === 'Enter')
				this.internalSetValue(this.$('select').selectedOptions[0].value);
			let arrowOut =
				e.key === 'ArrowDown' && this.$('select').selectedIndex === this.$('select').length - 1 ||
				e.key === 'ArrowUp' && this.$('select').selectedIndex === 0;
			if (arrowOut)
				e.preventDefault();
			if (arrowOut || e.key === 'Escape' || e.key === 'Enter' ||
				e.key.length === 1 || e.key === 'Backspace' || e.key === 'Delete') {
				this.$('select').selectedIndex = -1;
				this.$('input').focus();
			}
		});
		this.autocompletes = this.autocompletes || [];
		this.size = this.size || 10;
	}

	set autocompletes(value) {
		if (value === this.autocompletes_)
			return;
		this.autocompletes_ = value;
		this.updateAutocompletes();
	}

	get autocompletes() {
		return this.autocompletes_;
	}

	set size(value) {
		this.$('select').size = value;
		this.updateAutocompletes();
	}

	set value(value) {
		if (value && !this.autocompletes.includes(value)) {
			this.value = '';
			this.$('input').value = value;
			return;
		}
		this.$('input').value = value;
	}

	set placeholder(value) {
		this.$('input').placeholder = value;
	}

	internalSetValue(value) {
		this.value = value;
		this.emit('change');
	}

	updateAutocompletes() {
		let optionValues = AutocompleteInput.smartFilter(this.$('input').value, this.autocompletes, this.size);
		XElement.clearChildren(this.$('select'));
		optionValues.forEach(v => {
			let optionEl = document.createElement('option');
			optionEl.textContent = v;
			this.$('select').appendChild(optionEl);
			optionEl.addEventListener('click', () => this.internalSetValue(optionEl.textContent));
		});
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
