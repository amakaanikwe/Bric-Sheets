// Factories are used whenever you want to creat http logic to connect with the database
angular.module('bricApp').factory('getDataFactory', function(){


    function getData() {
        return data; 
    }

    return {
        data: data
    }

});