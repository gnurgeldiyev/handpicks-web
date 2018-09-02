<template>
  <div>
    <add-topic-form />
    <topic-list :topics="topics" />
    <topic-list 
      :topics="deletedTopics"
      :type="'deleted'" />
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
    head() {
      return {
        title: 'Editor panel: Topics',
      }
    },
    computed: {
      topics() {
        return this.$store.getters['topic/getAll'];
      },
      deletedTopics() {
        return this.$store.getters['topic/getDeleted'];
      }
    },
    beforeCreate() {
      this.$store.dispatch('topic/fetchAll');
      this.$store.dispatch('topic/fetchDeleted');
    }
  }
</script>