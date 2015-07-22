// This example will load the SJS extension to the modules database.
// Note that to write extensions you must be a user with the rest-admin role.

"use strict";

var marklogic = require("marklogic");
var dbConn = require("./load-sjs-connections.js");
var fs = require("fs");

var dbAdmin = marklogic.createDatabaseClient(dbConn.restAdmin);

var path = "./";
var file = "getCoordinates.sjs";

var sjsModule = fs.readFile(path + file, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  dbAdmin.config.extlibs.write({
    path: "getCoordinates.sjs",
    contentType: "application/vnd.marklogic-javascript",
    source: data
  }).result().then(function(response) {
    console.log("Installed module: " + response.path);
  });
});
