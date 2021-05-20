const mongoose = require('mongoose');
    
mongoose.connect('mongodb://localhost/product_manager_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connection established"))
    .catch(err => console.log("Something went wrong: ", err));