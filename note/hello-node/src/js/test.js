async function fetchData() {
  const response = await new Promise((resolve) => {
      setTimeout(() => {
          resolve("数据获取成功!");
      }, 2000); // 模拟一个耗时的操作
  });
  return response;
}

async function main() {
  const result = await fetchData(); // 等待 fetchData() 完成
  console.log(result); // 输出 "数据获取成功!"
}

main(); // 调用 main 函数
fetchData().then(result => console.log(result)); // 输出 "数据获取成功!"