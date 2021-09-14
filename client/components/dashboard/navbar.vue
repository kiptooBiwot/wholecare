<template>
  <div>
    <div class="w-full bg-white h-12 rounded flex flex-row items-center shadow-lg justify-between px-6">
      <div class="cursor-pointer md:hidden">
        <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        <!-- X ICON -->
        <!-- <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg> -->
      </div>
      <div class="md:hidden">
        <div class="flex items-center justify-center text-gray-500">
          <span class="font-semibold text-lg">Whole <span class="">Care</span></span>
          <NuxtLink to="/">
            <img class="w-8 ml-1" src="~/assets/img/logo-icon.png" alt="">
          </NuxtLink>
        </div>
      </div>
      <!-- <div class="flex flex-row justify-between"> -->
      <div class="text-gray-500 hidden md:block">
        <div class="flex items-center justify-between rounded relative bg-gray-50 hover:bg-gray-200 hover:text-blue-700" @click.prevent="showDropdown">
          <button class="p-1 py-2 px-2 text-xs font-semibold uppercase pr-8">
            Create New
          </button>
          <div class="absolute right-0 p-1">
            <svg
              class="h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="absolute flex inset-y-0 left-0 items-center ml-2">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
        <input type="text" class="rounded-3xl border-0 px-8 text-xs font-light bg-gray-50 text-gray-500" placeholder="Search">
      </div>
      <div class="flex items-center">
        <div class="mr-5 relative text-gray-500">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span class="absolute bg-red-500 text-red-100 py-0.5 px-1.5 text-xs rounded-full font-semibold -right-1 -top-2">5</span>
          <!-- <span class="absolute w-4 h-4 items-center justify-center bg-red-700 rounded-full text-red-100 font-semibold text-xs -right-1 -top-2">10</span> -->
        </div>
        <div class="relative">
          <button class="flex items-center hover:border hover:border-blue-800 rounded-md p-1 hover:bg-gray-50" @click.prevent="isVisible = !isVisible">
            <NuxtImg class="rounded-full w-10 h-10 object-cover border-2 border-blue-500 hover:border-white" src="https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
            <span class="text-xs font-semibold text-gray-500 ml-1 hover:text-gray-800">Jane Doe</span>
            <svg
              class="h-4 pl-1 hover:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <!-- </div> -->
          <div :class="isVisible ? 'block' : 'hidden'" class="flex flex-col absolute overflow-hidden w-48 text-gray-500 text-xs font-semibold bg-white rounded-md shadow-lg right-0">
            <NuxtLink class="flex items-center hover:text-white px-4 py-3 hover:bg-blue-400" to="#">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <span>Profile</span>
            </NuxtLink>
            <NuxtLink class="flex items-center hover:text-white px-4 py-3 hover:bg-blue-400" to="#">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
              <span>Sign Out</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isVisible: false
  }),
  methods: {
    showDropdown () {
      alert('This works. To fix the broken link!')
    }
  }
}
</script>

<style>

</style>
