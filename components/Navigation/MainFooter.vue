<template>
  <div 
    :style="height"
    class="footer">
    <div class="f-items">
      <div class="f_item"> 
        made with 
        <img 
          class="f_item_icon"
          src="/icon-heart.svg" 
          alt="heart icon">
      </div>
      <div class="f_item">
        download on the 
        <a href="#">
          <img 
            class="f_item_icon"
            src="/logo-apple.svg" 
            alt="apple brand logo">
        </a>
      </div>
      <div class="f_item">
        follow on the
        <a href="#">
          <img 
            class="f_item_icon"
            src="/logo-twitter.svg" 
            alt="twitter brand logo">
        </a>
        <a href="#">
          <img 
            class="f_item_icon"
            src="/logo-instagram.svg" 
            alt="instagram brand logo">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      height: {
        type: String,
        required: true
      } 
    },
  }
</script>

<style>
@media (max-width: 519px) {
  .footer {
    margin: 32px 16px 16px 16px;
  }
  .f_item {
    margin: 16px 0 !important;
    color: #666666;
    font-size: 0.9rem;
    font-weight: 500;
  }
  .f_item a {
    text-decoration: none;
    color: #666666;
  }
  .f_item a:hover,
  .f_item a:hover .f_item_icon {
    text-decoration: none;
    cursor: pointer;
  }
  .f_item_icon {
    width: auto;
    height: 0.9rem;
    margin: 0 8px;
  }
}
@media (min-width: 520px) and (max-width: 1280px) {
  .footer {
    position: absolute; 
    left: calc(50% - 260px);
    margin: 32px 0 16px 0;
    width: 520px;
  }
  .f-items {
    position: relative; 
    display: flex;
  }
  .f_item {
    margin: 0 16px !important;
    color: #666666;
    font-size: 0.9rem;
    font-weight: 500;
  }
  .f_item a {
    text-decoration: none;
    color: #666666;
  }
  .f_item a:hover,
  .f_item a:hover .f_item_icon {
    text-decoration: none;
    cursor: pointer;
  }
  .f_item_icon {
    width: auto;
    height: 0.9rem;
    margin: 0 8px;
  }
}
@media (min-width: 1280px) {
  .footer {
    position: absolute; 
    left: 50%;
    margin: 32px 0 16px 0;
  }
  .f-items {
    position: relative; 
    left: -50%;
    display: flex;
  }
  .f_item {
    margin: 0 16px !important;
    color: #666666;
    font-size: 0.9rem;
    font-weight: 500;
  }
  .f_item a {
    text-decoration: none;
    color: #666666;
  }
  .f_item a:hover,
  .f_item a:hover .f_item_icon {
    text-decoration: none;
    cursor: pointer;
  }
  .f_item_icon {
    width: auto;
    height: 0.9rem;
    margin: 0 8px;
  }
}
</style>