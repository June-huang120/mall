<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image"/>
      </a>
      <div>{{item.title}}在这里</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommendview",
    props: {
      recommends: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    padding: 15px 0 30px;
    display: flex;
    font-size: 12px;
    text-align: center;
    border-bottom: 15px solid #eee;
  }
  .recommend-item{
    flex:1;
  }
  .recommend img{
    /*width: 20%;*/
    /*height: 20%;*/
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>