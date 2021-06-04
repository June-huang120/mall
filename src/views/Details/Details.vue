<template>
  <div id="details">
    <detailsnavbar ref="nav" class="detailsnav" @itemClick="navClick"></detailsnavbar>
    <scroll class="scroll" ref="scroll" :probetype="3" @scroll="contentScroll" >
      <detailsswiper :topimages="topimages" ></detailsswiper>
      <detailbaseinfo :goods="goods"></detailbaseinfo>
      <detailshopinfo :shop="shop"></detailshopinfo>
      <detailgoodsinfo ref="goods" :detailinfo="detailinfo" @imgLoad="imgload"></detailgoodsinfo>
      <detailparaminfo ref="params" :paraminfo="paraminfo"></detailparaminfo>
      <detailcommentinfo ref="comments" :commentinfo="commentinfo"></detailcommentinfo>
      <goodslist ref="recommends" :goodslist="imglist"></goodslist>
    </scroll>
    <detailbottombar class="bottom" @addCart="addCart"></detailbottombar>
    <backtop @click.native="backClick" v-show="isshowbackup"></backtop>
  </div>
</template>

<script>
  import Detailsnavbar from './childcomps/Detailsnavbar';
  import Detailsswiper from "./childcomps/Detailsswiper";
  import Detailbaseinfo from "./childcomps/Detailbaseinfo";
  import Detailshopinfo from "./childcomps/Detailshopinfo";
  import Detailgoodsinfo from "./childcomps/Detailgoodsinfo";
  import Detailparaminfo from "./childcomps/Detailparaminfo";
  import Detailcommentinfo from "./childcomps/Detailcommentinfo";
  import Detailbottombar from "./childcomps/Detailbottombar.vue";

  import Scroll from 'components/common/scroll/Scroll';
  import Toast from 'components/common/toast/Toast'
  import Goodslist from 'components/content/goods/Goodslist';

  import {getDetails,Goods,Shop,GoodsParam,getRecommends} from 'network/details'

  import {itemListenerMixin,backtopMixin} from 'common/mixin'
  import {debounce} from 'common/utils'

  import {mapActions} from 'vuex'

  export default {
    name: "Details",
    components: {
      Detailbaseinfo,
      Detailsswiper,
      Detailsnavbar,
      Detailshopinfo,
      Scroll,
      Toast,
      Detailgoodsinfo,
      Detailparaminfo,
      Detailcommentinfo,
      Goodslist,
      Detailbottombar
    },
    mixins: [itemListenerMixin,backtopMixin],
    data(){
      return {
        id: null,
        topimages: [],
        goods: {},
        shop: {},
        detailinfo: {},
        paraminfo: {},
        commentinfo: {},
        imglist: [],
        clicktoy: [],
        getclicky: null,
        currentindex: null
      }
    },
    created(){
      this.id = this.$route.params.id

      getRecommends().then(res => {
//        console.log(res);
        this.imglist = res.data.list
//        console.log(this.imglist);
      })

      getDetails(this.id).then(res => {
        const data = res.result
        // console.log(data);
        // 1.获取顶图的轮播图
        this.topimages = data.itemInfo.topImages

        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        this.shop = new Shop(data.shopInfo)

        this.detailinfo = data.detailInfo

        this.paraminfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

        if(data.rate.cRate !== 0){
          this.commentinfo = data.rate.list[0]
//          console.log(this.commentinfo);
        }
      })

      this.getclicky = debounce(() => {
        this.clicktoy = []
        this.clicktoy.push(0)
        this.clicktoy.push(this.$refs.params.$el.offsetTop)
        this.clicktoy.push(this.$refs.comments.$el.offsetTop)
        this.clicktoy.push(this.$refs.recommends.$el.offsetTop)
        this.clicktoy.push(Number.MAX_VALUE)
//        console.log(this.clicktoy);
      },500)
    },
    methods: {
      ...mapActions({
        add: 'addCart'
      }),
      addCart(){
        const product = {}
        product.image = this.topimages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.id = this.id

//        this.$store.dispatch('addCart',product).then(res => {
//          console.log(res);
//        })
        this.add(product).then(res => {
          this.$toast.show(res,1500)
        })
      },

      scrollClick(position){
//        console.log(position);

      },
      imgload(){
//        console.log('刷新了');
//        this.$refs.scroll.scrollRefresh()
        this.newRefresh()

        this.getclicky()
      },
      navClick(index){
//        console.log(index);
        this.$refs.scroll.scrollTo(0, -this.clicktoy[index], 500)
      },
      contentScroll(position){
        const positiony = -position.y
//        console.log(positiony);

        let length = this.clicktoy.length
//        for(let i = 0; i < length; i++){
//          if(this.currentindex !== i && ((i<length - 1 && positiony >= this.clicktoy[i] &&
//             positiony < this.clicktoy[i+1]) || (i === length - 1 && positiony >=
//            this.clicktoy[i]))){
//            console.log(i);
//            this.currentindex = i;
//            this.$refs.nav.currentIndex = this.currentindex
//          }
//        }
        for(let i = 0; i < length - 1; i++){
          if(this.currentindex !== i && positiony >= this.clicktoy[i] && positiony < this.clicktoy[i+1]){
//            console.log(i);
            this.currentindex = i;
            this.$refs.nav.currentIndex = this.currentindex
            break
          }
        }


        this.isshowbackup = Math.abs(position.y) > 1000
      }
    },
    destroyed(){
      this.$bus.$off('imgload',this.itemImgListener)
//      console.log('destroyed');
    }
  }
</script>

<style scoped>
  #details{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detailsnav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .scroll{
    position: absolute;
    top: 44px;
    left: 0px;
    bottom: 44px;
    right: 0px;

  }
  .bottom{
    width: 100%;
    position: absolute;
    bottom: 0px;
    z-index: 9;
  }
</style>