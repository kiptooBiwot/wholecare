<template>
  <div class="bg-white w-full h-auto p-6 shadow-xl rounded-lg">
    <div
      class="w-full text-lg text-gray-500 font-bold justify-end md:text-xl md:font-bold"
    >
      Participant's Details
    </div>
    <div class="block md:flex md:justify-between md:gap-6">
      <div class="block md:w-1/2 space-y-2">
        <div class="block">
          <label
            for="ndia-number"
            class="text-xs font-medium text-gray-500"
          >NDIA Number*</label>
          <input
            id="ndia-number"
            v-model.lazy="ndiaNumber"
            type="number"
            name="ndiaNumber"
            class=""
          >
        </div>
        <div class="block">
          <label
            for="firstName"
            class="text-xs font-medium text-gray-500"
          >First Name*</label>
          <input
            id="first-name"
            v-model.lazy="firstName"
            type="text"
            class=""
            name="firstName"
          >
        </div>
        <div class="block">
          <label
            for="middleName"
            class="text-xs font-medium text-gray-500"
          >Middle Name</label>
          <input
            id="middle-name"
            v-model.lazy="middleName"
            type="text"
            name="middleName"
          >
        </div>
        <div class="block">
          <label
            for="surname"
            class="text-xs font-medium text-gray-500"
          >Surname*</label>
          <input
            id="surname"
            v-model.lazy="surname"
            type="text"
            name="surname"
          >
        </div>
        <div class="block">
          <label
            for="dob"
            class="text-xs font-medium text-gray-500"
          >Date of Birth</label>
          <client-only>
            <VueTailWindPicker
              :init="false"
              :start-date="'1930-01-01'"
              :end-date="currentDate"
              @change="setDob"
            >
              <input
                v-model.lazy="dob"
                type="text"
                name="dob"
                class="placeholder-text-xs placeholder-gray-300"
                placeholder="Participant's birthday"
              >
            </VueTailWindPicker>
          </client-only>
        </div>
        <div class="block">
          <label
            for="gender"
            class="text-xs font-medium text-gray-500"
          >Gender</label>
          <select id="gender" v-model.lazy="gender" name="gender">
            <option value="" selected>
              Please select one
            </option>
            <option value="Male">
              Male
            </option>
            <option value="Female">
              Female
            </option>
            <option value="Other">
              Other
            </option>
          </select>
        </div>
        <div class="block">
          <label
            for="email"
            class="text-xs font-medium text-gray-500"
          >Email Address</label>
          <input
            id="email"
            v-model.lazy="emailAddress"
            type="email"
            name="emailAddress"
          >
        </div>
        <div class="block">
          <label
            for="mobile-no"
            class="text-xs font-medium text-gray-500"
          >Mobile Number</label>
          <!-- pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" -->
          <input
            id="mobile-no"
            v-model.lazy="mobilePhone"
            type="tel"
            name="mobilePhone"
          >
        </div>
        <div class="block">
          <label
            for="home-no"
            class="text-xs font-medium text-gray-500"
          >Home Number</label>
          <!-- pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" -->
          <input
            id="home-no"
            v-model.lazy="homePhone"
            type="tel"
            name="homePhone"
          >
        </div>
        <div class="block">
          <label
            for="work-no"
            class="text-xs font-medium text-gray-500"
          >Work Phone</label>
          <!-- pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" -->
          <input
            id="work-no"
            v-model.lazy="workPhone"
            type="tel"
            name="workPhone"
          >
        </div>
        <div class="block">
          <div>
            <label
              for="file"
              class="text-xs font-medium text-gray-500"
            >Participant's Picture</label>
          </div>
          <input
            ref="file"
            type="file"
            accept="images/*"
            class=" hidden w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-xs text-gray-500"
            @change="uploadFile"
          >
          <div class="relative inline-block">
            <img
              :src="imageUrl"
              class="rounded-full w-24 h-24 object-cover border-0"
              alt=""
            >
            <div
              class="absolute rounded-full top-0 h-full w-full bg-black bg-opacity-25 flex items-center justify-center"
            >
              <button
                class="text-white hover:bg-white rounded-full hover:bg-opacity-25 p-3 focus:outline-none transition duration-300 text-xs"
                @click="browse"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
              <button
                v-if="profileImage"
                class="text-white hover:bg-white rounded-full hover:bg-opacity-25 p-3 focus:outline-none transition duration-300 text-xs"
                @click="remove"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="block">
          <label
            for="advocate"
            class="text-xs font-medium text-gray-500"
          >Do you want an advocate?</label><br>
          <input
            v-model.lazy="advocateNeeded"
            advocate-needed-id="yes"
            type="radio"
            name="advocateNeeded"
            value="Yes"
          >
          <label for="yes" class="text-xs font-medium text-gray-500">Yes</label><br>
          <input
            v-model.lazy="advocateNeeded"
            advocate-needed-id="no"
            type="radio"
            name="advocateNeeded"
            value="No"
          >
          <label for="no" class="text-xs font-medium text-gray-500">No</label><br>
        </div>
        <div class="block">
          <label
            for="auditing_consent"
            class="text-xs font-medium text-gray-500"
          >Do you consent to auditing?</label><br>
          <input id="auditing-yes" v-model.lazy="auditingConsent" type="radio" name="auditingConsent" value="Yes">
          <label for="yes" class="text-xs font-medium text-gray-500">Yes</label><br>
          <input id="auditing-no" v-model.lazy="auditingConsent" type="radio" name="auditingConsent" value="No">
          <label for="no" class="text-xs font-medium text-gray-500">No</label><br>
        </div>
      </div>
      <!-- COL TWO ON md -->
      <div class="block md:w-1/2 space-y-2">
        <div class="block">
          <label
            for="cultural-preference"
            class="text-xs font-medium text-gray-500"
          >Cultural Preference</label>
          <input
            id="cultural-preference"
            v-model.lazy="culturalPreference"
            type="text"
            name="culturalPreference"
            class=""
          >
        </div>
        <!-- TODO: Find a country list API and use it here -->
        <div class="block">
          <label
            for="country"
            class="text-xs font-medium text-gray-500"
          >Country of Birth</label>
          <input
            id="country"
            v-model.lazy="countryOfBirth"
            type="text"
            name="countryOfBirth"
            class=""
          >
        </div>
        <div class="block">
          <label
            for="language"
            class="text-xs font-medium text-gray-500"
          >Preferred Language</label>
          <input
            v-model.lazy="preferredLanguage"
            name="preferredLanguage"
            type="text"
          >
        </div>
        <div class="block">
          <label
            for="cultural-activity"
            class="text-xs font-medium text-gray-500"
          >Cultural Activity</label>
          <input
            id="cultural-activity"
            v-model.lazy="culturalActivity"
            type="text"
            name="culturalActivity"
            class=""
          >
        </div>
        <div class="block">
          <label
            for="interpreter"
            class="text-xs font-medium text-gray-500"
          >Interpreter Required?</label><br>
          <input
            id="interpreter-yes"
            v-model.lazy="interpreterRequired"
            type="radio"
            name="interpreterRequired"
            value="Yes"
          >
          <label for="yes" class="text-xs font-medium text-gray-500">Yes</label><br>
          <input
            id="interpreter-no"
            v-model.lazy="interpreterRequired"
            type="radio"
            name="interpreterRequired"
            value="No"
          >
          <label for="no" class="text-xs font-medium text-gray-500">No</label><br>
        </div>
        <div class="block">
          <label
            for="indigenous-status"
            class="text-xs font-medium text-gray-500"
          >Indigenous Status</label>
          <select
            id="indigenous-status"
            v-model.lazy="indigenousStatus"
            name="indigenousStatus"
          >
            <option value="" selected>
              Select one
            </option>
            <option value="Aboriginal & Torres Strait Islander">
              Aboriginal & Torres Strait Islander
            </option>
            <option value="Aboriginal">
              Aboriginal
            </option>
            <option value="Torres Strait Islander">
              Torres Strait Islander
            </option>
            <option value="Not Aboriginal or Torres Strait Islander">
              Not Aboriginal or Torres Strait Islander
            </option>
          </select>
        </div>
        <div class="block">
          <label
            for="current-address"
            class="text-xs font-medium text-gray-500"
          >Current Address</label>
          <textarea
            id="current-address"
            v-model.lazy="currentAddress"
            name="currentAddress"
            rows=""
            columns=""
          />
        </div>
        <div class="block">
          <label
            for="ndia-plan"
            class="text-xs font-medium text-gray-500"
          >Do you have an NDIA access plan?</label><br>
          <input id="ndia-yes" v-model.lazy="haveNdiaPlan" type="radio" name="haveNdiaPlan" value="Yes">
          <label for="yes" class="text-xs font-medium text-gray-500">Yes</label><br>
          <input id="ndia-no" v-model.lazy="haveNdiaPlan" type="radio" name="haveNdiaPlan" value="No">
          <label for="no" class="text-xs font-medium text-gray-500">No</label><br>
          <div v-if="haveNdiaPlan === 'Yes'" class="block">
            <label
              for="ndiaApprovalDate"
              class="text-xs font-medium text-gray-500"
            >Plan Approval Date</label>
            <client-only>
              <VueTailWindPicker
                :init="false"
                :start-date="'1990-01-01'"
                :end-date="currentDate"
                @change="setDate"
              >
                <input
                  v-model.lazy="ndiaApprovalDate"
                  type="text"
                  name="ndiaApprovalDate"
                  placeholder="Select Date"
                  class="placeholder-gray-300"
                >
              </VueTailWindPicker>
            </client-only>
          </div>
          <div v-else-if="haveNdiaPlan === 'No'" class="block">
            <label
              for="address"
              class="text-xs font-medium text-gray-500"
            >Reason</label>
            <input
              id="address"
              v-model.lazy="ndiaReasonForNotHaving"
              type="text"
              name="address"
              rows=""
              columns=""
              class="placeholder-gray-300"
              placeholder="E.g. waiting for plan approval or plan review"
            >
          </div>
        </div>
        <div class="block">
          <label
            for="decision-making"
            class="text-xs font-medium text-gray-500"
          >Who assists in decision-making?</label>
          <select
            id="decision-making"
            v-model.lazy="decisionMaker"
            type="text"
            name="decisionMaker"
            class=""
          >
            <option value="" selected>
              Choose One
            </option>
            <option value="Parent (Participant is under 18)">
              Parent (Participant is under 18)
            </option>
            <option value="Child's Representative (Participant is under 18)">
              Child's Representative (Participant is under 18)
            </option>
            <option value="Key Worker (Participant is receiving ECEI)">
              Key Worker (Participant is receiving ECEI)
            </option>
            <option value="Family Member">
              Family Member
            </option>
            <option value="Legal Guardian">
              Legal Guardian
            </option>
            <option value="Nominee">
              Nominee
            </option>
            <option value="Advocate or Independent Advocate">
              Advocate or Independent Advocate
            </option>
            <option value="Court Appointed Decision Maker">
              Court Appointed Decision Maker
            </option>
            <option value="Participant-Appointed Decision Maker">
              Participant-Appointed Decision Maker
            </option>
          </select>
        </div>
        <div v-if="decisionMaker" class="block md:flex md:gap-x-1">
          <div class="block">
            <label
              for="decisionMaker-name"
              class="text-xs font-medium text-gray-500"
            >DM's Name</label>
            <input
              v-model.lazy="decisionMakerName"
              type="text"
              name="decisionMakerName"
            >
          </div>
          <div class="block">
            <label
              for="decisionMaker-name"
              class="text-xs font-medium text-gray-500"
            >DM's Phone Number</label>
            <input
              v-model.lazy="decisionMakerPhone"
              type="number"
              name="decisionMakerPhone"
            >
          </div>
          <div class="block">
            <label
              for="decisionMaker-name"
              class="text-xs font-medium text-gray-500"
            >DM's Email Address</label>
            <input
              v-model.lazy="decisionMakerEmail"
              type="text"
              name="decisionMakerEmail"
            >
          </div>
        </div>
        <div class="block">
          <label
            for="financial-mgt"
            class="text-xs font-medium text-gray-500"
          >Financial Management Arrangements(If applicable)</label>
          <input
            id="financial-mgt"
            v-model.lazy="financialMgt"
            type="text"
            name="financialMgt"
            class=""
          >
        </div>
        <div class="block">
          <label
            for="privacy-preferences"
            class="text-xs font-medium text-gray-500"
          >
            Privacy Preferences
          </label>
          <textarea
            id="privacy-preferences"
            v-model.lazy="privacyPreferences"
            type="text"
            name="privacyPreferences"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'ParticipantDetails',
  components: {
    VueTailWindPicker: () => import('vue-tailwind-picker')
  },
  data () {
    return {
      defaultAvatar: '',
      myFile: null,
      currentDate: new Date().toISOString().slice(0, 10)
    }
  },
  computed: {
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
      'imageUrl'
    ])
  },
  methods: {
    browse () {
      this.$refs.file.click()
    },
    remove () {
      this.profileImage = undefined
      this.imageUrl = undefined
      // this.$emit('update:formValueChange', {
      //   label: 'personalDetails',
      //   data: {
      //     ...this.basicInfo,
      //     profileImage: undefined
      //   }
      // })
    },
    uploadFile (event) {
      const files = event.target.files

      // let filename = files[0].name
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.profileImage = files[0]
      // const file = e.target.files[0]

      // if (!file) {
      //   return undefined
      // }

      // const reader = new FileReader()
      // reader.readAsDataURL(file)

      // reader.onload = (e) => {
      // const src = e.target.result
      // this.$emit('update:formValueChange', {
      //   label: 'personalDetails',
      //   data: {
      //     ...this.basicInfo,
      //     profileImage: reader.result
      //   }
      // })
      // }
    },
    setDob (v) {
      const dob = (this.dob = v)
      this.$emit('update:formValueChange', {
        label: 'personalDetails',
        data: {
          ...this.basicInfo,
          dob
        }
      })
    },
    setDate (v) {
      const approvalDate = (this.ndiaApprovalDate = v)
      this.$emit('update:formValueChange', {
        label: 'personalDetails',
        data: {
          ...this.basicInfo,
          ndiaApprovalDate: approvalDate
        }
      })
    }
  }
}
</script>

<style></style>
