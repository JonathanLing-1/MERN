const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({

    quote: {
        type: String,
        required: [true, "You must have content for the quote"],
        minlength: [3, "Quote must be more than 3 characters long"]
    },

    votes: {
        type: Number
    }
}, { timestamps: true})

const AuthorSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, "You must have a name for an author"],
        minlength: [3, "Author name must be more than 3 characters long"]
    },

    quotes: [QuoteSchema]

}, { timestamps: true });

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;