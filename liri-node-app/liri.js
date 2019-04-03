//load required node packages or files that I need
require("dotenv").config();

var fs = require("fs");

var keys = require("./keys.js");

var axios = require("axios");

var moment = require("moment");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
//take in user input and store it in a variable
var nodeArgs = process.argv;

var command = process.argv[2];

var input ="";
//make sure to include commands or input that include extra spaces
for(var i = 3; i < nodeArgs.length; i++) {
    if(i > 3 && i < nodeArgs.length) {
        input = input + "+" + nodeArgs[i];
    }
    else {
        input += nodeArgs[i];
    }
}
//switch case to call function for whatever command user types
switch(command) {
    case "movie-this":
     if(input) {
         movieThis(input);
     }
     else {
         movieThis("Mr. Nobody");
     };
     break;

    case "concert-this":
     if(input) {
     concertThis(input);
     }
     else {
         console.log("Please enter an artist name!");
     };
     break;

    case "spotify-this-song":
     if(input) {
         spotifyThisSong(input);
     }
     else {
         spotifyThisSong("The Sign Ace of Base");
     }
     break;

     case "do-what-it-says":
       doWhatItSays();
       break;
//create a default message to tell user what to do
    default:
     console.log("Please enter a command: 'movie-this', 'concert-this', 'spotify-this-song', 'do-what-it-says'");
     break; 
}
//movieThis function begins here
function movieThis(movieName) {
//omdb API url
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
//get JSON response from API and output data to console
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
      console.log("------------PLEASE ENTER NEXT SEARCH------------");
//output data to log.txt file using line breaks to make it easier to read
      fs.appendFile('log.txt', "\nTitle: " + response.data.Title + "\nRelease Year: " + response.data.Year + "\nIMDB Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nProduced in: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors + "\n----------------------------------------------------------------------------\n", function(err) {
          if(err) {
              console.log("error");
          }
        });  
      });
    }
//end of movieThis function
//begin concertThis function
    function concertThis(artist) {
        
            var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

            axios.get(queryUrl).then(
                function(response) {
                    console.log("Artist: " + response.data[i].lineup);
                    console.log("Venue name: " + response.data[i].venue.name);
                    console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country);
                    console.log("Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
                    console.log("------------PLEASE ENTER NEXT SEARCH------------");

                    fs.appendFile('log.txt', "\nArtist: " + response.data[i].lineup + "\nVenue name: " + response.data[i].venue.name + "\nLocation: " + response.data[i].venue.city + "," + response.data[i].venue.region + "," + response.data[i].venue.country + "\nDate: " + moment(response.data[i].datetime).format("MM/DD/YYYY") + "\n----------------------------------------------------------------------------\n", function(err) {
                        if(err) {
                            console.log("error")
                        }
                    });
                });
            };
//end of concertThis function
//begin spotifyThisSong function - uses spotify ID and secret from keys.js
        function spotifyThisSong(song) {
            spotify.search({ type: 'track', query: song }, function(error, data) {
            if(!error) {
                for(var i = 0; i < data.tracks.items.length; i++) {
                    var songData = data.tracks.items[i];
                    console.log("Artist: " + songData.artists[0].name + "\nSong: " + songData.name + "\nAlbum: " + songData.album.name + "\nLink: " + songData.external_urls.spotify + "\n--------------------------------------------------------------"); 

                    fs.appendFile("log.txt", "\nArtist: " + songData.artists[0].name + "\nSong: " + songData.name + "\nAlbum: " + songData.album.name + "\nLink: " + songData.external_urls.spotify + "\n----------------------------------------------------------------------------\n", function(err) {
                        if(err) {
                            console.log("error");
                        }
                    }); 
                }
            }      
                else {
                    console.log("error occurred");
                }   
            });
        }
//end of spotifyThisSong function
//begin doWhatItSays function - read random.txt file- splits into an array, uses second item of string for spotify function   
        function doWhatItSays() {
            fs.readFile("random.txt", "utf8", function (err, data) {
                if(err) {
                    console.log(err);
                }
                var dataArr = data.split(",");
                spotifyThisSong(dataArr[1]);
            });
        };
        

       