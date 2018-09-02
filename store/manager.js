export const state = () => ({
  manager: {},
  managers: [],
  deletedManagers: [],
  token: null,
})

export const getters = {
  getAll: (state) => {
    return state.managers;
  },
  getOne: (state) => {
    return state.manager;
  },
  getToken: (state) => {
    return state.token;
  },
  getDeleted: (state) => {
    return state.deletedManagers;
  }
}

export const mutations = {
  setOne: (state, manager) => {
    state.manager = manager;
  },
  setAll: (state, managers) => {
    state.managers = managers;
  },
  setDeleted: (state, managers) => {
    state.deletedManagers = managers;
  },
  addNew: (state, manager) => {
    let managers = [];
    if (state.managers) {
      managers = [...state.managers, manager];
    } else {
      managers.push(manager);
    }
    state.managers = managers;
  },
  update: (state, manager) => {
    let index;
    state.managers.forEach((item, i) => {
      index = item.id === manager.id ? i : null;
    });
    state.managers.splice(index, 1, manager);
  },
  delete: (state, managerId) => {
    let index;
    state.managers.map((item, i) => {
      if (item.id === managerId) {
        index = i;
      }
      return true;
    });
    state.managers.splice(index, 1);
  },
  setToken: (state, token) => {
    state.token = token;
  },
  clearToken: (state) => {
    state.token = null;
  }
}

export const actions = {
  fetchAll({ commit }) {
    return this.$axios.$get('/managers')
    .then((response) => {
      commit('setAll', response.managers);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetchOne({ commit }, managerId) {
    return this.$axios.$get(`/managers/${managerId}`)
    .then((response) => {
      commit('setOne', response.manager);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetchDeleted({ commit }) {
    return this.$axios.$get('/managers?deleted=true')
    .then((response) => {
      commit('setDeleted', response.managers);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  addNew({ commit }, manager) {
    return this.$axios.$post('/managers', { manager })
    .then((response) => {
      commit('addNew', response.manager);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  edit({ commit }, manager) {
    return this.$axios.$put(`/managers/${manager.id}`, { manager })
    .then((response) => {
      commit('update', response.manager);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  delete({ commit }, managerId) {
    return this.$axios.$delete(`/managers/${managerId}`)
    .then(() => {
      commit('delete', managerId);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  login({ commit }, manager) {
    return this.$axios.$post('/managers/login', { manager })
    .then((response) => {
      this.$cookies.set('token', response.manager.token, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      });
      this.$cookies.set('id', response.manager.id, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      });
      commit('setOne', response.manager);
      commit('setToken', response.manager.token);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  initAuth({ commit }) {
    if (this.$cookies.get('token')) {
      const token = this.$cookies.get('token');
      commit('setToken', token);
    } else {
      commit('clearToken');
    }
  },
  logout({ commit }, manager) {
    return this.$axios.$post('/managers/logout', { manager })
    .then(() => {
      this.$cookies.remove('token');
      this.$cookies.remove('id');
      commit('clearToken');
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  }
}