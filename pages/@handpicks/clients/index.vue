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
    computed: {
      clients() {
        return this.$store.getters['client/getAllClient'];
      }      
    },
    beforeCreate() {
      this.$store.dispatch('client/fetchAllClient');
    }
  }
</script>

<style scoped>

</style>