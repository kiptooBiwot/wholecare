<template>
  <div class="flex flex-row min-h-screen relative bg-gray-200">
    <!-- Mobile menu bar -->
    <!-- Left NAV -->
    <sidebar class="hidden md:block" />
    <mobile-menu
      v-show="showMobileMenu"
      @hideMobileMenu="showMobileMenu = false"
    />
    <!-- Main Content -->
    <div class="flex-1">
      <!-- NAV -->
      <div class="md:ml-2">
        <navbar @showMobileMenu="showMobileMenu = true" />
      </div>
      <div class="px-2 py-4">
        <Nuxt keep-alive />
      </div>
    </div>
  </div>
</template>

<script>
// import Modal from '../components/Modal.vue'
// import UserInfo from '../components/auth/userInfo.vue'
import Sidebar from '../components/dashboard/sidebar.vue'
import Navbar from '../components/dashboard/navbar.vue'
import MobileMenu from '../components/dashboard/mobileMenu.vue'

export default {
  components: {
    Sidebar,
    Navbar,
    MobileMenu
  },
  data: () => ({
    showMobileMenu: false,
    showModal: false,
    isVisible: false
  })
}
</script>

<style></style>
