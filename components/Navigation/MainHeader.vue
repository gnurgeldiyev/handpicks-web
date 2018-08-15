<template>
  <div class="header">
    <div class="h_brand">
      <nuxt-link 
        to="/" 
        class="h_brand_name">
        handpicks
      </nuxt-link>
    </div>
    <div class="h_menu">
      <ul class="h_menu_list">
        <li class="h_menu_list_item">
          <nuxt-link to="#">drawing</nuxt-link>
        </li>
        <li class="h_menu_list_item">
          <nuxt-link to="#">illustration</nuxt-link>
        </li>
        <li class="h_menu_list_item">
          <nuxt-link to="#">painting</nuxt-link>
        </li>
        <li class="h_menu_list_item h_menu_list_item-active">
          <nuxt-link to="#">photography</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
@media (max-width: 480px) {
  .header {
    width: 100%;
    margin: 0 auto;
  }
  .h_brand {
    margin: 8px 0 16px 0; 
    text-align: center;
  }
  .h_brand_name {
    color: #000001;
    text-decoration: none;
    font-size: 2rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
  }
  .h_brand_name:hover {
    cursor: pointer;
    text-decoration: none;
  }
  .h_menu {
    margin: 16px 0;
    text-align: center;
  }
  .h_menu_list {
    list-style: none;
  }
  .h_menu_list_item {
    display: inline-block;
    margin: 0 8px;
  }
  .h_menu_list_item a {
    text-decoration: none;
    color: #666666;
    font-size: 0.9rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
    padding-bottom: 4px;
  }
  .h_menu_list_item a:hover {
    text-decoration: none;
    color: #000001;
  }
  .h_menu_list_item-active a {
    color: #000001 !important;
    border-bottom: 4px solid #000001 !important;
  }
}
@media (min-width: 481px) and (max-width: 767px) {
  .header {
    width: 100%;
    margin: 0 auto;
  }
  .h_brand {
    margin: 8px 0 16px 0; 
    text-align: center;
  }
  .h_brand_name {
    color: #000001;
    text-decoration: none;
    font-size: 2rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
  }
  .h_brand_name:hover {
    cursor: pointer;
    text-decoration: none;
  }
  .h_menu {
    margin: 16px 0;
    text-align: center;
  }
  .h_menu_list {
    list-style: none;
  }
  .h_menu_list_item {
    display: inline-block;
    margin: 0 8px;
  }
  .h_menu_list_item a {
    text-decoration: none;
    color: #666666;
    font-size: 1rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
    padding-bottom: 4px;
  }
  .h_menu_list_item a:hover {
    text-decoration: none;
    color: #000001;
  }
  .h_menu_list_item-active a {
    color: #000001 !important;
    border-bottom: 4px solid #000001 !important;
  }
}
@media (min-width: 768px) and (max-width: 1280px) {
  .header {
    width: 100%;
    margin: 0 auto;
  }
  .h_brand {
    margin: 16px 0 24px 0; 
    text-align: center;
  }
  .h_brand_name {
    color: #000001;
    text-decoration: none;
    font-size: 2.4rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
  }
  .h_brand_name:hover {
    cursor: pointer;
    text-decoration: none;
  }
  .h_menu {
    margin: 16px 0;
    text-align: center;
  }
  .h_menu_list {
    list-style: none;
  }
  .h_menu_list_item {
    display: inline-block;
    margin: 0 16px;
  }
  .h_menu_list_item a {
    text-decoration: none;
    color: #666666;
    font-size: 1.1rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
    padding-bottom: 4px;
  }
  .h_menu_list_item a:hover {
    text-decoration: none;
    color: #000001;
  }
  .h_menu_list_item-active a {
    color: #000001 !important;
    border-bottom: 4px solid #000001 !important;
  }
}
@media (min-width: 1280px) {
  .header {
    width: 1280px;
    margin: 0 auto;
  }
  .h_brand {
    margin: 16px 0 32px 0; 
    text-align: center;
  }
  .h_brand_name {
    color: #000001;
    text-decoration: none;
    font-size: 3rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
  }
  .h_brand_name:hover {
    cursor: pointer;
    text-decoration: none;
  }
  .h_menu {
    margin: 16px 0;
    text-align: center;
  }
  .h_menu_list {
    list-style: none;
  }
  .h_menu_list_item {
    display: inline-block;
    margin: 0 16px;
  }
  .h_menu_list_item a {
    text-decoration: none;
    color: #666666;
    font-size: 1.2rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
    padding-bottom: 4px;
  }
  .h_menu_list_item a:hover {
    text-decoration: none;
    color: #000001;
  }
  .h_menu_list_item-active a {
    color: #000001 !important;
    border-bottom: 4px solid #000001 !important;
  }
}
</style>