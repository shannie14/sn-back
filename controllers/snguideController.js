const Show = require('../models/snguideModel')


//get all sales
const getShows = async (req, res) => {
    const shows = await Show.find({}).sort()

    res.status(200).json(shows)
}


module.exports = getShows 