<template>
  <div>
    <div class="w-full flex flex-row h-screen">
      <div class="w-2/3">
        <img class="h-full object-cover" src="~/assets/img/auth2.jpg" alt="Login" srcset="">
      </div>
      <div class="w-1/3 flex h-screen">
        <div class="m-auto p-4">
          <img class="w-48 mx-auto" src="~/assets/img/logo.png" alt="">

          <div class="mx-10 mt-5 space-y-1">
            <h4 class="text-gray-600 font-bold text-lg">
              Sign Up
            </h4>
            <p>Don't have an account? Create your own account, it takes less than a minute</p>
            <form action="" method="post" class="space-y-4" @submit.prevent="signUp">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-500">Email</label>
                <input
                  id="email"
                  v-model.trim="user.email"
                  type="email"
                  name="email"
                  :class="($v.user.email.$error) ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500' : null"
                  @blur="$v.user.email.$touch()"
                >
                <template v-if="$v.user.email.$error">
                  <p v-if="!$v.user.email.required" class="text-red-500 text-xs mt-1">
                    Email is required*
                  </p>
                  <p v-if="!$v.user.email.email" class="text-red-500 text-xs mt-1">
                    Please enter a valid email*
                  </p>
                  <p v-if="!$v.user.email.uniqueEmail" class="text-red-500 text-xs mt-1">
                    Email already in use*
                  </p>
                </template>
              </div>
              <div>
                <label for="password" class="block text-sm font-medium text-gray-500">Password</label>
                <div class="relative">
                  <input
                    id="password"
                    v-model.trim="user.password"
                    :type="show ? 'password' : 'text'"
                    name="password"
                    :class="($v.user.password.$error) ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500' : null"
                    @blur="$v.user.password.$touch()"
                  >
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      :class="{'hidden': !show, 'block':show }"
                      @click.prevent="show = !show"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      /></svg>

                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      :class="{'block': !show, 'hidden':show }"
                      @click.prevent="show = !show"
                    ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                  </div>
                </div>
                <template v-if="$v.user.password.$error">
                  <p v-if="!$v.user.password.required" class="text-red-500 text-xs mt-1">
                    Password is required*
                  </p>
                  <p v-if="!$v.user.password.minLength" class="text-red-500 text-xs mt-1">
                    Your password must have at least {{ $v.user.password.$params.minLength.min }} characters*
                  </p>
                </template>
              </div>
              <div>
                <label for="confirm-password" class="block text-sm font-medium text-gray-500">Confirm Password</label>
                <div class="relative">
                  <input
                    id="confirm-password"
                    v-model.trim="user.confirmPassword"
                    :type="showConfirm ? 'password' : 'text'"
                    name="confirm-password"
                    :class="($v.user.confirmPassword.$error) ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500' : null"
                    @blur="$v.user.confirmPassword.$touch()"
                  >
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      :class="{'hidden': !showConfirm, 'block':showConfirm }"
                      @click.prevent="showConfirm = !showConfirm"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      /></svg>

                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      :class="{'block': !showConfirm, 'hidden':showConfirm }"
                      @click.prevent="showConfirm = !showConfirm"
                    ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                  </div>
                </div>
                <template v-if="$v.user.confirmPassword.$error">
                  <p v-if="!$v.user.confirmPassword.sameAs" class="text-red-500 text-xs mt-1">
                    Passwords must be identical*
                  </p>
                </template>
              </div>
              <div class="flex items-center">
                <input
                  id="terms"
                  v-model="user.acceptTerms"
                  type="checkbox"
                  :value="user.acceptTerms"
                  name="acceptTerms"
                  class="rounded text-blue-600 focus:ring-blue-600"
                  :class="($v.user.acceptTerms.$error) ? 'ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500' : null"
                  @change="$v.user.acceptTerms.$touch()"
                >
                <div class="flex space-x-24 items-center">
                  <label for="terms" class="ml-2 text-xs block text-gray-500">
                    I accept the
                    <nuxt-link to="/">
                      <span class="cursor-pointer text-xs font-bold text-blue-600 hover:text-blue-800">Terms & Conditions</span>
                    </nuxt-link>
                  </label>
                </div>
              </div>
              <template v-if="$v.user.acceptTerms.$error">
                <p v-if="!$v.user.acceptTerms.sameAs" class="text-red-500 text-xs mt-1">
                  Accept the Terms & Conditions*
                </p>
              </template>
              <!-- BUTTON -->
              <div>
                <button class="btn-primary" :disabled="$v.$invalid" type="submit">
                  Sign Up
                </button>
              </div>
              <div>
                <p v-if="submitStatus === 'OK'" class="h3">
                  Thanks for registering. You will be lead through the next process.
                </p>
              </div>
              <div>
                <p>Already have an account? <span class="cursor-pointer text-blue-600 hover:text-blue-800"><nuxt-link to="/">Sign In</nuxt-link></span></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed top-0 w-1/3 right-0">
      <div v-if="alertOpen" class="text-white flex px-6 py-4 items-center border-0 rounded relative mb-4 bg-green-500">
        <span class="text-xl inline-block mr-5 align-middle">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </span>
        <span class="inline-block align-middle mr-8">
          <b class="capitalize">Sign Up</b> successful.
        </span>
        <button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" @click="closeAlert()">
          <span>×</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
  name: 'RegisterUser',
  auth: false,
  mixins: [validationMixin],
  async asyncData ({ $axios }) {
    try {
      const response = await $axios.$get('/users')
      return {
        users: response.users
      }
    } catch (error) {
      return error
    }
  },
  data () {
    return {
      show: true,
      showConfirm: true,
      user: {
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
      },
      submitStatus: null,
      feedback: '',
      alertOpen: false,
      hasData: false
    }
  },
  validations: {
    user: {
      email: {
        required,
        email,
        uniqueEmail (val) {
          if (val === '') { return true }
          const users = this.users
          if (users) {
            const emailTaken = users.find(user => user.email === val)
            if (emailTaken) { return false }
            return true
          } else {
            return true
          }
        }
      },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, minLength, sameAs: sameAs('password') },
      acceptTerms: { sameAs: sameAs(() => true) }
    }
  },
  methods: {
    ...mapActions({ registerUser: 'authentication/registerUser' }),
    async signUp () {
      console.log('SIGN UP IS BEING')
      this.$v.$touch()

      if (!this.$v.$invalid) {
        try {
          await this.registerUser(
            {
              email: this.user.email,
              password: this.user.password,
              acceptTerms: this.user.acceptTerms
            }
          )
          this.$router.push('/basic-info')
        } catch (error) {
          return error.message
        }
      }
    },
    closeAlert () {
      this.alertOpen = false
    },
    resetForm () {
      this.user.email = ''
      this.user.password = ''
      this.user.confirmPassword = ''
      this.user.acceptTerms = false
    }
  }
}
</script>

<style>
</style>
