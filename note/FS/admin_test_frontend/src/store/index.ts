import { defineStore } from 'pinia';
import { getInfo } from '../api/menu/index';
import type { AppStoreState,NavTags } from './types';

export default defineStore('appStore', {//定义名为 appStore 的 Pinia 仓库
  state: (): AppStoreState => {//定义仓库的初始状态
    return {
     menuList: [],
      isCollapse: false,
      permissions: [],
      breadcrumbs: [],
      navTags: [],
      userInfo:  {
        username: '',
        avatar: '',
        telephone: ''
    },
    catchList: [],
    };
  },
  actions: {
    async getInfo() {//定义仓库的操作方法,用于改变状态
      const { data } = await getInfo({});
      this.menuList = data.routers;
      this.permissions = data.permissions;
      this.userInfo = data.user || {};
    },
    async fetchUserInfo() {
      // TODO: 调用API获取用户信息
      // this.userInfo = data.userInfo;
    },
    addTags(tag: NavTags) {
      const isRepeat = this.navTags.find((item) => item.name === tag.name);
      const isRed = tag.path.includes('redirect');
      isRepeat || isRed || !tag.name ||
      this.navTags.push({ name: tag.name as string, path: tag.path, fullPath: tag.fullPath });
  },
  },
});
