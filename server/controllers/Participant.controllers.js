const Participant = require('../models/Participant.model')
const createError = require('http-errors')
const cloudinary = require('../helpers/cloudinary.helpers')

module.exports.participantControllers = {
  getAll: async (req, res, next) => {
    res.status(200).json({
      message: 'All participants will be listed here'
    })
  },
  registerParticipant: async (req, res, next) => {
    try {
      console.log('REQ>BODY:', req.body)
      // console.log('PARSED Body', req.body)
      // console.log('REQ.FILE:', req.file)
      // console.log('REP DETAILS:', req.body.repDetails)


      // const representativeDetails = [
      //   {
      //     firstName: req.body.repDetails.firstName,
      //     middleName: req.body.repDetails.middleName,
      //     surname: req.body.repDetails.surname,
      //     relationship: req.body.repDetails.relationship,
      //     mobileNo: req.body.repDetails.mobileNo,
      //     homeNo: req.body.repDetails.homeNo,
      //     workNo: req.body.repDetails.workNo,
      //     organization: req.body.repDetails.organization,
      //     position: req.body.repDetails.position,
      //     emailAddress: req.body.repDetails.emailAddress,
      //     currentAddress: req.body.repDetails.currentAddress
      //   }
      // ]
      // console.log(representativeDetails)

      let savedURI = null

      if (req.file) {
        const file = req.file
        const { path } = file 

        const imageURI = await cloudinary.uploader.upload(path, {
          folder: "Whole Care Solutions"
        })

        savedURI = imageURI.secure_url
        // console.log(`Image URIs: ${savedURI}`)
      }

       const participantExists = await Participant.findOne({ ndiaNumber: req.body.ndiaNumber })

      if (participantExists) throw createError(400, 'The participant is already registered')

      const newParticipant = new Participant({
        ...req.body,
        profileImage: savedURI
      })

      const savedParticipant = await newParticipant.save()

      if (!savedParticipant) throw createError('Participant save failed, try again!')

      res.status(201).json({
        message: 'Participant\'s data saved.'
      })
    } catch (error) {
      console.log(error)
      next(error)
    }
  },
  update: async (req, res, next) => {
    try {
      const user_details = req.body
      const user_id = req.params.ndiaNumber

      console.log('REQ.BODY.ARRAY:', user_details)
      console.dir(req.body, { depth: null })
      console.log(user_id)
      // console.log('REQ.FILE:', req.file)
      // let savedURI = null

      // if (req.file) {
      //   const file = req.file
      //   const { path } = file

      //   const imageURI = await cloudinary.uploader.upload(path, {
      //     folder: "Whole Care Solutions"
      //   })

      //   savedURI = imageURI.secure_url
      //   // console.log(`Image URIs: ${savedURI}`)
      // }
      // console.log(user_details)s
      // console.log(`Body from SERVER: ${user_id}`)

      const userExists = await Participant.findOne({ ndiaNumber: user_id })

      if (!userExists) throw createError.NotFound('A participant must have an NDIA Number.')

      const response = await Participant.findOneAndUpdate(
        { ndiaNumber: user_id },
        {
          ...req.body
        },
        { new: true }
      )

      if (!response) throw createError(500, 'Participant information not saved')

      // console.log(response)

      res.status(201).json({
        message: 'Participant information is successfully saved',
        updatedParticipant: response
      })
    } catch (error) {
      console.log(error)
      next(error)
    }
  },
}