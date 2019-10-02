import Vue from 'vue';

import App from './App';
import router from './router';
import store from './store';

// eslint-disable-next-line import/first
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/diblu-style.css';
import '../src/assets/js/plugins/slick/slick.css';
import '../src/assets/js/plugins/slick/slick-theme.css';
// eslint-disable-next-line import/first
import AudioVisual from 'vue-audio-visual';

Vue.use(AudioVisual);

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
});
