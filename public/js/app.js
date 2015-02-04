'use strict';
var app = angular.module("Gw2App", ['ngRoute']);
app.constant("myConfig", {
        "url": "http://localhost",
        "port": "8000"
    })
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
            .otherwise({redirectTo: '/'})
            ;
    $locationProvider.html5Mode(true);

});