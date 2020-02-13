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

    db.Burger.create(
      {
      burger_name: req.body.burger_name,
      })
    .then(function (results) {
      res.json(results);
    });

  });
  app.put("/api/updated/:id", function (req, res) {
    console.log(req.body);
    db.Burger.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function (results) {
        // `results` here would be the newly created burger
        res.json(results);
      });

  });

}