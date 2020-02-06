var db = require("../models");

module.exports = function(app) {
  app.get("/api/portfolio", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    app.get("/api/portfolio", function(req, res) {
        db.Portfolio.findAll({}).then(function(dbAuthor) {
          res.json(dbPortfolio);
        });
      });
  });

  app.get("/api/portfolio/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Portfolio.findOne({
      where: {
        id: req.params.id
      },
    })
  });

  app.post("/api/portfolio", function(req, res) {
    db.Portfolio.create(req.body).then(function(dbPortfolio) {
      res.json(dbPortfolio);
    });
  });

  app.delete("/api/portfolio/:id", function(req, res) {
    db.Portfolio.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPortfolio) {
      res.json(dbPortfolio);
    });
  });

};