<template>
  <div id="app">
    <keep-alive exclude="Details">
      <router-view/>
    </keep-alive>
    <maintabbar class="bottombar"></maintabbar>
  </div>
</template>

<script>
  import Maintabbar from 'components/content/maintabbar/Maintabbar.vue'
  export default {
    name: 'App',
    components: {
      Maintabbar
    }
  }
</script>

<style scoped="">
  @import "assets/css/base.css";
  .bottombar{
    /*z-index: 9;*/
  }
</style>
