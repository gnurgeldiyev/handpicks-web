export const state = () => ({
  topic: {},
  topics: []
})

export const getters = {
  getAllTopic: (state) => {
    return state.topics;
  },
  getTopic: (state) => {
    return state.topic;
  },
}

export const mutations = {
  setAllTopic: (state, topics) => {
    state.topics = topics;
  },
  setTopic: (state, topic) => {
    state.topic = topic;
  },
  updateTopic: (state, topic) => {
    let index = null;
    state.topics.forEach((item, i) => {
      index = item.id === topic.id ? i : null;
    });
    state.topics.splice(index, 1, topic);
  },
  deleteTopic: (state, topicId) => {
    let topicIndex;
    state.topics.map((topic, index) => {
      if (topic.id === topicId) {
        topicIndex = index;
      }
      return true;
    });
    state.topics.splice(topicIndex, 1);
  }
}

export const actions = {
  fetchAllTopic({ commit }) {
    return this.$axios.$get('/topics')
    .then((response) => {
      commit('setAllTopic', response.topics);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetchTopicByUrl({ commit }, topicUrl) {
    return this.$axios.$get(`/topics/${topicUrl}`)
    .then((response) => {
      commit('setTopic', response.topic);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  addNewTopic({ commit, state }, topic) {
    return this.$axios.$post('/topics', { topic })
    .then((response) => {
      let topics = [...state.topics, response.topic];
      commit('setAllTopic', topics);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  editTopic({ commit }, topic) {
    return this.$axios.$put(`/topics/${topic.id}`, { topic })
    .then((response) => {
      commit('updateTopic', response.topic);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  deleteTopic({ commit }, topicId) {
    return this.$axios.$delete(`/topics/${topicId}`)
    .then(() => {
      commit('deleteTopic', topicId);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
}