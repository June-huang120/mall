<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style scoped>
  #tabbar{
    display: flex;
    justify-content: space-around;
    height: 49px;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
  }
</style>
