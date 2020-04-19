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


