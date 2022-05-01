const ControllersClient = require('../../controllers/Client/index');

const express = require('express');
const router = express.Router();

router.post('/add/client', ControllersClient.createClient);
router.post('/login/client', ControllersClient.loginClient);

module.exports = router;