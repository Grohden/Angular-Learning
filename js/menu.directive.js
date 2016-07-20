app.directive(
    "menu",
    function() {

        // Return the directive configuration.
        return({
            controller: "menuController",
            link: link,
            restrict: "A",
            templateUrl: "templates/menu.html"
        });

        // I bind the JavaScript events to the scope.
        function link( scope, element, attributes ) {
            console.log( "Menu directive linking." );
        }

    }



);