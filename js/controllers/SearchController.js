ArtifactoryApp.controller("SearchController",
    function (
        $scope, $location, $http, $window
    ){

   $scope.search = function() {
       $location.path('search');
   };

});
