/* 
	Server which handles only post requests and returns the uppercase of the reuqest
*/

var http = require('http');
var map = require('through2-map');

/* Don't reuse same pipe ... now we are creating a new instance for every request */

var server = http.createServer(function (request, response) {
	if(request.method = 'POST') {
		var upperCase = map(function (chunk) {
			return chunk.toString().toUpperCase();
		});	

		request.pipe(upperCase).pipe(response);
	}
});

var port = process.argv[2];

server.listen(port);