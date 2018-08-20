<template>
  <div>
    <h2 class="page_title">Today's posts</h2>
    <post-card 
      v-for="post in posts"
      :key="post.id"
      :post="post" />

    <h2 class="page_title">Total users</h2>
    <user-report-card 
      :users="totalUsers"
      :title="'Total'" />
  </div>
</template>

<script>
import PostCard from '@/components/Admin/PostCard';
import UserReportCard from '@/components/Admin/UserReportCard';

  export default {
    layout: 'admin',
    components: {
      'post-card': PostCard,
      'user-report-card': UserReportCard,
    },
    data() {
      return {
        posts: [
          {
            id: 4,
            url: 'http://refikanadol.com/works/archive-dreaming/',
            title: 'Archive Dreaming | Morphogenesis - Extended 8K Panorama | Audiovisual Installation',
            summary: 'Commissioned to work with SALT Research collections, artist Refik Anadol employed machine learning algorithms to search and sort relations among 1,700,000 documents. Interactions of the multidimensional data found in the archives are, in turn, translated into an immersive media installation.Commissioned to work with SALT Research collections, artist Refik Anadol employed machine learning algorithms to search and sort relations among 1,700,000 documents. Interactions of the multidimensional data found in the archives are, in turn, translated into an immersive media installation.',
            thumbnail: 'http://refikanadol.com/wp-content/uploads/2018/03/009-2400x1350.jpg',
            hostname: 'refikanadol.com',
            topic: 'Graphics',
            owner: 'Aya Gates',
            created: '18 August, Sunday',
            date: '2017-03-23'
          },
          { 
            id: 1,
            url: 'http://refikanadol.com/works/archive-dreaming/',
            title: '“Present; Tense” by Photographer Vincent Glielmi',
            summary: 'An ongoing observation of the American landscape, post November 2016 by photographer Vincent Glielmi. See more images from “Present; Tense” below. Each week our members share their work with us and we highlight the best of these submissions as Editors’ Picks. You can learn more about becoming a member.',
            thumbnail: 'https://www.booooooom.com/wp-content/uploads/2018/08/Glielmi32.jpg',
            hostname: 'booooooom.com',
            topic: 'Art',
            owner: 'Lisa Ive',
            created: '17 August, Sunday',
            date: '2017-03-23'
          },
        ],
        totalUsers: [
          {
            name: 'Lara Jobs'
          },
          {
            name: 'Maya Bezos'
          },
          {
            name: 'Lisa Gates'
          },
          {
            name: 'Aya Ive'
          },
          {
            name: 'Lara Jobs'
          },
          {
            name: 'Maya Bezos'
          },
          {
            name: 'Lisa Gates'
          },
          {
            name: 'Aya Ive'
          }
        ],
      }
    }
  }
</script>
