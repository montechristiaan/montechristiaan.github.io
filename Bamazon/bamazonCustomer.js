var mysql = require("mysql");
var inquirer = require("inquirer");

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
        console.log("\n" + "ID:   " + "Product Name:   " + "Price: ");
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
            checkPurchase(answer.whatproduct, answer.howmany);
        });
    };

    function checkPurchase(productID, quantity) {
        connection.query("SELECT * FROM products WHERE item_id =" + productID, function(err, res) {
            if(err) throw err;
            var product = res[0];
            console.log("\n" + "You have chosen: " + "\n");
            console.log("-------------------");
            console.log("Product Name: " + product.product_name);
            console.log("Price: " + "$" + product.price);
            console.log("Quantity: " + quantity);
            console.log("Available: " + product.stock_quantity);
            console.log("-------------------");

            if(quantity <= product.stock_quantity) {
                console.log("Item Available");
                confirmOrder();
            }
            else {
                console.log("Item Not Available -- Try Another Order!");
                queryItems();
            };
        
    function confirmOrder() {
        inquirer    
            .prompt([
                {
                name: "confirm",    
                type: "list",
                message: "Is this the correct order?",
                choices: ["Y", "N"]
                }
            ])
            .then(function(response) {
                if(response.confirm === "Y") {
                    console.log("Your total for this order is: " + "$" + (quantity * product.price));
                    updateDB(product);
                }
                else if(response.confirm === "N") {
                    console.log("Canceling Order!");
                    connection.end();
                }
            });
        };
    
    function updateDB(product) {
        connection.query("UPDATE products SET ? WHERE ?", [
            {
                stock_quantity: (product.stock_quantity - quantity)
            },
            {
                item_id: product.item_id
            }
        ],
        function(err, res) {
            console.log("Thank You for Shopping Bamazon!");
            chooseAgain();
        });
    };

    function chooseAgain() {
        inquirer    
            .prompt([
                {
                name: "shopagain",
                type: "list",
                choices: ["Y", "N"],
                message: "Would you like to shop again?"
                }
            ])
            .then(function(answer) {
                if(answer.shopagain === "Y") {
                    queryItems();
                }
                else {
                    console.log("Goodbye!");
                    connection.end();
                };
            });
    };

        });
    };

