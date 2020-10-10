const path = require("path");

const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // if (req.profile) {
    //   res.redirect("../views/partials/profile");
    // }
    res.render(path.join(__dirname, "../views/index"));
  });
  app.get("/signup", (req, res) => {
    // if (req.profile) {
    //   res.redirect("../views/partials/profile");
    // }
    res.render(path.join(__dirname, "../views/partials/signup"));
  });
  
  app.get("/search", (req, res) => {
    res.render(path.join(__dirname, "../views/partials/search"));
  });


  app.get("/results", (req, res) => {
    res.render(path.join(__dirname, "../views/partials/results"));
  });

  app.get("/login", (req, res) => {
    if (req.profile) {
      res.redirect("/../views/partials/profile ");
    }
    res.sendFile(path.join(__dirname, "../views/index"));
  });

//   app.get("/../views/partials/profile", isAuthenticated, (req, res) => {
//     res.sendFile(path.join(__dirname, "../views/members.html"));
//   });
};
