const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "You must leave a name"],
        minlength: [2, "Your name must be at least 2 characters long"]
    },
    review: {
        type: String,
        // required: [true, "You must leave a review"],
        minlength: [10, "If you're going to leave a review, be more verbose."]
    },
    rating: {
        type: Number,
        required: [true, "You must leave a rating with a review"],
        min: [1, "Rating cannot be less than one star"],
        max: [5, "Rating cannot be greater than 5 stars"],
        
    }
}, { timestamps: true});


const TruckSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Food truck name is required."],
        minlength: [5, "Food truck name must be at least 5 characters"],
    },

    style: {
        type: String,
        required :[true, "Cuisine style is required"],
        minlength: [3, "Cuisine style must be >3 characters"],
    },

    description: {
        type: String,
        required :[true, "Description is required"],
        minlength: [10, "Description must be >10 characters"],
    },

    reviews: [ReviewSchema],

}, { timestamps: true });



const Truck = mongoose.model("Truck", TruckSchema);

module.exports = Truck;