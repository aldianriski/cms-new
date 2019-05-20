import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import axios from 'axios';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://cms-paxel-f91eb.firebaseio.com/';
// axios.defaults.headers.common.Authorization = 'asdasd';
axios.defaults.headers.get.Accepts = 'application/json';

const reqInterceptor = axios.interceptors.request.use((config) => {
  console.log('Config', config);
  return config;
});

const resInterceptor = axios.interceptors.request.use((res) => {
  console.log('Res', res);
  return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
