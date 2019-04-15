var mysql = require("mysql");
var inquirer = require("inquirer");
var fs = require("fs");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if(err) throw err;
    queryItems();
});

function queryItems() {
    connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
        console.log("ID:   " + "Product Name:   " + "Price: ");
        console.log("-------------------------------")
        for(var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
        }
        console.log("-------------------------------");
        start();
    });
}

function start() {
    inquirer
        .prompt([{
            name: "whatproduct",
            type: "input",
            message: "Welcome to Bamazon! What is the ID of the item you'd like to buy?",
            validate: function(value) {
                if(isNaN(value) === false) {
                    return true;
                }
                return false;
            }
            },
            {
            name: "howmany",
            type: "input",
            message: "How many would you like?",
            validate: function(value) {
                if(isNaN(value) === false) {
                    return true;
                }
                return false;
            }   
            }
        ])
        .then(function(answer) {
            connection.query(
                
            )
        })

}

