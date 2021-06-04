<template>
  <div class="nav-bar">
    <div id="left"><slot name="left"></slot></div>
    <div id="center"><slot name="center"></slot></div>
    <div id="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }
  #left, #right{
    width: 60px;
  }
  #center{
    flex: 1;
  }
</style>