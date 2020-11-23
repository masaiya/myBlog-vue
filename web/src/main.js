import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.less'
import './registerServiceWorker'
import axios from 'axios'
// import http from "./http";

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
