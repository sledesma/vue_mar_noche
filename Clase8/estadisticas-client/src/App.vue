<template>
  <div>
    <input type="text" v-model="fecha" placeholder="AAAA-MM-DD"> 
    <div>
      {{ output }}
    </div>
  </div>
</template>

<script>
/*

Tres formas de implementar propiedades reactivas (variable que cuando cambia, cambia la ui)

1. Data: DATOS PUROS (NO CALCULADOS)
2. Computed
3. Watch

*/
import http, { API_STATS } from './http'

export default {
  data() {
    return {
      fecha: '',
      output: ''
    }
  },
  watch: {
    fecha: function(valorActual, valorPrevio) {
      const formatoValido = /\d{4}[-]\d{2}[-]\d{2}/.test(valorActual)
      if(!formatoValido) {
        this.output = 'Formato incorrecto';
        return;
      } else {
        this.output = 'Solicitando datos a API...';
        http
          .get(API_STATS)
          .then(res => {
            console.log(res)
            this.output = 'Cotizacion del dolar de la fecha: ';
          });
      }
    }
  }
}
</script>

<style>

</style>