const ControllersNewPassword = require('../../controllers/NewPassword/index');
const MiddlewaresNewPassword = require('../../middlewares/NewPassword/index');

const express = require('express');
const router = express.Router();

router.put('/new-password/client', MiddlewaresNewPassword, ControllersNewPassword.newPassword);

module.exports = router;