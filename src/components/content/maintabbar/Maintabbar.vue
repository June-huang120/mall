<template>
    <tabbar>
      <tabbaritem path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/cc-home.png" alt=""/>
        <img slot="item-icon-active" src="~assets/img/tabbar/cc-home-active.png"/>
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.png" alt=""/>
        <img slot="item-icon-active" src="~assets/img/tabbar/category-active.png"/>
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/shopcart">
        <img slot="item-icon" src="~assets/img/tabbar/shop-cart-1.png" alt=""/>
        <img slot="item-icon-active" src="~assets/img/tabbar/shop-cart-1-active.png"/>
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt=""/>
        <img slot="item-icon-active" src="~assets/img/tabbar/profile-active.png"/>
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
</template>

<script>
  import Tabbar from 'components/common/tabbar/Tabbar.vue'
  import Tabbaritem from 'components/common/tabbar/Tabbaritem.vue'
  export default {
    name: "Maintabbar",
    components: {
      Tabbar,
      Tabbaritem
    }
  }
</script>

<style scoped>

</style>
