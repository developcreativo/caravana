import segmentoService from '../../services/segmentos';

const state = {
  messages: [],
};

const getters = {
  // eslint-disable-next-line no-shadow
  messages: state => state.messages,
};

const actions = {
  getMessages({
    commit,
  }) {
    segmentoService.fetchMessages().then((messages) => {
      commit('setMessages', messages);
    });
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  setMessages(state, messages) {
    state.messages = messages;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
