<template>
  <div>
    <form
      action=""
      enctype="multipart/form-data"
      method="post"
      @submit.prevent="saveUserInfo"
    >
      <div class="p-4 md:p-6 space-y-2">
        <div v-if="!editStaffDetails" class="flex justify-between items-end">
          <nuxt-img
            class="w-24 md:w-48"
            src="https://res.cloudinary.com/dhakagqld/image/upload/v1633068041/Whole%20Care%20Solutions/static/logo_ssk2lw.png"
          />
          <h3 class="text-lg font-bold justify-end md:text-xl md:font-bold">
            Basic Information
          </h3>
        </div>
        <div class="block md:justify-between md:flex md:gap-6">
          <div class="block md:w-1/2 space-y-3">
            <div class="block">
              <label
                for="firstName"
                class="text-sm font-medium text-gray-500"
              >First Name*</label>
              <input
                id="first-name"
                v-model.trim="firstName"
                type="text"
                name="first-name"
                class=""
                :class="
                  $v.basicInfo.firstName.$error
                    ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500'
                    : null
                "
                @blur="$v.basicInfo.firstName.$touch()"
              >
              <template v-if="$v.basicInfo.firstName.$error">
                <p
                  v-if="!$v.basicInfo.firstName.required"
                  class="text-red-500 text-xs mt-1"
                >
                  Your First Name is required*
                </p>
                <p
                  v-if="!$v.basicInfo.firstName.alpha"
                  class="text-red-500 text-xs mt-1"
                >
                  Names have letters only. Numbers not allowed*
                </p>
                <p
                  v-if="!$v.basicInfo.firstName.minLength"
                  class="text-red-500 text-xs mt-1"
                >
                  Your First Name must have at least
                  {{ $v.basicInfo.firstName.$params.minLength.min }} characters*
                </p>
              </template>
            </div>
            <div class="block">
              <label
                for="middleName"
                class="text-sm font-medium text-gray-500"
              >Middle Name</label>
              <input
                id="middle-name"
                v-model.trim="middleName"
                type="text"
                name="middle-name"
                :class="
                  $v.basicInfo.middleName.$error
                    ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500'
                    : null
                "
                @blur="$v.basicInfo.middleName.$touch()"
              >
              <template v-if="$v.basicInfo.middleName.$error">
                <p
                  v-if="!$v.basicInfo.middleName.alpha"
                  class="text-red-500 text-xs mt-1"
                >
                  Names have letters only. Numbers not allowed*
                </p>
                <p
                  v-if="!$v.basicInfo.middleName.minLength"
                  class="text-red-500 text-xs mt-1"
                >
                  Your First Name must have at least
                  {{ $v.basicInfo.middleName.$params.minLength.min }}
                  characters*
                </p>
              </template>
            </div>
            <div class="block">
              <label
                for="surname"
                class="text-sm font-medium text-gray-500"
              >Surname*</label>
              <input
                id="surname"
                v-model.trim="surname"
                type="text"
                name="surname"
                class=""
                :class="
                  $v.basicInfo.surname.$error
                    ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500'
                    : null
                "
                @blur="$v.basicInfo.surname.$touch()"
              >
              <template v-if="$v.basicInfo.surname.$error">
                <p
                  v-if="!$v.basicInfo.surname.required"
                  class="text-red-500 text-xs mt-1"
                >
                  Your Surname is required*
                </p>
                <p
                  v-if="!$v.basicInfo.surname.alpha"
                  class="text-red-500 text-xs mt-1"
                >
                  Names have letters only. Numbers not allowed*
                </p>
                <p
                  v-if="!$v.basicInfo.surname.minLength"
                  class="text-red-500 text-xs mt-1"
                >
                  Your Surname must have at least
                  {{ $v.basicInfo.surname.$params.minLength.min }} characters*
                </p>
              </template>
            </div>
            <div class="block">
              <label
                for="title"
                class="text-sm font-medium text-gray-500"
              >Professional Title</label>
              <input
                id="title"
                v-model.trim="title"
                type="text"
                name="title"
                class="placeholder-text-xs placeholder-gray-300"
                placeholder="E.g. Nutritionist or Software Developer "
                :class="
                  $v.basicInfo.title.$error
                    ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500'
                    : null
                "
                @blur="$v.basicInfo.title.$touch()"
              >
              <template v-if="$v.basicInfo.title.$error">
                <p
                  v-if="!$v.basicInfo.title.alpha"
                  class="text-red-500 text-xs mt-1"
                >
                  Titles have letters only. Numbers not allowed*
                </p>
              </template>
            </div>
            <div class="block">
              <label
                for="dob"
                class="text-sm font-medium text-gray-500"
              >Date of Birth</label>
              <client-only>
                <VueTailWindPicker
                  :init="false"
                  :start-date="'1930-01-01'"
                  :end-date="currentDate"
                  @change="v => (dob = v)"
                >
                  <input
                    v-model.trim="dob"
                    type="text"
                    class="placeholder-text-xs placeholder-gray-300"
                    placeholder="Select your birthday"
                  >
                </VueTailWindPicker>
              </client-only>
              <!-- <input
                    id="dob"
                    v-model.trim="dob"
                    type="date"
                    name="dob"
                  > -->
            </div>
            <div class="block">
              <label
                for="address"
                class="text-sm font-medium text-gray-500"
              >Address</label>
              <textarea
                id="address"
                v-model.trim="address"
                name="address"
                rows=""
                columns=""
              />
            </div>
          </div>
          <div class="block md:w-1/2 space-y-3">
            <div class="block">
              <label
                for="gender"
                class="text-sm font-medium text-gray-500"
              >Gender</label>
              <select id="gender" v-model.trim="gender">
                <option value="" class="" selected>
                  Please select one
                </option>
                <option value="male">
                  Male
                </option>
                <option value="female">
                  Female
                </option>
                <option value="other">
                  Other
                </option>
              </select>
            </div>
            <div class="block">
              <label
                for="mobile-no"
                class="text-sm font-medium text-gray-500"
              >Mobile Number</label>
              <!-- pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" -->
              <input
                id="mobile-no"
                v-model.trim="mobileNumber"
                type="tel"
                name="mobile-no"
                :class="
                  $v.basicInfo.mobileNumber.$error
                    ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500'
                    : null
                "
                @blur="$v.basicInfo.mobileNumber.$touch()"
              >
            </div>
            <template v-if="$v.basicInfo.mobileNumber.$error">
              <p
                v-if="!$v.basicInfo.mobileNumber.numeric"
                class="text-red-500 text-xs mt-1"
              >
                A phone number cannot have letters. Numbers only*
              </p>
            </template>
            <div class="block">
              <label
                for="home-no"
                class="text-sm font-medium text-gray-500"
              >Home Number</label>
              <!-- pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" -->
              <input
                id="home-no"
                v-model.trim="homeNumber"
                type="tel"
                name="home-no"
                :class="
                  $v.basicInfo.homeNumber.$error
                    ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500'
                    : null
                "
                @blur="$v.basicInfo.homeNumber.$touch()"
              >
              <template v-if="$v.basicInfo.homeNumber.$error">
                <p
                  v-if="!$v.basicInfo.homeNumber.numeric"
                  class="text-red-500 text-xs mt-1"
                >
                  A phone number cannot have letters. Numbers only*
                </p>
              </template>
            </div>
            <div class="block">
              <label
                for="work-no"
                class="text-sm font-medium text-gray-500"
              >Work Phone</label>
              <!-- pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" -->
              <input
                id="work-no"
                v-model.trim="workNumber"
                type="tel"
                name="work-no"
                :class="
                  $v.basicInfo.workNumber.$error
                    ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500'
                    : null
                "
                @blur="$v.basicInfo.workNumber.$touch()"
              >
              <template v-if="$v.basicInfo.workNumber.$error">
                <p
                  v-if="!$v.basicInfo.workNumber.numeric"
                  class="text-red-500 text-xs mt-1"
                >
                  A phone number cannot have letters. Numbers only*
                </p>
              </template>
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
                  :class="
                    $v.basicInfo.profilePic.$error
                      ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500'
                      : null
                  "
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
                    v-if="profilePic"
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
              <template v-if="$v.basicInfo.profilePic.$error">
                <p
                  v-if="!$v.basicInfo.profilePic.numeric"
                  class="text-red-500 text-xs mt-1"
                >
                  Please add a profile image, thanks*
                </p>
              </template>
            </div>
            <!-- <div class="block">
                  <label for="file" class="text-sm font-medium text-gray-500">Profile Picture</label>
                  <input
                    ref="file"
                    type="file"
                    accept="images/*"
                    class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm text-gray-500"
                    @change="change"
                  > -->
            <!-- <image-input v-model="profilePic" :default-avatar="defaultAvatar" /> -->
            <!-- </div> -->
            <div class="block">
              <label
                for="bio"
                class="text-sm font-medium text-gray-500"
              >Bio</label>
              <textarea id="bio" v-model.trim="bio" type="text" name="bio" />
            </div>
          </div>
        </div>
        <div>
          <hr class="text-gray-100 my-3">
          <div class="flex gap-20 justify-between">
            <button
              class="btn-primary bg-transparent border-blue-600 text-gray-600 hover:bg-blue-100 hover:text-gray-800"
            >
              Back
            </button>
            <button
              type="submit"
              class="btn-primary bg-green-700 hover:bg-green-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  minLength,
  numeric,
  helpers
} from 'vuelidate/lib/validators'
import { mapState } from 'vuex'
const alpha = helpers.regex('alpha', /^[a-zA-Z_ ]*$/i)

