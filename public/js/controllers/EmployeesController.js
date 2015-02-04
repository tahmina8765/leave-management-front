'use strict';
app.controller('EmployeesController', function ($scope, employeeService) {
    // I contain the list of employees to be rendered.
    $scope.employees = [];

    // I contain the ngModel values for form interaction.
    $scope.form = {
        name: ""
    };

    loadRemoteData();


    // ---
    // PUBLIC METHODS.
    // ---


    // I process the add-employee form.
    $scope.addEmployee = function () {

        // If the data we provide is invalid, the promise will be rejected,
        // at which point we can tell the user that something went wrong. In
        // this case, I'm just logging to the console to keep things very
        // simple for the demo.
        employeeService.addEmployee($scope.form)
                .then(
                        loadRemoteData,
                        function (errorMessage) {

                            console.warn(errorMessage);

                        }
                )
                ;

        // Reset the form once values have been consumed.
        //$scope.form.name = "";

    };


    // I remove the given employee from the current collection.
    $scope.removeEmployee = function (employee) {

        // Rather than doing anything clever on the client-side, I'm just
        // going to reload the remote data.
        employeeService.removeEmployee(employee.id)
                .then(loadRemoteData)
                ;

    };


    // ---
    // PRIVATE METHODS.
    // ---


    // I apply the remote data to the local scope.
    function applyRemoteData(newEmployees) {
        $scope.employees = newEmployees;
    }


    // I load the remote data from the server.
    function loadRemoteData() {
        // The employeeService returns a promise.
        employeeService.getEmployees().then(
                function (employees) {
                    applyRemoteData(employees);
                }
        );

    }

});