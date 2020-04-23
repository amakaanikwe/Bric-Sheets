app.factory('DataFactory', '$http', function($http){

    function getData() {

        return $http.get('data/data.json'); 
    }

    return {
        data: data
    }

});
app.controller("RegistrationController", [
  "$scope",
  "Authentication",
  function ($scope, Authentication) {
    $scope.login = function () {
      Authentication, login($scope.user);
    };

    $scope.register = function () {
      Authentication.register($scope.user);
    }; //register
  },
]); //Controller

app.controller("SearchController", [
  "$scope",
  "$http",
  "$uibModal",
  function SearchController($scope,$http, $uibModal) {
    $http.get('../src/data/data.json').then(function(response) { 
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
          templateUrl: "../src/producer_display/views/appModal.html",
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



app.factory("Authentication", [
  "$rootScope",
  "$firebaseAuth",
  function ($rootScope, $firebaseAuth) {
    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    return {
      login: function (user) {
        $rootScope.message = "Welcome " + $rootScope.user.email;
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
              email: user.email,
            }); //userinfo
            $rootScope.message = "Welcome" + user.firstName;
          })
          .catch(function (error) {
            $rootScope.message = error.message;
          }); // createUserWithEmailAndPassword
      }, //register
    };
  },
]); //factory
