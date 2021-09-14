<template>
  <div class="bg-white w-full md:w-3/5 mx-auto h-auto p-6 shadow-xl rounded-lg">
    <div class="w-full text-lg text-gray-500 font-bold justify-end md:text-xl md:font-bold">
      Behavior Support Needs
    </div>
    <div class="block">
      <label for="upsetting-behavior" class="text-xs font-medium text-gray-500">Describe how you would react if someone you lived with did find something you found disrupting or upsetting?</label>
      <textarea
        id="upsetting-behavior"
        type="text"
        name="upsetting-behavior"
      />
    </div>
    <hr class="mb-3 mt-3">
    <div class="block">
      <label for="concerning-behavior" class="text-xs font-medium text-gray-500">Do you have any behaviors of concern that require specific support? If so, provide detail</label>
      <textarea
        id="concerning-behavior"
        type="text"
        name="concerning-behavior"
      />
    </div>
    <hr class="mb-3 mt-3">
    <div class="block">
      <label for="disruptive-behavior" class="text-xs font-medium text-gray-500">Do you do anything that others might find disruptive?</label>
      <textarea
        id="disruptive-behavior"
        type="text"
        name="disruptive-behavior"
      />
    </div>
    <hr class="mb-3 mt-3">
    <fieldset class="border px-4 py-2 mb-3 border-gray-200 rounded-md">
      <legend class="text-xs px-1 font-medium text-gray-500">
        Do you have any behavior support plan?
      </legend>
      <input id="behavior-support-yes" v-model="hasBehaviorSupportPlan" type="radio" name="behavior-support" :value="true">
      <label for="behavior-support-yes" class="text-xs font-medium text-gray-500">Yes (If yes, please attach)</label><br>
      <input id="behavior-support-no" v-model="hasBehaviorSupportPlan" type="radio" name="behavior-support" :value="false">
      <label for="behavior-support-no" class="text-xs font-medium text-gray-500">No</label>
      <div v-if="hasBehaviorSupportPlan === true" class="block">
        <label for="file" class="text-sm font-medium text-gray-500">Behavior support plan</label>
        <input
          ref="file"
          type="file"
          accept="images/*"
          class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm text-gray-500"
        >
        <!-- @change="change" -->
      </div>
    </fieldset>
    <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
      <legend class="text-xs px-1 font-medium text-gray-500">
        Do you have any risk assesment relating to your behavior or support needs?
      </legend>
      <input id="yes" type="radio" name="mobility-independent" value="yes">
      <label for="yes" class="text-xs font-medium text-gray-500">Yes (If yes, please attach)</label><br>
      <input id="no" type="radio" name="mobility-independent" value="no">
      <label for="no" class="text-xs font-medium text-gray-500">No</label>
      <div class="block">
        <label for="file" class="text-sm font-medium text-gray-500">Risk assessment plan</label>
        <input
          ref="file"
          type="file"
          accept="images/*"
          class="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm text-gray-500"
        >
        <!-- @change="change" -->
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  data: () => ({
    hasBehaviorSupportPlan: null
  })
}
</script>

<style>

</style>
