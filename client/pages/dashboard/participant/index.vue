<template>
  <div>
    <div class="m-auto">
      <component
        :is="steps[currentStep].component"
      />
      <div class="py-6">
        <hr class="border-gray-100">
        {{ repDetails[0].firstName }}
      </div>
      <div class="w-full block space-y-2 md:flex md:justify-evenly">
        <button v-if="currentStep != 0" class="px-4 py-3 w-36 md:w-64 bg-yellow-300 text-green-100 text-sm font-semibold rounded shadow-md hover:bg-yellow-400" @click.prevent="previous">
          Back
        </button>
        <button v-if="currentStep < steps.length - 1" class="px-4 py-3 w-36 md:w-64 bg-green-600 text-green-100 text-sm font-semibold rounded shadow-md hover:bg-green-700" @click.prevent="next">
          Next
        </button>
        <button v-else class="px-4 py-3 w-36 md:w-64 bg-green-600 text-green-100 text-sm font-semibold rounded shadow-md hover:bg-green-700" @click.prevent="saveParticipantData">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapFields, mapMultiRowFields } from 'vuex-map-fields'
import ParticipantDetails from '../../../components/steps/ParticipantDetails.vue'
import RepresentativeDetails from '../../../components/steps/RepresentativeDetails.vue'
import HealthSupportNeeds from '../../../components/steps/HealthSupportNeeds.vue'
import DisabilitySupportNeeds from '../../../components/steps/DisabilitySupportNeeds.vue'
import BehaviorSupportNeeds from '../../../components/steps/BehaviorSupportNeeds.vue'
import CommunitySupportNeeds from '../../../components/steps/CommunitySupportNeeds.vue'
import PrivacyStatement from '../../../components/steps/PrivacyStatement.vue'
import ConfirmDetails from '../../../components/steps/ConfirmDetails.vue'

