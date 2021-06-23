<template>
  <div class="maestro">
    <!--Vista Maestro-->
    <h2 class="titulo">Listado de posts</h2>
    <ul class="lista">
      <li>
        <router-link to="/detalle"
          >sunt aut facere repellat provident occaecati excepturi optio
          reprehenderit</router-link
        >
      </li>
      <li>
        <router-link to="/detalle">qui est esse</router-link>
      </li>
      <li>
        <router-link to="/detalle"
          >ea molestias quasi exercitationem repellat qui ipsa sit
          aut</router-link
        >
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
