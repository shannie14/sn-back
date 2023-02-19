const User = require('../models/usersModel')

const getAllUsers = async (req, res) => {

    const users = await User.find({})
    res.status(200)
        .json(users)
}
const Login = async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ username, password })

    //toarray

    res.status(200).json(user)
}

module.exports = { Login, getAllUsers }
