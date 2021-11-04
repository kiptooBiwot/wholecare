import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  invoiceModal: null,
  invoices: null,
  invoicesLoaded: false,
  currentInvoice: null,
  editInvoice: null
})

export const getters = {
  getField
}

export const actions = {
  // Get All Invoices
  async getInvoices ({ commit, dispatch }) {
    try {
      const response = await this.$axios.get('/invoice')
      commit('SET_INVOICES', response.data)
      commit('INVOICES_LOADED')
    } catch (err) {
      dispatch('addNotification', {
        type: 'error',
        title: 'An Error Occured',
        message: err.message
      }, { root: true })
      return err
    }
  },

  // GET one invoice
  async GET_ONE_INVOICE ({ commit, dispatch }, payload) {
    try {
      const response = await this.$axios.get(`/invoice/${payload}`)

      if (response.status === 200) {
        commit('SET_CURRENT_INVOICE', response.data)
      }
    } catch (err) {
      dispatch('addNotification', {
        type: 'error',
        title: 'An Error Occured',
        message: err.message
      }, { root: true })
      return err
    }
  },

  // Save an invoice
  async uploadNewInvoice ({ commit, dispatch }, payload) {
    try {
      const response = await this.$axios.post('/invoice', payload)

      if (response.status === 201) {
        dispatch('addNotification', {
          type: 'success',
          title: 'Success',
          message: response.data.message
        }, { root: true })

        dispatch('getInvoices')
        // await console.log(`response.data ${response.data.message}`)
        // commit('', response.data)
        // console.log(response.data.message)
      }
    } catch (err) {
      dispatch('addNotification', {
        type: 'error',
        title: 'An Error Occured',
        message: err.message
      }, { root: true })
      return err
    }
  },

  // Update invoice
  async UPDATE_INVOICE ({ commit, dispatch }, payload) {
    commit('DELETE_INVOICE', payload._id)

    const response = await this.$axios.patch(`/invoice/${payload._id}/edit`, payload)

    if (response.status === 200) {
      dispatch('addNotification', {
        type: 'success',
        title: 'Success',
        message: response.data.message
      }, { root: true })

      dispatch('getInvoices')
    }
  },

  // Delete Invoice
  async DELETE_INVOICE_DB ({ commit, dispatch }, payload) {
    commit('DELETE_INVOICE', payload)

    const response = await this.$axios.delete(`/invoice/${payload}/delete`)

    if (response.status === 200) {
      dispatch('addNotification', {
        type: 'success',
        title: 'Success',
        message: response.data.message
      }, { root: true })

      // dispatch('getInvoices')
    } else {
      alert('An error occured while deleting the invoice')
    }
  },

  async UPDATE_STATUS_TO_PAID ({ commit, dispatch }, payload) {
    const response = await this.$axios.patch(`/invoice/${payload}/edit`,
      {
        invoicePaid: true,
        invoicePending: false
      }
    )

    if (response.status === 200) {
      await commit('UPDATE_STATUS_TO_PAID', response.data.updatedInvoice._id)
      await dispatch('GET_ONE_INVOICE', response.data.updatedInvoice._id)
    }
  },

  // Update status to PENDING
  async UPDATE_STATUS_TO_PENDING ({ commit, dispatch }, payload) {
    const response = await this.$axios.patch(`/invoice/${payload}/edit`,
      {
        invoicePaid: false,
        invoicePending: true,
        invoiceDraft: false
      }
    )

    if (response.status === 200) {
      await commit('UPDATE_STATUS_TO_PENDING', response.data.updatedInvoice._id)
      await dispatch('GET_ONE_INVOICE', response.data.updatedInvoice._id)
    }
  }
}

export const mutations = {
  updateField,
  TOGGLE_INVOICE (state) {
    state.invoiceModal = !state.invoiceModal
  },
  SET_INVOICES (state, invoices) {
    // state.invoices.push(invoices)
    state.invoices = invoices
  },
  // SET_SINGLE_INVOICE (state, invoice) {
  //   state.singleInvoice = invoice
  // },
  INVOICES_LOADED (state) {
    state.invoicesLoaded = true
  },
  // Get a single invoice from state
  SET_CURRENT_INVOICE (state, payload) {
    // state.currentInvoice = state.invoices.filter((invoice) => {
    //   return invoice.id === payload
    // })

    state.currentInvoice = payload
  },
  // Edit Invoice
  TOGGLE_EDIT_INVOICE (state) {
    state.editInvoice = !state.editInvoice
  },

  // Delete invoice from state
  DELETE_INVOICE (state, payload) {
    state.invoices = state.invoices.filter(invoice =>
      invoice.id || invoice._id !== payload
    )
  },

  // Change status to PAID
  UPDATE_STATUS_TO_PAID (state, payload) {
    state.invoices.forEach((invoice) => {
      if (invoice._id === payload) {
        invoice.invoicePaid = true
        invoice.invoicePending = false
      }
    })
  },

  // Change status to PENDING
  UPDATE_STATUS_TO_PENDING (state, payload) {
    state.invoices.forEach((invoice) => {
      if (invoice._id === payload) {
        invoice.invoicePaid = false
        invoice.invoicePending = true
        invoice.invoiceDraft = false
      }
    })
  }
}
