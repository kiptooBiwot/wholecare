<template>
  <div>
    <div class="m-auto">
      <component :is="steps[currentStep].component" />
      <div class="py-6">
        <hr class="border-gray-100">
        <!-- {{ repDetails[0].firstName }} -->
        <!-- {{ repDetails }} -->
      </div>
      <div class="w-full block space-y-2 md:flex md:justify-evenly">
        <button
          v-if="currentStep != 0"
          class="px-4 py-3 w-36 md:w-64 bg-yellow-300 text-green-100 text-sm font-semibold rounded shadow-md hover:bg-yellow-400"
          @click.prevent="previous"
        >
          Back
        </button>
        <button
          v-if="currentStep < steps.length - 1"
          class="px-4 py-3 w-36 md:w-64 bg-green-600 text-green-100 text-sm font-semibold rounded shadow-md hover:bg-green-700"
          @click.prevent="next"
        >
          Next
        </button>
        <button
          v-else
          class="px-4 py-3 w-36 md:w-64 bg-green-600 text-green-100 text-sm font-semibold rounded shadow-md hover:bg-green-700"
          @click.prevent="saveParticipant"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import { mapFields, mapMultiRowFields } from 'vuex-map-fields'
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
  computed: {},
  methods: {
    ...mapActions({
      updateParticipantInfo: 'participants/updateParticipantInfo',
      appendParticipantData: 'participants/appendParticipantData'
    }),
    next () {
      this.currentStep += 1
    },
    previous () {
      this.currentStep -= 1
    },
    saveFormData () {
      console.log(this.formValues)
    },
    async saveParticipant () {
      await this.appendParticipantData()
    }
  }
}
</script>

<style></style>
