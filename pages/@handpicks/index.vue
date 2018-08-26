<template>
  <div>
    <h2 class="page_title">Today's posts</h2>
    <div v-if="!postsToday.length">
      <h4 class="page_title">[not found]</h4>
    </div>
    <div v-else>
      <post-card 
        v-for="post in postsToday"
        :key="post.id"
        :post="post" />
    </div>

    <h2 class="page_title">Total users</h2>
    <div v-if="!usersTotal">
      <h4 class="page_title">[not found]</h4>
    </div>
    <div v-else>
      <user-report-card 
        :users="usersTotal"
        :title="'Total'" />
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/Admin/PostCard';
import UserReportCard from '@/components/Admin/UserReportCard';

  export default {
    layout: 'admin',
    components: {
      'post-card': PostCard,
      'user-report-card': UserReportCard,
    },
    computed: {
      postsToday() {
        if (this.$store.getters['post/getAllPost']) {
          return this.$store.getters['post/getTodayPost']
        }
      },
      usersTotal() {
        const totalUser = this.$store.getters['user/getUsersTotal'];
        return [totalUser];
      }
    },
    beforeCreate() {
      this.$store.dispatch('post/fetchTodayPost');
      this.$store.dispatch('user/fetchUsersTotal');
    }
  }
</script>
