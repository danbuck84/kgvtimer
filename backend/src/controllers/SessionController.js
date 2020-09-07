const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { phone } = req.body;

        let user = await User.findOne({ phone })

        if (!user) {
            user = await User.create({ phone })
        }
        
        return res.json(user)
    }
}
