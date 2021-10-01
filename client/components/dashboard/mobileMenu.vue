<template>
  <div>
    <transition>
      <div class="absolute w-3/4 flex bg-gray-800 rounded-r-lg z-10 inset-8 px-4 top-0 left-0 md:hidden">
        <div class="overflow-y-auto w-full">
          <div>
            <div class="flex justify-between items-center">
              <div class="px-2 pt-4">
                <div class="justify-center">
                  <NuxtLink class="flex items-center" to="/">
                    <img class="w-10 mr-2 bg-white border-blue-800 border-2 p-1 rounded-full" src="~/assets/img/logo-icon.png" alt="">
                    <span class="text-white font-semibold text-base">Whole <span class="text-white bg-blue-800 py-1 px-0.5 rounded-sm">Care</span></span>
                  </NuxtLink>
                </div>
              </div>
              <div>
                <button class="ml-1 flex items-center animate-pulse justify-center h-10" @click.prevent="hideMobileMenu">
                  <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>

            <div class="px-2 pt-4">
              <hr class="border-gray-700">
            </div>
            <div class="px-2 pt-2">
              <ul class="flex flex-col space-y-2">
                <li class="text-gray-400 hover:text-white relative">
                  <div class="absolute flex inset-y-0 left-0 pl-2 items-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                  </div>
                  <NuxtLink class="hover:bg-gray-700 inline-block w-full pl-8 pr-4 py-2 text-xs rounded" to="/dashboard">
                    Dashboard
                  </NuxtLink>
                </li>
                <li class="">
                  <div class="text-gray-400 hover:text-white relative flex items-center justify-between">
                    <div class="flex items-center w-full" @click.prevent="isVisible = !isVisible">
                      <div class="absolute flex inset-y-0 left-0 pl-2 items-center pointer-events-none">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      </div>
                      <span class="hover:bg-gray-700 inline-block w-full pl-8 pr-4 py-2 text-xs rounded">
                        Staff
                      </span>
                    </div>
                    <button class="absolute right-0 p-1">
                      <svg
                        v-if="!isVisible"
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                      <svg
                        v-else
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                  <div v-show="isVisible" class="pt-1 pl-4">
                    <ul class="flex flex-col pl-2 text-gray-400 border-l border-gray-700">
                      <li>
                        <NuxtLink class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-700 hover:text-white" to="/dashboard/staff">
                          List Staff
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-700 hover:text-white" to="#">
                          Add New Staff
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-700 hover:text-white" to="/dashboard/staff/manage-staff">
                          Manage Staff
                        </NuxtLink>
                      </li>
                      <!-- <li>
                  <NuxtLink class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-700 hover:text-white" to="#">
                    Sub-Menu
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-700 hover:text-white" to="#">
                    Sub-Menu
                  </NuxtLink>
                </li> -->
                    </ul>
                  </div>
                </li>
                <li class="text-gray-400 hover:text-white relative">
                  <div class="absolute flex inset-y-0 left-0 pl-2 items-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <NuxtLink class="hover:bg-gray-700 inline-block w-full pl-8 pr-4 py-2 text-xs rounded" to="/dashboard">
                    Scheduler
                  </NuxtLink>
                </li>
                <!-- <li class="text-gray-400 hover:text-white relative">
            <div class="absolute flex inset-y-0 left-0 pl-2 items-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
            </div>
            <NuxtLink class="hover:bg-gray-700 inline-block w-full pl-8 pr-4 py-2 text-xs rounded" to="/dashboard">
              Participants
            </NuxtLink>
          </li> -->
                <li class="">
                  <div class="text-gray-400 hover:text-white relative flex items-center justify-between">
                    <div class="flex items-center w-full" @click.prevent="isVisibleParticipant = !isVisibleParticipant">
                      <div class="absolute flex inset-y-0 left-0 pl-2 items-center">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                      </div>
                      <span class="hover:bg-gray-700 inline-block w-full pl-8 pr-4 py-2 text-xs rounded">
                        Participants
                      </span>
                    </div>
                    <button class="absolute right-0 p-1">
                      <svg
                        v-if="!isVisibleParticipant"
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                      <svg
                        v-else
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                  <div v-show="isVisibleParticipant" class="pt-1 pl-4">
                    <ul class="flex flex-col pl-2 text-gray-400 border-l border-gray-700">
                      <li>
                        <NuxtLink class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-700 hover:text-white" to="#">
                          List Participants
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-700 hover:text-white" to="/dashboard/participant">
                          Add New Participant
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-700 hover:text-white" to="#">
                          Manage Participants
                        </NuxtLink>
                      </li>
                      <!-- <li>
                  <NuxtLink class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-700 hover:text-white" to="#">
                    Sub-Menu
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-700 hover:text-white" to="#">
                    Sub-Menu
                  </NuxtLink>
                </li> -->
                    </ul>
                  </div>
                </li>
                <li class="text-gray-400 hover:text-white relative">
                  <div class="absolute flex inset-y-0 left-0 pl-2 items-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <NuxtLink class="hover:bg-gray-700 inline-block w-full pl-8 pr-4 py-2 text-xs rounded" to="/dashboard">
                    Chat
                  </NuxtLink>
                </li>
                <li class="text-gray-400 hover:text-white relative">
                  <div class="absolute flex inset-y-0 left-0 pl-2 items-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <NuxtLink class="hover:bg-gray-700 inline-block w-full pl-8 pr-4 py-2 text-xs rounded" to="/dashboard">
                    Invoices
                  </NuxtLink>
                </li>
                <li class="text-gray-400 hover:text-white relative">
                  <div class="absolute flex inset-y-0 left-0 pl-2 items-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                  </div>
                  <NuxtLink class="hover:bg-gray-700 inline-block w-full pl-8 pr-4 py-2 text-xs rounded" to="/dashboard">
                    Reports
                  </NuxtLink>
                </li>
                <li class="text-gray-400 hover:text-white relative">
                  <div class="absolute flex inset-y-0 left-0 pl-2 items-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" /></svg>
                  </div>
                  <NuxtLink class="hover:bg-gray-700 inline-block w-full pl-8 pr-4 py-2 text-xs rounded" to="/dashboard">
                    Document Hub
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="px-6 pt-2">
              <hr class="border-gray-700">
            </div>
          </div>
        </div>
        <!-- <div class="absolute top-0 right-1 pt-2 pr-2">
          <button class="ml-1 flex items-center justify-center h-10" @click.prevent="hideMobileMenu">
            <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div> -->
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    isVisible: false,
    isVisibleParticipant: false
  }),
  methods: {
    hideMobileMenu () {
      this.$emit('hideMobileMenu')
    }
  }
}
</script>

<style>

</style>
