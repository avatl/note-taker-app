const router = require("express").app();
const store = require("../db/store");

router.get("/notes", function (req, res) {
  store
  res.json(notes);
});

fs.writeFile('/db/store', data, (err) => {
  if (err) throw err;
  console.log('Note taken');

  app.post("/notes", function (req, res) {
    store
      .addNote(req.body)
    res.json(notes);
    if (err) throw err;
  })

  app.get("/api/notes", function (req, res) {
    res.json(data);
    res.json(true)
  })

  app.delete("/notes/:id", (req, res) => {
    store
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch((err) => res.status(500).json(err));
  });
})

module.exports = router;