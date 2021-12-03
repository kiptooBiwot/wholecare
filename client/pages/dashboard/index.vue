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
          icon:
            'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
          numberOfItems: null,
          colorOfIcon: 'text-green',
          cardText: 'Participants',
          urlLink: '/dashboard/participant/list-participants'
        },
        {
          icon:
            'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
          numberOfItems: null,
          colorOfIcon: 'text-orange',
          cardText: 'Number of Staff',
          urlLink: '/dashboard/staff'
        },
        {
          icon:
            'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
          numberOfItems: null,
          colorOfIcon: 'text-red',
          cardText: 'Invoices',
          urlLink: '/dashboard/invoice'
        }
      ]
    }
  },
  computed: {
    ...mapState('authentication', ['users']),
    ...mapState('participants', ['participants']),
    ...mapState('invoice', ['invoices'])
  },
  watch: {
    users: {
      handler () {
        this.cardItems[1].numberOfItems = this.users.length
      },
      immediate: true
    },
    participants: {
      handler () {
        if (!this.participants) {
          this.getParticipants()
        } else {
          this.cardItems[0].numberOfItems = this.participants.length
        }
      },
      immediate: true
    },
    invoices: {
      handler () {
        if (!this.invoices) {
          this.getInvoices()
        } else {
          this.cardItems[2].numberOfItems = this.invoices.length
        }
      },
      immediate: true
    }
  },
  async mounted () {
    await this.$store.dispatch('authentication/getUsers')
    // this.getUsers
    await this.getParticipants()
    await this.getInvoices()
  },
  methods: {
    ...mapActions('participants', ['getParticipants']),
    ...mapActions('invoice', ['getInvoices'])
  }
}
</script>
<style></style>
