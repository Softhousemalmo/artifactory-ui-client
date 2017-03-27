    ArtifactoryApp.controller("Repo4Controller",
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
   
    $scope.goBack = function() {
        window.history.back();
    };
    
    $scope.header =  $routeParams.repo1 + '/' + $routeParams.repo2 + '/' + $routeParams.repo3 + '/' + $routeParams.repo4;
   
    $http ({
        method: 'GET',
        url: APIService.storageFourthLevel + $routeParams.repo1 + '/' + $routeParams.repo2 + '/' + $routeParams.repo3 + '/' + $routeParams.repo4,
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.repoData = response.data;
            $scope.children = response.data.children;
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
        console.log('/#/artifact/' + href1  + href2);
        $location.path('artifact/' + href1  + href2);
    };
    
});