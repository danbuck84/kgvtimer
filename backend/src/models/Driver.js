const mongoose = require('mongoose')

const DriverSchema = new mongoose.Schema({
    name: String,
    email: String,
    track: String,
    kart: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Driver', DriverSchema)
