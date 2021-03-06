import Vue from "vue";
import Vuex from "vuex";
import home from "../store/modules/home";
import detail from "../store/modules/detail";
import cart from "../store/modules/cart";
import user from "../store/modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    home,
    detail,
    cart,
    user,
  },
});
