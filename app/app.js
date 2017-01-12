'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', ['ui.router',
  'MainController',
  'CharacterController'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/character/1');

  $stateProvider
    .state('character', {
      url: '/character/:characterId',
      templateUrl: 'pages/character.html',
      controller: 'CharacterController'
    });
});