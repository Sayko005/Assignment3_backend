const express = require('express');
const router = express.Router();
const { createOrder, getOrdersByUser } = require('../controllers/orderController');

// POST create new order
router.post('/', createOrder);

// GET orders by user
router.get('/:userId', getOrdersByUser);

module.exports = router;
