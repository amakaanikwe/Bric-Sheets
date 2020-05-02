const app = angular.module('bricApp',['ngRoute','firebase','ui.bootstrap']);

app.config (['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: './login_registration/views/login.html',
      controller: 'RegistrationController'
    })
    .when('/registration', {
      templateUrl: './login_registration/views/registration.html',
      controller: 'RegistrationController'
    })
    .when('/success', {
      templateUrl: './producer_display/views/producerSearchList.html',
      controller: 'ProducerDisplayController'
    })
    .otherwise({
      redirectTo: '/login'
    })

}]);
