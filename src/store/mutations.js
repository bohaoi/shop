import {ADD_GOODS} from './mutations-type'

export default{
    //1. 往购物车中添加数据
    [ADD_GOODS](state,{goodId,goodsName,smallImage,goodsPrice}){
        let shopCart = state.shopCart;
        //1.1 判断商品是否存在
        if(shopCart[goodId]){
            shopCart[goodId]['num']++;
        }else{
            shopCart[goodId]={
                "num":1,
                "id":goodId,
                "name":goodsName,
                "small_image":smallImage,
                "price":goodsPrice,
                "checked":true
            }
        }
        //1.2 产生新对象
        state.shopCart = {...shopCart}
    }
}