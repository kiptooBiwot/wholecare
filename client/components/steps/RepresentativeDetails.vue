<template>
  <div>
    <div
      v-for="(repDetail, index) in repDetails"
      :key="index"
      class="bg-white w-full h-auto p-6 mb-8 shadow-xl rounded-lg"
    >
      <div class="flex items-center justify-between">
        <div
          class="w-full text-gray-500 text-lg font-bold justify-end md:text-xl md:font-bold"
        >
          Representative {{ index + 1 }} Details
        </div>
        <div>
          <svg
            class="w-6 h-6 rounded-full border p-1 text-gray-500 hover:text-white hover:bg-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            @click.prevent="deleteCard(index)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div class="block md:flex md:justify-between md:gap-6">
        <div class="block md:w-1/2">
          <div class="block">
            <label
              for="firstName"
              class="text-xs font-medium text-gray-500"
            >First Name*</label>
            <input
              id="first-name"
              v-model="repDetail.firstName"
              type="text"
              name="first-name"
              class=""
            >
          </div>
          <div class="block">
            <label
              for="middleName"
              class="text-xs font-medium text-gray-500"
            >Middle Name</label>
            <input
              id="middle-name"
              v-model="repDetail.middleName"
              type="text"
              name="middle-name"
            >
          </div>
          <div class="block">
            <label
              for="surname"
              class="text-xs font-medium text-gray-500"
            >Surname*</label>
            <input
              id="surname"
              v-model="repDetail.surname"
              type="text"
              name="surname"
            >
          </div>
          <div class="block">
            <label
              for="relationship"
              class="text-xs font-medium text-gray-500"
            >Relationship to Participant</label>
            <input
              id="relationship"
              v-model="repDetail.relationship"
              type="text"
              name="relationship"
            >
          </div>
          <div class="block">
            <label
              for="mobile-no"
              class="text-xs font-medium text-gray-500"
            >Mobile Number</label>
            <!-- pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" -->
            <input
              id="mobile-no"
              v-model="repDetail.mobileNo"
              type="tel"
              name="mobile-no"
            >
          </div>
          <div class="block">
            <label
              for="home-no"
              class="text-xs font-medium text-gray-500"
            >Home Number</label>
            <!-- pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" -->
            <input
              id="home-no"
              v-model="repDetail.homeNo"
              type="tel"
              name="home-no"
            >
          </div>
        </div>
        <div class="block md:w-1/2">
          <div class="block">
            <label
              for="work-no"
              class="text-xs font-medium text-gray-500"
            >Work Phone</label>
            <!-- pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" -->
            <input
              id="work-no"
              v-model="repDetail.workNo"
              type="tel"
              name="work-no"
            >
          </div>
          <div class="block">
            <label
              for="organization"
              class="text-xs font-medium text-gray-500"
            >Organization</label>
            <input
              id="organization"
              v-model="repDetail.organization"
              type="text"
              name="organization"
              class=""
            >
          </div>
          <div class="block">
            <label
              for="position"
              class="text-xs font-medium text-gray-500"
            >Position</label>
            <input
              id="position"
              v-model="repDetail.position"
              type="text"
              name="position"
              class=""
            >
          </div>
          <div class="block">
            <label
              for="email"
              class="text-xs font-medium text-gray-500"
            >Email Address</label>
            <input
              id="email"
              v-model="repDetail.emailAddress"
              type="email"
              name="emailAddress"
            >
          </div>
          <div class="block">
            <label
              for="current-address"
              class="text-xs font-medium text-gray-500"
            >Current Address</label>
            <textarea
              id="current-address"
              v-model="repDetail.currentAddress"
              name="address"
              rows=""
              columns=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <button
        class="px-3 py-1.5 rounded-md bg-blue-700 text-blue-100 font-semibold text-xs hover:bg-blue-800 hover:text-white"
        @click.prevent="addRepresentative"
      >
        Add Representative
      </button>
    </div>
  </div>
</template>

<script>
import { mapMultiRowFields } from 'vuex-map-fields'
import { mapMutations } from 'vuex'

export default {
  computed: {
    ...mapMultiRowFields('participants', ['repDetails'])
  },
  methods: {
    ...mapMutations('participants', ['addRepresentative', 'deleteCard'])
  }
}
</script>

<style></style>
