// src/cjs/index.cjs
// 导入时重命名的示例
const {
	foo:foo2, //这里进行重命名
	bar,
} = require('./module.cjs')

// 这样做，就不会造成变量冲突
const foo = 1
console.log(foo)

// 用新的命名来调用模块里的方法
foo2()

// 原有的bar变量不变
console.log(bar)
