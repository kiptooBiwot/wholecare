const router = require('express').Router()
const { participantControllers } = require('../controllers/Participant.controllers')
const upload = require('../helpers/multer.helper')

router.get('/', participantControllers.getAll)

router.post('/',  upload.single('profileImage'), participantControllers.registerParticipant)

router.patch('/:ndiaNumber', participantControllers.update)

module.exports = router