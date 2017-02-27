ArtifactoryApp.controller("RepoController",
    function ($scope, $http, $routeParams, APIService){

    $scope.homeActiveTrue = "active";  
    
    $scope.homeActive = function () {
        $scope.homeActiveTrue = "active";
        $scope.propertiesActiveTrue = "";
        $scope.buildsActiveTrue = "";
        $scope.watchersActiveTrue = "";
        console.log("RUN");
    };    
    
    $scope.propertiesActive = function () {
        $scope.homeActiveTrue = "";
        $scope.propertiesActiveTrue = "active";
        $scope.buildsActiveTrue = "";
        $scope.watchersActiveTrue = "";
    };
    
    $scope.buildsActive = function () {
        $scope.homeActiveTrue = "";
        $scope.propertiesActiveTrue = "";
        $scope.buildsActiveTrue = "active";
        $scope.watchersActiveTrue = "";
    };

    $scope.watchersActive = function (){
        $scope.homeActiveTrue = "";
        $scope.propertiesActiveTrue = "";
        $scope.buildsActiveTrue = "";
        $scope.watchersActiveTrue = "active";
    };
    
    $http ({
        method: 'GET',
        url: APIService.storage + $routeParams.id + '/',
        }).then(function successCallback(response) {
            console.log(response);
            $scope.repoData = response.data;
            console.log($scope.repoData);
        }, function errorCallback(response) {
            if(response.status = 401) {
                console.log(response);
        }
    });
    
});