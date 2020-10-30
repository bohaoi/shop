import {
  ADD_GOODS,
  INIT_SHOP_CART,
  REDUCE_CART,
  SELECTED_SINGER_GOODS,
} from "./mutations-type";

import { getStore, removeStore, setStore } from "./../config/global";
import Vue from "vue";

export default {
  //1. 往购物车中添加数据
  [ADD_GOODS](state, { goodsId, goodsName, smallImage, goodsPrice }) {
    let shopCart = state.shopCart;
    //1.1 判断商品是否存在
    if (shopCart[goodsId]) {
      shopCart[goodsId]["num"]++;
    } else {
      shopCart[goodsId] = {
        num: 1,
        id: goodsId,
        name: goodsName,
        small_image: smallImage,
        price: goodsPrice,
        checked: true,
      };
    }
    //1.2 产生新对象
    state.shopCart = { ...shopCart };
    //1.3 本地存储
    setStore("shopCart", state.shopCart);
  },
  //2. 页面初始化，获取购物车的数据(本地)
  [INIT_SHOP_CART](state) {
    let initCart = getStore("shopCart");
    if (initCart) {
      state.shopCart = JSON.parse(initCart);
    }
  },

  //3. 把商品移除购物车
  [REDUCE_CART](state, { goodsId }) {
    let shopCart = state.shopCart;
    let goods = shopCart[goodsId];
    if (goods) {
      //找到该商品
      if (goods["num"] > 0) {
        //3.1判断是否只有0个
        goods["num"]--;
        if (goods["num"] === 0) {
          delete shopCart[goodsId];
        }
      } else {
        goods = null;
      }
      // 3.2同时数据
      state.shopCart = { ...shopCart };
      //同步到本地
      setStore("shopCart", state.shopCart);
    }
  },

  //4. 单个商品的选中与取消
  [SELECTED_SINGER_GOODS](state, { goodsId }) {
    let shopCart = state.shopCart;
    let goods = shopCart[goodsId];
    if (goods) {
      if (goods.checked) {
        goods.checked = !goods.checked;
      } else {
        Vue.set(goods, 'checked', true);
      }
    }
    state.shopCart = {...shopCart}
  },
};
