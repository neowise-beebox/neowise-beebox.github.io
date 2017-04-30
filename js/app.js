var app = angular.module('materializeApp', ['ui.materialize'])
    .controller('BodyController', ["$scope", function ($scope) {
        $scope.select = {
            value: "Minha Localização Atual",
            choices: ["Minha Localização Atual", "Escolher Localização"]
        }

        $scope.onChange = function() {
           console.log($scope.select.value)
        }
}]);