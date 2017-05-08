ArtifactoryApp.controller("SearchController",
    function (
        $scope, $location, $http, $window, APIService
    ){

   $scope.search = function(query) {   
       $http ({
            method: 'POST',
            url: APIService.APIUrl + 'search/' + query,
            }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(response) {
                if(response.status = 401) {
                    console.log(response);
            }
        });

        $location.path('search')
   };

});
