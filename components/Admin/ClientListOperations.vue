<template>
  <div>
    <el-button
      size="mini"
      style="margin-left: 8px;"
      type="danger"
      @click="deleteClientAlert(client.name)">Delete</el-button>
  </div>
</template>

<script>
  export default {
    props: {
      client: {
        type: Object,
        required: true
      }
    },
    methods: {
      deleteClientAlert(id) {
        this.$confirm('This will permanently delete the API client. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
        }).then(() => {
          // this.$store.dispatch('deleteDemoRequest', id);
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });          
        });
      },
    }
  }
</script>