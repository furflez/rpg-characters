'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', ['ui.router',
  'MainController',
  'CharacterController'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/character');

  $stateProvider
    .state('character', {
      url: '/character',
      templateUrl: 'pages/character.html',
      controller: 'CharacterController'
    });
});