<template>
  <div class="w-full flex flex-row h-screen">
    <div class="w-2/3">
      <img class="h-full object-cover" src="~/assets/img/auth2.jpg" alt="Login" srcset="">
    </div>
    <div class="w-1/3 flex h-screen">
      <div class="m-auto p-4">
        <div class="p-4 mb-6">
          <img class="w-48" src="~/assets/img/logo.png" alt="">
        </div>

        <div class="mx-6 space-y-4">
          <div>
            <svg class="w-36 h-36 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" /></svg>
          </div>
          <p>A message has been sent to your email address. Please check you account for an email from Whole Care Solutions and follow the instructions.</p>
          <form action="" method="post" class="space-y-4">
            <div>
              <button class="btn-primary">
                <NuxtLink to="/">
                  Back Home
                </NuxtLink>
              </button>
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
