<template>
  <div class="error">
    <h1 class="error_code">404</h1>
    <h3 class="error_message">We couldn't find this page.</h3>
    <p class="error_action">You can always find handpicked contents on our <nuxt-link to="/">homepage</nuxt-link>.</p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
@media (max-width: 639px) {
  .error {
    margin: 5rem 16px 10rem 16px;
    text-align: center;
  }
  .error_code {
    color: #000001;
    font-size: 3rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
  }
  .error_message {
    color: #000001;
    font-size: 1.4rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
    margin: 16px 0 16px 0;
  }
  .error_action,
  .error_action a {
    color: #666666;
    font-size: 0.9rem;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
    margin: 0 0 16px 0;
  }
}
@media (min-width: 640px) and (max-width: 959px) {
  .error {
    width: 640px;
    margin: 2rem auto;
    text-align: center;
  }
  .error_code {
    color: #000001;
    font-size: 3rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
  }
  .error_message {
    color: #000001;
    font-size: 1.5rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
    margin: 16px 0 16px 0;
  }
  .error_action,
  .error_action a {
    color: #666666;
    font-size: 0.9rem;
    line-height: 1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
    margin: 0 0 16px 0;
  }
}
@media (min-width: 960px) and (max-width: 1279px) {
  .error {
    width: 960px;
    margin: 4rem auto;
    text-align: center;
  }
  .error_code {
    color: #000001;
    font-size: 5rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
  }
  .error_message {
    color: #000001;
    font-size: 2.5rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
    margin: 32px 0 16px 0;
  }
  .error_action,
  .error_action a {
    color: #666666;
    font-size: 0.9rem;
    line-height: 1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
    margin: 0 0 16px 0;
  }
}
@media (min-width: 1280px) {
  .error {
    width: 1280px;
    margin: 7rem auto;
    text-align: center;
  }
  .error_code {
    color: #000001;
    font-size: 6rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
  }
  .error_message {
    color: #000001;
    font-size: 3rem;
    line-height: 1;
    font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
    margin: 32px 0 16px 0;
  }
  .error_action,
  .error_action a {
    color: #666666;
    font-size: 1rem;
    line-height: 1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
    margin: 0 0 16px 0;
  }
}
</style>