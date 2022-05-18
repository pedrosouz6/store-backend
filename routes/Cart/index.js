const ControllersCart = require('../../controllers/Cart/index');

const express = require('express');
const router = express.Router();

router.post('/add/product/cart', ControllersCart.addProductCart);

module.exports = router;