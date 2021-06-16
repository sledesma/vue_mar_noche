<template>
  <div id="app">
    <div v-on:click="mostrarConsola">
      <span v-if="cantidadPlanetas > 0">Total planetas: {{ cantidadPlanetas }}</span>
      <span v-if="cantidadPlanetas <= 0">Cargando...</span>
    </div>
  </div>
</template>

<script>
import globals from './globals';

export default {
  name: 'App',

  data() {
    return {
      cantidadPlanetas: 0
    }
  },

  mounted() {
    fetch(`${globals.API_ROOT}planets/`)
      .then(r => r.json())
      .then(({ count }) => this.cantidadPlanetas = count)
  },

  methods: {

    mostrarConsola() {
      this.cantidadPlanetas = 0
      fetch(`${globals.API_ROOT}planets/`)
        .then(r => r.json())
        .then(({ count }) => this.cantidadPlanetas = count)
    }

  }
}
</script>

<style>
</style>
