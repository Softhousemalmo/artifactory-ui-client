ArtifactoryApp.controller("SearchController",
    function (
        $scope, $location, $window, $route, SearchService
    ){

    $scope.search = function (query){
        $scope.path = $location.path();

        if($scope.path === '/search/results') {
            SearchService.addSearch(query);
            $route.reload()
        } else {
            SearchService.addSearch(query);
            $location.path('/search/results');
        }
    };

});
