var app = angular.module('bricApp',['ngRoute', 'ui.bootstrap']);

app.config (['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/partials/searchList.html',
      controller: 'SearchController'
    })

}]);
