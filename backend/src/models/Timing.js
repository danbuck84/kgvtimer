const mongoose = require('mongoose')

const TimingSchema = new mongoose.Schema({
    time: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver'
    }
})

module.exports = mongoose.model('Timing', TimingSchema)
