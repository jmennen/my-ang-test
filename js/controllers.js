/* Controllers */

var myAngControllers = angular.module('myAngControllers', []);

myAngControllers.controller('homeCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/list.json').success(function(data) {
      $scope.list = data
    });
  }]);

myAngControllers.controller('detailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/' + $routeParams.detailId + '.json').success(function(data) {
      $scope.detail = data;
    });
  }]);

myAngControllers.controller('listElementCtrl', ['$scope',
  function($scope) {
    $scope.expand = false;
  }]);
