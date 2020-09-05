<template>
  <div id="home">
    <div v-if="!showLoading">
      <!--头部-->
      <Header/>
      <!--轮播图-->
      <Sowing :sowing_list="sowing_list"></Sowing>
      <!--中部导航-->
      <Nav :nav_list="nav_list"/>
      <!--秒杀-->
      <FlashSale :flash_sale_product_list="flash_sale_product_list"/>
      <!--猜你喜欢-->
      <YouLike :you_like_product_list="you_like_product_list"/>
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
//4. 引入nav导航
import Nav from "./components/nav/Nav"
//5. 引入秒杀
import FlashSale from "./components/flashSale/FlashSale"
//6. 猜你喜欢
import YouLike from './components/youLike/YouLike' 


export default {
  name: "Home",
  data() {
    return {
      //首页的轮播图
      sowing_list: [],
      //loading加载
      showLoading: true,
      //导航数据
      nav_list:[],
      //秒杀数据
      flash_sale_product_list:[],
      //猜你喜欢
      you_like_product_list: [],
    };
  },
  created() {
    //请求网络数据
    getHomeData()
      .then((response) => {
        console.log(response);
        if (response.success) {
          this.sowing_list = response.data.list[0].icon_list;
          this.nav_list = response.data.list[2].icon_list;
          this.flash_sale_product_list = response.data.list[3].product_list;
          this.you_like_product_list = response.data.list[12].product_list;
          //隐藏加载动画
          this.showLoading= false;
        }
      })
      .then((error) => console.log(error));
  },
  components: {
    Header,
    Sowing,
    Nav,
    FlashSale,
    YouLike
  },
};
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  height: 300rem;
  background-color: #f5f5f5;
}
</style>