export default {
  components: {
    VueTailWindPicker: () => import('vue-tailwind-picker')
  },
  mixins: [validationMixin],
  props: {
    basicInfo: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    firstName: '',
    middleName: '',
    surname: '',
    title: '',
    dob: null,
    address: '',
    gender: '',
    mobileNumber: '',
    homeNumber: '',
    workNumber: '',
    profilePic: undefined,
    bio: '',
    imageUrl: null,
    defaultAvatar: 'img/avatar.png',
    file: null,
    currentDate: new Date().toISOString().slice(0, 10)
  }),
  validations: {
    basicInfo: {
      firstName: {
        required,
        alpha,
        minLength: minLength(2)
      },
      middleName: {
        alpha,
        minLength: minLength(2)
      },
      surname: {
        required,
        alpha,
        minLength: minLength(2)
      },
      title: {
        alpha
      },
      mobileNumber: {
        numeric
      },
      homeNumber: {
        numeric
      },
      workNumber: {
        numeric
      },
      profilePic: {
        required
      }
    }
  },
  computed: {
    ...mapState('staff', ['editStaffDetails', 'oneStaff'])
  },
  created () {
    if (this.editStaffDetails) {
      // const basicInfo = this.oneStaff

      this.firstName = this.basicInfo.firstName
      this.middleName = this.basicInfo.middleName
      this.surname = this.basicInfo.surname
      this.title = this.basicInfo.title
      this.dob = this.basicInfo.dob
      this.address = this.basicInfo.address
      this.gender = this.basicInfo.gender
      this.mobileNumber = this.basicInfo.mobile_number
      this.homeNumber = this.basicInfo.home_number
      this.workNumber = this.basicInfo.work_number
      this.profilePic = this.basicInfo.profileImage
      this.bio = this.basicInfo.bio
    }
  },
  methods: {
    change () {
      this.profilePic = this.$refs.file.files[0]
    },

    uploadFile (event) {
      const files = event.target.files

      // let filename = files[0].name
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.profilePic = files[0]
    },

    browse () {
      this.$refs.file.click()
    },

    remove () {
      this.profilePic = undefined
      this.imageUrl = undefined
      // this.$emit('update:formValueChange', {
      //   label: 'personalDetails',
      //   data: {
      //     ...this.basicInfo,
      //     profileImage: undefined
      //   }
      // })
    }
  }
}
</script>

<style></style>
