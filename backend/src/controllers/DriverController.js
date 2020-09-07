const User = require('../models/User')
const Driver = require('../models/Driver')

module.exports = {
    async index(req, res) {
        const { kart } = req.query

        const drivers = await Driver.find({ kart: kart })

        return res.json(drivers)
    },

    async store(req, res) {
        const { name, email, track, kart } = req.body
        const { user_id } = req.headers

        const user = await User.findById(user_id)

        if (!user) {
            return res.status(400).json({ error: 'User does not exist' })
        }

        const driver = await Driver.create({
            user: user_id,
            name,
            email,
            track,
            kart
        })

        return res.json(driver)
    }
}
