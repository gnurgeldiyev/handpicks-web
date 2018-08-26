export const state = () => ({
  users7: [],
  users28: [],
  usersTotal: 0,
})

export const getters = {
  getUsers7: (state) => {
    return state.users7;
  },
  getUsers28: (state) => {
    return state.users28;
  },
  getUsersTotal: (state) => {
    return state.usersTotal;
  },
}

export const mutations = {
  setUsers7: (state, users) => {
    state.users7 = users;
  },
  setUsers28: (state, users) => {
    state.users28 = users;
  },
  setUsersTotal: (state, users) => {
    state.usersTotal = users;
  },
}

export const actions = {
  fetchUsers7({ commit }) {
    return this.$axios.$get('/users?lastDay=7')
    .then((response) => {
      commit('setUsers7', response.users);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetchUsers28({ commit }) {
    return this.$axios.$get('/users?lastDay=28')
    .then((response) => {
      commit('setUsers28', response.users);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetchUsersTotal({ commit }) {
    return this.$axios.$get('/users')
    .then((response) => {
      commit('setUsersTotal', response.totalUser);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
}