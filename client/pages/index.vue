<template>
  <div class="w-full flex flex-row h-screen">
    <div class="hidden md:block md:w-2/3 min-h-screen">
      <nuxt-img class="h-full object-cover" src="https://res.cloudinary.com/dhakagqld/image/upload/v1633068047/Whole%20Care%20Solutions/static/auth2_x8nbog.jpg" />
    </div>
    <div class="w-full md:w-1/3 flex h-auto">
      <div class="m-auto md:p-4">
        <img class="w-48 mx-auto" src="~/assets/img/logo.png" alt="">

        <div class="mx-10 mt-5 space-y-1">
          <h4 class="text-gray-600 font-bold text-lg">
            Sign In
          </h4>
          <p>Enter your email and password to access the dashboard</p>
          <form action="" method="post" class="space-y-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-500">Email</label>
              <input
                id="email"
                v-model="login.email"
                type="email"
                name="email"
                required
                class=""
              >
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-500">Password</label>
              <input
                id="password"
                v-model="login.password"
                type="password"
                name="password"
                required
                class=""
              >
            </div>
            <div class="flex items-center">
              <input id="terms" type="checkbox" name="terms" class="rounded text-blue-600 focus:ring-blue-600">
              <div class="flex space-x-24 items-center">
                <label for="terms" class="ml-2 text-xs block text-gray-500">
                  Remember me
                </label>
                <NuxtLink to="/forgot">
                  <span class="cursor-pointer text-xs text-blue-600 hover:text-blue-800">Forgot password?</span>
                </NuxtLink>
              </div>
            </div>
            <div>
              <button class="btn-primary" @click.prevent="userSignIn">
                Sign In
              </button>
            </div>
            <div>
              <p>Don't have an account? <span class="cursor-pointer text-blue-600 hover:text-blue-800"><NuxtLink to="/signup">Sign Up</NuxtLink></span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  auth: false,
  layout: 'auth',
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['addNotification']),
    async userSignIn () {
      try {
        const response = await this.$auth.loginWith('local',
          {
            data: this.login
          }
        )
        console.log(response)
        if (response.status === 200) {
          // console.log('inside response')
          await this.addNotification(
            {
              type: 'success',
              title: 'Success',
              message: response.data.message
            }
          )

          this.$router.push('/dashboard')
        }
      } catch (error) {
        // console.log(error)
        if (error.response.data.error.status === 403) {
          await this.addNotification(
            {
              type: 'error',
              title: 'Error',
              message: error.response.data.error.message
            }
          )
        } else {
          await this.addNotification(
            {
              type: 'error',
              title: 'Hold On!',
              message: error.response.data.error.message
            }
          )
        }
        // return error
      }
    }
  }
}
</script>

<style>
</style>
