<template>
  <div id="home">
    <Header></Header>
  </div>
</template>

<script>
//1. 引入
import {getHomeData} from "./../../service/api/index"
//2. 引入头部导航组件
import Header from "./components/header/Header"

export default {
  name: "Home",
  created(){
    //2. 请求网络数据
    getHomeData().then((response) => {
      console.log(response);
    }).catch(error=>{
      console.log(error)
    })
  },
  components:{
    Header
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