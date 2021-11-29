<template>
  <div>
    <div
      class="w-full bg-white rounded-md min-h-screen p-4 shadow-md space-y-4"
    >
      <span class="h3">Welcome</span>

      <div class="md:grid md:grid-cols-2 lg:grid-cols-4 justify-between">
        <tile-card />
        <tile-card />
        <tile-card />
        <tile-card />
      </div>
      <div class="flex gap-4">
        <div class="">
          <manage-staff :users="users" />
        </div>
        <div>
          <div class="bg-white w-60 rounded h-screen shadow-xl p-4">
            <span
              class="text-gray-400 text-base font-semibold"
            >Activity Feed</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import tileCard from '../../components/dashboard/main-dashboard/tileCard.vue'
import ManageStaff from '../../components/staff/ManageStaff.vue'
export default {
  components: { tileCard, ManageStaff },
  layout: 'dashboard',
  computed: {
    ...mapState('authentication', ['users'])
  },
  async mounted () {
    await this.$store.dispatch('authentication/getUsers')
    // this.getUsers
  }
}
</script>
<style></style>
