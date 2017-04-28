// jshint esversion:6

var tables = [ //Add new entries here for new tables added
	{name: 'town', file: 'town.js'},
];


tables.forEach((tableObj, tIdx) => { //load in all the tables

	let t = require(tableObj.file);
	let tableInvalidErr = validateTable(t);
	if(!tableInvalidErr){
		module.exports[tableObj.name] = t; 
	}else{
		console.log("INVALID TABLE: " + tableObj.name);
		console.log("REASON: " + tableInvalidErr);
	}

	
});