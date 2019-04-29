var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne("burger_name", req.body.burgerName, function(result) {
        res.json("New Burger Created!");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var burgerId = req.params.id;

    console.log("Burger ID: " + burgerID);

    burger.updateOne("devoured", "true", "id", burgerId,  function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        }
            else {
                res.status(200).end();
            }
    });
});

module.exports = router;
