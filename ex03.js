/* Counting the number of line from file sync */
var fs = require('fs');

var file = fs.readFileSync(process.argv[2]).toString();

var result = file.split("\n").length - 1;

console.log(result);