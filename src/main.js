import Vue from 'vue';
import ElementUI from 'element-ui';
import common from '@/common/common';
import App from './App.vue';
import router from './router';
import store from './vuex/index';
import axios, { $http } from '@/utils/http.js';

import 'normalize.css';
import 'assets/font/iconfont.css';
import 'assets/css/element-theme/index.css';
import 'styl/index.styl';

Vue.config.productionTip = false;

Vue.prototype.$http = $http;
Vue.prototype.axios = axios;
Vue.use(ElementUI);

window.$http = $http;
window.axios = axios;
window.common = common;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
