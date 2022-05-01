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

            return res.send({   
                error: false,
                message: 'Cliente cadastrado com sucesso'
            })
        })
    }
}

module.exports = new ControllersClient();