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
                message: 'Produto cadastrado com sucesso!!!'
            });
        })
    }   
}

module.exports = new ControllersProduct();