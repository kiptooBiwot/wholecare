<template>
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
          <form action="" method="post" class="space-y-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-500">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                autocomplete
                required
                class=""
              >
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-500">Password</label>
              <div class="relative">
                <input
                  id="password"
                  :type="show ? 'password' : 'text'"
                  name="password"
                  autocomplete
                  required
                  class=""
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
            </div>
            <div>
              <label for="confirm-password" class="block text-sm font-medium text-gray-500">Confirm Password</label>
              <div class="relative">
                <input
                  id="confirm-password"
                  :type="showConfirm ? 'password' : 'text'"
                  name="confirm-password"
                  autocomplete
                  required
                  class=""
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
            </div>
            <div class="flex items-center">
              <input id="terms" type="checkbox" name="terms" class="rounded text-blue-600 focus:ring-blue-600">
              <div class="flex space-x-24 items-center">
                <label for="terms" class="ml-2 text-xs block text-gray-500">
                  I accept the
                  <NuxtLink to="/">
                    <span class="cursor-pointer text-xs font-bold text-blue-600 hover:text-blue-800">Terms & Conditions</span>
                  </NuxtLink>
                </label>
              </div>
            </div>
            <div>
              <button class="btn-primary" @click.prevent="signUp">
                Sign Up
              </button>
            </div>
            <div>
              <p>Already have an account? <span class="cursor-pointer text-blue-600 hover:text-blue-800"><NuxtLink to="/">Sign In</NuxtLink></span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data: () => ({
    show: true,
    showConfirm: true,
    email: '',
    password: '',
    acceptTerms: ''
  }),
  methods: {
    signUp () {
      alert('Let\'s go! It works.')
    }
  }
}
</script>

<style>
</style>
