const express = require("express");
const app = express();
 const bodyParser = require("body-parser");
 // const dotenv = require("dotenv");
 // dotenv.config();
 const port = process.env.PORT || 8080;
 // create application/x-www-form-urlencoded parser
 app.use(bodyParser.urlencoded({ extended: false }));
 // create application/json parser
 // app.use(bodyParser.json());
 // app.get("/", function (req, res){
 //   res.send("welcome to home page!");
 // })
 // Move all routes to routes.js
 require("./routes/routes.js")(app);
 // console.log(process.env.check, process.env.check2);

 const server = app.listen(port, () => {
   console.log(`Example app listening at :${port}`);
 });

module.exports = server;
