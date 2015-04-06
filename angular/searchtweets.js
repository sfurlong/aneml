angular.module("mainModule", [])
  .controller("mainController", function ($scope, $http, jsonFilter)
  {
    var serverURL = "http://localhost:3000";

    var logResult = function (str, data, status, headers, config)
    {
      return str + "\n\n" +
        "data: " + data + "\n\n" +
        "status: " + status + "\n\n" +
        "headers: " + jsonFilter(headers()) + "\n\n" +
        "config: " + jsonFilter(config);
    };

    $scope.getCallJSON = function () {
      var params = {
        jsonObjParam: {
          param1: $scope.getJSONParam1
        }
      };

      var config = {
        params: params
      };
      

      $http.get(serverURL+"/search", config)
        .success(function (data, status, headers, config)
        {
          // Since the data returned by the server is a JSON object in this
			// case,
          // I use the json filter to output it as a string for debugging
			// purposes.
          // The $http service automatically converts the response to a
			// JavaScript
          // object whenever it sees that it looks like a JSON string.
          data = jsonFilter(data);

          $scope.getCallJSONResult = logResult("GET SUCCESS", data, status, headers, config);
        })
        .error(function (data, status, headers, config)
        {
          $scope.getCallJSONResult = logResult("GET ERROR", data, status, headers, config);
        });
    };
  });