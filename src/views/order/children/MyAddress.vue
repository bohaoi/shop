<template>
  <div id="myAddress">
    <!--导航栏-->
    <van-nav-bar
      title="我的地址"
      left-arrow
      :fixed="true"
      :border="true"
      @click-left="onClickLeft"
    >123</van-nav-bar>
  </div>
</template>

<script>
export default {
    name:"MyAddress",
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    }
};
</script>

<style>
</style>