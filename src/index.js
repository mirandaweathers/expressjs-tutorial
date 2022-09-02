require('dotenv').config(); // use the .env file

const express = require('express'); // import express library
const app = express(); // create instance of express app

const port = process.env.PORT;
// console.log("port: ", port); // test to make sure port is found from .env file

app.listen(port, () => console.log(`Now listening on port ${port}`));

