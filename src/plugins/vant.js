import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

//1. 引入底部导航
Vue.use(Tabbar);
Vue.use(TabbarItem);

//2. 引入loading
import { Loading } from 'vant';
Vue.use(Loading);

//3. 图片懒加载
import { Image } from 'vant';
Vue.use(Image);

//4. 引入提示
import { Toast } from 'vant';
Vue.use(Toast);

//5. 引入蒙版
import { Dialog } from 'vant';
Vue.use(Dialog)