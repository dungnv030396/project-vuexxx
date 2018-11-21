import Vue from 'vue';
import Vuelidate from 'vuelidate';

import router from './router';
import store from './store';
import Header from './layouts/Header';
import '../node_modules/bulma';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Vuelidate);

window.Vuelidate = Vuelidate;

import './assets/css/bootstrap.min.css';
import './assets/css/master.css';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Header),
}).$mount('#app');
