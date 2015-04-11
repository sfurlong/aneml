
angular.module("mainModule", [])
  .controller("mainController", function($scope, $http, jsonFilter) {
    
    var serverURL = "http://localhost:3000";
    var logResult = function(str, data, status, headers, config) {
      return str + "\n\n" +
        "data: " + '\n\n' + data + "\n\n" +
        "status: " + status + "\n\n" +
        "headers: " + jsonFilter(headers()) + "\n\n" +
        "config: " + jsonFilter(config);
    };

    /************************************************
    *  FUNCTION: getAddressGeoCode
    *  Plot Tweet Locations on the Map!!
    *************************************************/
    function getAddressGeoCode(addressStr) {
        var address = addressStr;
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            window.map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: window.map,
                position: results[0].geometry.location,
                title: addressStr
            });
          } else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });
    }

    /************************************************
    *  FUNCTION: searchTweets
    *************************************************/
    $scope.searchTweets = function() {
      
      $scope.getSearchTweetResults = '';
      $scope.getRawSearchTweetResults;

      var params = {
        term: $scope.searchTermParam
      };

      var config = {
        params: params
      };

      //REST GET Call to the Node.JS server which will in turn call
      //the MarkLogic database javascript api.
      $http.get(serverURL + "/search", config)
        .success(function(data, status, headers, config) {
          // The $http service automatically converts the response to a
          // JavaScript object whenever it sees that it looks 
          // like a JSON string.
          var tweetCnt = 0;
          data.forEach(function(document) {
            $scope.getSearchTweetResults += "Tweet: " + document.content.text + '\n';
            $scope.getSearchTweetResults += "Friend Count: " + document.content.user.friends_count + '\n';
            $scope.getSearchTweetResults += "Screen Name: " + document.content.user.screen_name + '\n';
            $scope.getSearchTweetResults += "Name: " + document.content.user.name + '\n';
            $scope.getSearchTweetResults += "Location: " + document.content.user.location + '\n';
            $scope.getSearchTweetResults += '\n---------------------------------\n\n';
            getAddressGeoCode(document.content.user.location);
            tweetCnt++;
          });

          $scope.getSearchTweetResults = "Num Tweets Returned: " + tweetCnt + '\n\n' + $scope.getSearchTweetResults
          $scope.getRawSearchTweetResults = jsonFilter(data);
          window.global = jsonFilter(data);
        })
        .error(function(data, status, headers, config) {
          $scope.getSearchTweetResults = logResult("GET ERROR", data, status, headers, config);
        });
    };
  });
