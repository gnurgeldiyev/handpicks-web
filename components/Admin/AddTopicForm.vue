<template>
  <div>
    <el-button 
      class="floating-button"
      icon="el-icon-circle-plus-outline" 
      round
      @click="addDialogVisible = true">
      New Topic
    </el-button>

    <el-dialog
      :lock-scroll="true"
      :top="'8vh'"
      :visible.sync="addDialogVisible"
      width="35%"
      title="Add a New Topic">
      <el-form 
        ref="topic" 
        :model="topic"
        :rules="rules">
        <el-form-item 
          prop="title"
          label="Title">
          <el-input v-model="topic.title"/>
        </el-form-item>
        <el-form-item 
          prop="description"
          label="Description">
          <el-input
            :rows="4"
            v-model="topic.description"
            type="textarea"/>
        </el-form-item>
        <el-form-item>
          <el-button 
            style="float:right;"
            type="primary" 
            @click="submitForm('topic')">Add topic</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        topic: {
          title: '',
          description: '',
        },
        rules: {
          title: [
            { required: true, message: 'Please enter a topic title', trigger: 'blur' },
            { max: 64, message: 'Length should be max 64 characters', trigger: 'blur' }
          ],
          description: [
            { required: true, message: 'Please enter a description', trigger: 'blur' },
            { max: 128, message: 'Length should be max 128 characters', trigger: 'blur' }
          ],
        },
        addDialogVisible: false,
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {     
            let topic = {
              title: this.topic.title,
              description: this.topic.description
            }
            const result = await this.$store.dispatch('topic/addNew', topic);
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
              type: 'success',
              message: 'Topic added.'
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