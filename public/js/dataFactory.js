
app.factory('dataFactory', '$http', function($http){

    function getData() {

        return $http.get('data/data.json'); 
    }

    return {
        data: data
    }

});