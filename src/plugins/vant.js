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

//6. 导航栏
import { NavBar } from 'vant';
Vue.use(NavBar);

//7. 地址
import { ContactCard, ContactList, ContactEdit } from 'vant';
Vue.use(ContactCard).use(ContactList).use(ContactEdit);

import { AddressList } from 'vant';
Vue.use(AddressList);

import { AddressEdit } from 'vant';
Vue.use(AddressEdit);
 
//8. 单元格
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);

//9. 提交订单栏
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);

//10. 宫格
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);

//11. icon
import { Icon } from 'vant';
Vue.use(Icon);