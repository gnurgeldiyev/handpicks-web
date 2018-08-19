<template>
  <el-card class="card">
    <div 
      class="card_head"
      @click="cardDialogVisible = true">
      <img 
        :src="post.thumbnail" 
        class="card_head_img">
      <span class="card_head_date">
        {{ post.created }}
      </span>
    </div>
    <div class="card_body">
      <h4 
        class="card_body_title"
        @click="cardDialogVisible = true">{{ post.title }}</h4>
      <span class="card_owner">
        {{ post.owner }}
      </span>
      <span class="card_seperator">
        •
      </span>
      <span class="card_hostname">
        {{ post.hostname }}
      </span>
    </div>
    <div class="card_body_operations">
      <post-card-operations :post="post" />
    </div>

    <el-dialog
      :visible.sync="cardDialogVisible"
      :lock-scroll="true"
      :custom-class="'card_dialog'">
      <img 
        :src="post.thumbnail" 
        :alt="post.title"
        class="card_dialog_thumbnail">
      <h2 class="card_dialog_title">
        {{ post.title }}
      </h2>
      <span class="card_dialog_note">
        {{ post.owner }}'s note
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
  </el-card>
</template>

<script>
import PostCardOperations from '@/components/Admin/PostCardOperations';

  export default {
    components: {
      'post-card-operations': PostCardOperations
    },
    props: {
      post: {
        type: Object,
        required: true
      },
    },
    data () {
      return {
        cardDialogVisible: false
      }
    },
  }
</script>

<style>
  .card {
    width: 320px;
    height: auto;
    display: inline-flex;
    margin: 16px;
  }
  .card .el-card__body {
    padding: 0 !important;
  }
  .card_head {
    position: relative;
  }
  .card_head:hover {
    cursor: pointer;
  }
  .card_head_date {
    position: absolute;
    color: #323232;
    font-size: 0.9rem;
    font-weight: 700;
    padding: 4px 8px;
    background: rgba(255, 255, 255, 1);
    border-radius: 3px;
    top: 8px;
    left: 8px;
  }
  .card_head_img {
    min-width: 320px;
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
  .card_body {
    padding: 15px;
  }
  .card_body_title {
    color: #323232;
    font-size: 1.1rem;
    font-weight: bolder;
    margin-bottom: 16px;
  }
  .card_body_title:hover {
    cursor: pointer;
  }
  .card_owner {
    color: #323232;
    font-size: 0.8rem;
    line-height: 1;
    font-weight: 700;
  }
  .card_hostname {
    color: #323232;
    font-size: 0.8rem;
    line-height: 1;
    font-weight: 400;
  }
  .card_seperator {
    margin: 0 4px;
    color: #323232;
    font-size: 0.8rem;
    line-height: 1;
    font-weight: 700;
  }
  .card_body_text {
    color: #323232;
    font-size: 0.8rem;
    line-height: 1.3rem;
    font-weight: lighter;
    margin: 16px 0 4px 0;
  }
  .card_body_operations {
    float: right;
    margin: 16px 16px 4px 16px;
  }
  .card_body_operations_edit {
    color: #909399;
    font-size: 1.4rem;
    margin-left: 5px;
  }
  .card_body_operations_delete {
    color: #F56C6C;
    font-size: 1.4rem;
    margin-left: 5px;
  }
  .card_deletePopover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.2);
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
</style>