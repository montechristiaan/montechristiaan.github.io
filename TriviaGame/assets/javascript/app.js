$(document).ready(function () {
    var options = [
        {
            question: "How old was Anna Simmons when 'Once Upon a Time' first aired on ABC?", 
            choice: ["1", "2", "3", "4"],
            answer: 3,
            photo: "assets/images/..."
         },
         {
             question: "Which birthday is Emma celebrating when she first reunites with Henry?", 
            choice: ["28th", "30th", "32nd", "35th"],
            answer: 0,
            photo: "assets/images/..."
         }, 
         {
             question: "What is Captain Hook's real name in the show?", 
            choice: ["Killian Jones", "Bradley Jones", "Davey Jones", "Marcus Jones" ],
            answer: 0,
            photo: "assets/images/..."
        }, 
        {
            question: "What is the name of the poison that kills Hook's brother and almost kills Prince Charming?", 
            choice: ["Dreamshade", "Deathshade", "Nightshade", "Nevershade" ],
            answer: 0,
            photo: "assets/images/..."
        }, 
        {
            question: "What weapon can be used to temporarily 'freeze' someone?", 
            choice: ["Wooden stake", "Fairy dust", "A wand", "Squid ink" ],
            answer: 3,
            photo: "assets/images/..."
        }, 
        {
            question: "Who is the man with the lion tattoo?", 
            choice: ["Charming", "Robin Hood", "Hook", "Neal" ],
            answer: 1,
            photo: "assets/images/..."
        }, 
        {
            question: "What is the name of Captain Hook's ship?", 
            choice: ["Anna of the Sea", "Jolly Roger", "Daddy Boo Baddy", "The Swan" ],
            answer: 1,
            photo: "assets/images/..."
        }, 
        {
            question: "What relationship does Peter Pan have to Henry?", 
            choice: ["Great Grandfather", "Grandfather", "Uncle", "Cousin" ],
            answer: 0,
            photo: "assets/images/..."
        }];
    
    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 20;
    var intervalId;
    var userGuess ="";
    var running = false;
    var qCount = options.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];
    
    
    
    $("#reset").hide();
    
    $("#start").on("click", function () {
            $("#start").hide();
            displayQuestion();
            runTimer();
            for(var i = 0; i < options.length; i++) {
        holder.push(options[i]);
    }
        })
    
    function runTimer(){
        if (!running) {
        intervalId = setInterval(decrement, 1000); 
        running = true;
        }
    }
    
    function decrement() {
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer --;
    
        if (timer === 0) {
            unanswerCount++;
            stop();
            $("#answers").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }	
    }
    
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
  
    function displayQuestion() {
        index = Math.floor(Math.random()*options.length);
        pick = options[index];
            $("#questions").html("<h2>" + pick.question + "</h2>");
            for(var i = 0; i < pick.choice.length; i++) {
                var userChoice = $("<div>");
                userChoice.addClass("answerchoice");
                userChoice.html(pick.choice[i]);
                userChoice.attr("data-guessvalue", i);
                $("#answers").append(userChoice);
    }
    
    $(".answerchoice").on("click", function () {
        userGuess = parseInt($(this).attr("data-guessvalue"));
    
        if (userGuess === pick.answer) {
            stop();
            correctCount++;
            userGuess="";
            $("#answers").html("<p>Correct!</p>");
            hidepicture();
    
        } else {
            stop();
            wrongCount++;
            userGuess="";
            $("#answers").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }
    })
    }
    
    
    function hidepicture () {
        $("#answers").append("<img src=" + pick.photo + ">");
        newArray.push(pick);
        options.splice(index,1);
    
        var hidpic = setTimeout(function() {
            $("#answers").empty();
            timer= 20;
 
        if ((wrongCount + correctCount + unanswerCount) === qCount) {
            $("#questions").empty();
            $("#questions").html("<h3>Game Over!  Here's how you did: </h3>");
            $("#answers").append("<h4> Correct: " + correctCount + "</h4>" );
            $("#answers").append("<h4> Incorrect: " + wrongCount + "</h4>" );
            $("#answers").append("<h4> Unanswered: " + unanswerCount + "</h4>" );
            $("#reset").show();
            correctCount = 0;
            wrongCount = 0;
            unanswerCount = 0;
    
        } else {
            runTimer();
            displayQuestion();
    
        }
        }, 3000);
    
    
    }
    
    $("#reset").on("click", function() {
        $("#reset").hide();
        $("#answers").empty();
        $("#questions").empty();
        for(var i = 0; i < holder.length; i++) {
            options.push(holder[i]);
        }
        runTimer();
        displayQuestion();
    
    })
    
    })
    