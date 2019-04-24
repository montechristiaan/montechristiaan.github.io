var path = require("path");
var fs = require("fs");

var friends = require("../data/friends.js");

module.exports = function(app) {

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var friendScore = 0;

        for(var i = 0; i < newFriend.scores.length; i++) {
            friendScore += parseInt(newFriend.scores[i]);
            }

            var bestMatchTotal = null;
            var scoreDifference = null;
            for(var i = 0; i < friends.length; i++) {
                var currentScore = 0;
                for(var j = 0; j < friends[i].scores.length; j++) {
                    currentScore += parseInt(friends[i].scores[j]);
                }
            
            var currentDiff = Math.abs(friendScore - currentScore)
            if(scoreDifference === null || currentDiff < scoreDifference) {
                scoreDifference = currentDiff;
                bestMatchTotal = i;
            }
        }

            friends.push(newFriend);
            res.json(friends[bestMatchTotal])

    });

        app.get("/api/friends", function(req, res) {
            res.json(friends);
        });
};