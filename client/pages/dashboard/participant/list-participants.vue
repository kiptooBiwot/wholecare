<template>
  <div class="bg-white rounded min-h-full p-6">
    <h3 class="h3 mb-4">
      List all Participants
    </h3>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <participant-card
        v-for="(participant, index) in participants"
        :key="index"
        :participant="participant"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ParticipantCard from '../../../components/participants/ParticipantCard.vue'

export default {
  components: {
    ParticipantCard
  },
  layout: 'dashboard',
  data: () => ({}),
  computed: {
    ...mapState('participants', ['participants']),
    ...mapActions('participants', ['getParticipants'])
  },
  async mounted () {
    await this.getParticipants
  }
}
</script>

<style></style>
