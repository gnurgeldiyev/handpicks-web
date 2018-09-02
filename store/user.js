export const state = () => ({
  users7: [],
  users28: [],
  usersTotal: 0,
})

export const getters = {
  get7: (state) => {
    return state.users7;
  },
  get28: (state) => {
    return state.users28;
  },
  getTotal: (state) => {
    return state.usersTotal;
  },
}

export const mutations = {
  set7: (state, users) => {
    state.users7 = users;
  },
  set28: (state, users) => {
    state.users28 = users;
  },
  setTotal: (state, users) => {
    state.usersTotal = users;
  },
}

export const actions = {
  fetch7({ commit }) {
    return this.$axios.$get('/users?lastDay=7')
    .then((response) => {
      commit('set7', response.users);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetch28({ commit }) {
    return this.$axios.$get('/users?lastDay=28')
    .then((response) => {
      commit('set28', response.users);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetchTotal({ commit }) {
    return this.$axios.$get('/users')
    .then((response) => {
      commit('setTotal', response.totalUser);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
}