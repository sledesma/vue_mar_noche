import { createStore } from 'vuex'

export default createStore({
  state: {
    esTemaOscuro: false,
    posts_source: [],
    data_loaded: false,
  },
  mutations: {
    setPostSource(state, newPostSource) {
      state.posts_source = newPostSource;
      state.data_loaded = true;
    },
    enableDarkTheme(state) {
      state.esTemaOscuro = true;
    },
    disableDarkTheme(state) {
      state.esTemaOscuro = false;
    }
  },
  actions: {
    getPostsFromServer(store) {
      fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((res) => res.json())
        .then((data) => store.commit("setPostSource", data));
    },
  },
  getters: {
    hayPosts(state) {
      return state.data_loaded;
    },
    getOnePost(state) {
      return function (id) {
        return state.posts_source.find(function (item) {
          return item.id == id;
        });
      };
    },
    getPostTitles(state) {
      return state.posts_source.map(function (item) {
        return {
          id: item.id,
          title: item.title,
        };
      });
    },
  },
})
