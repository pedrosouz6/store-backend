const ControllersProductSlipper = require('../../../controllers/Products/Slipper/index');

const express = require('express');
const router = express.Router();

router.get('/get/slipper', ControllersProductSlipper.getSlipper);

module.exports = router;