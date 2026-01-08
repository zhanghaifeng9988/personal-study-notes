//将一个完整的路由路径（$route.path）处理成一个简化的字符串

export const dealRoutePath = (path: string) => {
  if (!path) return '';
  const pathArr: string[] = path.split('/');// 按 / 分割成一个字符串数组
  return pathArr.slice(-1)[0]; // 返回最后一个元素
};


