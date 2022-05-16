const { connect } = require('../../connection/index');

class ControllersNewPassword {
    newPassword(req, res) {
        const { email, password } = req.body;
        res.send({ email, password });
    }
}

module.exports = new ControllersNewPassword();