# 基本操作
npm  config list  # 查看npm配置
npm config set prefix “你的安装目录\node_global”  # 设置全局安装目录
npm config set cache “你的安装目录\node_cache”  # 设置缓存目录
npm config set registry "http://registry.npmmirror.com/"  # 设置镜像源
npm config get registry "http://registry.npmmirror.com/"  # 查看镜像源
## 初始化一个项目
npm init 
1. 执行该命令，可以进入项目初始化的流程，根据提示输入项目名称、版本、描述、作者、许可证等信息，完成后会生成一个package.json文件，该文件记录了项目的相关信息。
2. -y参数表示使用默认配置
3. 建议要按照项目实际情况配置，初学也可以看一下配置情况
4. 执行该命令，建议已经处于项目的根目录下，如果没有创建，请创建项目根目录
5. 示例：
package name: (hello-node) hello-node
version: (1.0.0)
description: study frontend develop
entry point: (index.js)
test command:
git repository: D:/Program Files/Notepad++/note/hello-node
keywords:
author: zhanghaifeng
license: (ISC)
About to write to D:\Program Files\Notepad++\note\VUE3\package.json:

{
  "name": "demo_hello_node",  // 项目名称,注意：此处需要和根目录名称保持一致
  "version": "1.0.0",
  "description": "study frontend develop",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "D:/Program Files/Notepad++/note/VUE3"
  },
  "author": "zhanghaifeng",
  "license": "ISC"
}
5.  package.json 的 JSON 文件。
这是 Node 项目的清单，里面记录了这个项目的基础信息、依赖信息、开发过程的脚本行为、发布相关的信息等等，未来将在很多项目里看到它的身影。
在实际的项目中，往往需要填写更完善的项目信息，除了手动维护这些信息之外，在安装 npm 包等操作时， Node 也会帮写入数据到这个文件里，方便管理。

**以下是对”package.json“中的一些属性配置的解释和相关知识**
## "version" - 语义化版本号管理
Node 项目遵循 语义化版本号 的规则，例如 1.0.0 、 1.0.1 、 1.1.0 这样的版本号， Vue 也是遵循了语义化版本号的发布规则。
建议开发者在入门前端工程化的时候就应该熟悉这套规则，后续的项目开发中，会使用到很多外部依赖，它们也是使用版本号控制来管理代码的发布，每个版本之间可能会有一些兼容性问题，如果不了解版本号的通用规则，很容易在开发中带来困扰。
### 1.基本格式
版本号的格式为： Major.Minor.Patch （简称 X.Y.Z ），它们的含义和升级规则如下：

|英文|	中文 | 含义 |
|---|--------|----------|
|Major|	大版本号|	当项目作了大量的变更，与旧版本存在一定的不兼容问题|
|Minor|	小版本号|	做了向下兼容的功能改动或者少量功能更新|
|Patch|	补丁号|	修复上一个版本的少量 BUG|

### 2. 版本号的升级规则
一般情况下，三者均为正整数，并且从 0 开始，遵循这三条注意事项：
- 当主版本号升级时，次版本号和修订号归零
- 当次版本号升级时，修订号归零，主版本号保持不变
- 当修订号升级时，主版本号和次版本号保持不变
### 3. 示例 
下面以一些常见的例子帮助快速理解版本号的升级规则：
- 如果不打算发布，可以默认为 0.0.0 ，代表它并不是一个进入发布状态的包
- 在正式发布之前，可以将其设置为 0.1.0 发布第一个测试版本，自此，代表已进入发布状态，但还处于初期开发阶段，这个阶段可能经常改变 API ，但不需要频繁地更新主版本号
- 在 0.1.0 发布后，修复了 BUG ，下一个版本号将设置为 0.1.1 ，即更新了一个修订号
- 在 0.1.1 发布后，有新的功能发布，下一个版本号可以升级为 0.2.0 ，即更新了一个次版本号
- 当觉得这个项目已经功能稳定、没有什么 BUG 了，决定正式发布并给用户使用时，那么就可以进入 1.0.0 正式版了
### 版本标识符
以上是一些常规的版本号升级规则，也可以通过添加 “标识符” 来修饰的版本更新：
格式为： Major.Minor.Patch-Identifier.1 ，其中的 Identifier 代表 “标识符” ，它和版本号之间使用 - 短横线来连接，后面的 .1 代表当前标识符的第几个版本，每发布一次，这个数字 +1 。
|标识符	|含义|
|--------|----------|
|alpha	|内部版本，代表当前可能有很大的变动|
|beta	|测试版本，代表版本已开始稳定，但可能会有比较多的问题需要测试和修复|
|rc	|即将作为正式版本发布，只需做最后的验证即可发布正式版|
例如： 1.0.0-alpha.1 、 1.0.0-beta.2 、 1.0.0-rc.3 、 1.0.0 、 1.0.1 、 1.1.0 、 2.0.0 等等。

