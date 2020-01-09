const {XElement} = require('xx-element');
const template = require('fs').readFileSync(`${__dirname}/Chart.html`, 'utf8');

customElements.define('x-chart', class extends XElement {
	static get attributeTypes() {
		return {width: false, height: false};
	}

	static get htmlTemplate() {
		return template;
	}

	connectedCallback() {
		this.ctx = this.$('canvas').getContext('2d');
	}

	set width(value) {
		this.$('canvas').width = value;
	}

	set height(value) {
		this.$('canvas').height = value;
	}

	set pointSets(value) {
		let allPoints = value.flatMap(({points}) => points);
		let [minX, deltaX] = this.getRange(allPoints.map(({x}) => x));
		let [minY, deltaY] = this.getRange(allPoints.map(({y}) => y));

		value.forEach(({color, size, points}) => {
			this.ctx.fillStyle = color;
			points.forEach(p => {
				let x = (p.x - minX) / deltaX * this.width;
				let y = (1 - (p.y - minY) / deltaY) * this.height;
				this.ctx.fillRect(x - size / 2, y - size / 2, size, size);
			});
		});

		this.ctx.fillStyle = `rgb(0,0,0)`;

		let n = 20;
		let step = this.width / n;
		this.ctx.strokeRect(this.width / n, this.height / n, 0, this.width * (n - 2) / n);
		this.ctx.strokeRect(this.width / n, this.height * (n - 1) / n, this.width * (n - 2) / n, 0);
		for (let i = 1; i < n; i += 2) {
			let x = i * step;
			let s = 4;
			let xText = parseInt(minX + i / n * deltaX);
			let yTet = parseInt(minY + i / n * deltaY);
			this.ctx.fillText(xText, x, step * (n - 1) + 10);
			this.ctx.fillText(yTet, step - 20, x, 30);
			this.ctx.fillRect(x - s / 2, step * (n - 1) - s / 2, s, s);
			this.ctx.fillRect(step - s / 2, x - s / 2, s, s);
		}
	}

	getRange(values, buffer = .1) {
		let min = Math.min(...values);
		let max = Math.max(...values);
		let delta = max - min;
		return [min - delta * buffer, delta + 2 * delta * buffer * 2]
	}
});

// todo clicking on chart point will scroll to item in list
