import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import  {useHandleRouter} from '@/hooks/useHandleRouter'

export const routes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: import(/*  webpackChunkName:  "index"  */ '@/layout/index.vue'),
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () =>
          import(/*  webpackChunkName:  "redirect"  */ '@/views/redirect/index.vue'),
        name: 'Redirect',
        //meta: { title: '刷新当前标签页' },
      },
    ],
  },
  {
    path: '/',
    name: 'Index',
    redirect: '/index',
    component: () =>
      import(/*  webpackChunkName:  "index"  */ '@/layout/index.vue'),
    children: [
      {
        path: '/index',
        component: () => import('@/views/index.vue'),
        name: 'Home',
        meta: { title: '首页' },
      },
      {
        path: "/profile",
        name: "Profile",
        meta: { 
          title: '个人中心',
        },
        component: () =>
          import(/* webpackChunkName: "profile" */ "@/views/profile/index.vue"),
      }
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/login/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error/404.vue'),
  },
];


const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    //路由切换时页面的滚动行为
    console.log(to, from);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes,
});

// 过滤路由及动态加载路由

  useHandleRouter(router);
 
 
console.log('查看router内容', router.getRoutes());

export default router;
