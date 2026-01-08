// 实现前端路由的动态加载，和与后端返回的路由数据的匹配。

//import.meta.glob是用于动态导入模块的函数，它返回一个对象
//把本地目录中的所有vue文件都记录到modules对象中
 const modules = import.meta.glob('../views/**/*.vue'); 
/* const modules: { [key: string]: () => Promise<any> } = {
  'system/role/index': () => import('@/views/system/role/index.vue'),
  'system/menu/index': () => import('@/views/system/menu/index.vue'),
  'system/user/index': () => import('@/views/system/user/index.vue'),
}; */

//将本地的路由与后端返回的路由进行匹配
export const loadView = (view: any) => {
  let res;
  for (const path in modules) {
    const normalizedPath = path.replace(/\\/g, '/'); // 处理 Windows 路径分隔符问题
    const dir = normalizedPath.split('views/')[1].split('.vue')[0];
    if (dir === view) {
      res =  modules[path];//动态加载1个与后端返回的路由匹配的vue组件
      break;
    }//通过使用箭头函数,可以确保只有在调用 res 函数时，才会真正执行模块的导入操作
  //}//该函数在被调用时会执行类似 import('@/views/home.vue')，从而动态加载 home.vue 组件。
  }
  if (!res) {
    console.error(`Component for view '${view}' not found.`);
  }
  else {
    console.log(`Component for view '${view}' loaded.`);
    console.log('Loaded Component:', res); // 打印res的结果
  }
  return res;
};

//动态加载的modules对象举例：
/* {
  '@/views/path/to/ComponentA.vue' : () => import('@/views/path/to/ComponentA.vue'),
  '@/views/another/path/ComponentB.vue': () => import('@/views/another/path/ComponentB.vue'),
  // 其他.vue文件...
}
*/


//用于处理后端返回的路由数据，使其符合前端 Vue Router 的格式。
//过滤路由数据，将component属性替换为loadView函数返回的组件

export const filterRoute = (data: any) => { 
  data.forEach((item: any) => {
    if (item.children?.length > 0) {
      delete item.component;

      filterRoute(item.children);
    } else  if (item.component) {
      item.component = loadView(item.component);
      // item.redirect = "/404";
      console.log(`Component set for '${item.path}':`, item.component);
    }
  });

  //console.log('Filtered Route:', JSON.stringify(data, null, 2)); // 打印处理后的路由数据
  return data;
};



//forEach 是一个数组方法，用于遍历数组中的每一个元素，并对每个元素执行提供的函数。
//data是数组，对 data 数组中的每一个元素（即 item）执行大括号中的操作。

/* 处理逻辑:
如果路由项有子路由（即 item.children.length > 0），则删除该路由项的 component 属性，并对子路由进行递归处理。
如果路由项没有子路由，则调用 loadView(item.component) 来动态加载该路由项对应的 Vue 组件，并将其赋值给 item.component。
这样处理后，data 数组中的每个路由项的 component 属性都会被替换为一个加载该组件的函数。 */

/* 处理后的data数据样式-举例：
[
  {
    "path": "/dashboard",
    "name": "Dashboard",
    "component": () => modules['@/views/dashboard/index.vue']()
  },
  {
    "path": "/users",
    "name": "Users",
    "children": [
      {
        "path": "list",
        "name": "UserList",
        "component": () => modules['@/views/users/list.vue']()
      },
      {
        "path": "profile",
        "name": "UserProfile",
        "component": () => modules['@/views/users/profile.vue']()
      }
    ]
  }
] */

