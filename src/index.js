require('dotenv').config(); // use the .env file
const menu = require('./Models/drinkMenu.js');
const orders = require('./Models/orderList.js');

const express = require('express'); // import express library
const app = express(); // create instance of express app

app.use(express.json()); // middleware to allow us to send json to server
app.use(express.urlencoded()); // allow to send url-encoded data to server
app.use((req, res, next) => { // log method and url for each request
    console.log(`${req.method}:${req.url}`);
    next();
})

const port = process.env.PORT;
// console.log("port: ", port); // test to make sure port is found from .env file

app.listen(port, () => console.log(`Now listening on port ${port}`)); // string interpolation

// DRINK ROUTES

app.get('/drinks', (req, res) => {
    // req = request = all info abt request - cookies, headers, ip address, etc
    // res = response = how the request went and what happened, status message
    res.send(menu);
    console.log(menu);
})

app.post('/drinks', (req, res) => {
    console.log(req.body);
    menu.push(req.body)
    res.sendStatus(201);
})

// ORDER ROUTES

app.get('/orders', (req, res) => {
    res.send(orders);
    console.log(orders);
})

app.post('/orders', (req, res) => {
    console.log(req.body);
    orders.push(req.body)
    res.sendStatus(201);
})
