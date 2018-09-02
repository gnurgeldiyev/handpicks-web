export const state = () => ({
  message: {},
  messages: [],
})

export const getters = {
  getAll: (state) => {
    return state.messages;
  },
  getOne: (state) => {
    return state.message;
  }
}

export const mutations = {
  setAll: (state, messages) => {
    state.messages = messages;
  },
  setOne: (state, message) => {
    state.message = message;
  },
  addNew: (state, message) => {
    let messages = [];
    if (state.messages) {
      messages = [...state.messages, message];
    } else {
      messages.push(message);
    }
    state.messages = messages;
  },
  delete: (state, messageId) => {
    let index;
    state.messages.map((item, i) => {
      if (item.id === messageId) {
        index = i;
      }
      return true;
    });
    state.messages.splice(index, 1);
  }
}

export const actions = {
  fetchAll({ commit }) {
    return this.$axios.$get('/messages')
    .then((response) => {
      commit('setAll', response.messages);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetchOne({ commit }, messageId) {
    return this.$axios.$get(`/messages/${messageId}`)
    .then((response) => {
      commit('setOne', response.message);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  addNew({ commit }, message) {
    return this.$axios.$post('/messages', { message })
    .then((response) => {
      commit('addNew', response.topic);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  delete({ commit }, messageId) {
    return this.$axios.$delete(`/messages/${messageId}`)
    .then(() => {
      commit('delete', messageId);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
}