export type MenuList = {
  id: number;
  parent_id: number;
  title: string;
  path: string;
  component: string;
  icon: string;
  order_num: number;
  status: boolean;
  menu_type: 1 | 2 | 3;
  children: MenuList[];
  meta?: {
    title?: string;
    catch?: number;
    hidden?: boolean;
  };
};

export type Breadcrumbs = {
  name: string;
  path?: string;
};

export type NavTags = {
  name: string;
  path: string;
  fullPath?: string;
};

export type UserInfo = {
  username: string;
  avatar: string;
  telephone: string;
};

export type AppStoreState = {
  navTags: NavTags[];
  breadcrumbs: Breadcrumbs[];
  menuList: MenuList[];
  isCollapse: boolean;
  permissions: string[];
  catchList: string[]
  userInfo: UserInfo;
};
