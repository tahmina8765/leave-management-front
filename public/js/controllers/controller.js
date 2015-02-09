'use strict';
app
        .controller('PagesController', ['$rootScope', '$scope', '$location', '$localStorage', 'Main', function ($rootScope, $scope, $location, $localStorage, Main) {
                $scope.signin = function () {
                    var formData = {
                        email: $scope.email,
                        password: $scope.password
                    };

                    Main.signin(formData, function (res) {
                        if (res.type == false) {
                            alert(res.data)
                        } else {
                            $localStorage.token = res.data.token;
                            window.location = "/";
                        }
                    }, function () {
                        $rootScope.error = 'Failed to signin';
                    });
                };

                $scope.signup = function () {
                    var formData = {
                        email: $scope.email,
                        password: $scope.password
                    };

                    Main.save(formData, function (res) {
                        if (res.type == false) {
                            alert(res.data)
                        } else {
                            $localStorage.token = res.data.token;
                            window.location = "/"
                        }
                    }, function () {
                        $rootScope.error = 'Failed to signup';
                    });
                };

                $scope.me = function () {
                    Main.me(function (res) {
                        $scope.myDetails = res;
                    }, function () {
                        $rootScope.error = 'Failed to fetch details';
                    });
                };

                $scope.logout = function () {
                    Main.logout(function () {
                        window.location = "/"
                    }, function () {
                        alert("Failed to logout!");
                    });
                };
                $scope.token = $localStorage.token;

//                $scope.alerts = [
//                    {type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'},
//                    {type: 'success', msg: 'Well done! You successfully read this important alert message.'}
//                ];
//
//                $scope.addAlert = function () {
//                    $scope.alerts.push({msg: 'Another alert!'});
//                };
//
//                $scope.closeAlert = function (index) {
//                    $scope.alerts.splice(index, 1);
//                };
            }])
        .controller('DateController', function ($scope) {
            $scope.date = new Date();
        })
        ;

       