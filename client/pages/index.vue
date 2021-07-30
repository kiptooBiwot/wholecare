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
            Sign In
          </h4>
          <p>Enter your email and password to access the dashboard</p>
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
              <input
                id="password"
                type="password"
                name="password"
                autocomplete
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
              <button class="btn-primary">
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
export default {
  layout: 'auth'
}
</script>

<style>
</style>
