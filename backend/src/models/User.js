const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    phone: String,
})

module.exports = mongoose.model('User', UserSchema)
