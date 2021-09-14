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
