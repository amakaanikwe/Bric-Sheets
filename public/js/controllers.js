app.controller("SearchController", [
  "$scope",
  "$http",
  "$uibModal",
  function SearchController($scope, $http, $uibModal) {
    $http.get("public/js/data.json").then(function(response) {
      $scope.producers = response.data;
      $scope.producerItems = response.data;
      $scope.filteredProducers = [],
      $scope.totalItems = $scope.producers.length,
      $scope.currentPage = 1,
      $scope.numPerPage = 5,
      $scope.maxSize = 5;

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
      // possible way to do pagination
      // $scope.$watch("currentPage + numPerPage", function() {
      //   let begin = ($scope.currentPage - 1) * $scope.numPerPage,
      //       end = begin + $scope.numPerPage;
  
      //   $scope.filteredProducers = $scope.producers.slice(begin, end);
      //   console.log($scope.filteredProducers);
      // });

      //creates an array string then an object of bricCertification
      //does not associate it back to name
      //NEXT STEP: Use the last name as name of each Object
      //THEN: Add a new key value pair to each oject lastname: bricCertification

      // for (let i=0; i<$scope.producers.length; i++) {
      //       let bricCertArr = $scope.producers[i].bricCertification.split(",");
      //       let bricCertOb = Object.assign({}, bricCertArr);
      //       console.log(bricCertOb);
    });

    

   





  }
]);

// mainControllers.controller('ModalController',['$scope','$http','$uibModal',
//   function ModalController($scope, $http, $uibModal) {
//
//     $http.get('js/data.json').then(function(response){
//       $scope.producers = response.data;
//     });
//
//
//
//
//   }])

// $scope.functionName=function(){
//  var uibModalInstance = $uibModal.open({
//         animation: true,
//         templateUrl: 'html page path',
//         controller: 'controllerName',
//         size: 'lg',
//         resolve: {
//             deps: ['$ocLazyLoad', function ($ocLazyLoad) {
//                 return $ocLazyLoad.load({
//                     name: 'app Name',
//                     insertBefore: '#ng_load_plugins_before',
//                     files: ['js controller file path']
//                 });
//             }]
//         }
//     });
//     uibModalInstance.result.then(function (selectedItem) {
//         $scope.selected = selectedItem;
//     }, function () {
//
//      });
// }
//   Call the function functionName when you need to open the popup.
//
// You need to add $uibModal as dependencies in current controller and the model controller should have $uibModalInstance as dependencies.
