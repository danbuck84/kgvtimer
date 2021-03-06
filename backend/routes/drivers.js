const router = require('express').Router();
let Driver = require('../models/driver.model');

router.route('/').get((req, res) => {
  Driver.find()
    .then(drivers => res.json(drivers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const driver = req.body.driver;

  const newDriver = new Driver({driver});

  newDriver.save()
    .then(() => res.json('Driver added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
