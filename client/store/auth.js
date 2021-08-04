export const state = () => ({
  users: [],
  user: []
})

export const getters = {}

export const actions = {
  // Get all users
  async getUsers ({ commit }) {
    const response = await this.$axios.get('/users')
    commit('SET_USERS', response.data)
  },

  // Get a particular user
  async getUser ({ commit }) {
    const response = await this.$axios.get('/users/:email')

    commit('SET_USER', response.data)
  },

  // Register a user
  async registerUser ({ dispatch }, payload) {
    try {
      const response = await this.$axios.post('/users', payload,
        {
          // headers: {
          //   'Content-Type':
          //     'multipart/form-data boundary=<calculated when request is sent>'
          // }
        })

      if (response.status === 201) {
        dispatch('getUsers')
        return response.data
      }
    } catch (err) {
      return err
    }
  }
}

export const mutations = {
  // All users
  SET_USERS (state, users) {
    state.users = users
  },

  // A particular user
  SET_USER (state, user) {
    state.user = user
  }
}
