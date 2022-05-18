const jwt = require('jsonwebtoken');
const config = require('../../config/index');
const { connect } = require('../../connection/index');

class ControllersNewPassword {
    newPassword(req, res) {
        const { email, password } = req.body;
        
        const sql = `UPDATE client SET password_client = '${password}' WHERE email_client = '${email}'`;
        connect.query(sql, (error, results) => {
            if(error) {
                res.send({
                    error: true,
                    message: 'Erro ao redefinir senha'
                })
            }

            return res.send({
                error: false,
                message: 'Senha alterada com sucesso',
                token: jwt.sign(
                    {email: email},
                    config.secret,
                    {expiresIn: config.expireIn}
                )
            })
        })

    }
}

module.exports = new ControllersNewPassword();