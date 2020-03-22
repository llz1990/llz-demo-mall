<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/tabbar/MainTabBar';
export default {
  name: 'App',
  components: {
    'main-tab-bar': MainTabBar
  }
}
</script>

<style>
/* style中引入样式，   @import   */
@import "./assets/css/base.css";
</style>
