<template>
  <el-menu mode="vertical">
    <el-submenu index="1">
      <template slot="title">
        <span>Posts</span>
      </template>
      <el-menu-item
        v-for="(topic, index) in topics"
        :key="topic.id"
        :index="`1-${index + 1}`"
        @click="goTo(`/@handpicks/posts/${topic.url}`)">
        <span>{{ topic.title }}</span>
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
      v-if="manager.role === 'admin'"
      index="4"
      @click="goTo('/@handpicks/managers')">
      <span>Managers</span>
    </el-menu-item>
    <el-menu-item
      v-if="manager.role === 'admin'"
      index="5"
      @click="goTo('/@handpicks/clients')">
      <span>API Clients</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    props: {
      topics: {
        type: Array,
        required: true,
      }
    },
    computed: {
      manager() {
        return this.$store.getters['manager/getManager'];
      }
    },
    methods: {
      goTo(url) {
        this.$router.push(url);
      },
    }
  }
</script>
