import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const modules = {};
const storesContext = require.context('./module', true, /\.store\.js$/);
storesContext.keys().map(key => {
  modules[key.replace(/.store.js/, '').split('/')[1]] = storesContext(
    key
  ).default;
  return storesContext(key).default;
});

const store = new Vuex.Store({
  modules: modules
});

export default store;
