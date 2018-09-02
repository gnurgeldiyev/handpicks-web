export const actions = {
  async nuxtServerInit({ dispatch }) {
    await Promise.all([
      dispatch('post/fetchLatest'),
      dispatch('topic/fetchAll')
    ]);
  }
}