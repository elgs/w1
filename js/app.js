/**
 * Created by elgs on 8/7/14.
 */

(function () {
    "use strict";

    var headers = {
        api_token_id: 'elgs@netnamed.net',
        api_token_key: '837bc77c-3514-11e4-b6bd-0401128c2501'
    };

    var app = angular.module('app', ['jqDirective']);
    app.controller('ListController', ['$scope', '$http', function ($scope, $http) {
        $http.get('https://netnamed.com:7443/api/secret', {
            headers: headers
        }).success(function (data, status, headers, config) {
            $scope.list = data.data;
        }).error(function (data, status, headers, config) {
            console.log(data);
        });

        $scope.submit = function (id, username, password) {
            console.log(id, username, password);
            $http.put('https://netnamed.com:7443/api/secret?meta=1', {
                id: id,
                client: username,
                secret: password,
                ip_addresses: "*",
                server: 'pptpd',
                status: "0"
            }, {
                headers: headers
            }).success(function (data, status, headers, config) {
                console.log(data);
                for (var i in $scope.list) {
                    if ($scope.list[i].id === id) {
                        $scope.list[i].class = "alert alert-success";
                    }
                }
            }).error(function (data, status, headers, config) {
                console.log(data);
            });
        };

    }]);

    app.directive('mainHeader', function () {
        return {
            restrict: 'E',
            controller: function ($scope) {
            },
            templateUrl: 'html/main-header.html'
        };
    });

    $('#accordion').on('shown.bs.collapse', function (e) {
        var input = $($(e.target).find('form')[0]).find('input')[0];
        input.focus(500);
    });
})();

