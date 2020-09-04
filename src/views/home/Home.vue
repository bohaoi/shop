<template>
  <div id="home">
    <Header></Header>
    <Sowing :sowing_list="sowing_list"></Sowing>
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
    };
  },
  created() {
    //请求网络数据
    getHomeData()
      .then((response) => {
        console.log(response);
        if (response.success) {
          this.sowing_list = response.data.list[0].icon_list;
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
  background-color: skyblue;
}
</style>