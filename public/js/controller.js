app.controller("SearchController", [
  "$scope",
  "$http",
  "$uibModal",
  function SearchController($scope,$http, $uibModal) {
    $http.get('public/js/data/data.json').then(function(response) { 
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

      $scope.$watch("currentPage + numPerPage", function() {
        let begin = (($scope.currentPage - 1) * $scope.numPerPage)
        let end = begin + $scope.numPerPage;
    
        $scope.filteredProducers = $scope.producers.slice(begin, end);
      });

      $scope.openModal = function(person) {
        let modalInstance = $uibModal.open({
          animation: true,
          size: "lg",
          ariaLabelledBy: "modal-title", 
           ariaDescribedBy: "modal-body",
          templateUrl: "public/js/partials/appModal.html",
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


