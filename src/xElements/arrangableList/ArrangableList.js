const {importUtil, XElement} = require('xx-element');
const template = require('fs').readFileSync(`${__dirname}/ArrangableList.html`, 'utf8');

customElements.define('x-arrangable-list', class extends XElement {
	static get attributeTypes() {
		return {};
	}

	static get htmlTemplate() {
		return template;
	}

	connectedCallback() {
	}

	appended(element) {
		element.draggable = true;
		element.addEventListener('dragstart', e => {
			this.dragging = e.target;
			this.dragging.classList.add('dragging');
		});
		element.addEventListener('dragenter', e => {
			let children = [...this.$('slot').assignedElements()[0].children];
			if (children.indexOf(this.dragging) < children.indexOf(e.target))
				e.target.after(this.dragging);
			else
				e.target.before(this.dragging);
		});
		element.addEventListener('dragend', () => {
			this.dragging.classList.remove('dragging');
			this.dragging = null;
		});
	}
});
