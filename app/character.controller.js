'use strict';

angular.module('CharacterController', [])

    .controller('CharacterController', function ($scope, $stateParams) {
        
        $scope.data.chars.forEach(function(char) {
            if(char.id == $stateParams.characterId)
            $scope.char = char
        });

        console.log($scope.char);
    });