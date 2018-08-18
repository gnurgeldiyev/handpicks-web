<template>
  <div>
    <div ref="content">
      <main-header />
      <nuxt />
    </div>
    <main-footer :height="contentHeight" />
  </div>
</template>

<script>
import MainHeader from "@/components/Navigation/MainHeader";
import MainFooter from "@/components/Navigation/MainFooter";
export default {
  components: {
    "main-header": MainHeader,
    "main-footer": MainFooter,
  },
  data () {
    return {
      contentHeight: 'top: ',
    }
  },
  mounted () {
    const windowHeight = window.innerHeight;
    const contentHeight= this.$refs.content.clientHeight;
    if (windowHeight < (contentHeight + 32)) {
      this.contentHeight += contentHeight + 'px;';
    } else {
      this.contentHeight += (windowHeight - 64) + 'px;';
    }
  },
};
</script>


<style>
@font-face {
  font-family: "Mosk";
  src: url("../assets/fonts/MoskMedium500.woff2") format("woff2"),
    url("../assets/fonts/MoskMedium500.woff") format("woff"),
    url("../assets/fonts/MoskMedium500.svg#MoskMedium500") format("svg");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Mosk";
  src: url("../assets/fonts/MoskBold700.woff2") format("woff2"),
    url("../assets/fonts/MoskBold700.woff") format("woff"),
    url("../assets/fonts/MoskBold700.svg#MoskBold700") format("svg");
  font-weight: bold;
  font-style: normal;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
