ArtifactoryApp.controller("SearchResultController",
    function (
        $scope, $location,$http, APIService, SearchService
    ){

    var query = SearchService.getSearch();
    $scope.loader = true;

    $scope.searchQuery = query;

    $http ({
        method: 'POST',
        url: APIService.APIUrl + 'search/' + query,
        }).then(function successCallback(response) {
        $scope.loader = false;
            console.log(response);
            $scope.data = response.data.results;
        }, function errorCallback(response) {
            if(response.status = 401) {
                console.log(response);
        }
    });

});
