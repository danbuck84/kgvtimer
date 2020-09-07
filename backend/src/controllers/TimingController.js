const Timing = require('../models/Timing')

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers
        const { driver_id } = req.params
        const { time } = req.body

        const timing = await Timing.create({
            user: user_id,
            driver: driver_id,
            time
        })

        await timing.populate('driver').populate('user').execPopulate()

        return res.json(timing)
    }
}
