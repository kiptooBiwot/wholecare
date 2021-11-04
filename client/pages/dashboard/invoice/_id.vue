<template>
  <div v-if="currentInvoice" class="bg-white w-full min-h-screen rounded-md p-6 text-gray-500 space-y-6">
    <NuxtLink to="/dashboard/invoice" class="flex items-center text-xs text-gray-500 mb-5 hover:text-blue-400">
      <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
      Go Back
    </NuxtLink>
    <!-- Header -->
    <div class="flex text-gray-500 p-4 bg-gray-100 rounded-lg text-sm justify-between items-center">
      <div class="flex items-center">
        <span class="mr-3">Status</span>
        <div class="flex">
          <span v-if="currentInvoice.invoicePaid" class="px-5 py-2 inline-flex items-center text-xs leading-5 rounded-md bg-green-100 text-green-400">
            <span class="flex-shrink-0 w-2 h-2 mr-1 rounded-full bg-green-400 " />
            Paid
          </span>
          <span v-if="currentInvoice.invoiceDraft" class="px-5 py-2 inline-flex items-center text-xs leading-5 rounded-md bg-yellow-100 text-yellow-400">
            <span class="flex-shrink-0 w-2 h-2 mr-1 rounded-full bg-yellow-500 " />
            Draft
          </span>
          <span v-if="currentInvoice.invoicePending" class="px-5 py-2 inline-flex items-center text-xs leading-5 rounded-md bg-red-100 text-red-400">
            <span class="flex-shrink-0 w-2 h-2 mr-1 rounded-full bg-red-500 " />
            Pending
          </span>
        </div>
      </div>
      <div class="space-x-2 text-xs">
        <button class="rounded-full text-green-600 px-4 py-2 border border-green-600 hover:bg-green-500 hover:text-white" @click.prevent="toggleEditInvoice">
          Edit
        </button>
        <button class="rounded-full text-red-100 bg-red-500 px-4 py-2 border border-red-500 hover:bg-red-700 hover:text-white" @click.prevent="deleteInvoice(currentInvoice._id)">
          Delete
        </button>
        <button v-if="currentInvoice.invoicePending" class="px-4 py-2 rounded-md bg-blue-400 text-white border border-blue-400 hover:bg-blue-600 hover:text-blue-100" @click.prevent="updateStatusToPaid(currentInvoice._id)">
          Mark as Paid
        </button>
        <button v-if="currentInvoice.invoiceDraft || currentInvoice.invoicePaid" class="px-4 py-2 rounded-full bg-yellow-400 text-white border border-yellow-400 hover:bg-yellow-500 hover:text-yellow-100" @click.prevent="updateStatusToPending(currentInvoice._id)">
          Mark as Pending
        </button>
      </div>
    </div>
    <!-- Invoice details -->
    <!-- top -->
    <div class="flex justify-between mt-6">
      <div class="flex flex-col">
        <div>
          <div class="h3 flex flex-col">
            <span class="text-xs font-normal text-gray-400">Ref No.</span>
            <span>#{{ currentInvoice.id }}</span>
          </div>
          <div class="md:mr-64">
            <span class="text-xs flex-wrap uppercase font-semibold tracking-wider">{{ currentInvoice.productDescription }}</span>
          </div>
        </div>
        <div class="flex justify-between mt-10">
          <div class="flex flex-col text-xs">
            <h4 class="uppercase">
              Invoice Date
            </h4>
            <p class="tracking-wide font-bold text-xs text-gray-600">
              {{ currentInvoice.invoiceDate | formatDate }}
            </p>
          </div>
          <div class="flex flex-col text-xs">
            <h4 class="uppercase">
              Due On
            </h4>
            <p class="tracking-wide font-bold text-xs text-gray-600">
              {{ currentInvoice.paymentDueDate | formatDate }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-end text-xs ">
        <div class="w-64">
          <img class="object-contain" src="~/assets/img/logo.png" alt="Whole Care Solutions Logo">
        </div>
        <p>{{ currentInvoice.billerStreetAddress }}</p>
        <p>{{ currentInvoice.billerCity }}</p>
        <p>{{ currentInvoice.billerZipCode }}</p>
        <p>{{ currentInvoice.billerCountry }}</p>
      </div>
    </div>

    <!-- Middle -->
    <div class="flex justify-between">
      <div class="flex flex-col text-xs">
        <h4 class="uppercase tracking-wide font-bold">
          Bill To
        </h4>
        <p class="text-sm py-1 font-medium">
          {{ currentInvoice.clientName }}
        </p>
        <p>{{ currentInvoice.clientStreetAddress }}</p>
        <p>{{ currentInvoice.clientCity }}</p>
        <p>{{ currentInvoice.clientZipCode }}</p>
        <p>{{ currentInvoice.clientCountry }}</p>
      </div>
      <div class="flex flex-col text-xs">
        <h4 class="uppercase tracking-wide font-bold">
          Send To
        </h4>
        <p class="text-sm py-1">
          {{ currentInvoice.clientEmail }}
        </p>
      </div>
    </div>

    <!-- Bottom -->
    <div class="flex flex-col text-xs">
      <!-- TABLE DATA -->
      <div>
        <table class="min-w-full divide-y divide-gray-200 border-separate border rounded">
          <thead class="bg-gray-100">
            <tr>
              <th scope="col" class="px-6 py-3 w-1/16 text-left text-xs font-medium text-gray-500 justify-items-center uppercase tracking-wider">
                #
              </th>
              <th scope="col" class="px-6 py-3 w-3/4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item Name
              </th>
              <th scope="col" class="px-6 py-3 w-1/16 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th scope="col" class="px-6 py-3 w-1/16 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" class="px-6 py-3 w-1/16 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
            <!-- <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Edit</span>
            </th> -->
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(item, index) in currentInvoice.invoiceItemList" :key="index">
              <td class="px-6 py-1 whitespace-nowrap justify-items-center">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-xs font-medium text-gray-500">
                      {{ index + 1 }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-2 py-1 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-xs font-medium text-gray-500">
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-1 whitespace-nowrap">
                <div class="text-xs text-gray-500">
                  {{ item.qty }}
                </div>
              </td>
              <td class="px-6 py-1 whitespace-nowrap">
                <div class="text-xs text-gray-500">
                  {{ item.price }}
                </div>
              </td>
              <td class="px-6 py-1 whitespace-nowrap text-xs text-gray-500">
                ${{ item.total }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex justify-between pr-5 mb-6">
      <p class="ml-20 text-sm">
        Amount Due:
      </p>
      <p class="">
        <span class="text-gray-400 text-xs align-top">$</span><span class="text-gray-800 text-2xl tracking-tighter align-top">{{ currentInvoice.invoiceTotal }}</span><span class="text-gray-400 text-xs align-top">.00</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Vue from 'vue'

Vue.filter('formatDate', function (value) {
  if (value) {
    return Intl.DateTimeFormat('en-AU', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(value))
    // return Intl.toLocaleDateString('us-GB').format(new Date(value))
  }
})

export default {
  name: 'InvoiceView',
  data: () => ({
    currentInvoiceData: null
  }),
  computed: {
    ...mapState('invoice', ['currentInvoice', 'editInvoice'])
  },
  created () {
    this.getCurrentInvoice()
  },
  methods: {
    ...mapMutations(
      {
        SET_CURRENT_INVOICE: 'invoice/SET_CURRENT_INVOICE',
        TOGGLE_EDIT_INVOICE: 'invoice/TOGGLE_EDIT_INVOICE',
        TOGGLE_INVOICE: 'invoice/TOGGLE_INVOICE'
      }
    ),
    ...mapActions('invoice', [
      'DELETE_INVOICE_DB',
      'UPDATE_STATUS_TO_PENDING',
      'UPDATE_STATUS_TO_PAID',
      'GET_ONE_INVOICE'
    ]),
    getCurrentInvoice () {
      this.GET_ONE_INVOICE(this.$route.params.id)
      // this.SET_CURRENT_INVOICE(this.$route.params.id)
      // Get the ARRAY data from state and put in a data object locally before access
      // this.currentInvoiceData = this.currentInvoice
    },

    toggleEditInvoice () {
      if (!this.editInvoice) {
        this.TOGGLE_EDIT_INVOICE()
      }
      // this.$router.push(`/dashboard/invoice/edit/${this.currentInvoiceData.id}`)
      this.$router.push('/dashboard/invoice/new-invoice')
    },
    async deleteInvoice (invoiceId) {
      await this.DELETE_INVOICE_DB(invoiceId)

      this.$router.push('/dashboard/invoice')
    },
    async updateStatusToPaid (invoiceId) {
      await this.UPDATE_STATUS_TO_PAID(invoiceId)

      // this.$mount()
      // this.$forceUpdate()
    },
    async updateStatusToPending (invoiceId) {
      await this.UPDATE_STATUS_TO_PENDING(invoiceId)

      // this.$mount()
    }
  }

}
</script>

<style>

</style>
