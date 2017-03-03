ArtifactoryApp.controller("MenuController",
    function (
        $scope, $http, APIService
    ){

        $http ({
            method: 'GET',
            url: APIService.storageinfo,
            }).then(function successCallback(response) {
                //console.log(response);
                $scope.menuItems = response.data.repositoriesSummaryList;
                //console.log($scope.menuItems);
            }, function errorCallback(response) {
                if(response.status = 401) {
                    //console.log(response);
            }
        });

    });
