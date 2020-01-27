app.controller("SearchController", function SerchController($scope,$http, $uibModal){
  $scope.producers = {
  "timestamp": "2016-05-08T17:09:25.715Z",
  "firstName": "Kevin",
  "lastName": "L.",
  "phoneNumber": 3473335970,
  "emailAddress": "Kevin@yahoo.com",
  "bricCertification": "TV Studio Production, Video Production in the Field, Video Editing with Premiere, Mini-Studio Production, Documentary Intensive",
  "availibility": "I am free all Fridays and Sundays; Monday-Thursday before 4pm; All day ",
  "workExperience": "Radio Personality, Screenwriter ",
  "ProgramsInterests": "News/Public Affiars, Arts & Culture, Children/Youth, Comedy, Documentary, Health, Sports, Educational, Religious/Spiritual, I'm happy to work on all kinds of projects",
  "ProductionInterest": "Editor, Camera Operator, Field Production, Audio Board Operator, TV Studio, Production Assistant, Technical Director, Director, Floor Manager, Character Generator Operator, Camera Operator, TV Studio Production, Teleprompter Operator, Set Design, Writer",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "Yes",
  "Please select the events you're most interested in volunteering with below.": "Media Education Orientation, B Free Awards, BRIC FLIX, B Scene, Media Talks"
},
{
  "timestamp": "2016-05-09T18:04:11.258Z",
  "firstName": "Courtney",
  "lastName": "A.",
  "phoneNumber": "203-544-4262",
  "emailAddress": "courtney.a@yahoo.com",
  "bricCertification": "TV Studio Production, Video Editing with Premiere, Mini-Studio Production",
  "availibility": "Available on weekends, weeknights after 5PM, with notice can do a weekday",
  "workExperience": "Playwright, Actress, Storyteller, Freelance Producer, Casting Director",
  "ProgramsInterests": "News/Public Affiars, Arts & Culture, Comedy, Documentary",
  "ProductionInterest": "Editor, Production Assistant, Technical Director, Director, Floor Manager, Camera Operator, TV Studio Production, Teleprompter Operator, Set Design, Writer",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "Yes",
  "Please select the events you're most interested in volunteering with below.": "B Scene: A Film & TV viewing party series showcasing the work of Brooklynites just like you, presented by Brooklyn Free Speech. The B Scene viewing series is a great way for Brooklynites to meet professional and aspiring media makers and get their work seen., Media Talks:  Features inspiring talks from professional producers, directors, documentary filmmakers, photographers, editors, and new media producers sharing their perspectives and stories with the community."
},
 {
  "timestamp": "2016-05-11T03:49:09.823Z",
  "firstName": "Rachel",
  "lastName": "H.",
  "phoneNumber": 7188677764,
  "emailAddress": "rachel.h@gmail.com",
  "bricCertification": "Video Production in the Field, Video Editing with Premiere, Mini-Studio Production",
  "availibility": "weekends and some weeknights",
  "workExperience": "worked at SiriusXM, Brooklyn College Radio, musicin",
  "ProgramsInterests": "News/Public Affiars, Arts & Culture, Comedy, I'm happy to work on all kinds of projects",
  "ProductionInterest": "Editor, Production Assistant, Writer",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "Yes",
  "Please select the events you're most interested in volunteering with below.": "All Brooklyn Free Speech Events"
},
 {
  "timestamp": "2016-05-13T03:04:53.657Z",
  "firstName": "Jawad ",
  "lastName": "M. ",
  "phoneNumber": "732-711-6664",
  "emailAddress": "Jawad@hotmail.com",
  "bricCertification": "Video Production in the Field, Video Editing with Premiere",
  "availibility": "Any day",
  "workExperience": "",
  "ProgramsInterests": "Arts & Culture, Comedy, Documentary, Educational, I'm happy to work on all kinds of projects",
  "ProductionInterest": "Editor, Camera Operator, Field Production, Production Assistant, Camera Operator, TV Studio Production, Gaffer",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "Yes",
  "Please select the events you're most interested in volunteering with below.": "All Brooklyn Free Speech Events"
},
{
  "timestamp": "2016-06-03T02:17:08.876Z",
  "firstName": "Amanda ",
  "lastName": "M.",
  "phoneNumber": 6463044203,
  "emailAddress": "meltz@gmail.com",
  "bricCertification": "Video Production in the Field",
  "availibility": "Evenings & Weekends ",
  "workExperience": "Videography ",
  "ProgramsInterests": "News/Public Affiars, Arts & Culture, Children/Youth, Comedy, Documentary, Health, Educational, I'm happy to work on all kinds of projects",
  "ProductionInterest": "Editor, Camera Operator, Field Production, Production Assistant, Camera Operator, TV Studio Production, Gaffer, Writer",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "Yes",
  "Please select the events you're most interested in volunteering with below.": "All Brooklyn Free Speech Events"
},
{
  "timestamp": "2016-06-07T07:28:32.507Z",
  "firstName": "Georgia",
  "lastName": "M.",
  "phoneNumber": "917-995-7988",
  "emailAddress": "Geluv@gmail.com",
  "bricCertification": "Documentary Intensive",
  "availibility": "Flexible right now",
  "workExperience": "Worked in wardrobe on 2 local plays in Indpls, IN",
  "ProgramsInterests": "Religious/Spiritual, I'm happy to work on all kinds of projects",
  "ProductionInterest": "Camera Operator, Field Production, Production Assistant, Camera Operator, TV Studio Production, Teleprompter Operator, Set Design",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "Yes",
  "Please select the events you're most interested in volunteering with below.": "All Brooklyn Free Speech Events"
},
{
  "timestamp": "2016-06-14T16:06:53.172Z",
  "firstName": "Mark",
  "lastName": "L.",
  "phoneNumber": "",
  "emailAddress": "mail@ml.nyc",
  "bricCertification": "TV Studio Production, Video Production in the Field",
  "availibility": "Mon-Weds, Sun",
  "workExperience": "Screenwriter, Producer, Teacher",
  "ProgramsInterests": "Arts & Culture, Documentary, Educational",
  "ProductionInterest": "Editor, Technical Director, Director, Floor Manager, Set Design, Writer",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "Yes",
  "Please select the events you're most interested in volunteering with below.": "B Free Awards, BRIC FLIX, B Scene"
},
 {
  "timestamp": "2016-06-14T16:10:09.000Z",
  "firstName": "REINALDO \"RAY\"",
  "lastName": "R. ",
  "phoneNumber": "917-232-2808",
  "emailAddress": "RR038@gmail.com ",
  "bricCertification": "TV Studio Production, Video Production in the Field, Video Editing with Premiere, Mini-Studio Production",
  "availibility": "Morning time from 8 am to 12:30 ",
  "workExperience": "",
  "ProgramsInterests": "News/Public Affiars, Arts & Culture, Children/Youth, Comedy, Sports, Educational, I'm happy to work on all kinds of projects",
  "ProductionInterest": "Camera Operator, Field Production, Audio Board Operator, TV Studio, Production Assistant, Technical Director, Director, Floor Manager, Character Generator Operator, Camera Operator, TV Studio Production, Teleprompter Operator, Set Design, Gaffer, Writer",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "Yes",
  "Please select the events you're most interested in volunteering with below.": "Media Education Orientation, B Free Awards, BRIC FLIX, B Scene, Media Talks., All Brooklyn Free Speech Events"
},
 {
  "timestamp": "2016-06-14T16:10:27.550Z",
  "firstName": "Gregory",
  "lastName": "A.",
  "phoneNumber": 9173650001,
  "emailAddress": "jsoul@gmail.com",
  "bricCertification": "Video Editing with Premiere",
  "availibility": "weekdays...after 6pm     all weekend!",
  "workExperience": "Photographer/videographer",
  "ProgramsInterests": "Arts & Culture, Comedy, Documentary, Sports, Educational",
  "ProductionInterest": "Editor, Camera Operator, Field Production, Production Assistant, Director, Camera Operator, TV Studio Production",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "No",
  "Please select the events you're most interested in volunteering with below.": ""
},
 {
  "timestamp": "2016-06-14T16:14:55.431Z",
  "firstName": "Emily",
  "lastName": "D.",
  "phoneNumber": "",
  "emailAddress": "",
  "bricCertification": "TV Studio Production, Video Editing with Premiere",
  "availibility": "Evenings and weekends",
  "workExperience": "",
  "ProgramsInterests": "News/Public Affiars, Arts & Culture, Documentary",
  "ProductionInterest": "Editor, Camera Operator, Field Production, Floor Manager, Camera Operator, TV Studio Production",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "No",
  "Please select the events you're most interested in volunteering with below.": ""
},
 {
  "timestamp": "2016-06-14T16:15:47.309Z",
  "firstName": "Stefanie",
  "lastName": "W.",
  "phoneNumber": 7862397111,
  "emailAddress": "Stefaniewhitec@gmail.com",
  "bricCertification": "Video Editing with Premiere, Mini-Studio Production",
  "availibility": "Monday, Wednesday, Thursday mornings, all evenings after 7, and all day Saturday, Sunday.",
  "workExperience": "Photography, and work with children.",
  "ProgramsInterests": "News/Public Affiars, Arts & Culture, Children/Youth, Documentary, Health, Educational, I'm happy to work on all kinds of projects",
  "ProductionInterest": "Editor, Camera Operator, Field Production, Audio Board Operator, TV Studio, Production Assistant, Technical Director, Director, Floor Manager, Character Generator Operator, Camera Operator, TV Studio Production, Teleprompter Operator, Set Design, Gaffer",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "Yes",
  "Please select the events you're most interested in volunteering with below.": "Media Education Orientation, B Free Awards, BRIC FLIX, B Scene, Media Talks., All Brooklyn Free Speech Events"
},
{
  "timestamp": "2016-06-14T16:16:58.837Z",
  "firstName": "Erica",
  "lastName": "B.",
  "phoneNumber": "910.144.7809",
  "emailAddress": "eb.unc@gmail.com",
  "bricCertification": "Documentary Intensive/ DSLR Upgrade",
  "availibility": "Evenings & Weekends",
  "workExperience": "video editor, color correcting, graphics",
  "ProgramsInterests": "News/Public Affiars, Arts & Culture, Children/Youth, Comedy, Documentary, Educational",
  "ProductionInterest": "Editor, Camera Operator, Field Production, Production Assistant, Director, Writer",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "Yes",
  "Please select the events you're most interested in volunteering with below.": "All Brooklyn Free Speech Events"
},
 {
  "timestamp": "2016-06-14T16:18:32.074Z",
  "firstName": "Jesse",
  "lastName": "R.",
  "phoneNumber": "-",
  "emailAddress": "Jess@gmail.com",
  "bricCertification": "Video Production in the Field",
  "availibility": "Weekdays after 5pm and weekends",
  "workExperience": "Radio personality; actor; writer; ",
  "ProgramsInterests": "Arts & Culture, Comedy, Documentary, Health, Let's get weird!",
  "ProductionInterest": "Camera Operator, Field Production, Floor Manager, Set Design, Writer",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "Yes",
  "Please select the events you're most interested in volunteering with below.": "BRIC FLIX, B Scene, Media Talks."
},
{
  "timestamp": "2016-06-14T16:23:28.591Z",
  "firstName": "Ashley",
  "lastName": "C.",
  "phoneNumber": "",
  "emailAddress": "ashleyc@gmail.com",
  "bricCertification": "TV Studio Production, Video Editing with Premiere, Mini-Studio Production",
  "availibility": "All week",
  "workExperience": "Writer; managed digital sales research at a broadcast network",
  "ProgramsInterests": "Arts & Culture, Comedy, Documentary, Health, Educational",
  "ProductionInterest": "Technical Director, Director, Character Generator Operator, Teleprompter Operator, Writer",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "No",
  "Please select the events you're most interested in volunteering with below.": ""
},
{
  "timestamp": "2016-06-14T16:24:05.491Z",
  "firstName": "Stephen",
  "lastName": "I.",
  "phoneNumber": 3471158455,
  "emailAddress": "Ineed@gmail.com",
  "bricCertification": "TV Studio Production, Video Production in the Field, Video Editing with Premiere, Mini-Studio Production, Documentary Intensive/ DSLR Upgrade",
  "availibility": "Mon-thurs",
  "workExperience": "Do it all",
  "ProgramsInterests": "",
  "ProductionInterest": "Technical Director, Director, Floor Manager",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "No",
  "Please select the events you're most interested in volunteering with below.": ""
},
 {
  "timestamp": "2016-06-14T16:26:22.377Z",
  "firstName": "Gabriel",
  "lastName": "F.",
  "phoneNumber": "718-901-6034",
  "emailAddress": "ease@gmail.com",
  "bricCertification": "TV Studio Production, Mini-Studio Production, Documentary Intensive/ DSLR Upgrade",
  "availibility": "My schedule varies and are flexible. Contact me with the Production schedule and I will do my best to adapt my time to help with your production.  ",
  "workExperience": "Film and Video Director. Audio. Theater Director. Film Production. Editor. Screenwriter. Cinematographer. Lights. Grip.  ",
  "ProgramsInterests": "News/Public Affiars, Arts & Culture, Children/Youth, Comedy, Documentary, Health, Sports, Educational",
  "ProductionInterest": "Editor, Camera Operator, Field Production, Audio Board Operator, TV Studio, Production Assistant, Technical Director, Director, Floor Manager, Camera Operator, TV Studio Production, Teleprompter Operator, Gaffer, Writer",
  "Are you interested in volunteering at Brooklyn Free Speech events?": "Yes",
  "Please select the events you're most interested in volunteering with below.": "Media Education Orientation, BRIC FLIX, B Scene, Media Talks."
}

$scope.producerItems = $scope.producers;
$scope.filteredProducers = [],
$scope.totalItems = $scope.producers.length,
$scope.currentPage = 1,
$scope.numPerPage = 5,
$scope.maxSize = 5;

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

})

