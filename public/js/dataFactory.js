app.factory('DataFactory', '$http', function($http){

    function getData() {

        return $http.get('data/data.json'); 
    }

    return {
        data: data
    }

});