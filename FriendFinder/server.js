var path = require("path");
var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"))
})

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"))
})

app.post("/add-friend", function(req, res) {
    var body = req.body;
    console.log("body", body);
})

app.listen(PORT, function() {
    console.log("I am listening");
});