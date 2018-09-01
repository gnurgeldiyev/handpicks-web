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
  getAllPost: (state) => {
    return state.posts;
  },
  getTodayPost: (state) => {
    return state.postsToday;
  },
  getUpcomingPost: (state) => {
    return state.postsUpcoming;
  },
}

export const mutations = {
  setOne: (state, post) => {
    state.post = post;
  },
  setAllPost: (state, posts) => {
    state.posts = posts;
  },
  setTodayPost: (state, posts) => {
    state.postsToday = posts;
  },
  setUpcomingPost: (state, posts) => {
    state.postsUpcoming = posts;
  },
  setAllPostEmpty: (state) => {
    state.posts = [];
  },
  setUpcomingPostEmpty: (state) => {
    state.postsUpcoming = [];
  },
  updatePost: (state, post) => {
    let index = null;
    state.posts.forEach((item, i) => {
      index = item.id === post.id ? i : null;
    });
    state.posts.splice(index, 1, post);
  },
  deletePost: (state, postId) => {
    let postIndex;
    state.posts.map((post, index) => {
      if (post.id === postId) {
        postIndex = index;
      }
      return true;
    });
    state.posts.splice(postIndex, 1);
  }
}

export const actions = {
  fetchLatestPost({ commit }) {
    return this.$axios.$get('/posts?date=latest')
    .then((response) => {
      commit('setAllPost', response.posts);
      return true;
    })
    .catch((err) => {
      commit('setAllPostEmpty');
      console.log(err);
      return false;
    });
  },
  fetchById({ commit }, postId) {
    return this.$axios.$get(`/posts/${postId}`)
    .then((response) => {
      commit('setOne', response.post);
      return true;
    })
    .catch((err) => {
      return false;
    });
  },
  fetchPostByTopic({ commit }, topicUrl) {
    return this.$axios.$get(`/posts/topics/${topicUrl}`)
    .then((response) => {
      commit('setAllPost', response.posts);
      return true;
    })
    .catch((err) => {
      commit('setAllPostEmpty');
      console.log(err);
      return false;
    });
  },
  fetchLatestPostByTopic({ commit }, topicUrl) {
    return this.$axios.$get(`/posts/topics/${topicUrl}/latest`)
    .then((response) => {
      commit('setAllPost', response.posts);
      return true;
    })
    .catch((err) => {
      commit('setAllPostEmpty');
      console.log(err);
      return false;
    });
  },
  fetchTodayPost({ commit }) {
    const day = new Date().getUTCDate();
    const month = (new Date().getUTCMonth() + 1) < 10 ? '0' + (new Date().getUTCMonth() + 1) : (new Date().getUTCMonth() + 1);
    const year = new Date().getUTCFullYear();
    const today = year + '-' + month + '-' + day;
    return this.$axios.$get(`/posts?date=${today}`)
    .then((response) => {
      commit('setTodayPost', response.posts);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  fetchUpcomingPost({ commit }, topicUrl) {
    return this.$axios.$get(`/posts/topics/${topicUrl}/upcoming`)
    .then((response) => {
      commit('setUpcomingPost', response.posts);
      return true;
    })
    .catch((err) => {
      commit('setUpcomingPostEmpty');
      console.log(err);
      return false;
    });
  },
  addNewPost({ commit, state }, post) {
    return this.$axios.$post('/posts', { post })
    .then((response) => {
      let posts = [...state.posts, response.post];
      commit('setAllPost', posts);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  editPost({ commit }, post) {
    console.log(post);
    return this.$axios.$put(`/posts/${post.id}`, { post })
    .then((response) => {
      console.log(response.post);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
  deletePost({ commit }, postId) {
    return this.$axios.$delete(`/posts/${postId}`)
    .then(() => {
      commit('deletePost', postId);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  },
}