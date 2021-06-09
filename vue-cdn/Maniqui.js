const AppComponent = {
  data() {
    // Modelo de datos
    return {
      contador: 0
    }
  },
  methods: {
    aumentar(e) {
      console.log(e);
      this.contador = this.contador + 1;
    }
  }
}

Vue.createApp(AppComponent).mount('#maniqui');