// This example will invoke a SJS module stored in the modules database.
// It will pass it information about a location, and the SJS module
// will build a request to the Google Maps API, and return the
// latitude and longitude data for that specific location.

"use strict";

var marklogic = require("marklogic");
var dbConn = require("./load-sjs-connections.js");

var mlAdmin = marklogic.createDatabaseClient(dbConn.mlAdmin);

var location = "San Francisco California";

mlAdmin.invoke({
  path: "/ext/getCoordinates.sjs",
  variables: { input: location }
}).result(function(response) {
  console.log(JSON.stringify(response[1], null, 2));
}, function(error) {
  console.log(JSON.stringify(error, null, 2));
});
