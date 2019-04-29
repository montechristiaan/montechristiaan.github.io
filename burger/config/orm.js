var connection = require("./connection.js");

var orm = {
    selectAll: function(data) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [data], function(err, result) {
            if(err) throw err; 
            console.log(result);
        });
    },
    insertOne: function(data) {
        var queryString = "INSERT ?? INTO ??";
        connection.query(queryString, [data], function(err, result) {
            if(err) throw err;
            console.log(result);
        });
    },
    updateOne: function(data) {
        var queryString = "UPDATE ?? WHERE ??";
        connection.query(queryString, [data], function(err, result) {
            if(err) throw err;
            console.log(result);
        }); 
    }
};

module.exports = orm;