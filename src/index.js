require('dotenv').config(); // use the .env file

const express = require('express'); // import express library
const app = express(); // create instance of express app

const port = process.env.PORT;
// console.log("port: ", port); // test to make sure port is found from .env file

app.listen(port, () => console.log(`Now listening on port ${port}`)); // string interpolation

app.get('/drinks', (req, res) => {
    // req = request = all info abt request - cookies, headers, ip address, etc
    // res = response = how the request went and what happened, status message
    res.send([
        {
            name: 'Gin & Tonic',
            price: 12,
            description: 'Hendricks gin with Fever Tree tonic water. Classic and subtly botanical.'
        },
        {
            name: 'Tito\'s & Grapefruit',
            price: 10,
            description: 'Tito\'s. Grapefruit. Haley\'s go-to.'
        },
        {
            name: 'Old Fashioned',
            price: 12,
            description: 'What\'s in this thing, anyway? Whiskey, I guess?'
        },
        {
            name: 'Miller Lite',
            price: 6,
            description: 'Conveniently overpriced for its newfound popularity. It\'s Miller Time.'
        },
        {
            name: 'White Claw',
            price: 7,
            description: 'This is the best we could do in terms of seltzers. Sorry'
        }
    ])
})
