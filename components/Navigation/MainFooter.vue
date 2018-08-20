<template>
  <div 
    :style="height"
    class="footer">
    <div class="f-items">
      <div class="f_item"> 
        made with 
        <img 
          class="f_item_icon"
          src="/icon-heart.svg" 
          alt="heart icon"
          @click="sendFeedbackDialogVisible = true">
      </div>
      <div class="f_item">
        download on the 
        <a href="#">
          <img 
            class="f_item_icon"
            src="/logo-apple.svg" 
            alt="apple brand logo">
        </a>
      </div>
      <div class="f_item">
        follow on the
        <a href="#">
          <img 
            class="f_item_icon"
            src="/logo-twitter.svg" 
            alt="twitter brand logo">
        </a>
        <a href="#">
          <img 
            class="f_item_icon"
            src="/logo-instagram.svg" 
            alt="instagram brand logo">
        </a>
      </div>
    </div>
    <el-dialog
      :lock-scroll="true"
      :top="'8vh'"
      :visible.sync="sendFeedbackDialogVisible"
      width="35%"
      title="👋 Say hello or send a feedback">
      <el-form 
        ref="feedback" 
        :model="feedback"
        :rules="rules">
        <el-form-item 
          prop="name"
          label="Name">
          <el-input v-model="feedback.name"/>
        </el-form-item>
        <el-form-item 
          prop="email"
          label="Email">
          <el-input v-model="feedback.email"/>
        </el-form-item>
        <el-form-item 
          prop="message"
          label="Message">
          <el-input
            :rows="4"
            v-model="feedback.message"
            type="textarea"/>
        </el-form-item>
        <el-form-item>
          <el-button 
            style="width:100%;"
            type="primary" 
            @click="submitForm('feedback')">Send</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    props: {
      height: {
        type: String,
        required: true
      } 
    },
    data() {
      return {
        feedback: {
          name: '',
          email: '',
          message: '',
        },
        sendFeedbackDialogVisible: false,
        rules: {
          name: [
            { required: true, message: 'Please enter a your name', trigger: 'blur' },
          ],
          message: [
            { required: true, message: 'Please enter a your message', trigger: 'blur' },
          ],
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate( (valid) => {
          if (valid) {     

            let feedback = {
              name: this.feedback.name,
              email: this.feedback.email ? this.feedback.email : null,
              message: this.feedback.message, 
            }
            console.log(feedback);
            this.$refs[formName].resetFields();
            this.sendFeedbackDialogVisible = false;
            this.$message({
              message: 'Thank you for your feedback 😊',
              type: 'success'
            });
          } else {
            return false;
          }
        });
      },
      cancelForm(formName) {
        this.$refs[formName].resetFields();
        this.sendFeedbackDialogVisible = false;
      },
    }
  }
</script>

<style>
@media (max-width: 519px) {
  .footer {
    margin: 32px 16px 16px 16px;
  }
  .f_item {
    margin: 16px 0 !important;
    color: #666666;
    font-size: 0.9rem;
    font-weight: 500;
  }
  .f_item a {
    text-decoration: none;
    color: #666666;
  }
  .f_item a:hover,
  .f_item a:hover .f_item_icon,
  .f_item_icon:hover {
    text-decoration: none;
    cursor: pointer;
  }
  .f_item_icon {
    width: auto;
    height: 0.9rem;
    margin: 0 8px;
  }
}
@media (min-width: 520px) and (max-width: 1280px) {
  .footer {
    position: absolute; 
    left: calc(50% - 260px);
    margin: 32px 0 16px 0;
    width: 520px;
  }
  .f-items {
    position: relative; 
    display: flex;
  }
  .f_item {
    margin: 0 16px !important;
    color: #666666;
    font-size: 0.9rem;
    font-weight: 500;
  }
  .f_item a {
    text-decoration: none;
    color: #666666;
  }
  .f_item a:hover,
  .f_item a:hover .f_item_icon,
  .f_item_icon:hover {
    text-decoration: none;
    cursor: pointer;
  }
  .f_item_icon {
    width: auto;
    height: 0.9rem;
    margin: 0 8px;
  }
}
@media (min-width: 1280px) {
  .footer {
    position: absolute; 
    left: 50%;
    margin: 32px 0 16px 0;
  }
  .f-items {
    position: relative; 
    left: -50%;
    display: flex;
  }
  .f_item {
    margin: 0 16px !important;
    color: #666666;
    font-size: 0.9rem;
    font-weight: 500;
  }
  .f_item a {
    text-decoration: none;
    color: #666666;
  }
  .f_item a:hover,
  .f_item a:hover .f_item_icon,
  .f_item_icon:hover {
    text-decoration: none;
    cursor: pointer;
  }
  .f_item_icon {
    width: auto;
    height: 0.9rem;
    margin: 0 8px;
  }
}
</style>