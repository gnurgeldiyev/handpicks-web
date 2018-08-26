export const state = () => ({
  client: {},
  clients: [],
})

export const getters = {
  getClient: (state) => {
    return state.client;
  },
  getAllClient: (state) => {
    return state.clients;
  },
}

export const mutations = {
  setClient: (state, client) => {
    state.client = client;
  },
  setAllClient: (state, clients) => {
    state.clients = clients;
  },
  deleteClient: (state, clientId) => {
    let clientIndex;
    state.clients.map((client, index) => {
      if (client.id === clientId) {
        clientIndex = index;
      }
      return true;
    });
    state.clients.splice(clientIndex, 1);
  }
}

export const actions = {
  fetchAllClient({ commit }) {
    return this.$axios.$get('/clients')
    .then((response) => {
      commit('setAllClient', response.clients);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetchClientKey({ commit }, clientId) {
    return this.$axios.$get(`/clients/${clientId}/keys`)
    .then((response) => {
      commit('setClient', response.client);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  addNewClient({ commit, state }, client) {
    return this.$axios.$post('/clients', { client })
    .then((response) => {
      let clients = [...state.clients, response.client];
      commit('setAllClient', clients);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  deleteClient({ commit }, clientId) {
    return this.$axios.$delete(`/clients/${clientId}`)
    .then(() => {
      commit('deleteClient', clientId);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
}