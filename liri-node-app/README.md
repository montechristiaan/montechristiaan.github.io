LIRI - Command Line Assistant
L.I.R.I. stands for Language Interpretation and Recognition Interface. It is a command line node app that takes in parameters and gives back data from various APIs.

Dependencies-
axios
moment
node-spotify-api
Also uses the built-in fs package to read and write to text files.

The app features 4 different features using the node liri.js [command-here] syntax. Below are the command types...

movie-this [movie-title-here] returns the Title, release year, IMDB rating, Rotten Tomatoes rating, country, language, plot summary, and actors of a specific movie using the OMDb API.
concert-this [artist-name-here] returns the artist, venue name, location, and date of a concert using the Bands in Town and moment API's.
spotify-this-song [song-title-here] returns the artist, song, album, and preview URL for a specific song using the node-spotify-API.
do-what-it-says returns the result of a "random" result by reading the random.txt file and performing the command written in that file. This command can be changed to any one of the 3 types listed above.
Instructions
Since this is a command line application, it must be cloned to your machine to be used. After cloning the repo to your computer, cd into the liri-node-app folder and run npm install to download all the dependencies mentioned above.

After the node packages, are installed, you will need to set up a spotify account to access the API.  You will need to get API keys for spotify.  Head to the developer.spotify page to request your own keys.

Screenshots
node liri.js movie-this [movie title]
Running this command will return whichever movie I have entered. liri-node-app/screenshots/movie-this-screenshot1.jpg

And if no movie title is entered it defaults to "Mr. Nobody"-
liri-node-app/screenshots/movie-this-screenshot2.jpg

