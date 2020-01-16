const {XElement, importUtil} = require('xx-element');
const {template, name} = importUtil(__filename);

customElements.define(name, class Chart extends XElement {
	static get attributeTypes() {
		return {width: {}, height: {}};
	}

	static get htmlTemplate() {
		return template;
	}

	connectedCallback() {
		this.ctx = this.$('canvas').getContext('2d');
		this.ctx.font = '18px serif';
	}

	set width(value) {
		this.$('canvas').width = value;
	}

	set height(value) {
		this.$('canvas').height = value;
	}

	set pointSets(value) {
		this.ctx.clearRect(0, 0, this.width, this.height);

		let allPoints = value.flatMap(({points}) => points);
		let [minX, deltaX] = Chart.getRange(allPoints.map(({x}) => x));
		let [minY, deltaY] = Chart.getRange(allPoints.map(({y}) => y));

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
		this.ctx.strokeRect(this.width / n, this.height * (n - 1) / n, this.width * (n - 2) / n, 0); // x axis line
		this.ctx.strokeRect(this.width / n, this.height / n, 0, this.width * (n - 2) / n); // y axis line
		let step = this.width / n;
		for (let i = 2; i < n; i += 2) {
			let x = i * step;
			let y = (n - i) * step;
			let size = 10;
			let sizeSmall = 1;
			let xText = (minX + i / n * deltaX).toFixed(1);
			let yText = (minY + i / n * deltaY).toFixed(1);
			this.ctx.fillText(xText, x - 9, step * (n - 1) + 17); // x axis text
			this.ctx.fillText(yText, step - 25, y + 4, 30); // y axis text
			this.ctx.fillRect(x - sizeSmall / 2, step * (n - 1) - size / 2, sizeSmall, size); // x axis dots
			this.ctx.fillRect(step - size / 2, x - sizeSmall / 2, size, sizeSmall); // y axis dots
		}
	}

	static getRange(values, buffer = .1) {
		let min = Math.min(...values);
		let max = Math.max(...values);
		let delta = max - min;
		return [min - delta * buffer, delta + delta * buffer * 2]
	}
});

// todo clicking on chart point will scroll to item in list
// todo zoom and pan
