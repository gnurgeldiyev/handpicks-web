<template>
  <div>
    <add-topic-form />
    <topic-list :topics="topics" />
  </div>
</template>

<script>
import TopicList from '@/components/Admin/TopicList';
import AddTopicForm from '@/components/Admin/AddTopicForm';

  export default {
    layout: 'admin',
    components: {
      'add-topic-form': AddTopicForm,
      'topic-list': TopicList,
    },
    computed: {
      topics() {
        return this.$store.getters['topic/getAllTopic'];
      }      
    },
    beforeCreate() {
      this.$store.dispatch('topic/fetchAllTopic');
    }
  }
</script>