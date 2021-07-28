const router = require('express').Router()
const { userControllers } = require('../controllers/User.controllers')

router.get('/', userControllers.getUsers)

router.post('/', userControllers.register)

router.post('/signin', userControllers.signin)

router.post('/reset_pw/:email', userControllers.sendPasswordResetEmail)

router.post('/new_pw/:id/:token', userControllers.receivePassword)

module.exports = router