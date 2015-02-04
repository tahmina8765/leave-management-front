var app = angular.module("Gw2App", ['ngRoute']);
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
            .when('/employee/save', {
                controller: 'EmployeesController',
                templateUrl: 'views/employees/save.html'
            })
            .when('/employee/save/:id', {
                controller: 'EmployeesController',
                templateUrl: 'views/employees/save.html'
            })
            .when('/employee/view/:id', {
                controller: 'EmployeesController',
                templateUrl: 'views/employees/view.html'
            })
            .otherwise({redirectTo: '/'})
            ;
    $locationProvider.html5Mode(true);

});