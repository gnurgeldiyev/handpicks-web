<template>
  <div>
    <add-post-form />
    <h2 class="page_title">Graphic</h2>
    <post-card
      v-for="post in posts"
      :key="post.id"
      :post="post"/>
  </div>
</template>

<script>
import PostCard from '@/components/Admin/PostCard';
import AddPostForm from '@/components/Admin/AddPostForm';

  export default {
    layout: 'admin',
    components: {
      'post-card': PostCard,
      'add-post-form': AddPostForm,
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
          {
            id: 2,
            url: 'https://canbuyukberber.com/art-futura-roma',
            title: 'Morphogenesis - Extended 8K Panorama | Audiovisual Installation',
            summary: 'Morphogenesis (from the Greek morphê "shape" and genesis “creation”; literally, "beginning of the shape") is the biological process that causes an organism to develop its shape. ',
            thumbnail: 'https://pro2-bar-s3-cdn-cf2.myportfolio.com/8d239c939ed8f0c67189c61f7fe892da/3b257bfa-5fef-4aa7-b39f-15d184723779_rw_1920.jpg?h=93d7b9cefea56ab0cc76c98e555e2000',
            hostname: 'canbuyukberber.com',
            topic: 'Paintings',
            owner: 'Maya Dorsey',
            created: '16 August, Sunday',
            date: '2017-03-23'
          },
          {
            id: 3,
            url: 'https://www.booooooom.com/2018/08/10/spoke-arts-miyazaki-in-los-angeles/',
            title: 'Spoke Art’s “Miyazaki in Los Angeles”',
            summary: 'Held in Southern California, the epic three-day group pop-up will feature over 130 artists from around the world, all celebrating the legendary storyteller — his deep reverence for nature, strong female characters and unbridled imagination. his deep reverence for nature, strong female characters and unbridled imagination. His deep reverence for nature, strong female characters and unbridled imagination.',
            thumbnail: 'https://www.booooooom.com/wp-content/uploads/2018/08/Miyazaki7.jpg',
            hostname: 'booooooom.com',
            topic: 'Music',
            owner: 'Lara Jobs',
            created: '15 August, Sunday',
            date: '2017-03-23'
          },
        ]
      }
    }
  }
</script>
