<template>
  <div id="app">
    <text-box />
    <texto />
  </div>
</template>

<script>
import TextBox from "./components/TextBox.vue";
import Texto from "./components/Texto.vue";

export default {
  components: {
    Texto,
    TextBox,
  },
};
</script>

<style></style>
