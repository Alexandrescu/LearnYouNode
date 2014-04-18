/* Buffered http get */

http = require('http');
bl = require ("bl"); /* buffer list */


http.get(process.argv[2], function (respStream) {
	respStream.pipe(
		bl (
			function(err, data) {
				if(err) 
					console.error(err);
				else {
					var result = data.toString();
					console.log(result.length);
					console.log(result);
				}
			}
		)
	);
});


/*
	Seems to work but stream might be uneven 

http.get(process.argv[2], function (stream) {
	stream.setEncoding("utf8");

	var result = "";

	stream.on("data", function(data) {
		result += data;
	});

	stream.on("end", function (data) {
		console.log(result.length);
		console.log(result);
	});
});

*/