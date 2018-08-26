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
            <span style="word-break: break-all;">
              {{ getRequestHeader(scope.row.id) }}
            </span>
            <el-button 
              slot="reference"
              size="small"
              @click="fetchKey(scope.row.id)">Show</el-button>
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
          <client-list-operations :client="scope.row"/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ClientListOperations from '@/components/Admin/ClientListOperations';

  export default {
    components: {
      'client-list-operations': ClientListOperations,
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
      },
      fetchKey(clientId) {
        this.$store.dispatch('client/fetchClientKey', clientId);
      },
      getRequestHeader(clientId) {
        const client = this.$store.getters['client/getClient'];
        return `name=${client.name}, apiKey=${client.apiKey}`;
      }
    }
  }
</script>
