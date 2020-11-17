import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'


//1.引入fastclick
import FastClick from "fastclick"
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

//2.引入全局样式
import './style/common.less'

//3.引入全局UI组件库
import './plugins/vant'

//4. 引入rem
import '@/config/rem.js'

//5. 引入全局过滤器
import '@/config/filters'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}