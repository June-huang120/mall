<template>
  <div class="checkbtn" :class="{ischeck: ischecked}">
    <img src="~assets/img/cart/tick.svg"/>
  </div>
</template>

<script>
  export default {
    name: "Checkbutton",
    props:{
      ischecked:{
        type: Boolean,
        default(){
          return true
        }
      }
    }
  }
</script>

<style scoped>
  checkbtn{
    border-radius: 50%;
    border: 2px solid #676767;
    background-color: #8b8b8b;
  }
  .ischeck{
    border-radius: 50%;
    background-color: var(--color-tint);
    border: 2px solid var(--color-tint)
  }
</style>