export default {
  namespaced: true,
  state: {
    username: "",
    password: "",
  },
  mutations: {
    setUserData(state, payload) {
      state.username = payload.username;
      state.password = payload.password;
    },
  },
};
