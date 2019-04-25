//require dependencies
var express = require("express");
//configure express app
var app = express();
//assign port
var PORT = process.env.PORT || 3000;
//express app handling
app.use(express.urlencoded({extended: true}));

app.use(express.json());
//add routing paths
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//start listening on port
app.listen(PORT, function() {
    console.log("I am listening");
});