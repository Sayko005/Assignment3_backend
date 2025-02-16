const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
  try {
    // userId might come from the logged-in user in a real app
    const { userId, productIds } = req.body;
    const order = new Order({ userId, productIds, orderStatus: 'Pending' });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrdersByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.find({ userId }).populate('productIds');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};