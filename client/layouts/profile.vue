<template>
  <div class="flex flex-row min-h-screen relative bg-gray-200">
    <!-- Mobile menu bar -->
    <!-- Left NAV -->
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
export default {
  name: 'Profile',
  components: {},
  data: () => ({})
}
</script>

<style></style>
