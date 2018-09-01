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
    computed: {
      topics() {
        return this.$store.getters['topic/getAllTopic'];
      },
      deletedTopics() {
        return this.$store.getters['topic/getDeleted'];
      }
    },
    beforeCreate() {
      this.$store.dispatch('topic/fetchAllTopic');
      this.$store.dispatch('topic/fetchDeleted');
    }
  }
</script>