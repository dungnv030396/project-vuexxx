import Vue from 'vue';
import Vuelidate from 'vuelidate';

import router from './router';
import store from './store';
import Header from './layouts/Header';
import '../node_modules/bulma';
import axios from 'axios';
import VueCookies from 'vue-cookies';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment';

Vue.use(ElementUI);
Vue.use(Vuelidate);
Vue.use(VueCookies);

window.Vuelidate = Vuelidate;
window.axios = axios;
window.moment = moment;

import './assets/css/bootstrap.min.css';
import './assets/css/master.css';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Header),
}).$mount('#app');
