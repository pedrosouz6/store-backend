const jwt = require('jsonwebtoken');
const config = require('../../config/index');
const { connect } = require('../../connection/index');

class ControllersClient {
    createClient(req, res) {
        const { name, email, password } = req.body;

        const sql = 
        `INSERT INTO client (
            name_client, 
            email_client, 
            password_client
        ) VALUES (
            '${name}', 
            '${email}', 
            '${password}'
        )`;

        connect.query(sql, (error, results) => {
            if(error) {
                return res.send({
                    error: true,
                    message: 'Erro ao cadastrar o cliente'
                });
            }

            return res.json({
                error: false,
                message: 'Cliente cadastrado com sucesso',
                token: jwt.sign(
                    {id: results.insertId},
                    config.secret,
                    {expiresIn: config.expireIn}
                )
            })  
        })
    }

    loginClient(req, res) {
        const { email, password } = req.body;

        const sql = `SELECT * FROM client WHERE 
        email_client = '${email}' && 
        password_client = '${password}'`;

        connect.query(sql, (error, results) => {
            if(error) {
                return res.send({
                    error: true,
                    message: 'Erro ao identificar o cliente'
                })
            }

            if(results.length === 0) {
                return res.send({
                    error: true,
                    message: 'Usuário não existe'
                })
            }

            if(results.length === 1) {
                return res.send({
                    error: false,
                    message: 'O usuário existe'
                })
            }
        })
    }
}

module.exports = new ControllersClient();