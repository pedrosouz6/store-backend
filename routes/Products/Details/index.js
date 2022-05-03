const ControllersDetails = require('../../../controllers/Products/Details/index');

const express = require('express');
const router = express.Router();

router.get('/get/details/:id', ControllersDetails.getProduct);

module.exports = router;