export default {
  layout: 'dashboard',
  data: () => ({
    currentStep: 0,
    steps: [
      { component: ParticipantDetails, label: 'personalDetails' },
      { component: RepresentativeDetails, label: 'repDetails' },
      { component: HealthSupportNeeds, label: 'healthSupportNeeds' },
      { component: DisabilitySupportNeeds, label: 'disabilitySupportNeeds' },
      { component: BehaviorSupportNeeds, label: 'behaviorSupportNeeds' },
      { component: CommunitySupportNeeds, label: 'communitySupportNeeds' },
      { component: PrivacyStatement, label: 'privacyStatement' },
      { component: ConfirmDetails, label: 'confirmDetails' }
    ]
  }),
  computed: {
    ...mapMultiRowFields('participants', ['repDetails']),
    ...mapFields('participants', [
      'ndiaNumber',
      'firstName',
      'middleName',
      'surname',
      'gender',
      'dob',
      'homePhone',
      'mobilePhone',
      'workPhone',
      'profileImage',
      'emailAddress',
      'advocateNeeded',
      'auditingConsent',
      'culturalPreference',
      'countryOfBirth',
      'preferredLanguage',
      'culturalActivity',
      'interpreterRequired',
      'indigenousStatus',
      'currentAddress',
      'haveNdiaPlan',
      'ndiaApprovalDate',
      'ndiaReasonForNotHaving',
      'decisionMaker',
      'decisionMakerName',
      'decisionMakerPhone',
      'decisionMakerEmail',
      'privacyPreferences',
      'financialMgt',
      'imageUrl',
      // Health Support Needs
      'needsMobilityAssistance',
      'mobilityIndependent',
      'mobilityDescription',
      'hearingIssues',
      'hearingDescription',
      'visionIssues',
      'visionDescription',
      'needsCommunicationAssistance',
      'communicationPreference',
      'otherCommunication',
      'hadCommunicationAssessment',
      'memoryCognition',
      'memoryDescription',
      // Disability Support Needs
      'aidEquipmentUsed',
      'needsAssistance',
      'staffRequireTraining',
      'showeringAssistance',
      'showeringDetails',
      'groomingAssistance',
      'groomingDetails',
      'dressingAssistance',
      'dressingDetails',
      'toiletingAssistance',
      'toiletingDetails',
      'eatingAssistance',
      'eatingDetails',
      'transferAssistance',
      'transferDetails',
      // Behvior support needs
      'upsettingBehavior',
      'concerningBehavior',
      'disruptiveBehavior',
      'hasBehaviorSupportPlan',
      'behaviorRiskAssessment',
      // Community Support Needs
      'assistanceGettingAround',
      'transportAssistance',
      'assistanceToActivities',
      'transportType',
      'communityActivities',
      // Privacy Statement
      'participantName',
      'participantSignature',
      'participantSignDate',
      'staffName',
      'staffSignature',
      'staffSignDate',
      'verbalConsentName',
      'verbalConsentSignature',
      'verbalConsentSignDate'
    ])
  },
  methods: {
    next () {
      this.currentStep += 1
    },
    previous () {
      this.currentStep -= 1
    },
    saveFormData () {
      console.log(this.formValues)
    },
    ...mapActions(
      {
        registerParticipant: 'participants/registerParticipant',
        updateParticipantInfo: 'participants/updateParticipantInfo'
      }
    ),
    async saveParticipantData () {
      try {
        // debugger // eslint-disable-line no-debugger
        // const payload = this.repDetails
        // const payload = JSON.stringify(this.repDetails)
        // const payload = new FormData()
        // payload.append('repDetails', JSON.stringify(this.repDetails))

        // const payload = { this.repDetails }
        // payload.append('repDetails', JSON.stringify('repDetails'))
        // this.repDetails.forEach((repDetail, index) => {
        //   payload.append(`repDetails[${index}].firstName`, repDetail.firstName)
        //   payload.append(`repDetails[${index}].middleName`, repDetail.middleName)
        //   payload.append(`repDetails[${index}].surname`, repDetail.surname)
        //   payload.append(`repDetails[${index}].relationship`, repDetail.relationship)
        //   payload.append(`repDetails[${index}].mobileNo`, repDetail.mobileNo)
        //   payload.append(`repDetails[${index}].homeNo`, repDetail.homeNo)
        //   payload.append(`repDetails[${index}].workNo`, repDetail.workNo)
        //   payload.append(`repDetails[${index}].organization`, repDetail.organization)
        //   payload.append(`repDetails[${index}].position`, repDetail.position)
        //   payload.append(`repDetails[${index}].emailAddress`, repDetail.emailAddress)
        //   payload.append(`repDetails[${index}].currentAddress`, repDetail.currentAddress)
        // })

        // const payload = this.repDetails.forEach((repDetail, index) => [{
        //   `repDetails[${index}]`.firstName: repDetail.firstName,
        //   `repDetails[${index}]`.middleName: repDetail.middleName,
        //   `repDetails[${index}]`.surname: repDetail.surname,
        //   `repDetails[${index}]`.relationship: repDetail.relationship,
        //   `repDetails[${index}]`.mobileNo: repDetail.mobileNo,
        //   `repDetails[${index}]`.homeNo: repDetail.homeNo,
        //   `repDetails[${index}]`.workNo: repDetail.workNo,
        //   `repDetails[${index}]`.organization: repDetail.organization,
        //   `repDetails[${index}]`.position: repDetail.position,
        //   `repDetails[${index}]`.emailAddress: repDetail.emailAddress,
        //   `repDetails[${index}]`.currentAddress: repDetail.currentAddress
        // }])

        // const payload = {
        //   repDetails: [{
        //     firstName: this.repDetails.firstName,
        //     middleName: this.repDetails.middleName,
        //     surname: this.repDetails.surname,
        //     relationship: this.repDetails.relationship,
        //     mobileNo: this.repDetails.mobileNo,
        //     homeNo: this.repDetails.homeNo,
        //     workNo: this.repDetails.workNo,
        //     organization: this.repDetails.organization,
        //     position: this.repDetails.position,
        //     emailAddress: this.repDetails.emailAddress,
        //     currentAddress: this.repDetails.currentAddress
        //   }]
        // }
        const data = new FormData()

        data.append('ndiaNumber', this.ndiaNumber)
        data.append('firstName', this.firstName)
        data.append('middleName', this.middleName)
        data.append('surname', this.surname)
        data.append('gender', this.gender)
        data.append('dob', this.dob)
        data.append('homePhone', this.homePhone)
        data.append('mobilePhone', this.mobilePhone)
        data.append('workPhone', this.workPhone)
        data.append('profileImage', this.profileImage)
        data.append('emailAddress', this.emailAddress)
        data.append('advocateNeeded', this.advocateNeeded)
        data.append('auditingConsent', this.auditingConsent)
        data.append('culturalPreference', this.culturalPreference)
        data.append('countryOfBirth', this.countryOfBirth)
        data.append('preferredLanguage', this.preferredLanguage)
        data.append('culturalActivity', this.culturalActivity)
        data.append('interpreterRequired', this.interpreterRequired)
        data.append('indigenousStatus', this.indigenousStatus)
        data.append('currentAddress', this.currentAddress)
        data.append('haveNdiaPlan', this.haveNdiaPlan)
        data.append('ndiaApprovalDate', this.ndiaApprovalDate)
        data.append('ndiaReasonForNotHaving', this.ndiaReasonForNotHaving)
        data.append('decisionMaker', this.decisionMaker)
        data.append('decisionMakerName', this.decisionMakerName)
        data.append('decisionMakerPhone', this.decisionMakerPhone)
        data.append('decisionMakerEmail', this.decisionMakerEmail)
        data.append('privacyPreferences', this.privacyPreferences)
        data.append('financialMgt', this.financialMgt)

        // data.append('repDetails[]', JSON.stringify(this.repDetails))

        // for (let i = 0, valuePair; valuePair <= this.repDetails[i]; i++) {
        //   for (const j in valuePair) {
        //     data.append(j, valuePair[j])
        //   }
        // }

        // this.repDetails.forEach((repDetail) => {
        //   data.append('repDetails[]', repDetail)
        // })

        // for (let i = 0, valuePair; valuePair === this.repDetails.length; i++) {
        //   for (const repDetails in valuePair) {
        //     console.log(repDetails)
        //     data.append('repDetails', valuePair[repDetails])
        //   }
        // }
        // data.append('repDetails[]', JSON.stringify(this.repDetails))

        // This almost worked!!!!
        // this.repDetails.forEach((repDetail, index) => {
        //   data.append(`repDetails[${index}].firstName`, repDetail.firstName)
        //   data.append(`repDetails[${index}].middleName`, repDetail.middleName)
        //   data.append(`repDetails[${index}].surname`, repDetail.surname)
        //   data.append(`repDetails[${index}].relationship`, repDetail.relationship)
        //   data.append(`repDetails[${index}].mobileNo`, repDetail.mobileNo)
        //   data.append(`repDetails[${index}].homeNo`, repDetail.homeNo)
        //   data.append(`repDetails[${index}].workNo`, repDetail.workNo)
        //   data.append(`repDetails[${index}].organization`, repDetail.organization)
        //   data.append(`repDetails[${index}].position`, repDetail.position)
        //   data.append(`repDetails[${index}].emailAddress`, repDetail.emailAddress)
        //   data.append(`repDetails[${index}].currentAddress`, repDetail.currentAddress)
        // })

        // forEach((person, index) => {
        //   data.append(`people[${index}].id`, person.id);
        //   data.append(`people[${index}].firstname`, person.firstname);
        //   data.append(`people[${index}].lastname`, person.lastname);
        // this.repDetails.forEach((item) => {
        //   data.append('repDetails[]', item)
        // })

        // for (const item in this.repDetails[]) {
        //   data.append('repDetails', item.firstName)
        //   data.append('repMiddleName', item.middleName)
        //   data.append('repSurname', item.surname)
        //   data.append('repRelationship', item.relationship)
        //   data.append('repMobileNo', item.mobileNo)
        //   data.append('repHomeNo', item.homeNo)
        //   data.append('repWorkNo', item.workNo)
        //   data.append('repOrganization', item.organization)
        //   data.append('repPosition', item.position)
        //   data.append('repEmailAddress', item.emailAddress)
        //   data.append('repCurrentAddress', item.currentAddress)
        // }

        // for (const repDetail in this.repDetails) {
        //   data.append('repDetails', repDetail.firstName)
        //   data.append('repMiddleName', repDetail.middleName)
        //   data.append('repSurname', repDetail.surname)
        //   data.append('repRelationship', repDetail.relationship)
        //   data.append('repMobileNo', repDetail.mobileNo)
        //   data.append('repHomeNo', repDetail.homeNo)
        //   data.append('repWorkNo', repDetail.workNo)
        //   data.append('repOrganization', repDetail.organization)
        //   data.append('repPosition', repDetail.position)
        //   data.append('repEmailAddress', repDetail.emailAddress)
        //   data.append('repCurrentAddress', repDetail.currentAddress)
        // }
        const payload = { repDetails: this.repDetails }

        console.log(`FORM DATA to API: ${data}`)
        // console.log(`ARRAY PAYLOAD ${payload}`)
        // console.dir(this.repDetails, { depth: null })

        await this.registerParticipant(data)
        // console.log(response)
        // if (response.status === 201) {
        await this.updateParticipantInfo(payload)
        // }
      } catch (err) {
        console.log(err)
        return err
      }
    },
    async updateParticipantData () {
      try {
        const payload = [{
          firstName: this.repDetails.firstName,
          repMiddleName: this.repDetails.middleName,
          repSurname: this.repDetails.surname,
          repRelationship: this.repDetails.relationship,
          repMobileNo: this.repDetails.mobileNo,
          repHomeNo: this.repDetails.homeNo,
          repWorkNo: this.repDetails.workNo,
          repOrganization: this.repDetails.organization,
          repPosition: this.repDetails.position,
          repEmailAddress: this.repDetails.emailAddress,
          repCurrentAddress: this.repDetails.currentAddress
        }]

        await this.updateParticipantInfo(payload)
      } catch (error) {
        console.log(error)
        return error
      }
    }
  }
}
</script>

<style>

</style>
