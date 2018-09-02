<template>
  <div>
    <message-list :messages="messages" />
  </div>
</template>

<script>
import MessageList from '@/components/Admin/MessageList';
  export default {
    layout: 'admin',
    components: {
      'message-list': MessageList,
    },
    computed: {
      messages() {
        return this.$store.getters['message/getAll'];
      }
    },
    beforeCreate() {
      this.$store.dispatch('message/fetchAll');
    }
  }
</script>

<style scoped>

</style>