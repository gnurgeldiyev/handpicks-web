<template>
  <div>
    <div 
      class="card"
      @click="cardDialogVisible = true">
      <div class="card_head">
        <img 
          v-lazy="post.thumbnail"
          :alt="post.title"
          class="card_head_thumbnail">
      </div>
      <div class="card_body">
        <p class="card_body_hostname">
          {{ post.hostname }}
        </p>
        <h3 class="card_body_title">
          {{ post.title }}
        </h3>
      </div>
    </div>
    <el-dialog
      :visible.sync="cardDialogVisible"
      :lock-scroll="true"
      :custom-class="'card_dialog'">
      <img 
        v-lazy="post.thumbnail"
        :alt="post.title"
        class="card_dialog_thumbnail">
      <h2 class="card_dialog_title">
        {{ post.title }}
      </h2>
      <span class="card_dialog_note">
        Editor's note
      </span>
      <p class="card_dialog_description">
        {{ post.summary }}
      </p>
      <div class="card_dialog_action">
        <el-button 
          type="primary"
          round
          @click="goToSource(post.url)">View Source 
          <i class="el-icon-arrow-right el-icon-right"/>
        </el-button>
      </div>
    </el-dialog>
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
        cardDialogVisible: false
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
  .card {
    width: calc(100% - 32px);
    height: auto;
    padding: 16px;
    margin: 16px;
    border-radius: 2px;
    border: 1px solid #eeeeee;
  }
  .card_head {
    width: 100%;
    min-height: 240px;
    height: 25vh;
    max-height: 320px;
  }
  .card_head_thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
  }
  .card_body {
    width: 100%;
    height: auto;
  }
  .card_body_hostname {
    margin: 8px 0 0 0;
    color: #666666;
    font-size: 0.8rem;
    font-weight: 600;
  }
  .card_body_title {
    color: #000001;
    font-size: 1.1rem;
    line-height: 1.5;
    font-weight: 600;
    margin: 16px 0 0 0;
  }
  .card_dialog {
    width: 100%;
    min-height: 100vh;
    margin: 0 !important;
    border-radius: 0 !important;
  }
  .card_dialog_thumbnail {
    width: 100%;
    height: 30vh;
    max-height: 320px;
    border-radius: 2px;
    object-fit: cover;
  }
  .card_dialog_title {
    color: #000001;
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 700;
    text-align: center;
    margin: 16px 0;
  }
  .card_dialog_note {
    color: #666666;
    font-size: 0.8rem;
    line-height: 1.5;
    font-weight: 700;
  }
  .card_dialog_description {
    color: #000001;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 300;
    margin: 8px 0 0 0;
  }
  .card_dialog_action {
    margin: 32px 0 0 0;
    text-align: center;
  }
}
@media (min-width: 640px) {
  .card {
    width: 288px;
    height: auto;
    padding: 16px;
    margin: 16px;
    border-radius: 2px;
    transition: background 0.5s cubic-bezier(.25,.8,.25,1);
  }
  .card:hover, 
  .card:hover *:hover {
    background-color: #F5F5F5;
    cursor: pointer;
  }
  .card_head {
    width: 256px;
    height: 144px;
  }
  .card_head_thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
  }
  .card_body {
    width: 100%;
    height: auto;
  }
  .card_body_hostname {
    margin: 8px 0 0 0;
    color: #666666;
    font-size: 0.8rem;
    font-weight: 600;
  }
  .card_body_title {
    color: #000001;
    font-size: 1.1rem;
    line-height: 1.5;
    font-weight: 600;
    margin: 16px 0 0 0;
  }
  .card_dialog {
    width: 80%;
    max-width: 640px;
    margin: 6vh auto 0 auto !important;
  }
  .card_dialog_thumbnail {
    width: 100%;
    height: 300px;
    border-radius: 2px;
    object-fit: cover;
  }
  .card_dialog_title {
    color: #000001;
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 700;
    text-align: center;
    margin: 16px 0;
  }
  .card_dialog_note {
    color: #666666;
    font-size: 0.8rem;
    line-height: 1.5;
    font-weight: 700;
  }
  .card_dialog_description {
    color: #000001;
    font-size: 1.1rem;
    line-height: 1.5;
    font-weight: 300;
    margin: 8px 0 0 0;
  }
  .card_dialog_action {
    margin: 32px 0 0 0;
    text-align: center;
  }
}
</style>