<template>
  <div>
    <add-manager-form />
    <manager-list :managers="managers" />
    <manager-list 
      :managers="deletedManagers"
      :type="'deleted'" />
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
        return this.$store.getters['manager/getAll'];
      },
      deletedManagers() {
        return this.$store.getters['manager/getDeleted'];
      }
    },
    beforeCreate() {
      this.$store.dispatch('manager/fetchAll');
      this.$store.dispatch('manager/fetchDeleted');
    }
  }
</script>