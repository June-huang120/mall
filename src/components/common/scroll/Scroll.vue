<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probetype: {
        type: Number,
        default: 0
      },
      pullupload: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll: null
      }
    },
    methods: {
      scrollTo(x, y, time=300){
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      scrollRefresh(){
//        console.log('发送请求');
        this.scroll && this.scroll.refresh()
      },
      scrollFinish(){
        this.scroll.finishPullUp()
      },
      getScrollY(){
        return this.scroll.y
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probetype,
        pullUpLoad: this.pullupload
    })
      if(this.probettype === 2 ||this.probetype === 3){
        this.scroll.on('scroll', (position) => {
//        console.log('aaaaaaa');
//        console.log(position);
          this.$emit('scroll',position)
        })
      }
      if(this.pullupload === true){
        this.scroll.on('pullingUp', () => {
//        console.log('加载更多');
          this.$emit('pullingup')
        })
      }
    }
  }
</script>

<style scoped>

</style>