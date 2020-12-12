const express = require("express");
const notes = require("../db/notes");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    notes
      .getNotes()
      .then((notes) => res.json(notes))
      .catch((err) => res.status(500).json(err));
  });

  app.post("/api/notes", function (req, res) {
    notes
      .addNote(req.body)
      .then((notes) => res.json(notes))
      .catch((err) => res.status(500).json(err));
  });

  app.delete("/api/notes/:id", function (req, res) {
    notes
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch((err) => res.status(500).json(err));
  });
};
