<template>
  <div>
    <input type="text" placeholder="Tratamiento" v-model="tratamiento" />
    <select v-model="nombre">
      <option value="">Selecciona un nombre</option>
      <option value="Marcelo">Marcelo</option>
      <option value="Jessica">Jessica</option>
      <option value="Guillermo">Guillermo</option>
      <option value="Agustina">Agustina</option>
    </select>
  </div>
</template>

<script>
export default {
	computed: {
		nombre: {
			get() {
				return this.$store.state.nombre;
			},
			set(val) {
				this.$store.commit("setNombre", val);
			},
		},
    tratamiento: {
      get() {
        return this.$store.state.tratamiento;
      },
      set(val) {
        this.$store.commit("setTratamiento", val);
      } 
    }
	},
};
</script>

<style></style>
