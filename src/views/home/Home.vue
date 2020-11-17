<template>
  <div id="home">
    <div v-if="!showLoading">
      <!--头部-->
      <Header />
      <!--轮播图-->
      <Sowing :sowing_list="sowing_list"></Sowing>
      <!--中部导航-->
      <Nav :nav_list="nav_list" />
      <!--秒杀-->
      <FlashSale :flash_sale_product_list="flash_sale_product_list" />
      <!--猜你喜欢-->
      <YouLike :you_like_product_list="you_like_product_list" />
      <!--返回顶部-->
      <MarkPage v-if="showBackStatus" :scrollToTop="scrollToTop" />
    </div>
    <van-loading
      v-else
      type="spinner"
      color="#75a342"
      style="
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%);
      "
      >小张正在拼命加载中...</van-loading
    >
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
import Nav from "./components/nav/Nav";
//5. 引入秒杀
import FlashSale from "./components/flashSale/FlashSale";
//6. 猜你喜欢
import YouLike from "./components/youLike/YouLike";
//7. 引入处理返回顶部的函数
import { showBack, animate } from "@/config/global";
//8. 返回顶部页面
import MarkPage from "./components/markPage/MarkPage";
//9. 引入购物车
import { mapMutations } from "vuex";
//10. 引入传值组件
import PubSub from "pubsub-js";
import { Toast } from "vant";

export default {
  name: "Home",
  data() {
    return {
      //首页的轮播图
      sowing_list: [],
      //loading加载
      showLoading: true,
      //导航数据
      nav_list: [],
      //秒杀数据
      flash_sale_product_list: [],
      //猜你喜欢
      you_like_product_list: [],
      //是否显示返回顶部图标
      showBackStatus: false,
    };
  },
  created() {
    //请求网络数据
    this.reqData();
  },
  mounted() {
    PubSub.subscribe("homeAddToCart", (msg, goods) => {
      if (msg === "homeAddToCart") {
        this.ADD_GOODS({
          goodsId: goods.id,
          goodsName: goods.name,
          smallImage: goods.small_image,
          goodsPrice: goods.price,
        });
        // 提示用户
        Toast({
          message: "添加到购物车成功！",
          duration: 800,
        });
      }
    });
  },
  beforeDestroy() {
    PubSub.unsubscribe("homeAddToCart");
  },
  components: {
    Header,
    Sowing,
    Nav,
    FlashSale,
    YouLike,
    MarkPage,
  },
  methods: {
    ...mapMutations(["ADD_GOODS"]),
    async reqData() {
      //同步
      let res = await getHomeData();
      // console.log(response);
      if (res.success) {
        this.sowing_list = res.data.list[0].icon_list;
        this.nav_list = res.data.list[2].icon_list;
        this.flash_sale_product_list = res.data.list[3].product_list;
        this.you_like_product_list = res.data.list[12].product_list;
        //隐藏加载动画
        this.showLoading = false;
        //开始监听滚动，到达一定位置就显示返回顶部按钮
        showBack((status) => {
          this.showBackStatus = status;
        });
      }
    },
    // 滚回顶部
    scrollToTop() {
      // 做缓动动画返回顶部
      let docB = document.documentElement || document.body;
      animate(docB, { scrollTop: "0" }, 400, "ease-out");
    },
  },
};
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  // height: 300rem;
  height: 100%;
  background-color: #f5f5f5;
}
</style>