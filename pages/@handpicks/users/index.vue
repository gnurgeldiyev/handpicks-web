<template>
  <div>
    <h2 class="page_title">Art Lover Users</h2>
    <el-row>
      <el-col :span="8">
        <user-report-card 
          :users="lastWeekUsers" 
          :title="'Last Week'" />
      </el-col>
      <el-col :span="8">
        <user-report-card 
          :users="lastMonthUsers"
          :title="'Last 28 Days'" />
      </el-col>
      <el-col :span="8">
        <user-report-card 
          :users="totalUsers"
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
    data() {
      return {
        lastWeekUsers: [
          {
            name: 'Lara Jobs'
          },
          {
            name: 'Maya Bezos'
          },
          {
            name: 'Lisa Gates'
          },
          {
            name: 'Aya Ive'
          }
        ],
        lastMonthUsers: [
          {
            name: 'Lara Jobs'
          },
          {
            name: 'Maya Bezos'
          },
          {
            name: 'Lisa Gates'
          },
          {
            name: 'Aya Ive'
          },
          {
            name: 'Lara Jobs'
          },
          {
            name: 'Maya Bezos'
          },
          {
            name: 'Lisa Gates'
          },
          {
            name: 'Aya Ive'
          }
        ],
        totalUsers: [
          {
            name: 'Lara Jobs'
          },
          {
            name: 'Maya Bezos'
          },
          {
            name: 'Lisa Gates'
          },
          {
            name: 'Aya Ive'
          },
          {
            name: 'Lara Jobs'
          },
          {
            name: 'Maya Bezos'
          },
          {
            name: 'Lisa Gates'
          },
          {
            name: 'Aya Ive'
          }
        ],
      }
    }
  }
</script>