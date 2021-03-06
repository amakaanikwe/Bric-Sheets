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

app.factory("Authentication", [
  "$rootScope",
  "$location",
  "$firebaseAuth",
  function ($rootScope,$location, $firebaseAuth) {

    const ref = firebase.database().ref();
    const auth = $firebaseAuth();

    return {
      login: function (user) {
        auth.$signInWithEmailAndPassword(user.email, user.password).then(function(user) {
          $location.path("/success");
        }).catch(function(error){
          $rootScope.message = error.message;
        }) //signInWithEmailAndPassword
      }, //login
      register: function (user) {
        auth
          .$createUserWithEmailAndPassword(user.email, user.password)
          .then(function (regUser) {
            var regRef = ref.child("users").child(regUser.uid).set({
              date: firebase.database.ServerValue.TIMESTAMP,
              regUser: regUser.uid,
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email
            }); //user info
            $rootScope.message = "Welcome" + user.firstName;
          })
          .catch(function (error) {
            $rootScope.message = error.message;
          }); // createUserWithEmailAndPassword
      }, //register
    };
  },
]); //factory

app.controller("RegistrationController", [
  "$scope",
  "Authentication",
  function ($scope, Authentication) {
    $scope.login = function () {
      Authentication.login($scope.user);
    }; // login

    $scope.register = function () {
      Authentication.register($scope.user);
    }; //register
  },
]); //Controller

app.controller("ProducerDisplayController", [
  "$scope",
  "$http",
  "$uibModal",
  function ProducerDisplayController($scope,$http, $uibModal) {
    $http.get('./data/data/data.json').then(function(response) { 
      $scope.producers = response.data; 
      $scope.producerItems = response.data;
      $scope.filteredProducers = [],
      $scope.totalItems = $scope.producers.length,
      $scope.currentPage = 1,
      $scope.numPerPage = 5,
      $scope.maxSize = 5;
    
      // DataFactory.getData().success(function(data){
      //   $scope.producers = data;
      // }).error(function(error) {
      //   console.log(error);
      // });
  
      // DataFactory.getData().success(function(data){
      //   $scope.producerItems = data;
      // }).error(function(error) {
      //   console.log(error);
      // });

      // Sort by last name
      let compareObjects = function(a,b){
        if(a.lastName < b.lastName){
          return -1;
        }
        if(a.lastname > b.lastname){
          return 1;
        }
      };

      $scope.producers.sort(compareObjects);

     

      // Pagination
      $scope.$watch("currentPage + numPerPage", function() {
        let begin = (($scope.currentPage - 1) * $scope.numPerPage)
        let end = begin + $scope.numPerPage;
    
        $scope.filteredProducers = $scope.producers.slice(begin, end);
      });

      // Modal
      $scope.openModal = function(person) {
        let modalInstance = $uibModal.open({
          animation: true,
          size: "lg",
          ariaLabelledBy: "modal-title", 
           ariaDescribedBy: "modal-body",
          templateUrl: "./producer_display/views/producerModal.html",
          scope: $scope,
          controller: function($scope) {
            $scope.person = person;
            $scope.close = function() {
              modalInstance.close();
            };
          }
        });
      };

    });

  }
  
]);


