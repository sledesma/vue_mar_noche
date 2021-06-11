<template>
  <h1>{{ titulo }}</h1>
</template>

<script>
export default {
  props: ['titulo']
}
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
</style>