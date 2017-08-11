angular.module('myApp')
    .component('homeComponent', {
        templateUrl: 'home.component.html',
        controller: function ($scope) {

            $scope.first_name = 'name';

            $scope.randomObject = {
                first_name: 'Pete',
                last_name: 'Peterson',
                date_of_birth: '22/08/12'
            };
            console.log($scope.randomObject);
        }
    });