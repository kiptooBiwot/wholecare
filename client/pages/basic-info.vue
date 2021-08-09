<template>
  <div class="w-full flex flex-row h-screen">
    <div class="hidden md:block md:w-1/3 h-screen">
      <nuxt-img class="h-full object-cover" src="/img/auth2.jpg" />
    </div>
    <div class="w-full md:w-2/3 bg-gray-50 pt-5">
      <div class="m-4 border border-gray-100 bg-white rounded-lg shadow-lg">
        <div class="p-4 md:p-6 space-y-2">
          <div class="flex justify-between items-end">
            <nuxt-img class="w-24 md:w-48" src="/img/logo.png" />
            <h3 class="text-lg font-bold justify-end md:text-xl md:font-bold">
              Basic Information
            </h3>
          </div>
          <div class="block md:justify-between md:flex md:gap-6">
            <div class="block md:w-1/2 space-y-3">
              <div class="block">
                <label for="firstName" class="text-sm font-medium text-gray-500">First Name*</label>
                <input
                  id="first-name"
                  v-model.trim="basicInfo.firstName"
                  type="text"
                  name="first-name"
                  class=""
                  :class="($v.basicInfo.firstName.$error) ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500' : null"
                  @blur="$v.basicInfo.firstName.$touch()"
                >
                <template v-if="$v.basicInfo.firstName.$error">
                  <p v-if="!$v.basicInfo.firstName.required" class="text-red-500 text-xs mt-1">
                    Your First Name is required*
                  </p>
                  <p v-if="!$v.basicInfo.firstName.alpha" class="text-red-500 text-xs mt-1">
                    Names have letters only. Numbers not allowed*
                  </p>
                  <p v-if="!$v.basicInfo.firstName.minLength" class="text-red-500 text-xs mt-1">
                    Your First Name must have at least {{ $v.basicInfo.firstName.$params.minLength.min }} characters*
                  </p>
                </template>
              </div>
              <div class="block">
                <label for="middleName" class="text-sm font-medium text-gray-500">Middle Name</label>
                <input
                  id="middle-name"
                  v-model.trim="basicInfo.middleName"
                  type="text"
                  name="middle-name"
                  :class="($v.basicInfo.middleName.$error) ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500' : null"
                  @blur="$v.basicInfo.middleName.$touch()"
                >
                <template v-if="$v.basicInfo.middleName.$error">
                  <p v-if="!$v.basicInfo.middleName.alpha" class="text-red-500 text-xs mt-1">
                    Names have letters only. Numbers not allowed*
                  </p>
                  <p v-if="!$v.basicInfo.middleName.minLength" class="text-red-500 text-xs mt-1">
                    Your First Name must have at least {{ $v.basicInfo.middleName.$params.minLength.min }} characters*
                  </p>
                </template>
              </div>
              <div class="block">
                <label for="surname" class="text-sm font-medium text-gray-500">Surname*</label>
                <input
                  id="surname"
                  v-model.trim="basicInfo.surname"
                  type="text"
                  name="surname"
                  class=""
                  :class="($v.basicInfo.surname.$error) ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500' : null"
                  @blur="$v.basicInfo.surname.$touch()"
                >
                <template v-if="$v.basicInfo.surname.$error">
                  <p v-if="!$v.basicInfo.surname.required" class="text-red-500 text-xs mt-1">
                    Your Surname is required*
                  </p>
                  <p v-if="!$v.basicInfo.surname.alpha" class="text-red-500 text-xs mt-1">
                    Names have letters only. Numbers not allowed*
                  </p>
                  <p v-if="!$v.basicInfo.surname.minLength" class="text-red-500 text-xs mt-1">
                    Your Surname must have at least {{ $v.basicInfo.surname.$params.minLength.min }} characters*
                  </p>
                </template>
              </div>
              <div class="block">
                <label for="title" class="text-sm font-medium text-gray-500">Title</label>
                <input
                  id="title"
                  v-model.trim="basicInfo.title"
                  type="text"
                  name="title"
                  :class="($v.basicInfo.title.$error) ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500' : null"
                  @blur="$v.basicInfo.title.$touch()"
                >
                <template v-if="$v.basicInfo.title.$error">
                  <p v-if="!$v.basicInfo.title.alpha" class="text-red-500 text-xs mt-1">
                    Titles have letters only. Numbers not allowed*
                  </p>
                </template>
              </div>
              <div class="block">
                <label for="dob" class="text-sm font-medium text-gray-500">Date of Birth</label>
                <input
                  id="dob"
                  v-model.trim="basicInfo.dob"
                  type="date"
                  name="dob"
                >
              </div>
              <div class="block">
                <label for="address" class="text-sm font-medium text-gray-500">Address</label>
                <textarea
                  id="address"
                  v-model.trim="basicInfo.address"
                  name="address"
                  rows=""
                  columns=""
                />
              </div>
            </div>
            <div class="block md:w-1/2 space-y-3">
              <div class="block">
                <label for="gender" class="text-sm font-medium text-gray-500">Gender</label>
                <select
                  id="gender"
                  v-model.trim="basicInfo.gender"
                >
                  <option value="" selected>
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
                <label for="mobile-no" class="text-sm font-medium text-gray-500">Mobile Number</label>
                <input
                  id="mobile-no"
                  v-model.trim="basicInfo.mobileNumber"
                  type="tel"
                  name="mobile-no"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                  :class="($v.basicInfo.mobileNumber.$error) ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500' : null"
                  @blur="$v.basicInfo.mobileNumber.$touch()"
                >
              </div>
              <template v-if="$v.basicInfo.mobileNumber.$error">
                <p v-if="!$v.basicInfo.mobileNumber.numeric" class="text-red-500 text-xs mt-1">
                  A phone number cannot have letters. Numbers only*
                </p>
              </template>
              <div class="block">
                <label for="home-no" class="text-sm font-medium text-gray-500">Home Number</label>
                <input
                  id="home-no"
                  v-model.trim="basicInfo.homeNumber"
                  type="tel"
                  name="home-no"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                  :class="($v.basicInfo.homeNumber.$error) ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500' : null"
                  @blur="$v.basicInfo.homeNumber.$touch()"
                >
                <template v-if="$v.basicInfo.homeNumber.$error">
                  <p v-if="!$v.basicInfo.homeNumber.numeric" class="text-red-500 text-xs mt-1">
                    A phone number cannot have letters. Numbers only*
                  </p>
                </template>
              </div>
              <div class="block">
                <label for="work-no" class="text-sm font-medium text-gray-500">Work Phone</label>
                <input
                  id="work-no"
                  v-model.trim="basicInfo.workNumber"
                  type="tel"
                  name="work-no"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                  :class="($v.basicInfo.workNumber.$error) ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500' : null"
                  @blur="$v.basicInfo.workNumber.$touch()"
                >
                <template v-if="$v.basicInfo.workNumber.$error">
                  <p v-if="!$v.basicInfo.workNumber.numeric" class="text-red-500 text-xs mt-1">
                    A phone number cannot have letters. Numbers only*
                  </p>
                </template>
              </div>
              <div class="block">
                <label for="profilePic" class="text-sm font-medium text-gray-500">Select Profile Picture <span class="text-gray-300 text-xs">Preferrably a passport image.</span></label>
                <input
                  id="profilePic"
                  type="file"
                  name="profilePic"
                  class="bg-gray-100 text-gray-400 p-2 rounded-lg"
                >
              </div>
              <div class="block">
                <label for="bio" class="text-sm font-medium text-gray-500">Bio</label>
                <textarea
                  id="bio"
                  v-model.trim="basicInfo.bio"
                  type="text"
                  name="bio"
                />
              </div>
            </div>
          </div>
          <div>
            <hr class="text-gray-100 my-3">
            <div class="flex gap-20 justify-between">
              <button class="btn-primary bg-transparent border-blue-600 text-gray-600 hover:bg-blue-100 hover:text-gray-800">
                Back
              </button>
              <button class="btn-primary bg-green-700 hover:bg-green-600">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, numeric, helpers } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'
const alpha = helpers.regex('alpha', /^[a-zA-Z_ ]*$/i)

export default {
  name: 'BasicInfo',
  mixins: [validationMixin],
  data: () => ({
    basicInfo: {
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
      profilePic: null,
      bio: ''
    }
  }),
  computed: {
    ...mapState('auth', ['user'])
  },
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
      }
    }
  },
  methods: {
    updateUserInfo () {
      try {
        this.$store.dispatch('auth/updateUserInfo', {
          id: this.$route.params.id,
          data: this.basicInfo
        })
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
