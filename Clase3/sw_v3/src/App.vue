<template>
  <div id="app" @click="resetear">
    <span v-if="cantidadPlanetas > 0">Total planetas: {{ cantidadPlanetas }}</span>
    <span v-if="cantidadPlanetas <= 0">Cargando...</span>
  </div>
</template>

<script>

import globals from './globals';
import { onMounted, ref } from 'vue';

export default {
  name: 'App',

  setup() {
    
    const cantidadPlanetas = ref(0)

    onMounted(() => {
      fetch(`${globals.API_ROOT}planets/`)
        .then(r => r.json())
        .then(({ count }) => cantidadPlanetas.value = count)
    })

    return {
      cantidadPlanetas
    }

  },

  methods: {
    resetear() {
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
