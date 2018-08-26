<template>
  <div>
    <h2 style="color:#666666;padding:8px;">Managers</h2>
    <el-table
      :data="managers"
      style="width: 100%">
      <el-table-column
        type="index"
        width="50"/>
      <el-table-column
        prop="username"
        label="Username"
        width="200">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="200">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column
        prop="lastname"
        label="Lastname"
        width="200">
        <template slot-scope="scope">
          {{ scope.row.lastname }}
        </template>
      </el-table-column>
      <el-table-column
        prop="role"
        label="Role"
        width="200">
        <template slot-scope="scope">
          {{ scope.row.role }}
        </template>
      </el-table-column>
      <el-table-column
        label="Operations">
        <template slot-scope="scope">
          <manager-list-operations :manager="scope.row" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ManagerListOperations from '@/components/Admin/ManagerListOperations';

  export default {
    components: {
      'manager-list-operations': ManagerListOperations,      
    },
    props: {
      managers: {
        type: Array,
        required: true,
      },
    },
  }
</script>