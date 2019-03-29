//require("dotenv").config();

//var keys = require("./keys.js");

//var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var nodeArgs = process.argv;

var movieName ="";

var command = process.argv[2];

function movieThis(text) {

    if(command == "movie-this") {

for(var i = 3; i < nodeArgs.length; i++) {
    if(i > 3 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    }
    else {
        movieName += nodeArgs[i];
    }
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

console.log(queryUrl);

axios.get(queryUrl).then(
    function(response) {
      console.log("Title: " + response.data.Title);  
      console.log("Release Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
      console.log("Produced in: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
    }
  )}};
  movieThis();