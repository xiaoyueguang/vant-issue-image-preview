import Vue from 'vue';
import App from './App.vue';
import { ImagePreview } from 'vant';

Vue.config.productionTip = false;

ImagePreview({
  images: [],
  startPosition: 1,
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
