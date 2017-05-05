ArtifactoryApp.controller("AuthController",
    function (
        $scope, $location, $http, $window
    ){

   $scope.login = function() {
       $location.path('dashboard');
   };

});
