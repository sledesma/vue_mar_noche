<template>
  <div>
    <div v-if="!store.getters.hayPosts">Cargando...</div>
    <div v-if="store.getters.hayPosts">
      <navbar></navbar>
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';

import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  setup() {
    const store = useStore()

    store.dispatch("getPostsFromServer")

    return {
      store
    }
  },
};
</script>

<style>
html, body {
margin: 0;
padding: 0;
}

.router-link-exact-active {
  color: black;
}
</style>
