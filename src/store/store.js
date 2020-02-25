import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common[
        'authorization'
      ] = `Bearer ${userData.token}`
    },
    CLEAR_USER_DATA(state) {
      state.user = null
      localStorage.removeItem('user')
      axios.defaults.headers.common['Authorization'] = null
      location.reload()
    }
  },
  actions: {
    login({ commit }, credentials) {
      return axios
        .post('//localhost:8080/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },
    logout({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  modules: {},
  getters: {
    loggedIn(state) {
      return !!state.user
    }
  }
})
