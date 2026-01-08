import type { RouteRecordRaw, Router } from 'vue-router';
import useAppStore from '@/store/index';
import { filterRoute } from '@/utils/filterRouters';
import { filterBreadCrumb } from '@/utils/filterBreadCrumb';
export const useHandleRouter = (router:Router) => {
  console.log('useHandleRouter is called1');
  //设置白名单,直接放行
  const writeLists = ['Login'];
  //路由拦截（路由守卫）,每次导航（路由跳转）之前执行，持续监听路由变化
  //to 是即将进入的目标路由对象，_from 是当前导航正要离开的路由对象,next用于决定导航如何进行。
  router.beforeEach(async (to, _from, next) => {
    console.log('useHandleRouter is called2');
    console.log('to.path:', to.path, 'to.name:', to.name,'_from.path:', _from.path,'_from.name:', _from.name);
    // 增强白名单检查，同时检查path和name
    console.log('检查白名单路由:', {toName: to.name, toPath: to.path});
    if (writeLists.includes(to.name as string) || to.path === '/login') {
      console.log('允许访问白名单路由:', to.path);
      next();
      return;
    }
    const appStore = useAppStore();

    //已经获取菜单路由直接放行
    if (appStore.menuList.length) {
      appStore.$patch({//更新面包屑数据
        breadcrumbs:filterBreadCrumb(to.path, appStore.menuList)
      })
      console.log('面包屑数据状态：', JSON.stringify(appStore.breadcrumbs,null,2))
      console.log('已经获取菜单数据，直接放行');
      console.log('title:',to.meta.title,'path:',to.path,'fullPath:',to.fullPath)
      appStore.addTags({name:to.meta.title as string ,path:to.path,fullPath:to.fullPath})
      
      next();
      return;
    }
    //获取菜单路由列表
    try {
      console.log('开始获取菜单数据 - 当前路由:', to.path);
      console.log('路由跳转前appStore状态:', appStore.$state);
      await appStore.getInfo();
      console.log('菜单数据获取成功');
      console.log('菜单数据获取成功1:', JSON.stringify(appStore.menuList, null, 2));
       // 处理菜单数据，添加 meta 属性
       const addMetaToMenu = (menuList: any[]) => {
        menuList.forEach((menu) => {
          if (!menu.meta) {
            menu.meta = {};
          }
          menu.meta.title = menu.title; // 将 title 赋值给 meta.title
          if (menu.children?.length > 0) {
            addMetaToMenu(menu.children);
          }
        });
      };
      addMetaToMenu(appStore.menuList);
      console.log('菜单数据获取成功2:', JSON.stringify(appStore.menuList, null, 2));
      //处理成符合vue路由格式的路由
      const routers = filterRoute(appStore.menuList);
      console.log('格式化后的路由:', routers /* JSON.stringify(routers,null,2) */);
      //循环添加路由到父路由Index下
      routers.forEach((route: RouteRecordRaw) => {
        router.addRoute('Index', route);
        console.log('路由添加成功:', routers);
      });
      ////添加完路由需要重新执行一次路由跳转，否则会出现空白页面
      console.log('动态路由添加完成，重新执行跳转');
      next({ ...to, replace: true });
    } catch (error) {
      console.error('获取菜单数据失败:', error);
      //如果接口出错 比如token过期继续往下走
      next();
    }
  });
};


