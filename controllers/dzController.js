const Drop = require('../models/dzModel')

//get all 
const getDropzones = async (req, res) => {
    const drop = await Drop.find({}).sort()

    res.status(200).json(drop)
}

module.exports = { getDropzones }
