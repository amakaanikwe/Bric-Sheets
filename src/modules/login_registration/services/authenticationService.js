app.factory('Authentication',
['$rootScope', '$firebaseAuth',
function($rootScope, $firebaseAuth) {

    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    return {
        login: function(user) {
            $rootScope.message = "Welcome " + $rootScope.user.email;

        }, //login
        register: function(user) {
            auth.$createUserWithEmailAndPassword(
                user.email,
                user.password
            ).then(function(regUser){
                var regRef = ref.child('users')
                    .child(regUser.uid).set({
                        date: firebase.database.ServerValue.TIMESTAMP,
                        regUser: regUser.uid,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email
                    }); //userinfo
                $rootScope.message = "Welcome" + user.firstName;
            }).catch(function(error) {
                $rootScope.message = error.message;
            }); // createUserWithEmailAndPassword  
        } //register
    }

}]); //factory