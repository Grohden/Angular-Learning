app.directive(
    "footer",
    function() {
        // Return the directive configuration.
        return({
            controller: "footerController",
            link: link,
            restrict: "A",
            templateUrl: "templates/footer.html"
        });


        // I bind the JavaScript events to the scope.
        function link( scope, element, attributes ) {

            console.log( "Footer directive linking." );

        }

    }
);