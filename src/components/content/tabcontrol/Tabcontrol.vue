<template>
  <div class="tabcontrol">
    <div class="tabcontrol-item" v-for="(item,index) in titles" :class="{active: index ===currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tabcontrol",
    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index;
        this.$emit('tabClick', index);
      }
    }
  }
</script>

<style scoped>
  .tabcontrol{
    display: flex;
    font-size: 15px;
    height: 40px;
    width: 100%;
    line-height: 40px;
    background-color: #fff;
    text-align: center;
    position: sticky;
    top: 44px;
  }
  .tabcontrol-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);

  }
  .active span{
    border-bottom: 2px solid var(--color-tint);
    padding: 3px;
  }
</style>