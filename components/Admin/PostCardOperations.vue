<template>
  <el-row>
    <el-button 
      class="card_body_operations_edit"
      type="text"
      icon="el-icon-edit"
      @click="editPostDialogVisible = true"/>
    <el-dialog
      :lock-scroll="true"
      :top="'8vh'"
      :visible.sync="editPostDialogVisible"
      width="35%"
      title="Edit the Post">
      <el-form 
        ref="editPost" 
        :model="post"
        :rules="rules">
        <el-form-item 
          prop="url"
          label="Source URL">
          <el-input v-model="post.url"/>
        </el-form-item>
        <el-form-item 
          prop="summary"
          label="Summary">
          <el-input
            :rows="8"
            v-model="post.summary"
            type="textarea"/>
        </el-form-item>
        <el-form-item 
          prop="topic"
          label="Topic">
          <el-select 
            v-model="post.topic" 
            style="width: 100%;">
            <el-option 
              v-for="topic in topics"
              :key="topic.id"
              :label="topic.title" 
              :value="topic.id" />
          </el-select>
        </el-form-item>
        <el-form-item
          prop="date"
          label="Publication date">
          <el-date-picker
            v-model="post.date"
            :picker-options="datePickerOptions"
            style="width: 100%;"
            type="date"
            placeholder="Select publication date"/>
        </el-form-item>
        <el-form-item>
          <el-button 
            style="float:right;"
            type="primary" 
            @click="submitForm('editPost')">Add post</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-popover
      v-model="deletePopoverVisible"
      :popper-class="'card_deletePopover'"
      placement="top-end"
      width="220">
      <p>Are you sure to delete this?</p>
      <div style="text-align: center; margin-top: 20px">
        <el-button 
          size="mini" 
          type="text" 
          @click="deletePopoverVisible = false">
          cancel
        </el-button>
        <el-button 
          type="danger" 
          size="mini" 
          @click="deletePost(post.id)">
          confirm
        </el-button>
      </div>
      <el-button 
        slot="reference"
        class="card_body_operations_delete"
        type="text" 
        icon="el-icon-delete"/>
    </el-popover>
  </el-row>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    data() {
      const pad2 = s => `0${s}`.slice(-2);
      const pad4 = s => `0000${s}`.slice(-4)
      const dateStr = d => `${pad4(d.getFullYear())}-${pad2(d.getMonth())}-${pad2(d.getDate())}`;
      return {
        datePickerOptions: {
          disabledDate(time) {
            return dateStr(time) < dateStr(new Date())
          },
          firstDayOfWeek: 1
        },
        topics: [
          {
            id: 1,
            title: 'Graphic'
          },
          {
            id: 2,
            title: 'Illustration'
          },
          {
            id: 3,
            title: 'Painting'
          }
        ],
        rules: {
          url: [
            { required: true, message: 'Please enter a source URL', trigger: 'blur' },
            { type: 'url', message: 'Please enter a valid URL' },
          ],
          summary: [
            { required: true, message: 'Please enter a summary', trigger: 'blur' },
            { min: 300, message: 'Length should be min 250 characters', trigger: 'blur' },
            { max: 500, message: 'Length should be max 500 characters', trigger: 'blur' }
          ],
          topic: [
            { required: true, message: 'Please select a post topic', trigger: 'change' },
          ],
          date: [
            { type: 'date', required: true, message: 'Please pick a publication date', trigger: 'change' }
          ]
        },
        editPostDialogVisible: false,
        deletePopoverVisible: false,
      }
    },
    methods: {
      parseDate(date) {
        return new Date(date);
      },
      submitForm(formName) {
        this.post.date = this.parseDate(this.post.date); // parsing date
        this.$refs[formName].validate((valid) => {
          if (valid) {     
            let post = {
              url: this.post.url,
              summary: this.post.summary,
              topic: this.post.topic,
              date: this.post.date
            }
            console.log(post);
            this.$refs[formName].resetFields();
            this.editPostDialogVisible = false;
            this.$message({
              message: 'Post updated.',
              type: 'success'
            });
          } else {
            return false;
          }
        });
      },
      cancelForm(formName) {
        this.$refs[formName].resetFields();
        this.editPostDialogVisible = false;
      },
      deletePost(postId) {

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