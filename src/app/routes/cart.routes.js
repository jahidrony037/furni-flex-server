const express = require ('express');
const { addProductInCart, getAllProductByUser } = require('../controller/cart.controller');
const router = express.Router();

router.post('/addProduct',addProductInCart);
router.post('/products',getAllProductByUser);


module.exports = router;
