class ItemsData {
	constructor() {
		this.clear();
	}

	clear() {
		this.items = [];
		this.bestBoundItems = []; // top
		this.searchBoundItems = []; // bottom
	}

	join(items) {
		// update items
		this.items = this.items.concat(items)
			.filter((v, i, a) => a.findIndex(vv => vv.id === v.id) === i)
			// high to low values, low to high prices
			.sort((a, b) => b.evalValue - a.evalValue || a.evalPrice - b.evalPrice);

		// todo use actual max price query param instead of maximum price of items
		this.maxPrice = Math.max(...items.map(item => item.evalPrice));
		let minValue = Math.min(...items.map(item => item.evalValue).filter(v => v > 0));

		// update bestBoundItems
		let minPriceFound = Infinity;
		// ordered top right to bottom left
		this.bestBoundItems = this.items
			.filter(item => {
				if (item.evalPrice >= minPriceFound)
					return false;
				minPriceFound = item.evalPrice;
				return true;
			});

		// update searchBoundItems
		this.searchBoundItems.push({evalPrice: this.maxPrice, evalValue: minValue});
		let maxPriceFound = -Infinity;
		// ordered bottom left to top right
		this.searchBoundItems = this.searchBoundItems
			.sort((a, b) => a.evalValue - b.evalValue || b.evalPrice - a.evalPrice)
			// low to high value, high to low price
			.filter(item => {
				if (item.evalPrice <= maxPriceFound)
					return false;
				maxPriceFound = item.evalPrice;
				return true;
			});
	}

	get bestBoundPath() {
		let path = this.bestBoundItems.flatMap(({evalValue, evalPrice}, i, a) =>
			[{evalValue, evalPrice: i ? a[i - 1].evalPrice : this.maxPrice}, {evalValue, evalPrice}]);
		return ItemsData.itemsToPoints(path);
	}

	get searchBoundPath() {
		let path = this.searchBoundItems.flatMap(({evalValue, evalPrice}, i, a) =>
			[{evalValue, evalPrice: i ? a[i - 1].evalPrice : 0}, {evalValue, evalPrice}]);
		let last = path[path.length - 1];
		path.push({evalValue: Infinity, evalPrice: last.evalPrice});
		path.push({evalValue: Infinity, evalPrice: 0});
		return ItemsData.itemsToPoints(path);
	}

	get length() {
		return this.items.length;
	}

	static itemsToPoints(items) {
		return items.map(item => ({x: item.evalPrice, y: item.evalValue}));
	}
}

module.exports = ItemsData;
