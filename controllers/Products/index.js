const { connect } = require('../../connection/index');

class ControllersProduct {
    addProducts(req, res) {
        const { 
            nameProduct,
            brandProduct,
            categoryProduct,
            statusProduct,
            amountProduct,
            priceProduct,
            urlImage,
            descriptionProduct 
        } = req.body;

        const sql = `
        INSERT INTO products (
            name_product, 
            brand_product, 
            category_product, 
            price_product, 
            amount_product, 
            status_product, 
            url_product, 
            description_product
        ) VALUES (
            '${nameProduct}',
            '${brandProduct}',
            '${categoryProduct}',
            ${priceProduct},
            ${amountProduct},
            ${statusProduct},
            '${urlImage}',
            '${descriptionProduct}'  
        )`;

        connect.query(sql, (error, results) => {
            if(error) {
                return res.send({
                    error: true,
                    message: 'Erro ao cadastrar o produto'
                });
            }

            return res.send({
                error: false,
                message: 'Produto cadastrado com sucesso!'
            });
        })
    }  
    
    getProducts(req, res) {
        const sql = 'SELECT * FROM products ORDER BY id_product DESC';

        connect.query(sql, (error, results) => {
            if(error) {
                return console.log(error);
            }

            return res.send({results});
        })
    }
}

module.exports = new ControllersProduct();