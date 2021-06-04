<template>
  <div class="list-item" @click="itemClick">
    <a ><img v-lazy="showimg" @load="imgload"/></a>
    <div class="goods-info">
      <p>{{listitem.title}}</p>
      <span class="price">{{listitem.price}}</span>
      <span class="cfav">{{listitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Goodslist-item",
    props: {
      listitem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      imgload(){
        this.$bus.$emit('imgload')
      },
      itemClick(){
        this.$router.push('/details/'+ this.listitem.iid)
      }
    },
    computed: {
      showimg(){
        return this.listitem.image || this.listitem.img || this.listitem.show.img
      }
    }
  }
</script>

<style scoped>
  .list-item{
    position: relative;
    font-size: 12px;
    padding-bottom: 55px;
  }
  .list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    width: 100%;
    position: absolute;
    height: 20px;
    line-height: 20px;
    padding: 2%;
  }
  .list-item .goods-info p{
    position: absolute;
    top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .goods-info .price{
    position: absolute;
    color: var(--color-high-text);
    top: 42px;
    left: 20%;
  }
  .goods-info .cfav::before{
    position: absolute;
    content: '';
    height: 15px;
    width: 15px;
    left: -18px;
    top: 2px;
    background: url(../../../assets/img/common/collect.svg) 0 0/14px 14px;
    background-size: 100%;
  }
  .goods-info .cfav{
    position: absolute;
    right:20%;
    top: 42px;
  }
</style>