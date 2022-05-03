const { connect } = require('../../../connection/index');

class ControllersDetails {
    getProduct(req, res) {
        const { id } = req.params;

        const sql = `SELECT * FROM products WHERE id_product = '${id}'`;

        connect.query(sql, (error, results) => {
            if(error) {
                return res.send({
                    error: true,
                    message: 'Erro ao pegar o produto'
                })
            }

            return res.send({
                error: false,
                results
            })
        })
    }
}

module.exports = new ControllersDetails();