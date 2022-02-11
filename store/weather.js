import api from '../api/axios';
import { formatDate } from '../utils';
import { v4 as uuidv4 } from 'uuid';

export default {
  namespaced: true,
  state: {
    data: {},
    history: []
  },
  getters: { getData: (state) => state.data, getHistory: (state) => state.history },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setHistory(state, data) {
      state.history.push(data);
    }
  },
  actions: {
    async fetchData({ commit, state }, { search, isSearched }) {
      try {
        const res = await api.client.get(`weather?q=${search}&units=metric&APPID=${api.Key}`);
        const resDate = new Date(res.data.dt * 1000 + res.data.timezone * 1000);
        const todayDate = formatDate(resDate);
        const newData = {
          id: uuidv4(),
          name: res.data.name,
          temp: Math.round(res.data.main.temp),
          pressure: res.data.main.pressure,
          description: res.data.weather[0].description,
          info: res.data.weather[0].main,
          wind: res.data.wind.speed,
          humidity: res.data.main.humidity,
          todayDate,
          country: res.data.sys.country
        };
        commit('setData', newData);
        if (isSearched) {
          commit('setHistory', newData);
        }
      } catch (error) {
        console.log(error);
        commit('setData', {});
      }
    }
  }
};
