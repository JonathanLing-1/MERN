const controller = require('../controllers/controller');

module.exports = app => {
    //create
    app.post('/api/product/new', controller.createProduct);
    //read
    app.get('/api/products', controller.getAllProducts);
    app.get('/api/products/:_id', controller.getOneProduct);
    //update
    app.put('/api/product/:_id/update', controller.updateProduct);
    //delete
    app.delete('/api/products/:_id/delete', controller.deleteProduct);
}