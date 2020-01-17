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
		this.ctx.font = '14px serif';
		this.$('canvas').addEventListener('mousedown', e => {
			if (e.ctrlKey)
				this.emit('action-click', this.pixelToCoord(e.offsetX, e.offsetY));
			else
				this.mouseDown = {x: e.offsetX, y: e.offsetY};
		});
		this.$('canvas').addEventListener('mousemove', e => {
			if (this.mouseDown) {
				if (e.buttons & 1)
					this.panRange(e.offsetX - this.mouseDown.x, e.offsetY - this.mouseDown.y);
				else if (e.buttons & 2)
					this.zoomRange(e.offsetX - this.mouseDown.x, e.offsetY - this.mouseDown.y);
				this.mouseDown = {x: e.offsetX, y: e.offsetY};
			}
		});
		document.addEventListener('mouseup', () => this.mouseDown = null);
		this.$('canvas').addEventListener('dblclick', () => {
			this.resetRange();
			this.draw();
		});
		this.$('canvas').addEventListener('contextmenu', e => e.preventDefault());
	}

	set width(value) {
		this.$('canvas').width = value;
	}

	set height(value) {
		this.$('canvas').height = value;
	}

	set pointSets(value) {
		this.pointSets_ = value;
		this.resetRange();
		this.draw();
	}

	resetRange() {
		let allPoints = this.pointSets_.flatMap(({points}) => points);
		[this.minX, this.deltaX] = Chart.getRange(allPoints.map(({x}) => x));
		[this.minY, this.deltaY] = Chart.getRange(allPoints.map(({y}) => y));
	}

	panRange(x, y) {
		this.minX -= x * this.deltaX / this.width;
		this.minY += y * this.deltaY / this.height;
		this.draw();
	}

	zoomRange(x, y) {
		let dx = x * this.deltaX / this.width;
		let dy = -y * this.deltaY / this.height;
		this.minX += dx;
		this.minY += dy;
		this.deltaX -= dx * 2;
		this.deltaY -= dy * 2;
		this.draw();
	}

	draw() {
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.drawPoints();
		this.drawAxis();
	}

	drawPoints() {
		this.pointSets_.forEach(({color, size, points, isPath}) => {
			if (isPath) {
				this.ctx.lineWidth = size;
				this.ctx.strokeStyle = color;
				this.ctx.beginPath();
				points.forEach((p, i) => {
					let {x, y} = this.coordToPixel(p.x, p.y);
					if (!i)
						this.ctx.moveTo(x, y);
					else
						this.ctx.lineTo(x, y);
				});
				this.ctx.stroke();
			} else {
				this.ctx.fillStyle = color;
				points.forEach(p => {
					let {x, y} = this.coordToPixel(p.x, p.y);
					this.ctx.fillRect(x - size / 2, y - size / 2, size, size);
				});
			}
		});
	}

	drawAxis() {
		let n = 20;
		let step = this.width / n;
		let size = 10;
		let sizeSmall = 1;

		this.ctx.lineWidth = 1;
		this.ctx.strokeStyle = `rgb(0,0,0)`;
		this.ctx.fillStyle = `rgb(0,0,0)`;
		this.ctx.strokeRect(this.width / n, this.height * (n - 1) / n, this.width * (n - 2) / n, 0); // x axis line
		this.ctx.strokeRect(this.width / n, this.height / n, 0, this.width * (n - 2) / n); // y axis line
		for (let i = 2; i < n; i += 2) {
			let x = i * step;
			let y = (n - i) * step;
			let xText = (this.minX + i / n * this.deltaX).toFixed(0);
			let yText = (this.minY + i / n * this.deltaY).toFixed(0);
			this.ctx.fillText(xText, x - 9, step * (n - 1) + 17); // x axis text
			this.ctx.fillText(yText, step - 28, y + 4, 30); // y axis text
			// todo center text on axis tick
			this.ctx.fillRect(x - sizeSmall / 2, step * (n - 1) - size / 2, sizeSmall, size); // x axis dots
			this.ctx.fillRect(step - size / 2, x - sizeSmall / 2, size, sizeSmall); // y axis dots
		}
	}

	pixelToCoord(x, y) {
		x = x / this.width * this.deltaX + this.minX;
		y = (1 - y / this.height) * this.deltaY + this.minY;
		return {x, y};
	}

	coordToPixel(x, y) {
		x = (x - this.minX) / this.deltaX * this.width;
		y = (1 - (y - this.minY) / this.deltaY) * this.height;
		return {x, y};
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
