<template>
  <navbar>
    <div slot="left" class="detailsnavleft" @click="backClick">
      <img src="~assets/img/common/back.svg"/>
    </div>
    <div slot="center" class="detailsnavcenter">
      <div v-for="(item,index) in titles" class="detailsnavcenteritem" :class="{isActive: index === currentIndex}" @click="itemClick(index)">{{item}}</div>
    </div>
  </navbar>
</template>

<script>
  import Navbar from 'components/common/navbar/Navbar';
  export default {
    name: "Detailsnavbar",
    components: {
      Navbar
    },
    data(){
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      backClick(){
        this.$router.back()
      },
      itemClick(index){
        this.currentIndex = index
        this.$emit('itemClick',index)
      }
    }
  }
</script>

<style scoped>
  .detailsnavcenter{
    display: flex;
    font-size: 14px;
  }
  .detailsnavcenteritem{
    flex: 1;
  }
  .detailsnavleft{
    margin-top: 5px;
  }
  .isActive{
    color: var(--color-high-text)
  }
</style>