# 一、介绍

- Node.js 是一个高效、轻量级的 JavaScript 运行时环境，广泛用于构建各种类型的服务器端应用。它的非阻塞 I/O 模型和丰富的生态系统使其成为现代 Web 开发的重要工具。
- 简单来说你可以认为它是一个类似网站类应用的“升级装备”,可以提高服务速度,加快访问速度，数据传输速度.
- 这个教程主要介绍Node.js的npm(包管理工具)，因为Node.js主要是为后端服务的，后端咱们暂时不涉及.

# 二、安装

https://blog.csdn.net/Javachichi/article/details/132868889 没有记录好文档，应该安装以这个为主，下面那个链接，里面的npm使用的命令和解释，采纳了一部分。
见[https://blog.csdn.net/ssrsrrn/article/details/140742307?spm=1001.2014.3001.5502]

# 三、配置

1. npm 是世界上最大的包管理器之一，有数以百万计的开源包和库，极大地促进了代码共享和复用。因为是node的默认包管理器，所以在安装时也会自动安装。
2. 注意默认情况下win系统npm全局安装的包放在以下位置
   C:\Users\<Your-Username>\AppData\Roaming\npm
3. npm缓存文件放在以下位置：
   C:\Users\<Your-Username>\AppData\Roaming\npm-cache
4. 更改npm的源

- 使用npm config get registry可查看当前配置的源
- 更改源：npm config set registry https://registry.npmmirror.com/

5. 查看当前的 npm 配置:
   npm config get registry

# 四、卸载

1. 进入安装目录，Uninstall Node.js（卸载Node.js）
2. 检查卸载情况：

- 输入node -v回车，弹出提示而非版本号则表示卸载成功；
- 输入npm-v，弹出提示而非版本号表示卸载完毕；
- 删除全局安装目录：删除 C:\Users\<Your-Username>\AppData\Roaming\npm 目录中的所有文件和子目录。
- 删除缓存目录：删除 C:\Users\<Your-Username>\AppData\Roaming\npm-cache 目录中的所有文件和子目录。

# 五、命令介绍

1. 初始化项目
   ①默认设置初始化项目
   npm init -y
   ②询问配置初始化项目
   npm init
2. 安装依赖 ：依赖包会被安装到项目根目录下的 node_modules 目录里。如果没有node_modules目录，则会自动创建。执行安装命令时，需要进入到项目的根目录中
   ①语法
   npm install `<package-name>`
   安装项目所需的生产依赖包
   ②举例

- 初始化新项目：在创建一个新项目时，需要安装一些基本的依赖包，如 react 和react-dom。
  npm install react react-dom
  可以在项目的 package.json 文件里的 dependencies 字段查看是否已安装成功

- 添加新功能（**生产环境依赖安装**）：在项目开发过程中，添加新功能时可能需要引入新的依赖包，例如使用 axios 进行 HTTP 请求。
  npm install axios
  也可以写作：npm install --save axios

- **安装开发依赖**：为了提高开发效率，可以安装一些开发工具和测试框架，如 eslint、jest 和 webpack。
  和生产依赖包不同的点在于，只在开发环境生效，构建部署到生产环境时可能会被抛弃，一些只在开发环境下使用的包，就可以安装到开发依赖里，比如检查代码是否正确的 ESLint 就可以用这个方式安装。
  npm install --save-dev eslint jest webpack
  可以在项目的 package.json 文件里的 devDependencies 字段查看是否已安装成功

- 安装开发依赖的参数可以简写为：-D，@***表示依赖包的类型
- 举例：安装 typescript的md5包
  npm install -D @types/md5

1. 全局安装包
   全局安装主要用于需要在命令行中随时调用的工具，添加 --global 或者 -g 选项，可以将依赖安装到全局，它们将被安装在 配置环境变量 里配置的全局资源路径里。
   注意：全局安装包通常用于命令行工具，如果全局安装包过多容易导致冲突
   ①语法
   npm install -g `<package-name>`
   ②举例
- 确认全局安装路径：npm config get prefix
- 构建工具：如 webpack、gulp、grunt 等，用于项目的自动化构建。
  npm install -g webpack
  npm install -g gulp
  npm install -g grunt
- 脚手架工具：如 create-react-app、vue-cli、angular-cli 等，用于快速创建项目模板。
  npm install -g create-react-app
  npm install -g @vue/cli
  npm install -g @angular/cli
- 包管理器：如 yarn、pnpm 等，用于管理项目依赖。
  npm install -g yarn
  npm install -g pnpm

1. 卸载包
   卸载包用于删除项目中不再需要的依赖。
   ①语法
   npm uninstall `<package-name>`
   ②举例
   删除 axios 包：
   npm uninstall axios
2. 更新包
   ①语法
   npm update `<package-name>`
   ②举例
   更新 lodash 包：
   npm update lodash
3. 查看包信息
   查看包的详细信息，包括版本、依赖等：
   ①语法
   npm info `<package-name>`
   ②举例
   例如，查看 axios 的信息：
   npm info axios

   npm list  axios // 查看已安装的axios的信息
4. 列出全局安装的包
   列出所有全局安装的包及其版本信息。
   ①语法
   npm list -g --depth=0
5. 安装项目中的所有依赖
   根据 package.json 文件中的依赖列表，安装项目中的所有依赖：
   ①语法
   npm install
6. 运行项目
   通过 npm 运行项目中的脚本。
   ①语法
   npm run `<script>`
   通过在 package.json 文件的 scripts 部分定义的自定义脚本的基本命令（你可以在 scripts 部分定义任意多个脚本）然后通过 npm run `<script>` 来运行它们。
   也就是如果script定义的是serve那命令就是npm run serve
   ②举例
   {
   "scripts": {
   "serve": "vue-cli-service serve"
   }
   }
   你可以使用以下命令运行该脚本：
   npm run serve
7. 清理缓存
   清理 npm 的缓存，以解决一些缓存相关的问题。（通常找不到问题所在就试试）
   ①语法
   npm cache clean --force
8. 修复漏洞
   当发现依赖包存在安全漏洞时，可以使用命令进行自动修复。
   npm audit fix
9. 版本控制
   安装特定版本依赖：在某些情况下，需要安装特定版本的依赖包以确保项目的稳定性。
   npm install lodash@4.17.20
