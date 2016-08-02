(function () {
    'use strict';
    
    /*global angular*/
    angular.module('androidList').controller("androidListController", function ($scope, $http) {
    
        $http.get("app/androidlist/android-list.data.json")
            .then(function (response) {
                $scope.androidVersions = JSON.parse(JSON.stringify(response.data));
            });

        $scope.capitalizeText = function (words) {
            return words.split(" ").map(function (word) {
                return word.charAt(0).toUpperCase() + word.slice(1, word.length);
            }).join();
        };
        
    });
}());
