<template>
  <el-row>
    <el-button 
      class="a_card_body_operations_edit"
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
        :model="currentPost"
        :rules="rules">
        <el-form-item 
          prop="url"
          label="Source URL">
          <el-input 
            v-model="currentPost.url"
            :disabled="isPublished(post.published) === false ? false : true"/>
        </el-form-item>
        <el-form-item 
          prop="summary"
          label="Summary">
          <el-input
            :rows="8"
            v-model="currentPost.summary"
            type="textarea"/>
        </el-form-item>
        <el-form-item 
          prop="topic"
          label="Topic">
          <el-select 
            v-model="currentPost.topic" 
            :disabled="isPublished(post.published) === false ? false : true"
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
            v-model="currentPost.date"
            :picker-options="datePickerOptions"
            :disabled="isPublished(post.published) === false ? false : true"
            style="width: 100%;"
            type="date"
            placeholder="Select publication date"/>
        </el-form-item>
        <el-form-item>
          <el-button 
            style="float:right;"
            type="primary" 
            @click="submitForm('editPost')">Update</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-popover
      v-model="deletePopoverVisible"
      :popper-class="'a_card_deletePopover'"
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
        class="a_card_body_operations_delete"
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
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return {
        currentPost: {
          url: this.post.url,
          summary: this.post.summary,
          topic: this.post.topic.id,
          tags: this.post.tags,
          date: this.post.published
        },
        datePickerOptions: {
          disabledDate(time) {
            return dateStr(time) < dateStr(tomorrow)
          },
          firstDayOfWeek: 1
        },
        rules: {
          url: [
            { required: true, message: 'Please enter a source URL', trigger: 'blur' },
            { type: 'url', message: 'Please enter a valid URL' },
          ],
          summary: [
            { required: true, message: 'Please enter a summary', trigger: 'blur' },
            { min: 250, message: 'Length should be min 250 characters', trigger: 'blur' },
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
    computed: {
      topics() {
        return this.$store.getters['topic/getAllTopic'];
      }
    },
    methods: {
      parseDate(date) {
        return new Date(date);
      },
      isPublished(publishedDate) {
        const postDate = new Date(publishedDate);
        const today = new Date();
        if (postDate < today) {
          return true;
        }
        return false;
      },
      submitForm(formName) {
        this.currentPost.date = this.parseDate(this.currentPost.date); // parsing date
        this.$refs[formName].validate(async (valid) => {
          if (valid) {     
            let post = {
              id: this.post.id,
              summary: this.currentPost.summary,
              topicId: this.currentPost.topic,
              tags: this.currentPost.tags,
              published: this.currentPost.date.setHours(3)
            }
            const result = await this.$store.dispatch('post/editPost', post);
            if (!result) {
              this.$message({
                message: 'An error occurred.',
                type: 'error'
              });
              return false;
            }
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
        this.$confirm('This will permanently delete the post. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
        }).then(async () => {
          const result = await this.$store.dispatch('post/deletePost', postId);
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