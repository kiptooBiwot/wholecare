<template>
  <div class="w-full bg-white rounded-md p-6 min-h-screen text-gray-500">
    <invoice-modal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import invoiceNext from '../../../components/invoice/invoiceNext.vue'
import invoiceModal from '../../../components/invoice/invoiceModal.vue'

export default {
  // components: { invoiceNext },
  components: { invoiceModal },
  computed: {
    ...mapState('invoice', ['invoiceModal'])
  }

}
</script>

<style>

</style>
