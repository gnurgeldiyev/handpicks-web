<template>
  <div>
    <el-button 
      class="floating-button"
      icon="el-icon-circle-plus-outline" 
      round
      @click="addPostDialogVisible = true">
      New post
    </el-button>

    <el-dialog
      :lock-scroll="true"
      :top="'8vh'"
      :visible.sync="addPostDialogVisible"
      width="35%"
      title="Add a New Post">
      <el-form 
        ref="post" 
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
          prop="tag"
          label="Tags">
          <el-tag
            v-for="tag in post.tags"
            :key="tag"
            :disable-transitions="false"
            closable
            @close="handleClose(tag)">
            {{ tag }}
          </el-tag>
          <el-input
            v-if="inputVisible"
            ref="saveTagInput"
            v-model="inputValue"
            class="input-new-tag"
            size="mini"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          />
          <el-button 
            v-else 
            ref="addTagButton"
            class="button-new-tag" 
            size="small" 
            @click="showInput">+ New Tag</el-button>
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
            @click="submitForm('post')">Add post</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    data() {
      const pad2 = s => `0${s}`.slice(-2);
      const pad4 = s => `0000${s}`.slice(-4)
      const dateStr = d => `${pad4(d.getFullYear())}-${pad2(d.getMonth())}-${pad2(d.getDate())}`;
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return {
        datePickerOptions: {
          disabledDate(time) {
            return dateStr(time) < dateStr(tomorrow)
          },
          firstDayOfWeek: 1,
        },
        inputVisible: false,
        inputValue: '',
        post: {
          url: '',
          summary: '',
          topic: '',
          tags: [],
          date: '',
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
          tags: [
            { type: 'array', required: true, message: 'Please enter at least one tag', trigger: 'change' }
          ],
          date: [
            { type: 'date', required: true, message: 'Please pick a publication date', trigger: 'change' }
          ]
        },
        addPostDialogVisible: false,
      }
    },
    computed: {
      topics() {
        return this.$store.getters['topic/getAll'];
      }
    },
    methods: {
      handleClose(tag) {
        this.post.tags.splice(this.post.tags.indexOf(tag), 1);
      },
      showInput() {
        if (this.post.tags.length < 5) {
          this.inputVisible = true;
          this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
          });
        } else {
          return false;
        }
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (this.post.tags.length > 0) {
          if (inputValue) {
            this.post.tags.push(inputValue);
          }
        } else {
          if (inputValue) {
            this.post.tags.push(inputValue);
          }
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) { 
            let post = {
              url: this.post.url,
              summary: this.post.summary,
              topicId: this.post.topic,
              ownerId: this.$cookies.get('id'),
              tags: this.post.tags,
              published: this.post.date.setHours(3)
            }
            const result = await this.$store.dispatch('post/addNew', post);
            if (!result) {
              this.$message({
                type: 'error',
                message: 'An error occurred.'
              });
              return false;
            }
            this.$refs[formName].resetFields();
            this.addPostDialogVisible = false;
            this.$message({
              message: 'Post added.',
              type: 'success'
            });
          } else {
            return false;
          }
        });
      },
      cancelForm(formName) {
        this.$refs[formName].resetFields();
        this.addPostDialogVisible = false;
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