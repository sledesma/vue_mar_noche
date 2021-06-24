import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nombre: '',
    tratamiento: '',
  },
  mutations: {
    setNombre: (state, payload) => state.nombre = payload,
    setTratamiento: (state, payload) => state.tratamiento = payload
  },
  actions: {
  },
  modules: {
  }
})
