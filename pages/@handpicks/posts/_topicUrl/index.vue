<template>
  <div>
    <add-post-form />
    <h2 class="page_title">{{ topic.title }}</h2>
    <div v-if="postsUpcoming.length > 0">
      <h4 class="page_title">Upcoming</h4>
      <post-card
        v-for="post in postsUpcoming"
        :key="post.id"
        :post="post"/>
    </div>
    <div v-if="!posts.length">
      <h4 class="page_title">[not found]</h4>
    </div>
    <div v-else>
      <h4 class="page_title">Published</h4>
      <post-card
        v-for="post in posts"
        :key="post.id"
        :post="post"/>
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/Admin/PostCard';
import AddPostForm from '@/components/Admin/AddPostForm';

  export default {
    layout: 'admin',
    components: {
      'post-card': PostCard,
      'add-post-form': AddPostForm,
    },
    head() {
      return {
        title: `Editor panel: Posts on ${this.topic.title}`,
      }
    },
    computed: {
      posts() {
        if (this.$store.getters['post/getAll']) {
          return this.$store.getters['post/getAll']
        }
      },
      postsUpcoming() {
        if (this.$store.getters['post/getUpcoming']) {
          return this.$store.getters['post/getUpcoming']
        }
      },
      topic() {
        return this.$store.getters['topic/getOne'];
      }
    },
    beforeCreate() {
      this.$store.dispatch('post/clearAll');
      this.$store.dispatch('post/clearUpcoming');
      const topicUrl = this.$route.params.topicUrl;
      this.$store.dispatch('topic/fetchByUrl', topicUrl);
      this.$store.dispatch('post/fetchByTopic', topicUrl);
      this.$store.dispatch('post/fetchUpcoming', topicUrl);
    },
  }
</script>
