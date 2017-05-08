    ArtifactoryApp.controller("ArtifactController",
    function ($scope, $http, $routeParams, $location, APIService){

    $scope.generalActiveTrue = "active";  
    
    $scope.generalActive = function () {
        $scope.generalActiveTrue = "active";
        $scope.propertiesActiveTrue = "";
        $scope.compatibilityActiveTrue = "";
    };    
    
    $scope.propertiesActive = function () {
        $scope.generalActiveTrue = "";
        $scope.propertiesActiveTrue = "active";
        $scope.compatibilityActiveTrue = "";        
    };

    $scope.compatibilityActive = function () {
        $scope.generalActiveTrue = "";
        $scope.propertiesActiveTrue = "";
        $scope.compatibilityActiveTrue = "active";        
    };
   
    $scope.goBack = function() {
        window.history.back();
    };
    
    $scope.header =  $routeParams.repo1 + '/' + $routeParams.repo2 + '/' + $routeParams.repo3 + '/' + $routeParams.repo4 + '/' + $routeParams.repo5;
   
    $http ({
        method: 'GET',
        url: APIService.storageArtifactLevel + $routeParams.repo1 + '/' + $routeParams.repo2 + '/' + $routeParams.repo3 + '/' + $routeParams.repo4 + '/' + $routeParams.repo5,
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.repoData = response.data;
            $scope.downloadUrl = "http://" + response.data.downloadUri;
            $scope.children = response.data.children;

            $scope.dependencyLoad(response.data.originalChecksums.sha);
            
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

    $scope.dependencyLoad = function(sha) {
        $http ({
            method: 'GET',
            url: APIService + 'dependencys/' + sha 
        }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(response) {
                console.log(response);
                $scope.depend = response.statusText;                
        });
    };
    
});