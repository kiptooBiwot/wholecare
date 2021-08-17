<template>
  <div class="w-64 bg-gray-800 shadow-xl flex flex-col justify-between rounded-r-md md:block">
    <div>
      <div class="px-6 pt-4">
        <div class="justify-center">
          <NuxtLink class="flex items-center" to="/">
            <img class="w-12 mr-2 bg-white border-blue-800 border-2 p-1 rounded-full" src="~/assets/img/logo-icon.png" alt="">
            <span class="text-white font-semibold text-lg">Whole <span class="text-white bg-blue-800 py-1 px-0.5 rounded-sm">Care</span></span>
          </NuxtLink>
        </div>
      </div>
      <!-- <div class="px-6">
        SEARCH INPUT BOX
        <div class="relative">
          <div class="absolute flex inset-y-0 left-0 items-center ml-2">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input type="text" class="rounded border-0 px-8 text-xs font-light bg-gray-700 text-gray-400" placeholder="Search">
        </div>
      </div> -->
      <div class="px-6 pt-4">
        <hr class="border-gray-700">
      </div>
      <div class="px-6 pt-2">
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
                  <NuxtLink class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-700 hover:text-white" to="#">
                    List Staff
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-700 hover:text-white" to="#">
                    Add New Staff
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-700 hover:text-white" to="#">
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
          <li class="text-gray-400 hover:text-white relative">
            <div class="absolute flex inset-y-0 left-0 pl-2 items-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
            </div>
            <NuxtLink class="hover:bg-gray-700 inline-block w-full pl-8 pr-4 py-2 text-xs rounded" to="/dashboard">
              Participants
            </NuxtLink>
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
    <div>
      <div class="px-6">
        <ul class="flex flex-col space-y-2">
          <li class="text-gray-400 hover:text-white relative">
            <div class="absolute flex inset-y-0 left-0 pl-2 items-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <NuxtLink class="hover:bg-gray-700 inline-block w-full pl-8 pr-4 py-2 text-xs rounded" to="/dashboard">
              Settings
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="px-6 px-1">
        <hr class="border-gray-700">
      </div>
      <div class="bg-gray-800 px-6 pt-3 pb-8 flex items-center justify-between">
        <div class="flex items-center">
          <div class="relative rounded-full before:absolute before:w-2 after:h-2 before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white">
            <NuxtImg class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
          </div>
          <div class="flex flex-col pl-3 text-gray-400 text-xs">
            <span class="font-semibold text-sm">Jane Doe</span>
            <span class="font-light tracking-tight">janedoe@aol.com</span>
          </div>
        </div>
        <button class="text-gray-400 bg-gray-800 rounded">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isVisible: false
  })
}
</script>

<style>

</style>
