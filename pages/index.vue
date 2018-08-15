<template>
  <div class="content">
    <h1 class="content_date">August 12th, Sunday</h1>
    <div class="content_posts">
      <post-card 
        v-for="(post, index) in posts"
        :key="index"
        :post="post" />
    </div>
    
  </div>
</template>

<script>
import PostCard from '@/components/Post/PostCard';
export default {
  components: {
    'post-card': PostCard,
  },
  data () {
    return {
      posts: [
        { 
          url: 'https://www.booooooom.com/2018/08/09/present-tense-by-photographer-vincent-glielmi/',
          title: '“Present; Tense” by Photographer Vincent Glielmi',
          description: 'An ongoing observation of the American landscape, post November 2016 by photographer Vincent Glielmi. See more images from “Present; Tense” below. Each week our members share their work with us and we highlight the best of these submissions as Editors’ Picks. You can learn more about becoming a member.',
          thumbnail: 'https://www.booooooom.com/wp-content/uploads/2018/08/Glielmi32.jpg',
          hostname: 'booooooom.com'
        },
        {
          url: 'https://canbuyukberber.com/art-futura-roma',
          title: 'Morphogenesis - Extended 8K Panorama | Audiovisual Installation',
          description: 'Morphogenesis (from the Greek morphê "shape" and genesis “creation”; literally, "beginning of the shape") is the biological process that causes an organism to develop its shape. ',
          thumbnail: 'https://pro2-bar-s3-cdn-cf2.myportfolio.com/8d239c939ed8f0c67189c61f7fe892da/3b257bfa-5fef-4aa7-b39f-15d184723779_rw_1920.jpg?h=93d7b9cefea56ab0cc76c98e555e2000',
          hostname: 'canbuyukberber.com'
        },
        {
          url: 'https://www.booooooom.com/2018/08/10/spoke-arts-miyazaki-in-los-angeles/',
          title: 'Spoke Art’s “Miyazaki in Los Angeles”',
          description: 'Held in Southern California, the epic three-day group pop-up will feature over 130 artists from around the world, all celebrating the legendary storyteller — his deep reverence for nature, strong female characters and unbridled imagination.',
          thumbnail: 'https://www.booooooom.com/wp-content/uploads/2018/08/Miyazaki7.jpg',
          hostname: 'booooooom.com'
        },
        {
          url: 'http://refikanadol.com/works/archive-dreaming/',
          title: 'Archive Dreaming',
          description: 'Commissioned to work with SALT Research collections, artist Refik Anadol employed machine learning algorithms to search and sort relations among 1,700,000 documents. Interactions of the multidimensional data found in the archives are, in turn, translated into an immersive media installation.Commissioned to work with SALT Research collections, artist Refik Anadol employed machine learning algorithms to search and sort relations among 1,700,000 documents. Interactions of the multidimensional data found in the archives are, in turn, translated into an immersive media installation.',
          thumbnail: 'http://refikanadol.com/wp-content/uploads/2018/03/009-2400x1350.jpg',
          hostname: 'refikanadol.com'
        },
      ]
    }
  },
}
</script>

<style scoped>
@media (max-width: 639px) {
  .content {
    margin: 0 auto;
  }
  .content_date {
    margin: 32px 16px 0 16px;
    color: #666666;
    font-size: 1.2rem;
    line-height: 1;
    font-weight: bold;
  }
  .content_posts {
    display: grid;
    grid-template-columns: 1;
  }
}
@media (min-width: 640px) and (max-width: 959px) {
  .content {
    width: 640px;
    margin: 0 auto;
  }
  .content_date {
    margin: 32px 32px 0 32px;
    color: #666666;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: bold;
  }
  .content_posts {
    display: grid;
    grid-template-columns: repeat(2, 50% [col-start]);
  }
}
@media (min-width: 960px) and (max-width: 1279px) {
  .content {
    width: 960px;
    margin: 0 auto;
  }
  .content_date {
    margin: 32px 32px 0 32px;
    color: #666666;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: bold;
  }
  .content_posts {
    display: grid;
    grid-template-columns: repeat(3, 33.3% [col-start]);
  }
}

@media (min-width: 1280px) {
  .content {
    width: 1280px;
    margin: 0 auto;
  }
  .content_date {
    margin: 32px 32px 0 32px;
    color: #666666;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: bold;
  }
  .content_posts {
    display: grid;
    grid-template-columns: repeat(4, 25% [col-start]);
  }
}
</style>