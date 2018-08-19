<template>
  <el-menu mode="vertical">
    <el-submenu index="1">
      <template slot="title">
        <span>Posts</span>
      </template>
      <el-menu-item
        index="1-1"
        @click="goTo('/@handpicks/posts')">
        <span>Graphic</span>
      </el-menu-item>
      <el-menu-item
        index="1-2"
        @click="goTo('#')">
        <span>Illustration</span>
      </el-menu-item>
      <el-menu-item
        index="1-3"
        @click="goTo('#')">
        <span>Painting</span>
      </el-menu-item>
    </el-submenu>
    <el-menu-item
      index="2"
      @click="goTo('/@handpicks/topics')">
      <span>Topics</span>
    </el-menu-item>
    <el-menu-item
      index="3"
      @click="goTo('/@handpicks/users')">
      <span>Users</span>
    </el-menu-item>
    <el-menu-item
      index="4"
      @click="goTo('/@handpicks/managers')">
      <span>Managers</span>
    </el-menu-item>
    <el-menu-item
      index="5"
      @click="goTo('/@handpicks/api-clients')">
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
