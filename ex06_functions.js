/* The module for the filtering, in which we are generating the result to print out */
function filter(dirName, extension, callback) {
	var fs = require('fs');
	fs.readdir(dirName, function(err, list) {
		if(err) 
			return callback(err);


		var path = require('path');
		result = [];
		list.forEach(function(entry) {
			if(path.extname(entry) === "." + extension)
				result.push(entry);
		});
		return callback(null, result);
	})
}

module.exports = filter;
//module.exports.filter = filter;