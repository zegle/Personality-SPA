import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0
  },
  getters: {
    score: state => {
      return state.score
    }
  },
  mutations: {
    updateScore: (state, payload) => {
      state.score = payload
    }
  },
  actions: {
    updateScore: ({ commit }, payload) => {
      commit('updateScore', payload)
    }
  },
  modules: {
  }
})
