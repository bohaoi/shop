import Vue from "vue";
import VueRouter from "vue-router";

//引入一级组件
import DashBoard from "./../views/dashboard/DashBoard";
const Home = () => import("./../views/home/Home.vue");
const Category = () => import("./../views/category/Category.vue");
const Cart = () => import("./../views/cart/Cart.vue");

//用户中心
const Mine = () => import("./../views/mine/Mine.vue");
const UserCenter = () => import("./../views/mine/children/UserCenter.vue");

//引入相关组件
const Order = () => import("./../views/order/Order.vue");
const MyAddress = () => import("./../views/order/children/MyAddress.vue");
const AddAddress = () =>
  import("./../views/order/children/children/AddAddress.vue");
const EditAddress = () =>
  import("./../views/order/children/children/EditAddress.vue");
const Login = () => import("./../views/login/Login.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoard,
    children: [
      { path: "/dashboard", redirect: "/dashboard/home" },
      {
        path: "home",
        name: "home",
        component: Home,
        meta: { keepAlive: true },
      },
      {
        path: "category",
        name: "category",
        component: Category,
        meta: { keepAlive: true },
      },
      { path: "cart", name: "cart", component: Cart },
      {
        path: "mine",
        name: "mine",
        component: Mine,
        children: [
          {
            //用户中心
            path: "userCenter",
            name: "usercenter",
            component: UserCenter,
          },
        ],
      },
    ],
  },
  {
    path: "/confirmOrder",
    name: "order",
    component: Order,
    children: [
      {
        path: "myAddress",
        name: "myAddress",
        component: MyAddress,
        children: [
          //添加地址
          { path: "addAddress", name: "addAddress", component: AddAddress },
          { path: "editAddress", name: "editAddress", component: EditAddress },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
