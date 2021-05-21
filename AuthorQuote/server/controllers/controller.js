const Author = require('../models/models');

module.exports = {
    // Create
    createAuthor: ( req, res ) => {
        Author.create(req.body)
            .then( author => res.json({ message: "success", results: author}))
            .catch( err => res.json({ message: "error", results: err}));
    },
    // Read
    getAllAuthors: (req, res ) => {
        Author.find()
            .then(authors => res.json({message : "success", results: authors}))
            .catch(err => res.json({message: "error", results : err}) );
    },
    getOneAuthor: (req, res ) => {
        Author.findById(req.params._id)
            .then(author => res.json({message : "success", results: author}))
            .catch(err => res.json({message: "error", results : err}) );
    },
    // Update
    updateAuthor: (req, res ) => {
        Author.findByIdAndUpdate(req.params._id, req.body, {new:true, runValidators:true})
            .then(author => res.json({message : "success", results: author}))
            .catch(err => res.json({message: "error", results : err}) );
    },
    addQuote: (req, res) => {
        Author.findByIdAndUpdate(req.params._id, { $push: { quotes: req.body}}, { new:true, runValidators: true})
            .then(author => res.json({message : "success", results: author}))
            .catch(err => res.json({message: "error", results : err.errors.quotes ? err.errors.quotes : err}) );
    },
    // Delete
    deleteAuthor: (req, res ) => {
        Author.findByIdAndDelete(req.params._id)
            .then(author => res.json({message : "success", results: author}))
            .catch(err => res.json({message: "error", results : err}) );
    },
}
