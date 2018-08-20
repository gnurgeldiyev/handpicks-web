<template>
  <el-card 
    v-if="title == 'Total'"
    class="u_card">
    <div slot="header">
      <span>{{ title }}</span>
      <p style="float: right;">{{ users.length }}</p>
    </div>
  </el-card>
  <el-card 
    v-else
    class="u_card">
    <div slot="header">
      <span>{{ title }}</span>
      <p style="float: right;">{{ users.length }}</p>
    </div>
    <ul class="u_card_list">
      <li 
        v-for="user in users"
        :key="user.name"
        class="u_card_list_item">
        {{ user.name }}
        <span class="u_card_list_item_info">19 August, Sunday</span>
      </li>
    </ul>
  </el-card>
</template>

<script>
  export default {
    props: {
      users: {
        type: Array,
        required: true,
      },
      title: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style>
.u_card {
  width: 320px;
  height: auto;
  margin: 16px;
}
.u_card .el-card__header {
  color: #333;
  font-weight: 600;
  font-size: 1.2rem;
}
.u_card_list {
  list-style: none;
}
.u_card_list_item {
  margin: 8px 0;
  color: #666666;
  font-weight: 600;
  padding-bottom: 8px;
  font-size: 0.9rem;
  border-bottom: 1px solid #eeeeee;
}
.u_card_list_item_info {
  font-weight: 300;
  font-size: 0.8rem;
  float: right;
}
</style>