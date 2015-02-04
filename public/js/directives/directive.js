'use strict';
app
        .directive('topMenu', function () {
            return {
                templateUrl: 'views/directives/top-menu.html'
            };
        })
        .directive('clockDiv', function () {
            return {
                templateUrl: 'views/directives/clock-div.html',
                link: function (scope, element) {
                    worldClockZone();
                }
            };
        })
        .directive('bottomDiv', function () {
            return {
                templateUrl: 'views/directives/bottom-div.html'
            };
        })
        ;