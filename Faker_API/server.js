const express= require('express');

const app = express();

app.use( express.json(), express.urlencoded({ extended:true }));

// offloading routes to another file
require("./routes/routes")(app);

app.listen( 8000, () => console.log ("Server is running on port 8000"))
