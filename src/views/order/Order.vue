<template>
  <div id="order">
    <!--导航栏-->
    <van-nav-bar
      title="填写订单"
      left-arrow
      @click-left="onClickLeft"
    ></van-nav-bar>

    <!-- 收货地址 -->
    <van-contact-card
      :type="address_type"
      add-text="选择收货地址"
      :name="address_name"
      :tel="address_phome"
      @click="chooseAddress"
    ></van-contact-card>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="送达时间" value="请选择送达时间" is-link />
      <van-cell value="内容" is-link :center="true">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <img src="./images/detail1.jpg" style="width:3rem"/>
          <img src="./images/detail1.jpg" style="width:3rem"/>
          <img src="./images/detail1.jpg" style="width:3rem"/>
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="请选择支付方式" value="微信" is-link />
    </van-cell-group>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="备注">
        <input type="text" placeholder="特殊要求" style="text-align: right" />
      </van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="商品金额" value="￥50.78" is-link />
      <van-cell title="配送费" value="￥1.8" is-link />
    </van-cell-group>

    <van-submit-bar label="实付" :price="4050" button-text="提交订单" @submit="onSubmit" />

    <!--转场动画-->
    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      address_type: "add", //地址卡片类型
      address_name: "null",
      address_phome: null,
      address_id: null,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    chooseAddress() {
      this.$router.push("/confirmOrder/myAddress");
    },
    onSubmit(){
      alert('购买成功')
    }
  },
};
</script>

<style scoped>
#order {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

/*转场动画*/
.router-slider-enter-active,
.router-slider-leave-active {
  transition: all 0.3s;
}

.router-slider-enter,
.router-slider-leave-active {
  transform: translate3d(2rem, 2rem, 2rem);
  opacity: 0;
}
</style>