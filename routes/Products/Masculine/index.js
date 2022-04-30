const ControllersProductMasculine = require('../../../controllers/Products/Masculine/index');

const express = require('express');
const router = express.Router();

router.get('/get/masculine', ControllersProductMasculine.getMasculine);

module.exports = router;