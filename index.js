const express = require("express");
const app = express();

const port = 8088;

app.get("/", (req, res) => {
  res.send("No route, default home page");
});
app.get("/profile", (req, res) => {
  console.log("you are in the profile ");
  res.send("You have requested the profile route!");
});

app.post("/studentinfo", (req, res) => {
  var firstname = req.query.firstname;
  var gender = req.query.gender;

  console.log("you are in the profile ");
  res.send({ name: firstname, gender: gender });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
