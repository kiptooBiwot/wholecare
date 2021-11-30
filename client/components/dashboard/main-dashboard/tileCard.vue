<template>
  <div>
    <nuxt-link to="/dashboard/participant/list-participants">
      <div
        class="bg-white rounded-md border border-gray-100 md:gap-4 sm:w-full lg:w-60 h-32 shadow-lg p-4 hover:shadow-2xl  hover:scale-110 transform-gpu transition duration-500 ease-out"
      >
        <div class="flex justify-between mt-4">
          <div>
            <svg
              class="w-16 h-16 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div class="flex-col justify-between">
            <div class="text-2xl text-green-600 font-bold">
              120
            </div>
            <div class="text-gray-600">
              Participants
            </div>
          </div>
          {{ items }}
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style></style>
