/* 
	Server which repsondes the same for every request 
*/

http = require ('http');

/*
	http.createServer takes a Callback function like:

	function callback(request, response) { 
		...
		request - http request (fetch props)
		response - send data to clinet

		both are Node streams

		...
	}
*/

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (request, response) {
	response.writeHead(200, { 'content-type': 'text/plain' });

	fs = require('fs');
	fileStream = fs.createReadStream(file);

	fileStream.pipe(response);
});

/*
	createServer returns an instance of the server - see api doc
*/

server.listen(port);