<template>
  <div>
    <el-button 
      class="floating-button"
      icon="el-icon-circle-plus-outline" 
      round
      @click="addDialogVisible = true">
      New Manager
    </el-button>

    <el-dialog
      :lock-scroll="true"
      :top="'8vh'"
      :visible.sync="addDialogVisible"
      width="35%"
      title="Add a New Manager">
      <el-form 
        ref="manager" 
        :model="manager"
        :rules="rules">
        <el-form-item 
          prop="name"
          label="Name">
          <el-input v-model="manager.name"/>
        </el-form-item>
        <el-form-item 
          prop="lastname"
          label="Lastname">
          <el-input v-model="manager.lastname"/>
        </el-form-item>
        <el-form-item 
          prop="email"
          label="Email">
          <el-input v-model="manager.email"/>
        </el-form-item>
        <el-form-item 
          prop="role"
          label="Role">
          <el-select 
            v-model="manager.role" 
            style="width: 100%;">
            <el-option 
              label="Admin" 
              value="admin" />
            <el-option 
              label="Editor" 
              value="editor" />
          </el-select>
        </el-form-item>
        <el-form-item 
          prop="password"
          label="Password">
          <el-input 
            v-model="manager.password"
            type="password"/>
        </el-form-item>
        <el-form-item>
          <el-button 
            style="float:right;"
            type="primary" 
            @click="submitForm('manager')">Add manager</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        manager: {
          name: '',
          lastname: '',
          email: '',
          role: '',
          password: '',
        },
        rules: {
          name: [
            { required: true, message: 'Please enter a manager name', trigger: 'blur' },
            { max: 64, message: 'Length should be max 64 characters', trigger: 'blur' }
          ],
          lastname: [
            { required: true, message: 'Please enter a manager lastname', trigger: 'blur' },
            { max: 64, message: 'Length should be max 64 characters', trigger: 'blur' }
          ],
          email: [
            { required: true, message: 'Please enter a email', trigger: 'blur' },
            { type: 'email', message: 'Please enter a valid email', trigger: 'blur' }
          ],
          role: [
            { required: true, message: 'Please select a manager role', trigger: 'change' },
          ],
          password: [
            { required: true, message: 'Please enter a password', trigger: 'blur' },
            { min: 6, message: 'Length should be min 6 characters', trigger: 'blur' }
          ],
        },
        addDialogVisible: false,
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {     
            let manager = {
              name: this.manager.name,
              lastname: this.manager.lastname,
              email: this.manager.email,
              role: this.manager.role,
              password: this.manager.password,
            }
            const result = await this.$store.dispatch('manager/addNew', manager);
            if (!result) {
              this.$message({
                type: 'error',
                message: 'An error occurred.'
              });
              return false;
            }
            this.$refs[formName].resetFields();
            this.addDialogVisible = false;
            this.$message({
              message: 'Manager added.',
              type: 'success'
            });
          } else {
            return false;
          }
        });
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