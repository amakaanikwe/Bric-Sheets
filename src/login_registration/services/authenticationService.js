app.factory("Authentication", [
  "$rootScope",
  "$location",
  "$firebaseAuth",
  function ($rootScope,$location, $firebaseAuth) {

    const ref = firebase.database().ref();
    const auth = $firebaseAuth();

    return {
      login: function (user) {
        auth.$signInWithEmailAndPassword(user.email, user.password).then(function(user) {
          $location.path("/success");
        }).catch(function(error){
          $rootScope.message = error.message;
        }) //signInWithEmailAndPassword
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
              email: user.email
            }); //user info
            $rootScope.message = "Welcome" + user.firstName;
          })
          .catch(function (error) {
            $rootScope.message = error.message;
          }); // createUserWithEmailAndPassword
      }, //register
    };
  },
]); //factory
