<template>
  <Swiper class="details-swiper">
    <SwiperItem v-for="item in topimages" :key="item">
      <img :src="item"/>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "Detailsswiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topimages: {
        type: Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style scoped>
  .details-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>