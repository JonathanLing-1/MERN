const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must have a title for the product"],
        minlength:[2, "Your product title must be > 2 characters"],
    },

    price: {
        type: Number,
        required:[true, "Your product must have a price"],
        min:[0, "Price must be greater than 0"],
    },

    description: {
        type:String,
        required:[true, 'Your product must have a description']
    }
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;