const { connect } = require('../../../connection/index');

class ControllersProductSlipper {
    getSlipper(req, res) {
        const sql = 'SELECT * FROM products WHERE category_product = "Chinelo"';
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

module.exports = new ControllersProductSlipper();