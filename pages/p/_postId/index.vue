<template>
  <div 
    v-if="post && Object.keys(post).length > 0"
    class="content">
    <post-view :post="post" />
  </div>
</template>

<script>
import PostView from '@/components/Post/PostView';

export default {
  components: {
    'post-view': PostView,
  },
  computed: {
    post() {
      return this.$store.getters['post/getOne'];
    }
  },
  beforeCreate() {
    const postId = this.$route.params.postId;
    this.$store.dispatch('post/fetchOne', postId);
  },
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