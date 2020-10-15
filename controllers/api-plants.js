const db = require("../models");

module.exports = function (app) {

  //Routes for Plants Table///
  // GET route for getting all of the plants---->
  app.get("/api/plant/", function (req, res) {
    db.Plants_db.findAll({})
      .then(function (Plants_db) {
        res.json(Plants_db);
      });
  });

  // //=====================COMMON NAME GET ROUTE===============================//
  // app.get("/api/plants/Common_Name/:Common_Name", function (req, res) {
  //   db.Plants_db.findAll({
  //     where: {
  //       Common_Name: req.params.Common_Name
  //     }
  //   })
  //     .then(function (Plants_db) {
  //       res.json(Plants_db);
  //     });
  // });

  // //=====================SCIENTIFIC NAME GET ROUTE===============================//
  // app.get("/api/plants/Scientific_Name/:Scientific_Name", function (req, res) {
  //   db.Plants_db.findAll({
  //     where: {
  //       Scientific_Name: req.params.Scientific_Name
  //     }
  //   })
  //     .then(function (Plants_db) {
  //       res.json(Plants_db);
  //     });
  // });
  // //=====================SUNLIGHT_NEEDS GET ROUTE===============================//
  // app.get("/api/plants/Sunlight_Needs/:Sunlight_Needs", function (req, res) {
  //   db.Plants_db.findAll({
  //     where: {
  //       Sunlight_Needs: req.params.Sunlight_Needs
  //     }
  //   })
  //     .then(function (Plants_db) {
  //       res.json(Plants_db);
  //     });
  // });

  // //=====================MOISTURE LEVELS GET ROUTE===============================//
  // //Get route for plants Moisture_levels------->Dry soil
  // app.get("/api/plants/Moisture_Levels/:Moisture_Levels", function (req, res) {
  //   db.Plants_db.findAll({
  //     where: {
  //       Moisture_Levels: req.params.Moisture_Levels
  //     }
  //   })
  //     .then(function (Plants_db) {
  //       res.json(Plants_db);
  //     });
  // });

  // // //=====================HUMIDITY GET ROUTE===============================//
  // app.get("/api/plants/Humidity/:Humidity", function (req, res) {
  //   db.Plants_db.findAll({
  //     where: {
  //       Humidity: req.params.Humidity
  //     }
  //   })
  //     .then(function (Plants_db) {
  //       res.json(Plants_db);
  //     });
  // });

  // //  // //=====================TOXICITY GET ROUTE===============================//
  // app.get("/api/plants/Poisonous/:Poisonous", function (req, res) {
  //   db.Plants_db.findAll({
  //     where: {
  //       Poisonous: req.params.Poisonous
  //     }
  //   })
  //     .then(function (Plants_db) {
  //       res.json(Plants_db);
  //     });
  // });


  // //=====================MAINTENANCE LEVEL GET ROUTE===============================//
  // app.get("/api/plants/Maintenance_Level/:Maintenance_Level", function (req, res) {
  //   db.Plants_db.findAll({
  //     where: {
  //       Maintenance_Level: req.params.Maintenance_Level
  //     }
  //   })
  //     .then(function (Plants_db) {
  //       res.json(Plants_db);
  //     });
  // });

  // //=====================PRICE GET ROUTE===============================//

  // app.get("/api/plants/Price/:Price", function (req, res) {
  //   db.Plants_db.findAll({
  //     where: {
  //       Price: req.params.Price
  //     }
  //   })
  //     .then(function (Plants_db) {
  //       res.json(Plants_db);
  //     });
  // });

  app.get("/api/plants", function (req, res) {
    console.log(req.query);
    db.plants.findAll({
      where: {
        Sunlight_Needs: req.query.sunlight,
        Humidity: `${req.query.humidity} Humidity`,
        Maintenance_Level: req.query.maintenance,
        Price: req.query.price,
        Poisonous: req.query.poison === "No"
      }
    })
      .then(function (Plants_db) {
        res.render('./partials/results', {plants: Plants_db });
      });
  });
};
