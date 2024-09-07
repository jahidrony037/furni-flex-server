const express = require('express');
const { addProduct, getAllProduct } = require('../controller/product.controller');
const router = express.Router();

router.post('/addProduct', addProduct);
router.get('/products', getAllProduct)

module.exports = router;