<template>
  <div class="item">{{ texto }}</div>
</template>

<script>
export default {
  props: [ 'texto' ]
}
</script>

<style>
.item {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 10px;
}
</style>