angular.module('androidList').controller("androidListController",function ($scope,$http){
    $http.get("app/androidlist/android-list.data.json")
        .then(function(response){
            $scope.androidVersions=JSON.parse(JSON.stringify(response.data));
    });
    
    $scope.capitalize_text=function(text){
        var capitalized_text="";
        text.split(" ").forEach(function(word){
            capitalized_text+=$scope.capitalize_word(word);
        });
        return capitalized_text;
    }
    
    $scope.capitalize_word=function(word){
        console.log(word);
        return word[0].toUpperCase()+word.substr(1,word.length)
    }
    
    $scope.highlight_first_letter=function(word){
        return "<b>"+word[0].toUpperCase()+"</b>"+word.substr(1,word.length);
    }
    
    
    
});
