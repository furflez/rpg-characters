'use strict';

angular.module('CharacterController', [])

    .controller('CharacterController', function ($scope, $stateParams) {

        $scope.data.chars.forEach(function (char) {
            if (char.id == $stateParams.characterId)
                $scope.char = char
        });


        $scope.getIframeSrc = function (src) {
            return 'https://www.youtube.com/embed/' + src;
        };
    });