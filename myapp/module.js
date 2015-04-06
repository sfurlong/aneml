// Search for documents about mammals, using Query By Example. 
// The query returns an array of document descriptors, one per 
// matching document. The descriptor includes the URI and the 
// the contents of each document.
var marklogic = require('marklogic');
var my = require('./my-connection.js');

module.exports = {
	search : function (searchTerm) {
			
			console.log("SEARCH: " + searchTerm); 
			return "Results of search are: " + searchTerm
	}, 
	
	err : function(error) {
			console.log("ERROR"); 
	}

};