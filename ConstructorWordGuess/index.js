//var Word = require("./Word.js");

var inquirer = require("inquirer");

var wordArray = ["Jazz", "Rock", "Classical", "Alternative", "Pop"];

function randomWord(wordArray) {
    var i = Math.floor(Math.random() * wordArray.length);
    return wordArray[i];
};

randomWord();