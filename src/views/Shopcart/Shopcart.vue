<template>
  <div class="cart">
    <navbar class="navbar"><div slot="center">购物车({{length}})</div></navbar>
    <scroll class="scroll" ref="scroll">
      <cartlist class="cartlist"></cartlist>
    </scroll>
    <div class="cartbottombar">
      <cartbottombar></cartbottombar>
    </div>
  </div>
</template>

<script>
  import Navbar from 'components/common/navbar/Navbar'
  import {mapGetters} from 'vuex'
  import Cartlist from './childComps/Cartlist.vue'
  import Cartbottombar from './childComps/Cartbottombar.vue'
  import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: "Shopcart",
    components: {
      Scroll,
      Navbar,
      Cartlist,
      Cartbottombar
    },
    computed: {
      ...mapGetters({
        length: 'cartLength'
      })
    },
    activated(){
//      console.log('------');
      this.$refs.scroll.scrollRefresh()
    }
  }
</script>

<style scoped>
  .cart{
    height:100vh;
    position: relative;
    background-color: #fff;
  }
  .navbar{
    position: relative;
    z-index: 9;
    background-color: var(--color-tint);
  }
  .scroll{
    position: absolute;
    top: 44px;
    right: 0px;
    bottom: 84px;
    left: 0px;
    overflow: hidden;
  }
  .cartbottombar{
    position: absolute;
    bottom: 25px;
    right: 0px;
    left: 0px;
  }
</style>
