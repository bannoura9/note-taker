var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var noteArray = require("./Develop/db/notes.js");
var PORT = process.env.PORT || 8080;
let fs = require("fs")


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require("./Develop/routes/api_routes")(app);
require("./Develop/routes/html_routes")(app);

 app.get("/api/noteArray", function (req, res) {
   res.json(noteData);
  console.log(noteData);
 });

app.listen(PORT, function () {
  console.log("App is listening on port " + PORT);
});
