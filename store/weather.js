import api from '../api/axios';

export default {
  namespaced: true,
  state: {
    data: {},
    history: []
  },
  getters: { getData: (state) => state.data },
  mutations: {
    setData(state, data) {
      state.data = data;
      state.history.push(data);
    }
  },
  actions: {
    async fetchData({ commit, state }, search) {
      try {
        commit('setData', search);
        const res = await api.client.get(`weather?q=${search}&units=metric&APPID=${api.Key}`);
        const newData = {
          name: res.data.name,
          temp: Math.round(res.data.main.temp),
          pressure: res.data.main.pressure,
          description: res.data.weather[0].description,
          info: res.data.weather[0].main,
          wind: res.data.wind.speed,
          humidity: res.data.main.humidity,
          dateTime: new Date(res.data.dt * 1000 + res.data.timezone * 1000).toString().split('(')[0],
          country: res.data.sys.country
        };
        commit('setData', newData);
        console.log(newData);
      } catch (error) {
        console.log(error);
        commit('setData', {});
      }
    }
  }
};
