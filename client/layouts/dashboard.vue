<template>
  <div class="flex flex-row min-h-screen relative bg-gray-200">
    <!-- Mobile menu bar -->
    <!-- Left NAV -->
    <sidebar />
    <!-- Main Content -->
    <div class="flex-1">
      <!-- NAV -->
      <div class="md:ml-2">
        <navbar />
      </div>
      <div class="px-2 py-4">
        <Nuxt />
        <!-- <div>
          <button class="flex items-center hover:border hover:border-blue-800 rounded-md p-1 hover:bg-gray-50" @click.prevent="isVisible = !isVisible">
            <NuxtImg class="rounded-full w-8 h-8 object-cover border-2 border-blue-500 hover:border-white" src="https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
            <span class="text-xs font-semibold text-gray-500 ml-1 hover:text-gray-800">Jane Doe</span>
            <svg
              class="h-4 pl-1 hover:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div :class="isVisible ? 'block' : 'hidden'" class="flex flex-col w-48 overflow-hidden text-gray-500 text-xs font-semibold bg-white rounded-md shadow-lg ">
            <NuxtLink class="hover:text-white px-4 py-2 hover:bg-blue-400" to="#">
              Link One
            </NuxtLink>
            <NuxtLink class="hover:text-white px-4 py-2 hover:bg-blue-400" to="#">
              Link Two
            </NuxtLink>
            <NuxtLink class="hover:text-white px-4 py-2 hover:bg-blue-400" to="#">
              Link Three
            </NuxtLink>
          </div>
        </div> -->
        <!-- <h2 class="h2">
          Body content Goes here
          <modal :is-visible="showModal" @cancel="showModal = false" @mySubmit="showModal = false">
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
          </modal>
        </h2> -->
        <!-- <modal :is-visible="showModal" @cancel="showModal = false" @mySubmit="showModal = false">
          <template #title>
            <h3 class="md:h2 text-xl font-semibold">
              Basic Information
            </h3>
            <p>This is a public community. Your profile information will be visible to everyone, including visitors without a community account. </p> -->
        <!-- </template>
            <template #body>
              <user-info />
            </template>
            <template #footer />
          </modal> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Modal from '../components/Modal.vue'
// import UserInfo from '../components/auth/userInfo.vue'
import Sidebar from '../components/dashboard/sidebar.vue'
import Navbar from '../components/dashboard/navbar.vue'

export default {
  components: {
    // Modal,
    // UserInfo,
    Sidebar,
    Navbar
  },
  data: () => ({
    showModal: false,
    isVisible: false
  })
}
</script>

<style>

</style>
