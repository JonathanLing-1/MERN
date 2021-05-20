const Truck = require('../models/models');

module.exports = {
    // Create
    createTruck: (req, res) => {
        Truck.create(req.body)
            .then( truck => res.json({ message: "success", results: truck}))
            .catch(err => res.json({message: "error", results : err}) );
    },
    // Read
    getAllTrucks: (req, res ) => {
        Truck.find()
            .then(trucks => res.json({message : "success", results: trucks}))
            .catch(err => res.json({message: "error", results : err}) );
    },
    getOneTruck: (req, res ) => {
        Truck.findById(req.params._id)
            .then(truck => res.json({message : "success", results: truck}))
            .catch(err => res.json({message: "error", results : err}) );
    },
    // Update
    updateTruck: (req, res ) => {
        Truck.findByIdAndUpdate(req.params._id, req.body, {new:true, runValidators:true})
            .then(truck => res.json({message : "success", results: truck}))
            .catch(err => res.json({message: "error", results : err}) );
    },
    addReview: (req, res ) => {
        // Truck.findByIdAndUpdate(req.params._id, { $push: { reviews: req.body}}, { new:true, runValidators:true })
        Truck.exists({_id: req.params._id, "reviews.name": req.body.name})
            .then( exists => {
                if(exists){
                    return Promise.reject({errors: {name: {message :"You cannot leave more than one review on this truck."} } })
                } else {
                    return Truck.findByIdAndUpdate(req.params._id, { $push: { reviews: req.body} }, { new:true, runValidators:true })
                }
            }) 
            .then( truck => res.json({ message: "success", results: truck}))
            .catch(err => res.json({message: "error", results : err.errors.reviews ? err.errors.reviews : err}) );


    },
    // Delete
    deleteTruck: (req, res ) => {
        Truck.findByIdAndDelete(req.params._id)
            .then(trucks => res.json({message : "success", results: truck}))
            .catch(err => res.json({message: "error", results : err}) );
    },
}