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
  // async registerParticipant ({ dispatch, state }, payload) {
  //   try {
  //     // TODO: Store the user id for the user registering the participant
  //     console.log(...payload)
  //     const response = await this.$axios.post('/participant', payload,
  //       {
  //         headers: {
  //           'Content-Type': 'multipart/form-data boundary=<calculated when request is sent>'
  //         }
  //       }
  //     )

  //     if (response === 201) {
  //       // next()
  //       dispatch('addNotification', {
  //         type: 'success',
  //         title: 'Success',
  //         message: `${response.data.message}`
  //       },
  //       { root: true }
  //       )
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     return error
  //   }
  // },
  // Save Participant Data
  async appendParticipantData ({ state, dispatch }) {
    try {
      const data = new FormData()

      data.append('ndiaNumber', state.ndiaNumber)
      data.append('firstName', state.firstName)
      data.append('middleName', state.middleName)
      data.append('surname', state.surname)
      data.append('gender', state.gender)
      data.append('dob', state.dob)
      data.append('homePhone', state.homePhone)
      data.append('mobilePhone', state.mobilePhone)
      data.append('workPhone', state.workPhone)
      data.append('profileImage', state.profileImage)
      data.append('emailAddress', state.emailAddress)
      data.append('advocateNeeded', state.advocateNeeded)
      data.append('auditingConsent', state.auditingConsent)
      data.append('culturalPreference', state.culturalPreference)
      data.append('countryOfBirth', state.countryOfBirth)
      data.append('preferredLanguage', state.preferredLanguage)
      data.append('culturalActivity', state.culturalActivity)
      data.append('interpreterRequired', state.interpreterRequired)
      data.append('indigenousStatus', state.indigenousStatus)
      data.append('currentAddress', state.currentAddress)
      data.append('haveNdiaPlan', state.haveNdiaPlan)
      data.append('ndiaApprovalDate', state.ndiaApprovalDate)
      data.append('ndiaReasonForNotHaving', state.ndiaReasonForNotHaving)
      data.append('decisionMaker', state.decisionMaker)
      data.append('decisionMakerName', state.decisionMakerName)
      data.append('decisionMakerPhone', state.decisionMakerPhone)
      data.append('decisionMakerEmail', state.decisionMakerEmail)
      data.append('privacyPreferences', state.privacyPreferences)
      data.append('financialMgt', state.financialMgt)

      // Representative Details
      data.append('repDetails', JSON.stringify(state.repDetails))

      // Health Support Needs
      data.append('needsMobilityAssistance', state.needsMobilityAssistance)
      data.append('mobilityIndependent', state.mobilityIndependent)
      data.append('mobilityDescription', state.mobilityDescription)
      data.append('hearingIssues', state.hearingIssues)
      data.append('hearingDescription', state.hearingDescription)
      data.append('visionIssues', state.visionIssues)
      data.append('visionDescription', state.visionDescription)
      data.append('needsCommunicationAssistance', state.needsCommunicationAssistance)
      data.append('communicationPreference', JSON.stringify(state.communicationPreference))
      data.append('otherCommunication', state.otherCommunication)
      data.append('hadCommunicationAssessment', state.hadCommunicationAssessment)
      data.append('memoryCognition', state.memoryCognition)
      data.append('memoryDescription', state.memoryDescription)

      // Disability Support Needs
      data.append('aidEquipmentUsed', state.aidEquipmentUsed)
      data.append('needsAssistance', state.needsAssistance)
      data.append('staffRequireTraining', state.staffRequireTraining)
      data.append('showeringAssistance', state.showeringAssistance)
      data.append('showeringDetails', state.showeringDetails)
      data.append('groomingAssistance', state.groomingAssistance)
      data.append('groomingDetails', state.groomingDetails)
      data.append('dressingAssistance', state.dressingAssistance)
      data.append('dressingDetails', state.dressingDetails)
      data.append('toiletingAssistance', state.toiletingAssistance)
      data.append('toiletingDetails', state.toiletingDetails)
      data.append('eatingAssistance', state.eatingAssistance)
      data.append('eatingDetails', state.eatingDetails)
      data.append('transferAssistance', state.transferAssistance)
      data.append('transferDetails', state.transferDetails)

      // Behvior support needs
      data.append('upsettingBehavior', state.upsettingBehavior)
      data.append('concerningBehavior', state.concerningBehavior)
      data.append('disruptiveBehavior', state.disruptiveBehavior)
      data.append('hasBehaviorSupportPlan', state.hasBehaviorSupportPlan)
      data.append('behaviorRiskAssessment', state.behaviorRiskAssessment)

      // Community Support Needs
      data.append('assistanceGettingAround', state.assistanceGettingAround)
      data.append('transportAssistance', state.transportAssistance)
      data.append('assistanceToActivities', state.assistanceToActivities)
      data.append('transportType', state.transportType)
      data.append('communityActivities', state.communityActivities)

      // Privacy Statement
      data.append('participantName', state.participantName)
      data.append('participantSignature', state.participantSignature)
      data.append('participantSignDate', state.participantSignDate)
      data.append('staffName', state.staffName)
      data.append('staffSignature', state.staffSignature)
      data.append('staffSignDate', state.staffSignDate)
      data.append('verbalConsentName', state.verbalConsentName)
      data.append('verbalConsentSignature', state.verbalConsentSignature)
      data.append('verbalConsentSignDate', state.verbalConsentSignDate)

      try {
        // TODO: Store the user id for the user registering the participant
        // console.log(...data)
        const response = await this.$axios.post('/participant', data,
          {
            headers: {
              'Content-Type': 'multipart/form-data boundary=<calculated when request is sent>'
            }
          }
        )

        if (response === 201) {
          // next()
          dispatch('addNotification', {
            type: 'success',
            title: 'Success',
            message: `${response.data.message}`
          },
          { root: true }
          )
        }
      } catch (error) {
        console.log(error)
        return error
      }
    } catch (err) {
      console.log(err)
      return err
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
    if (index >= 1) {
      state.repDetails.splice(index, 1)
    } else {
      state.repDetails = {
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
    }
  }
}
