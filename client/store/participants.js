import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  // Participant details
  ndiaNumber: '',
  firstName: '',
  middleName: '',
  surname: '',
  gender: '',
  dob: '',
  homePhone: '',
  mobilePhone: '',
  workPhone: '',
  profileImage: '',
  emailAddress: '',
  advocateNeeded: '',
  auditingConsent: '',
  culturalPreference: '',
  countryOfBirth: '',
  preferredLanguage: '',
  culturalActivity: '',
  interpreterRequired: '',
  indigenousStatus: '',
  currentAddress: '',
  haveNdiaPlan: '',
  ndiaApprovalDate: '',
  ndiaReasonForNotHaving: '',
  decisionMaker: '',
  decisionMakerName: '',
  decisionMakerPhone: '',
  decisionMakerEmail: '',
  privacyPreferences: '',
  financialMgt: '',
  imageUrl: '',
  // Representative Details
  repDetails: [
    {
      firstName: '',
      middleName: '',
      surname: '',
      relationship: '',
      mobileNo: '',
      homeNo: '',
      workNo: '',
      organization: '',
      position: '',
      emailAddress: '',
      currentAddress: ''
    }
  ],
  // Health Support Needs
  needsMobilityAssistance: '',
  mobilityIndependent: '',
  mobilityDescription: '',
  hearingIssues: '',
  hearingDescription: '',
  visionIssues: '',
  visionDescription: '',
  needsCommunicationAssistance: '',
  communicationPreference: [],
  otherCommunication: '',
  hadCommunicationAssessment: '',
  memoryCognition: '',
  memoryDescription: '',
  // Disability Support Needs
  aidEquipmentUsed: '',
  needsAssistance: '',
  staffRequireTraining: '',
  showeringAssistance: '',
  showeringDetails: '',
  groomingAssistance: '',
  groomingDetails: '',
  dressingAssistance: '',
  dressingDetails: '',
  toiletingAssistance: '',
  toiletingDetails: '',
  eatingAssistance: '',
  eatingDetails: '',
  transferAssistance: '',
  transferDetails: '',
  // Behvior support needs
  upsettingBehavior: '',
  concerningBehavior: '',
  disruptiveBehavior: '',
  hasBehaviorSupportPlan: '',
  behaviorRiskAssessment: '',
  // Community Support Needs
  assistanceGettingAround: '',
  transportAssistance: '',
  assistanceToActivities: '',
  transportType: '',
  communityActivities: '',
  // Privacy Statement
  participantName: '',
  participantSignature: '',
  participantSignDate: '',
  staffName: '',
  staffSignature: '',
  staffSignDate: '',
  verbalConsentName: '',
  verbalConsentSignature: '',
  verbalConsentSignDate: ''
})

export const getters = {
  getField
}

export const actions = {
  async registerParticipant ({ dispatch, state }, payload) {
    try {
      // TODO: Store the user id for the user registering the participant
      console.log(...payload)
      const response = await this.$axios.post('/participant', payload,
        {
          headers: {
            'Content-Type': 'multipart/form-data boundary=<calculated when request is sent>'
          }
        }
      )

      if (response === 201) {
        // next()
        // dispatch('addNotification', {
        //   type: 'success',
        //   title: 'Success',
        //   message: `${response.data.message}`
        // },
        // { root: true }
        // )
      }
    } catch (error) {
      console.log(error)
      return error
    }
  },
  // Update Basic information
  async updateParticipantInfo ({ dispatch, state }, payload) {
    try {
      const ndiaNumber = state.ndiaNumber
      console.log(payload)
      console.log(ndiaNumber)
      const response = await this.$axios.patch(`/participant/${ndiaNumber}`, payload
        // {
        //   headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json'
        //   }
        // }
      )
      if (response.status === 201) {
        dispatch('addNotification', {
          type: 'success',
          title: 'Success',
          message: `${response.data.message} Sign In to access your account`
        },
        { root: true }
        )
        console.log('USER Updated!')
      }
    } catch (err) {
      console.error(err)
      return err
    }
  }
}

export const mutations = {
  updateField,
  addRepresentative (state) {
    state.repDetails.push({
      firstName: '',
      middleName: '',
      surname: '',
      relationship: '',
      mobileNo: '',
      homeNo: '',
      workNo: '',
      organization: '',
      position: '',
      emailAddress: '',
      currentAddress: ''
    })
  },
  deleteCard (state, index) {
    state.repDetails.splice(index, 1)
  }
}