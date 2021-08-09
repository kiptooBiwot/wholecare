export const state = () => ({
  users: [],
  user: [],
  registeredUser: []
})

export const getters = {}

export const actions = {
  // Get all users
  async getUsers ({ commit }) {
    const response = await this.$axios.get('/users')
    commit('SET_USERS', response.data)
  },

  // Get a particular user
  async getUser ({ commit }, id) {
    const response = await this.$axios.get(`/users/${id}`)

    commit('SET_USER', response.data)
  },

  // Register a user
  async registerUser ({ dispatch, commit }, payload) {
    try {
      const response = await this.$axios.post('/users', payload,
        {
          // headers: {
          //   'Content-Type':
          //     'multipart/form-data boundary=<calculated when request is sent>'
          // }
        })

      if (response.status === 201) {
        // dispatch('getUser', response._id)
        console.log(response.data.user)
        commit('REGISTERED_USER', response.data.user)
      }
    } catch (err) {
      return err
    }
  },

  // Update Basic information
  async updateUserInfo ({ dispatch }, id, payload) {
    try {
      const response = await this.$axios.post('/users/:id', payload,
        {
          headers: {
            'Content-Type': 'multipart/form-data boundary=<calculated when request is sent>'
          }
        })
      if (response === 201) {
        dispatch()
      }
    } catch (err) {
      console.error(err)
      return err
    }
  }
}

export const mutations = {
  // All users
  SET_USERS (state, users) {
    state.users = users
  },

  REGISTERED_USER (state, registeredUser) {
    state.registeredUser = registeredUser
  },

  // A particular user
  SET_USER (state, user) {
    state.user = user
  }
}
