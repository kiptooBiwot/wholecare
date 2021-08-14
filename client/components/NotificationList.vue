<template>
  <div class="fixed top-0 right-0 mr-1 mt-1 w-96">
    <notification-message
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NotificationMessage from './NotificationMessage.vue'

export default {
  components: {
    NotificationMessage
  },
  computed: {
    ...mapState(['notifications'])
  }
}
</script>

<style>

</style>
