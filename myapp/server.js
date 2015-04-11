//See Tutorial at http://expressjs.com/
"use strict";

var express = require("express");
var app = express();

var mlapp = require("./ml-db-search.js");

app.use(express.static("public"));

app.get('/', function(req, res) {
  res.render('searchtweets.html');
});

// respond with "Hello World!" on the homepage
app.get('/search/', function(req, res) {

  //DEBUG:  Print out all the query key/value pairs
  for (var propName in req.query) {
    if (req.query.hasOwnProperty(propName)) {
      console.log(propName, req.query[propName]);
    }
  }

  //Call my MarkLogic query wrapper.
  mlapp.search(req.query.term, function(queryDat) {
    console.log(queryDat);
    res.send(queryDat);
  });

});

// accept POST request on the homepage
app.post('/', function(req, res) {
  console.log('received POST: ' + req.arguments);
  res.send('Got a POST request');
});

// accept PUT request at /user
app.put('/', function(req, res) {
  console.log('received PUT');
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/', function(req, res) {
  console.log('received DELETE');
  res.send('Got a DELETE request at /user');
});

var server = app.listen(3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
