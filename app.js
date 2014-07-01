// 'use strict';

var app = angular.module('plunker', ['ngRoute'])

.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    })
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});