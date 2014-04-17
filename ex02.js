/* Sum of all arguments */
var sum = 0;

process.argv.forEach( function (entry) {
	if(!isNaN(entry)) sum += Number(entry);
});

console.log(sum);