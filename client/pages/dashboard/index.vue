<template>
  <div>
    <div
      class="w-full bg-white rounded-md min-h-screen p-4 shadow-md space-y-4"
    >
      <span class="h3">Welcome</span>

      <div class="md:grid md:grid-cols-2 lg:grid-cols-4 justify-between">
        <div v-for="(item, index) in cardItems" :key="index">
          <tile-card :item="item" />
        </div>
      </div>
      {{ cardItems[0].numberOfItems }}
      <!-- {{ cardItems.numberOfItems[index] }}
      {{ cardItems.numberOfItems[index] }} -->
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
import { mapState, mapActions } from 'vuex'
import tileCard from '../../components/dashboard/main-dashboard/tileCard.vue'
import ManageStaff from '../../components/staff/ManageStaff.vue'
export default {
  components: { tileCard, ManageStaff },
  layout: 'dashboard',
  data () {
    return {
      cardItems: [
        {
          icon: 'Icon goes Here!',
          numberOfItems: null,
          colorOfIcon: 'text-green',
          cardText: 'Participants'
        },
        {
          icon: 'Icon goes Here!',
          numberOfItems: null,
          colorOfIcon: 'text-green',
          cardText: 'Number of Staff'
        },
        {
          icon: 'Icon goes Here!',
          numberOfItems: null,
          colorOfIcon: 'text-green',
          cardText: 'Invoices'
        }
      ]
    }
  },
  computed: {
    ...mapState('authentication', ['users']),
    ...mapState('participants', ['participants']),
    ...mapState('invoice', ['invoices']),

    setVal: () => {
      this.setValues()
    }
  },
  async created () {
    await this.$store.dispatch('authentication/getUsers')
    // this.getUsers
    await this.getParticipants()
    await this.getInvoices()
  },
  methods: {
    ...mapActions('participants', ['getParticipants']),
    ...mapActions('invoice', ['getInvoices']),

    setValues () {
      this.cardItems[0].numberOfItems = this.particpants.length
      this.cardItems[1].numberOfItems = this.users.length
      this.cardItems[2].numberOfItems = this.invoices.length
    }
  }
}
</script>
<style></style>
