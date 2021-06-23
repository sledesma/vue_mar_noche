<template>
  <div>
    <div v-if="!$store.getters.hayPosts">Cargando...</div>
    <router-link to="/">Home</router-link>
    <router-link to="/detalle/1">Ir a 1</router-link>
    <router-view v-if="$store.getters.hayPosts"></router-view>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getPostsFromServer");
  },
};
</script>

<style>
.router-link-exact-active {
  color: black;
}
</style>
