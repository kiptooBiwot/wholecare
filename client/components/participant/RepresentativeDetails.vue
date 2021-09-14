<template>
  <div class="bg-white w-full h-auto p-6 shadow-xl rounded-lg">
    <div class="w-full text-gray-500 text-lg font-bold justify-end md:text-xl md:font-bold">
      Representative's Details
    </div>
    <div class="block md:flex md:justify-between md:gap-6">
      <div class="block md:w-1/2">
        <div class="block">
          <label for="firstName" class="text-xs font-medium text-gray-500">First Name*</label>
          <input
            id="first-name"
            type="text"
            name="first-name"
            class=""
          >
        </div>
        <div class="block">
          <label for="middleName" class="text-xs font-medium text-gray-500">Middle Name</label>
          <input
            id="middle-name"
            type="text"
            name="middle-name"
          >
        </div>
        <div class="block">
          <label for="surname" class="text-xs font-medium text-gray-500">Surname*</label>
          <input
            id="surname"
            type="text"
            name="surname"
          >
        </div>
        <div class="block">
          <label for="relationship" class="text-xs font-medium text-gray-500">Relationship to Participant</label>
          <input
            id="relationship"
            type="text"
            name="relationship"
          >
        </div>
        <div class="block">
          <label for="mobile-no" class="text-xs font-medium text-gray-500">Mobile Number</label>
          <!-- pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" -->
          <input
            id="mobile-no"
            type="tel"
            name="mobile-no"
          >
        </div>
        <div class="block">
          <label for="home-no" class="text-xs font-medium text-gray-500">Home Number</label>
          <!-- pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" -->
          <input
            id="home-no"
            type="tel"
            name="home-no"
          >
        </div>
      </div>
      <div class="block md:w-1/2">
        <div class="block">
          <label for="work-no" class="text-xs font-medium text-gray-500">Work Phone</label>
          <!-- pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" -->
          <input
            id="work-no"
            type="tel"
            name="work-no"
          >
        </div>
        <div class="block">
          <label for="organization" class="text-xs font-medium text-gray-500">Organization</label>
          <input
            id="organization"
            type="text"
            name="organization"
            class=""
          >
        </div>
        <div class="block">
          <label for="position" class="text-xs font-medium text-gray-500">Position</label>
          <input
            id="position"
            type="text"
            name="position"
            class=""
          >
        </div>
        <div class="block">
          <label for="email" class="text-xs font-medium text-gray-500">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
          >
        </div>
        <div class="block">
          <label for="current-address" class="text-xs font-medium text-gray-500">Current Address</label>
          <textarea
            id="current-address"
            name="address"
            rows=""
            columns=""
          />
        </div>
      </div>
    </div>
    <div class="mt-6">
      <button class="px-3 py-1.5 rounded-md bg-blue-700 text-blue-100 font-semibold text-xs hover:bg-blue-800 hover:text-white" @click.prevent="">
        Add Representative
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
