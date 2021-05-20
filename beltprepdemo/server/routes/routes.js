const controller = require('../controllers/controller');

module.exports = app => {
    // Create
    app.post('/api/trucks/new', controller.createTruck);
    // Read
    app.get('/api/trucks', controller.getAllTrucks);
    app.get('/api/trucks/:_id', controller.getOneTruck);
    // Update
    app.put('/api/trucks/:_id/update', controller.updateTruck);
    app.put('/api/trucks/:_id/review', controller.addReview);
    // Delete
    app.delete('/api/trucks.:_id/delete', controller.deleteTruck);
}