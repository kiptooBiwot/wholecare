export const state = () => ({
  users: [],
  user: [],
  registeredUser: null
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
        dispatch('addNotification', {
          type: 'success',
          title: 'Success',
          message: response.data.message
        }, { root: true })
        // dispatch('getUser', response._id)
        // await console.log(`response.data ${response.data.message}`)
        commit('REGISTERED_USER', response.data)
        console.log(response.data.message)
      }
    } catch (err) {
      return err
    }
  },

  // Update Basic information
  async updateUserInfo ({ dispatch, state }, payload) {
    try {
      const userId = state.registeredUser.user._id
      console.log(payload)
      console.log(userId)
      const response = await this.$axios.patch(`/users/${userId}`, payload,
        {
          headers: {
            'Content-Type': 'multipart/form-data boundary=<calculated when request is sent>'
          }
        }
      )
      if (response.status === 201) {
        dispatch('addNotification', {
          type: 'success',
          title: 'Success',
          message: `${response.data.message} Sign In to access your account`
        },
        { root: true }
        )
        console.log('USER Updated!')
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
