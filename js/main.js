/**
* Main AngularJS Web Application
*/
var app = angular.module('DemoApp', ['ngRoute']);

/**
* TODO:Move controller to a separated file.
*/
app.controller("indexController",function($scope,$http){
    $http.get("json/data.json").then(function (response){
       $scope.site_name = JSON.parse(JSON.stringify(response.data))["site_name"]; 
    });
    
});

app.config(function($routeProvider) {
    $routeProvider.caseInsensitiveMatch=true;
    $routeProvider
    .when("/", {
        templateUrl:"templates/android_list.html",
        controller: "androidListController"
    })
    .when("/developer", {
        templateUrl : "templates/developer.html",
        controller :"developersController"
    })
});