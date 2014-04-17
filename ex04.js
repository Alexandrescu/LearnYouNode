/* Counting the number of files async */

/*
	Usually callback functions in node.js look like:

	function callback (err, data) { ... }
*/

var fs = require('fs');

function countLines(err, data) {
	if(err == null)
		console.log(data.toString().split("\n").length - 1);
	else console.log(err);
}

fs.readFile(process.argv[2], countLines);