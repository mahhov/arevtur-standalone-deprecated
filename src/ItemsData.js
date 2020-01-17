class ItemsData {
	constructor() {
		this.clear();
	}

	clear() {
		this.items = [];
	}

	join(items) {
		this.items = this.items.concat(items)
			.filter((v, i, a) => a.findIndex(vv => vv.id === v.id) === i)
			.sort((a, b) => b.evalValue - a.evalValue || a.evalPrice - b.evalPrice);
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

	get length() {
		return this.items.length;
	}

	static itemsToPoints(items) {
		items.map(item => ({x: item.evalPrice, y: item.evalValue}));
	}
}

module.exports = ItemsData;
