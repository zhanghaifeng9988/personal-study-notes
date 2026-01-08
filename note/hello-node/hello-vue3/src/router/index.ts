import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// 定义了两个路由对象，分别对应了两个组件
// 其中HomeView是由import语句导入的，AboutView是通过函数导入的
// AboutView是懒加载模式
const routes: Array<RouteRecordRaw> = [
  {
    path: '/', // path表示路由的路径
    name: 'home1', // name表示路由的名称
    component: HomeView // component表示路由对应的组件
  },
  //数组中每个元素都是一个路由对象，符合 RouteRecordRaw 类型。
  {
    path: '/home', // path表示路由的路径
    name: 'home2', // name表示路由的名称
    component: HomeView // component表示路由对应的组件
  },
  {
    path: '/about', // path表示路由的路径
    name: 'about',     // name表示路由的名称
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',// path表示路由的路径
    name: 'contact',// name表示路由的名称
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },
  {
    path: '/ele_test',
    name: 'ele_test',
    component: () => import(/* webpackChunkName: "ele_test" */ '../views/Ele_test.vue')

  },
  {
    path: '/first_project',
    name: 'first_project',//path和name都在vue-devtools中<RouterView>显示:first_project:/first_project
    component: () => import(/* webpackChunkName: "first_project" */ '../views/First_project.vue')
  },
  {
    path: '/weatherProject',
    name: 'weatherProject',
    component: () => import(/* webpackChunkName: "WeatherProject" */ '../views/WeatherProject.vue')
  }
]
// 创建router对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 导出router对象, 供main.ts文件使用
export default router

//history: 这是 Vue Router 的一个配置选项，用于指定路由的历史模式。
//历史模式决定了路由如何管理浏览器的历史记录和 URL。
//createWebHistory: 这是 Vue Router 提供的一个函数，用于创建 HTML5 History 模式的实例。
//这种模式利用浏览器的 HTML5 History API，使得 URL 看起来更像是一个正常的网站 URL，
//而不是带有 # 的哈希模式。
//process.env.BASE_URL: 这是一个环境变量，通常在构建过程中由构建工具（如 Vite 或 Webpack）设置。
//BASE_URL 用于指定应用的基础 URL 路径。
