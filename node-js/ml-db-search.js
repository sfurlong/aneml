// Search for documents that contain tweets, using Query By Example. 
// The query returns an array of document descriptors, one per
// matching document. The descriptor includes the URI and the
// the contents of each document.
var marklogic = require('marklogic');
var my = require('./ml-connection.js');
var domain = require('domain');

module.exports = {

  search: function(searchTerm, callback) {
    var d = domain.create();
    
    d.on('error', function(er) {
      consolde.error('Count Error!', er);
    });

    d.run(function() {
      console.log("SEARCH: " + searchTerm);

      var db = marklogic.createDatabaseClient(my.connInfo);
      var qb = marklogic.queryBuilder;

      var ret = [];
      var tweetCnt=0;
      db.documents.query(qb.where(qb.parsedFrom(searchTerm)).slice(1,100))
        .result(function(documents) {
            documents.forEach(function(document) {
              ret.push(document);
              tweetCnt++;
            });
            console.log("num tweets: " + tweetCnt);
            return callback(ret);
        });

      });
  },

  err: function(error) {
    console.log("ERROR");
  }

};
