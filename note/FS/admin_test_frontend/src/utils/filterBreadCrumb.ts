import type { Breadcrumbs, MenuList } from '@/store/types';
export const filterBreadCrumb = (path: string, menuList: MenuList[]) => {
  let paths = path.split('/');
  console.log(paths);
  //去空
  paths = paths.filter((item) => item);
  const breadCrumbs: Breadcrumbs[] = [];
  paths.forEach((item) => {
    const breadName = getMenuTitle(item, menuList)
    if (!breadName) 
      return
    breadCrumbs.push({
      name: breadName,
    });
  });
  return breadCrumbs;
};

export const getMenuTitle = (path: string, menuList: MenuList[]): string => {
  for (let i in menuList) {
    if (menuList[i].path === path) {
      return menuList[i].title!;
    }
    if (menuList[i].menu_type === 1) {
      return getMenuTitle(path, menuList[i].children) || '';
    }
  }
  return '';
};

