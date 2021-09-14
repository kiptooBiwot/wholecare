<template>
  <div>
    <div class="m-auto">
      <component
        :is="steps[currentStep].component"
        :form-values="formValues[steps[currentStep].label]"
        @update:formValueChange="updateFormValues"
        @update:formRepChange="updateRep"
      />
      <div class="py-6">
        <hr class="border-gray-100">
      </div>
      <div class="w-full block space-y-2 md:flex md:justify-evenly">
        <button v-if="currentStep != 0" class="px-4 py-3 w-36 md:w-64 bg-yellow-300 text-green-100 text-sm font-semibold rounded shadow-md hover:bg-yellow-400" @click.prevent="previous">
          Back
        </button>
        <button v-if="currentStep < steps.length - 1" class="px-4 py-3 w-36 md:w-64 bg-green-600 text-green-100 text-sm font-semibold rounded shadow-md hover:bg-green-700" @click.prevent="next">
          Next
        </button>
        <button v-else class="px-4 py-3 w-36 md:w-64 bg-green-600 text-green-100 text-sm font-semibold rounded shadow-md hover:bg-green-700" @click.prevent="saveFormData">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ParticipantDetails from '../../components/participant/ParticipantDetails.vue'
import RepresentativeDetails from '../../components/participant/RepresentativeDetails.vue'
import HealthSupportNeeds from '../../components/participant/HealthSupportNeeds.vue'
import DisabilitySupportNeeds from '../../components/participant/DisabilitySupportNeeds.vue'
import BehaviorSupportNeeds from '../../components/participant/BehaviorSupportNeeds.vue'
import CommunitySupportNeeds from '../../components/participant/CommunitySupportNeeds.vue'
import PrivacyStatement from '../../components/participant/PrivacyStatement.vue'
import ConfirmDetails from '../../components/participant/ConfirmDetails.vue'

export default {
  layout: 'dashboard',
  data: () => ({
    currentStep: 0,
    formValues: {
      personalDetails: {
        ndiaNumber: '',
        firstName: '',
        middleName: '',
        surname: '',
        gender: '',
        dob: '',
        homePhone: '',
        mobilePhone: '',
        workPhone: '',
        profileImage: undefined,
        emailAddress: '',
        advocateNeeded: '',
        auditingConsent: '',
        culturalPreference: '',
        countryOfBirth: '',
        preferredLanguage: '',
        cuturalActivity: '',
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
        financialMgt: ''
      },
      repDetails: {
        repFirstName: 'Barak',
        repMiddleName: 'Muluka',
        repSurname: 'Shitienyi',
        repRelationship: '',
        repMobileNo: '',
        repHomeNo: '',
        repWorkNo: '',
        repOrganization: '',
        repPosition: '',
        repEmail: '',
        repCurrentAddress: ''
      },
      healthSupportNeeds: {
        needsMobilityAssistance: '',
        isIndependent: '',
        mobilityIssueDescription: '',
        hasHearingIssues: '',
        hearingIssueDescription: ''
      },
      disabilitySupportNeeds: {},
      behaviorSupportNeeds: {},
      communitySupportNeeds: {},
      privacyStatement: {}
    },
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
  methods: {
    next () {
      this.currentStep += 1
    },
    previous () {
      this.currentStep -= 1
    },
    updateFormValues (payload) {
      console.log('WE ARE REACHING THE UPDATEFORM METHOD')
      console.log(payload)
      this.formValues = {
        ...this.formValues,
        [payload.label]: payload.data
      }
    },
    updateRep (payload) {
      console.log('WE ARE REACHING THE UPDATEREP METHOD')
      console.log(payload)
      this.formValues = [
        {
          ...this.formValues,
          [payload.label]: payload.data
        }
      ]
    },
    saveFormData () {
      console.log(this.formValues)
    }
  }
}
</script>

<style>

</style>
