var myAngApp = angular.module('myAngApp', [
  'ngRoute',
  'myAngControllers',
  'myAngFilters'
]);

myAngApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/list.html',
        controller: 'homeCtrl'
      }).
      when('/details/:detailId', {
        templateUrl: 'partials/detail.html',
        controller: 'detailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]); 