const menu = require('../Models/drinkMenu');
const { Router } = require('express');
const router = Router();

// DRINK ROUTES

router.get('/', (req, res) => {
    // req = request = all info abt request - cookies, headers, ip address, etc
    // res = response = how the request went and what happened, status message
    res.send(menu);
    console.log(menu);
})

router.post('/', (req, res) => {
    console.log(req.body);
    menu.push(req.body)
    res.sendStatus(201);
})

module.exports = router;
