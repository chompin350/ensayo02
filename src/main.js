import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue' // importar componentes
import 'bootstrap/dist/css/bootstrap.css' // incluir los estilos de Bootstrap
import 'bootstrap-vue/dist/bootstrap-vue.css' // incluir los estilos de BootstrapVue

Vue.config.productionTip = false
Vue.use(BootstrapVue) // indicar el uso del plugin

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
