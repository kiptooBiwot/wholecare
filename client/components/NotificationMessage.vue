<template>
  <div>
    <div v-if="notification.type==='success'" class="bg-green-500 rounded mb-2 shadow-md">
      <div class="flex flex-row relative text-white">
        <div class="bg-green-600 h-auto p-3 overflow-hidden rounded-l">
          <svg class="w-10 h-10 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <div class="ml-2 mr-6 p-3">
          <span class="font-semibold">{{ notification.title }}</span>
          <span class="block">{{ notification.message }}</span>
        </div>
        <div class="absolute right-0 top-0 p-2 cursor-pointer" @click.prevent="removeNotification">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </div>
      </div>
    </div>
    <div v-if="notification.type==='error'" class="bg-red-500 rounded mb-2 shadow-md">
      <div class="flex flex-row relative text-white">
        <div class="bg-red-600 w-14 h-auto p-3 overflow-hidden rounded-l">
          <svg class="w-10 h-10 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        </div>
        <div class="ml-2 mr-6 p-3">
          <span class="font-semibold">{{ notification.title }}</span>
          <span class="block">{{ notification.message }}</span>
        </div>
        <div class="absolute right-0 top-0 p-2 cursor-pointer" @click.prevent="removeNotification">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    notification: {
      type: Object,
      required: false,
      default: null
    }
  },
  data () {
    return {
      timeout: null
    }
  },
  computed: {
    typeClass () {
      return this.notification.type
    }
  },
  created () {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification)
    }, 10000)
  },
  beforeDestroy () {
    clearTimeout(this.timeout)
  },
  methods: {
    ...mapActions(['removeNotification'])
  }
}
</script>

<style>

</style>
