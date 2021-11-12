import Vue from "vue";
import Vuex from "vuex";
import posts from "/posts.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postList: posts,
  },
  mutations: {},
  actions: {},
  modules: {},
});
