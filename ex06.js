/* Filtering the files from directory (ls like) - implementation using modules */

var lib = require('./ex06_functions.js');

var dir = process.argv[2];
var ext = process.argv[3];

/* Or lib.filter for alias usage */

lib(dir, ext, function(err, files) {
	files.forEach(function(entry) {
		console.log(entry); 
	});
})