import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    isLogin: false
  },
  mutations: {
    USER_EMAIL (state, email) {
      if (email) {
        state.email = email
        state.isLogin = true
      } else {
        state.email = ''
        state.isLogin = false
      }
    }
  },
  actions: {
    userEmail ({ commit }, email) {
      commit('USER_EMAIL', email)
    }
  },
  getters: {
    getEmail (state) {
      return state.email
    },
    getIslogin (state) {
      return state.isLogin
    }
  }
})
