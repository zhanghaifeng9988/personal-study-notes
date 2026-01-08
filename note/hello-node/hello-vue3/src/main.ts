import {createApp}  from 'vue'  //具名导入
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router/index'  //默认导入，对应模块的默认导出
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' //将 Element Plus 组件库的样式导入到你的 Vue 应用中
import * as ElementPlusIcons from '@element-plus/icons-vue' // 导入 Element Plus 组件库的图标库
//import { Vue } from 'vue-class-component'

 const app = createApp(App)
 for (const [key, component] of Object.entries(ElementPlusIcons))//遍历ElementPlusIcons对象
  {
   app.component(key, component)
  } //注册 Element Plus 组件库的图标库


app.use(store).use(router).use(ElementPlus).use(VueAxios,axios).mount('#app')
//将 Vuex Store 实例注入到应用中。Vuex 是 Vue 的状态管理库，
//它用于集中管理应用的所有组件的状态。
//将 Vue Router 实例注入到应用中。Vue Router 是 Vue 的官方路由管理器，
//它用于实现单页应用（SPA）中的页面导航。
//use用于激活router和store,使这两个功能生效可以在组件中使用


