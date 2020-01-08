var http = require('http');

let unique, get, url, data, stashes, league = 'Metamorph', stash;

unique = a => a.filter((v, i, a) => a.indexOf(v) === i);

get = url =>
	new Promise((resolve, reject) => {
		http.get(url, res => {
			if (res.statusCode < 200 || res.statusCode >= 300)
				reject(res);
			let body = [];
			res.on('data', chunk => body.push(chunk));
			res.on('end', () => {
				try {
					body = JSON.parse(Buffer.concat(body).toString());
				} catch (e) {
					reject(e);
				}
				resolve(body);
			});
		}).on('error', reject);
	});

url = 'http://www.pathofexile.com/api/public-stash-tabs?id=569000383-586858977-555563367-632619097-601222292';

// get(url).then(x => {
// 	data = x;
// 	stashes = data.stashes.filter(s => s.items.length && s.league === league);
// 	stash = stashes[0];
// 	console.log(Object.keys(stash));
// 	console.log('updated data');
// });

let start = async id => {
	while (true) {
		let data = await get(`http://www.pathofexile.com/api/public-stash-tabs?id=${id}`);
		console.log(`Got ${data.stashes.length} stashes. Next id ${data.next_change_id}`);
		id = data.next_change_id;
	}
};

start('569026228-586882521-555590238-632645988-601248360');
