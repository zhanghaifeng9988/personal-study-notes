const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
configureWebpack: {
    devtool: 'source-map'
  },  
transpileDependencies: true,
devServer:{
proxy:{
//对以/myApi开头的请求进行代理
'/myApi':{
//将请求目标指定到接口服务地址
target:'http://apis.juhe.cn/',
//设置允许跨域
changeOrigin: true,
//设置非HTTPS请求
secure:false,
//重写路径，将/myApi 即之前的内容清除
pathRewrite:{
'^/myApi':''}
      }
    }
  }
})


