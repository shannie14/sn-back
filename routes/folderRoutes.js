const express = require('express')

const { getChannels, getSpirits, getGolf, getPets, getFolders } = require('../controllers/folderController')

const router = express.Router()

router.get('/', getFolders)
router.get('/channels', getChannels)
router.get('/spirits', getSpirits)
router.get('/golf', getGolf)
router.get('/pets', getPets)

module.exports = router