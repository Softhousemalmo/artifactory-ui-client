ArtifactoryApp.controller("DashboardController",
    function (
        $scope, $location, $http, APIService
    ){
   
    $http ({
        method: 'GET',
        url: APIService.APIUrl + 'latest/build',
        }).then(function successCallback(response) {
            var buildLength = response.data.builds.length;

            $scope.build1 = response.data.builds[buildLength-1];
            $scope.build2 = response.data.builds[buildLength-2];
            $scope.build3 = response.data.builds[buildLength-3];
            $scope.build4 = response.data.builds[buildLength-4];
            $scope.build5 = response.data.builds[buildLength-1];
            
            

         //   console.log($scope.build1);

        }, function errorCallback(response) {
            if(response.status = 401) {
           //     console.log(response);
        }
    });

    $scope.labels = ["February", "March", "April", "May", "June", "July", "August"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
        //console.log(points, evt);
    };
    
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: true,
                    position: 'right'
                }
            ]
        }
    };

});
