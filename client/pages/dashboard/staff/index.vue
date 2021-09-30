<template>
  <div>
    <div class="bg-white rounded-md p-4 min-h-screen">
      <h3 class="h3">
        All Staff
      </h3>
      <!-- <div class="grid md:grid-cols-4 gap-4"> -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <staff-card v-for="(staff, index) in users" :key="index" :staff="staff" />
      </div>
    </div>
  </div>
</template>

<script>
import StaffCard from '@/components/staff/StaffCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    StaffCard
  },
  layout: 'dashboard',
  data: () => ({
  }),
  computed: {
    ...mapState('authentication', (['users']))
    // ...mapActions('authentication', (['getUsers']))
    // this.$store.dispatch('authentication/getUsers')
  },
  async mounted () {
    await this.$store.dispatch('authentication/getUsers')
    // this.getUsers
  },
  methods: {}
}
</script>

<style>

</style>
