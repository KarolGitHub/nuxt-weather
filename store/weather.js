import api from '../api/axios';
import { v4 as uuidv4 } from 'uuid';

export default {
  namespaced: true,
  state: {
    data: {},
    history: [],
    isLoading: false,
    isError: false
  },
  getters: {
    getData: (state) => state.data,
    getHistory: (state) => state.history,
    getLoading: (state) => state.isLoading,
    getError: (state) => state.isError
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setHistory(state, data) {
      state.history.push(data);
    },
    setLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setError(state, value) {
      state.isError = value;
    }
  },
  actions: {
    /**
     * GET API request.
     * @param {string} search Search query
     * @param {boolean} isSearched indicates whether should response from API be saved to history
     */
    async fetchData({ commit, state }, { search, isSearched }) {
      commit('setLoading');
      try {
        const res = await api.client.get(`weather?q=${search}&units=metric&APPID=${api.Key}`);
        const newData = {
          // generate random id
          id: uuidv4(),
          name: res.data.name,
          // round to nearest integer
          temp: Math.round(res.data.main.temp),
          pressure: res.data.main.pressure,
          description: res.data.weather[0].description,
          info: res.data.weather[0].main,
          wind: res.data.wind.speed,
          humidity: res.data.main.humidity,
          // returns current time and date in format: "dd.mm.yyyy hh-mm-ss"
          todayDate: new Date().toLocaleString().replace(',', ''),
          country: res.data.sys.country
        };
        commit('setData', newData);
        if (isSearched) {
          commit('setHistory', newData);
        }
        if (state.isError) {
          commit('setError', false);
        }
        commit('setLoading');
      } catch (error) {
        commit('setError', true);
        commit('setData', {});
        commit('setLoading');
        alert(error.response.data.message);
      }
    }
  }
};
