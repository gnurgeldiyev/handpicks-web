export const state = () => ({
  manager: {},
  managers: [],
})

export const getters = {
  getAllManager: (state) => {
    return state.managers;
  },
  getManager: (state) => {
    return state.manager;
  },
}

export const mutations = {
  setManager: (state, manager) => {
    state.manager = manager;
  },
  setAllManager: (state, managers) => {
    state.managers = managers;
  },
  updateManager: (state, manager) => {
    let index = null;
    state.managers.forEach((item, i) => {
      index = item.id === manager.id ? i : null;
    });
    state.managers.splice(index, 1, manager);
  },
  deleteManager: (state, managerId) => {
    let managerIndex;
    state.managers.map((manager, index) => {
      if (manager.id === managerId) {
        managerIndex = index;
      }
      return true;
    });
    state.managers.splice(managerIndex, 1);
  }
}

export const actions = {
  fetchAllManager({ commit }) {
    return this.$axios.$get('/managers')
    .then((response) => {
      commit('setAllManager', response.managers);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetchManagerById({ commit }, managerId) {
    return this.$axios.$get(`/managers/${managerId}`)
    .then((response) => {
      commit('setManager', response.manager);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  addNewManager({ commit, state }, manager) {
    return this.$axios.$post('/managers', { manager })
    .then((response) => {
      let managers = [...state.managers, response.manager];
      commit('setAllManager', managers);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  editManager({ commit }, manager) {
    return this.$axios.$put(`/managers/${manager.id}`, { manager })
    .then((response) => {
      commit('updateManager', response.manager);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  deleteManager({ commit }, managerId) {
    return this.$axios.$delete(`/managers/${managerId}`)
    .then(() => {
      commit('deleteManager', managerId);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  loginManager({ commit }, manager) {
    return this.$axios.$post('/managers/login', { manager })
    .then((response) => {
      this.$cookies.set('token', response.manager.token);
      this.$cookies.set('id', response.manager.id);
      commit('setManager', response.manager);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  logoutManager({ commit }, manager) {
    return this.$axios.$post('/managers/logout', { manager })
    .then((response) => {
      this.$cookies.remove('token');
      this.$cookies.remove('id');
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  }
}