const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const driverSchema = new Schema({
  driver: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
