<template>
  <div>
    <nuxt-link :to="item.urlLink">
      <div
        class="bg-white rounded-md border border-gray-100 md:gap-4 sm:w-full lg:w-60 h-32 shadow-lg p-4 hover:shadow-2xl  hover:scale-110 transform-gpu transition duration-500 ease-out"
      >
        <div class="flex justify-between mt-4">
          <div>
            <svg
              class="w-16 h-16 text-purple-400"
              :class="item.colorOfIcon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="item.icon"
              />
            </svg>
          </div>
          <div class="flex-col justify-between">
            <div class="text-2xl text-green-600 font-bold">
              {{ item.numberOfItems }}
            </div>
            <div class="text-gray-600">
              {{ item.cardText }}
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
