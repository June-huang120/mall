<template>
    <div class="cartlist">
      <cartlistitem v-for="(item,index) in cartList" :key="index" :product="item"></cartlistitem>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Cartlistitem from './Cartlistitem.vue'

  export default {
    name: "Cartlist",
    components: {
      Cartlistitem
    },
    computed: {
      ...mapGetters({
        cartList: 'cartList'
      }),
    }
  }
</script>

<style scoped>
</style>