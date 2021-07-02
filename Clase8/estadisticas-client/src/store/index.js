import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    nombre: '',
    apellido: '',
    //lang: 'es'
  },
  mutations: {
    setNombre: (state, payload) => {
      console.log('Cambiando valor de nombre por Vuex')
      state.nombre = payload
    },
    setApellido: (state, payload) => {
      console.log('Cambiando valor de apellido por Vuex')
      state.apellido = payload
    }
  }
});

export default store;