import api from '../api/session';

export default {
  async fetchEmisoras() {
    const url = '/emisoras/?format=json';
    const response = await api.get(url);
    return response.data;
  },
  async fetchEmisoraSegmentos(id) {
    const url = `emisora/${id}/segmentos?format=json`;
    const response = await api.get(url);
    return response.data;
  },
  async fetchEmisoraSegmento(id) {
    const url = `/emisoras/${id}/segmentos/format=json`;
    const response = await api.get(url);
    return response.data;
  },

  async fetchEmisoraTelefonos(id) {
    const url = `/emisoras/${id}/telefonos/format=json`;
    const response = await api.get(url);
    return response.data;
  },

  async fetchEmisoraRedeSociales(id) {
    const url = `/emisoras/${id}/redes_sociales/format=json`;
    const response = await api.get(url);
    return response.data;
  },


  async fetchEmisoraSegmentosToday(id) {
    const url = `/emisoras/${id}/segmentos/today?format=json`;
    const response = await api.get(url);
    return response.data;
  },


};
