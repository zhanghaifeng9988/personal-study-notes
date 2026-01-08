<template>

  <div>本次测试axios,今日太原天气</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import axios from 'axios'
export default defineComponent({
  name: 'Aoxis_Test',
  setup() {
    //也可以设置axios的默认配置
    //axios.defaults.baseURL = '/myApi'
    //axios.defaults.timeout = 2000
    //axios.defaults.headers.common['X-Custom-Header'] = 'custom'

    // 创建axios实例  ,可以复用instance
    const instance = axios.create({
      baseURL: '/myApi',
      timeout: 2000,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    // 设置拦截器，统一在请求前进行弹窗，如果请求错误，则统一捕获处理
    instance.interceptors.request.use(
      (config) => {
        // 第1个参数，在发送请求之前得行为，成功回调
        alert('请求将要开始')
        alert(JSON.stringify(config))
        return config //必须返回config，否则请求将不会发送,config是请求的配置信息
      },
      (error) => {
        //第2个参数，处理请求错误
        // 对请求错误做些什么，错误回调
        alert('请求出现错误')
        return Promise.reject(error) //必须返回一个promise，否则会报错,reject是静态方法
      },
    )
    //发起请求
    onMounted(() => {
      //let  api="http://apis.juhe.cn/simpleWeather/query?key=0c9b55e3fa0bf6758aa59bc7673d0a05&city=%E5%A4%AA%E5%8E%9F"
      /*  axios.get('/myApi' + api)
      .then(res => {
        console.log(res.data)
        alert(JSON.stringify(res.data))
      })
      .catch(err => {
        console.log(err)
        alert(JSON.stringify(err))
      })
      // 这个代码使用了代理得方式，进行了目标地址得解析，/myApi 指向了 api
      // 这个配置在vue.config.js中设置：proxy:{//对以/myApi开头的请求进行代理
      */

      let city = '北京'
      city = encodeURI(city)
      let api = `simpleWeather/query?city=${city}&key=0c9b55e3fa0bf6758aa59bc7673d0a05`
      instance
        .get(api)
        .then((res) => {
          alert(JSON.stringify(res.data))
        })
        .catch((err) => {
          alert(JSON.stringify(err))
        })
      // instance.get(api)
      //.then(res => {
      //   console.log(res.data)
      //   alert(JSON.stringify(res.data))
      // })
      //.catch(err => {
      //   console.log(err)
      //   alert(JSON.stringify(err))
      // })
    })
    return {}
  },
})
</script>

<style scoped></style>
