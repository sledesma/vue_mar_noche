<template>
  <div id="app">
    <!--Idioma actual {{ lang.toUpperCase() }}-->
    <div>
      <input type="text" placeholder="Nombre" v-model="nombre">
      <input type="text" placeholder="Apellido" v-model="apellido">
    </div>
    <div @click="modoEdicion = !modoEdicion">
      <span v-if="!modoEdicion">{{ texto }}</span>
      <div v-if="modoEdicion">
        <input type="text" v-model="texto" autofocus>
      </div>
    </div>
  </div>
</template>

<script>
/*

Tres formas de implementar propiedades reactivas (variable que cuando cambia, cambia la ui)

1. Data: DATOS PUROS (NO CALCULADOS)
2. Computed

*/
import { mapState } from 'vuex';

export default {
  data() {
    return {
      modoEdicion: false
    }
  },
  mounted() {
    console.log(this);
  },
  computed: {
    /*...mapState([
      "lang"
    ]),*/
    nombre: {
      get: function() { return this.$store.state.nombre },
      set: function(val) { console.log(this); this.$store.commit('setNombre', val) }
    },
    apellido: {
      get: function() { return this.$store.state.apellido },
      set: function(val) { console.log(this); this.$store.commit('setApellido', val) }  
    },
    texto: {
      get: function() {
        return this.$store.state.nombre + " " + this.$store.state.apellido;
      },
      set: function(val) {
        const parts = val.split(' ');
        this.nombre = parts[0] ? parts[0] : '';
        this.apellido = parts[1] ? parts[1] : '';
      }
    }
  }
}
</script>

<style>
</style>
