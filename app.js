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

ArtifactoryApp.config(
    function ($httpProvider) {
        $httpProvider.defaults.headers.common['X-Requested-By'] = 'XMLHttpRequest';
        $httpProvider.defaults.headers.common['X-JFrog-Art-Api'] = 'AKCp2VokTFqQfV5UUja36PfcCref4qFeNPf8Xtu2JUAorcz9q9MESZABck1uwLCUHZe4TPgsG';
    }
);
