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
    head() {
      return {
        title: 'Editor panel: Users',
      }
    },
    computed: {
      users7() {
        return this.$store.getters['user/get7'];
      },
      users28() {
        return this.$store.getters['user/get28'];
      },
      usersTotal() {
        const totalUser = this.$store.getters['user/getTotal'];
        return [totalUser];
      }
    },
    beforeCreate() {
      this.$store.dispatch('user/fetch7');
      this.$store.dispatch('user/fetch28');
      this.$store.dispatch('user/fetchTotal');
    }
  }
</script>