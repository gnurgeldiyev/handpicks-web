<template>
  <div 
    v-if="type === 'deleted'"
    style="margin-bottom:64px;">
    <h2 style="color:#666666;padding:8px;">Deleted topics</h2>
    <el-table
      :data="topics"
      style="width: 100%">
      <el-table-column
        type="index"
        width="50"/>
      <el-table-column
        prop="title"
        label="Title"
        width="200">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column
        prop="url"
        label="url"
        width="200">
        <template slot-scope="scope">
          {{ scope.row.url }}
        </template>
      </el-table-column>
      <el-table-column
        prop="description"
        label="Description"
        width="400">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column/>
    </el-table>
  </div>
  <div 
    v-else
    style="margin-bottom:64px;">
    <h2 style="color:#666666;padding:8px;">Topics</h2>
    <el-table
      :data="topics"
      style="width: 100%">
      <el-table-column
        type="index"
        width="50"/>
      <el-table-column
        prop="title"
        label="Title"
        width="200">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column
        prop="url"
        label="url"
        width="200">
        <template slot-scope="scope">
          {{ scope.row.url }}
        </template>
      </el-table-column>
      <el-table-column
        prop="description"
        label="Description"
        width="400">
        <template slot-scope="scope">
          {{ scope.row.description }}
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
      topics: {
        type: Array,
        required: true,
      },
      type: {
        type: String,
        default: ''
      }
    },
  }
</script>