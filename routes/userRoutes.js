const express = require('express')
const { Login } = require('../controllers/userController')

const router = express.Router()

router.get('/', Login)
router.post('/', Login)


module.exports = router