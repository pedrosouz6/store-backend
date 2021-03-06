const { connect } = require('../../../connection/index');

class ControllersProductMasculine {
    getMasculine(req, res) {
        const sql = 'SELECT * FROM products WHERE gender_product = "Masculino"';
        connect.query(sql, (error, results) => {
            if(error) {
                return res.send({
                    error: true,
                })
            }

            return res.send({
                error: false,
                results
            })
        })
    }
}

module.exports = new ControllersProductMasculine();