## "scripts" 的配置
"scripts" 字段的配置，可以让我们在命令行执行 npm run 命令时，执行一些指定的脚本命令。
举例：
 "scripts": {
    "dev": "node src/index.js"
  }
在命令行执行 npm run dev ，就相当于在CLI直接执行 node index.js 。

# 模块化设计
**模块（ Module ）和包（ Package ）**
模块和包是 Node 开发最重要的组成部分，不管是全部自己实现一个项目，还是依赖各种第三方轮子来协助开发，项目的构成都离不开这两者。
## 模块化解决了什么问题
在软件工程的设计原则里，有一个原则叫 “单一职责” 。
模块化的主要目的是为了解决代码的复用和可维护性，它可以让我们将复杂的功能拆分成多个小的模块，每个模块只负责完成一部分功能，然后再将这些模块组合起来，就形成了一个完整的功能。
一个完整业务的内部实现，不应该把各种代码都耦合在一起，而应该按照职责去划分好代码块，再进行组合，形成一个 “高内聚，低耦合” 的工程设计。
模块化就是由此而来，在前端工程里，每个单一职责的代码块，就叫做模块（ Module ） ，模块有自己的作用域，功能与业务解耦，非常方便复用和移植。
## 模块化的原则
模块化的原则有以下几点：
- 职责单一：每个模块只负责完成一件事情，并且只做这件事情的必要工作。
- 高内聚，低耦合：模块之间应该低耦合，高内聚，模块内部的变量、函数、类等等，应该尽量少的依赖其他模块，只依赖必要的接口。
- 接口隔离：模块之间应该通过接口进行通信，而不是直接依赖实现。
- 依赖倒置：模块应该依赖于抽象，而不是具体实现。
- 单一职责：模块应该只做一件事情，并且做好这件事情的必要工作。
- 无状态：模块应该是无状态的，也就是说，它不应该保存任何状态，所有状态都应该通过参数传递给它。
- 无副作用：模块应该只做一件事情，并且做好这件事情的必要工作，不应该产生任何副作用。
- 易测试：模块应该容易测试，模块的测试应该覆盖边界条件、正常输入、异常输入等等。
- 文档化：模块应该有良好的文档，说明模块的用法、功能、依赖关系等等。
## 模块化的实现
Node.js 社区已经有很多成熟的模块化方案，比如 CommonJS、AMD、CMD、ES6 Module 等等，这些方案都遵循了模块化的原则，可以帮助我们更好的管理代码，提高代码的复用性。
|模块化方案	|全称	|适用范围|
|--------|----------|----------|
|CommonJS	|CommonJS 规范|	Node 端|
|AMD	|Asynchronous Module Definition 异步模块定义 |	浏览器端|
|CMD	|Common Module Definition 通用模块定义 |	浏览器端|
|UMD	|Universal Module Definition 通用模块定义 |	Node 端和浏览器端|
|ESM	|ECMAScript Module 标准模块	| Node 端和浏览器端|
**其中** AMD 、CMD 、 UMD 都已经属于偏过去式的模块化方案，在新的业务里，
结合各种编译工具，可以直接用最新的 ESM 方案来实现模块化，所以可以在后续有接触的时候再了解。

## 用 CommonJS 设计模块
虽然现在推荐使用 ES Module 作为模块化标准，但是日后在实际工作的过程中，还是不免会遇到要维护一些老项目，因此了解 CommonJS 还是非常有必要的。
### 准备工作
1.先调整一下目录结构：
- 删掉 index.js 文件
- 创建一个 src 文件夹，在里面再创建一个 cjs 文件夹
- 在 cjs 文件夹里面创建两个文件： index.cjs 和 module.cjs
- 此时目录结构应该如下：
bash
hello-node
│ # 源码文件夹
├─src
│ │ # 业务文件夹
│ └─cjs
│   │ # 入口文件
│   ├─index.cjs
│   │ # 模块文件
│   └─module.cjs
│ # 项目清单
└─package.json
2. 接下来再修改一下 package.json 里面的 scripts 部分，改成如下：

  "scripts": {
    "dev:cjs": "node src/cjs/index.cjs"
  }


### 基本语法
CJS 使用 module.exports 语法导出模块，可以导出任意合法的 JavaScript 类型，例如：字符串、布尔值、对象、数组、函数等等。
使用 require 导入模块，在导入的时候，当文件扩展名是 .js 时，可以只写文件名，而此时使用的是 .cjs 扩展名，所以需要完整的书写。

1. 默认导出和导入  require('./module.cjs') 导入的模块，默认导出的值就是模块的 exports 对象。
默认导出的意思是，一个模块只包含一个值；而导入默认值则意味着，导入时声明的变量名就是对应模块的值。
在 src/cjs/module.cjs 文件里，写入以下代码，导出一句 Hello World 信息：
// src/cjs/module.cjs
module.exports = 'Hello World'

