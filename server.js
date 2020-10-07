//Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3306;

var db = require("./models");

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/")(app);

// HTML ROUTES
require("./app/routes/")(app);

//Syncing sequelize models and then starting the Express app//
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT 3306" + PORT);
  });
});


