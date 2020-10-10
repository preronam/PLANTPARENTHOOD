const db = require("../models");

module.exports = function (app) {

    //Routes for Plants Table///
    // GET route for getting all of the plants---->
    app.get("/api/plants/", function (req, res) {
      db.Plants_db.findAll({})
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    // Get route for plant Common Names------->
    app.get("/api/plants/Common_Name/:Common_Name", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Common_Name: req.params.Common_Name
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
  
    // Get route for plant Scientific Names------->
    app.get("/api/plants/Scientific_Name/:Scientific_Name", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Scientific_Name: req.params.Scientific_Name
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
    //=====================SUN_NEEDS GET ROUTE===============================//
    // Get route for plants Sun_needs-------> Partial
    app.get("/api/plants/Sun_Needs/:Sun_Needs", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Sun_Needs: "Partial Sun"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    //Get route for plants Sun_needs-----> Full
    app.get("/api/plants/Sun_Needs/:Sun_Needs", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Sun_Needs: "Full Sun"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
  
    //Get route for plants sun_needs-----> Bright Indirect Sun
    app.get("/api/plants/Sun_Needs/:Sun_Needs", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Sun_Needs: "Bright Indirect Sun"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    //Get route for plants sun_needs-----> Parital to low
    app.get("/api/plants/Sun_Needs/:Sun_Needs", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Sun_Needs: "Partial to Low Sun"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
  
    //Get route for plants sun_needs-----> Parital to full
    app.get("/api/plants/Sun_Needs/:Sun_Needs", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Sun_Needs: "Partial to Full Sun"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
    //=====================MOISTURE LEVELS GET ROUTE===============================//
    //Get route for plants Moisture_levels------->Dry soil
    app.get("/api/plants/Moisture_Levels/:Moisture_Levels", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Moisture_Levels: "Dry soil"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    //Get route for plants Moisture_levels------->Moist soil
    app.get("/api/plants/Moisture_Levels/:Moisture_Levels", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Moisture_Levels: "Moist soil"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    //Get route for plants Moisture_levels------->Lightly Moist soil
    app.get("/api/plants/Moisture_Levels/:Moisture_Levels", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Moisture_Levels: "Lightly moist soil"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    //Get route for plants Moisture_levels------->Well drained soil
    app.get("/api/plants/Moisture_Levels/:Moisture_Levels", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Moisture_Levels: "Well drained soil"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    //Get route for plants Moisture_levels------->Well drained dryer soil
    app.get("/api/plants/Moisture_Levels/:Moisture_Levels", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Moisture_Levels: "Well drained dryer soil"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
  
    //Get route for plants Moisture_levels------->Allow soil to dry out between waterings
    app.get("/api/plants/Moisture_Levels/:Moisture_Levels", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Moisture_Levels: "Allow soil to dry out between waterings"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
  
    //Get route for plants Moisture_levels------->Allow soil to partially dry out between waterings
    app.get("/api/plants/Moisture_Levels/:Moisture_Levels", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Moisture_Levels: "Allow soil to partially dry out between waterings"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    //=====================HUMIDITY GET ROUTE===============================//
  
    app.get("/api/plants/Humidity/:Humidity", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Humidity: "High Humidity"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    app.get("/api/plants/Humidity/:Humidity", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Humidity: "Higher Humidity"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    app.get("/api/plants/Humidity/:Humidity", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Humidity: "Average Humidity"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    app.get("/api/plants/Humidity/:Humidity", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Humidity: "Low Humidity"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    //=====================TOXICITY GET ROUTE===============================//
    app.get("/api/plants/Toxic/:Toxic", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Toxic: "Yes"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    app.get("/api/plants/Toxic/:Toxic", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Toxic: "No"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    //=====================MAINTENANCE LEVEL GET ROUTE===============================//
    app.get("/api/plants/Maintenance_Level/:Maintenance_Level", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Maintenance_Level: "High"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
    app.get("/api/plants/Maintenance_Level/:Maintenance_Level", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Maintenance_Level: "Medium"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    app.get("/api/plants/Maintenance_Level/:Maintenance_Level", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Maintenance_Level: "Low"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    //=====================PRICE GET ROUTE===============================//
  
    app.get("/api/plants/Price/:Price", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Price: "$"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
    app.get("/api/plants/Price/:Price", function (req, res) {
      db.Plants_db.findAll({
          where: {
            Price: "$$"
          }
        })
        .then(function (Plants_db) {
          res.json(Plants_db);
        });
    });
  
  };