在 src/cjs/index.cjs 文件里，写入以下代码，导入刚刚编写的模块。
// src/cjs/index.cjs
const m = require('./module.cjs')
console.log(m)

2. 在命令行输入 npm run dev:cjs ，可以看到成功输出了 Hello World 信息：
npm run dev:cjs
\> demo@1.0.0 dev:cjs
\> node src/cjs/index.cjs
Hello World

3. 命名导出和导入
- 默认导出的时候，一个模块只包含一个值，有时候如果想把很多相同分类的函数进行模块化集中管理，例如想做一些 utils 类的工具函数文件、或者是维护项目的配置文件，全部使用默认导出的话，会有非常多的文件要维护。
- 那么就可以用到命名导出，这样既可以导出多个数据，又可以统一在一个文件里维护管理，命名导出是先声明多个变量，然后通过 {} 对象的形式导出。
- 利用 ES6 的对象解构来直接拿到变量
    // src/cjs/index.cjs
    const { foo, bar } = require('./module.cjs')
    foo()
    console.log(bar)
    
    
    // src/cjs/module.cjs
    function foo() {
      console.log('Hello World from foo.')
    }
    const bar = 'Hello World from bar.'
    module.exports = {
      foo,
      bar,
    }

4.导入时重命名
以上都是基于非常理想的情况下使用模块，有时候不同的模块之间也会存在相同命名导出的情况，来看看模块化是如何解决这个问题的。
**+++++++++++++++++++++++++++++++++++++++**
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


## 用 ES Module 设计模块
ES Module 是新一代的模块化标准，它是在 ES6（ ECMAScript 2015 ）版本推出的，是原生 JavaScript 的一部分。

不过因为历史原因，如果要直接在浏览器里使用该方案，在不同的浏览器里会有一定的兼容问题，需要通过 Babel 等方案进行代码的版本转换（可在 控制编译代码的兼容性 一节了解如何使用 Babel ）。

因此一般情况下都需要借助构建工具进行开发，工具通常会提供开箱即用的本地服务器用于开发调试，并且最终打包的时候还可以抹平不同浏览器之间的差异。

随着 ESM 的流行，很多新推出的构建工具都默认只支持该方案（ e.g. Vite 、 Rollup ），如果需要兼容 CJS 反而需要另外引入插件单独配置。除了构建工具，**很多语言也是默认支持 ESM ，例如 TypeScript** ，因此了解 ESM 非常重要。

### 准备工作
继续使用在 **用 CommonJS 设计模块** 时使用的 hello-node 项目作为 demo 。
1. 一样的，先调整一下目录结构：
- 在 src 文件夹里面创建一个 esm 文件夹
- 在 esm 文件夹里面创建两个 MJS 文件： index.mjs 和 module.mjs
2. 接下来再修改一下 package.json 里面的 scripts 部分，改成如下：

     "scripts": {
        "dev:cjs": "node src/cjs/index.cjs",
        "dev:esm": "node src/esm/index.mjs" },

### 基本语法
1. ESM 使用 export default （默认导出）和 export （命名导出）这两个语法导出模块，和 CJS 一样， ESM 也可以导出任意合法的 JavaScript 类型，例如：字符串、布尔值、对象、数组、函数等等。
2. 使用 import ... from ... 导入模块，在导入的时候，如果文件扩展名是 .js 则可以省略文件名后缀，否则需要把扩展名也完整写出来。
3. 默认导出和导入
ESM 的默认导出也是一个模块只包含一个值，导入时声明的变量名，它对应的数据就是对应模块的值。
在 src/esm/module.mjs 文件里，写入以下代码，导出一句 Hello World 信息：
    // src/esm/module.mjs
    export default 'Hello World'
在 src/esm/index.mjs 文件里，写入以下代码，导入刚刚编写的模块。

// src/esm/index.mjs
import m from './module.mjs'
console.log(m)
在命令行输入 npm run dev:esm ，可以看到成功输出了 Hello World 信息：

npm run dev:esm

> demo@1.0.0 dev:esm
> node src/esm/index.mjs

Hello World
可以看到，在导入模块时，声明的 m 变量拿到的值，就是整个模块的内容，可以直接使用，此例子中它是一个字符串。

像在 CJS 的例子里一样，也来再改动一下，把 src/esm/module.mjs 改成导出一个函数：


// src/esm/module.mjs
export default function foo() {
  console.log('Hello World')
}
同样的，这次也是变成了导入一个函数，可以执行它：


// src/esm/index.mjs
import m from './module.mjs'
m()
一样可以从模块里的函数得到一句 Hello World 的打印信息。

bash
npm run dev:esm

> demo@1.0.0 dev:esm
> node src/esm/index.mjs

Hello World