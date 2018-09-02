<template>
  <div>
    <add-client-form />
    <client-list :clients="clients" />
  </div>
</template>

<script>
import ClientList from '@/components/Admin/ClientList';
import AddClientForm from '@/components/Admin/AddClientForm';

  export default {
    layout: 'admin',
    components: {
      'client-list': ClientList,
      'add-client-form': AddClientForm,
    },
    head() {
      return {
        title: 'Editor panel: Clients',
      }
    },
    computed: {
      clients() {
        return this.$store.getters['client/getAll'];
      }      
    },
    beforeCreate() {
      this.$store.dispatch('client/fetchAll');
    }
  }
</script>

<style scoped>

</style>