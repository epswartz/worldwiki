// This is just a little script made to read in tables
// That I copied from r/BehindTheTables.
// jshint esversion:6

var fs = require('fs');
var async = require('async');

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(process.argv[2])
});


// outArr = [];
outStr = '\t[\n';
lineReader.on('line', (line) => { // Read file line by line
	
	/*
	outArr.push({
		v: line,
		rate: 1
	});
	*/
	outStr += '\t\t{\n';
	outStr += '\t\t\tv: "' + line + '",\n';
	outStr += '\t\t\trate: 1\n';
	outStr += '\t\t},\n';

}).on('close', () => {
	outStr += '\t],\n';
	console.log(outStr);
});
