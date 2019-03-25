var words = ["strawberries", "raspberries", "apples", "oranges", "pineapples"];
var randomNumber = Math.floor(Math.random() * words.length);
var underscores = [];
var rightGuess = [];
var wrongGuess =[];
var chosenWord = words[randomNumber];
var win = 0;
var guesses = 5;
var losses = 0;
var num = 0;
var gameBoard="";
var board = document.getElementById('underscore');


for (var a=0; a<chosenWord.length; a++){
   gameBoard=gameBoard + "<div class='letters' style='float:left' id='letter" + a + "'>_ </div>";

}
console.log(gameBoard);
board.innerHTML=gameBoard  ;

document.onkeypress = function(event) {
   var userGuess = event.key;

   console.log("My guess:" + userGuess);
   for(var i = 0; i < chosenWord.length; i++) {

       console.log("LETTER:" + chosenWord[i]);
       var userGuess = event.key;

       if (chosenWord[i]==userGuess){
           console.log("ITS THERE! Position:" + i);
           var current = document.getElementById('letter' + i);
           current.innerHTML=userGuess;

       }
       else{
           console.log("ITS NOT THERE");

       }

       }
   /*
   console.log(getunderScore())

   if(userGuess === chosenWord) {
       win++;
       alert("You Win!")
   }
   else{
       guesses--;
       guessesLeft+++ 1;
   }

   if(guesses === 0) {
       losses++
       alert("You Lose!")
   }
   */




}