<template>
  <div>
    <el-button
      :disabled="manager.role === 'admin' ? false : true"
      size="mini"
      style="margin-right: 8px;"
      @click="editTopicDialogVisible = true">Edit</el-button>

    <el-dialog
      :lock-scroll="true"
      :top="'8vh'"
      :visible.sync="editTopicDialogVisible"
      width="35%"
      title="Edit the Topic">
      <el-form 
        ref="topic" 
        :model="currentTopic"
        :rules="rules">
        <el-form-item 
          prop="title"
          label="Title">
          <el-input v-model="currentTopic.title"/>
        </el-form-item>
        <el-form-item 
          prop="description"
          label="Description">
          <el-input
            :rows="4"
            v-model="currentTopic.description"
            type="textarea"/>
        </el-form-item>
        <el-form-item>
          <el-button 
            style="float:right;"
            type="primary" 
            @click="submitForm('topic')">Update</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-button
      :disabled="manager.role === 'admin' ? false : true"
      size="mini"
      style="margin-left: 8px;"
      type="danger"
      @click="deleteTopicAlert(topic.id)">Delete</el-button>
  </div>
</template>

<script>
  export default {
    props: {
      topic: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        currentTopic: {
          title: this.topic.title,
          description: this.topic.description
        },
        editTopicDialogVisible: false,
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
      }
    },
    computed: {
      manager() {
        return this.$store.getters['manager/getManager'];
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {     
            let topic = {
              id: this.topic.id,
              title: this.currentTopic.title,
              description: this.currentTopic.description
            }
            const result = await this.$store.dispatch('topic/editTopic', topic);
            if (!result) {
              this.$message({
                message: 'An error occurred.',
                type: 'error'
              });
              return false;
            }
            this.$refs[formName].resetFields();
            this.editTopicDialogVisible = false;
            this.$message({
              message: 'Topic updated.',
              type: 'success'
            });
          } else {
            return false;
          }
        });
      },
      cancelForm(formName) {
        this.$refs[formName].resetFields();
        this.editTopicDialogVisible = false;
      },
      deleteTopicAlert(id) {
        this.$confirm('This will permanently delete the topic. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
        }).then(async () => {
          const result = await this.$store.dispatch('topic/deleteTopic', id);
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