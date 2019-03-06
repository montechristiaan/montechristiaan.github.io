    //create an array for initial celebrity names that will be added to
    var topic = ["Will Ferrell", "Paul Rudd", "Steve Carrell"];
    //create dynamic buttons from the names in the array and put them on the page
    function addButtons() {
    for(var j = 0; j < topic.length; j++) {
    var button = $("<button>");
    button.attr("type", "button");
    button.addClass("btn btn-dark");
    button.attr("id", topic[j]);
    button.attr("data-actor", topic[j]);
    button.attr("style", "margin: 3px 3px 3px 3px;");
    button.text(topic[j]);
    $(".button-list").append(button);}
  };
    addButtons();
    //capture the name the user enters in the input box and push it to the array
    $("#celebSearch").on("keyup", function(event) {
          if(event.keyCode == 13) {
          event.preventDefault();
          var specific = $("#celebSearch").val().trim();
          var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=uEX1VVrsPHT8wvbLGMBSPA4s67BWRHn3&q=" + specific + "&limit=10&offset=0&rating=G&lang=en";
          
          $.ajax({
          url: queryURL,
          method: "GET"
          })
        .then(function(response) {
           
          topic.push(specific);
          //empty existing buttons on page and then add the new buttons with updated array
          $(".button-list").empty();
          addButtons();
        })
      };
    });
      //click function for buttons created from array    
      $(".button-list").on("click", "button", function showResults() {
      var specific = $(this).attr("data-actor");
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=uEX1VVrsPHT8wvbLGMBSPA4s67BWRHn3&q=" + specific + "&limit=10&offset=0&rating=G&lang=en";
      //call to get info from giphy api 
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          console.log(queryURL);
          console.log(response);
          
          var results = response.data;
          //create images from the button that was clicked, put them on the page
          for (var i = 0; i < results.length; i++) {
            var actorDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var actorImage = $("<img>");
            actorImage.attr("src", results[i].images.fixed_height_still.url);
            actorImage.attr("data-still", results[i].images.fixed_height_still.url);
            actorImage.attr("data-animate", results[i].images.fixed_height.url);
            actorImage.attr("data-state", "still");
            actorImage.addClass("gif");
            actorDiv.append(p);
            actorDiv.append(actorImage);
            $("#gifs-go-here").prepend(actorDiv);
          }
          //click function for images created on the page, allowing user to switch between still and animated image
          $(".gif").on("click", function() {
          var state = $(this).attr("data-state");
            if(state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } 
            else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }  
        });
      });
    });
  