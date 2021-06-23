<template>
  <div class="maestro">
    <!--Vista Maestro-->
    <h2 class="titulo">Listado de posts</h2>
    <ul class="lista">
      <li v-for="post in $store.getters.getPostTitles" v-bind:key="post.id">
        <router-link v-bind:to="{ name: 'Detalle', params: { id: post.id } }">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.maestro .titulo {
  font-family: Arial, Helvetica, sans-serif;
}

.maestro .lista {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.maestro .lista li {
  padding: 10px;
}

.maestro .lista li a {
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
