import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Vuelidate from 'vuelidate';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')