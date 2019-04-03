# LIRI - Command Line Assistant
### L.I.R.I. stands for Language Interpretation and Recognition Interface. It is a command line node app that takes in parameters and gives back data from various APIs.

# Dependencies-
### axios
### moment
### node-spotify-api
### Also uses the built-in fs package to read and write to text files.

## The app features 4 different features using the node liri.js [command-here] syntax. Below are the command types...

# movie-this [movie-title-here] 
### returns the Title, release year, IMDB rating, Rotten Tomatoes rating, country, language, plot summary, and actors of a specific movie using the OMDb API.
# concert-this [artist-name-here] 
### returns the artist, venue name, location, and date of a concert using the Bands in Town and moment API's.
# spotify-this-song [song-title-here] 
### returns the artist, song, album, and preview URL for a specific song using the node-spotify-API.
# do-what-it-says 
### returns the result of a "random" result by reading the random.txt file and performing the command written in that file. This command can be changed to any one of the 3 types listed above.
# Instructions
## Since this is a command line application, it must be cloned to your machine to be used. After cloning the repo to your computer, cd into the liri-node-app folder and run npm install to download all the dependencies mentioned above.

## After the node packages, are installed, you will need to set up a spotify account to access the API.  You will need to get API keys for spotify.  Head to the developer.spotify page to request your own keys.

# Screenshots
# node liri.js without a command - 
### this runs a default asking the user to enter a command-
![default-screenshot jpg](https://user-images.githubusercontent.com/45082388/55495252-18f2cf00-5602-11e9-8a47-df637ecd1dea.png)
# node liri.js movie-this [movie title]
### Running this command will return information for the movie I have entered- 
![movie-this-screenshot1](https://user-images.githubusercontent.com/45082388/55495281-260fbe00-5602-11e9-802b-c0817afdf0f7.jpg)
### And if no movie title is entered it defaults to "Mr. Nobody"-
![movie-this-screenshot2](https://user-images.githubusercontent.com/45082388/55495295-2d36cc00-5602-11e9-96e2-d6b44cbe2ab6.jpg)
# node liri.js concert-this [artist name]
### Running this command will return concert info for the artist entered-
![concert-this-screenshot jpg](https://user-images.githubusercontent.com/45082388/55495312-3758ca80-5602-11e9-905c-139f436fc1c0.png)
# node liri-js spotify-this-song [song name]
### Running this command will return 20 songs, artists, albums, and links that may be the song you are looking for-
![spotify-screenshot1 jpg](https://user-images.githubusercontent.com/45082388/55495334-417ac900-5602-11e9-886b-a2b201065b21.png)
### And if no song is entered it defaults to "The Sign" by "Ace of Base"-
![spotify-screenshot2 jpg](https://user-images.githubusercontent.com/45082388/55495341-4770aa00-5602-11e9-8e9c-d3a261053399.png)
# node liri-js do-what-it-says 
### Running this command can be used to call one of the other functions and use input from the random.txt file- in this case it will spotify-this-song for "I Want It That Way"-
![do-what-it-says-screenshot jpg](https://user-images.githubusercontent.com/45082388/55495351-4dff2180-5602-11e9-9a8f-4256db487924.png)
# Other functionality- 
## In addition to these uses, the app also takes all the information that is output to the console- and at the same time appends it to the log.txt file for the user to read or use later- 
![log-screenshot jpg](https://user-images.githubusercontent.com/45082388/55495362-55bec600-5602-11e9-8cac-21afb2a1f725.png)
