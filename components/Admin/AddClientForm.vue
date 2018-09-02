<template>
  <div>
    <el-button 
      class="floating-button"
      icon="el-icon-circle-plus-outline" 
      round
      @click="addClientDialogVisible = true">
      New Client
    </el-button>

    <el-dialog
      :lock-scroll="true"
      :top="'8vh'"
      :visible.sync="addClientDialogVisible"
      width="35%"
      title="Add a New API Client">
      <el-form 
        ref="client" 
        :model="client"
        :rules="rules">
        <el-form-item 
          prop="name"
          label="Name">
          <el-input v-model="client.name"/>
        </el-form-item>
        <el-form-item>
          <el-button 
            style="float:right;"
            type="primary" 
            @click="submitForm('client')">Add client</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        client: {
          name: '',
        },
        rules: {
          name: [
            { required: true, message: 'Please enter a client name', trigger: 'blur' },
            { max: 64, message: 'Length should be max 64 characters', trigger: 'blur' }
          ],
        },
        addClientDialogVisible: false,
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {     
            let client = {
              name: this.client.name
            }
            const result = await this.$store.dispatch('client/addNew', client);
            if (!result) {
              this.$message({
                type: 'error',
                message: 'An error occurred.'
              });
              return false;
            }
            this.$refs[formName].resetFields();
            this.addClientDialogVisible = false;
            this.$message({
              message: 'Client added.',
              type: 'success'
            });
          } else {
            return false;
          }
        });
      },
      cancelForm(formName) {
        this.$refs[formName].resetFields();
        this.addClientDialogVisible = false;
      },
    },
  }
</script>

<style>
.floating-button {
  float: right;
  margin: 0 32px;
  transition: all 0.5s cubic-bezier(.25,.8,.25,1);
}
.floating-button:hover {
  box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.2);
}
</style>