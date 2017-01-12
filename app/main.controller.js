
angular.module('MainController', [])

.controller('MainController',function ($scope, $http) {

  $http.get('../database/db.json').success(function (data) {
    $scope.chars = data.chars;
  });
});