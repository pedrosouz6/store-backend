const { connect } = require('../../connection/index');

class ControllersCart {
    addProductCart(req, res) {
        const { id_client, id_product } = req.body;

        const sql = `INSERT INTO cart (id_client, id_product) VALUES (${id_client}, ${id_product})`;

        connect.query(sql, (error, results) => {
            if(error) {
                return console.log(error);
            }

            return console.log('add')
        })
    }
}

module.exports = new ControllersCart();