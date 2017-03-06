    ArtifactoryApp.controller("RepoController",
    function ($scope, $http, $routeParams, $location, APIService){

    $scope.generalActiveTrue = "active";  
    
    $scope.generalActive = function () {
        $scope.generalActiveTrue = "active";
        $scope.propertiesActiveTrue = "";
    };    
    
    $scope.propertiesActive = function () {
        $scope.generalActiveTrue = "";
        $scope.propertiesActiveTrue = "active";
    };
   
    
    $http ({
        method: 'GET',
        url: APIService.storage + $routeParams.repo + '/',
        }).then(function successCallback(response) {
            //console.log(response);
            $scope.header = response.data.repo;
            $scope.repoData = response.data;
            $scope.children = response.data.children;
            console.log($scope.repoData);
        }, function errorCallback(response) {
            if(response.status = 401) {
                console.log(response);
        }
    });

    $http ({
        method: 'GET',
        url: APIService.repositoriesProperties + $routeParams.repo + '/',
    }).then(function successCallback(response) {
            if(response.status === 200) {
                $scope.msg = response.data.errors[0].message;
                $scope.propertiesError = true;
                $scope.propertiesShow = false;
                console.log($scope.msg)
            } else {
                $scope.propertiesError = false;
                $scope.propertiesShow = true;
                
            }
        }, function errorCallback(response) {
            if(response.status = 401) {
                console.log(response);
        }
    });

    $scope.folderClick = function(href1, href2) {
        console.log('/#/repo2/' + href1  + href2);
        $location.path('repo2/' + href1  + href2);
    };
    
});