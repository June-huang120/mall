<template>
  <div class="toast" v-show="isshow">
    <span>{{message}}</span>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return {
        message: '',
        isshow: false
      }
    },
    methods: {
      show(message, duration){
        this.isshow = true
        this.message = message

        setTimeout(() => {
          this.isshow = false
          this.message = ''
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast{
    z-index: 999;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,.6);
    border-radius: 5%;
    color: #fff;
    padding: 8px 7px;
  }
</style>