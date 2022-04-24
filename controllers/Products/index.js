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
                console.log(error)
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
                return res.send({
                    error: true,
                    message: 'Banco de dados desligado'
                });
            }

            return res.send({
                error: false,
                results
            });
        })
    }

    deleteProducts(req, res) {
        const { id } = req.params;

        const sql = `DELETE FROM products WHERE id_product = ${id}`;

        connect.query(sql, (error, results) => {
            if(error) {
                return res.send({
                    error: true,
                    message: 'Erro ao deletar o produto'
                })  
            }

            return res.send({
                error: false,
                message: 'Produto deletado com sucesso'
            })
        })
    }

    getOneProduct(req, res) {
        const { id } = req.params;

        const sql = `SELECT * FROM products WHERE id_product = ${id}`;

        connect.query(sql, (error, results) => {
            if(error) {
                return res.send({
                    error: true,
                    message: 'Erro ao pegar o produto'
                })  
            }

            if(results.length === 0) {
                return res.send({
                    error: true,
                    message: 'Esse id de produto não existe'
                })
            }

            return res.send({
                error: false,
                results
            })
        })
    }

    updateProduct(req, res) {
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

        const { id } = req.params;

        const sql = `UPDATE products SET
        name_product = '${nameProduct}', 
        brand_product = '${brandProduct}', 
        category_product = '${categoryProduct}', 
        price_product = ${priceProduct}, 
        amount_product = ${amountProduct}, 
        status_product = ${statusProduct}, 
        url_product = '${urlImage}', 
        description_product = '${descriptionProduct}'
        WHERE id_product = ${id}`;

        connect.query(sql, (error, results) => {
            if(error) {
                return res.send({
                    error: true,
                    message: 'Erro ao atualizar o produto'
                })
            }

            return res.send({
                error: false,
                message: 'Produto atualizado com sucesso'
            })
        })
    }

    filterProducts(req, res) {
        const { 
            nameProduct,
            brandProduct,
            categoryProduct,
            statusValue } 
        = req.body;

        console.log({
            nameProduct,
            brandProduct,
            categoryProduct,
            statusValue
        })
            
        const sql = `SELECT * FROM products 
        WHERE name_product LIKE '%${nameProduct}%' &&
        brand_product LIKE '%${brandProduct}%' &&
        category_product LIKE '%${categoryProduct}%' &&
        status_product LIKE '%${statusValue}%'
        ORDER BY id_product DESC`;

        connect.query(sql, (error, results) => {
            if(error) {
                return res.send({
                    error: true,
                    message: 'Banco de dados desligado filter'
                });
            }
            return res.send({
                error: false,
                results
            });
        })
    }
}

module.exports = new ControllersProduct();