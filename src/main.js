import Vue from 'vue';

import App from './App';
import router from './router';
import store from './store';

// eslint-disable-next-line import/first
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/diblu-style.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../src/assets/js/plugins/slick/slick-theme.css';
import VueToastr from "vue-toastr";
// eslint-disable-next-line import/first
import AudioVisual from 'vue-audio-visual';
// eslint-disable-next-line import/first

Vue.use(VueToastr);
Vue.use(AudioVisual);

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
});
