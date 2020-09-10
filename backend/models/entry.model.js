const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
  driver: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  time: { type: Number, required: true },
  track: { type: String, required: true },
  kart: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
