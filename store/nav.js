export default {
  namespaced: true,
  state: {
    sidebar: false
  },
  getters: { getSidebar: (state) => state.sidebar },
  mutations: {
    setSidebar(state) {
      state.sidebar = !state.sidebar;
    }
  },
  actions: {
    /**  Sidebar on/off switch handler */
    toggleSidebar({ commit, state }) {
      if (process.client && (window.innerWidth < 768 || state.sidebar)) {
        commit('setSidebar');
      }
    }
  }
};
