const ControllersClient = require('../../controllers/Client/index');

const express = require('express');
const router = express.Router();

router.post('/add/client', ControllersClient.createClient);

module.exports = router;