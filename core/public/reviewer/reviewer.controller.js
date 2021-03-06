'use strict';
angular.module('Xtern')
    .controller('ReviewerMain', ['$scope', '$rootScope', '$state', 'AuthService', function ($scope, $rootScope, $state, AuthService) {

        $scope.loggedIn = !!getToken("organization");

        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams, options) {
                $scope.loggedIn = !!getToken("organization");
                if (toState.name == "reviewer.profile") {
                    $('#profile').show();
                }
                else {
                    $('#profile').hide();
                }
            });

        $scope.logout = function () {
            AuthService.logout(function (err) {
                if (err) {
                    console.log('Logout unsuccessful');
                } else {
                    $scope.loggedIn = false;
                    $state.go('reviewer.login');
                }
            });
        };
    }]);
