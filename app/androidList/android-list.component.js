angular.module('androidList').component(
    'androidList',
    function() {
        // Return the directive configuration.
        return({
            templateUrl: 'android-list.template.html',
            controller: 'androidListController',
        });
    }
);