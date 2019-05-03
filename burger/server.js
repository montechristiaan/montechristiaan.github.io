var express = require("express");

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

var PORT = process.env.PORT || 8080;

var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main"}));

app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on Port: " + PORT);
});