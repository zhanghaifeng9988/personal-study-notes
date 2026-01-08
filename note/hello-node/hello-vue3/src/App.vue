<template>
  <!-- nav 是语义化元素，用于定义导航链接部分 -->
  <nav>
    <!-- 创建导航栏，通过路由方式指定可以导航到哪些组件页面 -->
    <!-- SPA单页面模式，采用路由模式，加载4个页面路由配置在 router/index.js 文件中
    to=这里的内容，指向index.ts中的routes对象的path属性值，即路由路径 -->
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <!-- zhf自己创建做测试的页面 -->
    <router-link to="/contact">Contact</router-link>|
    <router-link to="/ele_test">Element-UI测试</router-link>|
    <router-link to="/first_project">FirstProject</router-link>|
    <router-link to="/WeatherProject">WetherProject</router-link>
  </nav>
  <!-- 显示与当前路由匹配的组件中的内容 -->
  <router-view/>
</template>

<!-- less 是一种 CSS 预处理器，它扩展了 CSS 的功能，
  比如变量、嵌套、混合宏等，使得样式表更易于维护和编写。 -->
<style lang="less">
#app { //表明该样式是应用到 id 为 app 的元素上 #app的样式，
  //是一个全局样式，或者叫默认样式，如果嵌套的组件中没有定义样式，则使用这个样式
  font-family: Avenir, Helvetica, Arial, sans-serif; // 设置字体系列，优先使用 Avenir，如果没有则使用 Helvetica，依次类推
  -webkit-font-smoothing: antialiased; // 对于 WebKit 浏览器，使用抗锯齿平滑字体
  -moz-osx-font-smoothing: grayscale;  // 对于 Firefox 浏览器在 macOS 上，使用灰度平滑字体
  text-align: center; // 文本居中对齐
  color: #e80f0f;
}

nav { // 导航栏样式
  padding: 30px; // 内边距

  a { // 链接样式,嵌套在 nav 元素中
    font-weight: bold; // 加粗字体
    color: #2c3e50; // 字体颜色
    &.router-link-exact-active { // 当路由匹配成功时，应用该样式
      color: #42b983; // 字体颜色为绿色
    }
  }
}
</style>

