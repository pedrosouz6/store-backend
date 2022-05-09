const ControllersSales = require('../../controllers/Sales/index');

const express = require('express');
const router = express.Router();

router.post('/buy/product', ControllersSales.buy);
router.get('/get/buy', ControllersSales.getBuy);

module.exports = router;