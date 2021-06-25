<template>
  <div v-bind:class="claseActual">
    <div class="detalle">
      <div class="titulo">[ {{ post.id }} ] {{ post.title }}</div>
      <div class="contenido">
        {{ post.body }}
      </div>
      <div class="info">Subido por: USUARIO {{ post.userId }}</div>
      <router-link to="/" class="atras">Atras</router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const post = store.getters.getOnePost(route.params.id);

    return {
      post,
      claseActual: store.state.esTemaOscuro ? 'dark': ''
    }
  }
};
</script>

<style scoped>
.detalle.dark {
  background: rgb(50, 50, 50) !important;
}

.detalle {
  font-family: Arial, Helvetica, sans-serif;
}

.detalle .titulo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 24px;
  font-weight: bold;
}

.detalle .contenido {
  padding: 30px;
  text-align: center;
}

.detalle .info {
  float: right;
}

.detalle .atras {
  display: inline-block;
  text-align: center;
  width: 100%;
}
</style>
