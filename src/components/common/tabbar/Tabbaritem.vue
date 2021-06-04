<template>
  <div class="tabbar-item ignore" @click="tabbarClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "Tabbaritem",
    props: {
      path: String,
      activecolor: {
        type: String,
        default: 'red'
      }
    },
    data(){
      return {
//        isActive: true
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activecolor}:{}
      }
    },
    methods: {
      tabbarClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tabbar-item img{
    margin: auto 0;
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active{
    color: #D81E06;
  }
</style>
