<template>
  <div class="bg-white w-full h-auto p-6 shadow-xl rounded-lg">
    <div class="w-full text-lg text-gray-500 font-bold justify-end md:text-xl md:font-bold">
      Privacy Statement
    </div>
    <div class="block space-y-4">
      <div class="text-xs text-gray-500">
        <p>
          Your personal information is protected by law (including the Privacy Act 1988) and is collected by Whole Care Solutions in order to assess and administer its disability support services. Your information may be used by Whole Care Solutions or given to other parties where you have agreed to that, or where it is required or authorised by law. More information about how we manage your privacy is contained in our Privacy Statement, which can be provided by staff member.
        </p>
        <br>
        <p class="italic">
          I have been informed and consent to the use of my information in the assessment and administration of my services. I understand that this information may be provided to external agencies where I have consented to this, or where it is required by law.
        </p>
        <br>
        <p class="italic">
          I declare that all of the information I have provided in this form is, to my knowledge, true and correct.
        </p>
      </div>
      <div class="block space-y-4">
        <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
          <legend class="text-xs px-1 font-medium text-gray-500">
            Participant or Authorized Representative
          </legend>
          <div>
            <div class="block md:flex md:gap-x-2">
              <div class="block">
                <label for="participant-name" class="text-xs font-medium text-gray-500">Full Name</label>
                <input
                  id="participant-name"
                  v-model="participantName"
                  type="text"
                  name="participant-name"
                  class=""
                >
              </div>
              <div class="block">
                <label for="participant-signature" class="text-xs font-medium text-gray-500">Electronic Signature</label>
                <input
                  id="participant-signature"
                  v-model="participantSignature"
                  type="text"
                  name="participant-signature"
                  class=""
                >
              </div>
              <div class="block">
                <label for="dob" class="text-xs font-medium text-gray-500">Date</label>
                <VueTailWindPicker
                  :init="false"
                  :start-date="'2020-01-01'"
                  :end-date="currentDate"
                  @change="(v) => participantSignDate = v"
                >
                  <input v-model.trim="participantSignDate" type="text" class="placeholder-text-xs placeholder-gray-300" placeholder="Date signed">
                </VueTailWindPicker>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
          <legend class="text-xs px-1 font-medium text-gray-500">
            Staff Member
          </legend>
          <div class="">
            <div class="block md:flex md:gap-x-2">
              <div class="block">
                <label for="staff-name" class="text-xs font-medium text-gray-500">Full Name</label>
                <input
                  id="staff-name"
                  v-model="staffName"
                  type="text"
                  name="staff-name"
                  class=""
                >
              </div>
              <div class="block">
                <label for="staff-signature" class="text-xs font-medium text-gray-500">Electronic Signature</label>
                <input
                  id="staff-signature"
                  v-model="staffSignature"
                  type="text"
                  name="staff-signature"
                  class=""
                >
              </div>
              <div class="block">
                <label for="dob" class="text-xs font-medium text-gray-500">Date</label>
                <VueTailWindPicker
                  :init="false"
                  :start-date="'2020-01-01'"
                  :end-date="currentDate"
                  @change="(v) => staffSignDate = v"
                >
                  <input v-model.trim="staffSignDate" type="text" class="placeholder-text-xs placeholder-gray-300" placeholder="Date signed">
                </VueTailWindPicker>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
    <div class="block mt-4 space-y-4">
      <div class="w-full text-lg text-gray-500 font-bold justify-end md:text-xl md:font-bold">
        Verbal Consent
      </div>
      <div class="text-xs text-gray-500">
        <p>Verbal consent should only be used where it is not practicable to obtain written consent.</p>
        <br>
        <p class="italic">
          I have discussed this form and its content with the participant or authorised representative, and I am satisfied that they understand the proposed uses and disclosures of their information and have provided their informed consent to these.
        </p>
      </div>
      <div class="block space-y-4">
        <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
          <legend class="text-xs px-1 font-medium text-gray-500">
            Name of Staff
          </legend>
          <div>
            <div class="block md:flex md:gap-x-2">
              <div class="block">
                <label for="name" class="text-xs font-medium text-gray-500">Full Name</label>
                <input
                  id="name"
                  v-model="verbalConsentName"
                  type="text"
                  name="name"
                  class=""
                >
              </div>
              <div class="block">
                <label for="signature" class="text-xs font-medium text-gray-500">Signature</label>
                <input
                  id="signature"
                  v-model="verbalConsentSignature"
                  type="text"
                  name="signature"
                  class=""
                >
              </div>
              <div class="block">
                <label for="dob" class="text-xs font-medium text-gray-500">Date</label>
                <VueTailWindPicker
                  :init="false"
                  :start-date="'2020-01-01'"
                  :end-date="currentDate"
                  @change="(v) => verbalConsentSignDate = v"
                >
                  <input v-model.trim="verbalConsentSignDate" type="text" class="placeholder-text-xs placeholder-gray-300" placeholder="Date signed">
                </VueTailWindPicker>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  components: {
    VueTailWindPicker: () => import('vue-tailwind-picker')
  },
  data () {
    return {
      basicInfo: {
        dob: ''
      },
      file: null,
      currentDate: new Date().toISOString().slice(0, 10)
    }
  },
  computed: {
    ...mapFields('participants', [
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
    change () {

    }
  }
}
</script>

<style>

</style>
