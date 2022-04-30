const ControllersProductFeminine = require('../../../controllers/Products/Feminine/index');

const express = require('express');
const router = express.Router();

router.get('/get/feminine', ControllersProductFeminine.getFeminine);

module.exports = router;