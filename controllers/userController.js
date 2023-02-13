const User = require('../models/usersModel')

const Login = async (req, res) => {

    const username = req.body.apple;
    const password = req.body.password;

    const credentials = await User.findOne({ username, password })

    res.status(200).json(credentials)
}

module.exports = { Login }