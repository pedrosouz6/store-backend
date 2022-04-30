const { connect } = require('../../../connection/index');

class ControllersProductSneakers {
    getSneakers(req, res) {
        const sql = 'SELECT * FROM products WHERE category_product = "Tênis"';
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

module.exports = new ControllersProductSneakers();