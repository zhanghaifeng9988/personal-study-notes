// src/ts/index.ts
function getFirstWord(msg) {
    console.log(msg.split(' ')[0]);
}
getFirstWord('Hello World');
// 对象的实例化
var petter = {
    name: 'petter',
};
console.log(petter.name);
// 声明一个函数
function counter(count) {
    console.log("The current count is: ".concat(count, "."));
}
counter(1);
counter('zhanghaifeng');
var md5 = require('md5');
console.log(md5('Hello World'));
// 对单人或者多人打招呼
function greet(name) {
    if (Array.isArray(name)) {
        return name.map(function (n) { return "Welcome, ".concat(n, "!"); });
    }
    return "Welcome, ".concat(name, "!");
}
// 虽然已知此时是 string[]
// 但 TypeScript 还是会认为这是 string | string[]
// const greetings = greet(['Petter', 'Tom', 'Jimmy']) 
// 已知此时是 string[] ，所以用类型断言将其指定为 string[]
var greetings = greet(['Petter', 'Tom', 'Jimmy']);
// 如果不用as 这样的断言类型做确认，会导致无法使用 join 方法
var greetingSentence = greetings.join('hahaha  ');
console.log(greetingSentence);
