var path = require("path");

module.exports = function (app) {
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/notes.html"));
  });
  //we can use "/" or just leave it empty to go to defauly in this case it is home
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });

};
