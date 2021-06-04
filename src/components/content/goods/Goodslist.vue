<template>
  <div class="goodslist">
    <div class="listitem" v-for="item in goodslist">
      <goodslistitem :listitem="item"></goodslistitem>
    </div>
  </div>
</template>

<script>
  import Goodslistitem from './Goodslist-item.vue'

  export default {
    name: "Goodslist",
    components: {
      Goodslistitem
    },
    props: {
      goodslist: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goodslist{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1%;
  }
  .listitem{
    width: 48%;
    padding: 1%;
  }
</style>