const db = require("../models");

module.exports = function (app) {
    app.get("/api/all", function (req, res) {
        db.Burger.findAll({})
          .then(function (results) {
          res.json(results);
        });
    
      });

    // Add a burger to db
  app.post("/api/new", function (req, res) {
    console.log(req.body);

    db.Burger.create({
      burger_name: req.body.burger_name,
    }).then(function (results) {
      res.json(results);
    });

  });
}