const express = require('express')
const { Login, getAllUsers } = require('../controllers/userController')

const router = express.Router()

// GET /users
router.get('/', getAllUsers)

// POST /users
router.post('/', Login)

module.exports = router