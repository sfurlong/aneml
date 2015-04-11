// Search for documents about mammals, using Query By Example. 
// The query returns an array of document descriptors, one per
// matching document. The descriptor includes the URI and the
// the contents of each document.
var marklogic = require('marklogic');
var my = require('./my-connection.js');

module.exports = {

  search: function(searchTerm, callback) {
    console.log("SEARCH: " + searchTerm);

    var db = marklogic.createDatabaseClient(my.connInfo);
    var qb = marklogic.queryBuilder;

    var ret = '';
    db.documents.query(qb.where(qb.parsedFrom(searchTerm))).result(function(documents) {
      ret = documents;
      callback(ret);
    });
  },

  err: function(error) {
    console.log("ERROR");
  }

};
