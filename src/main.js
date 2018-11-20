import Vue from 'vue';
// import App from './App.vue';
import router from './router';
import store from './store';
import Header from './layouts/Header';

import './../node_modules/bulma';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Header),
}).$mount('#app');
