// src/esm/module.mjs
//export default 'Hello World' //默认导出
//export default function foo() { //m默认导出
//  console.log('Hello World')
// }

// 命名导出
export function foo() {
  console.log('Hello World from foo.')
}

export const bar = 'Hello World from bar.'

