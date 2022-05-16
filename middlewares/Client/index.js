const { connect } = require('../../connection/index');

module.exports = (req, res, next) => {
    const { email } = req.body;

    const sql = `SELECT * FROM client WHERE email_client = '${email}'`;

    connect.query(sql, (error, results) => {
        if(error) {
            console.log(error);
            return res.send({
                error: true,
                message: 'Erro ao cadastrar'
            })
        }

        if(results.length > 0) {
            return res.send({
                error: true,
                message: 'Esse email já está cadastrado no nosso site.'
            })
        }

        return next();
    })
}