const router = require('express').Router()
const { userControllers } = require('../controllers/User.controllers')

router.get('/', userControllers.getUsers)

module.exports = router