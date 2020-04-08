app.factory('Authentication',
['$rootScope', '$firebaseAuth',
function($rootScope, $firebaseAuth) {

    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    return {
        login: function(user) {

        }, //login
        register: function(user) {

        } //register
    }

}]); //factory