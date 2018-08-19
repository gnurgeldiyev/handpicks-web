<template>
  <div>
    <el-button
      size="mini"
      style="margin-right: 8px;"
      @click="editManagerDialogVisible = true">Edit</el-button>

    <el-dialog
      :lock-scroll="true"
      :top="'8vh'"
      :visible.sync="editManagerDialogVisible"
      width="35%"
      title="Edit the Manager">
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
            @click="submitForm('manager')">Update</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-button
      size="mini"
      style="margin-left: 8px;"
      type="danger"
      @click="deleteManagerAlert(manager.id)">Delete</el-button>
  </div>
</template>

<script>
  export default {
    props: {
      manager: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        editManagerDialogVisible: false,
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
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate( (valid) => {
          if (valid) {     
            if (this.manager.password !== undefined && this.manager.password.length < 6) {
              this.$message({
                message: 'Password should be min 6 characters.',
                type: 'warning'
              });
              return false;
            } 

            let manager = {
              name: this.manager.name,
              lastname: this.manager.lastname,
              email: this.manager.email,
              role: this.manager.role,
              password: this.manager.password,
            }
            
            console.log(manager);
            this.$refs[formName].resetFields();
            this.editManagerDialogVisible = false;
            this.$message({
              message: 'Manager updated.',
              type: 'success'
            });
          } else {
            return false;
          }
        });
      },
      cancelForm(formName) {
        this.$refs[formName].resetFields();
        this.editManagerDialogVisible = false;
      },
      deleteManagerAlert(id) {
        this.$confirm('This will permanently delete the manager. Continue?', 'Warning', {
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