import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    langs: [
      {
        short_name: "es",
        large_name: "Español",
        dict: {
          SALUDO: "Hola!",
          DESPEDIDA: "Adios",
          LANG_TEXT: "Has seleccionado: ",
          ACTION_BUTTON_TEXT: "Mostrar en el idioma seleccionado",
        },
      },
      {
        short_name: "en",
        large_name: "English",
        dict: {
          SALUDO: "Hello!",
          DESPEDIDA: "Goodbye",
          LANG_TEXT: "Selected: ",
          ACTION_BUTTON_TEXT: "Show text in selected language",
        },
      },
    ],
    current_lang: "en",
    current_message: "SALUDO",
  },
  getters: {
    shortNames: (state) => state.langs.map((item) => item.short_name),

    currentLangDict: (state) =>
      state.langs.find((val) => val.short_name == state.current_lang).dict,

    currentLangName: (state) =>
      state.langs.find((val) => val.short_name == state.current_lang)
        .large_name,
        
    resultText: (state) =>
      state.langs.find((val) => val.short_name == state.current_lang).dict[
        state.current_message
      ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
