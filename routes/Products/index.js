const ControllersProduct = require('../../controllers/Products/index');

const express = require('express');
const router = express.Router();

router.post('/add/products', ControllersProduct.addProducts);
router.get('/get/products', ControllersProduct.getProducts);
router.get('/get/products/:id', ControllersProduct.getOneProduct);
router.put('/update/products/:id', ControllersProduct.updateProduct);
router.delete('/delete/products/:id', ControllersProduct.deleteProducts);

module.exports = router;