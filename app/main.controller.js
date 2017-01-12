
angular.module('MainController', [])

.controller('MainController',function ($scope, $http) {

  $http.get('https://raw.githubusercontent.com/furflez/rpg-characters/master/database/db.json').success(function (data) {
    $scope.chars = data.chars;
  });
});