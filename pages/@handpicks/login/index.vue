<template>
  <div>
    <div 
      ref="content"
      class="content">
      <h3 
        class="brand"
        @click="goTo('/')">handpicks <span class="page_title">for editor</span></h3>
      <el-form 
        ref="manager" 
        :model="manager"
        :rules="rules">
        <el-form-item 
          prop="email"
          label="Email">
          <el-input v-model="manager.email"/>
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
            style="width: 100%;margin-top:8px;"
            type="primary" 
            @click="submitForm('manager')">Login</el-button>
        </el-form-item>
      </el-form>
    </div>

    <main-footer :height="contentHeight" />
  </div>
</template>

<script>
import MainFooter from '@/components/Navigation/MainFooter';

  export default {
    layout: 'blank',
    middleware: 'checkAuth',
    components: {
      'main-footer': MainFooter,
    },
    data() {
      return {
        manager: {
          email: '',
          password: ''
        },
        contentHeight: 'top: ',
        rules: {
          email: [
            { required: true, message: 'Please enter a email', trigger: 'blur' },
            { type: 'email', message: 'Please enter a valid email', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please enter a password', trigger: 'blur' },
          ],
        },
      }
    },
    beforeCreate() {
      if (this.$store.getters['manager/getToken'] !== null) {
        this.$router.push('/@handpicks')
      }
    },
    mounted() {
      const windowHeight = window.innerHeight;
      const contentHeight= this.$refs.content.clientHeight;
      if (windowHeight < (contentHeight + 32)) {
        this.contentHeight += contentHeight + 'px;';
      } else {
        this.contentHeight += (windowHeight - 64) + 'px;';
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate( async (valid) => {
          if (valid) {     
            let manager = {
              email: this.manager.email,
              password: this.manager.password
            }
            const result = await this.$store.dispatch('manager/login', manager);
            if (!result) {
              this.$refs[formName].resetFields();
              this.$message({
                message: 'Incorrect email or password.',
                type: 'error'
              });
              return false; 
            } 
            this.$refs[formName].resetFields();
            this.$message({
              message: 'Logged in.',
              type: 'success'
            });
            this.$router.push('/@handpicks');
          } else {
            return false;
          }
        });
      },
      goTo(url) {
        this.$router.push(url);
      }
    }
  }
</script>

<style scoped>
.content {
  width: 90%;
  max-width: 400px;
  margin: 64px auto 32px auto;
}
.brand {
  color: #000001;
  text-align: center;
  font-size: 2.2rem;
  line-height: 1;
  font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
  margin: 64px 0 32px 0;
}
.brand:hover {
  cursor: pointer;
}
.page_title {
  color: #666666;
  font-size: 1rem;
  line-height: 1;
  font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
}
</style>