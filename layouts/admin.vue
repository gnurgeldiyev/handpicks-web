<template>
  <el-container>
    <el-header class="a-header">
      <admin-header />
    </el-header> 
    <el-main>
      <el-row :gutter="16">
        <el-col :span="4">
          <admin-menu />
        </el-col>
        <el-col :span="20">
          <nuxt/>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import AdminHeader from '@/components/Navigation/AdminHeader';
import AdminMenu from '@/components/Navigation/AdminMenu';

export default {
  components: {
    'admin-header': AdminHeader,
    'admin-menu': AdminMenu,
  },
}
</script>


<style>

html {
  font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.page_title {
  margin: 16px;
  color: #666666;
}
</style>