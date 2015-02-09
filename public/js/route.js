'use strict';
app.config(['$routeProvider', '$httpProvider', '$locationProvider', function ($routeProvider, $httpProvider, $locationProvider) {
        $routeProvider
                .when('/', {
                    controller: 'PagesController',
                    templateUrl: 'views/home.html'
                })
                .when('/signin', {
                    controller: 'PagesController',
                    templateUrl: 'views/signin.html'
                })
                .when('/signup', {
                    controller: 'PagesController',
                    templateUrl: 'views/signup.html'
                })
                .when('/me', {
                    controller: 'PagesController',
                    templateUrl: 'views/me.html'
                })
                .when('/employees', {
                    controller: 'EmployeesController',
                    templateUrl: 'views/employees/index.html'
                })
                .when('/employees/create', {
                    controller: 'EmployeesController',
                    templateUrl: 'views/employees/create.html'
                })
                .when('/employees/save/:id', {
                    controller: 'EmployeesController',
                    templateUrl: 'views/employees/save.html'
                })
                .when('/employees/view/:id', {
                    controller: 'EmployeesController',
                    templateUrl: 'views/employees/view.html'
                })
                .when('/404', {
                    controller: 'PagesController',
                    templateUrl: 'views/404.html'
                })
                .otherwise({redirectTo: '/404'})
                ;
        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {
                return {
                    'request': function (config) {
                        config.headers = config.headers || {};
                        if ($localStorage.token) {
                            config.headers.Authorization = 'Bearer ' + $localStorage.token;
                        }
                        return config;
                    },
                    'responseError': function (response) {
                        if (response.status === 401 || response.status === 403) {
                            $location.path('/signin');
                        }
                        return $q.reject(response);
                    }
                };
            }]);
    }]); 