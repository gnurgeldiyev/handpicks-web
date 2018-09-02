<template>
  <div>
    <el-button
      size="mini"
      style="margin-left: 8px;"
      type="danger"
      @click="deleteAlert(message.id)">Delete</el-button>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: Object,
        required: true
      }
    },
    methods: {
      deleteAlert(id) {
        this.$confirm('This will permanently delete the message. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
        }).then(async () => {
          const result = await this.$store.dispatch('message/delete', id);
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