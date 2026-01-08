// src/cjs/index.cjs
// const m  = require('./module.cjs')
const { foo , bar } = require('./module.cjs') //对象解构，模块中导出的是多个函数
//console.log(m)  // m对应导入的模块中，只有值的导出
//m()             // m对应导入的模块中，导出的是单个函数
foo()
console.log(bar)
