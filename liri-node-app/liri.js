require("dotenv").config();

var fs = require("fs");

var keys = require("./keys.js");

var axios = require("axios");

var moment = require("moment");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

var nodeArgs = process.argv;

var movieName = "";

var artist = "";

var song = "";

var command = process.argv[2];

var search = process.argv.slice(3).join(" ");

function movieThis() {

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

//console.log(queryUrl);

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

    function concertThis() {
        
        if(command == "concert-this") {
            for(var i = 3; i < nodeArgs.length; i++) {
                if(i > 3 && i < nodeArgs.length) {
                    artist = artist + "+" + nodeArgs[i];
                }
                else {
                    artist += nodeArgs[i];
                }
            }
            var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

            //console.log(queryUrl);

            axios.get(queryUrl).then(
                function(response) {
                    console.log("Venue name: " + response.data[i].venue.name);
                    console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country);
                    console.log("Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
                });
        }
    };
        concertThis();

        function spotifyThisSong() {
            if(command == "spotify-this-song") {
                for(var i = 3; i < nodeArgs.length; i++) {
                    if(i > 3 && i < nodeArgs.length) {
                        song = song + "+" + nodeArgs[i];
                    }
                    else {
                        song += nodeArgs[i];
                    }
                }

                spotify.search({ type: 'artist,track', query: song }, function(err, data) {
                    if (err) {
                      return console.log('Error occurred: ' + err);
                    }
                   
                  console.log("Artist: " + data.tracks.items[0].artists[0].name); 
                  console.log("Song: " + data.tracks.items[0].name);
                  console.log("Album: " + data.tracks.items[0].album.name);
                  console.log("Link: " + data.tracks.items[0].external_urls.spotify);
                  });
            }
        };
        spotifyThisSong();

        function doWhatItSays() {
            fs.readFile("random.txt", "utf8", function (err, data) {
                if(err) {
                    console.log(err);
                }
                var dataArr = data.split(",");
                spotifyThisSong(dataArr[1]);
                //console.log(dataArr);
            })
        };
        doWhatItSays();

        function logText () {
            fs.appendFile("log.txt", search + " , ", function (err) {
                if (err) {
                    console.log(err);
                }
            })
        };
        logText();