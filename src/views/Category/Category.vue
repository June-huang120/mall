<template>
    <div class="wrapper">
        <nav-bar class="nav-bar">
            <template #center>商品分类</template>
        </nav-bar>
        <div class="content">
          <category-menu :categories='categories' @selectItem='selectItem'/>
          <scroll class="tab-content" :data='[categoryData]' ref="scroll" :probetype='3' @scroll="scroll">
          <div>
            <menu-detail :subcategories='showSubcategory'/>
            <tab-control :titles="['综合','新品','销量']"
            @tabClick='tabClick'/>
            <content-detail :content-detail='showContentDetail'/>
          </div>
          </scroll>
        </div>
        <backtop v-show="isshowbackup" @click.native="backClick"></backtop>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/Navbar'
import CategoryMenu from './childCopms/CategoryMenu'
import MenuDetail from './childCopms/MenuDetail'
import ContentDetail from './childCopms/ContentDetail'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabcontrol/Tabcontrol'

import {getCategory,getsubcategory,getContentDetail} from 'network/category.js'
import {backtopMixin} from 'common/mixin.js'
export default {
  name: 'Category',
  components: {
    NavBar,
    CategoryMenu,
    MenuDetail,
    ContentDetail,
    Scroll,
    TabControl
  },
  data(){
      return {
        categories: [],
        categoryData: [],
        currentIndex: -1,
        currentType: 'pop'
      }
  },
  mixins: [backtopMixin],
  created () {
    this._getCategory()
    // this._getubcategory(0)
  },
  computed: {
    showSubcategory () {
      if(this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showContentDetail () {
      if(this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ]
    }
  },
  methods: {
    _getCategory(){
      getCategory().then(res => {
        console.log(res);
        // 1.获取分类数据
        this.categories = res.data.category.list
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        //   主数据请求到之后才能接着请求后面的子数据
        this._getsubcategory(0)
      })
    },
    _getsubcategory(index){
      this.currentIndex = index
      const mailKey = this.categories[index].maitKey
      getsubcategory(mailKey).then(res => {
//          console.log(res);
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        this._getContentDetail('pop')
        this._getContentDetail('new')
        this._getContentDetail('sell')
//          console.log(this.categoryData);
      })
    },
    _getContentDetail(type) {
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
//      console.log(miniWallkey);
      getContentDetail(miniWallkey, type).then(res => {
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    },
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      console.log(this.currentType);
    },
    selectItem (index) {
      this._getsubcategory(index)
      console.log(index);
    },
    scroll (position) {
      const positionY = Math.abs(position.y)
//      console.log(positionY);
      this.isshowbackup = positionY > 1000
    }
  }
}
</script>

<style scoped>
.wrapper {
    /* background: chartreuse; */
    height: 100vh;
}
.nav-bar {
    background: var(--color-tint);
    color: #fff;
    font-weight: 700;
}
.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
.tab-content {
  height: 100%;
  flex: 1;
  position: absolute;
  left: 100px;
}
</style>
