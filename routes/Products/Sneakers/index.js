const ControllersProductSneakers = require('../../../controllers/Products/Sneakers/index');

const express = require('express');
const router = express.Router();

router.get('/get/sneakers', ControllersProductSneakers.getSneakers);

module.exports = router;