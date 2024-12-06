const productController = require('../controller/productController');

const express = require('express');

const productRoute = express.Router();


productRoute.post('/upload-product/', productController.createproduct);
productRoute.get('/get-all-product', productController.getAllProducts);
productRoute.get('/get-one-product/:id', productController.getOneById);
productRoute.delete('/delete-product', productController.deleteProduct);
productRoute.patch('/update-product', productController.updateProduct);

module.exports = productRoute;