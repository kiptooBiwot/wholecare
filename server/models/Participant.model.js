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
  ],
  needsMobilityAssistance: {
    type: String,
    trim: true
  },
  mobilityIndependent: {
    type: String,
    trim: true
  },
  mobilityDescription: {
    type: String,
    trim: true
  },
  hearingIssues: {
    type: String,
    trim: true
  },
  hearingDescription: {
    type: String,
    trim: true
  },
  visionIssues: {
    type: String,
    trim: true
  },
  visionDescription: {
    type: String,
    trim: true
  },
  needsCommunicationAssistance: {
    type: String,
    trim: true
  },
  communicationPreference: [{
    type: String,
    trim: true
  }],
  otherCommunication: {
    type: String,
    trim: true
  },
  hadCommunicationAssessment: {
    type: String,
    trim: true
  },
  memoryCognition: {
    type: String,
    trim: true
  },
  memoryDescription: {
    type: String,
    trim: true
  },
  aidEquipmentUsed: {
    type: String,
    trim: true
  },
  needsAssistance: {
    type: String,
    trim: true
  },
  staffRequireTraining: {
    type: String,
    trim: true
  },
  showeringAssistance: {
    type: String,
    trim: true
  },
  showeringDetails: {
    type: String,
    trim: true
  },
  groomingAssistance: {
    type: String,
    trim: true
  },
  groomingDetails: {
    type: String,
    trim: true
  },
  dressingAssistance: {
    type: String,
    trim: true
  },
  dressingDetails: {
    type: String,
    trim: true
  },
  toiletingAssistance: {
    type: String,
    trim: true
  },
  toiletingDetails: {
    type: String,
    trim: true
  },
  eatingAssistance: {
    type: String,
    trim: true
  },
  eatingDetails: {
    type: String,
    trim: true
  },
  transferAssistance: {
    type: String,
    trim: true
  },
  transferDetails: {
    type: String,
    trim: true
  },
  upsettingBehavior: {
    type: String,
    trim: true
  },
  concerningBehavior: {
    type: String,
    trim: true
  },
  disruptiveBehavior: {
    type: String,
    trim: true
  },
  hasBehaviorSupportPlan: {
    type: String,
    trim: true
  },
  behaviorRiskAssessment: {
    type: String,
    trim: true
  },
  assistanceGettingAround: {
    type: String,
    trim: true
  },
  transportAssistance: {
    type: String,
    trim: true
  },
  assistanceToActivities: {
    type: String,
    trim: true
  },
  transportType: {
    type: String,
    trim: true
  },
  communityActivities: {
    type: String,
    trim: true
  },
  participantName: {
    type: String,
    trim: true
  },
  participantSignature: {
    type: String,
    trim: true
  },
  participantSignDate: {
    type: Date,
    trim: true
  },
  staffName: {
    type: String,
    trim: true
  },
  staffSignature: {
    type: String,
    trim: true
  },
  staffSignDate: {
    type: Date,
    trim: true
  },
  verbalConsentName: {
    type: String,
    trim: true
  },
  verbalConsentSignature: {
    type: String,
    trim: true
  },
  verbalConsentSignDate: {
    type: Date,
    trim: true
  },

}, { timestamps: true })

module.exports = model('Participant', participantSchema)