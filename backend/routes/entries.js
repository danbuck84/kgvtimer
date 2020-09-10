const router = require('express').Router();
let Entry = require('../models/entry.model');

router.route('/').get((req, res) => {
  Entry.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const driver = req.body.driver;
  const email = req.body.email;
  const phone = Number(req.body.phone);
  const time = Number(req.body.time);
  const track = req.body.track;
  const kart = req.body.kart;
  const date = Date.parse(req.body.date);

  const newEntry = new Entry({
    driver,
    email,
    phone,
    time,
    track,
    kart,
    date,
  });

  newEntry.save()
  .then(() => res.json('Entry added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Entry.findById(req.params.id)
    .then(entry => res.json(entry))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Entry.findByIdAndDelete(req.params.id)
    .then(() => res.json('Entry deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Entry.findById(req.params.id)
    .then(entry => {
      entry.driver = req.body.driver;
      entry.email = req.body.email;
      entry.phone = Number(req.body.phone);
      entry.time = Number(req.body.time);
      entry.track = req.body.track;
      entry.kart = req.body.kart;
      entry.date = Date.parse(req.body.date);

      entry.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
