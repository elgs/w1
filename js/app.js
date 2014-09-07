/**
 * Created by elgs on 8/7/14.
 */

(function () {
    "use strict";

    var app = angular.module('app', ['jqDirective']);
    app.controller('ListController', ['$scope', '$http', function ($scope, $http) {
        var headers = {
            api_token_id: 'elgs@netnamed.net',
            api_token_key: '837bc77c-3514-11e4-b6bd-0401128c2501'
        };
        $http.get('https://netnamed.com:7443/api/secret', {
            headers: headers
        }).success(function (data, status, headers, config) {
            $scope.list = data.data;
        }).error(function (data, status, headers, config) {
            console.log(data);
        });

    }]);

    app.directive('mainHeader', function () {
        return {
            restrict: 'E',
            controller: function ($scope, $http) {
            },
            templateUrl: 'html/main-header.html'
        };
    });
})();

