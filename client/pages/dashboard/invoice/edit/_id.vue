<template>
  <div class="flex justify-center items-center">
    <div ref="invoiceWrap" class="flex flex-col space-y-4 w-3/4 bg-white rounded-md shadow-md p-4 overflow-y-auto" @click.prevent="">
      <form ref="invoiceForm" action="" @submit.prevent="submitInvoice">
        <spinner v-show="loading" />
        <span class="h3">Edit Invoice</span>

        <!-- Bill From -->
        <div class="space-y-4">
          <span class="text-blue-400 text-xs font-semibold uppercase">Bill From</span>
          <div class="flex flex-col">
            <label class="text-xs" for="billerStreetAddress">Street Address</label>
            <input id="billerStreetAddress" v-model="billerStreetAddress" class="" type="text">
          </div>
          <div class="flex space-x-2">
            <div class="flex flex-col">
              <label class="text-xs" for="billerCity">City</label>
              <input id="billerCity" v-model="billerCity" class="" type="text">
            </div>
            <div class="flex flex-col">
              <label class="text-xs" for="billerZipCode">Zip Code</label>
              <input id="billerZipCode" v-model="billerZipCode" class="" type="text">
            </div>
            <div class="flex flex-col">
              <label class="text-xs" for="billerCountry">Country</label>
              <input id="billerCountry" v-model="billerCountry" class="" type="text">
            </div>
          </div>
        </div>

        <!-- Bill To -->
        <div class="space-y-4">
          <span class="text-blue-400 text-xs font-semibold uppercase">Bill To</span>
          <div class="flex flex-col">
            <label class="text-xs" for="clientName">Client's Name</label>
            <input id="clientName" v-model="clientName" class="" type="text">
          </div>
          <div class="flex flex-col">
            <label class="text-xs" for="clientEmail">Client's Email</label>
            <input id="clientEmail" v-model="clientEmail" class="" type="text">
          </div>
          <div class="flex flex-col">
            <label class="text-xs" for="clientStreetAddress">Client's Street Address</label>
            <input id="clientStreetAddress" v-model="clientStreetAddress" class="" type="text">
          </div>
          <div class="flex space-x-2">
            <div class="flex flex-col">
              <label class="text-xs" for="clientCity">City</label>
              <input id="clientCity" v-model="clientCity" class="" type="text">
            </div>
            <div class="flex flex-col">
              <label class="text-xs" for="clientZipCode">Zip Code</label>
              <input id="clientZipCode" v-model="clientZipCode" class="" type="text">
            </div>
            <div class="flex flex-col">
              <label class="text-xs" for="clientCountry">Country</label>
              <input id="clientCountry" v-model="clientCountry" class="" type="text">
            </div>
          </div>
        </div>

        <!-- Invoice Work Details -->
        <div class="space-y-4 mt-4">
          <div class="flex space-x-2">
            <div class="flex flex-col">
              <label class="text-xs" for="invoiceDate">Invoice Date</label>
              <input id="invoiceDate" v-model="invoiceDate" disabled class="" type="text">
            </div>
            <div class="flex flex-col">
              <label class="text-xs" for="paymentDueDate">Payment Due Date</label>
              <input id="paymentDueDate" v-model="paymentDueDate" disabled class="" type="text">
            </div>
          </div>
          <div class="flex flex-col">
            <label class="text-xs" for="paymentTerms">Payment Terms</label>
            <select id="paymentTerms" v-model="paymentTerms" class="" type="text">
              <option value="5">
                Next 5 Days
              </option>
              <option value="10">
                Next 10 Days
              </option>
              <option value="20">
                Next 20 Days
              </option>
              <option value="30">
                Next 30 Days
              </option>
              <option value="60">
                Next 60 Days
              </option>
            </select>
          </div>
          <div class="flex flex-col">
            <label class="text-xs" for="productDescription">Product Description</label>
            <input id="productDescription" v-model="productDescription" class="" type="text">
          </div>
          <div>
            <span class="text-gray-500 text-xs font-semibold uppercase">Item List</span>
            <div class="">
              <table class="min-w-full">
                <thead class="bg-gray-100">
                  <tr class="flex">
                    <th scope="col" class="px-6 py-3 w-1/2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Item Name
                    </th>
                    <th scope="col" class="px-6 py-3 w-1/6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Qty
                    </th>
                    <th scope="col" class="px-6 py-3 w-1/6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th><th scope="col" class="px-6 py-3 w-1/6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <tr v-for="(item, index) in invoiceItemList" :key="index" class="flex items-center my-1">
                    <td class="px-2 w-1/2 whitespace-nowrap">
                      <input v-model="item.name" class="border-0 bg-gray-100 text-xs rounded-none" type="text">
                    </td>
                    <td class="px-2 w-1/6 whitespace-nowrap">
                      <input v-model="item.qty" class="border-0 bg-gray-100 text-xs rounded-none" type="text">
                    </td>
                    <td class="px-2 w-1/6 whitespace-nowrap">
                      <input v-model="item.price" class="border-0 bg-gray-100 text-xs rounded-none" type="text">
                    </td>
                    <td class="flex px-2 w-1/6 whitespace-nowrap justify-center text-xs rounded-none">
                      ${{ item.total = item.qty * item.price }}
                    </td>
                    <div @click.prevent="deleteInvoiceItem(index)">
                      <svg class="w-4 h-4 mr-2 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <button class="flex btn-primary space-x-1  bg-blue-400 text-white rounded-full py-3 my-4 hover:bg-blue-500" @click.prevent="addNewInvoiceItem">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span class="uppercase text-xs">Add New Item</span>
            </button>
          </div>
        </div>

        <!-- Save/Exit -->
        <div class="flex justify-between mt-4">
          <div>
            <button class="bg-red-600 text-white text-xs px-4 py-2 uppercase rounded-full" @click.prevent="closeInvoice">
              Cancel
            </button>
          </div>
          <div>
            <button type="submit" class="bg-purple-600 text-white text-xs px-4 py-2 uppercase rounded-full" @click.prevent="updateInvoice">
              Update Invoice
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import { uid } from 'uid'
import { mapActions, mapState, mapMutations } from 'vuex'
import spinner from '../../../../components/spinner.vue'
// import { mapMultiRowFields, mapFields } from 'vuex-map-fields'

