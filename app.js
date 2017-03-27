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
        
        when('/repo/:repo', {
            templateUrl: 'templates/repo.html',
            controller: 'RepoController'
        }).

        when('/repo2/:repo1/:repo2', {
            templateUrl: 'templates/repo2.html',
            controller: 'Repo2Controller'
        }).

        when('/repo3/:repo1/:repo2/:repo3', {
            templateUrl: 'templates/repo3.html',
            controller: 'Repo3Controller'
        }).

        when('/repo4/:repo1/:repo2/:repo3/:repo4', {
            templateUrl: 'templates/repo4.html',
            controller: 'Repo4Controller'
        }).

        when('/artifact/:repo1/:repo2/:repo3/:repo4/:repo5', {
            templateUrl: 'templates/artifact.html',
            controller: 'ArtifactController'
        }).

        otherwise({
            redirectTo: '/dashboard'
        });
    }
                       
]);
