// src/esm/index.mjs
import md5 from 'md5'
console.log(md5('Hello World'))
const before = 'Hello World'
const after = md5(before)
console.log({ before, after })
//import m from './module.mjs'  //默认导入
//console.log(m)               //显示导入的值
//m()                          //执行导入的函数
//import {foo,bar} from './module.mjs' //命名导入的方式
//foo()
//console.log(bar)

//import * as m from './module.mjs' //这样导入，可以使用m.foo调用对象
//console.log(typeof m)
//console.log(Object.keys(m))
//m.foo()
//console.log(m.bar)

//导入的时候对模块里的 foo 进行重命名
import {
  foo as foo2,  // 这里进行了重命名
  bar
} from './module.mjs'

// 就不会造成变量冲突
const foo = 1
console.log(foo)

// 用新的命名来调用模块里的方法
foo2()

// 这个不冲突就可以不必处理
console.log(bar)
