const express = require("express");
const app = express();

/**
 * Stich the app with routes 
 * 
 */

app.use(express.json());

require("./routes/idea.routes")(app);

/**
 * Starting the server
 */

app.listen(8080, () => { 
    console.log("Starting the server on port no 8080");
})