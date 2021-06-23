<template>
  <div class="detalle">
    <div class="titulo">[ {{ post.id }} ] {{ post.title }}</div>
    <div class="contenido">
      {{ post.body }}
    </div>
    <div class="info">Subido por: USUARIO {{ post.userId }}</div>
    <router-link to="/" class="atras">Atras</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },

  created() {
    this.post = this.$store.getters.getOnePost(this.$route.params.id);
  },
};
</script>

<style scoped>
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
