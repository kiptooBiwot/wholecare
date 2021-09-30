<template>
  <div class="w-full flex flex-row h-screen">
    <div class="w-2/3">
      <img class="h-full object-cover" src="~/assets/img/auth2.jpg" alt="Login" srcset="">
    </div>
    <div class="w-1/3 flex h-screen">
      <div class="m-auto p-4">
        <img class="w-48 mx-auto" src="~/assets/img/logo.png" alt="">

        <div class="mx-10 mt-5 space-y-4">
          <h4 class="text-gray-600 font-bold text-lg">
            Reset Password
          </h4>
          <p>Use this form to reset your password. Enter a new password and confirm the new password</p>
          <form action="" method="post" class="space-y-4">
            <div>
              <label for="password" class="block text-sm font-medium text-gray-500">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                autocomplete
                required
                class=""
              >
            </div>
            <div>
              <label for="confirm-password" class="block text-sm font-medium text-gray-500">Confirm Password</label>
              <input
                id="confirm-password"
                type="password"
                name="confirm-password"
                autocomplete
                required
                class=""
              >
            </div>
            <div>
              <button class="btn-primary">
                Confirm Reset
              </button>
            </div>
            <div>
              <p>Back to <span class="cursor-pointer text-blue-600 hover:text-blue-800"><NuxtLink to="/">Sign In</NuxtLink></span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'auth'
}
</script>

<style>
</style>
