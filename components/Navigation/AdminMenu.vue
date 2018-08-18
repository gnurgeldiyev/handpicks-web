<template>
  <el-menu mode="vertical">
    <el-menu-item
      index="1"
      @click="goTo('#')">
      <span>Posts</span>
    </el-menu-item>
    <el-menu-item
      index="2"
      @click="goTo('#')">
      <span>Topics</span>
    </el-menu-item>
    <el-menu-item
      index="3"
      @click="goTo('#')">
      <span>Users</span>
    </el-menu-item>
    <el-menu-item
      index="4"
      @click="goTo('#')">
      <span>Managers</span>
    </el-menu-item>
    <el-menu-item
      index="5"
      @click="goTo('#')">
      <span>API Clients</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    methods: {
      goTo(url) {
        this.$router.push(url);
      },
    }
  }
</script>
