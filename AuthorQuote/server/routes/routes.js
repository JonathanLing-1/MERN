const controller = require('../controllers/controller');

module.exports = app => {
    // Create
    app.post('/api/author/new', controller.createAuthor);
    // Read
    app.get('/api/authors', controller.getAllAuthors);
    app.get('/api/author/:_id', controller.getOneAuthor);
    // Update
    app.put('/api/author/:_id/update', controller.updateAuthor);
    app.put('/api/author/:_id/quote', controller.addQuote);
    // Delete
    app.delete('/api/author/:_id/delete', controller.deleteAuthor);
}