app.controller("SearchController", [
  "$scope",
  "$uibModal", "getDataFactory",
  function SearchController($scope, $uibModal, getDataFactory) {

      $scope.producers = response.data;
      $scope.producerItems = response.data;
      $scope.filteredProducers = [],
      $scope.totalItems = $scope.producers.length,
      $scope.currentPage = 1,
      $scope.numPerPage = 5,
      $scope.maxSize = 5;
    
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



  }
]);


