import api from '../api/session';

export default {
  async fetchSegmentos() {
    const url = '/segmentos/?format=json';
    const response = await api.get(url);
    return response.data;
  },

  async fetchSegmentoPublicidad(id) {
    const url = `/segmento/${id}/publicidad/format=json`;
    const response = await api.get(url);
    return response.data;
  },

  async fetchSegmentosLocutores(id) {
    const url = `/segmentos/${id}/locutores/format=json`;
    const response = await api.get(url);
    return response.data;
  },

  async fetchSegmentosToday() {
    const url = '/segmentos/today/format=json';
    const response = await api.get(url);
    return response.data;
  },
};
