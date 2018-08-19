<template>
  <div>
    <h2 style="color:#666666;padding:8px;">API Clients</h2>
    <el-table
      :data="clients"
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
        prop="apiKey"
        label="API Key"
        width="200">
        <template slot-scope="scope">
          <el-popover
            placement="bottom"
            width="400"
            trigger="click">
            <span style="overflow-wrap: break-word;">
              {{ scope.row.apiKey }}
            </span>
            <el-button slot="reference">Show</el-button>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        prop="created"
        label="Created date"
        width="200">
        <template slot-scope="scope">
          {{ formatDate(scope.row.created) }}
        </template>
      </el-table-column>
      <el-table-column
        label="Operations">
        <template slot-scope="scope">
          <topic-list-operations :topic="scope.row"/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import TopicListOperations from '@/components/Admin/TopicListOperations';

  export default {
    components: {
      'topic-list-operations': TopicListOperations,
    },
    props: {
      clients: {
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
      }
    }
  }
</script>
<style scoped>
.popover {
  display: inline-block;
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: normal;
}
</style>
