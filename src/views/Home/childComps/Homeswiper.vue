<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgload">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "Homeswiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        isflush: false
      }
    },
    methods: {
      imgload(){
        if(this.isflush === false){
          this.$emit('imgload')
          this.isflush = true
        }
      }
    }
  }
</script>

<style scoped>

</style>