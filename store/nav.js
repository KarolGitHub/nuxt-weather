export default {
  namespaced: true,
  state: {
    sidebar: false
  },
  getters: { getSidebar: (state) => state.sidebar },
  mutations: {
    toggleSidebar(state) {
      state.sidebar = !state.sidebar;
    }
  },
  actions: {
    toggleSidebar({ commit }) {
      commit('toggleSidebar');
    }
  }
};
