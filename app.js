var ArtifactoryApp = angular
    .module('ArtifactoryApp', [
        'ngRoute',
        'ngAnimate',
        'ngSanitize',
        'chart.js',
        'ds.clock'
    ]);

ArtifactoryApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider.

        when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'AuthController'
        }).

        when('/start', {
            templateUrl: 'templates/start.html',
            controller: 'StartController'
        }).

        when('/search/results', {
            templateUrl: 'templates/search.html',
            controller: 'SearchResultController'
        }).

        when('/dashboard', {
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardController'
        }).

        when('/compatibility', {
            templateUrl: 'templates/relationMap.html',
            controller: 'RelationMapController'
        }).

        when('/repo/:repo*', {
            templateUrl: 'templates/repo.html',
            controller: 'RepoController'
        }).

        otherwise({
            redirectTo: '/login'
        });
    }

]);