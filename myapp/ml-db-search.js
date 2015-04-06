// Search for documents about mammals, using Query By Example. 
// The query returns an array of document descriptors, one per 
// matching document. The descriptor includes the URI and the 
// the contents of each document.
var marklogic = require('marklogic');
var my = require('./my-connection.js');

module.exports = {
	
	search : function (searchTerm, callback) {
			console.log("SEARCH: " + searchTerm); 

		var db = marklogic.createDatabaseClient(my.connInfo); 
		var qb = marklogic.queryBuilder;
		//var ret = '';
/*
		db.documents.query(qb.where(qb.parsedFrom('sfurlong'))).result( function(documents) {
				console.log('Matches query:');
		        documents.forEach( function(document) {
		        	ret += '\nURI: ' + JSON.parse(JSON.stringify(document.uri));
		        	console.log('\nURI: ' + document.uri);
					console.log('Name: ' + document.content.name); 
				});
		});
*/		
		var ret = '';
		db.documents.query(qb.where(qb.parsedFrom(searchTerm))).result( function(documents) {
		        documents.forEach( function(document) {
		        	console.log(document.content);
		        	ret += '\nURI: ' + JSON.stringify(document.content);
//					console.log('Name: ' + document.content.name); 
				});
			callback(ret);
		});
/*
		 {
				console.log('Matches query:');
		        documents.forEach( function(document) {
		        	ret += '\nURI: ' + JSON.parse(JSON.stringify(document.uri));
		        	console.log('\nURI: ' + document.uri);
					console.log('Name: ' + document.content.name); 
				});
		});
		console.log('WHTAT THE F: ' + ret);
		return 'HELLLOOOOOOOOO ' + ret;
*/
	}, 
	
	err : function(error) {
			console.log("ERROR"); 
	}

};