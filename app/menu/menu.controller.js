(function () {
    'use strict';
    /*global angular*/
    angular.module('menu').controller('menuController', function ($scope, $location) {
        $scope.menuClass = function (page) {
            var current = $location.path().substring(1);
            return page === current ? 'active' : '';
        };
        
    });
}());