<template>
  <div>
    <el-button 
      class="floating-button"
      icon="el-icon-circle-plus-outline" 
      round
      @click="addTopicDialogVisible = true">
      New Topic
    </el-button>

    <el-dialog
      :lock-scroll="true"
      :top="'8vh'"
      :visible.sync="addTopicDialogVisible"
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
            { min: 64, message: 'Length should be min 64 characters', trigger: 'blur' },
            { max: 128, message: 'Length should be max 128 characters', trigger: 'blur' }
          ],
        },
        addTopicDialogVisible: false,
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate( (valid) => {
          if (valid) {     

            let topic = {
              title: this.topic.title,
              description: this.topic.description
            }
            console.log(topic);
            this.$refs[formName].resetFields();
            this.addTopicDialogVisible = false;
            this.$message({
              message: 'Topic added.',
              type: 'success'
            });
          } else {
            return false;
          }
        });
      },
      cancelForm(formName) {
        this.$refs[formName].resetFields();
        this.addTopicDialogVisible = false;
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
.image_upload {
  clear: both;
}
.story-form-dialog {
  margin: 0 !important;
  width: 100%;
  min-height: 100vh;
  border-radius: 0;
}
.story-form-dialog .el-icon {
  font-size: 2rem;
}
.story-form {
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
}
.story-form-title {
  margin-bottom: 16px;
}
.story-form .ql-editor {
  min-height: 40vh;
  color: initial;
  font-size: initial;
}
</style>