<template>
  <div class="bg-white w-full md:w-3/5 mx-auto h-auto p-6 shadow-xl rounded-lg space-y-4">
    <div class="w-full text-lg text-gray-500 font-bold justify-end md:text-xl md:font-bold">
      Community Support Needs
    </div>
    <div class="block">
      <label for="assistance-getting-around" class="text-xs font-medium text-gray-500">Do you need assistance getting around the community? If so, please provide details</label>
      <textarea
        id="assistance-getting-around"
        v-model="assistanceGettingAround"
        type="text"
        name="assistance-getting-around"
      />
    </div>
    <div class="block">
      <label for="transport-assistance" class="text-xs font-medium text-gray-500">Do you need assistance to use transport? If so, provide details</label>
      <textarea
        id="transport-assistance"
        v-model="transportAssistance"
        type="text"
        name="transport-assistance"
      />
    </div>
    <div class="block">
      <label for="assistance-to-activities" class="text-xs font-medium text-gray-500">Do you need assistance to access these activities? If yes, provide details</label>
      <textarea
        id="assistance-to-activities"
        v-model="assistanceToActivities"
        type="text"
        name="assistance-to-activities"
      />
    </div>
    <div class="block">
      <label for="transport-type" class="text-xs font-medium text-gray-500">What type of transport do you mainly use?</label>
      <textarea
        id="transport-type"
        v-model="transportType"
        type="text"
        name="transport-type"
      />
    </div>
    <div class="block">
      <label for="activities" class="text-xs font-medium text-gray-500">Do you participate in any activities (such as employment, training, or community activities)? If yes, provide details.</label>
      <textarea
        id="activities"
        v-model="communityActivities"
        type="text"
        name="activities"
      />
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  data: () => ({
  }),
  computed: {
    ...mapFields('participants', [
      'assistanceGettingAround',
      'transportAssistance',
      'assistanceToActivities',
      'transportType',
      'communityActivities'
    ])
  }
}
</script>

<style>

</style>
