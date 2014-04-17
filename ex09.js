http = require('http');
bl = require('bl');

var urls = process.argv.slice(2);
var results = [];
var filled = 0;

function processResult() {
	results.forEach(function (entry) {
		console.log(entry);
	});
}

function processURL(number, url) {
	http.get(url, function(stream) {

		stream.pipe(bl(function(err, data) {
			results[number] = data.toString();
			filled++;
			
			if(filled == urls.length) {
				processResult();
			}
		}));

	});
}


for(i = 0; i < urls.length; i++) {
	results[i] = null;

	processURL(i, urls[i]);
}
