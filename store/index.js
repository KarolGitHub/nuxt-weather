import Vue from 'vue';
import Vuex from 'vuex';
import nav from './nav';
import weather from './weather';

Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    state: () => ({}),
    mutations: {},
    actions: {},
    modules: { nav, weather }
  });
