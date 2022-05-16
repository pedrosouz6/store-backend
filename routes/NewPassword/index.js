const ControllersNewPassword = require('../../controllers/NewPassword/index');

const express = require('express');
const router = express.Router();

router.put('/new-password/client', ControllersNewPassword.newPassword);

module.exports = router;