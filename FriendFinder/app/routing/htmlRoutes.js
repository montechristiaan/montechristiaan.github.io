//require dependencies
var path = require("path");
//export HTML routes
module.exports = function(app) {
//home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
//survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};