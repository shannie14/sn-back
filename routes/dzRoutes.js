const express = require('express')

const { getDropzones } = require('../controllers/dzController')

const router = express.Router()

router.get('/dropzones', getDropzones)


module.exports = router