const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/api_routes")(app);
require("./routes/html_routes")(app);

app.listen(PORT, function () {
  console.log("App is listening on port " + PORT);
});
