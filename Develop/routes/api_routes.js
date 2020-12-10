var notes = require('../db/notes');

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });
  
  app.post("/api/notes", function (req, res) {
    notes.push(req.body);
    res.json(true);
  });
  app.post("/api/clear", function () {
    notes = [];
  });
};