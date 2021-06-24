<template>
	<div id="app">
		<combo-box></combo-box>
		<texto></texto>
	</div>
</template>

<script>
import ComboBox from "./components/ComboBox.vue";
import Texto from "./components/Texto.vue";

export default {
	name: "App",
	components: {
		ComboBox,
		Texto,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
