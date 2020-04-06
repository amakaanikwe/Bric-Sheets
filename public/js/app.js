const app = angular.module('bricApp',['ngRoute','firebase','ui.bootstrap']);

app.config (['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: '../src/modules/login_registration/views/login.html',
      controller: 'RegistrationController'
    })
    .when('/registration', {
      templateUrl: '../src/modules/login_registration/views/registration.html',
      controller: 'RegistrationController'
    })
    .when('/success', {
      templateUrl: './public/js/partials/searchList.html',
      controller: 'SearchController'
    })
    .otherwise({
      redirectTo: '/login'
    })

}]);
