var words = ["Waterloo", "SOS", "Fernando", "Mamma Mia", "Angel Eyes", "Dancing Queen", "Take a Chance on Me"];

var randomNumber = Math.floor(Math.random() * words.length);
var rightWord = [];
var wrongWord = [];
var chosenWord = words[randomNumber];
var underScore = [];
var blankSpaces = document.getElementsByClassName('underscore');


console.log(chosenWord);
var genUnderscore = () => {
for(var i = 0; i < chosenWord.length; i++) {
    underScore.push("_");
    blankSpaces[0].innerHTML = underScore.join(' ');
    }
    return underScore;
}
    console.log(genUnderscore());

    document.addEventListener("keypress", (event) => {
        var keycode = event.keyCode;
        var keyWord = String.fromCharCode(keycode);
        if(chosenWord.indexOf(keyWord) > -1) {
            rightWord.push(keyWord);
            underScore[chosenWord.indexOf(keyWord)] = keyWord;
            blankSpaces[0].innerHTML = underScore.join(' ');
            if(underScore.join(' ') == chosenWord) {
                alert("You Win!");
            }
        }
         
    });

    