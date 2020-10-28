import {ADD_GOODS,INIT_SHOP_CART} from './mutations-type'

import {getStore,removeStore,setStore} from './../config/global'

export default{
    //1. 往购物车中添加数据
    [ADD_GOODS](state,{goodsId,goodsName,smallImage,goodsPrice}){
        let shopCart = state.shopCart;
        //1.1 判断商品是否存在
        if(shopCart[goodsId]){
            shopCart[goodsId]['num']++;
        }else{
            shopCart[goodsId]={
                "num":1,
                "id":goodsId,
                "name":goodsName,
                "small_image":smallImage,
                "price":goodsPrice,
                "checked":true
            }
        }
        //1.2 产生新对象
        state.shopCart = {...shopCart}
        //1.3 本地存储
        setStore('shopCart',state.shopCart)
    },
    //2. 页面初始化，获取购物车的数据(本地)
    [INIT_SHOP_CART](state){
        let initCart = getStore("shopCart");
        if(initCart){
            state.shopCart = JSON.parse(initCart)
        }
    }
}