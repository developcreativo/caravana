import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from './modules/auth';
import password from './modules/password';
import signup from './modules/signup';
import segmentos from './modules/sementos';
import emisoras from './modules/emisoras';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    password,
    signup,
    segmentos,
    emisoras,
  },
  strict: debug,
  plugins: [
    createPersistedState({
      /* Check All Options You Can Pass At this Link */
      /* https://github.com/robinvdvleuten/vuex-persistedstate#createpersistedstateoptions */
      key: 'vuex-ls',
      // Declare All The State We Want to Persist (use dot anotation for object.key)
      paths: ['auth', 'password', 'signup', 'segmentos', 'emisoras'],
    }),
  ],
});
