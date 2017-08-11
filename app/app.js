console.log('bar');
angular.module('myApp', [
    'ui.router',
    'app.templates'
])
    .config(function ($stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: '/',
                template: '<home-component></home-component>'
            })
    });