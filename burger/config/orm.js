var connection = require("./connection.js");

var tableName = "burgers";

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM " + tableName;
        connection.query(queryString, function(err, result) {
            if(err) throw err; 
            cb(result);
        });
    },
    insertOne: function() {

    }
};

module.exports = orm;