const { connect } = require('../../../connection/index');

class ControllersProductFeminine {
    getFeminine(req, res) {
        const sql = 'SELECT * FROM products WHERE gender_product = "Feminino"';
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

module.exports = new ControllersProductFeminine();