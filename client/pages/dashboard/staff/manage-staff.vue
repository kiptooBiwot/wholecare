<template>
  <div class="bg-white rounded-md py-4 px-6 shadow-md">
    <span class="h3">
      Manage Staff
    </span>
    <div class="flex flex-col mt-4 mb-5">
      <manage-staff :users="users" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ManageStaff from '../../../components/staff/ManageStaff.vue'

export default {
  components: { ManageStaff },
  layout: 'dashboard',
  data: () => ({
    toggleActive: false
  }),
  computed: {
    ...mapState('authentication', ['users'])
    // ...mapActions('authentication', (['getUsers']))
    // this.$store.dispatch('authentication/getUsers')
  },
  async mounted () {
    await this.$store.dispatch('authentication/getUsers')
    // this.getUsers
  },
  methods: {
    changeAccountStatus () {
      alert('To be implemented in a short while!')
    }
  }
}
</script>

<style></style>
