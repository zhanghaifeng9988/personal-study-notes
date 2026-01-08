const  a = 10;
/* a++  // This will give an error as a is a constant
a.value=20;
const b:boolean=true
b=false;
 */
// const c:string[]=["Hello", "World"]; //引用类型可以修改常量，数组是引用类型
// c.push("Goodbye");
// console.log(c);

function fetchData():Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("数据成功获取");
        }, 2000);
    });
}

fetchData()
    .then(response => {
        console.log(response); // 输出: 数据成功获取
    })
    .catch(error => {
        console.error(error); 
    })
     .finally(() => {
        console.log('无论成功还是失败，最终都会执行这段代码');
    });