<template>
        <grid-view>
            <goods-list-item v-for="(content,index) in contentDetail" 
            :key="index"
            :listitem='content'/>
        </grid-view>
</template>

<script>
import GridView from 'components/common/gridView/GridView'
import GoodsListItem from 'components/content/goods/Goodslist-item'
export default {
  name: 'ContentDetail',
  components: {
      GridView,
      GoodsListItem
  },
  props: {
      contentDetail: Array
  }
}
</script>

<style>

</style>
