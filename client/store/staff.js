export const state = () => ({
  staff: []
})

export const getters = {

}

export const actions = {
  async getAllStaff ({ commit }) {
    const allStaff = await this.$axios.get('/users')

    commit('SET_STAFF', allStaff.data)
  }
}

export const mutations = {
  SET_STAFF (state, allStaff) {
    state.staff.push(allStaff)
  }
}
