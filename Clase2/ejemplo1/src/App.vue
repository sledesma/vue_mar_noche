<template>
  <div>
    <titulo v-bind:titulo="textoTitulo"></titulo>
    <div id="content">
      <div>Texto aqui</div>
      <input type="text">
    </div>
  </div>
</template>

<script>
import Titulo from './Titulo.vue';

export default {
  components: {
    Titulo
  },
  
  data: function(){
    return {
      textoTitulo: "Vinclar input con div"
    }
  }
  
}
</script>

<style scoped>
#content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#content div,
#content input { 
  width: 30%; 
  text-align: center;
  margin-bottom: 10px;
}

#content input {
  outline: none;
  border: 0;
  background: #CCC;
  padding: 20px;
}
</style>

