var wins = 0;
var losses = 0;
var previous = 0;

var startGame = function() {

$("#crystals").empty();

var images = [
              'assets/images/jen.jpg', 
              'assets/images/kira.jpg', 
              'assets/images/mystic.jpg', 
              'assets/images/chamberlain.jpg']

randomNum = Math.floor((Math.random() * 101) + 19);
$("#Guess-Number").html("<h2>Number to Guess: </h2><br><h3>" + randomNum + "</h3>");

for(var i = 0; i < 4; i++) {
    var random = Math.floor((Math.random() * 11) + 1);

    var crystal = $('<div>');
        crystal.attr({
            "class": 'crystal',
            "data-random": random 
        });
        crystal.css({
            "background-image":"url('" + (images[i]) + "')", 
            "background-size":"cover"
        });
        $("#crystals").append(crystal);
    }
    $("#total-guessed").html("Your total: " + previous);
}

startGame();

$(document).on('click', ".crystal", function() {
    var num = parseInt($(this).attr('data-random'));
    previous += num;
    
    $("#total-guessed").html("Your total: " + previous);

    if(previous > randomNum){
        losses++;
        $("#losses").html(losses);
        previous = 0;
        startGame();
    }
    else if(previous === randomNum){
        wins++;
        $("#wins").html(wins);
        previous = 0;
        startGame();
    }
});

