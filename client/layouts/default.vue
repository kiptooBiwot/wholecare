<template>
  <div class="body">
    <Nuxt />
    <notification-list />
    <!-- <notification-list />
    <notification-list />
    <notification-list /> -->
  </div>
</template>

<script>
import NotificationList from '../components/NotificationList.vue'

export default {
  components: { NotificationList }
}
</script>

<style>

</style>
