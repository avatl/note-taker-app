const store = require("../server");
const router = require("express").Router();
const fs = require("fs");
const data = require("../db/db.json")
// this code will execute when the server receives a GET request to api/notes
router.get("/notes", function (req, res) {
  store
  res.json(notes);
});
// read what is in db.json => using fs module
() => {
  return store.read().then((notes) => {
    let parsedNotes;
    // If notes isn't an array or can't be turned into one, send back a new empty array
    try {
      parsedNotes = [].concat(JSON.parse(notes));
    } catch (err) {
      parsedNotes = [];
    }
    return parsedNotes;
  });
}
// send response with data
router.post("/notes", function (req, res) {
  store
    .addNote(req.body)
  res.json(notes);
  if (err) throw err;
});
// take new note and add it to db.json using fs module
router.get("/api/notes", function (req, res) {
  res.json(data);
  res.json(true)
})
// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete("/notes/:id", (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});
module.exports = router;