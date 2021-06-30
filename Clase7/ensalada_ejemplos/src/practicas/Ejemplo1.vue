<template>
  <div id="app">
    <input type="text" v-model="txt">
    {{ mensaje }}
    <button @click="clickBoton()">Cambiar texto</button>
  </div>
</template>

<script>
/*

Tres formas de implementar propiedades reactivas (variable que cuando cambia, cambia la ui)

1. Data
2. Computed
3. Watch

*/
export default {
  data() {
    return {
      txt: 'Hola mundo desde el data'
    }
  },
  computed: {
    mensaje: function() { // DE SOLO LECTURA (Esta función es un GETTER)
      console.log('Obteniendo la propiedad txt a través de mensaje')
      return this.txt.toUpperCase()
    }
  },
  methods: {
    clickBoton() {
      this.txt = 'Nuevo texto'
    }
  }
}
</script>

<style>
</style>
