//require dependencies
var path = require("path");
var fs = require("fs");
//require friends data from file
var friends = require("../data/friends.js");
//export API routes
module.exports = function(app) {
//add new friend entry
//compute best friend match
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var friendScore = 0;

        for(var i = 0; i < newFriend.scores.length; i++) {
            friendScore += parseInt(newFriend.scores[i]);
            }
            //check all friends in list
            var bestMatchTotal = null;
            var scoreDifference = null;
            for(var i = 0; i < friends.length; i++) {
                var currentScore = 0;
                for(var j = 0; j < friends[i].scores.length; j++) {
                    currentScore += parseInt(friends[i].scores[j]);
                }
            //compute differences
            var currentDiff = Math.abs(friendScore - currentScore)
            if(scoreDifference === null || currentDiff < scoreDifference) {
                scoreDifference = currentDiff;
                bestMatchTotal = i;
            }
        }
            //add new friend
            friends.push(newFriend);
            res.json(friends[bestMatchTotal])

    });
    //send response
        app.get("/api/friends", function(req, res) {
            res.json(friends);
        });
};