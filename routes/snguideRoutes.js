const express = require('express')
const getShows = require('../controllers/snguideController')

const router = express.Router()

router.get('/', getShows)


module.exports = router