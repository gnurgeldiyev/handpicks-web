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
    computed: {
      posts() {
        if (this.$store.getters['post/getAllPost']) {
          return this.$store.getters['post/getAllPost']
        }
      },
      postsUpcoming() {
        if (this.$store.getters['post/getUpcomingPost']) {
          return this.$store.getters['post/getUpcomingPost']
        }
      },
      topic() {
        return this.$store.getters['topic/getTopic'];
      }
    },
    beforeCreate() {
      const topicUrl = this.$route.params.topicUrl;
      this.$store.dispatch('topic/fetchTopicByUrl', topicUrl);
      this.$store.dispatch('post/fetchPostByTopic', topicUrl);
      this.$store.dispatch('post/fetchUpcomingPost', topicUrl);
    },
  }
</script>
