const ControllersProduct = require('../../controllers/Products/index');

const express = require('express');
const router = express.Router();

router.post('/add/products', ControllersProduct.addProducts);
router.get('/get/products', ControllersProduct.getProducts);

module.exports = router;