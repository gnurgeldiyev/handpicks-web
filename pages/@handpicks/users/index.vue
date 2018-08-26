<template>
  <div>
    <h2 class="page_title">Art Lover Users</h2>
    <el-row>
      <el-col :span="8">
        <user-report-card 
          :users="users7" 
          :title="'Last Week'" />
      </el-col>
      <el-col :span="8">
        <user-report-card 
          :users="users28"
          :title="'Last 28 Days'" />
      </el-col>
      <el-col :span="8">
        <user-report-card 
          :users="usersTotal"
          :title="'Total'" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserReportCard from '@/components/Admin/UserReportCard';

  export default {
    layout: 'admin',
    components: {
      'user-report-card': UserReportCard,
    },
    computed: {
      users7() {
        return this.$store.getters['user/getUsers7'];
      },
      users28() {
        return this.$store.getters['user/getUsers28'];
      },
      usersTotal() {
        const totalUser = this.$store.getters['user/getUsersTotal'];
        return [totalUser];
      }
    },
    beforeCreate() {
      this.$store.dispatch('user/fetchUsers7');
      this.$store.dispatch('user/fetchUsers28');
      this.$store.dispatch('user/fetchUsersTotal');
    }
  }
</script>