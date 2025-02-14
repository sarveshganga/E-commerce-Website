const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Cart = require('../models/Cart');

// GET: Fetch all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET: Fetch product details by ID
router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST: Add product to cart
router.post('/cart', async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        const cartItem = new Cart({ productId, quantity });
        await cartItem.save();
        res.status(201).json(cartItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT: Update product quantity in cart
router.put('/cart/:id', async (req, res) => {
    try {
        const cartItem = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });
        res.json(cartItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE: Remove product from cart
router.delete('/cart/:id', async (req, res) => {
    try {
        const cartItem = await Cart.findByIdAndDelete(req.params.id);
        if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });
        res.json({ message: 'Item removed from cart' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
