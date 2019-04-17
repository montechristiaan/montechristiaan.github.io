# Bamazon App 

## Description
A simple command line-based store using the npm inquirer and npm mysql packages together with the MySQL database.

## MySQL Database Setup
In order to run this app, you should have the MySQL database already set up on your machine. To copy my results you will need to run the code found in the schema.sql and then the seeds.sql. Run the code withing MySQL itself.

## Customer Interface
The customer interface allows the user to view the current inventory of store items: item IDs, product names, department, and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. 

<img width="581" alt="InitialScreenshot" src="https://user-images.githubusercontent.com/45082388/56316972-46bb3600-6121-11e9-9fa3-c0a23948c41c.png">

If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and asking whether the user would like to purchase another item. 

<img width="544" alt="2Screenshot" src="https://user-images.githubusercontent.com/45082388/56317012-66eaf500-6121-11e9-958b-6408c3a612eb.png">

While that happens, the database is updated simultaneuously. Notice the quantity for "Great Expectations" drops from 25 to 21...

![SQLscreenshot1](https://user-images.githubusercontent.com/45082388/56317213-c517d800-6121-11e9-9366-4f5499595ed2.png)

![SQLscreenshot2](https://user-images.githubusercontent.com/45082388/56317234-d6f97b00-6121-11e9-8ec4-d4836fba6ebe.png)

If the desired quantity is not available, the user is prompted to order a different item.

<img width="675" alt="3Screenshot" src="https://user-images.githubusercontent.com/45082388/56317277-f0022c00-6121-11e9-94e2-bb8208655b7b.png">

And if the user changes their mind and doesn't want to confirm the order, the order is cancelled...

<img width="454" alt="4Screenshot" src="https://user-images.githubusercontent.com/45082388/56317328-11631800-6122-11e9-8a0a-45dbc1b398e5.png">

At the end of the order, if the user decides they are done and do not want to purchase anything else a "Goodbye" message is displayed and the connection is ended.

<img width="536" alt="5Screenshot" src="https://user-images.githubusercontent.com/45082388/56317380-3a83a880-6122-11e9-9e70-0b327f9c0685.png">

## Bamazon Demo
You can view the demo of the Bamazon customer and manager interfaces at the link below. 
https://drive.google.com/file/d/1nZfx9LhX4_PvPzAW-OUULrobvNMvmJee/view?usp=sharing

