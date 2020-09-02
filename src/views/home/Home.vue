<template>
  <div id="home">首页</div>
</template>

<script>
//1. 引入
import {getHomeData} from "./../../service/api/index"

export default {
  name: "Home",
  created(){
    //2. 请求网络数据
    getHomeData().then((response) => {
      console.log(response);
    }).catch(error=>{
      console.log(error)
    })
  }
};
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  height: 100%;
  background-color: skyblue;
}
</style>