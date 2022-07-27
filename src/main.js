import App from './App';
import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';
import '@/styles/element-variables/index.scss';

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: 'mini' });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
