import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // state = TODA la info reactiva de la página
  state: {
    texto_texto: "Goodbye",
    texto_text_box: "",
  },
  // cambios de estado SIN LOGICA (SIN "side-effects" / operaciones asincrónicas)
  mutations: {
    cambiarTexto: (state, nuevo_valor) => (state.texto_texto = nuevo_valor.txt),
  },
  actions: {},
  modules: {},
});