// app.controller("SearchController", [
//   "$scope",
//   "$http",
//   "$uibModal",
//   function SearchController($scope,$http, $uibModal) {
//     $http.get('public/js/data/data.json').then(function(response) { 
//       $scope.producers = response.data; 
//       $scope.producerItems = response.data;
//       $scope.filteredProducers = [],
//       $scope.totalItems = $scope.producers.length,
//       $scope.currentPage = 1,
//       $scope.numPerPage = 5,
//       $scope.maxSize = 5;
    
//       // DataFactory.getData().success(function(data){
//       //   $scope.producers = data;
//       // }).error(function(error) {
//       //   console.log(error);
//       // });
  
//       // DataFactory.getData().success(function(data){
//       //   $scope.producerItems = data;
//       // }).error(function(error) {
//       //   console.log(error);
//       // });

//       // Sort by last name
//       let compareObjects = function(a,b){
//         if(a.lastName < b.lastName){
//           return -1;
//         }
//         if(a.lastname > b.lastname){
//           return 1;
//         }
//       };

//       $scope.producers.sort(compareObjects);

     

//       // Pagination
//       $scope.$watch("currentPage + numPerPage", function() {
//         let begin = (($scope.currentPage - 1) * $scope.numPerPage)
//         let end = begin + $scope.numPerPage;
    
//         $scope.filteredProducers = $scope.producers.slice(begin, end);
//       });

//       // Modal
//       $scope.openModal = function(person) {
//         let modalInstance = $uibModal.open({
//           animation: true,
//           size: "lg",
//           ariaLabelledBy: "modal-title", 
//            ariaDescribedBy: "modal-body",
//           templateUrl: "public/js/partials/appModal.html",
//           scope: $scope,
//           controller: function($scope) {
//             $scope.person = person;
//             $scope.close = function() {
//               modalInstance.close();
//             };
//           }
//         });
//       };



//     });

//   }
  
// ]);


