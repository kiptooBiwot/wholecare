<template>
  <div class="w-64 bg-gray-800 shadow-xl flex-col justify-between">
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
      <menu-items />
      <div class="px-6 pt-2">
        <hr class="border-gray-700">
      </div>
    </div>
    <div class="mt-20">
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
      <div class="px-6 py-1">
        <hr class="border-gray-700">
      </div>
      <div class="bg-gray-800 px-6 pt-3 pb-8 flex items-center justify-between">
        <div class="flex items-center">
          <div v-if="$auth.user.profileImage" class="relative rounded-full before:absolute before:w-2 after:h-2 before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white">
            <NuxtImg class="w-10 h-10 rounded-full object-cover" :src="$auth.user.profileImage" />
          </div>
          <div v-else class="relative rounded-full before:absolute before:w-2 after:h-2 before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white">
            <NuxtImg class="w-10 h-10 rounded-full object-cover" src="/img/avatar.png" />
          </div>
          <div class="flex flex-col pl-3 text-gray-400 text-xs">
            <span class="font-semibold text-sm">{{ $auth.user.firstName + ' ' + $auth.user.surname }}</span>
            <span class="font-light tracking-tight">{{ $auth.user.email }}</span>
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
import menuItems from './menuItems.vue'
export default {
  components: { menuItems },
  data: () => ({
    isVisible: false,
    isVisibleParticipant: false
  })
}
</script>

<style>

</style>
