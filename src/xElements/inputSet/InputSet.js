const {XElement, importUtil} = require('xx-element');
const {template, name} = importUtil(__filename);

customElements.define(name, class extends XElement {
	static get attributeTypes() {
		return {name: {}, active: {boolean: true}}
	}

	static get htmlTemplate() {
		return template;
	}

	connectedCallback() {
		this.$('#name').addEventListener('change', () => {
			this.name = this.$('#name').value;
			this.emit('name-change')
		});
		this.$('#active').addEventListener('input', () => {
			this.active = this.$('#active').checked;
			this.emit('active-change');
		});
		this.$('#remove').addEventListener('click', e => {
			this.emit('remove');
			e.stopPropagation();
		});
		this.name = this.name || '';
	}

	set name(value) {
		this.$('#name').value = value
	}

	set active(value) {
		this.$('#active').checked = value;
	}
});
