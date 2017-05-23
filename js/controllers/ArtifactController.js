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
    
    
   
    $http ({
        method: 'GET',
        url: APIService.storageArtifactLevel + $routeParams ,
        }).then(function successCallback(response) {
            $scope.repoData = response.data;
            $scope.downloadUrl = "http://" + response.data.downloadUri;
            $scope.children = response.data.children;

            $scope.dependencyLoad(response.data.originalChecksums.sha);
            
        }, function errorCallback(response) {
            if(response.status = 401) {
        }
    });

    $http ({
        method: 'GET',
        url: APIService.repositoriesProperties + $routeParams + '?properities',
    }).then(function successCallback(response) {
            if(!response.status === 200) {
                $scope.msg = response.data.errors[0].message;
                $scope.propertiesError = true;
                $scope.propertiesShow = false;
                console.log("propertiesError" ,  $scope.propertiesError);
            } else {
                $scope.propertiesError = false;
                $scope.propertiesShow = true;
                console.log("propertiesShow" ,  $scope.propertiesShow);

                
            }
        }, function errorCallback(response) {
            if(response.status = 401) {
        }
    });

    $scope.dependencyLoad = function(sha) {
        $http ({
            method: 'GET',
            url: APIService + 'dependencys/' + sha 
        }).then(function successCallback(response) {
            }, function errorCallback(response) {
                $scope.depend = response.statusText;                
        });
    };
    
});