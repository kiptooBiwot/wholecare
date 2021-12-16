export const state = () => ({
  staff: [],
  oneStaff: null,
  editStaffDetails: false
})

export const getters = {

}

export const mutations = {
  SET_STAFF (state, allStaff) {
    state.staff.push(allStaff)
  },

  SET_ONE_STAFF (state, singleStaff) {
    state.oneStaff = singleStaff
  },

  EDIT_STAFF_DETAILS (state) {
    state.editStaffDetails = !state.editStaffDetails
  }

}

export const actions = {
  async getAllStaff ({ commit }) {
    const allStaff = await this.$axios.get('/users')

    commit('SET_STAFF', allStaff.data)
  },

  async GET_ONE_STAFF ({ commit }, staffId) {
    const singleStaff = await this.$axios.get(`/users/${staffId}`)

    commit('SET_ONE_STAFF', singleStaff.data)
  }
}
