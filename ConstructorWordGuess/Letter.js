var Letter = function (character) {
    this.character = character;
    this.guessed = false;
    this.toString = function () {
        if(this.guessed) {
            return this.character;
        }
        else {
            return '_';
        }
    };
    this.makeGuess = function (newGuess) {
        if (this.character.toLowerCase() === newGuess.toLowerCase()) {
            this.guessed = true;
        }
    };
};

module.exports = Letter;