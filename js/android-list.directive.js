app.directive(
    "androidList",
    function() {
        // Return the directive configuration.
        return({
            controller: "androidListController",
            link: link,
            restrict: "A",
            templateUrl: "templates/android_list.html"
        });


        // I bind the JavaScript events to the scope.
        function link( scope, element, attributes ) {

            console.log( "AndroidList list directive linking." );

        }

    }
);