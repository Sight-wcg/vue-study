// 配置路由相关信息
import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../components/Home.vue';
import About from '../components/About';

// 通过 Vue.use(插件),安装插件
Vue.use(VueRouter);

// 路由懒加载
const HomeMessage = () => import('../components/HomeMessage.vue');
const HomeNews = () => import('../components/HomeNews.vue');

const routes = [
  {
    path: '',
    redirect: '/home', //重定向
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path:'',
        redirect:'news'
      }
      ,
      {
        path: 'news',
        component: HomeNews,
      },
      {
        path: 'message',
        component: HomeMessage,
      },
    ],
  },
  {
    path: '/about',
    component: About,
  },
];

// 创建 VueRouter 对象
const router = new VueRouter({
  // 配置路径和组件之间的关系
  // routes:[]
  // routes:routes
  routes,
  mode: 'history', // 路由模式 hash 和 history
  linkActiveClass: 'active', // 定义活动路由的类名
});

// 导出 router
export default router;
