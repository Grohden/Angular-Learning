angular.module('footer').controller("footerController",function($scope,$http){   
    $http.get("json/data.json").then(function (response){
       $scope.main_developer = JSON.parse(JSON.stringify(response.data))["developers"][0].name; 
        console.log(angular.module('footer').directive());
    });
});