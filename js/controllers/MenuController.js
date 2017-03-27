ArtifactoryApp.controller("MenuController",
    function (
        $scope, $http, APIService
    ){

        $http ({
            method: 'GET',
            url: APIService.repositories,
            }).then(function successCallback(response) {
                $scope.menuItems = response.data[0];
                console.log($scope.menuItems);
            }, function errorCallback(response) {
                if(response.status = 401) {
                    console.log(response);
            }
        });

    });
