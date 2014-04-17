/* Doing a http get */

http = require('http');

/*
	http.get() is a callback function such as:

	function callback (respone) { 
		...
		where the response is a Node Stream object
		
		Objects that emit events (like data, error, end);

		the response has a setEncoding (maybe json) 
		...
	}
*/

function callback (response) {
	response.setEncoding("utf8");
	response.on("data", function(data) {
		console.log(data);	
	});
	response.on("error", console.error);
}

http.get(process.argv[2], callback);