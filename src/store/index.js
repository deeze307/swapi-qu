import { createStore } from 'vuex'
import Planet from './modules/Planet'

export default createStore({
  state:{
    axiosLoading:false
  },
  getters:{},
  mutations:{
    setAxiosLoading(state,payload) {
      state.axiosLoading = payload
    }
  },
  actions:{
    axiosLoading({commit},value) {
      commit('setAxiosLoading',value)
    }
  },
  modules:{
    Planet
  }
})