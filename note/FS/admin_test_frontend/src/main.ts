import { createApp } from 'vue';
//import './style.css'
import App from './App.vue';
import './index.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';
import router from './router';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import directive from '@/directive';

const app = createApp(App);
//将element-plus的图标注册到app中
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
const pinia = createPinia();
app.use(ElementPlus);
app.use(router);
app.use(pinia);

//等待路由初始化完成后再挂载,确保守卫beforeach可以使用pinia
await router.isReady();
directive(app);
app.mount('#app');
