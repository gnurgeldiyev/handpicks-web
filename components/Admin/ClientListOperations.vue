<template>
  <div>
    <el-button
      size="mini"
      style="margin-left: 8px;"
      type="danger"
      @click="deleteClientAlert(client.id)">Delete</el-button>
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
        }).then(async () => {
          const result = await this.$store.dispatch('client/deleteClient', id);
          if (!result) {
            this.$message({
              type: 'error',
              message: 'An error occurred.'
            }); 
            return false;
          }
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