import Vue from 'vue';
import './plugins/bootstrap-vue';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const eventHub = new Vue();
Vue.prototype.$eventHub = eventHub;



new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
