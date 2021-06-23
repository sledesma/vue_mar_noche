import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts_source: [],
    data_loaded: false,
  },
  mutations: {
    setPostSource(state, newPostSource) {
      state.posts_source = newPostSource;
      state.data_loaded = true;
    },
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
});
