<template>
  <div id="mine" v-if="userInfo.token">
    <div class="tit">
      <van-nav-bar title="我的" :fixed="true" :border="true"></van-nav-bar>
      <!--用户-->
      <van-cell-group style="margin-top: 2.5rem">
        <van-cell
          is-link
          style="background-color: #2eba5a; color: #fff"
          :center="true"
        >
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <div class="personMsg">
              <img src="./images/js.png" />
              <div class="personInfo">
                <span>移动商城</span>
                <span class="name">手机号：{{userInfo.phone}}</span>
              </div>
            </div>
          </template>
        </van-cell>
      </van-cell-group>

      <!--我的订单-->
      <van-cell-group>
        <van-cell title="我的订单" icon="label" value="查看订单" is-link />
        <van-grid :column-num="4">
          <van-grid-item
            v-for="(order, index) in orderData"
            :key="index"
            :icon="order.icon"
            :text="order.title"
          />
        </van-grid>
      </van-cell-group>

      <!--我的优惠券-->
      <van-cell-group>
        <van-cell title="我的优惠券" icon="gold-coin" value="1张" is-link />
        <van-cell title="我的收货地址" icon="todo-list" is-link />
      </van-cell-group>

      <!--联系客服-->
      <van-cell-group>
        <van-cell title="联系客服" icon="phone" value="客服时间 07:00-22:00" />
        <van-cell title="意见反馈" icon="smile-comment" is-link />
      </van-cell-group>
    </div>
  </div>
  <SelectLogin v-else />
</template>

<script>
import SelectLogin from "@/views/login/SelectLogin";
import { mapState } from "vuex";

export default {
  name: "Mine",
  data() {
    return {
      orderData: [
        { icon: "cart-circle-o", title: "待支付" },
        { icon: "gift-o", title: "待收货" },
        { icon: "smile-comment-o", title: "待评价" },
        { icon: "cash-back-record", title: "售后/退款" },
      ],
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  components:{
    SelectLogin
  }
};
</script>



<style lang="less" scoped>
#mine {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

.van-nav-bar {
  background-color: #3bba63;
}

.tit /deep/ .van-nav-bar__title {
  color: #fff;
  font-size: 16px;
}

.personMsg {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.personMsg > img {
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  border: #14f094 solid 2px;
}

.personInfo {
  display: flex;
  flex-direction: column;
  margin-left: 1.7rem;
}

.name {
  margin-top: 1.7px;
}

.van-cell__left-icon {
  color: rgb(165, 119, 100);
  font-size: 1.3rem;
}
</style>