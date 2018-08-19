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
    data() {
      return {
        topics: [
          {
            id: 1,
            url: 'painting',
            title: 'Painting',
            description: 'Table supports single row selection.'
          },
          {
            id: 2,
            url: 'illustration',
            title: 'Illustration',
            description: 'Table supports single row selection.'
          },
          {
            id: 3,
            url: 'graphic',
            title: 'Graphic',
            description: 'Table supports single row selection.'
          }
        ]
      }
    }
  }
</script>