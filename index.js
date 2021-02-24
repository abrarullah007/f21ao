const express = require("express");
const app = express();

const port = 8088;

require("./routes/routes.js")(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// const express = require("express");
// const app = express();
// const port = 8088;
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const session = require("express-session");

// app.use(cors());
// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: false }));
// // create application/json parser

// console.log("app running");

// require("./routes/routes.js")(app);

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
