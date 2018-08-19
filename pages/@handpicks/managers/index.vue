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
    data() {
      return {
        managers: [
          {
            id: 1,
            username: 'maya',
            name: 'Maya',
            lastname: 'Jobs',
            email: 'maya@apple.co',
            role: 'admin'
          },
          {
            id: 1,
            username: 'lara',
            name: 'Lara',
            lastname: 'Bezos',
            email: 'lara@amazon.tost',
            role: 'editor'
          },
          {
            id: 1,
            username: 'lisa',
            name: 'Lisa',
            lastname: 'Musk',
            email: 'lisa@tesla.io',
            role: 'editor'
          },
        ]
      }
    }
  }
</script>