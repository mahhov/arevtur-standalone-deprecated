class Searcher {
	constructor(searchText) {
		let searchRegexString = searchText
			.replace(/[.*+?^${}()|[\]\\]/g, '\\$1')
			.replace(/\s+/g, '(.* )?');
		this.searchRegex = new RegExp(searchRegexString, 'i');
	}

	test(string) {
		return this.searchRegex.test(string);
	}
}

module.exports = Searcher;
