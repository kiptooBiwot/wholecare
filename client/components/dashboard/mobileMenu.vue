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
            <menu-items />
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
import menuItems from './menuItems.vue'
export default {
  components: { menuItems },
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
