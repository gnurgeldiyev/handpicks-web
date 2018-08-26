<template>
  <div>
    <add-manager-form />
    <manager-list :managers="managers" />
  </div>
</template>

<script>
import ManagerList from '@/components/Admin/ManagerList';
import AddManagerForm from '@/components/Admin/AddManagerForm';

  export default {
    layout: 'admin',
    components: {
      'manager-list': ManagerList,
      'add-manager-form': AddManagerForm,
    },
    computed: {
      managers() {
        return this.$store.getters['manager/getAllManager'];
      }      
    },
    beforeCreate() {
      this.$store.dispatch('manager/fetchAllManager');
    }
  }
</script>