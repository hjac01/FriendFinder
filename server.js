// Dependencies
var express = require("express");
var path = require("path");

// Instance
var app = express();

// Set port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
