const Folder = require('../models/folderModel')

//all
const getFolders = async (req, res) => {
    const folders = await Folder.find({})
    res.status(200).json(folders)
}

//channels
const getChannels = async (req, res) => {

    const channels = await Folder.find({ channel: 'channels' })

    res.status(200)
        .json(channels)
}

//spirits
const getSpirits = async (req, res) => {

    const spirits = await Folder.find({ channel: 'spirits' })

    res.status(200)
        .json(spirits)
}

//golf
const getGolf = async (req, res) => {

    const golf = await Folder.find({ channel: 'golf' })

    res.status(200)
        .json(golf)
}

//pets
const getPets = async (req, res) => {

    const pets = await Folder.find({ channel: 'pets' })

    res.status(200)
        .json(pets)
}


module.exports = {
    getFolders,
    getChannels,
    getSpirits,
    getGolf,
    getPets,
}