/**
* Main AngularJS Web Application
*/

angular.module('DemoApp', ['ngRoute','menu','developers','footer','androidList']);

/**
* TODO:Move controller to a separated file.
*/
angular.module('DemoApp').controller("indexController",function($scope,$http){
    $http.get("json/data.json").then(function (response){
       $scope.site_name = JSON.parse(JSON.stringify(response.data))["site_name"]; 
    });
    
});

angular.module('DemoApp').config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl:"app/androidList/android-list.template.html",
        controller: "androidListController"
    })
    .when("/developer", {
        templateUrl : "app/developers/developers.template.html",
        controller :"developersController"
    })
    .otherwise({templateUrl:"404.html"})
    .caseInsensitiveMatch= true;
});
