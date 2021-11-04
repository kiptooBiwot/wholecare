<template>
  <div class="md:w-10/12 bg-white border text-xs rounded-md m-1 mx-auto shadow-sm">
    <NuxtLink class="flex text-gray-500 justify-between items-center hover:shadow-lg px-4 py-3" :to="'/dashboard/invoice/' + invoice._id">
      <div class="">
        <span class="font-bold">#{{ invoice.id }}</span>
      </div>
      <div>
        <span>{{ invoice.paymentDueDate | formatDate }}</span>
      </div>
      <div>
        <span>{{ invoice.clientName }}</span>
      </div>
      <div class="flex text-blue-500">
        ${{ invoice.invoiceTotal }}
      </div>
      <div class="flex">
        <span v-if="invoice.invoicePaid" class="px-4 py-0.5 inline-flex items-center text-xs leading-5 rounded-sm bg-green-100 text-green-400">
          <span class="flex-shrink-0 w-2 h-2 mr-1 rounded-full bg-green-500 " />
          Paid
        </span>
        <span v-if="invoice.invoiceDraft" class="px-4 py-0.5 inline-flex items-center text-xs leading-5 rounded-sm bg-yellow-100 text-yellow-400">
          <span class="flex-shrink-0 w-2 h-2 mr-1 rounded-full bg-yellow-500 " />
          Draft
        </span>
        <span v-if="invoice.invoicePending" class="px-4 py-0.5 inline-flex items-center text-xs leading-5 rounded-sm bg-red-100 text-red-400">
          <span class="flex-shrink-0 w-2 h-2 mr-1 rounded-full bg-red-500 " />
          Pending
        </span>
      </div>
      <div>
        <svg class="w-3 h-3 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.filter('formatDate', function (value) {
  if (value) {
    return Intl.DateTimeFormat('en-AU', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(value))
    // return Intl.toLocaleDateString('us-GB').format(new Date(value))
  }
})

export default {
  name: 'Invoice',
  props: {
    invoice: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
