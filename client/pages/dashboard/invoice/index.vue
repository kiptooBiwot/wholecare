<template>
  <div v-if="invoicesLoaded" class="w-full bg-white rounded-md p-6 min-h-screen text-gray-500">
    <div v-if="invoicesLoaded" class="w-full  rounded-md p-6 min-h-screen text-gray-500">
      <!-- <span class="h3">Invoices home page.</span> -->
      <div class="flex flex-row justify-between mb-8">
        <div class="flex flex-col">
          <span class="h3">Invoices</span>
          <span class="text-gray-500 text-xs font-semibold">There are {{ invoices.length }} invoices</span>
        </div>
        <div class="flex items-center">
          <!-- Filter Dropdown -->
          <div class="relative" @keydown.esc="toggleFilterMenu = false">
            <button class="relative z-10 flex items-center text-gray-500  border rounded-full px-2 py-2 mr-2 hover:text-gray-800 hover:bg-gray-100" @click.prevent="toggleFilterMenu = !toggleFilterMenu">
              <span class="text-xs font-semibold">Filter by status<span v-if="filteredInvoice">: {{ filteredInvoice }}</span></span>
              <svg
                class="h-4 pl-1 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <button v-if="toggleFilterMenu" tabindex="-1" class="fixed inset-0 h-full w-full bg-black opacity-20 cursor-default" @click="toggleFilterMenu = !toggleFilterMenu" />
            <div :class="toggleFilterMenu ? 'block' : 'hidden'" class="flex flex-col absolute overflow-hidden w-36 text-gray-500 text-xs font-semibold bg-white rounded-md shadow-lg">
              <NuxtLink to="/dashboard/invoice">
                <div class="flex items-center hover:text-blue-600 px-4 py-3 hover:bg-gray-300" @click="filteredInvoices">
                  <span>
                    Draft
                  </span>
                </div>
              </NuxtLink><NuxtLink to="/dashboard/invoice">
                <div class="flex items-center hover:text-blue-600 px-4 py-3 hover:bg-gray-300" @click="filteredInvoices">
                  <span>
                    Pending
                  </span>
                </div>
              </NuxtLink><NuxtLink to="/dashboard/invoice">
                <div class="flex items-center hover:text-blue-600 px-4 py-3 hover:bg-gray-300" @click="filteredInvoices">
                  <span>
                    Paid
                  </span>
                </div>
              </NuxtLink><NuxtLink to="/dashboard/invoice">
                <div class="flex items-center hover:text-blue-600 px-4 py-3 hover:bg-gray-300" @click="filteredInvoices">
                  <span>
                    Clear Filters
                  </span>
                </div>
              </NuxtLink>
            </div>
          </div>
          <!-- NEW INVOICE BUTTON -->
          <div class="text-gray-500">
            <NuxtLink to="/dashboard/invoice/new-invoice">
              <button class="flex items-center py-2 px-2 rounded-full bg-blue-500 text-white hover:text-blue-100 hover:bg-blue-600" @click="toggleEditStatus">
                <svg class="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span class="text-sm">New Invoice</span>
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div v-if="invoices.length > 0" class="md:w-10/12 text-xs font-medium px-4 py-1 mx-auto">
        <div class="flex justify-between text-xs font-bold">
          <span class="text-gray-500">Reference No.</span>
          <span class="text-gray-500">Due Date</span>
          <span class="text-gray-500">Client</span>
          <span class="text-gray-500">Amount</span>
          <span class="text-gray-500">Status</span>
          <span class="text-gray-500" />
        </div>
      </div>
      <div v-if="invoices.length > 0">
        <!-- Filter from filteredData if no filtered data **invoices is looped through** -->
        <invoice v-for="(invoice, index) in filteredData" :key="index" :invoice="invoice" />
      </div>
      <div v-else class="flex flex-col bg-white p-4 w-full my-4 rounded-md h-full mx-auto items-center">
        <img src="@/assets/img/no-data.jpg" alt="No Invoices Found" width="250" height="250">
        <h3 class="h3">
          There is Nothing Here
        </h3>
        <span class="text-sm text-gray-500">
          Create a new Invoice by clicking the New Invoice button and get started.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import Invoice from '../../../components/invoice/invoice.vue'

export default {
  components: { Invoice },
  data: () => ({
    toggleFilterMenu: false,
    filteredInvoice: null
  }),
  computed: {
    ...mapState('invoice', ['invoicesLoaded', 'invoices', 'editInvoice']),

    // Filter invoices by their status
    filteredData () {
      return this.invoices.filter((invoice) => {
        if (this.filteredInvoice === 'Draft') {
          return invoice.invoiceDraft === true
        }
        if (this.filteredInvoice === 'Pending') {
          return invoice.invoicePending === true
        }
        if (this.filteredInvoice === 'Paid') {
          return invoice.invoicePaid === true
        }
        return this.invoices
      })
    }
  },
  created () {
    this.getInvoices()
  },
  methods: {
    ...mapActions({ getInvoices: 'invoice/getInvoices' }),
    ...mapMutations({ TOGGLE_EDIT_INVOICE: 'invoice/TOGGLE_EDIT_INVOICE' }),
    toggleEditStatus () {
      if (this.editInvoice) {
        this.TOGGLE_EDIT_INVOICE()
      }
    },

    filteredInvoices (e) {
      if (e.target.innerText === 'Clear Filters') {
        this.filteredInvoice = null
        this.toggleFilterMenu = !this.toggleFilterMenu
        return
      }
      this.filteredInvoice = e.target.innerText
      this.toggleFilterMenu = !this.toggleFilterMenu
    }
  }
}
</script>

<style>

</style>
