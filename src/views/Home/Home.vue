<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
    <tabcontrol class="home-tabcontrol" ref="hometabcontrol2" :titles="['流行','新款','精选']" @tabClick="tabClick" v-show="isshowtabcontrol"></tabcontrol>
    <scroll class="home-scroll" ref="scroll" :probetype="3" @scroll="scrollClick" :pullupload="true" @pullingup="loadmore">
      <homeswiper class="home-swiper" :banners="banners" @imgload="imgload"></homeswiper>
      <recommendview :recommends="recommends"></recommendview>
      <featureview></featureview>
      <tabcontrol ref="hometabcontrol1" :titles="['流行','新款','精选']" @tabClick="tabClick"></tabcontrol>
      <goodslist :goodslist="showgoods"></goodslist>
    </scroll>

    <backtop @click.native="backClick" v-show="isshowbackup"></backtop>
  </div>
</template>

<script>
  import Navbar from 'components/common/navbar/Navbar'
  import Scroll from 'components/common/scroll/Scroll'
  import Tabcontrol from 'components/content/tabcontrol/Tabcontrol'
  import Goodslist from 'components/content/goods/Goodslist'

  import Homeswiper from './childComps/Homeswiper'
  import Recommendview from "./childComps/Recommendview";
  import Featureview from "./childComps/Featureview";

  import {getHomeMultidata, getHomeGoods} from '../../network/home'
  import {debounce} from 'common/utils'
  import {itemListenerMixin,backtopMixin} from 'common/mixin'

  export default {
    name: "Home",
    components: {
      Navbar,
      Scroll,
      Tabcontrol,
      Goodslist,
      Homeswiper,
      Recommendview,
      Featureview
    },
    mixins: [itemListenerMixin,backtopMixin],
    data(){
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currenttype: 'pop',
        offsettop: 0,
        isshowtabcontrol: false,
        saveY: 0,
      }
    },
    computed: {
      showgoods(){
        return this.goods[this.currenttype].list
      }
    },
    methods: {
      /**
       * 事件监听
       */
      tabClick(index){
//        console.log(index);
        switch (index){
          case 0:
            this.currenttype = 'pop'
            break
          case 1:
            this.currenttype = 'new'
            break
          case 2:
            this.currenttype = 'sell'
            break
        }
        this.$refs.hometabcontrol1.currentIndex = index
        this.$refs.hometabcontrol2.currentIndex = index
      },
      scrollClick(position){
//        console.log(position);
        this.isshowbackup = Math.abs(position.y) > 1000
//        console.log(this.offsettop < Math.abs(position.y));
        this.isshowtabcontrol = this.offsettop < Math.abs(position.y)
      },
      loadmore(){
        this.$refs.scroll.scrollRefresh();
        console.log('加载更多');
        this.getHomeGoods(this.currenttype);
        this.$refs.scroll.scrollFinish();
      },
      imgload(){
//        console.log(this.$refs.hometabcontrol1.$el.offsetTop);
        this.offsettop = this.$refs.hometabcontrol1.$el.offsetTop
      },
      /**
       * 请求网络
       */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
//        console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
//        console.log(this.banners);
//        console.log(this.recommends);
        })
      },
      getHomeGoods(type){
        getHomeGoods(type,(this.goods[type].page + 1)).then(res => {
//          console.log(res.data);
          this.goods[type].list.push(...res.data.list);
//          console.log(this.goods[type].list);
          this.goods[type].page +=1;
//          console.log(this.goods[type].page);
        })
      }
    },
    created(){
      this.getHomeMultidata()

      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted(){
    },
    activated(){
//      console.log('activated');
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.scrollRefresh()
    },
    deactivated(){
//      console.log('deactivated');
      this.saveY = this.$refs.scroll.getScrollY()
      this.$bus.$off('imgload',this.itemImgListener)
    }
  }
</script>

<style scoped>
  #home{
    position: relative;
    /*padding-top: 44px;*/
    height: 100vh;
    /*height: 2000px;*/
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 9;
  }
  .home-scroll{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
    overflow: hidden;
  }
  .home-tabcontrol{
    position: relative;
    /*background-color: #ff8198;*/
    z-index: 9;
  }
</style>
