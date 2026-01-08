<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
//定义昼夜温度模型接口
interface DayNightModel {
  day?: string
  night?: string
}
//定义天气信息模型接口
interface WeatherModel {
  //天气
  weather?: string
  //温度
  temperature?: string
  //风向
  direct?: string
  //日期
  date?: string
  //昼夜温度
  wid?: DayNightModel
}
//定义实时气象信息模型接口
interface RealTimeModel {
  //温度
  temperature?: string
  //天气详情
  info?: string
  //风向
  direct?: string
  //风级
  power?: string
  //体感数值
  aqi?: string
  //湿度
  humidity?: string
}
export default defineComponent({
  name: 'Weather_Project',
  setup() {
    const city = ref<string>('')
    const plc = ref<string>('暂无数据')
    let weatherData: any
    const todayData = ref<WeatherModel>({})//类型为WeatherModel，初始值为空
    const realData = ref<RealTimeModel>({})
    const futureData = ref<WeatherModel[]>([])
    const errorMessage = ref<string | null>(null)
    function submitCity() {
      const cityValue: string = encodeURI(city.value)
      requestData(cityValue)
    }
    const instance = axios.create({
      baseURL: '/myApi',
      timeout: 5000,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })

    function requestData(cityValue: string) {
      let api = `simpleWeather/query?city=${cityValue}&key=0c9b55e3fa0bf6758aa59bc7673d0a05`
      instance
        .get(api)
        .then((res) => {
          console.log(JSON.stringify(res.data))
          weatherData = res.data
          todayData.value = weatherData?.result.future[0]
          realData.value = weatherData?.result.realtime
          futureData.value = weatherData?.result.future
          errorMessage.value = null
          //如果 weatherData存在,并且 result 属性存在，
          //则程序会尝试访问 future 数组的第一个元素
          //weatherData?.result.future[0] 使用了可选链运算符 ?.，
          //它用于安全地访问嵌套对象的属性。
          //如果 weatherData 为 null 或 undefined，则整个表达式会短路，
          //不会抛出错误，而是返回 undefined。
        })
        .catch((err) => {
          errorMessage.value = '请求失败，请检查网络或城市名称'
          console.log(err)
        })
    }
    return {
      city,
      plc,
      errorMessage,
      todayData,
      realData,
      futureData,
      submitCity,
    }
  },
})
</script>


<template>
  <el-container class="container">
    <el-header >
      <el-input class='input' placeholder="请输入城市名称" v-model="city"
        @keyup.enter="submitCity" />
      <el-button class="button" type="primary" @click="submitCity">查询</el-button>
    </el-header>
    <el-main class="main">
      <div class="today">
        今日：
        <span> {{ todayData.weather ?? plc }}
          {{ todayData.temperature ?? plc }}</span>
        <span style="margin-left: 20px;"> {{ todayData.direct ?? plc }}</span>
        <span style="margin-left: 100px;"> {{ todayData.date ?? plc }}</span>
      </div>
      <div class="real">
        <span class="temp">{{ realData.temperature ?? plc }}°C</span>
        <span class="realInfo" style="margin-left: 20px;">{{ realData.info ?? plc }}</span>
        <span class="realInfo" style="margin-left: 20px;">{{ realData.direct ?? plc }}</span>
        <span class="realInfo" style="margin-left: 20px;">{{ realData.power ?? plc }}</span>
      </div>
      <div class="real">
        <span class="realInfo" style="margin-left: 20px;">空气质量：{{ realData.aqi ?? plc }}</span>
        <span class="realInfo" style="margin-left: 20px;">湿度：{{ realData.humidity ?? plc }}</span>
      </div>
      <div class="future">
        <div class="header">天气预报</div>
        <el-table :data="futureData" style="margin-top:30px;" >
          <el-table-column prop="date" label="日期" > </el-table-column>
          <el-table-column prop="weather" label="天气"> </el-table-column>
          <el-table-column prop="temperature" label="温度"></el-table-column>
          <el-table-column prop="direct" label="风向"></el-table-column>
        </el-table>
      </div>
    </el-main>
  </el-container>
</template>

<style scoped>
.container {
  background: linear-gradient(rgb(13,104,188),rgb(54,131,195));
  /* 背景样式，其中 linear-gradient 表示线性渐变。 */
}
.input {
  width: 300px;
  margin-top:20px;/* 与上方相邻元素的距离 */
}
.button {
  margin-left: 10px;
  margin-top:20px;/* 与上方相邻元素的距离 */
  width: 80px;
}
.today {
  font-size:20px;
  color: white;
}
.temp {
  font-size:79px;
  color: white;}
.realInfo{
  color: white;}
.future{
  margin-top:40px;}
.header{
  color: white;
  font-size:27px;
}
</style>
