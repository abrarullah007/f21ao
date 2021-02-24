module.exports = function (app) {
  const apiController = require("./apiController");
  //method 1
  app.get("/", apiController.index);
  //method 2
  app.get("/hello", function (req, res) {
    res.send("Hello world!");
  });

  /// add more routes
};
