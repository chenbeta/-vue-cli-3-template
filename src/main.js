import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios, { $http } from '@/utils/http.js';

import 'normalize.css';

Vue.config.productionTip = false;

Vue.prototype.http = $http;
Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
