<template>
	<div id="app">
		<div>
			<input
				type="search"
				placeholder="Introduce el planeta a buscar"
				v-model="busqueda"
			/>
			<button @click="filtrar">Buscar</button>
		</div>

    <ul>
      <li v-for="filt in filtrados" v-bind:key="filt.name">{{ filt.name }}</li>
    </ul>
	</div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
	name: "App",

	setup() {
		const busqueda = ref("");
		const source = ref([]);
    const filtrados = ref([]);

		fetch("http://swapi.dev/api/planets/")
			.then((r) => r.json())
			.then((d) => (source.value = d));

		return {
			busqueda,
			source,
      filtrados
		};
	},

	methods: {
		filtrar() {
			const busq = this.busqueda;
      this.filtrados = this.source.results.filter((val) =>
				val.name.toLowerCase().includes(busq.toLowerCase())
			);
      this.busqueda = '';
		},
	},
};
</script>

<style></style>
