<template>
  <div class="cartbottombar">
    <div class="left">
      <checkbutton class="selectbtn" :ischecked="ischecked" @click.native="selectClick"></checkbutton>
      <span>全选</span>
    </div>
    <div class="center">
      <span>总计：{{totalprice}}</span>
    </div>
    <div class="right" @click="buyClick">
      <span>去结算({{length}})</span>
    </div>
  </div>
</template>

<script>
  import Checkbutton from 'components/content/checkbutton/Checkbutton'
  import {mapGetters} from 'vuex'
  export default {
    name: "Cartbottombar",
    components: {
      Checkbutton
    },
    computed:{
      ...mapGetters({
        cartList:'cartList'
      }),
      totalprice(){
        return this.cartList.filter(item => item.checked == true).reduce((prevalue,item) =>{
          return prevalue + item.price * item.count
        },0).toFixed(2)
      },
      length(){
        return this.cartList.filter(item => item.checked == true).length
      },
      ischecked(){
        if(this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.checked)
      }
    },
    methods: {
      selectClick(){
        if(this.ischecked){
          this.cartList.forEach(item => item.checked = false)
        }else{
          this.cartList.forEach(item => item.checked = true)
        }
      },
      buyClick(){
        if(!this.ischecked){
//          console.log(this.$toast);
          this.$toast.show('请加入商品',1500)
        }
      }
    }
  }
</script>

<style scoped>
  .cartbottombar{
    display: flex;
    height: 40px;
    line-height: 40px;
    background-color: rgb(232, 232, 232);
    font-size: 14px;
  }
  .left{
    width: 20%;
    display: flex;
  }
  .selectbtn{
    height: 20px;
    display: flex;
    align-items:center;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .center{
    width: 60%;
    display: flex;
    padding-left: 10%;
  }
  .right{
    width: 20%;
    text-align: center;
    background-color: #ffac00;
  }
</style>