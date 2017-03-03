var ArtifactoryApp = angular
    .module('ArtifactoryApp', [
        'ngRoute',
        'ngAnimate',
        'ngSanitize',
        'chart.js',
        'ds.clock'
    ]
);

ArtifactoryApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        
        $routeProvider.

        when('/start', {
            templateUrl: 'templates/start.html',
            controller: 'StartController'
        }).
        
        when('/dashboard', {
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardController'
        }).
        
        when('/compatibility', {
            templateUrl: 'templates/relationMap.html',
            controller: 'RelationMapController'
        }).
        
        when('/repo/:id', {
            templateUrl: 'templates/repo.html',
            controller: 'RepoController'
        }).

        otherwise({
            redirectTo: '/dashboard'
        });
    }
                       
]);
