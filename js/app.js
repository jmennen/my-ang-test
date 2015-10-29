'use strict';

/* App Module */

var myAngApp = angular.module('myAngApp', [
  'ngRoute',
  'myAngControllers'
]);

myAngApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'homeCtrl'
      }).
      when('/list/:detailId', {
        templateUrl: 'partials/details.html',
        controller: 'detailCtrl'
      }).
      otherwise({
        redirectTo: '/list'
      });
  }]);
