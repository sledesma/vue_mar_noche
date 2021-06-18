<template>
  <div>
    <input @keypress.enter="cambiarTexto" type="text" v-model="texto" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      texto: "",
    };
  },

  methods: {
    cambiarTexto() {
      this.$store.commit("cambiarTexto", { txt: this.texto });
    },
  },
};
</script>

<style></style>
