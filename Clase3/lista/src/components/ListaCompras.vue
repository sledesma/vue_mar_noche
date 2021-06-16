<template>
	<div>
		<h1>ListaCompras</h1>
    <div v-for="elemento in items" 
        v-bind:key="elemento.key">
      <item v-bind:texto="elemento.val"></item>
    </div>
	</div>
</template>

<script>
import {onMounted} from 'vue';
import Item from "./Item.vue";

export default {
  components: {
    Item
  },

  setup() {

    onMounted(() => {
      console.log('Hola mundo')
    })

    return {
      items: [
        {
          key: 1,
          val:"Azucar"
        }, 
        {
          key: 2,
          val: "Leche"
        }, 
        {
          key: 3,
          val: "Huevos"
        }, 
        {
          key: 4,
          val: "Harina"
        }
      ],
    }
  },
}
</script>

<style>

</style>