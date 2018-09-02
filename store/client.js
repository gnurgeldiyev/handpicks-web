export const state = () => ({
  client: {},
  clients: [],
})

export const getters = {
  getOne: (state) => {
    return state.client;
  },
  getAll: (state) => {
    return state.clients;
  },
}

export const mutations = {
  setOne: (state, client) => {
    state.client = client;
  },
  setAll: (state, clients) => {
    state.clients = clients;
  },
  addNew: (state, client) => {
    let clients = [];
    if (state.clients) {
      clients = [...state.clients, client];
    } else {
      clients.push(client);
    }
    state.clients = clients;
  },
  delete: (state, clientId) => {
    let index;
    state.clients.map((item, i) => {
      if (item.id === clientId) {
        index = i;
      }
      return true;
    });
    state.clients.splice(index, 1);
  }
}

export const actions = {
  fetchAll({ commit }) {
    return this.$axios.$get('/clients')
    .then((response) => {
      commit('setAll', response.clients);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetchOne({ commit }, clientId) {
    return this.$axios.$get(`/clients/${clientId}/`)
    .then((response) => {
      commit('setOne', response.client);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetchKey({ commit }, clientId) {
    return this.$axios.$get(`/clients/${clientId}/keys`)
    .then((response) => {
      commit('setOne', response.client);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  addNew({ commit }, client) {
    return this.$axios.$post('/clients', { client })
    .then((response) => {
      commit('addNew', response.client);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  delete({ commit }, clientId) {
    return this.$axios.$delete(`/clients/${clientId}`)
    .then(() => {
      commit('delete', clientId);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
}