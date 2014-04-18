/*
	Server with 2 API - see routes
*/
var http = require ('http');
var url = require ('url');

//An array of functions
var routes = {
	"/api/parsetime" : function (parsedUrl) {
		d = new Date(parsedUrl.query.iso);
		return {
			hour : d.getHours(),
			minute: d.getMinutes(),
			second: d.getSeconds()
		};
	},

	"/api/unixtime" : function (parsedUrl) {
		d = new Date(parsedUrl.query.iso)
		return {
			unixtime : d.getTime()
		};
	}
}

/* The url module has some features to parse the Url */

server = http.createServer(function (request, response) {
	parsedUrl = url.parse(request.url, true);

	resource = routes[parsedUrl.pathname];
	if(resource) {
		// we have found something we can handle
		response.writeHead(200, {"Content-Type" : "application/json"});
		response.end( JSON.stringify( resource(parsedUrl) ) );
	}
	else {
		// We don't know - not found
		response.writeHead(404);
		response.end();
	}
});

var port = process.argv[2];
server.listen(port);