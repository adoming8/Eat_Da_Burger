
// Dependencies
// =============================================================

var express = require("express");
var db = require("./models");

var PORT  = process.env.PORT|| 8080;
var app = express();


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("./public"));

// Routes
// =============================================================
require("./routes/routes.js")(app);


app.get("/burgers", function(req, res) {
  res.send(mainLayout.render);
});

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port %s", PORT);
    });
});

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);}
else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Camellos_15',
    database: 'burgers_db'
  });
};
