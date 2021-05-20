const Product = require('../models/models');
module.exports = {
    //create
    createProduct: (req, res) => {
        Product.create(req.body)
            .then( product => res.json({ message : "success", results: product}))
            .catch(err => res.json({ message: "error", results: err}));
    },
    //read
    getAllProducts:(req, res) => {
        Product.find()
            .then( products => res.json({ message: "success", results: products}))
            .catch(err => res.json({ message: "error", results: err}));
    },

    getOneProduct:(req, res) => {
        Product.findById(req.params._id)
            .then( product => res.json({ message : "success", results: product}))
            .catch(err => res.json({ message: "error", results: err}));
    },
    //update
    updateProduct:(req, res) => {
        Product.findByIdAndUpdate(req.params._id, req.body, { new: true, runValidators: true})
        .then( product => res.json({ message : "success", results: product}))
        .catch(err => res.json({ message: "error", results: err}));

    },
    //delete
    deleteProduct: (req,res) => {
        Product.findByIdAndDelete(req.params._id)
        .then(product => res.json({ message : "success", results: product}))
        .catch(err => res.json({ message: "error", results: err}));
    }
}
