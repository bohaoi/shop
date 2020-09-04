<template>
  <div id="home">
    <div v-if="!showLoading">
      <Header></Header>
      <Sowing :sowing_list="sowing_list"></Sowing>
    </div>
    <van-loading
      v-else
      type="spinner"
      color="#75a342"
      style="position: absolute;left:50%;top: 40%;transform: translate(-50%)"
    >小张正在拼命加载中...</van-loading>
  </div>
</template>

<script>
//1. 引入
import { getHomeData } from "./../../service/api/index";
//2. 引入头部导航组件
import Header from "./components/header/Header";
//3. 引入swiper组件
import Sowing from "./components/sowing/Sowing";

export default {
  name: "Home",
  data() {
    return {
      //首页的轮播图
      sowing_list: [],
      showLoading: true,
    };
  },
  created() {
    //请求网络数据
    getHomeData()
      .then((response) => {
        console.log(response);
        if (response.success) {
          this.sowing_list = response.data.list[0].icon_list;
          //隐藏加载动画
          this.showLoading= false;
        }
      })
      .then((error) => console.log(error));
  },
  components: {
    Header,
    Sowing,
  },
};
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>