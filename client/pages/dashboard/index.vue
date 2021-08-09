<template>
  <div class="flex min-h-screen relative">
    <!-- Mobile menu bar -->
    <!-- Left NAV -->
    <div class="w-60 border-r-2 pt-4 space-y-4 border-gray-100 inset-y-0 left-0 transform transition duration-200 ease-in-out">
      <nuxt-link to="/dashboard">
        <img class="w-44 cursor-pointer" src="~/assets/img/logo.png" alt="">
      </nuxt-link>
      <nav>
        <nuxt-link to="" class="py-2.5 px-4 block transition duration-200 hover:bg-blue-800 hover:text-white rounded-r-3xl">
          <div class="flex items-center">
            <svg class="w-6 h-6 pr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Home
          </div>
        </nuxt-link>
        <nuxt-link to="" class="py-2.5 px-4 block transition duration-200 hover:bg-blue-800 hover:text-white rounded-r-3xl">
          About
        </nuxt-link>
        <nuxt-link to="" class="py-2.5 px-4 block transition duration-200 hover:bg-blue-800 hover:text-white rounded-r-3xl">
          Services
        </nuxt-link>
        <nuxt-link to="" class="py-2.5 px-4 block transition duration-200 hover:bg-blue-800 hover:text-white rounded-r-3xl">
          Portfolio
        </nuxt-link>
        <nuxt-link to="" class="py-2.5 px-4 block transition duration-200 hover:bg-blue-800 hover:text-white rounded-r-3xl">
          Contact Us
        </nuxt-link>
        <button class="btn-primary" @click="showModal = true">
          Show Modal
        </button>
      </nav>
    </div>
    <!-- Main Content -->
    <div class="flex-1">
      <!-- NAV -->
      <div class="bg-white h-10">
        <h3 class="h3">
          Navigation
        </h3>
      </div>
      <div class="bg-purple-300">
        <div>
          <h2 class="h2">
            Body content Goes here
            <!-- <modal :is-visible="showModal" @cancel="showModal = false" @mySubmit="showModal = false">
              <template #title>
                <h3 class="h3">
                  Modal Title From Slots!
                </h3>
              </template>
              <template #body>
                <my-components />
              </template> <template #footer>
                <hr class="text-gray-100 mt-5 mb-2">
                <p>My custom footer goes here!</p>
              </template><template #clear-btn>
                Let's GO!
              </template>
              <template #submit-btn>
                DELETE!
              </template>
            </modal> -->
          </h2>
          <modal :is-visible="showModal" @cancel="showModal = false" @mySubmit="showModal = false">
            <template #title>
              <h3 class="md:h2 text-xl font-semibold">
                Basic Information
              </h3>
              <!-- <p>This is a public community. Your profile information will be visible to everyone, including visitors without a community account. </p> -->
            </template>
            <template #body>
              <user-info />
            </template>
            <template #footer />
          </modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../../components/Modal.vue'
import UserInfo from '../../components/auth/userInfo.vue'

export default {
  components: { Modal, UserInfo },
  data: () => ({
    showModal: false
  })
}
</script>

<style>

</style>
