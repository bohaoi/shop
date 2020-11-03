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