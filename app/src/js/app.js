'use strict';

var app = angular.module('adminApp',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/dashboard', {
            templateUrl : 'src/js/dashboard/dashboard.html',
            controller  : 'DashboardCtrl'
        })
        .otherwise({
            redirectTo : '/dashboard'
        });
});
