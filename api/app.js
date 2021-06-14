const express = require("express");
const app = express();

// require('dotenv').config()

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

require("./loan")(app);

// app.all("*", (req, res, next) => {
//   res.redirect("/");
// });

app.use((error, req, res, next) => {
  // log the error...
  console.log("error handler", error);
  if (error.response) {
    res
      .status(error.response.status)
      .send({
        error: error.response.data.message || error.response.data.error
      });
  } else if (error.request) {
    res.status(500).send({ error: "Server Did Not Respond" });
  }
});

// export the server middleware
// module.exports = {
//   path: "/api/v1",
//   handler: app
// };

module.exports = app
