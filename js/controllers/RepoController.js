    ArtifactoryApp.controller("RepoController",
        function ($scope, $http, $routeParams, $location, $rootScope, APIService) {
            $scope.artifactoryUrl = $routeParams.repo;

            $scope.generalActiveTrue = "active";
            $scope.showGoBack = false;

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


            function getChildren() {

                $http({
                    method: 'GET',
                    url: APIService.storage + "?path=" + $scope.artifactoryUrl,
                }).then(function successCallback(response) {
                    $scope.header = response.data.repo;
                    $scope.repoData = response.data;
                    $scope.children = response.data.children;
                }, function errorCallback(response) {
                    if (response.status = 401) {}
                });

                $http({
                    method: 'GET',
                    url: APIService.storage + "?path=" + $scope.artifactoryUrl + "&properties=true",
                }).then(function successCallback(response) {
                    if (!response.status === 200) {
                        $scope.msg = response.data.errors[0].message;
                        $scope.propertiesError = true;
                        $scope.propertiesShow = false;
                        console.log("propertiesError", $scope.propertiesError);

                    } else {
                        $scope.propertiesError = false;
                        $scope.propertiesShow = true;
                        $scope.properties = response.data.properties;
                        console.log("propertiesShow", response.data.properties);

                    }
                }, function errorCallback(response) {
                    if (response.status = 401) {}
                });

                // $http({
                //     method: 'GET',
                //     url: APIService.search + 'dependency?sha1=' + response.data.checksums.sha1
                // }).then(function successCallback(response) {
                //      if (!response.status === 200) {
                //         $scope.msg = response.data.errors[0].message;
                //         $scope.dependencyError = true;
                //         $scope.dependencyShow = false;
                //         console.log("dependencyError", $scope.propertiesError);

                //     } else {
                //         $scope.dependencyError = false;
                //         $scope.dependencyShow = true;
                //         $scope.dependency = response.data.properties;
                //         console.log("propertiesShow", response.data.properties);

                //     }

                // }, function errorCallback(response) {
                //     $scope.depend = response.statusText;
                // });


                $http({
                    method: 'GET',
                    url: APIService.storage + $scope.artifactoryUrl,
                }).then(function successCallback(response) {
                    $scope.repoData = response.data;
                    $scope.downloadUrl = "http://" + response.data.downloadUri;
                    $scope.children = response.data.children;


                }, function errorCallback(response) {
                    if (response.status = 401) {}
                });


            }

            getChildren();

            $scope.folderClick = function (href1, href2) {
                $scope.artifactoryUrl += href2;
                var len = $scope.children.length;
                $scope.showGoBack = true;

                getChildren();

            };

            $scope.goBack = function (href1) {
                console.log("href 1 = ", href1, href1.length);
                console.log("href 2 = ", href1.substring(0, href1.lastIndexOf("/")), href1.substring(0, href1.lastIndexOf("/")).length);
                var pathlen = href1.substring(0, href1.lastIndexOf("/")).length;
                if (pathlen > 0) {
                    $scope.artifactoryUrl = href1.substring(0, href1.lastIndexOf("/"));
                    getChildren();
                } else {
                    $scope.showGoBack = false;
                }
            };


        });