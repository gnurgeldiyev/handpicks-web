<template>
  <div>
    <client-list :clients="clients" />
  </div>
</template>

<script>
import ClientList from '@/components/Admin/ClientList';

  export default {
    layout: 'admin',
    components: {
      'client-list': ClientList,
    },
    data() {
      return {
        clients: [
          {
            id: 1,
            name: 'iOS App',
            apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNWM3OGU1MTQzMGRkMTEwNWE3MzlkYSIsImlhdCI6MTUzMjc4NjkxOH0.gPdeR_jHeObJBawt1p92CaXD10SRlc0Oh5b825kihbg',
            created: '2018-07-28 17:08:38.016' 
          },
          {
            id: 2,
            name: 'Android App',
            apiKey: '78b6367af86e03f19809449e2c365ff5',
            created: '2018-08-11 17:08:38.016'  
          },
          {
            id: 3,
            name: 'Web',
            apiKey: '33ee7e1eb504b6619c1b445ca1442c21',
            created: '2018-08-17 17:08:38.016' 
          }
        ]
      }
    }    
  }
</script>

<style scoped>

</style>