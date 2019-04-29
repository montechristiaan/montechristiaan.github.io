var Letter = require('./Letter.js');

function Word(wordString) {

    this.letterArr = [];
    this.placeLetters = function() {
    for(var i = 0; i < wordString.length; i++) {
        this.letterArr.concat(new Letter(wordString));
    }
};
    this.guessedLetter = function (character) {
        makeGuess(newGuess).forEach(letterArr);
    };

};

module.exports = Word;