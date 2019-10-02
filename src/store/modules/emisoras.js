import emisorasService from '../../services/emisoras';

const state = {
  emisoras: [],
  segmentosToday: [],
};

const getters = {
  // eslint-disable-next-line no-shadow
  emisoras: state => state.emisoras,
  segmentosToday: state => state.segmentosToday,
};

const actions = {
  getEmisoras({
    commit,
  }) {
    emisorasService.fetchEmisoras().then((emisoras) => {
      commit('setEmisoras', emisoras);
    });
  },

  getEmisoraSegmentos({
    commit,
  }, id) {
    emisorasService.fetchEmisoraSegmentos(id).then((segmentos) => {
      commit('setSegmentos', segmentos);
    });
  },

  getEmisoraSegmento({
    commit,
  }, id) {
    emisorasService.fetchEmisoraSegmento(id).then((segmentos) => {
      commit('setSegmento', segmentos);
    });
  },


  getEmisoraSegmentosToday({
    commit,
  }, id) {
    emisorasService.fetchEmisoraSegmentosToday(id).then((segmentos) => {
      commit('setSegmentosToday', segmentos);
    });
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  setEmisoras(state, emisoras) {
    state.emisoras = emisoras;
  },
  // eslint-disable-next-line no-shadow
  setSegmentosToday(state, segmentosToday) {
    state.segmentosToday = segmentosToday;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
