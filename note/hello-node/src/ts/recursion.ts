 /* const convertToTree = (menuList: any[], parentId: number | null = null) => {
  const tree = [];

  for (let i = 0; i < menuList.length; i++) {
    if (menuList[i].parent_id === parentId) {
      const children = convertToTree(menuList, menuList[i].id);
      if (children.length) {
        menuList[i].children = children;
      }
      tree.push(menuList[i]);
    }
  }

  return tree;
};

let menuList: any[] = [
  { "id": 1, "name": "首页", "path": "/dashboard", "order_num": 1, "status": 1, "parent_id": null },
  { "id": 2, "name": "系统管理", "path": "/system", "order_num": 2, "status": 1, "parent_id": null },
  { "id": 3, "name": "用户管理", "path": "/system/user", "order_num": 1, "status": 1, "parent_id": 2 },
  { "id": 4, "name": "角色管理", "path": "/system/role", "order_num": 2, "status": 1, "parent_id": 2 },
  { "id": 5, "name": "设置", "path": "/settings", "order_num": 3, "status": 1, "parent_id": null },
  { "id": 6, "name": "个人设置", "path": "/settings/profile", "order_num": 1, "status": 1, "parent_id": 5 }
]
// console.log(convertToTree(menuList, null));
console.log(JSON.stringify(convertToTree(menuList, null), null, 2)); */
// 它接受两个参数：menuList 是原始的扁平菜单列表，
//parentId 是当前节点的父节点 ID，初始值为 null。
//函数首先创建了一个空数组 tree 用于存储树形结构。
//然后使用循环遍历 menuList，对每个菜单项进行判断，
//如果当前菜单项的 parent_id 等于传入的 parentId，则将其视为当前节点的子节点，
//继续递归调用 convertToTree 函数来构建子树。如果子节点存在，
//则将子节点数组赋值给当前菜单项的 children 属性，最后将当前菜单项添加到 tree 数组中。

/* 第1次循环，parentId为null，menuList[0].parent_id === parentId为true，进入递归循环；
递归1-循环1，parentId为1，
执行第1个外层if语句
menuList[0].parent_id === parentId为false，进入递归1-循环2；
menuList[1].parent_id === parentId为false，进入递归1-循环3；
menuList[2].parent_id === parentId为false，进入递归1-循环4；
menuList[3].parent_id === parentId为false，进入递归1-循环5；
menuList[4].parent_id === parentId为false，进入递归1-循环6；
menuList[5].parent_id === parentId为false，return tree 返回空值；递归结束
执行第2个内层if语句，因为递归返回得是空值，所以判断条件为false，
最后执行tree.push(menuList[0])，将menuList[0]加入到tree中，
*/

//第2次循环，parentId为null，menuList[1].parent_id === parentId为true，进入递归循环；
//递归1-循环1，parentId为2，
//执行第1个外层if语句
// menuList[0].parent_id === parentId为false，进入递归1-循环2；
// menuList[1].parent_id === parentId为false，进入递归1-循环3；
// menuList[2].parent_id === parentId为true,
//进入递归2-循环1,parentId为3，
//执行第1个外层if语句
// menuList[0].parent_id === parentId为false，进入递归2-循环2；
// menuList[1].parent_id === parentId为false，进入递归2-循环3；
// menuList[2].parent_id === parentId为false，进入递归1-循环4；
// menuList[3].parent_id === parentId为false，进入递归1-循环5；
// menuList[4].parent_id === parentId为false，进入递归1-循环6；
// menuList[5].parent_id === parentId为false，return tree 返回空值；递归2结束




async function fetchData() {
    const response =  new Promise((resolve) => {
        setTimeout(() => {
            resolve("数据获取成功!");
        }, 2000); // 模拟一个耗时的操作
    });
    return response;
}

function waitTwoSeconds(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000); // 2000 毫秒 = 2 秒
  });
}

async function main() {
    const result = fetchData(); // 等待 fetchData() 完成
    await waitTwoSeconds();
    console.log(result); // 输出 "数据获取成功!"
}
main();


