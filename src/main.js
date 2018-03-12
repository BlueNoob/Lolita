// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'lib-flexible';

import Row from '@/components/row';
import Col from '@/components/col';
import Button from '@/components/button';
Vue.component('loli-button', Button);
Vue.component('loli-row', Row);
Vue.component('loli-col', Col);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