export default {
  components: { spinner },
  data: () => ({
    loading: false,
    id: null,
    billerStreetAddress: null,
    billerCity: null,
    billerZipCode: null,
    billerCountry: null,
    clientName: null,
    clientEmail: null,
    clientStreetAddress: null,
    clientCity: null,
    clientZipCode: null,
    clientCountry: null,
    invoiceDateUnix: null,
    invoiceDate: null,
    paymentTerms: null,
    paymentDueDateUnix: null,
    paymentDueDate: null,
    productDescription: null,
    invoicePending: false,
    invoiceDraft: false,
    invoiceItemList: [],
    invoiceTotal: 0,
    mainId: null,
    dateOptions: { year: 'numeric', month: 'short', day: 'numeric' }
  }),
  computed: {
    ...mapState('invoice', ['editInvoice', 'currentInvoice'])
    // ...mapFields('invoice', ['currentInvoice']),
    // ...mapMultiRowFields('invoice', ['currentInvoice.invoiceItemList'])
  },
  watch: {
    paymentTerms () {
      const futureDate = new Date()
      this.paymentDueDateUnix = futureDate.setDate(futureDate.getDate() + parseInt(this.paymentTerms))
      this.paymentDueDate = new Date(this.paymentDueDateUnix).toLocaleDateString('en-AU', this.dateOptions)
    }
  },
  created () {
    if (!this.editInvoice) {
      // get current date for invoice date field
      this.invoiceDateUnix = Date.now()
      this.invoiceDate = new Date(this.invoiceDateUnix).toLocaleDateString('en-AU', this.dateOptions)
    }

    if (this.editInvoice) {
      const currentInvoiceEdit = this.currentInvoice[0]

      this.id = currentInvoiceEdit.id
      this.mainId = currentInvoiceEdit._id
      this.billerStreetAddress = currentInvoiceEdit.billerStreetAddress
      this.billerCity = currentInvoiceEdit.billerCity
      this.billerZipCode = currentInvoiceEdit.billerZipCode
      this.billerCountry = currentInvoiceEdit.billerCountry
      this.clientName = currentInvoiceEdit.clientName
      this.clientEmail = currentInvoiceEdit.clientEmail
      this.clientStreetAddress = currentInvoiceEdit.clientStreetAddress
      this.clientCity = currentInvoiceEdit.clientCity
      this.clientZipCode = currentInvoiceEdit.clientZipCode
      this.clientCountry = currentInvoiceEdit.clientCountry
      this.invoiceDateUnix = currentInvoiceEdit.invoiceDateUnix
      this.invoiceDate = new Date(currentInvoiceEdit.invoiceDate).toLocaleDateString('en-AU', this.dateOptions)
      this.paymentTerms = currentInvoiceEdit.paymentTerms
      this.paymentDueDateUnix = currentInvoiceEdit.paymentDueDateUnix
      this.paymentDueDate = currentInvoiceEdit.paymentDueDate
      this.productDescription = currentInvoiceEdit.productDescription
      this.invoicePending = currentInvoiceEdit.invoicePending
      this.invoiceDraft = currentInvoiceEdit.invoiceDraft
      this.invoiceItemList = currentInvoiceEdit.invoiceItemList
      this.invoiceTotal = currentInvoiceEdit.invoiceTotal
    }
  },
  methods: {
    ...mapActions(
      {
        // uploadNewInvoice: 'invoice/uploadNewInvoice',
        UPDATE_INVOICE: 'invoice/UPDATE_INVOICE'
      }
    ),
    ...mapMutations({ TOGGLE_EDIT_INVOICE: 'invoice/TOGGLE_EDIT_INVOICE' }),

    addNewInvoiceItem () {
      this.invoiceItemList.push({
        name: '',
        qty: '1',
        price: 0,
        total: 0
      })
    },
    deleteInvoiceItem (index) {
      // debugger // eslint-disable-line no-debugger
      this.invoiceItemList.splice(index, 1)
    },
    calInvoiceTotal () {
      this.invoiceTotal = 0
      this.invoiceItemList.forEach((item) => {
        this.invoiceTotal += item.total
      })
    },
    publishInvoice () {
      this.invoicePending = true
    },
    saveDraft () {
      this.invoiceDraft = true
    },
    // async uploadInvoice () {
    //   if (this.invoiceItemList.length <= 0) {
    //     alert('Please, ensure you\'ve filled out work items')
    //   }

    //   this.loading = true

    //   this.calInvoiceTotal()

    //   // Send data to the server to save
    //   const invoiceData = {
    //     id: uid(6),
    //     billerStreetAddress: this.billerStreetAddress,
    //     billerCity: this.billerCity,
    //     billerZipCode: this.billerZipCode,
    //     billerCountry: this.billerCountry,
    //     clientName: this.clientName,
    //     clientEmail: this.clientEmail,
    //     clientStreetAddress: this.clientStreetAddress,
    //     clientCity: this.clientCity,
    //     clientZipCode: this.clientZipCode,
    //     clientCountry: this.clientCountry,
    //     invoiceDateUnix: this.invoiceDateUnix,
    //     invoiceDate: this.invoiceDate,
    //     paymentTerms: this.paymentTerms,
    //     paymentDueDateUnix: this.paymentDueDateUnix,
    //     paymentDueDate: this.paymentDueDate,
    //     productDescription: this.productDescription,
    //     invoicePending: this.invoicePending,
    //     invoiceDraft: this.invoiceDraft,
    //     invoiceTotal: this.invoiceTotal,
    //     invoiceItemList: this.invoiceItemList
    //   }
    //   try {
    //     await this.uploadNewInvoice(invoiceData)
    //   } catch (error) {
    //     return error.message
    //   }
    //   this.loading = false

    //   this.$router.push('/dashboard/invoice')
    // },
    async updateInvoice () {
      if (this.invoiceItemList.length <= 0) {
        alert('Please, ensure you\'ve filled out work items')
      }

      this.loading = true

      this.calInvoiceTotal()

      // Send data to the server to save
      const invoiceData = {
        _id: this.mainId,
        id: this.id,
        billerStreetAddress: this.billerStreetAddress,
        billerCity: this.billerCity,
        billerZipCode: this.billerZipCode,
        billerCountry: this.billerCountry,
        clientName: this.clientName,
        clientEmail: this.clientEmail,
        clientStreetAddress: this.clientStreetAddress,
        clientCity: this.clientCity,
        clientZipCode: this.clientZipCode,
        clientCountry: this.clientCountry,
        // invoiceDateUnix: this.invoiceDateUnix,
        // invoiceDate: this.invoiceDate,
        paymentTerms: this.paymentTerms,
        paymentDueDateUnix: this.paymentDueDateUnix,
        paymentDueDate: this.paymentDueDate,
        productDescription: this.productDescription,
        invoiceItemList: this.invoiceItemList,
        invoiceTotal: this.invoiceTotal
      }
      try {
        await this.UPDATE_INVOICE(invoiceData)
      } catch (error) {
        return error.message
      }
      this.loading = false

      // this.$router.push(`/dashboard/invoice/${this.currentInvoiceEdit.id}`)
    },
    submitInvoice () {
      if (this.editInvoice) {
        this.updateInvoice()
        return
      }
      this.uploadInvoice()
    },
    closeInvoice () {
      if (this.editInvoice) {
        this.TOGGLE_EDIT_INVOICE()
      }
      this.$router.push('/dashboard/invoice')
    },
    beforeDestroy () {
      console.log('Before DESTROY:')
      console.log(this.editInvoice)
      if (this.editInvoice) {
        this.TOGGLE_EDIT_INVOICE()
      }
    }
  }
}
</script>

<style>

</style>
