/**
 * Created by Administrator on 2021/5/21.
 */
import {debounce} from './utils'
import Backtop from 'components/content/backtop/Backtop'

export const itemListenerMixin = {
  data(){
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted(){
    this.newRefresh = debounce(this.$refs.scroll.scrollRefresh, 100)
    this.itemImgListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('imgload',this.itemImgListener)
  }
}
export const backtopMixin = {
  data(){
    return {
      isshowbackup: false,
    }
  },
  components: {
    Backtop
  },
  methods: {
    backClick(){
//        console.log('回到顶部');
      this.$refs.scroll.scrollTo(0, 0)
    },
  }
}
