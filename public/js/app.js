const app = angular.module('bricApp',['ngRoute', 'ui.bootstrap']);

app.config (['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: '../modules/login_registration/views/login.html',
      controller: 'RegistrationController'
    })
    .when('/registration', {
      templateUrl: '../modules/login_registration/views/registration.html',
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
