'use strict';
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
            .when('/', {
                controller: 'PagesController',
                templateUrl: 'views/home.html'
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
}); 