const router = require('express').Router()
const { userControllers } = require('../controllers/User.controllers')
const upload = require('../helpers/multer.helper')

router.get('/', userControllers.getUsers)

router.post('/', userControllers.register)

router.post('/signin', userControllers.signin)

router.post("/refresh-token", userControllers.refreshToken)

router.delete('/logout', userControllers.logout)

router.patch('/:id', upload.single('image'), userControllers.update)

router.post('/reset_pw/:email', userControllers.sendPasswordResetEmail)

router.post('/new_pw/:id/:token', userControllers.receivePassword)

module.exports = router