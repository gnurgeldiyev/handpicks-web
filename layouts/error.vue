<template>
  <div class="container">
    <div v-if="error.statusCode === 404">
      <not-found-view />
    </div>
  </div>
</template>

<script>
import NotFoundView from '@/components/Client/NotFoundView';

  export default {
    components: {
      'not-found-view': NotFoundView,
    },
    props: {
      error: {
        type: Object,
        required: true,
      }
    },
  }
</script>