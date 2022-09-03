require('dotenv').config(); // use the .env file

const express = require('express'); // import express library
const app = express(); // create instance of express app

const port = process.env.PORT;

const drinkRoute = require('./routes/drinks');
const orderRoute = require('./routes/orders');

app.use(express.json()); // middleware to allow us to send json to server
app.use(express.urlencoded({ extended: true })); // allow to send url-encoded data to server
app.use((req, res, next) => { // log method and url for each request
    console.log(`${req.method}:${req.url}`);
    next();
})

app.use('/drinks', drinkRoute);
app.use('/orders', orderRoute);

app.listen(port, () => console.log(`Now listening on port ${port}`)); // string interpolation
