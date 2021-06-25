<template>
	<div v-bind:class="claseActual">
		<ul>
			<li>
				<router-link to="/">Home</router-link>
			</li>
			<li class="dropdown">
				<a href="#">Tema</a>
				<ul>
					<li><a href="#" v-on:click="offDark">Claro</a></li>
          <li><a href="#" v-on:click="onDark">Oscuro</a></li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  computed: {
    claseActual: {
      get() {
        return this.$store.state.esTemaOscuro ? 'dark': ''
      }
    }
  },
  methods: {
    offDark(e) {
      e.preventDefault();
      this.$store.commit('disableDarkTheme')
    },
    onDark(e) {
      e.preventDefault();
      this.$store.commit('enableDarkTheme')
    }
  }
};
</script>

<style scoped>
div.dark,
div.dark ul {
  background: black !important;
}

div.dark a {
  color: white !important;
}

div {
	background: #ccc;
	box-sizing: border-box;
	padding: 20px;
	font-family: Arial, Helvetica, sans-serif;
}

ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
  display: flex;
}

ul li {
  margin-right: 30px;
}

a {
	color: black;
	font-weight: bold;
	text-decoration: none;
}

.dropdown ul {
	display: none;
}

.dropdown ul li {
  padding: 20px 0;
}

.dropdown:hover ul {
	position: absolute;
	background: #ccc;
	display: block;
	width: 200px;
	box-sizing: border-box;
	padding: 20px;
}
</style>
