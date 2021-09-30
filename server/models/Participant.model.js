const { Schema, model } = require('mongoose')

const participantSchema = new Schema({
  ndiaNumber: {
    type: Number,
    trim: true,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  surname: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  dob: {
    type: Date,
    trim: true,
  },
  homePhone: {
    type: String,
    trim: true,
  },
  mobilePhone: {
    type: String,
    trim: true,
  },
  workPhone: {
    type: String,
    trim: true,
  },
  profileImage: {
    type: String,
    trim: true,
  },
  emailAddress: {
    type: String,
    trim: true,
    lowercase: true,
  },
  advocateNeeded: {
    type: String,
    trim: true
  },
  auditingConsent: {
    type: String,
    trim: true,
  },
  culturalPreference: {
    type: String,
    trim: true,
  },
  countryOfBirth: {
    type: String,
    trim: true
  },
  preferredLanguage: {
    type: String,
    trim: true
  },
  culturalActivity: {
    type: String,
    trim: true
  },
  interpreterRequired: {
    type: String,
    trim: true
  },
  indigenousStatus: {
    type: String,
    trim: true
  },
  currentAddress: {
    type: String,
    trim: true
  },
  haveNdiaPlan: {
    type: String,
    trim: true
  },
  ndiaApprovalDate: {
    type: Date,
    trim: true
  },
  ndiaReasonForNotHaving: {
    type: String,
    trim: true
  },
  decisionMaker: {
    type: String,
    trim: true
  },
  decisionMakerName: {
    type: String,
    trim: true
  },
  decisionMakerPhone: {
    type: String,
    trim: true
  },
  decisionMakerEmail: {
    type: String,
    trim: true
  },
  privacyPreferences: {
    type: String,
    trim: true
  },
  financialMgt: {
    type: String,
    trim: true
  },
  repDetails: [
    {
      firstName: {
        type: String,
        trim: true
      },
      middleName: {
        type: String,
        trim: true
      },
      surname: {
        type: String,
        trim: true
      },
      relationship: {
        type: String,
        trim: true
      },
      mobileNo: {
        type: String,
        trim: true
      },
      homeNo: {
        type: String,
        trim: true
      },
      workNo: {
        type: String,
        trim: true
      },
      organization: {
        type: String,
        trim: true
      },
      position: {
        type: String,
        trim: true
      },
      emailAddress: {
        type: String,
        trim: true
      },
      currentAddress: {
        type: String,
        trim: true
      },
    }
  ]
}, { timestamps: true })

module.exports = model('Participant', participantSchema)