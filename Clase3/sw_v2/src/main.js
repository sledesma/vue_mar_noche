import Vue from 'vue'
import App from './App.vue'

import dotEnv from 'dotenv'

dotEnv.config({
  path: './globals.env'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
