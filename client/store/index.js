export const state = () => ({
  notifications: []
})

export const getters = {

}

export const actions = {
  addNotification ({ commit }, notification) {
    commit('ADD_NOTIFICATION', notification)
  },
  removeNotification ({ commit }, notificationToRemove) {
    commit('REMOVE_NOTIFICATION', notificationToRemove)
  }
}

export const mutations = {
  ADD_NOTIFICATION (state, notification) {
    state.notifications.push({
      ...notification,
      id: (Math.random().toString(36) + Date.now().toString(36)).substr(
        2
      )
    })
  },
  REMOVE_NOTIFICATION (state, notificationToRemove) {
    state.notifications = state.notifications.filter((notification) => {
      return notification.id !== notificationToRemove.id
    })
  }
}
