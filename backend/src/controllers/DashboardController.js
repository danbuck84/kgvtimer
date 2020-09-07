const Driver = require('../models/Driver')

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers

        const drivers = await Driver.find({ user: user_id })

        return res.json(drivers)
    }
}
