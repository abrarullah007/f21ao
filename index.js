const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 8088;
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
// create application/json parser
app.use(bodyParser.json());
// app.get("/", function (req, res){
//   res.send("welcome to home page!");
// })
// Move all routes to routes.js
require("./routes/routes.js")(app);

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
module.exports = server;
