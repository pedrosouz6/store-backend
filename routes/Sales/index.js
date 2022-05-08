const ControllersSales = require('../../controllers/Sales/index');

const express = require('express');
const router = express.Router();

router.get('/buy/product', ControllersSales.buy);

module.exports = router;