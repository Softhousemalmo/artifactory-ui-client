ArtifactoryApp.controller("MenuController",
    function (
        $scope, $http, APIService
    ){

        $http ({
            method: 'GET',
            url: APIService.repositories,
            }).then(function successCallback(response) {
                $scope.menuItems = response.data[0];
            }, function errorCallback(response) {
                if(response.status = 401) {
            }
        });

    });
