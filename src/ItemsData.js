class ItemsData {
	constructor() {
		this.clear();
	}

	clear() {
		this.items = [];
		this.corners = [];
	}

	join(items) {
		this.items = this.items.concat(items)
			.filter((v, i, a) => a.findIndex(vv => vv.id === v.id) === i)
			// high to low values, low to high prices
			.sort((a, b) => b.evalValue - a.evalValue || a.evalPrice - b.evalPrice);

		// todo use actual max price query param instead of maximum price of items
		let maxPrice = Math.max(...items.map(item => item.evalPrice));
		let minValue = Math.min(...items.map(item => item.evalValue));
		this.corners.push({evalPrice: maxPrice, evalValue: minValue});
		// low to high value, high to low price
		this.corners.sort((a, b) => a.evalValue - b.evalValue || b.evalPrice - a.evalPrice);
	}

	get borderlineItems() {
		let minPrice = Infinity;
		return this.items.filter(item => {
			if (item.evalPrice >= minPrice)
				return false;
			minPrice = item.evalPrice;
			return true;
		});
	}

	get cornerPath() {
		let maxPrice = -Infinity;
		this.corners = this.corners.filter(item => {
			if (item.evalPrice <= maxPrice)
				return false;
			maxPrice = item.evalPrice;
			return true;
		});

		let path = this.corners.flatMap(({evalValue, evalPrice}, i, a) => {
			return [{evalValue, evalPrice: i ? a[i - 1].evalPrice : 0}, {evalValue, evalPrice}];
		});
		let last = path[path.length - 1];
		path.push({evalValue: Infinity, evalPrice: last.evalPrice});
		path.push({evalValue: Infinity, evalPrice: 0});
		return path;
	}

	get length() {
		return this.items.length;
	}

	static itemsToPoints(items) {
		return items.map(item => ({x: item.evalPrice, y: item.evalValue}));
	}
}

module.exports = ItemsData;
