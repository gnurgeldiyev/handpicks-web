export const state = () => ({
  post: {},
  posts: [],
  postsToday: [],
  postsUpcoming: [],
})

export const getters = {
  getOne: (state) => {
    return state.post;
  },
  getAll: (state) => {
    return state.posts;
  },
  getToday: (state) => {
    return state.postsToday;
  },
  getUpcoming: (state) => {
    return state.postsUpcoming;
  },
}

export const mutations = {
  setOne: (state, post) => {
    state.post = post;
  },
  setAll: (state, posts) => {
    state.posts = posts;
  },
  setToday: (state, posts) => {
    state.postsToday = posts;
  },
  setUpcoming: (state, posts) => {
    state.postsUpcoming = posts;
  },
  clearAll: (state) => {
    state.posts = [];
  },
  clearUpcoming: (state) => {
    state.postsUpcoming = [];
  },
  addNew: (state, post) => {
    const today = new Date();
    if (post.published > today) {
      let postsUpcoming = [];
      if (state.postsUpcoming) {
        postsUpcoming = [...state.postsUpcoming, post];
      } else {
        postsUpcoming.push(post);
      }
      state.postsUpcoming = postsUpcoming;
    } else {
      let posts = [];
      if (state.posts) {
        posts = [...state.posts, post];
      } else {
        posts.push(post);
      }
      state.posts = posts;
    }
  },
  update: (state, post) => {
    const today = new Date();
    if (post.published > today) {
      let index;
      state.postsUpcoming.forEach((item, i) => {
        index = item.id === post.id ? i : null;
      });
      state.postsUpcoming.splice(index, 1, post);
    } else {
      let index;
      state.posts.forEach((item, i) => {
        index = item.id === post.id ? i : null;
      });
      state.posts.splice(index, 1, post);
    }
  },
  delete: (state, postId) => {
    let index;
    state.posts.map((item, i) => {
      if (item.id === postId) {
        index = i;
      }
      return true;
    });
    state.posts.splice(index, 1);
  },
  deleteUpcoming: (state, postId) => {
    let index;
    state.postsUpcoming.map((item, i) => {
      if (item.id === postId) {
        index = i;
      }
      return true;
    });
    state.postsUpcoming.splice(index, 1);
  }
}

export const actions = {
  fetchLatest({ commit }) {
    return this.$axios.$get('/posts?date=latest')
    .then((response) => {
      commit('setAll', response.posts);
      return true;
    })
    .catch((err) => {
      commit('clearAll');
      console.log(err);
      return false;
    });
  },
  fetchOne({ commit }, postId) {
    return this.$axios.$get(`/posts/${postId}`)
    .then((response) => {
      commit('setOne', response.post);
      return true;
    })
    .catch((err) => {
      return false;
    });
  },
  fetchByTopic({ commit }, topicUrl) {
    return this.$axios.$get(`/posts/topics/${topicUrl}`)
    .then((response) => {
      commit('setAll', response.posts);
      return true;
    })
    .catch((err) => {
      commit('clearAll');
      console.log(err);
      return false;
    });
  },
  fetchLatestByTopic({ commit }, topicUrl) {
    return this.$axios.$get(`/posts/topics/${topicUrl}/latest`)
    .then((response) => {
      commit('setAll', response.posts);
      return true;
    })
    .catch((err) => {
      commit('clearAll');
      console.log(err);
      return false;
    });
  },
  fetchToday({ commit }) {
    const day = new Date().getUTCDate();
    const month = (new Date().getUTCMonth() + 1) < 10 ? '0' + (new Date().getUTCMonth() + 1) : (new Date().getUTCMonth() + 1);
    const year = new Date().getUTCFullYear();
    const today = year + '-' + month + '-' + day;
    return this.$axios.$get(`/posts?date=${today}`)
    .then((response) => {
      commit('setToday', response.posts);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetchUpcoming({ commit }, topicUrl) {
    return this.$axios.$get(`/posts/topics/${topicUrl}/upcoming`)
    .then((response) => {
      commit('setUpcoming', response.posts);
      return true;
    })
    .catch((err) => {
      commit('clearUpcoming');
      console.log(err);
      return false;
    });
  },
  clearAll({ commit }) {
    commit('clearAll');
  },
  clearUpcoming({ commit }) {
    commit('clearUpcoming');
  },
  addNew({ commit }, post) {
    return this.$axios.$post('/posts', { post })
    .then((response) => {
      commit('addNew', response.post);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  edit({ commit }, post) {
    return this.$axios.$put(`/posts/${post.id}`, { post })
    .then((response) => {
      commit('update', response.post);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  delete({ commit }, postId) {
    return this.$axios.$delete(`/posts/${postId}`)
    .then(() => {
      commit('delete', postId);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  deleteUpcoming({ commit }, postId) {
    return this.$axios.$delete(`/posts/${postId}`)
    .then(() => {
      commit('deleteUpcoming', postId);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
}