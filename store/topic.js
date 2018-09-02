export const state = () => ({
  topic: {},
  topics: [],
  deletedTopics: [],
})

export const getters = {
  getAll: (state) => {
    return state.topics;
  },
  getOne: (state) => {
    return state.topic;
  },
  getDeleted: (state) => {
    return state.deletedTopics;
  }
}

export const mutations = {
  setAll: (state, topics) => {
    state.topics = topics;
  },
  setOne: (state, topic) => {
    state.topic = topic;
  },
  setDeleted: (state, topics) => {
    state.deletedTopics = topics;
  },
  addNew: (state, topic) => {
    let topics = [];
    if (state.topics) {
      topics = [...state.topics, topic];
    } else {
      topics.push(topic);
    }
    state.topics = topics;
  },
  update: (state, topic) => {
    let index;
    state.topics.forEach((item, i) => {
      index = item.id === topic.id ? i : null;
    });
    state.topics.splice(index, 1, topic);
  },
  delete: (state, topicId) => {
    let index;
    state.topics.map((item, i) => {
      if (item.id === topicId) {
        index = i;
      }
      return true;
    });
    state.topics.splice(index, 1);
  }
}

export const actions = {
  fetchAll({ commit }) {
    return this.$axios.$get('/topics')
    .then((response) => {
      commit('setAll', response.topics);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetchByUrl({ commit }, topicUrl) {
    return this.$axios.$get(`/topics/${topicUrl}`)
    .then((response) => {
      commit('setOne', response.topic);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetchDeleted({ commit }) {
    return this.$axios.$get('/topics?deleted=true')
    .then((response) => {
      commit('setDeleted', response.topics);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  addNew({ commit }, topic) {
    return this.$axios.$post('/topics', { topic })
    .then((response) => {
      commit('addNew', response.topic);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  edit({ commit }, topic) {
    return this.$axios.$put(`/topics/${topic.id}`, { topic })
    .then((response) => {
      commit('update', response.topic);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  delete({ commit }, topicId) {
    return this.$axios.$delete(`/topics/${topicId}`)
    .then(() => {
      commit('delete', topicId);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
}