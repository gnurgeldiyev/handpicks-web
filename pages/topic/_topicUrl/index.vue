<template>
  <div class="content">
    <h1 
      v-if="posts.length"
      class="content_date">{{ formatDate(posts[0].published) }}</h1>
    <div class="content_posts">
      <post-card 
        v-for="(post, index) in posts"
        :key="index"
        :post="post" />
    </div>
    
  </div>
</template>

<script>
import PostCard from '@/components/Post/PostCard';
export default {
  components: {
    'post-card': PostCard,
  },
  computed: {
    posts() {
      return this.$store.getters['post/getAllPost']
    },
  },
  beforeCreate() {
    const topicUrl = this.$route.params.topicUrl;
    this.$store.dispatch('post/fetchLatestPostByTopic', topicUrl);
  },
  methods: {
    formatDate(date) {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const day = new Date(date).getDate();
      const month = months[new Date(date).getMonth()];
      const weekDay = days[new Date(date).getDay()];
      return weekDay + ', ' + month + ' ' + day;
    }
  }
}
</script>

<style scoped>
@media (max-width: 639px) {
  .content {
    margin: 0 auto;
  }
  .content_date {
    margin: 32px 16px 0 16px;
    color: #666666;
    font-size: 1.2rem;
    line-height: 1;
    font-weight: bold;
  }
  .content_posts {
    display: grid;
    grid-template-columns: 1;
  }
}
@media (min-width: 640px) and (max-width: 959px) {
  .content {
    width: 640px;
    margin: 0 auto;
  }
  .content_date {
    margin: 32px 32px 0 32px;
    color: #666666;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: bold;
  }
  .content_posts {
    display: grid;
    grid-template-columns: repeat(2, 50% [col-start]);
  }
}
@media (min-width: 960px) and (max-width: 1279px) {
  .content {
    width: 960px;
    margin: 0 auto;
  }
  .content_date {
    margin: 32px 32px 0 32px;
    color: #666666;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: bold;
  }
  .content_posts {
    display: grid;
    grid-template-columns: repeat(3, 33.3% [col-start]);
  }
}

@media (min-width: 1280px) {
  .content {
    width: 1280px;
    margin: 0 auto;
  }
  .content_date {
    margin: 32px 32px 0 32px;
    color: #666666;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: bold;
  }
  .content_posts {
    display: grid;
    grid-template-columns: repeat(4, 25% [col-start]);
  }
}
</style>