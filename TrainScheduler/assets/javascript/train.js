
//initialize firebase
var config = {
    apiKey: "AIzaSyDFATKtH9BcZwXodvqrUqU-bW8gkCvSnNI",
    authDomain: "train-schedule-40001.firebaseapp.com",
    databaseURL: "https://train-schedule-40001.firebaseio.com",
    projectId: "train-schedule-40001",
    storageBucket: "train-schedule-40001.appspot.com",
    messagingSenderId: "959738637458"
  };
    firebase.initializeApp(config);
  
    var database = firebase.database();
 //set clock for current time                                      
    setInterval(function(){
        $('.current-time').html(moment().format('dddd, MMMM D YYYY, h:mm:ss A'))
    }, 1000);                         
  //create click event to get user input when submit button clicked  
  $("#submit").on("click", function(event) {
          event.preventDefault();
  
          var trainName = $("#trainName").val().trim();
          var destination = $("#destination").val().trim();
          var trainTime = $("#trainTime").val().trim();
          var frequency = $("#frequency").val().trim();
  //set up place for user data to go in firebase
          var newTrain = {
             train: trainName,
             destination: destination,
             time: trainTime,
             frequency: frequency
          };
    //push user input into firebase    
        database.ref().push(newTrain);
  //clear user input field
        $("#trainName").val("");
        $("#destination").val("");
        $("#trainTime").val("");
        $("#frequency").val("");
  
  });
  //take a snapshot of the database and create a new row in html
  database.ref().on("child_added", function(childSnapshot) {
  
         var trainName = childSnapshot.val().train;
         var destination = childSnapshot.val().destination;
         var trainTime = childSnapshot.val().time;
         var frequency = childSnapshot.val().frequency;
  //calculate time difference
         var trainTimeConverted = moment(trainTime, "HH:mm").subtract(1, "years");
         var currentTime = moment(moment()).format("hh:mm");
         var newTime = moment().diff(moment(trainTimeConverted), "minutes");
         var howLong = newTime % frequency;
         var minutesLeft = frequency - howLong;
         var nextTrain = moment().add(minutesLeft, "minutes");
         var nextTrainTime = moment(nextTrain).format("hh:mm");
  
  //add database info & calculated time to a new row
         var newRow = $("<tr>").append(
             $("<td>").text(trainName),
             $("<td>").text(destination),
             $("<td>").text(frequency),
             $("<td>").text(nextTrainTime),
             $("<td>").text(minutesLeft)  
          );
  //add new row to the dom
        $("#train-table > tbody").append(newRow);
  });  