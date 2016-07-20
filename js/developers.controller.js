app.controller("developersController",function($scope,$http){
    $http.get("json/data.json").then(function (response){
       $scope.developers_data = JSON.parse(JSON.stringify(response.data))["developers"]; 
    });
    
});