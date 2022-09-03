const orders = require('../models/orderList');
const { Router } = require('express');
const router = Router();

// ORDER ROUTES

router.get('/', (req, res) => {
    res.send(orders);
    // console.log(orders);
    console.log(req.query);
})

router.get('/:id', (req, res) => {
    res.send(orders);
    
})

router.post('/', (req, res) => {
    console.log(req.body);
    orders.push(req.body)
    res.sendStatus(201);
})

router.put('/:id', (req, res) => {
    const { order } = req.params;
    order.id;
})

module.exports = router;
