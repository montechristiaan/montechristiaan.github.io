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
                                       
    setInterval(function(){
        $('.current-time').html(moment().format('dddd, MMMM D YYYY, h:mm:ss A'))
    }, 1000);                         
    
  $("#submit").on("click", function(event) {
          event.preventDefault();
  
          var trainName = $("#trainName").val().trim();
          var destination = $("#destination").val().trim();
          var trainTime = $("#trainTime").val().trim();
          var frequency = $("#frequency").val().trim();
  
          var newTrain = {
             train: trainName,
             destination: destination,
             time: trainTime,
             frequency: frequency
          };
        
        database.ref().push(newTrain);
  
        $("#trainName").val("");
        $("#destination").val("");
        $("#trainTime").val("");
        $("#frequeny").val("");
  
  });
  
  database.ref().on("child_added", function(childSnapshot) {
  
         var trainName = childSnapshot.val().train;
         var destination = childSnapshot.val().destination;
         var trainTime = childSnapshot.val().time;
         var frequency = childSnapshot.val().frequency;
  
         var trainTimeConverted = moment(trainTime, "HH:mm").subtract(1, "years");
      
         var currentTime = moment(moment()).format("hh:mm");
      
         var newTime = moment().diff(moment(trainTimeConverted), "minutes");
      
         var howLong = newTime % frequency;
      
         var minutesLeft = frequency - howLong;
      
         var nextTrain = moment().add(minutesLeft, "minutes");
      
         var nextTrainTime = moment(nextTrain).format("hh:mm");
  
  
         var newRow = $("<tr>").append(
             $("<td>").text(trainName),
             $("<td>").text(destination),
             $("<td>").text(frequency),
             $("<td>").text(nextTrainTime),
             $("<td>").text(minutesLeft)  
          );
  
        $("#train-table > tbody").append(newRow);
  });  