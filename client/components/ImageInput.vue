<template>
  <div>
    <input
      ref="file"
      type="file"
      accept="images/*"
      class=""
      @change="change"
    >
    <!-- <div class="relative inline-block">
      <nuxt-img :src="src" alt="Profile Picture" class="h-24 w-24 rounded-full border border-blue-300 object-cover" />
      <div class="absolute top-0 h-full w-full bg-black rounded-full bg-opacity-25 flex justify-center items-center">
        <button type="button" @click="browse">
          Browse
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    defaultAvatar: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      src: this.defaultAvatar,
      file: null
    }
  },
  methods: {
    browse () {
      this.$refs.file.click()
    },
    change (e) {
      this.file = e.target.files[0]

      this.$emit('input', this.file)
      const reader = new FileReader()
      reader.readAsDataURL(this.file)

      reader.onLoad = (e) => {
        this.src = e.target.result
      }
    }
  }
}
</script>

<style>

</style>
