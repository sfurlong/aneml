//See Tutorial at http://expressjs.com/

var express = require('express');
var app = express(); 

var mlapp = require('./ml-db-search.js');

// respond with "Hello World!" on the homepage
app.get('/search/', function (req, res) {
  //console.log('received GET: ' + req.parameterCount());
  //console.log(req);
  console.log(req.params.term);
  console.log(req.body);
  console.log(req.query.term);
  mlapp.search(req.query.term, function(queryDat) {
    console.log(queryDat);
    res.send(queryDat);
  });

  //res.send('Query Results for: ');
});

// accept POST request on the homepage
app.post('/', function (req, res) {
  console.log('received POST: ' + req.arguments);
  res.send('Got a POST request');
});

// accept PUT request at /user
app.put('/', function (req, res) {
  console.log('received PUT');
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/', function (req, res) {
  console.log('received DELETE');
  res.send('Got a DELETE request at /user');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});


