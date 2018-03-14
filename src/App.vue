<template>
  <div id="app">
     <app-header logo="logo" ></app-header>
     <app-nav></app-nav>
      <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
  
  </div>
</template>

<script>
import Header from './components/common/Header.vue';
 import Nav from './components/common/Nav.vue';
export default {
  name: 'App',
  components: {
      "app-header": Header,
      "app-nav": Nav,
  }
}

</script>

<style lang="less">
    .view {
        padding-top: 6.35rem;
    }
    @media screen and (min-width: 320px) {
        html, body { font-size: 12px !important; }
    }
    @media screen and (min-width: 360px) {
        html, body { font-size: 13.5px !important; }
    }
    @media screen and (min-width: 375px) {
        html, body { font-size: 14px !important; }
    }
    @media screen and (min-width: 414px) {
        html, body { font-size: 15.5px !important; }
    }
    @media screen and (min-width: 720px) {
        html, body { font-size: 27px !important; }
    }
    @media screen and (min-width: 1024px) {
        html, body { font-size: 38.4px !important; }
    }
    @media screen and (min-width: 1080px) {
        html, body { font-size: 40.5px !important; }
    }
    @media screen and (min-width: 1366px) {
        html, body { font-size: 51px !important; }
    }
    @media screen and (min-width: 1440px) {
        html, body { font-size: 54px !important; }
    }
    @media screen and (min-width: 1600px) {
        html, body { font-size: 60px !important; }
    }
    @media screen and (min-width: 1920px) {
        html, body { font-size: 72px !important; }
    }
    body, html {
        margin: 0;
        padding: 0;
    }
</style>
