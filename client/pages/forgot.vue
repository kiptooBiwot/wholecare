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
            Recover Password
          </h4>
          <p>Enter your email address and we'll send you instructions on how to reset your password</p>
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
              <button class="btn-primary">
                Reset Password
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
  layout: 'auth',
  auth: false
}
</script>

<style>
</style>
