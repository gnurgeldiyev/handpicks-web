<template>
  <div class="post">
    <img 
      v-lazy="post.thumbnail"
      :alt="post.title"
      class="post_thumbnail">
    <h2 class="post_title">
      {{ post.title }}
    </h2>
    <span class="post_note">
      Editor's note
    </span>
    <span class="post_seperator">
      •
    </span>
    <span class="post_date">
      Posted on August 12th, Sunday
    </span>
    <p class="post_description">
      {{ post.description }}
    </p>
    <div class="post_action">
      <el-button 
        type="primary"
        round
        @click="goToSource(post.url)">View Source 
        <i class="el-icon-arrow-right el-icon-right"/>
      </el-button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      },
    },
    data() {
      return {
        isPostViewDialogVisible: true,
      }
    },
    methods: {
      goToSource(url) {
        const windowWidth = window.innerWidth;
        if (windowWidth < 768) {
          window.open(url, '_self');
        } else {
          window.open(url, '_blank');
        }
      },
    }
  }
</script>

<style>
@media (max-width: 639px) {
  .post {
    width: calc(100% - 32px);
    margin: 32px 16px;
  }
  .post_thumbnail {
    width: 100%;
    min-height: 160px;
    height: 30vh;
    max-height: 320px;
    border-radius: 2px;
    object-fit: cover;
  }
  .post_title {
    color: #000001;
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 700;
    text-align: center;
    margin: 16px 0;
  }
  .post_note {
    color: #666666;
    font-size: 0.8rem;
    line-height: 1;
    font-weight: 700;
  }
  .post_date {
    color: #666666;
    font-size: 0.8rem;
    line-height: 1;
    font-weight: 400;
  }
  .post_seperator {
    margin: 0 8px;
    color: #666666;
    font-size: 0.8rem;
    line-height: 1;
    font-weight: 700;
  }
  .post_description {
    color: #000001;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 300;
    margin: 8px 0 0 0;
  }
  .post_action {
    margin: 32px 0 0 0;
    text-align: center;
  }
}
@media (min-width: 640px) {
  .post {
    width: 80%;
    max-width: 640px;
    margin: 40px auto 40px auto;
  }
  .post_thumbnail {
    width: 100%;
    height: 300px;
    border-radius: 2px;
    object-fit: cover;
  }
  .post_title {
    color: #000001;
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 700;
    text-align: center;
    margin: 16px 0;
  }
  .post_note {
    color: #666666;
    font-size: 0.8rem;
    line-height: 1;
    font-weight: 700;
  }
  .post_date {
    color: #666666;
    font-size: 0.8rem;
    line-height: 1;
    font-weight: 400;
  }
  .post_seperator {
    margin: 0 8px;
    color: #666666;
    font-size: 0.8rem;
    line-height: 1;
    font-weight: 700;
  }
  .post_description {
    color: #000001;
    font-size: 1.1rem;
    line-height: 1.5;
    font-weight: 300;
    margin: 8px 0 0 0;
  }
  .post_action {
    margin: 32px 0 0 0;
    text-align: center;
  }
}
</style>