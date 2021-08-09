<template>
  <div v-if="isVisible">
    <div class="fixed inset-0 z-50 flex justify-center items-center">
      <div class="flex flex-col m-2 max-w-5xl rounded shadow-lg bg-white">
        <!-- heading -->
        <div class="md:p-3 p-2">
          <div class="flex justify-between items-start">
            <h3 class="">
              <slot name="title" />
            </h3>
            <div class="p-1 leading-none hover:text-gray-900 cursor-pointer" @click="emitCancel">
              <div class="text-xl font-semibold h-6 w-6">
                <span>x</span>
              </div>
            </div>
          </div>
        </div>
        <hr class="text-gray-100">
        <!-- body -->
        <div class="md:p-6 p-3">
          <slot name="body" />
        </div>
        <!-- footer -->
        <slot name="footer">
          <div class="p-6 flex justify-end items-center">
            <button class="bg-pink-500 text-white text-base py-2 px-4 rounded-lg" @click="emitCancel">
              <slot name="clear-btn">
                Clear
              </slot>
            </button>
            <button class="bg-pink-500 ml-2 text-white text-base py-2 px-4 rounded-lg" @click="emitSubmit">
              <slot name="submit-btn">
                Submit
              </slot>
            </button>
          </div>
        </slot>
      </div>
    </div>
    <div class="opacity-50 fixed inset-0 z-index-40 bg-black" @click="emitCancel" />
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitCancel () {
      this.$emit('cancel')
    },
    emitSubmit () {
      this.$emit('mySubmit')
    }
  }
}
</script>

<style>
</style>
