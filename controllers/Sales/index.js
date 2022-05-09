const { connect } = require('../../connection/index');

class ControllersSales {
    buy(req, res) {
        const { id_client, id_products } = req.body;

        for(let i = 0; i < id_products.length; i++) {
            const sql = `
            INSERT INTO buy (
                id_product, 
                id_client,
                date_buy
            ) VALUES (
                '${id_products[i]}', 
                '${id_client}',
                now()
            )`;
    
            connect.query(sql, (error, results) => {
                if(error) {
                    return console.log(error);
                }
    
                return console.log(results);
            })
        }
    }

    getBuy(req, res) {
        const sql = `
        SELECT 
        buy.date_buy,
        products.name_product, 
        products.brand_product,
        products.price_product,
        products.url_product,
        client.name_client 
        FROM ((buy 
            INNER JOIN client ON client.id_client = buy.id_client)
            INNER JOIN products ON products.id_product = buy.id_product)
        `;

        connect.query(sql, (error, results) => {
            if(error) {
                return console.log(error);
            }

            return res.send(results);
        })
    }
}

module.exports = new ControllersSales();