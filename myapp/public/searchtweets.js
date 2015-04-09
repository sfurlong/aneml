angular.module("mainModule", [])
  .controller("mainController", function ($scope, $http, jsonFilter)
  {
    var serverURL = "http://localhost:3000";

    var logResult = function (str, data, status, headers, config, cnt)
    {
      return str + "\n\n" +
        "Num Returned: " + cnt + "\n\n" +
        "data: " + '\n\n' + data + "\n\n" +
        "status: " + status + "\n\n" +
        "headers: " + jsonFilter(headers()) + "\n\n" +
        "config: " + jsonFilter(config);
    };

    $scope.getCallJSON = function () {
      var params = {
        term: $scope.getJSONParam1
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
          //console.log(data);
          var tweetCnt = 0;
          var ret = '';
          data.forEach( function(document) {
              console.log(document.content.text);
              console.log(document.content.user.friends_count);
              console.log(document.content.user.screen_name);
              console.log(document.content.user.name);
              console.log(document.content.user.location);
              ret += document.content.text + '\n' +
                document.content.user.friends_count + '\n' +
                document.content.user.screen_name + '\n' +
                document.content.user.name + '\n' +
                document.content.user.location + 
                  '\n---------------------------------\n';
              tweetCnt++;
//          console.log('Name: ' + document.content.name); 
          });
          
          data = ret;
          //data = jsonFilter(data);

          $scope.getCallJSONResult = logResult("GET SUCCESS", data, status, headers, config, tweetCnt);
        })
        .error(function (data, status, headers, config)
        {
          $scope.getCallJSONResult = logResult("GET ERROR2", data, status, headers, config, 0);
        });
    };
  });