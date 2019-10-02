import api from '../api/session';

export default {
  async fetchUsuarios() {
    const url = '/usuarios/?format=json';
    const response = await api.get(url);
    return response.data;
  },

  async findUsuario(id) {
    const url = `/usuarios/${id}/?format=json`;
    const response = await api.get(url);
    return response.data;
  },

  async recoveryUsuario(email) {
    const url = `/usuarios/${email}/?format=json`;
    const response = await api.get(url);
    return response.data;
  },
};
