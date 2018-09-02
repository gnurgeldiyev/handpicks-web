<template>
  <div>
    <h2 style="color:#666666;padding:8px;">Messages</h2>
    <el-table
      :data="messages"
      style="width: 100%">
      <el-table-column
        type="index"
        width="50"/>
      <el-table-column
        prop="name"
        label="Name"
        width="200">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column
        prop="email"
        label="Email"
        width="200">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column
        prop="message"
        label="Message"
        width="400">
        <template slot-scope="scope">
          {{ scope.row.message }}
        </template>
      </el-table-column>
      <el-table-column
        prop="Date"
        label="Date"
        width="200">
        <template slot-scope="scope">
          {{ formatDate(scope.row.created) }}
        </template>
      </el-table-column>
      <el-table-column
        label="Operations">
        <template slot-scope="scope">
          <message-list-operations :message="scope.row"/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import MessageListOperations from '@/components/Admin/MessageListOperations';

  export default {
    components: {
      'message-list-operations': MessageListOperations,
    },
    props: {
      messages: {
        type: Array,
        required: true,
      },
    },
    methods: {
      formatDate(date) {
        const day = new Date(date).getDate();
        const month = new Date(date).getMonth() + 1;
        const year = new Date(date).getFullYear();
        return day + '.' + month + '.' + year;
      },
    }
  }
</script>
