/* filterint the files from a directory */

var fs = require('fs');
var path = require('path');
var extension = '.' + process.argv[3];

function filter (err, list) {
	list.forEach(function (entry) {
		if(path.extname(entry) === extension) {
			console.log(entry);
		}
	})
}

fs.readdir(process.argv[2], filter);